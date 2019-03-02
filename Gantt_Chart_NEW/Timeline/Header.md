{:index 4}
# Header

## Overview

The header is a component on the top of the timeline, representing its [scale](Scale) and defined as an instance of the {api:anychart.core.gantt.TimeLineHeader}anychart.core.gantt.TimeLineHeader{api} class. To access it, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} with {api:anychart.core.ui.Timeline#header}header(){api}.

You can configure either [all levels](#all_levels) of the header at once or an [individual level](#individual_levels). In particular, the [appearance](#appearance) and [text format](#text_format) settings are available.

## Levels

Each level of the header represents a time unit. Levels are shown in a particular order: from the level with the smallest unit at the bottom to the level with the largest one at the top.

By default, there are three levels: **the month**, **quarter**, and **year**. To change the number of levels and their time units, you should adjust the scale of the timeline, as explained in [Scale: Levels](#Scale#levels).

Other settings can be applied either to [all levels](#all_levels) of the header or to  an [individual level](#individual_levels) – see the sections below to learn more.

### All Levels

To configure all levels, access the header by combining {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} with {api:anychart.core.ui.Timeline#header}header(){api}.

Then use methods of {api:anychart.core.gantt.TimeLineHeader}anychart.core.gantt.TimeLineHeader{api}, for example {api:anychart.core.gantt.TimeLineHeader#enabled}enabled(){api} to enable or disable the header.

In the sample below, the background stroke is set for all levels (other appearance settings are shown in [Appearance](#appearance)):

```
// configure the timeline header
var header = chart.getTimeline().header();
header.background().stroke("3 #455a64");
```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_01{sample}

### Individual Levels

To access an individual level, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} with {api:anychart.core.ui.Timeline#header}header(){api} and {api:anychart.core.gantt.TimeLineHeader#level}level(){api}. Specify the index of the level.

**Note:** (?) Levels are numbered automatically from the level with the smallest time unit to the level with the largest one. The default levels – the month, quarter, and year – are assigned the indexes 0, 1, 2.

Levels are defined as instances of {api:anychart.core.gantt.TimeLineHeader.LevelWrapper}anychart.core.gantt.TimeLineHeader.LevelWrapper{api}. To configure them, use methods of this class, for example {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#enabled}enabled(){api} to enable or disable a level.

In this sample, the background stroke is set only for the first level (other appearance settings are shown in [Appearance](#appearance)):

```
// configure the first level of the timeline header
var header = chart.getTimeline().header();
header.level(0).background().stroke("3 #455a64");
```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_02{sample}

## Appearance

To configure the [appearance](../../Appearance_Settings) of **all levels**, use these methods:

* {api:anychart.core.gantt.TimeLineHeader#background}background(){api}, {api:anychart.core.gantt.TimeLineHeader#fill}fill(){api} and {api:anychart.core.gantt.TimeLineHeader#stroke}stroke(){api} to set the background, fill, and stroke
* {api:anychart.core.gantt.TimeLineHeader#fontColor}fontColor(){api}, {api:anychart.core.gantt.TimeLineHeader#fontWeight}fontWeight(){api}, {api:anychart.core.gantt.TimeLineHeader#fontSize}fontSize(){api}, {api:anychart.core.gantt.TimeLineHeader#fontFamily}fontFamily(){api}, etc. to configure the font


```
// configure the timeline header
var header = chart.getTimeline().header();
header.fill("#64b5f6 0.2");
header.stroke("#64b5f6");
header.fontColor("#64b5f6");
header.fontWeight(600);
```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_03{sample}

To adjust **individual levels**, use the following methods:

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

misc:

* [Basic Settings: Header and Row Height](../Basic_Settings#header_and_row_height)