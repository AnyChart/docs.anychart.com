---
slug: "/Basic_Charts/HiLo_Chart"
sidebar_position: 1.5
---
# High-Low (HiLo) Chart

## Overview

A high-low (HiLo) chart is a chart type mostly used to illustrate movements in the price of a financial instrument over time. Each vertical line on the chart shows the price range (the highest and lowest prices) over one unit of time - e.g., one day or one hour. So, the HiLo chart looks like the [OHLC chart](OHLC_Chart), but does not have tick marks indicating the opening and closing prices.

HiLo is a series type that is predominantly used for demonstrating the stock market data, due to its specifics. So AnyChart HiLo series are also available in AnyStock - see the [HiLo series in AnyStock](../Stock_Charts/Series/HiLo) article to learn more.

This article explains how to create a basic HiLo chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the HiLo chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td><a href="../Quick_Start/Modules#core">Core</a> + <a href="../Quick_Start/Modules#basic-cartesian">Basic Cartesian</a> / <a href="../Quick_Start/Modules#base">Base</a></td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Hilo}anychart.core.cartesian.series.HiLo{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td><a href="../Working_with_Data/Overview">x, high, low</a></td></tr>
<tr><td>Multiple Series</td><td><a href="../Working_with_Data/Overview">YES</a></td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td><a href="Vertical/HiLo_Chart">Vertical HiLo</a></td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td><a href="../Stock_Charts/Series/HiLo">Stock HiLo</a></td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td><a href="OHLC_Chart">OHLC</a></td></tr>
<tr><td></td><td><a href="Japanese_Candlestick_Chart">Japanese Candlestick</a></td></tr>
<tr><td></td><td><a href="Stick_Chart">Stick</a></td></tr>
<tr><td></td><td><a href="Range_Area_Chart">Range Area</a></td></tr>
<tr><td></td><td><a href="Range_Bar_Chart">Range Bar</a></td></tr>
<tr><td></td><td><a href="Range_Column_Chart">Range Column</a></td></tr>
<tr><td></td><td><a href="Range_Spline_Area_Chart">Range Spline Area</a></td></tr>
<tr><td></td><td><a href="Range_Step_Area_Chart">Range Step Area</a></td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/hilo-chart/">Chartopedia: HiLo Chart</a></td></tr>
<tr><td></td><td><a href="General_Settings">General Settings</a></td></tr>
</table>

## Modules

The HiLo chart requires adding the [Core](../Quick_Start/Modules#core) and [Basic Cartesian](../Quick_Start/Modules#basic-cartesian) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian.min.js"></script>
```

Alternatively, you can use the [Base](../Quick_Start/Modules#base) module, which includes, among other things, the two modules mentioned above: 

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a HiLo chart, use the {api:anychart#hilo}anychart.hilo(){api} chart constructor. If you pass the data to this chart constructor, it creates a HiLo series.

To create a HiLo series explicitly, call the {api:anychart.charts.Cartesian#hilo}hilo(){api} method.

The following sample demonstrates how a basic HiLo chart is created:

```
// create data
var data = [
  ["January", 1000, 10000],
  ["February", 500, 12000],
  ["March", 3000, 18000],
  ["April", 4000, 11000],
  ["May", 6000, 9000]
];

// create a chart
chart = anychart.hilo();

// create a HiLo series and set the data
var series = chart.hilo(data);

// set the chart title
chart.title("HiLo Chart: Basic Sample");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_HiLo\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the HiLo chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

The [appearance settings](../Appearance_Settings) of an Area chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Hilo#normal}normal(){api}, {api:anychart.core.cartesian.series.Hilo#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Hilo#selected}selected(){api} methods.

Combine them with the {api:anychart.core.StateSettings#stroke}stroke(){api} method. Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there are two HiLo series with appearance settings configured:

```
// create the first series
var series1 = chart.hilo(seriesData_1);

// configure the visual settings of the first series
series1.normal().stroke("#00cc99", 1, "10 5", "round");
series1.hovered().stroke("#00cc99", 2, "10 5", "round");
series1.selected().stroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.hilo(seriesData_2);

// configure the visual settings of the second series
series2.normal().stroke("#0066cc");
series2.hovered().stroke("#0066cc", 2);
series2.selected().stroke("#0066cc", 4);
```

{sample}BCT\_HiLo\_Chart\_02{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Vertical HiLo

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts](Vertical/Overview).

Here is information about creating Vertical HiLo series:

* [Vertical HiLo](Vertical/HiLo_Chart)