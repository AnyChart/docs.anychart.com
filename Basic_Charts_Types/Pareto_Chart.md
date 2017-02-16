{:index 1}
#Pareto Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Special Settings](#special_settings)
 * [Series](#series)
 * [Coloring condition](#coloring_condition)
 * [Labels And Tooltips](#labels_and_tooltips)
 * [Axes](#axes)
 * [Data](#data)

## Overview

A Pareto chart, named after Vilfredo Pareto, is a type of chart that contains both bars and a line graph, where individual values are represented in descending order by bars, and the cumulative total is represented by the line.

The left vertical axis is the frequency of occurrence, but it can alternatively represent cost or another important unit of measure. The right vertical axis is the cumulative percentage of the total number of occurrences, total cost, or total of the particular unit of measure. Because the reasons are in decreasing order, the cumulative function is a concave function.

The purpose of the Pareto chart is to highlight the most important among a (typically large) set of factors. In quality control, it often represents the most common sources of defects, the highest occurring type of defect, or the most frequent reasons for customer complaints, and so on.

## Quick Start

To create a Pareto chart use {api:anychart#pareto}pareto(){api} method, you can pass the data right into the constructor:

```
chart = anychart.pareto([
  {x: "Defect 1", 19},
  {x: "Defect 2", 9},
  {x: "Defect 3", 28},
  {x: "Defect 4", 87},
  {x: "Defect 5", 14},
]);

chart.container("container");

chart.draw();
```

Here is a basic Pareto chart, you can see that AnyChart automatically created two axes and two series:

{sample}BCT\_Pareto\_Chart\_01{sample}

## Special Settings

### Series

```
// make line series black and dashed
chart.getSeries(0).stroke("#000000", "2", "2 2");

// make column series white with black border and hatch fill
chart.getSeries(1).fill("#FFFFFF");
chart.getSeries(1).stroke("#000000");
chart.getSeries(1).hatchFill("#zigzag");
```

{sample}BCT\_Pareto\_Chart\_02{sample}

### Coloring condition

To color in a custom way

{sample}BCT\_Pareto\_Chart\_03{sample}

### Labels And Tooltips

```
// line series labels
chart.getSeries(0).labels();
// columns series labels
chart.getSeries(1).labels();
```

Pareto tokens

```
anychart.enums.StringToken.CUMULATIVE_FREQUENCY = '%CF';
anychart.enums.StringToken.RELATIVE_FREQUENCY = "%RF";

// line series labels
chart.getSeries(0).labels("{%CF} and {%RF}");
// columns series labels
chart.getSeries(1).labels("{%CF} and {%RF}");
```

{sample}BCT\_Pareto\_Chart\_04{sample}

### Axes

```
// left axis
chart.yAxis(0).labels();
// right axis
chart.yAxis(1).labels();
```

{sample}BCT\_Pareto\_Chart\_05{sample}

### Data

Set

```
data = [
        {x: "A", 19},
        {x: "B", 9},
        {x: "C", 29},
        {x: "D", 89},
       ];
chart = anychart.pareto(data);
```

Append

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

{sample}BCT\_Pareto\_Chart\_06{sample}

