{:index 1}
# Open High Low Close (OHLC) Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Labels](#labels)
  * [Tooltips](#tooltips)

## Overview

An **open-high-low-close** chart (also known as **OHLC**, **HLOC** chart) is a type of chart typically used to illustrate movements in the price of a financial instrument over time. Each vertical line on the chart shows the price range (the highest and lowest prices) over one unit of time, e.g. one day or one hour. Tick marks project from each side of the line indicating the opening price (e.g. for a daily bar chart this would be the starting price for that day) on the left, and the closing price for that time period on the right. The bars may be shown in different hues depending on whether prices rose or fell in that period.

The [Japanese candlestick chart](Japanese_Candlestick_Chart) is another way of displaying market price data, with the opening and closing prices defining a rectangle within the range for each time unit. Both charts show the exact same data, i.e. the opening, high, low, and closing prices during a particular time frame. Some traders find the Candlestick Chart easier to read.

OHLC is a type of series that is predominantly used for demonstrating the stock market data, due to its specifics. So AnyChart OHLC series are available in AnyStock. Learn more about using OHLC series in Stocks in the [OHLC series in Stocks](../Stock_Charts/Series/OHLC) article.

This article explains how to create a basic OHLC chart as well as configure specific settings. See the table below to get a brief overview of the OHLC chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.OHLC}anychart.core.cartesian.series.OHLC{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[open, high, low, close](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>Vertical OHLC</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>[Stock OHLC](../Stock_Charts/Series/Japanese_Candlestick)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Japanese Candlestick](OHLC_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/ohlc-chart/" target="_blank">Chartopedia: OHLC Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table> 

## Quick Start

To create an OHLC chart, use the {api:anychart#financial}anychart.financial(){api} chart constructor. If you pass the data to this chart constructor, it will create an OHLC series.

To create an OHLC series explicitly, call the {api:anychart.charts.Cartesian#ohlc}ohlc(){api} method.

The following sample demonstrates how a basic single-series OHLC chart is created using an imaginable price ranges:

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

// create an ohlc series and set the data
var series = chart.ohlc(seriesData);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_OHLC\_Chart\_01{sample}


## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Area chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

In this section we will describe main parts of candlestick chart visualization and ways to adjust it. The visual appearance of candlestick is defined using certain parameters. The most important parameters for OHLC series are the following:

* {api:anychart.core.cartesian.series.OHLC#fallingStroke}fallingStroke(){api}, {api:anychart.core.cartesian.series.OHLC#risingStroke}risingStroke(){api} methods are used for adjusting stroking colors of rising and falling 
* {api:anychart.core.cartesian.series.OHLC#hoverFallingStroke}hoverFallingStroke(){api}, {api:anychart.core.cartesian.series.OHLC#hoverRisingStroke}hoverRisingStroke(){api} methods are used for adjusting stroking colors of rising and falling items in the hovered state
* {api:anychart.core.cartesian.series.OHLC#selectFallingStroke}selectFallingStroke(){api}, {api:anychart.core.cartesian.series.OHLC#selectRisingStroke}selectRisingStroke(){api} methods are used for adjusting stroking colors of rising and falling items while they are selected.

You can learn more from the [Appearance Settings](../Appearance_Settings) section.

In the sample below, there are two OHLC series with appearance settings configured for the first series:

```
// set colors for the first series
series1.risingStroke("#0066cc");
series1.hoverRisingStroke("#0066cc", 2);
series1.selectRisingStroke("#0066cc", 4);
series1.fallingStroke("#00cc99", 1, "10 5", "round");
series1.hoverFallingStroke("#00cc99", 2, "10 5", "round");
series1.selectFallingStroke("#00cc99", 4, "10 5", "round");
```

{sample}BCT\_OHLC\_Chart\_02{sample}


### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (they can be enabled on a whole series or for a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.


### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.
