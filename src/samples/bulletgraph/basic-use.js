export class BasicUse {
  constructor() {
    this.quantitativeScaleSettings = {location: {x: 110, y: 10}, minimum: 0, maximum: 10, interval: 1, minorTicksPerInterval: 4, majorTickSettings: {size: 13, width: 1, stroke: 'gray'}, minorTickSettings: {size: 5, width: 1, stroke: 'gray'}, tickPosition: ej.datavisualization.BulletGraph.TickPosition.Far, labelSettings: {position: ej.datavisualization.BulletGraph.LabelPosition.Below, offset: 14, size: 10}, featuredMeasureSettings: {width: 6}, comparativeMeasureSettings: {width: 5}, featureMeasures: [{value: 8, comparativeMeasureValue: 6.7}]};
    this.qualitativeRanges = [{rangeEnd: 4.3}, {rangeEnd: 7.3}, {rangeEnd: 10}];
    this.captionSettings = {textAngle: 0, location: {x: 17, y: 20}, text: 'Revenue YTD', font: {color: null, fontFamily: 'Segoe UI', fontStyle: ej.datavisualization.BulletGraph.FontStyle.Normal, size: '12px', fontWeight: ej.datavisualization.BulletGraph.FontWeight.Normal, opacity: 1}, subTitle: {textAngle: 0, text: '$ in Thousands', location: {x: 10, y: 35}, font: {color: null, fontFamily: 'Segoe UI', fontStyle: ej.datavisualization.BulletGraph.FontStyle.Normal, size: '12px', fontWeight: ej.datavisualization.BulletGraph.FontWeight.Normal, opacity: 1}}};
    this.quantitativeScaleSettings1 = {location: {x: 110, y: 10}, minimum: -10, maximum: 10, interval: 2, minorTicksPerInterval: 4, majorTickSettings: {size: 13, width: 1}, minorTickSettings: {size: 5, width: 1}, tickPosition: ej.datavisualization.BulletGraph.TickPosition.Far, labelSettings: {position: ej.datavisualization.BulletGraph.LabelPosition.Below, offset: 14, size: 10, labelSuffix: ' %'}, featuredMeasureSettings: {width: 6}, comparativeMeasureSettings: {width: 5}, featureMeasures: [{value: 8, comparativeMeasureValue: 6.7}]};
    this.qualitativeRanges1 = [{rangeEnd: -4, rangeStroke: '#61a301'}, {rangeEnd: 3, rangeStroke: '#fcda21'}, {rangeEnd: 10, rangeStroke: '#d61e3f'}];
    this.captionSettings1 = {textAngle: 0, location: {x: 60, y: 25}, text: 'Profit', font: {color: null, fontFamily: 'Segoe UI', fontStyle: ej.datavisualization.BulletGraph.FontStyle.Normal, size: '13px', fontWeight: ej.datavisualization.BulletGraph.FontWeight.Normal, opacity: 1}};
    this.quantitativeScaleSettings2 = {location: {x: 105, y: 10}, minimum: -10, maximum: 10, interval: 2, minorTicksPerInterval: 4, majorTickSettings: {size: 13, width: 1, stroke: 'gray'}, minorTickSettings: {size: 5, width: 1, stroke: 'gray'}, tickPosition: ej.datavisualization.BulletGraph.TickPosition.Far, labelSettings: {position: ej.datavisualization.BulletGraph.LabelPosition.Below, offset: 14, size: 10, labelSuffix: ' %' }, featuredMeasureSettings: {width: 6}, comparativeMeasureSettings: {width: 5}, featureMeasures: [{value: -2, comparativeMeasureValue: -2}]};
    this.qualitativeRanges2 = [{rangeEnd: -4.3}, {rangeEnd: 4.3}, {rangeEnd: 10}];
    this.captionSettings2 = {textAngle: 0, location: {x: 38, y: 25}, text: 'Expenses', font: {color: null, fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1}};
    this.quantitativeScaleSettings3 = {location: {x: 105, y: 10}, minimum: 0, maximum: 10, interval: 1, minorTicksPerInterval: 4, majorTickSettings: {size: 13, width: 1}, minorTickSettings: {size: 5, width: 1}, tickPosition: ej.datavisualization.BulletGraph.TickPosition.Far, labelSettings: {position: ej.datavisualization.BulletGraph.LabelPosition.Below, offset: 14, size: 10, labelPrefix: '$ ', labelSuffix: 'K'}, featuredMeasureSettings: {width: 6}, comparativeMeasureSettings: {width: 5}, featureMeasures: [{value: 8, comparativeMeasureValue: 6.7}]};
    this.qualitativeRanges3 = [{rangeEnd: 4.3, rangeStroke: '#61a301', rangeOpacity: 1}, {rangeEnd: 7.3, rangeStroke: '#fcda21', rangeOpacity: 1}, {rangeEnd: 10, rangeStroke: '#d61e3f', rangeOpacity: 1}];
    this.captionSettings3 = {textAngle: 0, location: {x: 17, y: 20}, text: 'Revenue YTD', font: {color: null, fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '12px', fontWeight: 'regular', opacity: 1}, subTitle: {textAngle: 0, text: '$ in Thousands', location: {x: 10, y: 35}, font: {color: null, fontFamily: 'Segoe UI', fontStyle: 'Normal ', size: '12px', fontWeight: 'regular', opacity: 1}}};
  }
  onLoad(sender) {
	let bulletObj = sender.detail;	
	this.update.loadBulletTheme(bulletObj);
    if(bulletObj.model.theme.includes("dark") || bulletObj.model.theme.includes('contrast')){
		bulletObj.model.quantitativeScaleSettings.labelSettings.stroke = "white";
		bulletObj.model.captionSettings.font.color ="white";
		bulletObj.model.captionSettings.subTitle.font.color ="white";
	}
	else{
	    bulletObj.model.quantitativeScaleSettings.labelSettings.stroke = "black";
		bulletObj.model.captionSettings.font.color ="black";
		bulletObj.model.captionSettings.subTitle.font.color ="black";
	}	
  }
  
 
}
