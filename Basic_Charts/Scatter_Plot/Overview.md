{:index 1}
# Scatter Plot

* [Quick Start](#quick_start)
* [Grids](#onthefly)
* [DateTime Scale](#datetime_scale)
* [Error Chart](#error_chart)
* [Drawing Tools and Annotations](#drawing_tools_and_annotations)
* [Supported Types](#supported_types)

## Overview

Отличие scatter chart constructor от картезиана состоит в том, что при первичной обработке данных точки в скаттере берутся как есть (as is): набор аргументов одной серии никак не влияет на набор аргументов другой серии. В скаттер-плоте точки будут отображаться всегда в том порядке, в котором вы их задали; линии могут быть вертикальными и самопересекаться. В картезиан-графиках точки всегда evenly distributed, а в скаттере они распределяются согласно значению. О разнице скаттера и картезиана вы можете почитать в статье [Scatter vs. Cartesian](../Architecture/Scatter_vs_Cartesian).

Обычно используется, когда нужно отобразить результаты каких-то математических вычислений или физических экспериментов.

+ поддерживаемые типы, что написано в этой статье

...

## Quick Start

чарт конструктор
серии (не перечислять, дать ссылку на энумы)

```
// create data for the first series
var data_1 = [
{x: 0.6, value: 22},
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
{x: 0.5, value: 17.5},
{x: 4.75, value: 100}
];

// create a chart
chart = anychart.scatter();

// create the second series (marker) and set the data
var series1 = chart.marker(data_1);

// create the first series (line) and set the data
var series2 = chart.line(data_2);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Scatter\_Chart\_01{sample}


## Grids

Когда вы рисуете скаттер, вам скорее всего захочется задать гриды...
ссылка на статью про гриды

```
// create major grids and bind them to the X and Y axes
chart.grid(0).axis(chart.xAxis());
chart.grid(1).axis(chart.yAxis());

// configure the visual settings of major grids
chart.grid(0).stroke({color: "#85adad", thickness: 0.7});
chart.grid(1).stroke({color: "#85adad", thickness: 0.7});

// create minor grids and bind them to the X and Y axes
chart.minorGrid(0).axis(chart.xAxis());
chart.minorGrid(1).axis(chart.yAxis());

// configure the visual settings of minor grids
chart.minorGrid(0).stroke({color: "#85adad", thickness: 0.3, dash: 5});
chart.minorGrid(1).stroke({color: "#85adad", thickness: 0.3, dash: 5});
```

{sample}BCT\_Scatter\_Chart\_02{sample}


## DateTime Scale

Скаттеры также могут использоваться с временными шкалами, см. статью про временные шкалы.
Используются такие-то методы...
Вот пример, как сделать одну из шкал временной:
(форматирование лейблов в код не включать)

```
// create a dateTime scale
var dateScale = anychart.scales.dateTime();

// configure major and minor ticks on the dateTime scale
dateScale.ticks().interval(1);
dateScale.minorTicks().interval(0, 2);

// set the dateTime as the X-scale
chart.xScale(dateScale);
```

{sample}BCT\_Scatter\_Chart\_03{sample}

## Error Chart

Scatter Chart with Error Bars

Есть такая фича, как Error Chart. Ее можно и нужно применять в скаттерах, особенно, когда они используются для изображения каких-либо результатов или измерений.
+ кратко сказать, как задается error bar
на всех чартах lower и upper error могут отличаться
ключевая особенность скаттер-чартов с error-барами: можно задавать задавать ошибку как по x, так и по y

```
// create and configure error bars
var error = series.error();
error.xLowerError("1%");
error.xUpperError("6%");
error.valueUpperError("2%");
error.valueLowerError("4%");
```

{sample}BCT\_Scatter\_Chart\_04{sample}

## Drawing Tools and Annotations

Есть такая фича. Преимущественно используется в стоках (отдельно ссылка на стоки, отдельно на аннотации в стоках). Но hardcoded annotations могут быть очень удобны при работе со скаттерами для отображения basic shapes на графике.

```
// access the annotations() object of the chart to work with annotations
var controller = chart.annotations();

// create an ellipse annotation
var ellipse = controller.ellipse({
  xAnchor: "1.5",
  valueAnchor: 45,
  secondXAnchor: "2.6",
  secondValueAnchor: 62,
  fill: "white 0",
  stroke: "2 red"
});

// create a rectangle annotation
var rectangle = controller.rectangle({
  xAnchor: "3.3",
  valueAnchor: 64,
  secondXAnchor: "4.4",
  secondValueAnchor: 88,
  fill: "white 0",
  stroke: "2 red"
});

// disable interactivity for the ellipse annotation
ellipse.allowEdit(false);

// disable interactivity for the rectangle annotation
rectangle.allowEdit(false);
```

{sample}BCT\_Scatter\_Chart\_05{sample}

## Supported Types

Here is the list...

* [Scatter Bubble](Bubble_Chart)
* [Scatter Marker](Marker_Chart)
* [Scatter Line](Line_Chart)