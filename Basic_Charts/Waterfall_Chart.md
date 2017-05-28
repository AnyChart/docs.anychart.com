{:index 7.5}
#Waterfall Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Special Settings](#special_settings)
 * [Data](#data)
 * [Modes](#modes)
 * [Single Series](#series)
 * [Multiseries Series](#series)
 * [Coloring](#coloring)
 * [Connectors](#connectors)
 * [Waterfall tokens](#wtarefall_tokens) 
 * [Labels](#labels)
 * [Tooltips](#tooltips)
 * [Axes and Scales](#axes_and_scales)
* [Events](#events)
* [Samples](#samples)

## Overview

A waterfall chart is a form of data visualization that helps in understanding the cumulative effect of sequentially introduced positive or negative values. The waterfall chart is also known as a flying bricks chart or Mario chart due to the apparent suspension of columns (bricks) in mid-air.

## Quick Start

To create a Waterfall chart use {api:anychart#waterfall}waterfall(){api} method, you can pass the data right into the constructor:

```
chart = anychart.waterfall(
        [4, 5, NaN, -2, 4, NaN], // series 1
        [4, 5, NaN, 3, 4, NaN], // series 2
        [4, {value: 10, isTotal: false}, NaN, -2, 4, NaN]); // series 3
chart.dataMode('diff');
chart.container('container')
chart.draw();
});
```

Here is a basic Waterfall chart:

{sample}BCT\_Waterfall\_Chart\_01{sample}

## Special Settings

### Data

In AnyChart Pareto Charts you should work with data in a way that is differs a little from the way you work with data with other charts.

The data you supply to Pareto charts should contain at least two fields: argument and values.

The easiest way to pass data is to pass it to {api:anychart.charts.Waterfall#data}data(){api} constructor:

```
data = [
    {x: "A", 19},
    {x: "B", 9},
    {x: "C", 29},
    {x: "D", 89},
];

chart = anychart.waterfall();
chart.data(data);
```

If you want to reset all data you can do that use the same {api:anychart.charts.Waterfall#data}data(){api} method:

### Single Series


```
// make line series black and dashed
chart.getSeriesAt(1).stroke("#000000", "2", "2 2");
```

{sample}BCT\_Waterfall\_Chart\_02{sample}

If you need more information about configuring series, please see:
- [General Settings](General_Settings)
- [Column Chart](Column_Chart)

### Waterfall tokens

```
tooltip.format("??");
```

See below to learn more about using these values in chart's configuration.

### Coloring

Rising / falling

```
// get pareto column series and create
// fill and stroke functions
var column = chart.getSeriesAt(0);
```

Here is a live sample of such chart:

{sample}BCT\_Waterfall\_Chart\_03{sample}

### Labels

To configure Waterfall series labels settings please study general [Labels Tutorial](../Common_Settings/Labels) first. Configuring labels for series in a Waterfall chart is just the same, you can do whatever you want with any of them:

```
// line series enable labels
chart.getSeriesAt(0).labels(true);
chart.getSeriesAt(0).labels().position("Center");
chart.getSeriesAt(0).labels().anchor("Center");
```

Here is a sample of a Pareto chart with a custom labels configuration:

{sample}BCT\_Waterfall\_Chart\_04{sample}

### Tooltips

To configure Waterfall series tooltip settings please study general [Tooltips Tutorial](../Common_Settings/Tooltip) first. Configuring tooltips for series in a Waterfall chart is just the same, you can do whatever you want with any of them:

```
// get the column series and format tooltip
chart.getSeriesAt(0).tooltip().format("Value: {%Value}");
```

{sample}BCT\_Waterfall\_Chart\_05{sample}


## Events

There are no special events in Waterfall charts, you can use everything you can use in other similar chart types. See:
- [Event Listeners](../Common_Settings/Event_Listeners)
- [Interactivity](../Common_Settings/Interactivity)

## Samples

You can find more ready to use samples of Pareto Charts in [AnyChart Pareto Charts](https://www.anychart.com/products/anychart/gallery/Pareto_Charts/) Gallery.