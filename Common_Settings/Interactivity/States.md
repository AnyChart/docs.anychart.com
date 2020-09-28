# States

## Overview

A number settings of a chart, series, or point can be configured in three states: **normal**, **hover**, and **selected**. For example, you can adjust their appearance, enable and adjust labels and markers.

Here is the full list of available settings: {api:anychart.core.StateSettings}anychart.core.StateSettings{api}. Please note that many of them work only with certain types of charts or series.

## Chart

### Single Series

Some chart types can have only one series. To configure their states, use the **normal()**, **hovered()**, and **selected()** methods of the chart. The next step is to combine them with the methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api} - choose ones that work with your chart type.

**Note 1:** To configure an individual point of a chart, add to your data extra fields corresponding to the methods mentioned above.

**Note 2:** There is also an alternative way to set the normal state of a chart: see the [Shortcuts](#shortcuts_\(normal\)) section.

In the sample below, there is a Pie chart with visual settings adjusted with the help of the {api:anychart.charts.Pie#normal}normal(){api} and {api:anychart.charts.Pie#hovered}hovered(){api} methods. One slice is configured individually though data:

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

Most chart types in AynChart allow creating multiple series. Such charts do not have the **normal()**, **hovered()**, and **selected()** methods, but their series do, so you should configure the states of series.

See the [Series](#series) section of this article to learn more. Some additional information can be found in the [Points](#series) and [Shortcuts](#shortcuts_\(normal\)) sections.

## Series

### Methods

To configure the states of a series, use its **normal()**, **hovered()**, and **selected()** methods. The next step is to combine them with methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api} - choose ones that work with your series type.

In the following sample, there is a Column chart with its visual settings, markers, and labels adjusted with the help of {api:anychart.core.cartesian.series.Column#normal}normal(){api}, {api:anychart.core.cartesian.series.Column#hovered}hovered(){api}, {api:anychart.core.cartesian.series.Column#selected}selected(){api} methods:

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

Another way to configure the states of a series is using object notation.

You can create objects with settings and then use them repeatedly - for example, to make different series look the same. The properties of such objects should correspond with the [methods](#methods) mentioned in the previous section.

This is how it looks like:

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

You can configure the states of individual points of a series: use special data fields corresponding to the [methods](#methods) of the series.

### Data Fields

If you use object notation to set the data, just add extra fields to your data:

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

### Data Mapping

If you use an array to set the data, you should add settings to the data set and then map fields for them so that they can be interpreted by the component:

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

## Shortcuts (Normal) 

There are shortcuts that allow you to configure the **normal** state of a chart, series, or point without using the **normal()** method.

Each series or chart has methods that affect its settings in the normal state. For example, the Column series has {api:anychart.core.StateSettings#fill}fill(){api}, {api:anychart.core.StateSettings#stroke}stroke(){api}, {api:anychart.core.StateSettings#labels}labels(){api}, {api:anychart.core.StateSettings#markers}markers(){api}, and so on.

In the sample below, there is a single-series Column chart with the normal state of its series adjusted. One column is configured individually through data:

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