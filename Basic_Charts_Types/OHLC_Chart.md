# Open High Low Close (OHLC) Chart

* [Overview](#overview)
* [Chart](#chart)
  * [Single Series](#single_series)
  * [Multi-series](#multi-series)
* [Axes](#axes)
  * [Orientation](#orientation)
  * [Logarithmic Scale](#logarithmic_scale)
  * [Minimum and Maximum](#minimum_and_maximum)
* [Visualization](#visualization)
  * [Basic sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Colors](#colors)
  * [Colorizing elements](#colorizing_elements)
* [Advanced OHLC Chart sample - OHLC, Line and Range Area Combination](#advanced_ohlc_chart_sample_-_ohlc,_line_and_range_area_combination)

## Overview

An **open-high-low-close** chart (also known as **OHLC**, **HLOC** chart) is a type of chart typically used to illustrate movements in the price of a financial instrument over time. Each vertical line on the chart shows the price range (the highest and lowest prices) over one unit of time, e.g. one day or one hour. Tick marks project from each side of the line indicating the opening price (e.g. for a daily bar chart this would be the starting price for that day) on the left, and the closing price for that time period on the right. The bars may be shown in different hues depending on whether prices rose or fell in that period.
  
  
The [Japanese candlestick chart](Japanese_Candlestick_Chart) is another way of displaying market price data, with the opening and closing prices defining a rectangle within the range for each time unit. Both charts show the exact same data, i.e. the opening, high, low, and closing prices during a particular time frame. Some traders find the candlestick chart easier to read.

## Chart

OHLC chart uses four values

```
  {
    // position on x scale
    x: Date.UTC(2007, 7, 28),
    // opening value
    open:511.53,
    // the highest value
    high:514.98,
    // the lowest value
    low:505.79,
    // closing value
    close:506.40
  },
```

### Single Series

Let's see single-series OHLC chart created using the following data - ACME Corp. stock price changes through one week:

<table width="337" border="1" class="dtTABLE">
<tbody><tr>
<th width="125"><b>Day</b></th>
<th width="38"><b>Open</b></th>
<th width="46"><b>High</b></th>
<th width="43"><b>Low</b></th>
<th width="51"><b>Close</b></th>
</tr>
<tr>
<td>28-Aug-07</td>
<td>511.53</td>
<td>514.98</td>
<td>505.79</td>
<td>506.40</td>
</tr>
<tr>
<td>29-Aug-07</td>
<td>507.84</td>
<td>513.30</td>
<td>507.23</td>
<td>512.88</td>
</tr>
<tr>
<td>30-Aug-07</td>
<td>512.36</td>
<td>515.40</td>
<td>510.58</td>
<td>511.40</td>
</tr>
<tr>
<td>31-Aug-07</td>
<td>513.10</td>
<td>516.50</td>
<td>511.47</td>
<td>515.25</td>
</tr>
<tr>
<td>4-Sep-07</td>
<td>515.02</td>
<td>528.00</td>
<td>514.62</td>
<td>525.15</td>
</tr>
</tbody>
</table>

Now we need to convert this data table into acceptable format. In terms of AnyChart data model we have one series of data with categories that hold days names. Each point in series represents one day and open, high, low, close prices. Converted Data looks like:

```
  var data = [
    {x: Date.UTC(2007, 8, 28), open:511.53, high:514.98, low:505.79, close:506.40},
    {x: Date.UTC(2007, 8, 29), open:507.84, high:513.30, low:507.23, close:512.88},
    {x: Date.UTC(2007, 8, 30), open:512.36, high:515.40, low:510.58, close:511.40},
    {x: Date.UTC(2007, 8, 31), open:513.10, high:516.50, low:511.47, close:515.25},
    {x: Date.UTC(2007, 9, 4), open:515.02, high:528.00, low:514.62, close:525.15}
  ];
  chart = anychart.financial();
  chart.ohlc(data);
```

As you can see, we've specified chart type as {api:anychart.core.cartesian.series.OHLC}**OHLC**{api} and set name, open, high, low, close parameters.
  
  
Here it is - AnyChart can now visualize your data. Look at the chart sample below and click "Launch in playground" to examine sample's code.

{sample}BCT\_OHLC\_Chart\_01{sample}

### Multi-series

To compare two or more data rows you have to use multi-series OHLC charts as it shown in the sample below.
  
  
Let's compare ACME Corp. and Duff Brewing Corp. stock prices sales:

<table width="287" border="1" class="dtTABLE">
<tbody><tr>
<th width="75"><b>Company</b></th>
<th colspan="4"><b>ACME Corp.</b></th>
<th colspan="4"><b>Duff Brewery Corp.</b></th>
</tr>
<tr>
<th width="75"><b>Day</b></th>
<th width="46"><b>Open</b></th>
<th width="46"><b>High</b></th>
<th width="46"><b>Low</b></th>
<th width="46"><b>Close</b></th>
<th width="46"><b>Open</b></th>
<th width="46"><b>High</b></th>
<th width="46"><b>Low</b></th>
<th width="46"><b>Close</b></th>
</tr>
<tr>
<td>28-Aug-07</td>
<td>511.53</td>
<td>514.98</td>
<td>505.79</td>
<td>506.40</td>
<td>522.95</td>
<td>523.10</td>
<td>522.50</td>
<td>522.52</td>
</tr>
<tr>
<td>29-Aug-07</td>
<td>507.84</td>
<td>513.30</td>
<td>507.23</td>
<td>512.88</td>
<td>522.60</td>
<td>522.69</td>
<td>522.27</td>
<td>522.55</td>
</tr>
<tr>
<td>30-Aug-07</td>
<td>512.36</td>
<td>515.40</td>
<td>510.58</td>
<td>511.40</td>
<td>522.49</td>
<td>522.91</td>
<td>522.38</td>
<td>522.61</td>
</tr>
<tr>
<td>31-Aug-07</td>
<td>513.10</td>
<td>516.50</td>
<td>511.47</td>
<td>515.25</td>
<td>522.81</td>
<td>522.83</td>
<td>522.51</td>
<td>522.73</td>
</tr>
<tr>
<td>4-Sep-07</td>
<td>515.02</td>
<td>528.00</td>
<td>514.62</td>
<td>525.15</td>
<td>523.30</td>
<td>524.50</td>
<td>523.20</td>
<td>523.97</td>
</tr>
</tbody>
</table>

As we do in single series sample above we need to convert this table into acceptable format, the only difference between these two samples is the fact that now we have two data sets - one for each year:

```
  chart.ohlc([
    {x: Date.UTC(2007, 7, 28), open:511.53, high:514.98, low:505.79, close:506.40},
    {x: Date.UTC(2007, 7, 29), open:507.84, high:513.30, low:507.23, close:512.88},
    {x: Date.UTC(2007, 7, 30), open:512.36, high:515.40, low:510.58, close:511.40},
    {x: Date.UTC(2007, 7, 31), open:513.10, high:516.50, low:511.47, close:515.25},
    {x: Date.UTC(2007, 8, 4), open:515.02, high:528.00, low:514.62, close:525.15}
  ]);
  
  chart.ohlc([
    {x: Date.UTC(2007, 7, 28), open: 522.95, high: 523.10, low: 522.50, close: 522.52},
    {x: Date.UTC(2007, 7, 29), open: 522.60, high: 522.69, low: 522.27, close: 522.55},
    {x: Date.UTC(2007, 7, 30), open: 522.49, high: 522.91, low: 522.38, close: 522.61},
    {x: Date.UTC(2007, 7, 31), open: 522.81, high: 522.83, low: 522.51, close: 522.73},
    {x: Date.UTC(2007, 8, 4),  open: 523.30, high: 524.50, low: 523.20, close: 523.97}
  ]);
```

{sample}BCT\_OHLC\_Chart\_02{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and much more. All axis features are described in [Axes Basics](../Axes_and_Grids/Axis_Basics) tutorial. In this section we will quickly demonstrate how axis orientation can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.

### Orientation

With AnyChart you can place axes to any side if the chart, all you need to do is to adjust {api:anychart.core.axes.Linear#orientation}**.orientation()**{api} parameter of {api:anychart.charts.Cartesian#yAxis}**.yAxis()**{api} or {api:anychart.charts.Cartesian#xAxis}**.xAxis()**{api} methods.

```
  var xAxis = chart.xAxis();
  xAxis.orientation("top");
  var yAxis = chart.yAxis();
  yAxis.orientation("right");
```

And here is the demonstration of this feature on the Single-series sample:

{sample}BCT\_OHLC\_Chart\_03{sample}

### Logarithmic Scale

AnyChart allows to make Y, X or any extra axis Logarithmic. This is controlled by {api:anychart.scales.Logarithmic}**.scale()**{api}:

```
  logScale = anychart.scales.log();
  logScale.minimum(0.1);
  logScale.maximum(100);
  chart.yScale(logScale);
```

And here is the demonstration of Logarithmic Y Axis on slightly modified the Single-series sample:

{sample}BCT\_OHLC\_Chart\_04{sample}

### Minimum and Maximum

By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale positioning chart sample above: minimal value on the Y Axis is 500, and maximum is 535. You can control these values by setting {api:anychart.scales.Linear#maximum}**.maximum()**{api} and {api:anychart.scales.Linear#minimum}**.minimum()**{api} parameters of {api:anychart.charts.Cartesian#yScale}**.yScale()**{api} method. As far as you want to adjusted the scale, it's desirable to set {api:anychart.scales.ScatterTicks#interval}**.ticks().interval()**{api} as well, in case default interval is twisted:

```
  var yScale = chart.yScale();
  yScale.minimum(505);
  yScale.maximum(530);
  var yTicks = chart.yScale().ticks();
  yTicks.interval(5);
```

And here is the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_OHLC\_Chart\_05{sample}

## Visualization

In this section we will describe main parts of OHLC chart visualization and ways to adjust it.<!-- Also you will see list of predefined styles.--> Visual appearance of OHLC is defined using certain methods and parameters. The most important for OHLC parameters are {api:anychart.core.cartesian.series.OHLC#fallingStroke}**.fallingStroke()**{api} and {api:anychart.core.cartesian.series.OHLC#risingStroke}**.risingStroke()**{api}.

### Basic sample

Now, let's look how to adjust OHLC appearance:

```
  var series = chart.ohlc(data);
  series.fallingStroke("red", 1);
  series.risingStroke("green", 1);
  series.hoverFallingStroke("darkred", 3);
  series.hoverRisingStroke("darkgreen", 3);
```

Using these settings we've set red color for every falling OHLC point and green color for every rising OHLC point. Also, our rising OHLC points have dark green color, if mouse is over, as well as all falling points have dark red color, if mouse is over. Thickness of strokes was adjusted too. It's 1 px for all points and 3px if mouse over.

{sample}BCT\_OHLC\_Chart\_06{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.<!-- Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips.-->
  
  
If you want to configure data labels and tooltips for all series - you should do that using {api:anychart.core.cartesian.series.Base#labels}**.labels()**{api} and {api:anychart.core.cartesian.series.Base#tooltip}**.tooltip()**{api} methods. You can tune their visual appearance, positioning and format. Let's do that in the following example: we will make data labels appear to the bottom of the data points, also, we will format labels so they show only the date and tooltip will show detailed description.
  
  
When formatting data labels text and tooltip we can use {api:anychart.core.ui.Tooltip#contentFormatter}**.contentFormatter()**{api} and {api:anychart.core.ui.LabelsFactory#textFormatter}**.textFormatter()**{api}.

{sample}BCT\_OHLC\_Chart\_07{sample}
<!--
Related Help Topics:

Learn more about labels and tooltips in Labels and tooltips
Full Keywords reference and formatting guide:Labels and tooltips
Full reference of data labels settings can be found in XML Reference, particularly <label_style> and <label> nodes.
-->

## Colors

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not define special colors. But you can apply the color to exact data series or data point.

### Colorizing elements

Let's demonstrate how to apply different colors to different data series. As far as this series has two types of points (with rising and falling values) it has two methods for adjusting series color. 


To apply the color to the series we need to set {api:anychart.core.cartesian.series.OHLC#fallingStroke}**.fallingStroke()**{api} parameter to define color for all points with falling values and {api:anychart.core.cartesian.series.Candlestick#risingStroke}**.risingStroke()**{api} parameter to define color for all points with rising values:

{sample}BCT\_OHLC\_Chart\_08{sample}

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined color for all elements. We will set "Rgb(180,77,77)" color for minimum point and "Rgb(77,180,77)" for the maximal one.
As you see it is very easy to do by setting {api:anychart.core.cartesian.series.OHLC#fallingStroke}**.fallingStroke()**{api} and {api:anychart.core.cartesian.series.OHLC#risingStroke}**.risingStroke()**{api} parameter for point.

{sample}BCT\_OHLC\_Chart\_09{sample}

**Important Note:**

AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors, for example, instead of "Rgb(180,77,77)" you can set "#b44d4d"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

## Advanced OHLC Chart sample - OHLC, Line and Range Area Combination

In the real world application Open-High-Low-Close rarely used alone, in technical analysis they are often combined with charts of other types, such as [Lines](./Line-Spline-StepLine_Charts) (to show **moving average**), [Range Areas](./Range_Area-SplineArea_Charts) (to show **"Bollinger bands"**), and [Column Charts](./Column_Chart) (to show **trading volume**).
  
  
AnyChart provides most of features that developer needs to create a complex financial chart, this includes Combination charts, Dashboards and Interactivity features. The sample below shows a typical stock trading report and it can be used as a starting point in your integration of AnyChart into Financial/Trading/Reporting application.

{sample}BCT\_OHLC\_Chart\_10{sample}
