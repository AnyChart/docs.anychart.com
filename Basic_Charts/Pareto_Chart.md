{:index 1.61}
# Pareto Chart

## Overview

A Pareto chart, named after Vilfredo Pareto, is a type of chart that contains both bars and a line graph, where individual values are represented in descending order by bars, and the cumulative total is represented by the line.

The left vertical axis is the frequency of occurrence, but it can alternatively represent cost or another important unit of measure. The right vertical axis is the cumulative percentage of the total number of occurrences, total cost, or total of the particular unit of measure. Because the reasons are in decreasing order, the cumulative function is a concave function.

The purpose of the Pareto chart is to highlight the most important among a (typically large) set of factors. In quality control, it often represents the most common sources of defects, the highest occurring type of defect, or the most frequent reasons for customer complaints, and so on.

## Modules

The Pareto chart requires adding the [Core](../Quick_Start/Modules#core) and [Pareto](../Quick_Start/Modules#pareto) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pareto.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Pareto chart use {api:anychart#pareto}pareto(){api} method, you can pass the data right into the constructor:

```
chart = anychart.pareto([
  {x: "Defect 1", value: 19},
  {x: "Defect 2", value: 9},
  {x: "Defect 3", value: 28},
  {x: "Defect 4", value: 87},
  {x: "Defect 5", value: 14},
]);

chart.container("container");

chart.draw();
```

Here is a basic Pareto chart, you can see that AnyChart automatically creates two axes and two series:

{sample}BCT\_Pareto\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Pareto chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

In AnyChart Pareto Charts you should work with data in a way that is differs a little from the way you work with data with other charts.

The data you supply to Pareto charts should contain at least two fields: argument and values, the latter can be only non-negative.

You should not sort data, AnyChart does it for you. [Cumulative Frequency and Relative Frequency](#pareto_tokens) are also calculated automatically and two series are created using these values.

You [should not create series explicitly](#series), a chart does it for you. The easiest way to pass data is to pass it to {api:anychart#pareto}pareto(){api} constructor:

```
dataset = [
        {x: "A", 19},
        {x: "B", 9},
        {x: "C", 29},
        {x: "D", 89},
       ];

chart = anychart.pareto(dataset);
```

If you want to reset all data you can do that using the {api:anychart.charts.Pareto#data}data(){api} method:

```
dataset = [
        {x: "A", 19},
        {x: "B", 9},
        {x: "C", 29},
        {x: "D", 89},
       ];

chart = anychart.pareto();

chart.data(dataset);
```

If you want to append some data (everything is recalculated automatically when you do so) you can use the {api:anychart.data.View#concat}concat(){api} method along with the {api:anychart.charts.Pareto#data}data(){api} methods:

```
data = [
        {x: "A", 19},
        {x: "B", 9},
        {x: "C", 29},
        {x: "D", 89},
        ];

chart = anychart.pareto(data);

extra_data = [
        {x: "E", 19},
        {x: "F", 9},
        {x: "G", 29},
        {x: "H", 89},
        ]

newData = chart.data().concat(extra_data);

chart.data(extra_data);
```

### Series

The Pareto chart in AnyChart [sorts data, calculates cumulative and relative frequency](#data), and automatically creates two series: a [Line](Line_Chart) and a [Column](Column_Chart) - instances of the {api:anychart.core.cartesian.series.Column}Column{api} and {api:anychart.core.cartesian.series.Line}Line{api} classes.

To access these series, call the {api:anychart.charts.Cartesian#getSeries}getSeries(){api} or {api:anychart.charts.Cartesian#getSeriesAt}getSeriesAt(){api} methods. In the sections below there are some samples showing how to use them for configuring the chart.

### Pareto Tokens

When AnyChart creates a Pareto chart, cumulative and relative frequency values are calculated to build a line and a column series that represent changes of these values. These values are available in [coloring functions](#coloring_conditions) and in [tooltips](#tooltips) and [labels](#labels) formatters. 

As string tokens these values are a part of {api:anychart.enums.StringToken}StringToken{api} enum:

```
tooltip.format("Cumulative frequency: {%CF} \n Relative frequency: {%RF}");
```

See below to learn more about using these values in chart's configuration.

### Appearance

- [Line Chart](Line_Chart)
- [Column Chart](Column_Chart)

The Line and Column series have their own visual settings - see the [Line Chart](Line_Chart) and [Column Chart](Column_Chart) articles.

In this sample there is a Pareto chart with the appearance settings of its series configured:

```
// configure the visual settings of the first series
chart.getSeries(0).normal().fill("#0066cc", 0.3);
chart.getSeries(0).hovered().fill("#0066cc", 0.1);
chart.getSeries(0).selected().fill("#0066cc", 0.5);
chart.getSeries(0).normal().hatchFill("forward-diagonal", "#0066cc", 1, 15);
chart.getSeries(0).hovered().hatchFill("forward-diagonal", "#0066cc", 1, 15);
chart.getSeries(0).selected().hatchFill("forward-diagonal", "#0066cc", 1, 15);
chart.getSeries(0).normal().stroke("#0066cc");
chart.getSeries(0).hovered().stroke("#0066cc", 2);
chart.getSeries(0).selected().stroke("#0066cc", 4);

// configure the visual settings of the second series
chart.getSeries(1).normal().stroke("#0066cc", 4, "4 4", "round");
```

{sample}BCT\_Pareto\_Chart\_02{sample}

### Coloring conditions

AnyChart coloring settings are very flexible and color may be set not only as a value but also as a function. In case of Pareto charts this option, along with [Pareto tokens](#pareto_tokens), allows to color items on condition.

This is a sample code that shows how to color a column series of a Pareto chart when the relative frequency is lower than 10:

```
// get pareto column series and create
// fill and stroke functions
var column = chart.getSeriesAt(0);
column.fill(function () {
        if (this.rf < 10) {
            return '#E24B26'
        } else {
            return this.sourceColor;
        }
    });
column.stroke(function () {
        if (this.rf < 10) {
            return anychart.color.darken('#E24B26');
        } else {
            return this.sourceColor;
        }
    });
```

Here is a live sample of such chart:

{sample}BCT\_Pareto\_Chart\_03{sample}

### Point Size

This chart type allows you to set the size of its points. Read more in the [Point Size](../Common_Settings/Point_Size) article.

### Labels

To configure Pareto series labels settings please study general [Labels Tutorial](../Common_Settings/Labels) first. Configuring labels for series in a Pareto chart is just the same, you can do whatever you want with any of them:

```
// line series enable labels
chart.getSeriesAt(0).labels(true);
chart.getSeriesAt(0).labels().position("Center");
chart.getSeriesAt(0).labels().anchor("Center");

// columns series enable labels
chart.getSeries(1).labels(false);
chart.getSeries(1).selected().labels().enabled(true);
chart.getSeries(1).selected().labels().anchor("center-bottom");
chart.getSeries(1).hovered().labels(true);
chart.getSeries(1).hovered().labels().anchor("center-bottom");
chart.getSeries(1).hovered().labels().format("{%value}%");
```

Here is a sample of a Pareto chart with a custom labels configuration:

{sample}BCT\_Pareto\_Chart\_04{sample}

### Tooltips

To configure Pareto series tooltip settings please study general [Tooltips Tutorial](../Common_Settings/Tooltip) first. Configuring tooltips for series in a Pareto chart is just the same, you can do whatever you want with any of them:

```
// get the column series and format tooltip
chart.getSeriesAt(0).tooltip().format("Value: {%value}");

// get the line series and format tooltip
chart.getSeriesAt(1).tooltip().format("Cumulative Frequency: {%CF}% \n Relative Frequency: {%RF}%");
```

{sample}BCT\_Pareto\_Chart\_05{sample}

### Axes and Scales

When a Pareto chart is created AnyChart engine automatically creates two scales and two axes, and a column and a line series are automatically bound to proper scales.

Please see [Axes Basics](../Axes_and_Grids/Axis_Basics) and [Scales](../Axes_and_Grids/Scales) articles to learn the basics.

To access scales and axis use the following code:

```
// main scale
valueScale = chart.getSeriesAt(0).yScale();
// percent scale
percentScale = chart.getSeriesAt(0).yScale();

// value axis 
valueAxis = chart.yAxis(0);
// percent axis
percentAxis = chart.yAxis(1);
```

Using these variables you can change scale intervals, axes colors and so on:

{sample}BCT\_Pareto\_Chart\_06{sample}

### Pareto Analysis Axes Markers

To display lines that are usually used to do 80/20 rule analysis and alike, you need to combine knowledge from the previous section about [Axes and Scales](#axes_and_scales) with the knowledge about [Line](../Axes_and_Grids/Line_Markers), [Text](../Axes_and_Grids/Text_Markers), and [Range](../Axes_and_Grids/Range_Markers).

Here is a sample of a Pareto chart with 80% line and label displayed:

{sample}BCT\_Pareto\_Chart\_07{sample}

## Events

There are no special events in Pareto charts, you can use everything you can use in other similar chart types. See:
- [Event Listeners](../Common_Settings/Event_Listeners)
- [Interactivity](../Common_Settings/Interactivity)

## Samples

You can find more ready to use samples of Pareto Charts in [AnyChart Pareto Charts](https://www.anychart.com/products/anychart/gallery/Pareto_Charts/) Gallery.