{:index 1}
#Area Chart

* [Overview](#overview)
* [Basic Settings](#basic_settings)
* [Visual Settings](#visual_settings)
* [Special Settings](#special_settings)
  * [Spline Mode](#spline mode)

## Overview

ВОПРОС: Я это определение с небольшими корректировками скопировала из старой статьи. Ничего, что оно спизжено из документации к Экселю? Просто так я его поправить не могу, потому что оно особое, не видимость описывает (в отличие от тех, что сразу находятся), а зрит в корень и не смешивает Area с Line. При таком определении как раз становится понятно, что "с нуля"" Area не должны начинаться. Но если надо, потом подумаю еще, конечно. Сейчас уже не успеваю.
ВОПРОС: Есть какая-то статья, рассказывающая про мультисерийность, чтобы на нее сослаться с "multi-series"?

ВОПРОС: Есть вариант обзор настроек перенести в раздел Special Settings (до подраздела Spline Mode). Как тебе? Это ыло бы логично, правда плохо, что не сразу с порога все видно. Можно еще маркированным списком оформить - тогда информация точно будет сразу считываться... Я колеблюсь, не знаю, что выбрать.

An area chart shows data arranged in columns or rows. This chart type emphasizes the magnitude of change over time and can be used to highlight the total value across a trend. For example, an area chart displaying profit over time can emphasize the total profit.

In the [General Settings](General_Settings) article, you can find an overview of general settings that are available for all chart types in AnyChart, including the Area chart. In addition, area charts can be multi-series, [vertical](Vertical_Charts), [3D](3D_Charts), and [stacked](../Axes_and_Grids/Scales#stack_mode).

The special feature of this chart type, covered in this article, is the  [spline mode](#spline mode), which allows creating spline area series.

The article also explains how to create a basic area chart and configure its visual settings. 

## Basic Settings

ВОПРОС: anychart.area() или anychart.Area()?
ВОПРОС: и не нужно ли для симметрии сделать series.area?
ВОПРОС: можно ли охарактеризовать метод, который создает серию, как series constructor?

To create an area chart, use the {api:anychart#Area}anychart.area(){api} chart constructor, and to create an area series, call the {api:anychart.core.cartesian.series.Area}area(){api} method. By default, when you just pass the data to this chart constructor, it draws an area series.

The following sample demonstrates how a basic area chart is created:

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
var chart = anychart.area();

// create an area series and set the data
chart.area(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_AreaChart\_01{sample}

## Visual Settings

ВОПРОС: Про image fill тут не стоит писать? Наверное, если человек до такой штуки додумается, он сможет и выудить эту инфу из Appearance Settings (ссылку я ниже поставила).

Here is a full list of methods used to configure visual settings that are available for the Area series:

* {api:anychart.core.cartesian.series.Area#color}color(){api}, {api:anychart.core.cartesian.series.Area#fill}fill(){api}, {api:anychart.core.cartesian.series.Area#hatchFill}hatchFill(){api}, {api:anychart.core.cartesian.series.Area#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.cartesian.series.Area#hoverFill}hoverFill(){api}, {api:anychart.core.cartesian.series.Area#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.cartesian.series.Area#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.cartesian.series.Area#selectFill}selectFill(){api}, {api:anychart.core.cartesian.series.Area#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.cartesian.series.Area#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) article.

In the sample below, there are two area series with some of the visual settings configured:

```
// create the first series
var series1 = chart.area(seriesData_1);

// configure the visual settings of the first series
series1.fill("#00cc99", 0.3);
series1.hoverFill("#00cc99", 0.3);
series1.selectFill("#00cc99", 0.5);
series1.stroke("#00cc99", 1, "10 5", "round");
series1.hoverStroke("#00cc99", 2, "10 5", "round");
series1.selectStroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.area(seriesData_2);

// configure the visual settings of the second series
series2.fill("#0066cc", 0.3);
series2.hoverFill("#0066cc", 0.3);
series2.selectFill("#0066cc", 0.5);
series2.stroke("#0066cc");
series2.hoverStroke("#0066cc", 2);
series2.selectStroke("#0066cc", 4);
```

{sample}BCT\_AreaChart\_02{sample}

## Special Settings
### Spline Mode

To improve the design of your area chart, you can turn its series into spline area series by using the {api:anychart.core.cartesian.series.splineArea}splineArea(){api} method:

```
// set the chart type
var chart = anychart.area();

// create a spline area series and set the data
chart.splineArea(data);
```

{sample}BCT\_AreaChart\_03{sample}
