{:index 1}
#Box Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Outliers](#ouliers)
  * [Labels](#labels)
  * [Tooltips](#tooltips)
  * [Vertical Area](#vertical_area)
  * [3D Area](#3d_area)


## Overview

A Box Chart is a convenient way of graphically depicting groups of numerical data through their quartiles. Box Charts are useful when it is necessary to describe the values as they spread across the entire range. For example, to analyze salaries in a company, it is necessary to have more information than the sum of salaries for each salary grade. Even a measure of average salary wouldn't depict all. 
  
Box Charts allow showing the minimum and the maximum with a median (a numerical value separating the higher half of a data sample, a population, or a probability distribution, from the lower half) and quartiles, which helps making the story more complete. But still, giving only the highest, the lowest and the medium values doesn't tell the full story. So it is often useful to display the data in a way that reveals more about values' distribution.

This article explains how to create a basic Box chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Box Chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Box}anychart.core.cartesian.series.Box{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, low, q1, median, q3, high, value, outliers](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[Vertical Box](Vertical/Box_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Error Chart](Error_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Error Chart](Error_Chart)</td></tr>
<tr><td></td><td>[Pareto Chart](Pareto_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="http://www.anychart.com/chartopedia/chart-types/box-chart/" target="_blank">Chartopedia: Box Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Box chart, use the {api:anychart#box}anychart.box(){api} chart constructor. If you pass the data to this chart constructor, it will create a Box series.

To create a Box series explicitly, call the {api:anychart.charts.Cartesian#box}box(){api} method.

The following sample demonstrates how a basic Box chart is created:

```
// chart data
var data = [
  {x: "1", low: 1000, q1: 1050, median: 1200, q3: 1800, high: 2000, outliers: [800, 2500, 3200]},
  {x: "2", low: 2500, q1: 3000, median: 3800, q3: 3900, high: 4000},
  {x: "3", low: 2000, q1: 2300, median: 2500, q3: 2900, high: 3000},
  {x: "4", low: 4000, q1: 5000, median: 6500, q3: 6500, high: 7000, outliers: [8930]},
  {x: "5", low: 8000, q1: 8400, median: 8500, q3: 8800, high: 9000, outliers: [6950, 3000]}
];

// create box chart
chart = anychart.box();

// create box chart series with our data
series = chart.box(data);

// set chart title text settings
var title = chart.title("Basic Box Chart");
  
// set container id for the chart
chart.container("container");
  
// initiate chart drawing
chart.draw();
```

{sample}BCT\_Box\_Chart\_01{sample}

Note that not all boxes have outliers. Outliers are optional values, which belong to the category, but does not fit the range between the low and the high values.

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Area chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance


Here is a full list of methods used to configure visual settings that are available for the Box series:

* {api:anychart.core.cartesian.series.Box#color}color(){api}, {api:anychart.core.cartesian.series.Box#fill}fill(){api}, {api:anychart.core.cartesian.series.Box#hatchFill}hatchFill(){api}, {api:anychart.core.cartesian.series.Box#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.cartesian.series.Area#hoverFill}hoverFill(){api}, {api:anychart.core.cartesian.series.Area#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.cartesian.series.Area#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.cartesian.series.Area#selectFill}selectFill(){api}, {api:anychart.core.cartesian.series.Area#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.cartesian.series.Area#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) article.

In the sample below, there are two Area series with some of the appearance settings configured:

```
// create the first series
var series1 = chart.area(seriesData_1);

// configure the visual settings of the first series
series1.fill("#00cc99", 0.3);
series1.hoverFill("#00cc99", 0.3);
series1.selectFill("#00cc99", 0.5);
series1.stroke("#00cc99", 1, "10 5", "round");
series1.hoverStroke("#00cc99", 2, "10 5", "round");
series1.selectStroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.area(seriesData_2);

// configure the visual settings of the second series
series2.fill("#0066cc", 0.3);
series2.hoverFill("#0066cc", 0.3);
series2.selectFill("#0066cc", 0.5);
series2.hatchFill("zigzag", "#808080", 1, 15);
series2.stroke("#0066cc");
series2.hoverStroke("#0066cc", 2);
series2.selectStroke("#0066cc", 4);
```

{sample}BCT\_Area\_Chart\_02{sample}

### Outliers



при описании настроек apperance не забыть про outlierMarkers hoverOutlierMarkers и selectOutlierMarkers

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.







* [Overview](#overview)
* [Chart](#chart)
 * [Single Series](#single_series)
 * [Multi-series](#multi-series)
* [Axes](#axes)
 * [Orientation](#orientation)
 * [Inversion](#inversion)
 * [Minimum and Maximum](#minimum_and_maximum)
 * [Scale Type](#scale_type)
* [Padding](#padding)
* [Visualization](#visualization)
 * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Markers](#markers)
* [Colors](#colors)
  * [Colorizing Elements](#colorizing_elements)
* [Hatch Fills](#hatch_fills)
* [Samples](#samples)

## Overview

Sometimes it's not the best idea to describe a set of values as a single summarized measure such as a sum or average. It may be necessary to describe the values as they spread across the entire range. For example, if we want to analyze salaries in a company, we will need more information than the sum of salaries for each salary grade. Even a measure of average salary wouldn't tell us enough.
  
  
Box Charts allow showing the minimum and the maximum with a median (a numerical value separating the higher half of a data sample, a population, or a probability distribution, from the lower half) and quartiles, which helps making the story more complete. But still, giving only the highest, the lowest and the medium values doesn't tell the full story. So it is often useful to display the data in a way that reveals more about values' distribution.
  
  
Here it is where BoxCharts are really useful.

## Chart

Depending on data model and the visualization purpose the box chart may contain one or several series.

### Single Series 

Let's see single series area chart created using the following data: salaries of ACME Corp. by ranges in February 2015:

<table width="700" border="1" class="dtTABLE">
<tbody><tr>
<th width="50"><b>Range</b></th>
<th width="130"><b>Min Salary, $</b></th>
<th width="130"><b>First Quartile, $</b></th>
<th width="130"><b>Median, $</b></th>
<th width="130"><b>Third Quartile, $</b></th>
<th width="130"><b>Max Salary, $</b></th>
</tr>
<tr>
<td>1</td>
<td>1000</td>
<td>1050</td>
<td>1200</td>
<td>1800</td>
<td>2000</td>
</tr>
<tr>
<td>2</td>
<td>2500</td>
<td>3000</td>
<td>3800</td>
<td>3900</td>
<td>4000</td>
</tr>
<tr>
<td>3</td>
<td>2000</td>
<td>2300</td>
<td>2500</td>
<td>2900</td>
<td>3000</td>
</tr>
<tr>
<td>4</td>
<td>4000</td>
<td>5000</td>
<td>6000</td>
<td>6500</td>
<td>7000</td>
</tr>
<tr>
<td>5</td>
<td>8000</td>
<td>8400</td>
<td>8500</td>
<td>8800</td>
<td>9000</td>
</tr>
</tbody></table>
Now we need to convert this data table into the format that can be used by AnyChart. See more about formats in [Supported Data Formats](../Working_with_Data/Supported_Data_Formats) article.
  
  
In terms of AnyChart data model we have one series of data (Salaries) with categories that hold range numbers. Each box in series represents the salaries' dispersion of the staff of a range in February. We will use the easiest basic method of data setting, it looks like this:

```
  var data = [
    {x: "1", low: 1000, q1: 1050, median: 1200, q3: 1800, high: 2000},
    {x: "2", low: 2500, q1: 3000, median: 3800, q3: 3900, high: 4000},
    {x: "3", low: 2000, q1: 2300, median: 2500, q3: 2900, high: 3000},
    {x: "4", low: 4000, q1: 5000, median: 5500, q3: 6500, high: 7000},
    {x: "5", low: 8000, q1: 8400, median: 8500, q3: 8800, high: 9000},
  ];

  //create box chart
  chart = anychart.box();

  //create box chart series with our data
  chart.box(data);
```

As you can see, we've created a Data Set. Every object is a box, each has some parameters. The first column is as category and others represent boxes' parameters.
  
  
Here it is: AnyChart Charting Library can now visualize your data. Look at the chart sample below and click on "Launch in playground" to see the full source code, alter and play with the sample or download it.

{sample}BCT\_BoxChart\_01{sample}

### Multi-series

To compare two or more data sets you have to use multi-series area charts as it is shown in the sample below.
  
Now we're going to compare February 2015 salaries to January 2015 ones. Let's suppose January 2015 salaries as in the table below:

<table width="700" border="1" class="dtTABLE">
<tbody><tr style="text-align:center;">
<th width="20" rowspan=2 style="padding-right:3px;"><b>№</b></th>
<th colspan=2><b>Min Salary, $</b></th>
<th colspan=2><b>First Quartile, $</b></th>
<th colspan=2><b>Median, $</b></th>
<th colspan=2><b>Third Quartile, $</b></th>
<th colspan=2><b>Max Salary, $</b></th>
<th colspan=2><b>Outliers, $</b></th>
</tr>
<tr align=center>
<td>Jan 2015</td>
<td>Feb 2015</td>
<td>Jan 2015</td>
<td>Feb 2015</td>
<td>Jan 2015</td>
<td>Feb 2015</td>
<td>Jan 2015</td>
<td>Feb 2015</td>
<td>Jan 2015</td>
<td>Feb 2015</td>
<td>Jan 2015</td>
<td>Feb 2015</td>
</tr>
<tr>
<td>1</td>
<td>1300</td>
<td>1000</td>
<td>1400</td>
<td>1050</td>
<td>1700</td>
<td>1200</td>
<td>2000</td>
<td>1800</td>
<td>2100</td>
<td>2000</td>
<td>2300<br>1000</td>
<td>--</td>
</tr>
<tr>
<td>2</td>
<td>2500</td>
<td>2500</td>
<td>3400</td>
<td>3000</td>
<td>3500</td>
<td>3800</td>
<td>3600</td>
<td>3900</td>
<td>3700</td>
<td>4000</td>
<td>4000<br>2200</td>
<td>--</td>
</tr>
<tr>
<td>3</td>
<td>2000</td>
<td>2000</td>
<td>2300</td>
<td>2300</td>
<td>2500</td>
<td>2500</td>
<td>2900</td>
<td>2900</td>
<td>3000</td>
<td>3000</td>
<td>3450<br>1800</td>
<td>--</td>
</tr>
<tr>
<td>4</td>
<td>4000</td>
<td>4000</td>
<td>5000</td>
<td>5000</td>
<td>5500</td>
<td>5500</td>
<td>6000</td>
<td>6500</td>
<td>7000</td>
<td>7000</td>
<td>7100<br>3700</td>
<td>--</td>
</tr>
<tr>
<td>5</td>
<td>8100</td>
<td>8000</td>
<td>8400</td>
<td>8400</td>
<td>8500</td>
<td>8500</td>
<td>9000</td>
<td>8800</td>
<td>9500</td>
<td>9000</td>
<td>9700<br>7600<br>4500</td>
<td>--</td>
</tr>
</tbody></table>

As we did in single series area sample above we need to convert this table AnyChart format, the only difference between these two samples is the fact that now we have two series of the data, each series is for each month:

```
  var data_1 = [
    {x: "1", low: 1000, q1: 1050, median: 1200, q3: 1800, high: 2000},
    {x: "2", low: 2500, q1: 3000, median: 3800, q3: 3900, high: 4000},
    {x: "3", low: 2000, q1: 2300, median: 2500, q3: 2900, high: 3000},
    {x: "4", low: 4000, q1: 5000, median: 5500, q3: 6500, high: 7000},
    {x: "5", low: 8000, q1: 8400, median: 8500, q3: 8800, high: 9000},
  ];

  var data_2 = [
    {x: "1", low: 1300, q1: 1400, median: 1700, q3: 2000, high: 2100, outliers:[2300,1000]},
    {x: "2", low: 2500, q1: 3400, median: 3500, q3: 3600, high: 3700, outliers:[4000,2200]},
    {x: "3", low: 2000, q1: 2300, median: 2500, q3: 2900, high: 3000, outliers:[3450,1800]},
    {x: "4", low: 4000, q1: 5000, median: 5500, q3: 6000, high: 7000, outliers:[7100,3700]},
    {x: "5", low: 8100, q1: 8400, median: 8500, q3: 9000, high: 9500, outliers:[9700,7600,4500]},
  ];

  //create box chart series with our data
  chart.box(data_1);
  chart.box(data_2);

  //initiate chart drawing
  chart.draw();
```

That's how it looks like on a chart:

{sample}BCT\_BoxChart\_02{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and many more. All axis features are described in [Axes Basics](../Axes_and_Grids/Axis_Basics), [Axes Scales](../Axes_and_Grids/Scales) and [Extra Axes tutorial](../Axes_and_Grids/Additional_Axes), in this section we will quickly demonstrate how axis orientation can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.

### Orientation

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust the {api:anychart.enums.Orientation}orientation(){api} parameter of the {api:anychart.charts.Cartesian#yAxis}yAxis(){api} or {api:anychart.charts.Cartesian#xAxis}xAxis(){api} methods.
Position depends on plot type and inversion of axes, you will find list of all possible orientation and inversion settings in [Axes Orientation](../Axes_and_Grids/Axis_Orientation) Templates.

```
  var xAxis = chart.xAxis();
  xAxis.orientation("top");
  var yAxis = chart.yAxis();
  yAxis.orientation("right");
```

And here is the demonstration of this feature on the Single-series sample:

{sample}BCT\_BoxChart\_03{sample}

###Inversion

AnyChart Charting Framework allows scale inversion. Just add the {api:anychart.scales.Base#inverted}inverted(){api} method to the scale you want to invert, for example:
 
```
  // adjust y scale
  var yScale = chart.yScale();
  yScale.inverted(true);
```

Only one line changes the view a lot:

{sample}BCT\_BoxChart\_04{sample}

###Minimum and Maximum

In case your data values start far from the beginning of the scale or end far from the point you really need to show and analyse, you may have no desire to keep any empty space in the chart. Then use this ability of AnyChart to set the minimum and the maximum values shown on the axis.
  
  
You can control these values by setting {api:anychart.scales.Linear#maximum}maximum(){api} and {api:anychart.scales.Linear#minimum}minimum(){api} parameters of {api:anychart.charts.Cartesian#yScale}yScale(){api} method. As far as you want to adjust the scale, set {api:anychart.scales.ScatterTicks#interval}ticks().interval(){api} as well, in case the default interval is twisted:

```
  var yScale = chart.yScale();
  yScale.minimum(900);
  yScale.maximum(9600);
  vat yTicks = chart.yScale().ticks();
  yTicks.interval(300);
```

And here is the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_BoxChart\_05{sample}  

###Scale Type

There are four types of scales in AnyChart js charts: {api:anychart.scales#linear}"Linear"{api}, {api:anychart.scales#log}"Logarithmic"{api}, {api:anychart.scales#ordinal}"Ordinal"{api} and {api:anychart.scales#dateTime}"DateTime"{api}. To set scale type use appropriate constructor:

```
  chart.xScale(anychart.scales.linear());
  var newScale = anychart.scales.ordinal();
  chart.yScale(newScale);
```

Linear scale is set be default, other scale types can be set using the code above. For example, if you prefer your vertical scale logarithmic, paste the following:

```
  chart.yScale(anychart.scales.log());
```

That's how it will change your chart's appearance:

{sample}BCT\_BoxChart\_06{sample}

##Visualization

In this section we will describe the main elements of a box chart style and demonstrate how a style can be applied.
The main idea of styles is to segregate visualization and data definition. Visual appearance of boxes is defined using certain styles and then you just apply the style to the certain data elements. The style can be applied to a data series or a single box.
Also, styles are used to make charts interactive, you can define how elements will be displayed by default, when hovered, etc.

###Basic sample

Now, let's look how to apply a simple style to the chart. As we've already said, a style consists of several elements, here is the javascript structure:

```
  //set axes titles settings
  var xAxis = chart.xAxis();
  xAxis.title(false);
  xAxis.stroke(colorAxis);
  xAxis.stroke(colorAxis);
  var xLabels = chart.xAxis().labels();
  xLabels.fontColor(colorAxis);
  
  var yAxis = chart.yAxis();
  yAxis.stroke(colorAxis);
  var yTitle = chart.yAxis().title();
  yTitle.text("$ per month");
  yTitle.fontWeight("normal");
  yTitle.fontFamily("Verdana");
  yTitle.fontSize("14px");
  yTitle.fontColor(colorTitle);
  var yTicks = chart.yAxis().ticks();
  yTicks.stroke(colorAxis);
  var yLabels = chart.yAxis().labels();
  yLabels.fontColor(colorAxis);
  var yMinorTicks = chart.yAxis().minorTicks();
  yMinorTicks.stroke(colorAxis);

  //create box chart series with our data
  var series = chart.box(data);
  series.fill("#82BECA");
  series.stroke(null);
  series.stemStroke("#474747");
  series.medianStroke("2 #000");

  //hide whisker
  series.whiskerWidth(0);
  series.hoverWhiskerWidth(0);
```

Using such settings we've created a style that colors boxes in light Celadon color, makes the border invisible, colors the median in black and changes the color and the font of the axes. Two last lines makes whiskers invisible. 
Now let's apply these setting to the sample.

{sample}BCT\_BoxChart\_07{sample}  

##Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.
If you want to configure data labels and tooltips for all series - you should use {api:anychart.core.polar.series.Box#labels}labels(){api} and {api:anychart.core.cartesian.series.Box#tooltip}tooltip(){api} methods. Adding attributes with values to these methods will change visual appearance, position and format of these elements.
With the following example let's make data labels appear to the top from the boxes, format them to show only the number of the range and force tooltips to show detailed description.

```
  // adjust labels position
  var labels = series.labels();
  labels.enabled(true);
  labels.anchor("leftCenter");
  labels.position("topCenter");

  // adjust tooltips content
  var tooltip = series.tooltip();
  tooltip.textFormatter(function() {
    return "Range: " + this.x + "\nMedium: " + (this.q3+this.q1)/2 + "\nLowest: " + this.lowest + "\nQ1: " + this.q1 + "\nMedian: " + this.median + "\nQ3: " + this.q3 + "\nHighest: " +this.highest + "\nPeriod: February 2015";
  });
  tooltip.titleFormatter(function(){
    return "Salaries in February 2015\nInformation";
  });

  // adjust tooltip title
  var tooltipTitle = series.tooltip().title();
  tooltipTitle.enabled(true);
```

{sample}BCT\_BoxChart\_08{sample} 

In both samples above we adjusted only the first series boxes' appearance to make it clear how does the chart look with no formatting and styling.

##Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including bars.
In the sample below we take multi-series data described above and mark the biggest bar in series with a "Star5" of the "Gold" color.
To make the marker more visually appealing we set its size to 12px.

```
  {
    x: "5", 
    low: 8000, q1: 8400, median: 8500, q3: 8800, high: 9000,
    marker:{
      type:"star5", 
      fill:"gold", 
      size: 12, 
      enabled: true
    },
    hoverMarker: {
      size: 15
    }
  }
```

And here is a result - the best retail channel for ACME Corp. is Discount Stores and can be easily noticed on this chart.

{sample}BCT\_BoxChart\_09{sample}

##Colors

AnyChart uses default color palette to colorize data elements of chart automatically if you have not defined special colors.

###Colorizing elements
  
Now let's study how to apply different colors to different data series. To apply the color to the exact series we need to set the {api:anychart.graphics.vector.Fill}fill(){api} parameter in the {api:anychart.core.cartesian.series}series{api}. In the sample below we compare salaries of 5 different ranges in December 2014, January and February 2015. Let's color each series to different color. Here is the sample:

{sample}BCT\_BoxChart\_10{sample}

Besides colorizing the whole series, we may define special color to the only box for some reasons. Look at the sample below. We've got a chart with one series and predefined color for all elements. We highlight the box with the lowest salary with "Rgb(220,37,50)" and the box with the highest salary with "Rgb(77,200,17)" for the maximum one. As you see it is very easy to do by setting a value for the {api:anychart.graphics.vector.Fill}**.fill()**{api} parameter of a point while setting the data.

```
  {
    x: "1", 
    low: 1000, q1: 1050, median: 1200, q3: 1800, high: 2000,
    fill: "Rgb(220,37,50)"
  },
```

{sample}BCT\_BoxChart\_11{sample}

**Important Note**:
AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors. For example, instead of "RGB(240,248,255)" you can set "AliceBlue" or "#F0F8FF"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

* Different ways of [setting colors](../Appearance_Settings/Color_Management) of elements.

##Hatch Fills

AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. To see whole range of available hatch types see Hatch Fill tutorial.
  
  
To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have chart a with 3 series with 5 data points in each. For every series we've applied different hatch fills by setting hatch type for the {api:anychart.graphics.vector.HatchFill}hatchFill(){api} parameter:

```
  //hatch fill
  series.hatchFill('backwarddiagonal');
```

{sample}BCT\_BoxChart\_12{sample}

## Samples

 You can see a lot of other samples in [AnyChart Web Box Charts Gallery](http://anychart.com/products/anychart/gallery/Box_Charts/).
