{:index 1}
#Column Chart

* [Overview](#overview)
* [Basic Settings](#basic_settings)
* [Visual Settings](#visual_settings)
* [Special Settings](#special_settings)
  * [Padding](#padding)
  * [Labels](#labels)
  * [Tooltips](#tooltips)
  * [Stacked Column](#stacked_column)
  * [Vertical Column (Bar)](#vertical_column)
  * [3D Column](#3d_column)

## Overview

(???) Смотрю, сделали чартопедию. Там сказано, что колумны - это вертикальные бары.

см.: http://www.anychart.com/chartopedia/chart-types/bar-chart/

А мы тут пишем обратное! Возможно, и там и там надо писать, что бывает так называют, а бывает так... по-честному)) Естественно, обозначив, что в эничарте column принят за горизонтальный чарт. В связи с этим напрашивается вопрос, а не сделать ли статью на бары полноценной?


(???) На месте первого предложения было переработанное определение из википедии, но у меня есть вопросы к тому, как оно переработано. Оставила пока почти как там. остальную часть абзаца тоже посмотри. Важно ли примечание в скобках? ставить его особо больше некуда, но оно перегружает эту типа определительную часть. Подцепила в чартопедии, решила пока взять на всякий случай.

A column chart is a chart that visualizes data as a set of rectangular columns, their lengths being proportional to the values they represent. While the Y-axis shows the values, the X-axis shows the categories they belong to (in multi-series column charts, values are grouped by categories).

(???) Тоже переделывала, читай внимательно, не сказанула ли херни. Про time-based data хорошо бы пояснить - я не помню точно, но было какое-то объяснение, когда лучше лайн брать, а когда бар... Не знаешь случайно? лайн показывает тренд, это наиболее распространенный случай, а вот бар... Может, он magnitude подчеркивает? Пока что-то не смогла ничего найти.

This chart type is used very widely to show comparison among categories and sometimes to visualize time-based data.

In the [General Settings](General_Settings) article, you can find an overview of general settings that are available for all chart types in AnyChart, including the Column chart. In addition, column charts can be multi-series, [stacked](Stacked_Charts/Overview), [vertical](Vertical_Charts/Overview) (the vertical column chart is called the [bar chart](Bar_Chart)), and [3D](3D_Charts/Overview).

The article explains how to create a basic column chart and configure its visual settings as well as the settings that are specific to this type.

## Basic Settings

To create a column chart, use the {api:anychart#column}anychart.column(){api} chart constructor. If you pass the data to this chart constructor, it creates a column series.

To create a column series explicitly, call the {api:anychart.charts.Cartesian#column}column(){api} method.

The following sample demonstrates how a basic column chart is created:

```
// create a data set
var data = anychart.data.set([
  ["John", 10000],
  ["Jake", 12000],
  ["Peter", 13000],
  ["James", 10000],
  ["Mary", 9000]
]);

// create a chart
var chart = anychart.column();

// create a column series and set the data
var series = chart.column(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Column\_Chart\_01{sample}

## Visual Settings

Here is a full list of methods used to configure visual settings that are available for the Column series:

* {api:anychart.core.cartesian.series.Column#color}color(){api}, {api:anychart.core.cartesian.series.Column#fill}fill(){api}, {api:anychart.core.cartesian.series.Column#hatchFill}hatchFill(){api}, {api:anychart.core.cartesian.series.Column#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.cartesian.series.Column#hoverFill}hoverFill(){api}, {api:anychart.core.cartesian.series.Column#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.cartesian.series.Column#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.cartesian.series.Column#selectFill}selectFill(){api}, {api:anychart.core.cartesian.series.Column#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.cartesian.series.Column#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) article.

In the sample below, there are two column series with some of the visual settings configured:

```
// create the first series
var series1 = chart.column(seriesData_1);

// configure the visual settings of the first series
series1.fill("#00cc99", 0.3);
series1.hoverFill("#00cc99", 0.3);
series1.selectFill("#00cc99", 0.5);
series1.stroke("#00cc99", 1, "10 5", "round");
series1.hoverStroke("#00cc99", 2, "10 5", "round");
series1.selectStroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.column(seriesData_2);

// configure the visual settings of the second series
series2.fill("#0066cc", 0.3);
series2.hoverFill("#0066cc", 0.3);
series2.selectFill("#0066cc", 0.5);
series2.stroke("#0066cc");
series2.hoverStroke("#0066cc", 2);
series2.selectStroke("#0066cc", 4);
```

{sample}BCT\_Column\_Chart\_02{sample}

## Special Settings

### Padding

To configure the paddings between columns and column groups (in multi-series charts), use these methods:

* {api:anychart.charts.Cartesian#barsPadding}barsPadding(){api}
* {api:anychart.charts.Cartesian#barGroupsPadding}barGroupsPadding(){api}

(???) читай следующий абзац внимательно, я его редактировала

Paddings are measured as a ratio to the width of columns (the width is calculated automatically). So, if {api:anychart.charts.Cartesian#barsPadding}barsPadding(){api} is set to 0.5, the space between two columns is half the width of the column. If {api:anychart.charts.Cartesian#barsPadding}barsPadding(){api} or {api:anychart.charts.Cartesian#barGroupsPadding}barGroupsPadding(){api} is set to 0, there is no space between columns or column groups. Finally, {api:anychart.charts.Cartesian#barsPadding}barsPadding(){api} with negative parameter makes columns overlap each other.

(???) альтернативный вариант, сокращенный. может, он лучше...

Paddings are measured as a ratio to the width of columns (the width is calculated automatically). So, if a padding is < 1, the space between column or column groups is less than the width of the column, and vice versa. If you set a padding to 0, there is no space between columns/groups, and a negative parameter makes columns overlap each other.

In the following sample, there is a multi-series column chart with barsPadding() and barGroupsPadding() set to -0.5 and 2 correspondingly:

```
// set the padding between columns
chart.barsPadding(-0.5);

// set the padding between column groups
chart.barGroupsPadding(2);
```

{sample}BCT\_Column\_Chart\_03{sample}

### Labels

Labels are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

(???) отмечаю на будущее, что нужно добавить текст

To configure a label on a Column chart, you need to know the following peculiarities regarding formatting and positioning lables.... 

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

(???) отмечаю на будущее, что нужно добавить текст

In case of Column charts, there are some peculiarities in formatting the text of tooltips...

### Stacked Column

Stacked and percent stacked charts are multi-series charts where related values are placed atop one another, which allows comparing the the contribution of a value to a total, either in absolute or percentage terms. 

In AnyChart, you can enable a special mode of the scale to make series stack together: see [Stacked Charts (Overview)](Stacked_Charts/Overview).

To learn about the stacked versions of the Column chart, see:

* [Stacked Column](Stacked_Charts/Stacked_Column_Chart)
* [Percent Stacked Column](Stacked_Charts/Persent_Stacked_Column_Chart)

<a name='vertical_column'></a>
### Vertical Column (Bar)

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](Vertical_Charts/Overview).

(???) норм определила?
The vertical column chart is called the bar chart: it shows categories on the Y-axis instead of the X-axis and represents values as bars instead of columns. Read more: [Bar Chart](Bar_Chart).

### 3D Column

Using AnyChart, you can create 3D versions of some chart types, including the Column chart.

To learn about 3D charts in general, see [3D Charts (Overview)](3D_Charts/Overview).

The 3D column chart is described in the following article: [3D Column Chart](3D_Charts/3D_Column_Chart).