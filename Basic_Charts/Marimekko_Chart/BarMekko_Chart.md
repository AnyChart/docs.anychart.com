{:index 2}
# BarMekko Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Labels](#labels)
  * [Tooltips](#tooltips)

## Overview

A Mekko chart with units (sometimes also called *submarine chart* or *olympic chart*) is a two-dimensional stacked chart. It is often used with one series only. As in the [regular stacked chart](../Stacked/Overview), the value axis and the datasheet of this chart are based on absolute values. 

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
## Special Settings
### Appearance

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Vertical BarMekko Chart

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](Vertical/Overview).

Here is the information about creating Vertical BarMekko Chart:

* [Vertical BarMekko Line](Vertical/BarMekko_Chart)

