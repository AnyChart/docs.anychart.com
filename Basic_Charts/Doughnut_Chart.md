{:index 1}
#Doughnut Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Settings](#settings)
* [Special Settings](#special_settings)
  * [Labels](#labels)
    * [Outer Labels](#outer_labels)
    * [Inner Labels](#inner_labels)

##Overview

<a href="http://www.anychart.com/chartopedia/chart-types/donut-chart/" target="_blank">Chartopedia: Doughnut Chart</a>

задавать радиус можно как в процентах от его bounds, так и в числах

##Quick Start

```
// create data
var data = [
  {x: "A", value: 637166},
  {x: "B", value: 721630},
  {x: "C", value: 148662},
  {x: "D", value: 78662},
  {x: "E", value: 90000}
];

// create a pie chart and set the data
var chart = anychart.pie(data);

// set the inner radius
// (to turn the pie chart into a doughnut chart)
chart.innerRadius("30%");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Doughnut\_Chart\_01{sample}

## Settings

* [Pie Chart](Pie_Chart) and {api:anychart.charts.Pie}anychart.charts.Pie{api}
* [General Settings](General_Settings)

## Special Settings

### Labels

#### Outer Labels

```
// set the position of labels
chart.labels().position('outside');

// configure connectors
chart.connectorStroke({color: "#595959", thickness: 2, dash:"2 2"});
```

{sample}BCT\_Doughnut\_Chart\_02{sample}

#### Inner Labels

```
// set the position of labels
chart.labels().position('inside');

// set the offset for the labels
chart.insideLabelsOffset("-75%");
```

{sample}BCT\_Doughnut\_Chart\_03{sample}