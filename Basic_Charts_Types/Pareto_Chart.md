{:index 1}
#Pareto Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Special Settings](#special_settings)
 * [Series](#series)
 * [Pareto tokens](pareto_tokens) 
 * [Coloring conditions](#coloring_conditions)
 * [Labels](#labels)
 * [Tooltips](#tooltips)
 * [Axes and Scales](#axes_and_scales)
 * [Pareto Analysis Axes Markers](#pareto_analysis_axes_markers)
 * [Data](#data)

## Overview

A Pareto chart, named after Vilfredo Pareto, is a type of chart that contains both bars and a line graph, where individual values are represented in descending order by bars, and the cumulative total is represented by the line.

The left vertical axis is the frequency of occurrence, but it can alternatively represent cost or another important unit of measure. The right vertical axis is the cumulative percentage of the total number of occurrences, total cost, or total of the particular unit of measure. Because the reasons are in decreasing order, the cumulative function is a concave function.

The purpose of the Pareto chart is to highlight the most important among a (typically large) set of factors. In quality control, it often represents the most common sources of defects, the highest occurring type of defect, or the most frequent reasons for customer complaints, and so on.

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

Here is a basic Pareto chart, you can see that AnyChart automatically created two axes and two series:

{sample}BCT\_Pareto\_Chart\_01{sample}

## Special Settings

### Series

```
// make column series white with black border and hatch fill
chart.getSeries(0).fill(null);
chart.getSeries(0).stroke("#000000");
chart.getSeries(0).hatchFill("#zigzag");

// make line series black and dashed
chart.getSeries(1).stroke("#000000", "2", "2 2");
```

{sample}BCT\_Pareto\_Chart\_02{sample}

### Pareto tokens

When AnyChart creates a Pareto chart cumulative and relative frequency values are calculated to build a line and a column series that represent changes of these values. These values are available in [coloring functions](#coloring_condition) and in [tooltips](#tooltips) and [labels](#labels) formatters. 

As string tokens these values are a part of {api:anychart.enums.StringToken}StringToken{api} enum:

```
tooltip.textFormatter("Cumulative frequency: {%CF} \n Relative frequency: {%RF}");
```

See below to learn more about using these values in chart's configuration.

### Coloring condition

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

### Labels

To configure Pareto series labels settings please study general [Labels Tutorial](../Common_Settings/Labels) first. Configuring labels for series in a Pareto chart is just the same, you can do whatever you want with any of them:

```
// line series enable labels
chart.getSeries(0).labels(true);
chart.getSeries(0).labels().position("Center");
chart.getSeries(0).labels().anchor("Center");

// columns series enable labels
chart.getSeries(1).labels(false);
chart.getSeries(1).selectLabels().enabled(true);
chart.getSeries(1).selectLabels().anchor("bottom");
chart.getSeries(1).hoverLabels(true);
chart.getSeries(1).hoverLabels().anchor("bottom");
chart.getSeries(1).hoverLabels().textFormatter("{%Value}%");
```

Here is a sample of a Pareto chart with a custom labels configuration:

{sample}BCT\_Pareto\_Chart\_04{sample}

### Tooltips

To configure Pareto series tooltip settings please study general [Tooltips Tutorial](../Common_Settings/Tooltip) first. Configuring tooltips for series in a Pareto chart is just the same, you can do whatever you want with any of them:

```
// get the column series and format tooltip
chart.getSeriesAt(0).tooltip().textFormatter("Value: {%Value}");

// get the line series and format tooltip
chart.getSeriesAt(1).tooltip().textFormatter("Cumulative Frequency: {%CF}% \n Relative Frequency: {%RF}%");
```

{sample}BCT\_Pareto\_Chart\_04{sample}

### Axes and Scales

When a Pareto chart is created AnyChart engine automatically creates two scales and two axes, and a column and a line series are automatically bound to proper scales.

Please see [Axes Basics](../Axes_and_Grids/Axis_Basics) and [Scales](../Axes_and_Grids/Scales) articles to learn the basics.

To access scales and axis use the following code:

```
// main scale
valueScale = chart.getSeries(0).yScale();
// percent scale
percentScale = chart.getSeries(0).yScale();

// value axis 
valueAxis = chart.yAxis(0);
// percent axis
percentAxis = chart.yAxis(1);
```

Using these variables you can change scale intervals, axes colors and so on:

{sample}BCT\_Pareto\_Chart\_05{sample}

### Pareto Analysis Axes Markers

To display lines that are usually used to do 80/20 rule analysis and alike, you need to combine knowledge from the previous section about [Axes and Scales](axes_and_scales) with the knowledge about [Line](../Axes_and_Grids/Line_Markers), [Text](../Axes_and_Grids/Text_Markers), and [Range](../Axes_and_Grids/Range_Markers).

Here is a sample of a Pareto chart with 80% line and label displayed:

{sample}BCT\_Pareto\_Chart\_06{sample}

### Data

Initial set:

```
dataset = [
        {x: "A", 19},
        {x: "B", 9},
        {x: "C", 29},
        {x: "D", 89},
       ];

chart = anychart.pareto(dataset);
```

Reset:

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

Append:

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

chart.data().add(extra_data);
```

{sample}BCT\_Pareto\_Chart\_07{sample}