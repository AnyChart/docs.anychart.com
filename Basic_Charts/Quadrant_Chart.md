{:index 1}
#Quadrant Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Quarters](#quarters)
  * [Crossing](#crossing)
  * [Scales](#scales)
  * [Axes](#axes)
  * [Labels](#labels)
  * [Tooltips](#tooltips)

## Overview

A quadrant chart...

The quadrant chart...

This article explains how to create a basic Quadrant chart as well as configure settings that are specific to the type.

## Quick Start

конструктор создает scatter chart с определенными настройками:
	две x и y оси, образующие рамку
	отключены тики лейблы
	закрашиваются правая верхняя и левая нижняя четверти (quarter)
	отключены гриды
	минимум и максимум у шкал от 0 до 100

To create a Quadrant chart, use the {api:anychart#quadrant}anychart.quadrant(){api} chart constructor. If you pass the data to this chart constructor, it creates a marker series.

по дефолту - создается маркер серия
но также могут быть line и bubble

To create ... explicitly, call the following methods:

{api:anychart.charts.Scatter#line}line(){api}
{api:anychart.charts.Scatter#bubble}bubble(){api}
{api:anychart.charts.Scatter#marker}line(){api}

The following sample demonstrates how a basic Quadrant chart is created:

```
// create data
var data = [
  {x: 4, value: 42},
  {x: 13, value: 59},
  {x: 25, value: 68},
  {x: 25, value: 63},
  {x: 44, value: 54},
  {x: 55, value: 58},
  {x: 56, value: 46},
  {x: 60, value: 54},
  {x: 72, value: 73}
];

// create a chart
chart = anychart.quadrant(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Quadrant\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Quadrant chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

ссылка на настройки трех типов серий

You can learn more from the [Appearance Settings](../Appearance_Settings) section.

In the sample below, there are three series (Marker, Line, and Bubble) with some of the appearance settings configured:

```
// create the first series (marker) and set the data
var series1 = chart.marker(data_1);

// configure the visual settings of the first series
series1.fill("black", 0.3);
series1.hoverFill("black", 0.3);
series1.selectFill("black", 0.5);
series1.stroke("black", 1);
series1.hoverStroke("black", 2);
series1.selectStroke("black", 4);

// create the second series (line) and set the data
var series2 = chart.line(data_2);

// configure the visual settings of the second series
series2.stroke("#00cc99", 3, "10 5", "round");

// create the third series (bubble) and set the data
var series3 = chart.bubble(data_3);

// configure the visual settings of the third series
series3.fill("#0066cc", 0.3);
series3.hoverFill("#0066cc", 0.3);
series3.selectFill("#0066cc", 0.5);
series3.stroke("#0066cc");
series3.hoverStroke("#0066cc", 2);
series3.selectStroke("#0066cc", 4);
```

{sample}BCT\_Quadrant\_Chart\_02{sample}

### Quarters

настройка четвертей - заливка, граница, углы, titles + все методы, которые есть, включая labels

может быть, написать, что про лейблы будет ниже

Here is a full list of methods used to configure visual settings that are available for quarters:

* {api:anychart.core.cartesian.series.Line#color}color(){api} and {api:anychart.core.cartesian.series.Line#stroke}stroke(){api} set the color and stroke
* {api:anychart.core.cartesian.series.Line#hoverStroke}hoverStroke(){api} configures the stroke on hover
* {api:anychart.core.cartesian.series.Line#selectStroke}selectStroke(){api} configures the stroke on select

```
// configure quarters
chart.quarters(
        {
            rightTop: {
                fill: "#ccfff2",
                corners: 30,
                cornerType: "cut"
            },
            rightBottom: {
                fill: "#e6f9ff",
                corners: 30,
                cornerType: "cut"
            },
            leftTop: {
                fill: "#fff9e6",
                corners: 30,
                cornerType: "cut"
            },
            leftBottom: {
                fill: "#f9e6ff",
                corners: 30,
                cornerType: "cut"
            },
        }
);
```

{sample}BCT\_Quadrant\_Chart\_03{sample}

...:

* {api:anychart.core.cartesian.series.Line#color}color(){api} and {api:anychart.core.cartesian.series.Line#stroke}stroke(){api} set the color and stroke
* {api:anychart.core.cartesian.series.Line#hoverStroke}hoverStroke(){api} configures the stroke on hover
* {api:anychart.core.cartesian.series.Line#selectStroke}selectStroke(){api} configures the stroke on select


```
// configure quarters
chart.quarters(
        {
            rightTop: {
                title: {
                    text: "Right Top",
                    fontSize: "24",
                    fontWeight: "bold",
                    fontColor: "#fa8072"
                }
            },
            rightBottom: {
                title: {
                    text: "Right Bottom",
                    fontSize: "24",
                    fontWeight: "bold",
                    fontColor: "#72fa80"
                }
            },
            leftTop: {
                title: {
                    text: "Left Top",
                    fontSize: "24",
                    fontWeight: "bold",
                    fontColor: "#72fa80"
                }
            },
            leftBottom: {
                title: {
                    text: "Left Bottom",
                    fontSize: "24",
                    fontWeight: "bold",
                    fontColor: "#fa8072"
                }
            },
        }
);
```

{sample}BCT\_Quadrant\_Chart\_04{sample}

### Crossing

настройка кроссинга - stroke

```
// configure the crossing
chart.crossing().stroke("grey", 3, "7 3", "round");3
```

{sample}BCT\_Quadrant\_Chart\_05{sample}

### Scales

повторить про параметры шкал по умолчанию
сказать, что данные не влияют на шкалы
если данные выходят за пределы дефолтных шкал, то они просто не отображются
ссылка на статью про шкалы - если нужно изменить дефолт
после примера: обратите внимания, что четверти строго делят шкалу пополам, независимо от значений
crossing lines пройдут по началу координат если минимум и максимум шкал совпадают по модулю
(начало координат - origin + ссылка на википедию
вариант: пройдут по нулевым значениям)
более наглядно это можно будет увидеть в следующем разделе

```
// configure scales
chart.yScale()
        .minimum(-500)
        .maximum(500);
chart.xScale()
        .minimum(-500)
        .maximum(500);
```

### Axes

повторить про оси, создающиеся по умолчанию - их по две
к ним можно обратиться по индексам: 0 и 1
по умолчанию отключены лейблы и тики, а также заголовки
ссылка на статью про оси

```
// configure axes
chart.xAxis(0, {ticks: true, labels: true});
chart.xAxis(1, {ticks: true, labels: true});
chart.yAxis(0, {ticks: true, labels: true});
chart.yAxis(1, {ticks: true, labels: true});
```

{sample}BCT\_Quadrant\_Chart\_06{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

лейблы точек серии настраиваются согласно правилам этой серии - например... ссылка на маркеры
еще есть лейблы четвертей, четверть может иметь больше 1 лейбла

```
// create a label on the left-top quarter
var labelLTop = chart.quarters().leftTop().label();
labelLTop.text("1");
labelLTop.fontColor("grey");
labelLTop.fontWeight("bold");
labelLTop.fontSize(16);
labelLTop.position("rightBottom");
labelLTop.offsetX(-20);
labelLTop.offsetY(-20);

// create a label on the right-top quarter
var labelRTop = chart.quarters().rightTop().label();
labelRTop.text("2");
labelRTop.fontColor("grey");
labelRTop.fontWeight("bold");
labelRTop.fontSize(16);
labelRTop.position("leftBottom");
labelRTop.offsetX(20);
labelRTop.offsetY(-20);

// create the first label on the left-bottom quarter
var labelLBottom1 = chart.quarters().leftBottom().label(0);
labelLBottom1.text("3");
labelLBottom1.fontColor("grey");
labelLBottom1.fontWeight("bold");
labelLBottom1.position("rightTop");
labelLBottom1.fontSize(16);
labelLBottom1.offsetX(-20);
labelLBottom1.offsetY(20);

// create the second label on the left-bottom quarter
var labelLBottom2 = chart.quarters().leftBottom().label(1);
labelLBottom2.useHtml(true);
labelLBottom2.text("Important / Not Important &#8594;");
labelLBottom2.position("leftBottom");
labelLBottom2.offsetX(-20);
labelLBottom2.offsetY(-100);
labelLBottom2.rotation(-90);

// create the third label on the left-bottom quarter
var labelLBottom2 = chart.quarters().leftBottom().label(3);
labelLBottom2.useHtml(true);
labelLBottom2.text("Urgent / Not Urgent &#8594;");
labelLBottom2.position("leftBottom");
labelLBottom2.offsetX(80);
labelLBottom2.offsetY(20);

// create a label on the right-bottom quarter
var labelRBottom = chart.quarters().rightBottom().label();

labelRBottom.text("4");
labelRBottom.fontColor("grey");
labelRBottom.fontWeight("bold");
labelRBottom.fontSize(16);
labelRBottom.position("leftTop");
labelRBottom.offsetX(20);
labelRBottom.offsetY(20);
```

{sample}BCT\_Quadrant\_Chart\_07{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.