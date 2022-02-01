export class App {
  configureRouter(config, router) {
    config.title = 'Essential JS 1 for Aurelia';

    config.map([
      { name: 'home',             route: '',                  redirect: 'about/about' },
      { name: 'about',             route: 'about',                moduleId: 'about/about',                 title: 'About' },
      { name: 'help',              route: 'help',                       moduleId: 'help/help',                   title: 'Help' },
      { name: 'docs',              route: 'help/docs/:category/:file',  moduleId: 'help/help',                   title: 'Help' },
      { name: 'installation',      route: 'installation',               moduleId: 'installation/installation',   title: 'Installation' },
      { name: 'project-status',    route: 'project-status',             moduleId: 'project-status/controls',     title: 'Project status'},
      { name: 'samples',           route: 'samples',                    moduleId: 'samples/index',               title: 'Samples' },
      { name: 'dashboard',         route: 'dashboard',                  moduleId: 'dashboard/index',             title: 'Dashboard' },
      { name: 'dashboard-samples', route: 'dashboard/samples',          moduleId: 'dashboard/samples/index',     title: 'Dashboard' }
    ]);

    this.router = router;
  }
}
