{:index 1}
#Pareto Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Data](#chart)
* [Visualization](#visualization)
 * [Line Series](#line_series)
 * [Column Series](#line_series) 
* [Labels And Tooltips](#labels_and_tooltips)
 * [Pareto tokens](#pareto_tokens)
* [Axes](#axes)

## Overview

A Pareto chart, named after Vilfredo Pareto, is a type of chart that contains both bars and a line graph, where individual values are represented in descending order by bars, and the cumulative total is represented by the line.

The left vertical axis is the frequency of occurrence, but it can alternatively represent cost or another important unit of measure. The right vertical axis is the cumulative percentage of the total number of occurrences, total cost, or total of the particular unit of measure. Because the reasons are in decreasing order, the cumulative function is a concave function.

The purpose of the Pareto chart is to highlight the most important among a (typically large) set of factors. In quality control, it often represents the most common sources of defects, the highest occurring type of defect, or the most frequent reasons for customer complaints, and so on.

## Quick Start

Pareto chart:

```
chart = anychart.pareto([
        {x: "A", 19},
        {x: "B", 9},
        {x: "C", 29},
        {x: "D", 89},
        ]);

chart.container("container");

chart.draw();
```

{sample}BCT\_Pareto\_Chart\_01{sample}

## Data

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

## Visualization


```
// line series 
chart.getSeries(0).stroke("#000000", "2", "2 2");
// columns series 
chart.getSeries(1).fill("#FFFFFF");
chart.getSeries(1).hatchFill("#zigzag");

```


## Labels And Tooltips

```
// line series labels
chart.getSeries(0).labels();
// columns series labels
chart.getSeries(1).labels();
```

### Pareto tokens

```
// line series labels
chart.getSeries(0).labels("{%CF} and {%RF}");
// columns series labels
chart.getSeries(1).labels("{%CF} and {%RF}");
```

# Axes

```
// left axis
chart.yAxis(0).labels();
// right axis
chart.yAxis(1).labels();
```

