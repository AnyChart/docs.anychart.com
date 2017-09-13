{:index 16}
# Maps and Charts in one Dashboard

## Overview

If you need to show some statistics with the maps, then create a dashboard. AnyChart can make dashboards of two types: [table](../../Dashboards/Table_Layout) and [stage-based](../../Dashboards/Stage-Based_Layout). We recommend to create the second one in case of using maps and charts together.

You may create such maps that will show some statistics for regions on click or display different maps for each chart in reverse.

## Simple Dashboard

First of all, look at the simple dashboard with an only map and an only chart.

{sample :width 690 :height 600}Maps\_Dashboard\_01{sample}

```
stage = anychart.graphics.create("container");
var dataSet = anychart.data.set([
	['AU.WA', 300],
	['AU.JB', 230],
	['AU.NS', 240],
	['AU.VI', 275],
	['AU.NT', 130],
	['AU.TS', 190],
	['AU.CT', 100],
	['AU.SA', 305],
	['AU.QL', 190]
]);

// mapping the data to the chart
var chartDataSet = dataSet.mapAs({x: [0], value: [1]});
var mapDataSet = dataSet.mapAs({id: [0], value: [1]});
```
At first we create a container which is stage now. Read more about stage-based dashboards [here](../../Dashboards/Stage-Based_Layout).

We use one dataSet for both map and a chart. Both map and chart have series, so we should define the data, which have to be mapped first to be interpreted correctly.

Then we should not forget about the bounds: unless we don't set them, a map or a chart will become invisible.

```
var mapChart = anychart.map();
mapChart.geoData(anychart.maps.australia);
mapChart.container(stage);
mapChart.title('Australia Map');

// set the series
var series = mapChart.choropleth(mapDataSet);
series.geoIdField('code_hasc');

mapChart.bounds(0, 0, '100%', '70%');
mapChart.draw();

var areaChart = anychart.area();
areaChart.container(stage);
areaChart.title('Spline-Area Chart');
areaChart.bounds(0, '70%', '100%', '30%');

// set the series
areaChart.splineArea(chartDataSet);
areaChart.draw();
			
```

