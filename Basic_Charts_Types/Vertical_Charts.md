#Vertical Charts

* [Overview](#overview)
* [Section 1](#section_1)
* [Section 2](#section_2)
* [Changing the Orientation On-The-Fly](#onthefly)

## Overview

{api:anychart.xxx}XXX(){api} 

## Section 1

```
// create a data set
var data = anychart.data.set([
  ["January", 10000],
  ["February", 12000],
  ["March", 18000],
  ["April", 11000],
  ["May", 9000]
]);

// set the chart type
chart = anychart.verticalArea(data);
```

{sample}BCT\_Vertical\_Charts\_01{sample}

## Section 1

```
// set the chart type
var chart = anychart.bar();

// create the first series
var series1 = chart.bar(seriesData_1);

// create the second series
var series2 = chart.line(seriesData_2);
```

{sample}BCT\_Vertical\_Charts\_02{sample}

```
// set the chart type
var chart = anychart.bar();

// create the first series
var series1 = chart.bar(seriesData_1);

// create the second series
var series2 = chart.line(seriesData_2);
```

{sample}BCT\_Vertical\_Charts\_03{sample}

<a name='onthefly'></a>
## Changing the Orientation On-The-Fly

```
// set the chart type
var chart = anychart.column();

// create the first series
var series1 = chart.column(seriesData_1);

// create the second series
var series2 = chart.column(seriesData_2);

// change the orientation of the second series to vertical
chart.getSeriesAt(0).isVertical(true);
```

{sample}BCT\_Vertical\_Charts\_04{sample}

```
// set the chart type
chart = anychart.column();

// create the first series
var series1 = chart.column(seriesData_1);

// create the second series, set the data and name
var series2 = chart.column(seriesData_2);

// change the orientation of the series
chart.getSeriesAt(0).isVertical(true);
chart.getSeriesAt(1).isVertical(true);

// change the orientation of the axes
chart.xAxis().orientation('left');
chart.yAxis().orientation('bottom');
```

{sample}BCT\_Vertical\_Charts\_05{sample}