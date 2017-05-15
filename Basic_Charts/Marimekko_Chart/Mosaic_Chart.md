{:index 2}
# Mosaic Chart

* [Overview](#overview)

## Overview

Mosaic chart is pretty much the same as the [basic Mekko chart](Mekko_Chart) but with one important difference: Y scale is ordinal and contains series names instead of numbers.

## Quick Start

To create a Mosaic chart, use the {api:anychart#mosaic}anychart.mosaic(){api} chart constructor. If you pass the data to this chart constructor, it creates mekko series.

To create mekko series explicitly, call the {api:anychart.charts.Mekko#mekko}mekko(){api} method.

The following sample demonstrates how a basic Mosaic chart is created:

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
chart = anychart.mosaic();

// add series and change the orientation
var series1 = chart.mekko(seriesData_1).name("Item 1");
var series2 = chart.mekko(seriesData_2).name("Item 2");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Mosaic\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Mosaic chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](../General_Settings).

## Special Settings

### Points Padding

Points padding

{sample}BCT\_Mosaic\_Chart\_02{sample}

### Appearance

In AnyChart there are many settings that are configured in the same way for all chart types, including the BarMekko chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](../General_Settings).

### Vertical Mosaic Chart

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](Vertical/Overview).

Here is the information about creating Vertical Mosaic Chart:

* [Vertical Mosaic](../Vertical/Mosaic_Chart)