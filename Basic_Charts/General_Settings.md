{:index 0.45}
# Series General Settings

## Overview

In AnyChart, you always work with a series, no matter what chart type you create. It is the series type that determines what (and how) is drawn on a chart. Please note that it can be changed on-the-fly: [Series Type](Series_Type).

Some series types can be shown on a chart simultaneously, and some cannot. There are chart types that can be only single-series and chart types that can be multi-series. Some series can have both horizontal and vertical orientation. Some  can be drawn in 3D.

However, despite all the differences, many settings are configured in the same way for all series types, and this article is a brief overview of such settings. There are also links to articles where each of the features is explained in more detail.

Methods of the {api:anychart.core.SeriesBase}anychart.core.SeriesBase{api} class in our API are the alternative source of information about general settings.

To learn about the settings that are specific to a certain series type, see the article about that type. For example, to find out what appearance settings are available for the Area series, you should read the [Area Chart](Area_Chart) article.

## Data

To learn how to prepare your data for using it in AnyChart, see this article: [Working with Data](../Working_with_Data).

## Appearance Settings

AnyChart allows you to specify some visual settings of your chart: for example, the stroke and fill color, hatch fill pattern, and so on. All these settings can be configured in three states: **normal**, **hover**, and **selected**. Also, please note that the set of available options depends on the chart type.

You can find more information in the [Appearance Settings](../Appearance_Settings) and [States](../Common_Settings/Interactivity/States) aticles as well as articles about particular chart types.

In the sample below, there is an Area and two Line series with appearance settings (fill, hatch fill, stroke) configured in all states :

```
// create the first series (area)
var series1 = chart.area(seriesData_1);

// configure the visual settings of the first series
series1.normal().fill("#04b4ae", 0.3);
series1.hovered().fill("#04b4ae", 0.1);
series1.selected().fill("#04b4ae", 0.5);
series1.normal().hatchFill("zig-zag", "#808080", 1, 15);
series1.hovered().hatchFill("zig-zag", "#808080", 1, 15);
series1.selected().hatchFill("zig-zag", "#808080", 1, 15);
series1.normal().stroke("#04b4ae");
series1.hovered().stroke("#04b4ae", 2);
series1.selected().stroke("#04b4ae", 4);

// create the second series (line)  
var series2 = chart.line(seriesData_2);

// configure the visual settings of the second series
series2.normal().stroke("#04b404");
series2.hovered().stroke("#04b404", 2);
series2.selected().stroke("#04b404", 4);

// create the third series (line)
var series3 = chart.line(seriesData_3);

// configure the visual settings of the third series
series3.normal().stroke("#aeb404", 1, "10 5", "round");
series3.hovered().stroke("#aeb404", 2, "10 5", "round");
series3.selected().stroke("#aeb404", 4, "10 5",  "round");

```

{sample}BCT\_General\_Settings\_01{sample}

## Markers

{api:anychart.standalones.MarkersFactory#anchor}Markers{api} are special symbols that mark certain points on a series. As a rule, they are used to mark certain values on a series or to make series on a multi-series chart more distinguishable.

All chart types allow configuring markers: both on a whole series and in individual points. Available settings include type, size, fill color, and others.

In the following sample, there are two Line series. On one of them you can see how markers look by default (they are visible only on hover and select). On the other series a few custom settings are added:

```
// enable and configure markers on the first series
series1.markers(true);
series1.markers().type("star5");
series1.markers().fill("gold");
series1.markers().size(10);
```

{sample}BCT\_General\_Settings\_02{sample}

This sample shows how you can configure markers in individual points:

```
// create data, enable and configure markers
var data = [
  {x: "January", value:10000},
  {x: "February", value:12000, marker:{enabled:true, type:"star5", fill:"gold", size:10}},
  {x: "March", value:13000, marker:{enabled:true, type:"star5", fill:"red", size:15}},
  {x: "April", value:10000},
  {x: "May", value:9000}
];
```

{sample}BCT\_General\_Settings\_03{sample}

## Labels

Labels are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in individual points). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

In the sample below, there is a Column chart with labels enabled on the whole series. Some font settings and a text formatter are applied:

```
// enable and configure labels on the series
series.labels(true);
series.labels().fontColor("green");
series.labels().fontWeight(900);
series.labels().format("${%value}");
```

The next sample shows how to configure labels in individual points:

{sample}BCT\_General\_Settings\_04{sample}

```
// create data, enable and configure labels
var data = [
  {x: "John", value:10000},
  {x: "Jake", value:12000, label:{enabled:true, fontColor:"green", fontWeight:900, format:"${%value}"}},
  {x: "Peter", value:13000, label:{enabled:true, fontColor:"red", fontWeight:900, format:"${%value}"}},
  {x: "James", value:10000},
  {x: "Mary", value:9000}
];
```

{sample}BCT\_General\_Settings\_05{sample}

## Tooltips

A tooltip is a text box displayed when a point on a chart is hovered (in all charts tooltips are enabled by default, but it is possible to turn them off). There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on. Also note that tooltips can be configured either on the whole chart or on each series of a multi-series chart individually.

To learn more, see the [Tooltip](../Common_Settings/Tooltip) article.

In this sample, there is a Column chart with two series, and tooltips are configured on the whole chart, so they look the same on both series:

```
// configure tooltips on the chart
chart.tooltip().title("Information");
chart.tooltip().format("Manager: {%categoryName} \n{%seriesName}: ${%value}");
```

{sample}BCT\_General\_Settings\_06{sample}

