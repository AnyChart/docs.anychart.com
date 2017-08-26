{:index 1.5}
# Heat Map Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Data](#data)
  * [Appearance](#appearance)
  * [Color Scale](#color_scale)
  * [Labels](#labels)
  * [Tooltips](#tooltips)
  * [Scrollers](#scrollers)

## Overview

[AnyChart JavaScript Heat map is a graphical representation of data where the individual values contained in a matrix are represented as colors. This article will tell you how to work with Heat map charts in AnyChart JavaScript Charting Library.]

This article explains how to create a basic Area chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Area chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.HeatMap}anychart.core.cartesian.series.Area{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value, heat](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Tree Map](Tree_Map_Chart)</td></tr>
<tr><td></td><td>[Choropleth Map](../Maps/Choropleth_Map)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/heatmap/" target="_blank">Chartopedia: Heat Map Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Heat Map chart, use the {api:anychart#heatMap}anychart.heatMap(){api} chart constructor, like in the following sample:

```
// create data
var data = [
  {x: "2010", y: "A", heat: 15},
  {x: "2011", y: "A", heat: 17},
  {x: "2012", y: "A", heat: 21},
  {x: "2010", y: "B", heat: 34},
  {x: "2011", y: "B", heat: 33},
  {x: "2012", y: "B", heat: 32},
  {x: "2010", y: "C", heat: 51},
  {x: "2011", y: "C", heat: 50},
  {x: "2012", y: "C", heat: 47}
];

// create a chart and set the data
chart = anychart.heatMap(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Heat\_Map\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Heat Map chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

### Special Settings

### Data

```
// create data
var data = [
  {x: "2010", y: "A", heat: 15},
  {x: "2011", y: "A", heat: 17},
  {x: "2012", y: "A", heat: 21},
  {x: "2013", y: "A", heat: 23},
  {x: "2010", y: "B", heat: 34},
  {x: "2011", y: "B", heat: 33},
  {x: "2012", y: "B", heat: 32},
  {x: "2013", y: "B", heat: 30},
  {x: "2010", y: "C", heat: 43},
  {x: "2011", y: "C", heat: 42},
  {x: "2012", y: "C", heat: 40},
  {x: "2013", y: "C", heat: 38},
  {x: "2010", y: "D", heat: 8},
  {x: "2011", y: "D", heat: 8},
  {x: "2012", y: "D", heat: 7},
  {x: "2013", y: "D", heat: 8}
];

// create a chart and set the data
chart = anychart.heatMap(data);
```

{sample}BCT\_Heat\_Map\_Chart\_02{sample}

### Appearance

* **fill**
* **hoverFill**
* **stroke** ({api:anychart.charts.HeatMap#stroke}.stroke(){api})
* **hoverStroke**

```
// configure visual settings
chart.hoverFill("gray", 0.4);
chart.selectFill("gray", 0.6);
chart.selectHatchFill("backwardDiagonal", "gray", 2, 20);
chart.stroke("gray");
chart.hoverStroke("gray");
chart.selectStroke("gray", 2);
```

{sample}BCT\_Heat\_Map\_Chart\_03{sample}

[**Note**: You can use only object as values for  **stroke** and **hoverStroke** sets while **fill** and **hoverFill** sets use either string or object as a value. When you set color directly to a point you can omit **"heat"** in a data set.]

```
// create data
var data = [
  {x: "1", y: "A", fill: "#ffcc00"},
  {x: "1", y: "B", fill: "#ffcc00"},
  {x: "1", y: "C", fill: "#ff9933"},
  {x: "1", y: "D", fill: "#ff9933"},
  {x: "2", y: "A", fill: "#ffcc00"},
  {x: "2", y: "B", fill: "#ff9933"},
  {x: "2", y: "C", fill: "#ff9933"},
  {x: "2", y: "D", fill: "#ff9933"},
  {x: "3", y: "A", fill: "#ff9933"},
  {x: "3", y: "B", fill: "#ff9933"},
  {x: "3", y: "C", fill: "#ff6600"},
  {x: "3", y: "D", fill: "#ff6600"},
  {x: "4", y: "A", fill: "#ff9933"},
  {x: "4", y: "B", fill: "#ff9933"},
  {x: "4", y: "C", fill: "#ff6600"},
  {
    x: "4",
    y: "D",
    fill: "#ff0000",
    hoverFill: "#ff0000",
    selectFill: "#b30059",
    stroke: {color: "#b30059", thickness: 4},
    hoverStroke: {color: "white", thickness: 5},
    selectStroke: {color: "white", thickness: 5}
  }
];

// create a chart and set the data
chart = anychart.heatMap(data);
```

{sample}BCT\_Heat\_Map\_Chart\_04{sample}

### Color Scale

* {api:anychart.charts.HeatMap#colorScale}colorScale(){api}
* {api:anychart.scales.OrdinalColor}ordinalColor(){api}
* {api:anychart.charts.HeatMap#colorScale}colorScale(){api}

```
// create and configure a color scale.
var customColorScale = anychart.scales.linearColor();
customColorScale.colors(["#00ccff", "#ffcc00"]);

// set the color scale as the color scale of the chart
chart.colorScale(customColorScale);
```

{sample}BCT\_Heat\_Map\_Chart\_05{sample}

```
// create and configure a color scale.
var customColorScale = anychart.scales.ordinalColor();
customColorScale.ranges([
  {less: 20},
  {from: 20, to: 40},
  {greater: 40}
]);
customColorScale.colors(["lightgray", "#00ccff", "#ffcc00", ]);

// set the color scale as the color scale of the chart
chart.colorScale(customColorScale);
```

{sample}BCT\_Heat\_Map\_Chart\_06{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

```
// configure labels
chart.labels().format("{%Heat}%");
```

{sample}BCT\_Heat\_Map\_Chart\_07{sample}

```
// enable HTML for labels
chart.labels().useHtml(true);

// configure labels
chart.labels().format(function(){
  var heat = (this.heat);
  if (heat < 20)
    return "Low<br/>" + heat + "%";
  if (heat < 40)
    return "Medium<br/>" + heat + "%";
  if (heat >= 40)
    return "<span style='font-weight:bold'>High</span><br/>" + heat + "%";
});
```
{sample}BCT\_Heat\_Map\_Chart\_08{sample}

* {api:anychart.charts.HeatMap#labelsDisplayMode}labelsDisplayMode(){api}
* **"clip"**
* **"drop"**
* **"alwaysShow"**

* [**"Clip"** parameter makes all labels be displayed regardless the width of each point. If a label doesn't fit the point width, a part of this label will be cropped.]
* [**"Drop"** parameter hides the whole label, if it doesn't fit point's width]
* [**"AlwaysShow"** parameter force all labels to be shown despite the situation. Be careful using this parameter. Labels may overlap, if label's width is larger than point's width.]

```
// change the display mode
chart.labelsDisplayMode("clip");
```
  
{sample}BCT\_Heat\_Map\_Chart\_09{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

```
// configure tooltips
chart.tooltip().format("{%Y}: {%Heat}%");
```

{sample}BCT\_Heat\_Map\_Chart\_10{sample}

```
// configure tooltips
chart.tooltip().format(function(){
  var heat = (this.heat);
  if (heat < 20)
    return this.y + ": Low (" + heat + "%)";
  if (heat < 40)
    return this.y + ": Medium (" + heat + "%)";
  if (heat >= 40)
    return this.y + ": High (" + heat + "%)";
});
```

{sample}BCT\_Heat\_Map\_Chart\_11{sample}

### Scrollers

* {api:anychart.charts.Cartesian#xScroller}xScroller(){api}
* {api:anychart.charts.Cartesian#yScroller}yScroller(){api} 
* {api:anychart.charts.Cartesian#xZoom}xZoom(){api}
* {api:anychart.charts.Cartesian#yZoom}yZoom(){api}
* [Scroller](../Common_Settings/Scroller)

[y-scroller есть только у этого типа]

```
// enable and configure scrollers
chart.xScroller().enabled(true);
chart.xZoom().setToPointsCount(8);
chart.yScroller().enabled(true);
chart.yZoom().setToPointsCount(4);
```

{sample}BCT\_Heat\_Map\_Chart\_12{sample}
