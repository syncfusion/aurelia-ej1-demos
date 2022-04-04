export class BasicUse {
  constructor() {
    this.dataSource = this.getdata(new Date(2009, 0, 1), new Date(2010, 2, 1)).Open;
    this.legend = {visible: false};
    this.style = {borderWidth: 2};
    this.primaryXAxis = {labelFormat: 'MMM/dd', crosshairLabel: {visible: true}};
    this.primaryYAxis = {crosshairLabel: {visible: true}, range: {min: 80, max: 130, interval: 10}};
    this.crosshair = {visible: true};
    this.tooltip = {format: '#point.x#  :  #point.y#'};
    this.selectedRangeSettings = {start: '2009/5/11', end: '2009/8/1'};
    this.scrollRangeSettings = {start: '2009/1/1', end: '2014/2/31'};
    this.sizeSettings = {width: '950', height: '120'};
    this.size = {width: '1000', height: '300'};
  }
  
  
  onScrollbarChanged(sender) {
    let range = sender.detail;
    let startRange;
    let endRange;
    let data;    
    data = sender.detail.data;
    startRange = Date.parse(data.newRange.start);
    endRange = Date.parse(data.newRange.end);
    data = this.getdata(new Date(startRange), new Date(endRange));
    range.model.dataSource = data.Open;    
	this.navi.widget.redraw();
  }
  onLoad() {
    this.update.loadRangeNavigatorTheme();
  }
  onchartload(sender) {
    this.update.loadChartTheme();
    let data = this.getdata(new Date(2009, 0, 1), new Date(2010, 2, 1));
    sender.detail.model.series[0].dataSource = data.Open;
    sender.detail.model.series[0].xName = 'XValue';
    sender.detail.model.series[0].yName = 'YValue';
    if (!ej.util.isNullOrUndefined(window.orientation)) {            //to modify chart properties for mobile view
      let model = sender.detail.model;
      let seriesLength = model.series.length;
      model.title.enableTrim = true;
      model.elementSpacing = 5;
      model.legend.visible = false;
      model.size.height = null;
      model.size.width = null;
      for (let i = 0; i < seriesLength; i++) {
        if (!model.series[i].marker) {
          model.series[i].marker = {};
        }
        if (!model.series[i].marker.size) {
          model.series[i].marker.size = {};
        }
        model.series[i].marker.size.width = 6;
        model.series[i].marker.size.height = 6;
      }
      model.primaryXAxis.labelIntersectAction = 'rotate45';
      model.primaryXAxis.title.text = '';
      model.primaryXAxis.edgeLabelPlacement = 'hide';
      model.primaryYAxis.labelIntersectAction = 'rotate45';
      model.primaryYAxis.title.text = '';
      model.primaryYAxis.edgeLabelPlacement = 'hide';
      if (model.axes) {
        for (let j = 0; j < model.axes.length; j++) {
          model.axes[j].labelIntersectAction = 'rotate45';
          model.axes[j].title.text = '';
          model.axes[j].edgeLabelPlacement = 'hide';
        }
      }
    }
  }
  onchartloaded(sender) {
	setTimeout(() => {
    let chartobj = this.naviChart.widget;
    let start = Date.parse(sender.detail.selectedRangeSettings.start);
    let end = Date.parse(sender.detail.selectedRangeSettings.end);
    let data = this.getdata(new Date(start), new Date(end));
    chartobj.model.series[0].dataSource = data.Open;
    chartobj.model.series[0].xName = 'XValue';
    chartobj.model.series[0].yName = 'YValue';
    chartobj.model.primaryXAxis.labelFormat = 'MMM/dd';
    chartobj.redraw();
	},10)
  }
  getdata(start, end) {
    let series1 = [];
    let date;
    let data1;
    let value = 100;
    let i;
    let point1;
    for (i = 0; start <= end; i++) {
      date = Date.parse(start);
      if (Math.random() > 0.5) {
        value += Math.random();
      } else {
        value -= Math.random();
      }
      point1 = { XValue: new Date(date), YValue: value };
      start = new Date(start.setDate(start.getDate() + 1));
      series1.push(point1);
    }
    data1 = { Open: series1 };
    return data1;
  }
}
