# HeatMap Chart

* [Overview](#overview)
* [Chart](#chart)
* [Coloring](#coloring)
  * [Direct Coloring](#direct_coloring)
  * [Color Scale](#color_scale)
  * [Stroke](#stroke)
  * [from Data](#from_data)
* [Labels](#labels)
* [Tooltips](#tooltips)
* [Scroller](#scroller)

## Overview

AnyChart JavaScript HeatMap is a graphical representation of data where the individual values contained in a matrix are represented as colors. 

## Chart 

Each data point for HeatMap chart must have three parameters: **"x"** parameter should define the name of the column to put the point into, **"y"** parameter defines the row to put the point into and **"heat"** parameter corresponds with the color of the point. Here is a sample of appropriate data formatting:

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

Moreover, you can use an array of arrays without any parameters as a data source and map your data later:

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

As you can see, you have to use your data set as a parameter for {api:anychart#heatMap}**.heatMap()**{api} method to create a HeatMap.
  
Here is a HeatMap with the data from above:

{sample}BCT\_HeatMapChart\_01{sample}

## Coloring

While as most types of charts represent differences in values of data points via series shapes on data plot the HeatMaps displays all differences with colors. That is why this section is quite important.

### Direct Coloring

There are different ways to manage HeatMap's colors. You can set colors ether in your dataSet or using special
methods. The easiest way to set HeatMap's color is {api:anychart.charts.HeatMap#fill}**.fill()**{api} method.


You can set a solid color for each cell of the HeatMap. Use {api:anychart.charts.HeatMap#fill}**.fill()**{api} method to define custom color for every cell. <!--In addition to **.fill()** method, **"fill"** parameter can be used to emphasize a chart point:-->

```
  var chart = anychart.heatMap(dataSet);
  // set inner color for every cell
  chart.fill("#FFFFE0");
```

{sample}BCT\_HeatMapChart\_05{sample}

### Color Scale

Even though you can set single solid color for every cell, this way of color managing quite contradict with the idea of HeatMaps itself. That is why it is much more appropriate to use a {api:anychart.charts.HeatMap#colorScale}**.colorScale()**{api} method to define HeatMap's colors. Use {api:anychart.scales.OrdinalColor}**.ordinalColor()**{api} scale as a parameter for {api:anychart.charts.HeatMap#colorScale}**.colorScale()**{api} method to create an array of ranges and define the color for each range. All values for ranges are custom.

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

  // apply colorScale for colorizing heatMap chart
  chart.colorScale(colorScale);
```

Here is a sample of a HeatMap with {api:anychart.scales.OrdinalColor}**.ordinalColor()**{api} scale:

{sample}BCT\_HeatMapChart\_02{sample}

### Stroke

Border of the HeatMap chart and all the borders of each chart points are controlled by {api:anychart.charts.HeatMap#stroke}**.stroke()**{api} method.<!-- Alone with **.stroke()** method you can set **"stroke"** parameter for an individual point.-->

```
  // create chart
  var chart = anychart.heatMap(dataSet);
  chart.stroke("#CCC");
```

Here is a sample with adjusted strokes.

{sample}BCT\_HeatMapChart\_06{sample}

### from Data

Along with visualization methods you can specify visual settings for individual point. There are several parameters for managing points visual appearance:

* **fill** parameter defines inner color of the point.
* **hoverFill** defines point's inner color while a mouse is over the point.
* **stroke** parameter defines points border.
* **hoverStroke** parameter defines points border while a mouse is over the point

```
  var data = anychart.data.set([
    {x: "California",    y: "2004", heat: 1704211},
    {x: "California",    y: "2005", heat: 2782680},
    {x: "California",    y: "2006", heat: 2992679},
    {x: "Colorado",      y: "2004", heat: 448302},
    {x: "Colorado",      y: "2005", heat: 768390},
    {x: "Colorado",      y: "2006", heat: 843584},
    {x: "DC",            y: "2004", heat: 693211},
    {x: "DC",            y: "2005", heat: 1215158},
    {x: "DC",            y: "2006", heat: 1053581},
    {x: "Florida",       y: "2004", heat: 405985},
    {x: "Florida",       y: "2005", heat: 661250},
    {x: "Florida",       y: "2006", heat: 811924},
    {x: "Illinois",      y: "2004", heat: 727914},
    {x: "Illinois",      y: "2005", heat: 1150659},
    {x: "Illinois",      y: "2006", heat: 1134085},
    {x: "Texas",         y: "2004", heat: 219967},
    {x: "Texas",         y: "2005", heat: 3732889},
    {
      x: "Texas",
      y: "2006",
      heat: 4185098,
      stroke: {color: "#006400"},
      hoverStroke: {
        thickness: 2,
        color: "#006400"
      },
      fill: "#90EE90",
      hoverFill: {
        keys: ["#A6F1A6", "#73be73"], 
        cx: 0.5,
        cy: 0.5
      }
    },
    {x: "Massachusetts", y: "2004", heat: 238819},
    {x: "Massachusetts", y: "2005", heat: 157719},
    {x: "Massachusetts", y: "2006", heat: 887169},
    {x: "New York",      y: "2004", heat: 1667969},
    {x: "New York",      y: "2005", heat: 2763503},
    {x: "New York",      y: "2006", heat: 3151022}
  ]);

  // create chart
  var chart = anychart.heatMap(dataSet);
  chart.stroke("#CCC");
  chart.fill("#FFFFE0");
```

**Note**: **fill** and **hoverFill** parameters can use both strings and objects with settings while **stroke** and **hoverStroke** parameters use only objects with settings.

{sample}BCT\_HeatMapChart\_10{sample}

### Labels

Labels are text boxes with additional information for presented data. You can tune labels using {api:anychart.charts.HeatMap#labels}**.labels()**{api} method.

```
  // create chart
  var chart = anychart.heatMap(dataSet);
  
  // labels settings
  var labels = chart.labels();
  // enable labels
  labels.enabled(true);
  labels.textFormatter(function(){
    // get heat parameter of the point
    var value = (this.heat).toFixed(0);
    var main = "";
    // if value is more than three symbols long
    for (var i=1;(i*3)<value.length;i++)
      // insert space before every 3 symbols
      main = " " + value.substr(value.length-(i*3), 3) + main;
    // get the remaining part of the value
    var tail = value.substr(0, value.length-(main.length-main.length/4));
    // format value in appropriate way
    value = tail + main;
    return "$" + value
  });
```

You can find information on managing labels content in [Text Formatters article](../Common_Settings/Text_Formatters).
  
  
Here is a sample of a js HeatMap with formatted labels.

{sample}BCT\_HeatMapChart\_03{sample}

HeatMap is a kind of charts that usually contains quite a few points in dataSet. That is why HeatMaps has special {api:anychart.charts.HeatMap#labelsDisplayMode}**.labelsDisplayMode()**{api} method for managing labels appearance on the chart plot. There are three possible parameters for displaying labels: **"clip"**, **"drop"**, **"alwaysShow"**.
  
  
* **"Clip"** parameter makes all labels to be displayed regardless the width of each point. If a label doesn't fit the point width, a part of this label will be cropped.
* **"Drop"** parameter hides the whole label, if it doesn't fit point's width
* **"AlwaysShow"** parameter force all labels to be shown despite the situation. Be careful using this parameter. Labels may overlap, if label's width is larger than point's width.
  
  
{sample :width 690 :height 725}BCT\_HeatMapChart\_08{sample}

### Tooltips

In this section we will explain how to tune HeatMap's tooltip. Method {api:anychart.charts.HeatMap#tooltip}**.tooltip()**{api} controls tooltip of the HeatMap. In [Tooltip](../Common_Settings/Tooltip) article you can find some information on how to adjust tooltip content and tooltip visual appearance.

```
  var chart = anychart.heatMap(dataSet);
  
  // settings for chart tooltip
  var tooltip = chart.tooltip();
  // adjust tooltip title
  var title = tooltip.title();
  // force title to respect html tags
  title.useHtml(true);
  // format title to place text in the center
  title.hAlign("center");
  // function for formatting title's text
  tooltip.titleFormatter(function(){
    return this.x + 
      "<br><a style=\"font-size: 10px; color: #ccc\">Year: "+ this.y + "</a>";
  });
  // function for formatting tooltip text
  tooltip.textFormatter(function(){
    // get heat parameter of the point
    var value = (this.heat).toFixed(0);
    var main = "";
    // if value is more than three symbols long
    for (var i=1;(i*3)<value.length;i++)
      // insert space before every 3 symbols
      main = " " + value.substr(value.length-(i*3), 3) + main;
    // get the remaining part of the value
    var tail = value.substr(0, value.length-(main.length-main.length/4));
    // format value in appropriate way
    value = tail + main;
    return "Income: $" + value + 
      "\nPercent: " + (100*this.heat/this.getStat("sum")).toFixed(1) + "%";
  });
```

{sample}BCT\_HeatMapChart\_04{sample}

## Scroller

As far as AnyChart doesn't limit the number of points on a chart, you may face a problem of having too many data points on your chart plot. The solution of this problem is simple: use {api:anychart.charts.Cartesian#xScroller}**.xScroller()**{api} and {api:anychart.charts.Cartesian#yScroller}**.yScroller()**{api} methods. These methods create scrollers on the chart plot and limits the amount of visible data points at the same time.
  
  
You can manage chart's zoomed space using {api:anychart.charts.Cartesian#xZoom}**.xZoom()**{api} and {api:anychart.charts.Cartesian#yZoom}**.yZoom()**{api} methods. More information on scroller and zoom managing can be found in [Scroller article](../Common_Settings/Scroller).

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

Here is a sample of html5 HeatMap chart with horizontal and vertical scrollers:

{sample}BCT\_HeatMapChart\_11{sample}
