{:index 1}
# Scatter Plot

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Grids](#grids)
* [DateTime Scale](#datetime_scale)
* [Scatter Charts with Error Bars](#scatter_сharts_with_error_bars)
* [Drawing Tools and Annotations](#drawing_tools_and_annotations)
* [Supported Types](#supported_types)

## Overview

In AnyChart you can create scatter charts by using the Scatter chart constructor. It processes data points as-is: sets of arguments from different series don't influence each other, points are shown in the exact order they are set, and lines can be vertical and cross themselves. While the Cartesian constructor distributes points along the X-axis at equal intervals (categories), the Scatter constructor distributes points according to their values.

Scatter charts are used mainly to visualize the results of mathematical calculations or physics experiments.

To learn more about the difference between Scatter and Cartesian charts, read the [Scatter vs. Cartesian](../Architecture/Scatter_vs_Cartesian) article. See also the [Supported Types](#supported_types) section to find the list of supported series types.

## Quick Start

To create a Scatter chart, use the {api:anychart#scatter}anychart.scatter(){api} chart constructor. Then create one of the {api:anychart.enums.ScatterSeriesType}supported series types{api}.

(*) ссылка наверное выглядит некрасиво, т.к. оформлена как ссылка на апи, устраивает?

In the sample below, there are two series, Marker and Line, created by the {api:anychart.charts.Cartesian#marker}marker(){api} and {api:anychart.charts.Cartesian#line}line(){api} methods:

(*) правильные ли ссылки на методы?

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

As a rule, scatter charts look better with grids. Use the {api:anychart.charts.Cartesian#grid}grid(){api} and {api:anychart.charts.Cartesian#minorGrid}minorGrid(){api} methods to create a major and a minotr grid. The appearence of grids is configured with the {api:anychart.core.grids.Linear#stroke}stroke(){api}, {api:anychart.core.grids.Linear#evenFill}evenFill(){api}, and {api:anychart.core.grids.Linear#oddFill}oddFill(){api} methods. 

(*) ссылки на апи правильные?

For more information, see this section: [Grids (Axes and Grids)](../Axes and Grids/Axis_Basics#grids).

(*) нормально, что в тексте ссылки пишу название секции, а в скобках, даже не название статьи - а название сразу всего раздела? название статьи мне не нравится тупо.

The sample below shows how to create minor and major grids and configure their strokes:

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

## Scatter Charts with Error Bars

(*) Как заголовок? Пытаюсь избежать нелюбимого тобой слова plot. Правда, в заголовках примеров оно используется. Но там выхода нет: я везде делаю так, чтобы первая часть заголовка примера совпадала с заголовком статьи.

Есть такая фича, как Error Chart. Ее можно и нужно применять в скаттерах, особенно, когда они используются для изображения каких-либо результатов или измерений.

кратко сказать, как задается error bar
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

(*) нормально ли все сделано и прокомментировано? нормальный ли способ отключить заливку, может есть лучше?

{sample}BCT\_Scatter\_Chart\_05{sample}

## Supported Types

Here is the list...

* [Scatter Bubble](Bubble_Chart)
* [Scatter Marker](Marker_Chart)
* [Scatter Line](Line_Chart)