import { bindable } from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
@inject(EventAggregator)
export class NavBar {
  @bindable router = null;

  constructor(ea) {
    this.event = ea;
    this.themeID = window.themeSettings;
    this.dialogAction = ['close', 'pin'];
    this.animation = {
      show: {
        effect: 'fade',
        duration: 700
      },
      hide: {
        effect: 'fade',
        duration: 700
      }
    };
    this.attributes = { class: 'au-theme-dialog' };
  }

  attached() {
    this.navEvent = this.event.subscribe('router:navigation:complete', response => {
      setTimeout(() => {
        let url = window.location.hash;
        if (window.theme_URL) {
          if (url.indexOf('#!') >= 0) {
            let index = url.indexOf('#!');
            let tempURL = url.substr(0, index - 1);
            history.pushState(null, null, tempURL + '/#!/' + window.theme_URL);
          } else {
            history.pushState(null, null, url + '/#!/' + window.theme_URL);
          }
        }
      });
    }, 100);
  }

  showDialog() {
    this.dialogInstance.widget.open();
  }


  higlightMenuItem(args) {
    args.detail.element.classList.add('e-active');
  }
}
