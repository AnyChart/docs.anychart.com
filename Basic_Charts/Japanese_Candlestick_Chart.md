{:index 1}
# Japanese Candlestick Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Labels](#labels)
  * [Tooltips](#tooltips)
* [All Candlestick Types](#all_candlestick_types)
* [Advanced Candlestick Chart Sample - Candlestick, Line and Range Area Combination](#advanced_candlestick_chart_sample_-_candlestick,_line_and_range_area_combination)


## Overview

The Japanese candlestick chart is a combination of a line chart and a bar chart used primarily to describe price movements of an equity over time, where each bar represents the range of price movement over a given time interval. It is mostly used in technical analysis of equity and currency price patterns.

This article explains how to create a basic Japanese Candlestick chart as well as configure specific settings. See the table below to get a brief overview of the Japanese Candlestick chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Candlestick}anychart.core.cartesian.series.Candlestick{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[open, high, low, close](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Stock</td><td>[Stock Japanese Candlestick](../Stock_Charts/Series/Japanese_Candlestick)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="http://www.anychart.com/chartopedia/chart-types/japanese-candlestick-chart/" target="_blank">Chartopedia: Japanese Candlestick Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>  
  
Candlesticks are usually consist of the body (black or white), an upper and a lower shadow (wick). The wick illustrates the highest and lowest traded prices of a stock, and the body represents the opening and closing trades. If the stock went up, the body is white, with the opening price at the bottom of the body and the closing price at the top. If the stock went down, the body is black, with the opening price at the top and the closing price at the bottom. It's not necessary for a candlestick to have either a body or a wick.  
  
Some traders find candlestick charts easier to read, than [Open-High-Low-Close charts](OHLC_Chart).

Japanese Candlestick is a type of series that is predominantly used for demonstrating the stock market data, due to its specifics. So AnyChart Japanese Candelstick series are built in an appropriate way for using them on Stock plot. Learn more about using Japanese Candlestick series in Stocks in the [Japanese Candlestick series in Stocks](../Stock_Charts/Series/Japanese_Candlestick) article.


## Quick Start

To create a Japanese Candlestick chart, use the {api:anychart#financial}anychart.financial(){api} chart constructor. If you pass the data to this chart constructor, it will create a Candlestick series.

To create a Candlestick series explicitly, call the {api:anychart.charts.Cartesian#candlestick}candlestick(){api} method.

The following sample demonstrates how a basic single-series Japanese Candlestick chart is created using an imaginable price ranges:

```
// create a data set
var data = anychart.data.set([
    [Date.UTC(2007, 08, 07), 22.75, 23.7, 22.69, 23.44],
    [Date.UTC(2007, 08, 06), 23.03, 23.15, 22.44, 22.97],
    [Date.UTC(2007, 08, 03), 23.2, 23.39, 22.87, 22.92],
    [Date.UTC(2007, 08, 02), 22.65, 23.7, 22.65, 23.36],
    [Date.UTC(2007, 08, 01), 23.17, 23.4, 22.85, 23.25],
    [Date.UTC(2007, 07, 31), 23.88, 23.93, 23.24, 23.25],
    [Date.UTC(2007, 07, 30), 23.55, 23.88, 23.38, 23.62],
    [Date.UTC(2007, 07, 27), 23.98, 24.49, 23.47, 23.49],
    [Date.UTC(2007, 07, 26), 23.2, 23.39, 22.87, 22.92],
    [Date.UTC(2007, 07, 25), 22.75, 23.7, 22.69, 23.44],
    [Date.UTC(2007, 07, 24), 22.65, 23.7, 22.65, 23.36],
    [Date.UTC(2007, 07, 23), 23.55, 23.88, 23.38, 23.62]
]);

// create a chart
chart = anychart.financial();
    
var seriesData = data.mapAs({x: [0], open: [1], high: [2], low: [3], close: [4]});

// create an area series and set the data
var series = chart.candlestick(seriesData);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Japanese-Candlestick\_Chart\_01{sample}


## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Area chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

In this section we will describe main parts of candlestick chart visualization and ways to adjust it. Visual appearance of candlestick is defined using certain parameters. The most important parameters for jaapanese candlestick series are the following:

* {api:anychart.core.cartesian.series.Candlestick#fallingStroke}fallingStroke(){api}, {api:anychart.core.cartesian.series.Candlestick#risingStroke}risingStroke(){api}, {api:anychart.core.cartesian.series.Candlestick#fallingFill}fallingFill(){api}, {api:anychart.core.cartesian.series.Candlestick#risingFill}risingFill(){api}, {api:anychart.core.cartesian.series.Candlestick#fallingHatchFill}fallingHatchFill(){api}, {api:anychart.core.cartesian.series.Candlestick#risingHatchFill}risingHatchFill(){api} methods are used for adjusting stroking, filling colors or hatch type of rising and falling candlesticks
* {api:anychart.core.cartesian.series.Candlestick#hoverFallingStroke}hoverFallingStroke(){api}, {api:anychart.core.cartesian.series.Candlestick#hoverRisingStroke}hoverRisingStroke(){api}, {api:anychart.core.cartesian.series.Candlestick#hoverFallingFill}hoverFallingFill(){api}, {api:anychart.core.cartesian.series.Candlestick#hoverRisingFill}hoverRisingFill(){api}, {api:anychart.core.cartesian.series.Candlestick#hoverFallingHatchFill}hoverFallingHatchFill(){api}, {api:anychart.core.cartesian.series.Candlestick#hoverRisingHatchFill}hoverRisingHatchFill(){api} methods are used for adjusting stroking, filling colors or hatch type of rising and falling candlesticks in the hovered state
* {api:anychart.core.cartesian.series.Candlestick#selectFallingStroke}selectFallingStroke(){api}, {api:anychart.core.cartesian.series.Candlestick#selectRisingStroke}selectRisingStroke(){api}, {api:anychart.core.cartesian.series.Candlestick#selectFallingFill}selectFallingFill(){api}, {api:anychart.core.cartesian.series.Candlestick#selectRisingFill}selectRisingFill(){api}, {api:anychart.core.cartesian.series.Candlestick#selectFallingHatchFill}selectFallingHatchFill(){api}, {api:anychart.core.cartesian.series.Candlestick#selectRisingHatchFill}selectRisingHatchFill(){api} methods are used for adjusting stroking, filling colors or hatch type of rising and falling candlesticks while they are selected.

You can learn more from the [Appearance Settings](../Appearance_Settings) section.

In the sample below, there are two Japanese Candlestick series with some of the appearance settings configured:

```
// set colors for the first series
series1.risingStroke("#0066cc");
series1.risingFill("#0066cc", 0.3);
series1.hoverRisingStroke("#0066cc", 2);
series1.hoverRisingFill("#0066cc", 0.1);
series1.selectRisingStroke("#0066cc", 4);
series1.selectRisingFill("#0066cc", 0.5);

series1.fallingStroke("#00cc99", 1, "10 5", "round");
series1.fallingFill("#00cc99", 0.3);
series1.hoverFallingStroke("#00cc99", 2, "10 5", "round");
series1.hoverFallingFill("#00cc99", 0.1);
series1.selectFallingStroke("#00cc99", 4, "10 5", "round");
series1.selectFallingFill("#00cc99", 0.5);

// set hatch for the second series
series2.fallingHatchFill("forwardDiagonal");
series2.risingHatchFill("backwardDiagonal");
series2.hoverFallingHatchFill("diagonalCross");
series2.hoverRisingHatchFill("diagonalCross");
series2.selectFallingHatchFill("percent20");
series2.selectRisingHatchFill("percent20");
```

{sample}BCT\_Japanese-Candlestick\_Chart\_02{sample}


### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (they can be enabled on a whole series or for a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.


### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.


## All Candlestick Types

The sample with the following data demonstrates all possible types of candlesticks.

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
 
{sample}BCT\_Japanese-Candlestick\_Chart\_03{sample}


## Advanced Candlestick Chart Sample - Candlestick, Line and Range Area Combination

Japanese Candlestick Series are rarely used alone, in technical analysis they are often combined with charts of other types, such as [Lines](./Line_Chart) (to show **moving average**), [Range Areas](./Range_Area_Chart) (to show **"Bollinger bands"**), and [Column Charts](./Column_Chart) (to show **trading volume**).
  
  
AnyChart javascript charting library provides most of the features which might be necessary in creating a complex financial chart. This includes Combination charts, Dashboards and Interactivity features. The sample below shows a typical stock trading report and it can be used as a starting point in your integration of AnyChart into Financial/Trading/Reporting application.

{sample}BCT\_Japanese-Candlestick\_Chart\_04{sample}