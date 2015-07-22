# Japanese Candlestick Chart

* [Overview](#overview)
* [Chart](#chart)
  * [Single Series](#single_series)
  * [Multi-series](#multi-series)
* [Axes](#axes)
  * [Orientation](#orientation)
  * [Logarithmic Scale](#logarithmic_scale)
  * [Minimum and Maximum](#minimum_and_maximum)
* [Visualization](#visualization)
  * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Colors](#colors)
  * [Colorizing Elements](#colorizing_elements)
* [Advanced Candlestick Chart Sample - Candlestick, Line and Range Area Combination](#advanced_candlestick_chart_sample_-_candlestick,_line_and_range_area_combination)

## Overview

The Japanese candlestick chart is a combination of a line chart and a bar chart used primarily to describe price movements of an equity over time, where each bar represents the range of price movement over a given time interval. It is mostly used in technical analysis of equity and currency price patterns.
  
  
Candlesticks are usually consist of the body (black or white), an upper and a lower shadow (wick). The wick illustrates the highest and lowest traded prices of a stock, and the body represents the opening and closing trades. If the stock went up, the body is white, with the opening price at the bottom of the body and the closing price at the top. If the stock went down, the body is black, with the opening price at the top and the closing price at the bottom. It's not necessary for a candlestick to have either a body or a wick.
  
  
Some traders find candlestick charts easier to read, than [Open-High-Low-Close charts](OHLC_Chart).

## Chart

The candlestick chart uses four values, so we need to pass the opening, the highest, the lowest and the closing price values to the chart. This 
should be done as setting **open**, **high**, **low**, **close** parameters into second, third, fourth and fifth columns:

```
  ["White", 507, 511, 506, 510]
```

### Single-Series

Let's look at the single-series candlestick chart created using an imaginable price ranges that will show candlestick's basic patterns:

<table width="319" border="1" class="dtTABLE">
<tbody><tr>
<th width="133"><b>Pattern</b></th>
<th width="38"><b>Open</b></th>
<th width="38"><b>High</b></th>
<th width="38"><b>Low</b></th>
<th width="38"><b>Close</b></th>
</tr>
<tr>
<td>White </td>
<td>507</td>
<td>511</td>
<td>506</td>
<td>510</td>
</tr>
<tr>
<td>Black</td>
<td>510</td>
<td>511</td>
<td>506</td>
<td>507</td>
</tr>
<tr>
<td>Long lower shadow</td>
<td>508.5</td>
<td>511</td>
<td>506</td>
<td>510</td>
</tr>
<tr>
<td>Long upper shadow</td>
<td>508.5</td>
<td>511</td>
<td>506</td>
<td>507</td>
</tr>
<tr>
<td>Hammer </td>
<td>510</td>
<td>511</td>
<td>506</td>
<td>511</td>
</tr>
<tr>
<td>Inverted hammer</td>
<td>507</td>
<td>511</td>
<td>506</td>
<td>506</td>
</tr>
<tr>
<td>Spinning top white</td>
<td>508</td>
<td>511</td>
<td>506</td>
<td>509</td>
</tr>
<tr>
<td>Spinning top black</td>
<td>509</td>
<td>511</td>
<td>506</td>
<td>508</td>
</tr>
<tr>
<td>Doji</td>
<td>508.5</td>
<td>510</td>
<td>507</td>
<td>508.5</td>
</tr>
<tr>
<td>Long legged doji </td>
<td>508.5</td>
<td>511</td>
<td>506</td>
<td>508.5</td>
</tr>
<tr>
<td>Dragonfly doji</td>
<td>511</td>
<td>511</td>
<td>506</td>
<td>511</td>
</tr>
<tr>
<td>Gravestone doji</td>
<td>506</td>
<td>511</td>
<td>506</td>
<td>506</td>
</tr>
<tr>
<td>Marubozu white</td>
<td>506</td>
<td>511</td>
<td>506</td>
<td>511</td>
</tr>
<tr>
<td>Marubozu black</td>
<td>511</td>
<td>511</td>
<td>506</td>
<td>506</td>
</tr>
</tbody>
</table>

Now we need to convert this data into acceptable format.

```
  var data = [
    ["White", 507, 511, 506, 510],
    ["Black", 510, 511, 506, 507],
    ["Long lower shadow", 508.5, 511, 506, 510],
    ["Long upper shadow", 508.5, 511, 506, 507],
    ["Hammer", 510, 511, 506, 511],
    ["Inverted hammer", 507, 511, 506,506],
    ["Spinning top white", 508, 511, 506, 509],
    ["Spinning top black", 509, 511, 506, 508],
    ["Doji", 508.5, 510, 507, 508.5],
    ["Long legged doji", 508.5, 511, 506, 508.5],
    ["Dragonfly doji", 511, 511, 506, 511],
    ["Gravestone doji", 506, 511, 506, 506],
    ["Marubozu white", 506, 511, 506, 511],
    ["Marubozu black", 511, 511, 506, 506]
  ];
```

As you can see, we've specified chart as "Candlestick". Each series of data contains **column name, open, high, low and close** parameters.
  
  
Here it is - AnyChart can now visualize your data. Look at the chart sample below and click on it to see it's java source.

{sample}BCT\_Japaneese-Candlestick\_Chart\_01{sample}

### Multi-series

To compare two or more data rows you should use multi-series candlestick charts as it is shown in the sample below.
  
  
Let's compare ACME Corp. and Duff Brewing Corp. stock prices sales:

<table width="287" border="1" class="dtTABLE">
<tbody><tr>
<th width="75"><b>Company</b></th>
<th colspan="4"><b>ACME Corp</b>.</th>
<th colspan="4"><b>Duff Brewery Corp</b>.</th>
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

As we did in single-series sample above, now we need to convert this table into an acceptable format, the only difference between these two samples is the fact that now we have two data sets - one for each year:

```
  chart.candlestick([
    {x: Date.UTC(2007, 7, 28), open:511.53, high:514.98, low:505.79, close:506.40},
    {x: Date.UTC(2007, 7, 29), open:507.84, high:513.30, low:507.23, close:512.88},
    {x: Date.UTC(2007, 7, 30), open:512.36, high:515.40, low:510.58, close:511.40},
    {x: Date.UTC(2007, 7, 31), open:513.10, high:516.50, low:511.47, close:515.25},
    {x: Date.UTC(2007, 8, 4),  open:515.02, high:528.00, low:514.62, close:525.15}
  ]);

  chart.candlestick([
    {x: Date.UTC(2007, 7, 28), open: 522.95, high:523.10, low:522.50, close:522.52},
    {x: Date.UTC(2007, 7, 29), open: 522.60, high:522.69, low:522.27, close:522.55},
    {x: Date.UTC(2007, 7, 30), open: 522.49, high:522.91, low:522.38, close:522.61},
    {x: Date.UTC(2007, 7, 31), open: 522.81, high:522.83, low:522.51, close:522.73},
    {x: Date.UTC(2007, 8, 4),  open: 523.30, high:524.50, low:523.20, close:523.97}
  ]);
```

{sample}BCT\_Japaneese-Candlestick\_Chart\_02{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and else. In this section we will quickly demonstrate how we can adjust axis orientation, invert axis scale and control minimum and maximum values.

### Orientation

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust orientation with {api:anychart.core.axes.Linear#orientation}**.orientation()**{api} parameter of {api:anychart.charts.Cartesian#yAxis}**.yAxis()**{api} or {api:anychart.charts.Cartesian#xAxis}**.xAxis()**{api} methods.

```
  chart.xAxis().orientation("top");
  chart.yAxis().orientation("right");
```

And this is the demonstration of this feature in the Single-series sample:

{sample}BCT\_Japaneese-Candlestick\_Chart\_03{sample}

### Logarithmic Scale

AnyChart allows to make Y, X or any other axis Logarithmic. This is controlled by {api:anychart.scales}**scale**{api}:

```
  var logScale = anychart.scales.log();
  logScale.minimum(0.1);
  logScale.maximum(100);
  chart.yScale(logScale);
```

And this is the demonstration of making the Y-Axis Logarithmic in the slightly modified Single-series sample:

{sample}BCT\_Japaneese-Candlestick\_Chart\_04{sample}

### Minimum and Maximum

AnyChart calculates axis minimum and maximum automatically. You can see this on the scale inversion chart sample above: the minimal value of the Y-Axis is 500, and the maximum is 535. You can control these values by setting **.maximum()** and **.minimum()** parameters of {api:anychart.charts.Cartesian#yScale}**.yScale()**{api} method. As far as you want to adjust the  interval of the scale, it's desirable to set **.ticks().interval()** as well, in case default interval is twisted:

```
  var yScale = chart.yScale();
  yScale.minimum(505);
  yScale.maximum(530);
  var yTicks = chart.yScale().ticks();
  yTicks.interval(5)
```

And here is the demonstration of setting the max and the min values in the Single-series sample:

{sample}BCT\_Japaneese-Candlestick\_Chart\_05{sample}

## Visualization

In this section we will describe main parts of candlestick chart visualization and ways to adjust it. Also you will see list of predefined styles. Visual appearance of candlestick is defined using certain parameters. The most important for candlestick parameters are {api:anychart.core.cartesian.series.Candlestick#fallingStroke}**.fallingStroke()**{api}, {api:anychart.core.cartesian.series.Candlestick#risingStroke}**.risingStroke()**{api}, {api:anychart.core.cartesian.series.Candlestick#risingFill}**.risingFill()**{api} and {api:anychart.core.cartesian.series.Candlestick#fallingFill}**.fallingFill()**{api}.

### Basic Sample

Now, let's look how to adjust candlestick's appearance:

```
  var series = chart.candlestick(data);
  series.fallingStroke("black", 1);
  series.risingStroke("black", 1);
  series.hoverFallingStroke("red", 3);
  series.hoverRisingStroke("red", 3);
  series.fallingFill("black");
  series.risingFill("white");
```

Using these settings we've set red color for every falling candlestick point and green color for rising ones. Also, our rising candlestick points go dark green if hovered as well as all falling points have dark red color in the same state. Thickness of strokes was adjusted too. It's 3 px for all points in normal state and 5px when hovered. 

{sample}BCT\_Japaneese-Candlestick\_Chart\_06{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.
<!-- Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips.-->

If you want to configure data labels and tooltips for all series - you should use {api:anychart.core.cartesian.series.Base#labels}**.labels()**{api} and {api:anychart.core.cartesian.series.Base#tooltip}**.tooltip()**{api} methods. Adding attributes with values to these methods, you can change visual appearance, position and format of the same-named elements.

With the following example let's make data labels appear to the top from the data points, format them to show only the value corresponding to the point and force tooltips to show detailed description.

When formatting data labels' text and tooltips we can use {api:anychart.core.ui.Tooltip#contentFormatter}**.contentFormatter()**{api} and {api:anychart.core.ui.LabelsFactory#textFormatter}**.textFormatter()**{api}.

{sample}BCT\_Japaneese-Candlestick\_Chart\_07{sample}
<!--
Related Help Topics:

Learn more about labels and tooltips in Labels and tooltips
Full Keywords reference and formatting guide:Labels and tooltips
Full reference of data labels settings can be found in XML Reference, particularly <label_style> and <label> nodes.
-->

## Colors

AnyChart uses default color palette to colorize data elements of chart automatically if you have not defined special colors.

### Colorizing Elements

Now let's study how to apply different colors to different data series. To apply the color to the exact series we need to set the {api:anychart.graphics.vector.Fill}**.fill()**{api} parameter in the {api:anychart.core.cartesian.series}**series**{api}. In the sample below we have 5 series with sample data and we'll color each series to different color. Here is the sample:

{sample}BCT\_Japaneese-Candlestick\_Chart\_08{sample}

Look at the individual points we colorized in the sample below. We've got a chart with one series and predefined color for all elements. We set "Rgb(180,77,77)" color for the minimum point and **"Rgb(77,180,77)"** for the maximum one.
As you see it is very easy to do by setting a value for the {api:anychart.graphics.vector.Fill}**fill()**{api} **parameter of a point.

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined color for all elements. We will set **"Rgb(180,77,77)"** color for minimum point and "Rgb(77,180,77)" for the maximal one. As you see it is very easy to do by setting {api:anychart.core.cartesian.series.Candlestick#fallingFill}**fallingFill()**{api} and {api:anychart.core.cartesian.series.Candlestick#risingFill}**risingFill()**{api} parameters for a point.

{sample}BCT\_Japaneese-Candlestick\_Chart\_09{sample}


**Important Note:**
  
AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors. For example, instead of "Rgb(180,77,77)" you can set "HSB(0, 57, 71)" or "#b44d4d"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:
  

## Advanced Candlestick Chart Sample - Candlestick, Line and Range Area Combination

Japanese Candlestick Series are rarely used alone, in technical analysis they are often combined with charts of other types, such as Lines (to show **moving average**), Range Areas (to show **"Bollinger bands"**), and Column Charts (to show **trading volume**).
  
  
AnyChart provides most of the features which might be necesary in creating a complex financial chart. This includes Combination charts, Dashboards and Interactivity features. The sample below shows a typical stock trading report and it can be used as a starting point in your integration of AnyChart into Financial/Trading/Reporting application.

{sample}BCT\_Japaneese-Candlestick\_Chart\_10{sample}
