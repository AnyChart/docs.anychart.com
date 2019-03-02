{:index 4}
# Header

## Overview

The header is a component on the top of the timeline, representing its [scale](Scale) and defined as an instance of the {api:anychart.core.gantt.TimeLineHeader}anychart.core.gantt.TimeLineHeader{api} class.

You can configure either [all levels](#all_levels) of the header at once or an [individual level](#level). The available settings include the [appearance](#appearance), [text format](#text_format), and [height](#height).

## Levels

Each level of the header represents a certain time unit. By default, there are three levels: **the month**, **quarter**, and **year**. To change the number of levels and their time units, you should adjust the scale of the timeline, as explained in [Scale: Levels](#Scale#levels).

Other settings can be applied either to [all levels](#all_levels) of the header or to  an [individual level](#level) – see the sections below to learn more.

### All Levels

The header is defined as an instance of the {api:anychart.core.gantt.TimeLineHeader}anychart.core.gantt.TimeLineHeader{api} class.

To access the header, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} with {api:anychart.core.ui.Timeline#header}header(){api}.

To configure the header, use the methods listed below, which affect all levels:

* {api:anychart.core.gantt.TimeLineHeader#enabled}enabled(){api} to enable or disable the header
* {api:anychart.core.gantt.TimeLineHeader#background}background(){api}, {api:anychart.core.gantt.TimeLineHeader#fill}fill(){api} and {api:anychart.core.gantt.TimeLineHeader#stroke}stroke(){api} to configure the [appearance](#appearance)
* {api:anychart.core.gantt.TimeLineHeader#fontColor}fontColor(){api}, {api:anychart.core.gantt.TimeLineHeader#fontWeight}fontWeight(){api},
{api:anychart.core.gantt.TimeLineHeader#fontSize}fontSize(){api}, {api:anychart.core.gantt.TimeLineHeader#fontFamily}fontFamily(){api}, etc. to configure the font [appearance](#appearance)
* {api:anychart.core.gantt.TimeLineHeader#format}format(){api} to set the [text format](#text_format)
* {api:anychart.core.gantt.TimeLineHeader#levelHeight}levelHeight(){api} to set the height of levels

In the sample below, the background stroke is set for all levels (other appearance settings are shown in the [Appearance](#appearance) section):

```
// configure the timeline header
var header = chart.getTimeline().header();
header.background().stroke("3 #455a64");
```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_01{sample}

### Individual Levels

* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper}anychart.core.gantt.TimeLineHeader.LevelWrapper{api}
* to access a level: combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} with {api:anychart.core.ui.Timeline#header}header(){api} and {api:anychart.core.gantt.TimeLineHeader#level}level(){api}
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#enabled}enabled(){api} to enable or disable a level
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#background}background(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fill}fill(){api}, and {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#stroke}stroke{api} to configure the [appearance](#appearance)
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontColor}fontColor(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontWeight}fontWeight(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontSize}fontSize(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontFamily}fontFamily(){api}, etc. to configure the font [appearance](#appearance)
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#format}format(){api} to set the [text format](#text_format)


```
// configure the first level of the timeline header
var header = chart.getTimeline().header();
header.level(0).background().stroke("3 #455a64");
```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_02{sample}

## Appearance

* [appearance settings](../../Appearance_Settings) 

**all levels**:

* {api:anychart.core.gantt.TimeLineHeader#background}background(){api}, {api:anychart.core.gantt.TimeLineHeader#fill}fill(){api} and {api:anychart.core.gantt.TimeLineHeader#stroke}stroke(){api} to set the background, fill, and stroke
* {api:anychart.core.gantt.TimeLineHeader#fontColor}fontColor(){api}, {api:anychart.core.gantt.TimeLineHeader#fontWeight}fontWeight(){api},
{api:anychart.core.gantt.TimeLineHeader#fontSize}fontSize(){api}, {api:anychart.core.gantt.TimeLineHeader#fontFamily}fontFamily(){api}, etc. to configure the font


```
// configure the timeline header
var header = chart.getTimeline().header();
header.fill("#64b5f6 0.2");
header.stroke("#64b5f6");
header.fontColor("#64b5f6");
header.fontWeight(600);
```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_03{sample}

**individual levels**

* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#background}background(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fill}fill(){api}, and {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#stroke}stroke{api} to set the background, fill, and stroke
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontColor}fontColor(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontWeight}fontWeight(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontSize}fontSize(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontFamily}fontFamily(){api}, etc. to configure the font


```
// configure the first level of the timeline header
var header = chart.getTimeline().header();
header.level(0).fill("#64b5f6 0.2");
header.level(0).stroke("#64b5f6");
header.level(0).fontColor("#64b5f6");
header.level(0).fontWeight(600);
```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_04{sample}

## Text Format

* [tokens](../../Common_Settings/Text_Formatters#string_tokens)
* [formatting functions](../../Common_Settings/Text_Formatters#formatting_functions)
* all levels: {api:anychart.core.gantt.TimeLineHeader}format(){api}
* individual levels: {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#format}format(){api}
* [Project Gantt](../Project_Chart)
* [Resource Gantt](../Resource_Chart)

### Tokens

tokens:

* `{%value}` – имя элемента
* `{%endValue}` – имя следующего элемента
* `{%tickValue}` – дата начальной точки
* `{%end}` – дата конечной точки


**all levels**:

```
// configure the timeline header
var header = chart.getTimeline().header();
header.format("{%value} – {%endValue}");
```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_05{sample}

**individual levels**:

```
// configure the levels of the timeline header
var header = chart.getTimeline().header();
header.level(0).format("Month: {%value}");
header.level(1).format("Quarter: {%value}");
header.level(2).format("Year: {%value}");
```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_06{sample}

### Formatting Functions

fields:

* `value` – имя элемента
* `endValue` – имя следующего элемента
* `tickValue` – дата начальной точки
* `end` – дата конечной точки

**all levels**:

```
// configure the timeline header
var header = chart.getTimeline().header();
header.format(function() {
  var duration = (this.end - this.tickValue) / 1000 / 3600 / 24;
  return this.value + ": " + duration + " days"
});
```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_07{sample}

**individual levels**:

```
// configure the first level of the timeline header
var header = chart.getTimeline().header();
header.level(0).format(function() {
  var duration = (this.end - this.tickValue) / 1000 / 3600 / 24;
  return this.value + ": " + duration + " days"
});
```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_08{sample}

## Height

* {api:anychart.core.gantt.TimeLineHeader#levelHeight}levelHeight(){api} 
* [Basic Settings: Header and Row Height](../Basic_Settings#header_and_row_height)