Here tooltips are configured on each series separately, and the tooltip text on the first series differs from that on the second one:

```
// configure tooltips on the first series
series1.tooltip().title("Last Year");
series1.tooltip().format("Manager: {%categoryName} \nSales: ${%value}");

// configure tooltips on the second series
series2.tooltip().title("This Year");
series2.tooltip().format("Manager: {%categoryName} \nSales: ${%value}");
```

{sample}BCT\_General\_Settings\_07{sample}

## Legend

A legend is a table on a chart listing and explaining the symbols and colors used there and displaying additional information that helps user to understand the chart. This element is supported by all charts in AnyChart: it is turned off by default, but can be enabled and, if needed, configured. You can customize the title, position, visual style, legend tooltips and add some other perks.

For more information, read this article: [Legend](../Common_Settings/Legend).

The following sample shows a multi-series Column chart with a default legend enabled. As you can see, it includes the names and colors of the series:

```
// enable the legend
var legend = chart.legend();
legend.enabled(true);
```

{sample}BCT\_General\_Settings\_08{sample}

In this sample, there is a single-series Column chart and a custom legend displaying the list of categories:

```
// enable the legend
var legend = chart.legend();
legend.enabled(true);

// set the source of legend items
legend.itemsSourceMode("categories");
```

{sample}BCT\_General\_Settings\_09{sample}

## Axes and Scales

In AnyChart axes are used to control grids, axes labels, lines, and tick marks. They depend on [scales](../Axes_and_Grids/Scales). There are a lot of settings that can be applied to axes and scales: for example, you can change the orientation of axes or invert them, set the minimum and maximum values of a scale and configure its ticks, and so on. All chart types allow you to add extra scales and axes and bind different series to different scales.

Learn more about axes and scales: [Axes and Grids](../Axes_and_Grids).

In the sample below, there is a multi-series chart with a Column series bound to the default Y-axis, and a Line series bound to an additional Y-axis:

```
// configure the main y-scale
var yScale1 = anychart.scales.linear();
yScale1.maximum(20000);

// configure an extra y-scale
var yScale2 = anychart.scales.linear();
yScale2.maximum(150);

// configure the main y-axis
var yAxis1 = chart.yAxis(0);
yAxis1.scale(yScale1);
yAxis1.title("Sales, $");

// configure an extra y-axis
var yAxis2 = chart.yAxis(1);
yAxis2.orientation("right")
yAxis2.scale(yScale2);
yAxis2.title("Number of Items Sold");

// bind the first series to the main y-scale
series1.yScale(yScale1);

// bind the second series to the extra y-scale
series2.yScale(yScale2);
```

{sample}BCT\_General\_Settings\_10{sample}

### Stacking

Stacked and percent stacked charts are multi-series charts where related values are placed atop one another, which allows comparing the the contribution of a value to a total, either in absolute or percentage terms.

In AnyChart, you can create stacked and percent stacked charts of various types by enabling a special mode of the scale that makes series stack together: [Stacked Charts](Stacked/Overview).

## Point Size

All charts with points looking like bars (Bar, Column, and related types) allow you to set the size of the points: the width, the maximum width, and the minimum length. Read more in the [Point Size](../Common_Settings/Point_Size) article.

## Interactivity

You can change the default behavior of a chart or a series in AnyChart. By default, when a user hovers a point, it is highlighted, and a tooltip is shown; clicking a legend element hides/shows a series it represents, and so on. The [Interactivity](../Common_Settings/Interactivity) article explains how to change the defaults and create custom interactivity settings.

## Events

To make your chart more interactive, you can listen to such events as clicking, hovering, or unhovering (a chart or a point) and others. 

See the [Event Listeners](../Common_Settings/Event_Listeners) to learn how to work with events.

In this sample, event listeners are used to change the chart title on hovering, selecting, and double-clicking a point and to customize the cursor style on hovering and unhovering the chart:

```
// create an event listener for hovering the chart
chart.listen("mouseOver", function(e){
  // change the cursor style on hovering the chart
  document.body.style.cursor = "pointer";
});

// create an event listener for unhovering the chart
chart.listen("mouseOut", function(e){
  // set the default cursor style on unhovering the chart
  document.body.style.cursor = "auto";
});

// create an event listener for hovering points
chart.listen("pointsHover", function(e){
  // get the category the hovered points belong to
  var name = e.point.getStat("categoryName");
  // change the chart title on hovering points
  chart.title(name);
});

// create an event listener for selecting points
chart.listen("pointsSelect", function(e){
  // get the value of the selected points
  var value = e.point.getStat("value");
  // change the chart title on selecting points
  chart.title("$" + value);
});

// create an event listener for double-clicking on a point
chart.listen("pointDblClick", function(e){
  // get the category the point belongs to
  var name = e.point.getStat("categoryName");
  // get the value of the point
  var value = e.point.getStat("value");
  // change the chart title on double-clicking on a point
  chart.title(name + ": $" + value);
});
```

{sample}BCT\_General\_Settings\_11{sample}

## Vertical Charts

Most types of series can be drawn both in horizontal and vertical orientation. To find out how to do it, and what series this feature works with, see the article about [Vertical Charts](Vertical/Overview).

## 3D Charts

Using AnyChart, you can create 3D versions of the following chart types: Area, Bar, Column, and Pie. Read more: [3D Charts](3D/Overview).

## Custom Drawing

It is possible to override the rendering function for most types of series. This remarkable feature allows you to create your own unique types of series and charts. For more information, see this article: [Custom Drawing](Custom_Drawing).