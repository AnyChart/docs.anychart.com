{:index 1.5}
# Heat Map Chart

* [Overview](#overview)
* [Chart](#chart)
* [Coloring](#coloring)
  * [Direct Coloring](#direct_coloring)
  * [Color Scale](#color_scale)
* [Visualization](#visualization)
* [Labels](#labels)
* [Tooltip](#tooltip)
* [Scroller](#scroller)

## Overview

AnyChart JavaScript Heat map is a graphical representation of data where the individual values contained in a matrix are represented as colors. This article will tell you how to work with Heat map charts in AnyChart JavaScript Charting Library.

## Chart 

Each data point for a heat map chart must have three parameters: **"x"** parameter should define the name of the column to put the point into, **"y"** parameter defines the row to put the point into and **"heat"** parameter is the point's value (**"heat"** parameter can be omitted when you are using [direct coloring](#direct_coloring)). Later the heat map points will be colored due to the [colorScale](#color_scale) ranges, which are based on these values. Here is a sample of appropriate data formatting:

```
var dataSet = anychart.data.set([
  {x: "Quarter 1", y: "Mobile", heat: 15},
  {x: "Quarter 2", y: "Mobile", heat: 17},
  {x: "Quarter 3", y: "Mobile", heat: 21},
  {x: "Quarter 4", y: "Mobile", heat: 23},
  {x: "Quarter 1", y: "WebMail", heat: 34},
  {x: "Quarter 2", y: "WebMail", heat: 33},
  {x: "Quarter 3", y: "WebMail", heat: 32},
  {x: "Quarter 4", y: "WebMail", heat: 30},
  {x: "Quarter 1", y: "Desktop", heat: 43},
  {x: "Quarter 2", y: "Desktop", heat: 42},
  {x: "Quarter 3", y: "Desktop", heat: 40},
  {x: "Quarter 4", y: "Desktop", heat: 38},
  {x: "Quarter 1", y: "Undetected", heat: 8},
  {x: "Quarter 2", y: "Undetected", heat: 8},
  {x: "Quarter 3", y: "Undetected", heat: 7},
  {x: "Quarter 4", y: "Undetected", heat: 8}
]);

var chart = anychart.heatMap(dateSet);
```

Moreover, you can use an array of arrays without any parameters as a data source - in this case you'll need to map your data later:

```
var data = [
  ["Quarter 1", "Mobile", 15],
  ["Quarter 2", "Mobile", 17],
  ["Quarter 3", "Mobile", 21],
  ["Quarter 4", "Mobile", 23],
  ["Quarter 1", "WebMail", 34],
  ["Quarter 2", "WebMail", 33],
  ["Quarter 3", "WebMail", 32],
  ["Quarter 4", "WebMail", 30],
  ["Quarter 1", "Desktop", 43],
  ["Quarter 2", "Desktop", 42],
  ["Quarter 3", "Desktop", 40],
  ["Quarter 4", "Desktop", 38],
  ["Quarter 1", "Undetected", 8],
  ["Quarter 2", "Undetected", 8],
  ["Quarter 3", "Undetected", 7],
  ["Quarter 4", "Undetected", 8],
];

// define the column for each parameter
var dataSet = data.mapAs({
  x: [0],
  y: [1],
  heat: [2]
});

var chart = anychart.heatMap(dataSet);
```

As you can see, the data set is used as a parameter for  the {api:anychart#heatMap}heatMap(){api} method.
  
Here is a heat map with the data from above:

{sample}BCT\_HeatMapChart\_01{sample}

## Coloring

While the majority of chart types represent differences in values of data points via series shapes on data plot the heat maps displays all differences with colors. That is why this section is quite important.

### Color Scale

There are several ways of managing heat map's colors. The best one of them all is using a {api:anychart.charts.HeatMap#colorScale}colorScale(){api} method to define heat map's colors. Use {api:anychart.scales.OrdinalColor}ordinalColor(){api} scale as a parameter for {api:anychart.charts.HeatMap#colorScale}colorScale(){api} method to create an array of ranges and define the color for each range. All values for ranges are to be defined by a user.

```
var chart = anychart.heatMap(dataSet);

// create linerColor scale
var colorScale = anychart.scales.ordinalColor();
// set range of heat parameter's values and corresponding colors
colorScale.ranges([
  // set color for all points with the heat parameter less than 1200000
  {less: 1200000, color: "#B2DFDB"},
  // set color for all points with the heat parameter more than 1200000 but less than 3000000
  {from: 1200000, to: 3000000, color: "#004D40"},
  // set color for all points with the heat parameter more than 3000000
  {greater: 3000000, color: "#004D40"}
]);

// apply colorScale for colorizing heat map chart
chart.colorScale(colorScale);
```

Here is a sample of a heat map with {api:anychart.scales.OrdinalColor}ordinalColor(){api} scale:

{sample}BCT\_HeatMapChart\_02{sample}

### Direct Coloring

Along with using color scale you can specify visual settings for an individual point. There are several sets for managing points visual appearance:

* **fill** sets inner color of the point.
* **hoverFill** sets point's inner color while a mouse is over the point.
* **stroke** sets points border.
* **hoverStroke** sets points border while a mouse is over the point.

```
var chart = anychart.heatMap([
  {x: "Rare",             y: "Insignificant",  heat: 0, fill: "#9ACD32"},
  {x: "Rare",             y: "Minor",          heat: 0, fill: "#9ACD32"},
  {x: "Rare",             y: "Moderate",       heat: 0, fill: "#9ACD32"},
  {x: "Rare",             y: "Major",          heat: 0, fill: "#9ACD32"},
  {x: "Rare",             y: "Extreme",        heat: 0, fill: "#9ACD32"},
  {x: "Unlikely",         y: "Insignificant",  heat: 0, fill: "#9ACD32"},
  {x: "Unlikely",         y: "Minor",          heat: 0, fill: "#9ACD32"},
  {x: "Unlikely",         y: "Moderate",       heat: 0, fill: "#9ACD32"},
  {x: "Unlikely",         y: "Major",          heat: 1, fill: "#FFFF00"},
  {x: "Unlikely",         y: "Extreme",        heat: 1, fill: "#FFFF00"},
  {x: "Possible",         y: "Insignificant",  heat: 0, fill: "#9ACD32"},
  {x: "Possible",         y: "Minor",          heat: 0, fill: "#9ACD32"},
  {x: "Possible",         y: "Moderate",       heat: 1, fill: "#FFFF00"},
  {x: "Possible",         y: "Major",          heat: 1, fill: "#FFFF00"},
  {x: "Possible",         y: "Extreme",        heat: 1, fill: "#FFFF00"},
  {x: "Likely",           y: "Insignificant",  heat: 0, fill: "#9ACD32"},
  {x: "Likely",           y: "Minor",          heat: 1, fill: "#FFFF00"},
  {x: "Likely",           y: "Moderate",       heat: 1, fill: "#FFFF00"},
  {x: "Likely",           y: "Major",          heat: 2, fill: "#FF6347"},
  {x: "Likely",           y: "Extreme",        heat: 2, fill: "#FF6347"},
  {x: "Almost\nCertain",  y: "Insignificant",  heat: 0, fill: "#9ACD32"},
  {x: "Almost\nCertain",  y: "Minor",          heat: 1, fill: "#FFFF00"},
  {x: "Almost\nCertain",  y: "Moderate",       heat: 1, fill: "#FFFF00"},
  {x: "Almost\nCertain",  y: "Major",          heat: 2, fill: "#FF6347"},
  {
    x: "Almost\nCertain",
    y: "Extreme",
    heat: 3,
    fill: "#FF0000",
    hoverFill: "#AA0000",
    stroke: {color: "#AA0000"},
    hoverStroke: {color: "#550000"}
  }
]);
```

**Note**: You can use only object as values for  **stroke** and **hoverStroke** sets while **fill** and **hoverFill** sets use either string or object as a value. When you set color directly to a point you can omit **"heat"** in a data set.

{sample}BCT\_HeatMapChart\_03{sample}

##Visualization

Even though the {api:anychart.charts.HeatMap#colorScale}colorScale(){api} is the most convenient way of managing heat map's colors you can still set a single color for all points of a heat map and define a color for points' border.

You can set heat map's colors either [in your dataSet](#direct_coloring) or using special methods. The easiest way to set the heat map's color is {api:anychart.charts.HeatMap#fill}fill(){api} method.
  
You can set a solid fill for each cell of the heat map. Use {api:anychart.charts.HeatMap#fill}fill(){api} method to define custom color for every cell. Information on setting a color for a custom range of heat parameters can be found in [Color Scale section](#color_scale). 

```
var chart = anychart.heatMap(dataSet);
// set inner color for every cell
chart.fill("#FFD54F");
```

Along with a single color for all points, you can manage the color of all points' borders. The heat map chart borders are controlled by {api:anychart.charts.HeatMap#stroke}.stroke(){api} method. Alone with {api:anychart.charts.HeatMap#stroke}stroke(){api} method you can set **"stroke"** parameter for an [individual point](#direct_coloring).

```
// create chart
var chart = anychart.heatMap(dataSet);
chart.stroke("#FFF");
```

Here is a sample with solid inner color and adjusted strokes.

{sample}BCT\_HeatMapChart\_04{sample}

## Labels

Labels are text boxes with additional information for presented data. You can tune labels using {api:anychart.charts.HeatMap#labels}labels(){api} method.

```
// create chart
var chart = anychart.heatMap(dataSet);

// labels settings
var labels = chart.labels();
// enable labels
labels.enabled(true);
labels.format(function(){
  // get heat parameter of the point
  var value = (this.heat).toFixed(0);
  return "$" + value
});
```

You can find information on managing labels content in [Text Formatters article](../Common_Settings/Text_Formatters).

Here is a sample of a js Heat map with formatted labels.

{sample}BCT\_HeatMapChart\_05{sample}

Heat map is a kind of chart that usually contains quite a few points in dataSet. That is why heat maps have special {api:anychart.charts.HeatMap#labelsDisplayMode}labelsDisplayMode(){api} method for managing labels appearance on the chart plot. There are three possible modes of displaying labels: **"clip"**, **"drop"**, **"alwaysShow"**.

* **"Clip"** parameter makes all labels be displayed regardless the width of each point. If a label doesn't fit the point width, a part of this label will be cropped.
* **"Drop"** parameter hides the whole label, if it doesn't fit point's width
* **"AlwaysShow"** parameter force all labels to be shown despite the situation. Be careful using this parameter. Labels may overlap, if label's width is larger than point's width.
  
{sample :width 690 :height 725}BCT\_HeatMapChart\_06{sample}

## Tooltip

In this section we will explain how to tune heat map's tooltip. Method {api:anychart.charts.HeatMap#tooltip}tooltip(){api} controls tooltip of the heat map. In [Tooltip](../Common_Settings/Tooltip) article you can find some information on how to adjust tooltip content and tooltip visual appearance.

```
chart = anychart.heatMap(dataSet);

var tooltip = chart.tooltip();
var title = tooltip.title();
title.hAlign("center");
tooltip.titleFormat("{%y}");
tooltip.format(function(){
  return "Month: " + this.x + "\nOpens: " + this.heat + "%";
});
```

{sample}BCT\_HeatMapChart\_07{sample}

## Scroller

As far as AnyChart doesn't limit the number of points on a chart, you may face a problem of having too many data points on your chart plot. The solution of this problem is simple: use {api:anychart.charts.Cartesian#xScroller}xScroller(){api} and {api:anychart.charts.Cartesian#yScroller}yScroller(){api} methods. These methods create scrollers on the chart plot and limits the amount of visible data points at the same time.
  
  
You can manage chart's zoomed space using {api:anychart.charts.Cartesian#xZoom}xZoom(){api} and {api:anychart.charts.Cartesian#yZoom}yZoom(){api} methods. More information on scroller and zoom managing can be found in [Scroller article](../Common_Settings/Scroller).

```
// create horizontal chart scroller
var xScroller = chart.xScroller();
// scroller settings
xScroller.enabled(true);

// enables zoom on chart by default
var xZoom = chart.xZoom();
// define the number of visible points at the same time
xZoom.setToPointsCount(8);

// create vertical chart scroller
var yScroller = chart.yScroller();
// scroller settings
yScroller.enabled(true);

// enables zoom on chart by default
var yZoom = chart.yZoom();
// define the number of visible points at the same time
yZoom.setToPointsCount(6);
```

Here is a sample of html5 Heat map chart with horizontal and vertical scrollers:

{sample}BCT\_HeatMapChart\_08{sample}
