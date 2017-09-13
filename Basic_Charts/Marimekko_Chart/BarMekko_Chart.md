{:index 1}
# BarMekko Chart

## Overview

A [Mekko chart](Mekko_Chart) with a single series and units is called BarMekko in AnyChart, it is often used with one series only. 

The difference between this constructor and other variations are:
- [Palette](../../Appearance_Settings/Palettes) applies to elements of a single series if there is only one series, similar to [Pie Chart](../Pie_Chart) or [Donut Chart](../Doughnut_Chart),
- [Scale](../../Axes_and_Grids/Scales) stacked mode is set to [values stacking](../Stacked/Overview#value_stacking),
- When only one series is present [Legend](../../Common_Settings/Legend) {api:anychart.standalones.Legend#itemsSourceMode}itemsSourceMode(){api} is set to *CATEGORIES* to show names from X Scale instead of series names,
- [Points padding](Mekko_Chart#points_padding) is set to 0.

## Quick Start

To create a chart, use the {api:anychart#barmekko}anychart.barmekko(){api} chart constructor. 

To add a series call the {api:anychart.charts.Mekko#mekko}mekko(){api} method.

The following sample demonstrates how a basic BarMekko  chart is created:

```
// create a data set
var data = [
	{x: "Spring", value: 20},
	{x: "Summer", value: 30},
	{x: "Autumn", value: 100},
	{x: "Winter", value: 40}
];

// create a chart
var chart = anychart.barmekko();

// create a mekko series and set the data
var series = chart.mekko(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_BarMekko\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the BarMekko chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](../General_Settings).

## Special Settings

### Apperance

Barmekko appearance is tuned similar to basic [Mekko chart](Mekko_Chart) or [Column chart](../Column_Chart).

### Multi Series

A Mekko chart with units (sometimes also called submarine chart or olympic chart) is a two-dimensional stacked chart. It is often used with one series only. As in the [regular stacked chart](../Stacked/Overview#value_stacking), the value axis and the datasheet of this chart are based on absolute values.

You can create multiseries barmekko chart the same way you always do:

{sample}BCT\_BarMekko\_Chart\_02{sample}

### Vertical BarMekko Chart

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](../Vertical/Overview).

Here is the information about creating Vertical BarMekko Chart:

* [Vertical BarMekko](../Vertical/BarMekko_Chart)