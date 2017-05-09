{:index 1}
# Mekko Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Labels](#labels)
  * [Tooltips](#tooltips)

## Overview

A Mekko chart with %-axis (often called *marimekko chart* or *100% cost curve*) is a two-dimensional [100% chart](../Stacked/Overview). As in the 100% chart, the value axis is based on percentages and column heights are shown relative to 100%. In the regular 100% chart, since the columns are scaled to relative heights, there is no visual representation of absolute column totals.


## Quick Start

To create a Mekko chart, use the {api:anychart#mekko}anychart.mekko(){api} chart constructor. If you pass the data to this chart constructor, it creates mekko series.

To create mekko series explicitly, call the {api:anychart.charts.Mekko#mekko}mekko(){api} method.

The following sample demonstrates how a basic Mekko chart is created:

```
// create a data set
var data = anychart.data.set([
  ["QTR1", 10000, 12500],
  ["QTR2", 12000, 15000],
  ["QTR3", 13000, 16500],
  ["QTR4", 10000, 13000],
]);

// map the data
var seriesData_1 = data.mapAs({x: 0, value: 1});
var seriesData_2 = data.mapAs({x: 0, value: 2});

// create a chart
chart = anychart.mekko();

// add series and change the orientation
var series1 = chart.mekko(seriesData_1).name("Item 1");
var series2 = chart.mekko(seriesData_2).name("Item 2");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Mekko\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Mekko chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](../General_Settings).

## Special Settings

### Points Padding

{sample}BCT\_Mekko\_Chart\_02{sample}

### Appearance

Mekko appearance is tuned similar to basic [Mekko chart](Overview) or [Column chart](../Column_Chart).

### Vertical Mekko Chart

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](Vertical/Overview).

Here is the information about creating Vertical Mekko Chart:

* [Vertical Mekko](../Vertical/Mekko_Chart)

