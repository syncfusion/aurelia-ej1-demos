import { inject } from 'aurelia-framework';
import { activationStrategy } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
import { TaskQueue } from 'aurelia-framework';
import { AnalyticsComponent } from './analytics';
@inject(EventAggregator, TaskQueue, AnalyticsComponent)
export class SampleRunner {

  constructor(ea, taskQueue, AnalyticsComponent) {
    this.taskQueue = taskQueue;
    this.ea = ea;
    this.AnalyticsComponent = AnalyticsComponent;
  }

  activate(params, route, AnalyticsComponent) {
    let sample = route.navModel.config.sample;
    if (!sample) throw new Error('Route does not contain a \'sample\' property');
    this.sample = sample;
    this.unsubscribe = this.ea.subscribe('Theme', () => this.restart());
    this.AnalyticsComponent.analyticsLogmodel['PageUrl'] = window.location.href;
    this.AnalyticsComponent.postRequest(this.AnalyticsComponent.analyticsLogmodel);
  }

  restart() {
    let old = this.sample;
    this.sample = undefined;
    this.taskQueue.queueTask(() => {
      this.sample = old;
    });
  }

  determineActivationStrategy() {
    return activationStrategy.replace;
  }
}
