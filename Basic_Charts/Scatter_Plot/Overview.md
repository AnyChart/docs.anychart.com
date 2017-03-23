{:index 1}
# Scatter Plot

* [Quick Start](#quick_start)
* [Grids](#onthefly)
* [DateTime Scale](#datetime_scale)
* [Error Chart](#error_chart)
* [Supported Types](#supported_types)

## Overview

...

## Quick Start

...

```
// create data for the first series
var data_1 = [
{x: 4.4, value: 78},
{x: 3.9, value: 74},
{x: 4, value: 68},
{x: 4, value: 76},
{x: 3.5, value: 80},
{x: 4.1, value: 84},
{x: 2.3, value: 50},
{x: 4.7, value: 93},
{x: 1.7, value: 55}
];

// create data for the second series
var data_2 = [
{x: 1.5, value: 17.5},
{x: 4.75, value: 100}
];

// create a chart
chart = anychart.scatter();

// create the second series (marker) and set the data
var series1 = chart.marker(data_1);

// create the first series (line) and set the data
var series2 = chart.line(data_2);
```

{sample}BCT\_Scatter\_Chart\_01{sample}


## Grids

...

```

```

{sample}BCT\_Scatter\_Chart\_02{sample}


## DateTime Scale

...

```

```

{sample}BCT\_Scatter\_Chart\_03{sample}

## Error Chart


...

```

```

{sample}BCT\_Scatter\_Chart\_04{sample}

## Supported Types

Here is the list...

* [Scatter Bubble](Bubble_Chart)
* [Scatter Marker](Marker_Chart)
* [Scatter Line](Line_Chart)