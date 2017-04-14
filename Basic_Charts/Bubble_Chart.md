{:index 1}
# Bubble Chart


* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Type](#type)
  * [Labels](#labels)
  * [Single Marker Adjusting](#single_marker_adjusting)
  * [Tooltips](#tooltips)

## Overview

A Bubble chart is a variation of a [Scatter chart](./Scatter_Chart) where the data points are replaced with bubbles.  
  
HTML5 Bubble charts are often used to present financial data. Use a Bubble chart if you want to put more attention to the specific values in your chart by different bubble sizes.  
  
Bubble charts are popular tools for identifying and illustrating industry clusters. Essentially, these charts allow four different variables to be plotted within the same graph, making it easy to assess relative economic performance.
  
Because they allow visual comparisons of well-understood measures, bubble charts are often used for pinpointing priority industries that should receive attention from a state economic development agency.

This article explains how to create a basic Bubble chart as well as configure settings that are specific to the type. See the table below to get a brief overview of the Bubble chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Bubble}anychart.core.cartesian.series.Bubble{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value, size](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[Vertical Bubble](Vertical/Overview)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Error Bubble](Error_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>[Polar Bubble](Polar_Plot/Polar_Bubble_Chart)</td></tr>
<tr><td>Radar</td><td>[Radar Bubble](Radar_Plot/Radar_Bubble_Chart)</td></tr>
<tr><td>Scatter</td><td>[Bubble on Scatter Plot](Scatter_Plot/Overview)</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Marker](Marker_Chart)</td></tr>
<tr><td></td><td>[Dot (Point) Maps](../Maps/Dot_(Point\)_Map)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/bubble-chart/" target="_blank">Chartopedia: Bubble Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Bubble chart, use the {api:anychart#bubble}anychart.bubble(){api} chart constructor. If you pass the data to this chart constructor, it will create a Bubble series. Note that this constructor creates a chart of a Scatter type. Find more about Scatter Charts in the [Scatter Plot article](Scatter_Plot/Overview).

To create a Bubble series explicitly, call the {api:anychart.charts.Cartesian#bubble}bubble(){api} method.

In the following sample, we DO NOT create a [Scatter Bubble Chart](Scatter/Bubble_Chart), we create a basic categorized Marker chart:

```
// create a categorized chart
chart = anychart.cartesian();
  
// data
data = [  
    ["2000", 1100, 1],
    ["2001", 880, 2],
    ["2002", 1100, 5],
    ["2003", 1500, 3],
    ["2004", 921, 3],
    ["2005", 1000, 2],
    ["2006", 1400, 1]
];
  
// add a marker seris
chart.bubble(data);
  
// set chart title
chart.title("Bubble Chart");
  
// set axes titles 
chart.xAxis().title("Years");
chart.yAxis().title("Sales");
  
// draw
chart.container("container");
chart.draw();
```

{sample}BCT\_Bubble\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Bubble Chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

Here is a full list of methods used to configure visual settings that are available for the Bubble series:

* {api:anychart.core.cartesian.series.Bubble#color}color(){api}, {api:anychart.core.cartesian.series.Bubble#fill}fill(){api}, {api:anychart.core.cartesian.series.Bubble#hatchFill}hatchFill(){api}, {api:anychart.core.cartesian.series.Bubble#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.cartesian.series.Bubble#hoverFill}hoverFill(){api}, {api:anychart.core.cartesian.series.Bubble#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.cartesian.series.Bubble#hoverStroke}hoverStroke(){api} methods configure the visual settings on hover
* {api:anychart.core.cartesian.series.Bubble#selectFill}selectFill(){api}, {api:anychart.core.cartesian.series.Bubble#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.cartesian.series.Bubble#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) article.

In the sample below, there are two Bubble series with some of the appearance settings configured:

```
// set colors
series1.fill("#00cc99", 0.5);
series1.stroke("#00cc99", 1, "10 5", "round");
series1.hoverFill("#00cc99", 0.2);
series1.hoverStroke("#00cc99", 2, "10 5", "round");
series1.selectFill("#00cc99", 0.8);
series1.selectStroke("#00cc99", 4, "10 5", "round");

series2.fill("none");
series2.hoverFill("none");
series2.selectFill("none");
series2.hatchFill("percent10");
series2.hoverHatchFill("percent30");
series2.selectHatchFill("percent50");
```

{sample}BCT\_Bubble\_Chart\_02{sample}

**Note:** settings adjusted in the dataset override those which are adjusted through the methods. Read more about setting the data and data formats in the [Working with Data article](../Working_with_Data/Overview).


### Size

The min and the max size of bubbles can be controlled using {api:anychart.charts.Scatter#maxBubbleSize}.maxBubbleSize(){api} and {api:anychart.charts.Scatter#minBubbleSize}.minBubbleSize(){api} parameters. Both of them can be set either in pixels or in percents of a less chart side:

```
chart.maxBubbleSize("15%");
chart.minBubbleSize("5%");
```

When you set {api:anychart.charts.Scatter#maxBubbleSize}.maxBubbleSize("15%"){api} - AnyChart will make diameters of bubble(s) with a biggest size equal to 15% of width or the height, depends on which side is shorter.
  
  
Here is the sample where bubbles are sized in percents, as specified above:

{sample}BCT\_Bubble\_Chart\_03{sample}

And there is a sample when bubbles are sized in pixels:

```
chart.maxBubbleSize(0104);
chart.minBubbleSize(3);
```
Note: this size setting type (in pixels) may lead to the nasty results when chart is resized.

{sample}BCT\_Bubble\_Chart\_04{sample}


### Single Bubble Adjusting

Sometimes it is necessary to emphasize an only item for some reasons. In this case, use your dataset to fix the parameters for detached bubbles instead of the whole series.

The following sample demonstrates adjusting some settings for a single item:

```
var data = anychart.data.set([
    {x: "2000", value: 1100, size: 5},
    {x: "2001", value: 880, size: 6},
    {x: "2002", value: 1100, size: 4},
    {x: "2003", value: 1500, size: 5, fill: "gold", stroke: "#663399", markerSize: 15, hoverMarkerSize: 15, selectMarkerSize: 20, type: "star5"},
    {x: "2004", value: 921, size: 5},
    {x: "2005", value: 1000, size: 3},
    {x: "2006", value: 1400, size: 4}
  ]);
```

{sample}BCT\_Bubble\_Chart\_05{sample}


### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

















* [Overview](#overview)
* [Chart](#chart)
 * [Single Series](#single_series)
 * [Multi-series](#multi-series)
* [Size](#size)
* [Axes](#axes)
 * [Orientation](#orientation)
 * [Inversion](#inversion)
 * [Minimum and Maximum](#minimum_and_maximum)
* [Visualization](#visualization)
 * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Markers](#markers)
* [Colors](#colors)
 * [Colorizing Elements](#colorizing_elements)
* [Hatch Fills](#hatch_fills)
 
## Overview

A Bubble Chart is a variation of a [Scatter chart](./Scatter_Chart) where the data points are replaced with bubbles.
  
  
HTML5 Bubble charts are often used to present financial data. Use a Bubble Chart if you want to put more attention to the specific values in your chart by different bubble sizes.
  
  
Bubble charts are popular tools for identifying and illustrating industry clusters. Essentially, these charts allow four different variables to be plotted within the same graph, making it easy to assess relative economic performance.
  
  
Because they allow visual comparisons of well-understood measures, bubble charts are often used for pinpointing priority industries that should receive attention from a state economic development agency.

## Chart

Depending on data model and the visualization purpose the Bubble Chart may contain single or several series. As Bubble Chart needs 3 values to show bubbles - you need to pass this data to chart. Here are two samples of data formatting:
  
  
When using Bubble Chart on a [scatter plot](./Scatter_Chart):

```
  [10, 63, 20]
```

When using Bubble Chart on a categorized plot:

```
  ["December", 6, 17]
```

### Single Series

Let's see single series Bubble Chart created using the sample data - ACME Corp. sales data for the three different products, we will compare a number of units sold and profit using a bubble chart:

<table width="376" border="1" class="dtTABLE">
<tbody><tr>
<th width="214"><b>Product</b></th>
<th width="70"><b>Units</b></th>
<th width="70"><b>Profit</b></th>
</tr>
<tr>
<td>Product 1 </td>
<td>637 </td>
<td>$6 </td>
</tr>
<tr>
<td>Product 2 </td>
<td>472 </td>
<td>$14 </td>
</tr>
<tr>
<td>Product 3 </td>
<td>48 </td>
<td>$10 </td>
</tr>
</tbody></table>

Now we need to convert this data table into format acceptable by AnyChart javascript charting library. In terms of AnyChart data model, we have one series of data (Sales) with categories that hold Product names. Each point in series represents product, units sold and a profit amount. Converted data looks like:

```
var series = chart.bubble([
    [1, 637, 6],
    [2, 472, 14],
    [3, 48, 10]
]);
```

As you can see, we've categorised chart using {api:anychart.charts.Scatter#bubble}**bubble()**{api} method, set parameters that defines categories in X-axis into first column, sales amount in Y-axis into second and parameter that defines bubble size (which is the same with the profit amount) into third one.
  
  
Here it is - AnyChart can now visualize your data. You can launch it in playground and modify it.

{sample}BCT\_Bubble\_Chart\_01{sample}

### Multi-series

To compare two or more data rows you should use multi-series bar charts as shown in the sample below.

Let's compare year 2003 sales to year 2004 product sales:

<table width="536" border="1" class="dtTABLE">
<tbody>
<tr>
<th width="227"><b>Year</b></th>
<th width="141" colspan="2"><b>Year 2003 Sales</b></th>
<th width="141" colspan="2"><b>Year 2004 Sales</b></th>
</tr>
<tr>
<th width="227"><b>Product</b></th>
<th width="141"><b>Units</b></th>
<th width="141"><b>Profit</b></th>
<th width="141"><b>Units</b></th>
<th width="141"><b>Profit</b></th>
</tr>
<tr>
<td>Product 1</td>
<td>637</td>
<td>$6</td>
<td>630</td>
<td>$12</td>
</tr>
<tr>
<td>Product 2</td>
<td>72</td>
<td>$14</td>
<td>32</td>
<td>$10</td>
</tr>
<tr>
<td>Product 3</td>
<td>48</td>
<td>$10</td>
<td> 48</td>
<td>$20</td>
</tr>
</tbody>
</table>

As we did in single-series bubble sample above now we need to convert this table into acceptable format, the only difference between these two samples is the fact that now we have bigger data and we have to clarify which number means what, so we use the {api:anychart.data.Set#mapAs}**mapAs()**{api} parameter for it.

```
  var dataSet = anychart.data.set([
    [1, 637, 6, 630, 12],
    [2, 72, 14, 32, 10],
    [3, 48, 10, 48, 20]
  ]);
  var seriesData_1 = dataSet.mapAs({x: [0], value: [1], size:[2]});
  var seriesData_2 = dataSet.mapAs({x: [0], value: [3], size:[4]});
```

{sample}BCT\_Bubble\_Chart\_02{sample}

### Size

The min and the max size of bubbles can be controlled using {api:anychart.charts.Scatter#maxBubbleSize}**.maxBubbleSize()**{api} and {api:anychart.charts.Scatter#minBubbleSize}**.minBubbleSize()**{api} parameters. Both of them can be set either in pixels or in percents of a lesser chart side:

```
  chart.maxBubbleSize("15%");
  chart.minBubbleSize("5%");
```

When you set {api:anychart.charts.Scatter#maxBubbleSize}**.maxBubbleSize("15%")**{api} - AnyChart will make diameters of bubble(s) with a biggest size equal to 15% of width or the height, depends on which side is shorter.
  
  
Here is the sample when bubbles are sized in percents, as specified above:

{sample}BCT\_Bubble\_Chart\_03{sample}

And in this sample when bubbles are sized in pixels:

```
  chart.maxBubbleSize(60);
  chart.minBubbleSize(15);
```
Note: this size setting type (in pixels) may lead to the nasty results when chart is resized.

{sample}BCT\_Bubble\_Chart\_04{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings, etc. You can find more information about axes in [Axis Basics](../Axes_and_Grids/Axis_Basics) tutorial.
  
  
In this section we will quickly demonstrate how we can adjust axis orientation, invert axis scale and control minimum and maximum values.

### Orientation

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust orientation with {api:anychart.core.axes.Linear#orientation}**.orientation()**{api} parameter of {api:anychart.charts.Scatter#yAxis}**.yAxis()**{api} or {api:anychart.charts.Scatter#xAxis}**.xAxis()**{api} method.
  
Position depends on plot type and inversion of axes, you will find the list of all possible orientation and inversion settings in [Axes Orientation](../Axes_and_Grids/Axis_Orientation) templates.

```
  var xAxis = chart.xAxis();
  xAxis.orientation("top");
  var yAxis = chart.yAxis();
  yAxis.orientation("right");
```

Here is the demonstration of this feature in the Single-series sample:
{sample}BCT\_Bubble\_Chart\_05{sample}

### Inversion

AnyChart allows to invert any axis: Y, X or any extra. Inversion is controlled by axis {api:anychart.scales.Linear#inverted}**scale().inverted()**{api}:

```
  var yScale = chart.yScale();
  yScale.inverted(true);
```

{sample}BCT\_Bubble\_Chart\_06{sample}

### Minimum and Maximum

By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale positioning chart sample above: minimal value on the Y Axis is 0, and maximum is 1000. You can control these values by setting {api:anychart.scales.Linear#maximum}**.maximum()**{api} and {api:anychart.scales.Linear#minimum}**.minimum()**{api} parameters of {api:anychart.charts.Scatter#yScale}**.yScale()**{api} method. As far as you want to adjusted the scale, it's desirable to set {api:anychart.scales.ScatterTicks#interval}**.ticks().interval()**{api} as well, in case default interval is twisted:

```
  var yScale = chart.yScale();
  yScale.minimum(-100);
  yScale.maximum(1000);
  var yTicks = chart.yScale().ticks();
  yTicks.interval(100);
```

And here is the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_Bubble\_Chart\_07{sample}

## Visualization

In this section we will describe the main parts of bubble chart visualization and ways to adjust them. Visual appearance of bubbles is defined using certain methods. For bubble chart the main thing is  the {api:anychart.graphics.vector.Fill}**.fill()**{api} parameter.

### Basic Sample

Now, let's look how to change the look of an Area. Here is a basic sample:

```
  var series = chart.bubble(data);
  series.fill("gold");
  series.hatchFill("diagonalbrick", "gray");
  series.hoverHatchFill("diagonalbrick", "darkred");
  series.stroke("Rgb(86,86,26)", 4);
  series.hoverStroke("darkred", 6);
```

Using such settings we've created a style that colors bubbles in Gold, makes the border rather thick, fills hatch with DiagonalBrick and a couple of effects. Also, we've defined that when user moves cursor over an element it becomes highlighted with a dark red thick border and a hatch fill is colored dark red too.
  
  
Now let's apply this style to the chart.

{sample}BCT\_Bubble\_Chart\_08{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.  
  
  
If you want to configure data labels and tooltips for all series - you should use {api:anychart.core.scatter.series.Base#labels}**.labels()**{api} and {api:anychart.core.scatter.series.Base#tooltip}**.tooltip()**{api} methods. Adding attributes with values to these methods, you can change visual appearance, position and format of the same-named elements.
  
  
With the following example let's make data labels appear to the top from each bubble, format them to show only the value corresponding to the bubble and force tooltips to show detailed description.
  
  
When formatting data labels' text we use {api:anychart.core.ui.LabelsFactory#format}format{api} to choose the column we need to get information from.
 
{sample}BCT\_Bubble\_Chart\_09{sample}

## Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including bubbles.
  
  
In the sample below we take single-series data described above and mark the biggest bubble in series with a **"Star5"** of the **"Gold"** color.
  
To make the marker more visually appealing we set its size to 10px in normal state and 15px when being hovered.

```
  chart.bubble([
    {x: 1, value: 437, size: 6},
    {
      x: 2,
      value: 172,
      size: 14,
      marker: {
        enabled: true, 
        type: "star5", 
        fill: "gold", 
        position: "centerTop", 
        size: 10
      },
      hoverMarker: {size: 15}
    },
    {x: 3, value: 548, size: 10}
  ]);
``` 

And here is a result - the best product for ACME Corp. is Product B and we show this on the chart:

{sample}BCT\_Bubble\_Chart\_10{sample}
<!--Related help topics:

You can read more about working with markers in Markers tutorial.
Full reference of marker style can be found in XML Reference, particularly <marker_style> node.
to top
-->

## Colors

AnyChart uses default color palette to colorize data elements of chart automatically if you have not defined special colors.

### Colorizing Elements

Now let's study how to apply different colors to different data series. To apply the color to the exact series we need to set the {api:anychart.graphics.vector.Fill}**.fill()**{api} parameter in the {api:anychart.core.scatter.series}**series**{api}. In the sample below we have 5 series with sample data and we'll color each series to different color. Here is the sample:

{sample}BCT\_Bubble\_Chart\_11{sample}

Look at the individual points we colorized in the sample below. We've got a chart with one series and predefined color for all elements. We set "Rgb(180,77,77)" color for the minimum point and "Rgb(77,180,77)" for the maximum one.
  
  
As you see it is very easy to do by setting a value for the {api:anychart.graphics.vector.Fill}**fill()**{api} parameter of a point.

{sample}BCT\_Bubble\_Chart\_12{sample}

**Important Note:**
  
  
AnyChart html5 charting library takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors. For example, instead of "Rgb(180,77,77)" you can set "#b44d4d"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:
  
  
* Different ways of [setting colors](../Appearance_Settings/Color_Management) of elements
<!-- But even this is not everything about colors in AnyChart: read more about setting colors below 
and in the following Help Sections:

Different ways of setting colors of elements
Advanced coloring techniques in Styles tutorial
-->

## Hatch Fills

AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. 
To see whole range of available hatch types see [Hatch Fill](../Appearance_Settings/Hatch_Fill) tutorial.
  
  
To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We've got a chart a with 5 series with 3 data points in each. For every series we've applied different hatch fills by setting hatch type for the {api:anychart.core.scatter.series.Bubble#hatchFill}**.hatchFill()**{api} parameter.

{sample}BCT\_Bubble\_Chart\_13{sample}

## Samples

 You can see a lot of other samples in [AnyChart Web Bubble and Markers Charts Gallery](https://www.anychart.com/products/anychart/gallery/Marker_and_Bubble_Charts/).
