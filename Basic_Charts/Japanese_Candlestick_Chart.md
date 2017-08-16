{:index 1.5}
# Japanese Candlestick Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Labels](#labels)
  * [Tooltips](#tooltips)
* [Candlestick Patterns](#candlestick_patterns)


## Overview

A Japanese candlestick chart is a combination of a line and bar chart used to describe price movements of an equity over time, where each bar represents the range of price movement over a given time interval. It is mostly used in technical analysis of equity and currency price patterns.
  
Candlesticks consist of the body (black or white) and an upper and a lower shadow (wick). The wick illustrates the highest and lowest traded prices of a stock, and the body represents the opening and closing trades. If the stock went up, the body is white, with the opening price at the bottom of the body and the closing price at the top. If the stock went down, the body is black, with the opening price at the top and the closing price at the bottom. It is not necessary for a candlestick to have either a body or a wick.  
  
Some traders find candlestick charts easier to read than [OHLC charts](OHLC_Chart).

Japanese Candlestick is a series type that is predominantly used for demonstrating the stock market data, due to its specifics. So AnyChart Japanese Candlestick series are also available in AnyStock – see the [Japanese Candlestick series in AnyStock](../Stock_Charts/Series/Japanese_Candlestick) article to learn more.

This article explains how to create a basic Japanese Candlestick chart as as well as configure settings that are specific to the type. See the table below to get a brief overview of the Japanese Candlestick chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Candlestick}anychart.core.cartesian.series.Candlestick{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, open, high, low, close](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[Vertical Japanese Candlestick](Vertical/Japanese_Candlestick_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>[Stock Japanese Candlestick](../Stock_Charts/Series/Japanese_Candlestick)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[OHLC](OHLC_Chart)</td></tr>
<tr><td></td><td>[HiLo](HiLo_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/japanese-candlestick-chart/" target="_blank">Chartopedia: Japanese Candlestick Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>


## Quick Start

To create a Japanese Candlestick chart, use the {api:anychart#financial}anychart.financial(){api} chart constructor. If you pass the data to this chart constructor, it creates a Candlestick series.

To create a Candlestick series explicitly, call the {api:anychart.charts.Cartesian#candlestick}candlestick(){api} method.

The following sample demonstrates how a basic single-series Japanese Candlestick chart is created:

```
// create a data set
var data = anychart.data.set([
  [Date.UTC(2007, 07, 23), 23.55, 23.88, 23.38, 23.62],
  [Date.UTC(2007, 07, 24), 22.65, 23.7, 22.65, 23.36],
  [Date.UTC(2007, 07, 25), 22.75, 23.7, 22.69, 23.44],
  [Date.UTC(2007, 07, 26), 23.2, 23.39, 22.87, 22.92],
  [Date.UTC(2007, 07, 27), 23.98, 24.49, 23.47, 23.49],
  [Date.UTC(2007, 07, 30), 23.55, 23.88, 23.38, 23.62],
  [Date.UTC(2007, 07, 31), 23.88, 23.93, 23.24, 23.25],
  [Date.UTC(2007, 08, 01), 23.17, 23.4, 22.85, 23.25],
  [Date.UTC(2007, 08, 02), 22.65, 23.7, 22.65, 23.36],
  [Date.UTC(2007, 08, 03), 23.2, 23.39, 22.87, 22.92],
  [Date.UTC(2007, 08, 06), 23.03, 23.15, 22.44, 22.97],
  [Date.UTC(2007, 08, 07), 22.75, 23.7, 22.69, 23.44]
]);

// create a chart
chart = anychart.financial();
 
// map the data    
var seriesData = data.mapAs({x: [0], open: [1], high: [2], low: [3], close: [4]});

// create a japanese candlestick series and set the data
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

You can set the stroke, fill, and hatch fill of falling and rising candlesticks. Use the following methods:

* {api:anychart.core.cartesian.series.Candlestick#fallingFill}fallingFill(){api}, {api:anychart.core.cartesian.series.Candlestick#fallingHatchFill}fallingHatchFill(){api}, {api:anychart.core.cartesian.series.Candlestick#fallingStroke}fallingStroke(){api}
* {api:anychart.core.cartesian.series.Candlestick#risingFill}risingFill(){api}, {api:anychart.core.cartesian.series.Candlestick#risingHatchFill}risingHatchFill(){api}, {api:anychart.core.cartesian.series.Candlestick#risingStroke}risingStroke(){api}

To configure these settings on hover, use:

* {api:anychart.core.cartesian.series.Candlestick#hoverFallingStroke}hoverFallingStroke(){api}, {api:anychart.core.cartesian.series.Candlestick#hoverFallingFill}hoverFallingFill(){api}, {api:anychart.core.cartesian.series.Candlestick#hoverFallingHatchFill}hoverFallingHatchFill(){api}
* {api:anychart.core.cartesian.series.Candlestick#hoverRisingStroke}hoverRisingStroke(){api}, {api:anychart.core.cartesian.series.Candlestick#hoverRisingFill}hoverRisingFill(){api}, {api:anychart.core.cartesian.series.Candlestick#hoverRisingHatchFill}hoverRisingHatchFill(){api}

To configure these settings on select, use:

* {api:anychart.core.cartesian.series.Candlestick#selectFallingStroke}selectFallingStroke(){api}, {api:anychart.core.cartesian.series.Candlestick#selectFallingFill}selectFallingFill(){api}, {api:anychart.core.cartesian.series.Candlestick#selectFallingHatchFill}selectFallingHatchFill(){api}
* {api:anychart.core.cartesian.series.Candlestick#selectRisingStroke}selectRisingStroke(){api}, {api:anychart.core.cartesian.series.Candlestick#selectRisingFill}selectRisingFill(){api}, {api:anychart.core.cartesian.series.Candlestick#selectRisingHatchFill}selectRisingHatchFill(){api}

You can learn more from the [Appearance Settings](../Appearance_Settings) section.

In the sample below, there are two Japanese Candlestick series with some of the appearance settings configured:

```
// configure the visual settings of the first series
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

// configure the visual settings of the second series
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


## Candlestick Patterns

In technical analysis, a candlestick pattern is a movement in prices shown graphically on a candlestick chart. Some believe that it can predict a particular market movement. The recognition of the pattern is subjective, and charting programs have to rely on predefined rules to match the pattern. There are 42 recognized patterns, which can be divided into two groups: simple and complex.

Here are the most popular simple patterns, shown in the sample below:

<table width="319" border="1" class="dtTABLE">
<tbody><tr>
<th width="133"><b>Pattern</b></th>
<th width="152"><b>Description</b></th>
</tr>
<tr>
<td>White </td>
<td>The close price is lower than the open price, and both are lower that the high price and upper than the low price. The difference between the values is not significant.</td>
</tr>
<tr>
<td>Black</td>
<td>The open price is lower than the close price, and both are lower that the high price and upper than the low price. The difference between the values is not significant.</td>
</tr>
<tr>
<td>Long lower shadow</td>
<td>The close price is lower than the open price, and both are lower that the high price and upper than the low price, wherein the difference between the low price and the body is quite higher than between the high price and the body.</td>
</tr>
<tr>
<td>Long upper shadow</td>
<td>The open price is lower than the close price, and both are lower that the high price and upper than the low price, wherein the difference between the high price and the body is quite higher than between the low price and the body.</td>
</tr>
<tr>
<td>Hammer </td>
<td>The open price is lower than the close price, and the close price equals the high price.</td>
</tr>
<tr>
<td>Inverted hammer</td>
<td>The close price is lower than the open price, and the close price equals the low price.</td>
</tr>
<tr>
<td>Spinning top white</td>
<td>This pattern indicates the indecision between the buyers and sellers. If a spinning top forms during an uptrend, this usually means there aren’t many buyers left, if a spinning top forms during a downtrend, this means there aren’t many sellers left. Color of the body is not very important. </td>
</tr>
<tr>
<td>Spinning top black</td>
<td>This pattern indicates the indecision between the buyers and sellers. If a spinning top forms during an uptrend, this usually means there aren’t many buyers left, if a spinning top forms during a downtrend, this means there aren’t many sellers left. Color of the body is not very important. </td>
</tr>
<tr>
<td>Four Price Doji</td>
<td>All four prices are equal.</td>
</tr>
<tr>
<td>Long legged doji </td>
<td>Prices moved above and below the open price, but the close price equals the open price.</td>
</tr>
<tr>
<td>Dragonfly doji</td>
<td>The open price equals the close price and they both are the same as the high price.</td>
</tr>
<tr>
<td>Gravestone doji</td>
<td>The open price equals the close price and they both are the same as the low price.</td>
</tr>
<tr>
<td>Marubozu white</td>
<td>The open price equals the low price and the close price equals the high price.</td>
</tr>
<tr>
<td>Marubozu black</td>
<td>The open equals the high and the close equals the low.</td>
</tr>
</tbody>
</table>

{sample}BCT\_Japanese-Candlestick\_Chart\_03{sample}