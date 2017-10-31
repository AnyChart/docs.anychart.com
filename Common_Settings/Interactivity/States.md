# States

## Overview

A number settings of a chart, series, or point can be configured in three states: **normal**, **hover**, and **selected**. For example, you can adjust their appearance, enable and adjust labels and markers.

Here is the full list of available settings: {api:anychart.core.StateSettings}anychart.core.StateSettings{api}. Please note that many of them work only with certain series or chart types.

[<a href="http://jsfiddle.net/6rwsqmbc/" target="_blank">http://jsfiddle.net/6rwsqmbc/</a>]

## Chart

### Single Series

Some chart types have only one series...

For example, here is a Pie chart with some settings configured:

```
// create data
var data = [
  {x: "A", value: 637166},
  {x: "B", value: 721630,
   normal:  { hatchFill: {
                type: "forward-diagonal",
                color: "#669999"
            }
   },
   hovered: { hatchFill: {
                 type: "forward-diagonal",
                 color: "#669999",
                 thickness: 3
            }
   }
  },
  {x: "C", value: 148662},
  {x: "D", value: 78662},
  {x: "E", value: 90000}
];

// create a chart and set the data
chart = anychart.pie(data);

// configure the states of the chart
chart.normal().fill("#669999", 0.5);
chart.hovered().fill("#669999", 0.3);
chart.normal().stroke("#669999", 3);
chart.hovered().stroke("#669999", 3);
```

{sample}CS\_Interactivity\_States\_01{sample}

### Multiple Series

If a chart has multiple series, you can configure either the whole chart or each series individually. See the [Series](#series) section of this article to learn more.

## Series

### Methods

The states of a series can be configured with the help of its **normal()**, **hovered()**, and **selected()** methods. 

For example, here are these methods of a [Column](../../Basic_Charts/Column_Chart) series: {api:anychart.core.cartesian.series.Column#normal}normal(){api}, {api:anychart.core.cartesian.series.Column#hovered}hovered(){api}, {api:anychart.core.cartesian.series.Column#selected}selected(){api}.

In the following sample, there is a Column chart with its visual settings, markers, and labels adjusted:

```
// create the first series
var series1 = chart.column(seriesData_1);

// configure the states of the first series
series1.normal().fill("#00cc99", 0.3);
series1.hovered().fill("#00cc99", 0.1);
series1.selected().fill("#00cc99", 0.5);
series1.normal().stroke("#00cc99", 1);
series1.hovered().stroke("#00cc99", 2);
series1.selected().stroke("#00cc99", 4);
series1.hovered().markers(true);
series1.selected().markers(true);
series1.selected().labels(true);

// create the second series
var series2 = chart.column(seriesData_2);

// configure the states of the second series
series2.normal().fill("#0066cc", 0.3);
series2.hovered().fill("#0066cc", 0.1);
series2.selected().fill("#0066cc", 0.5);
series2.normal().stroke("#0066cc");
series2.hovered().stroke("#0066cc", 2);
series2.selected().stroke("#0066cc", 4);
series2.hovered().markers(true);
series2.selected().markers(true);
series2.selected().labels(true);
```

{sample}CS\_Interactivity\_States\_02{sample}

### Object Notation

Another way to configure the states of a series is using object notation...


```
// create two series
var series1 = chart.column(seriesData_1);
var series2 = chart.column(seriesData_2);

// create objects with settings
var normal   = {
  fill: {color:"#0066cc", opacity: 0.3},
  stroke: {color: "#0066cc"}
};

var hovered  = {
  fill: {color:"#0066cc", opacity: 0.1},
  stroke: {color: "#0066cc", thickness: 2},
  markers: {enabled: true}
};

var selected = {
  fill: {color:"#0066cc", opacity: 0.5},
  stroke: {color: "#0066cc", thickness: 4},
  markers: {enabled: true},
  labels: {enabled: true}
};

// configure the states of the first series
series1.normal(normal);
series1.hovered(hovered);
series1.selected(selected);

// configure the states of the second series
series2.normal(normal);
series2.hovered(hovered);
series2.selected(selected);
```

{sample}CS\_Interactivity\_States\_03{sample}

## Points

### Object Notation

```
// create data
var data = [
  {x: "John", value: 10000},
  {x: "Jake", value: 12000},
  {x: "Peter", value: 13000,
   normal:   { fill: "#5cd65c",
               stroke: "#5cd65c"
             },
   hovered:  { hatchFill: "forward-diagonal",
               marker: { enabled: true,
                         size: 20,
                         type: "star5",
                         fill: "gold"
                       }
             },
   selected: { hatchFill: "forward-diagonal",
               marker: { enabled: true,
                         size: 20,
                         type: "star5",
                         fill: "gold"
                       }
             }
  },
  {x: "James", value: 10000},
  {x: "Mary", value: 9000}
];

// create a chart
chart = anychart.column();

// create a column series and set the data
var series = chart.column(data);
```

{sample}CS\_Interactivity\_States\_04{sample}

### Mapping

```
// create a data set
var data = anychart.data.set([
  ["John", 10000, 12500],
  ["Jake", 12000, 15000],
  ["Peter", 13000, 16500,
   {fill: "#5cd65c", stroke: "#5cd65c"},
   {fill: "#009933", stroke: "#009933",
    marker: {enabled: true},
    label: {enabled: true}
   },
   {hatchFill: "forward-diagonal",
    marker: {enabled: true},
    label: {enabled: true}
   }
  ],
  ["James", 10000, 13000],
  ["Mary", 9000, 11000]
]);

// map the data
var seriesData_1 = data.mapAs({
  x: 0, value: 1,
  normal: 3, hovered: 5, selected: 5
});

var seriesData_2 = data.mapAs({
  x: 0, value: 2,
  normal: 4, hovered: 5, selected: 5
});

// create a chart
chart = anychart.column();

// create two series and set the data
var series1 = chart.column(seriesData_1);
var series2 = chart.column(seriesData_2);
```

{sample}CS\_Interactivity\_States\_05{sample}

## Shortcuts

```
// create data
var data = [
  {x: "John", value: 10000},
  {x: "Jake", value: 12000},
  {x: "Peter", value: 13000, hatchFill: "forward-diagonal"},
  {x: "James", value: 10000},
  {x: "Mary", value: 9000}
];

// create a chart
chart = anychart.column();

// create a column series and set the data
var series = chart.column(data);

// configure the states of the series
series.fill("#0066cc", 0.5);
series.stroke("#0066cc", 2);
series.markers(true);
series.labels(true);
```

{sample}CS\_Interactivity\_States\_06{sample}