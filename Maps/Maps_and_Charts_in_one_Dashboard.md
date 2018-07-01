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
var data = [
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
```

At first we create a container which is stage now. Read more about stage-based dashboards [here](../../Dashboards/Stage-Based_Layout).

Then we should not forget about the bounds to define where charts are displayed.

```
var map = anychart.map();
map.geoData(anychart.maps.australia);
map.title('Australia Map');
map.choropleth(data);
map.bounds(0, 0, '100%', '70%');
map.container(stage);
map.draw();

var area = anychart.area();
area.title('Spline Area Chart');
area.bounds(0, '70%', '100%', '30%');
area.splineArea(data);
area.container(stage);
area.draw();
```

