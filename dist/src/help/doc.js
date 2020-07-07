import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import registry from './registry.json!';

@inject(Router, EventAggregator)
export class Doc {

  subscriptions = [];

  constructor(router, ea) {
    this.registry = registry;
    this.router = router;
    this.subscriptions.push(ea.subscribe('router:navigation:complete', e => this.routeChanged(e)));

    // go through all the categories in the json
    // and convert it into an array that allows for easier looping
    this.categories = [];
    for (let categoryKey of Object.keys(this.registry)) {
      let category = {
        name: categoryKey,
        id: this.encode(categoryKey),
        files: this.registry[categoryKey]
      };
      if (category.name.indexOf('_') > -1 || category.files.some(i => i.name.indexOf('_') > -1)) {
        throw new Error('Documentation categories or file names can\t contain underscore (_)');
      }
      this.categories.push(category);
    }
  }

  attached() {
    this.switchPage('1._introduction', 'about_this_application');
  }

  // - adds the page to route params
  // - sets the file path as activeDoc
  // - selects the item in panelbar
  switchPage(fileName, categoryName) {
    let file = this.getFileByName(fileName, categoryName);
    if (file) {
      this.activeDoc = file.path;
      if (window.theme) {
        if (window.theme.indexOf('dark') >= 0 || window.theme.indexOf('contrast') >= 0) {
          this.activeDoc = file.themePath;
        } else {
          this.activeDoc = file.path;
        }
      }
    }
  }

  created() {
    window.onclick = () => {
      if (this.params.file && this.params.category) {
        this.switchPage(this.params.file, this.params.category);
      }
    };
  }

  routeChanged(e) {
    this.params = Object.assign({}, e.instruction.params, e.instruction.queryParams);

    // retrieve categoryname and filename from route params
    let file = this.params.file;
    let cat = this.params.category;

    // if a file and category name is in the route, switch to that page
    if (file && cat) {
      this.switchPage(file, cat);
    }
  }

  routeToPage(fileName, categoryName) {
    this.activeFileName = fileName;
    this.router.navigateToRoute('docs', {
      category: this.encode(categoryName),
      file: this.encode(fileName)
    });
  }

  getFileByName(fileName, categoryName) {
    let cat = this.categories.find(i => this.encode(i.name) === categoryName.toLowerCase());
    if (cat) {
      let file = cat.files.find(i => this.encode(i.name) === fileName.toLowerCase());
      if (file) {
        return file;
      }
    }
  }

  // scroll to top after a doc has been loaded
  // if a anchor is in the route params, scroll to that instead
  scrollToTarget() {
    if (this.params.anchor) {
      setTimeout(() => {
        let container = jQuery(this.markdownCol);
        let scrollTo = jQuery(`#${this.params.anchor}`, this.markdownCol);
        container.animate({
          scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
        });
      }, 200);
    } else {
      jQuery(this.markdownCol).animate({ scrollTop: 0 });
    }
  }

  encode(string) {
    return string.replace(/'|!|@|#|$|%|\^|&|\*|\(|\)|\+|:|"|\?|>|</g, '').replace(/\s/g, '_').toLowerCase();
  }

  detached() {
    this.subscriptions.forEach(i => i.dispose());
  }
}
