{:index 2}
# Mosaic Chart

## Overview

Mosaic chart is similar to the [basic Mekko chart](Mekko_Chart), with the following differences:
- Y scale is ordinal and axes labels contain series names instead of numbers,
- [Points padding](#points_padding) is increased.

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

### Appearance

Configuring the appearance of the Mosaic chart is similar to configuring the basic [Mekko chart](Mekko_Chart#appearance) or [Column chart](../Column_Chart).

### Points Padding

Points padding is a special setting in Mekko charts, it is controlled with {api:anychart.charts.Mekko#pointsPadding}pointsPadding(){api} method and sets the distance between elements (tiles), it serves only aesthetic purpose and it is set to different default values in [Mekko](Mekko_Chart) and [Bar Mekko](Bar_Mekko_Chart) constructors.

### Vertical Mosaic

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](../Vertical/Overview).

Here is the information about creating Vertical Mosaic Chart:

* [Vertical Mosaic](../Vertical/Mosaic_Chart)