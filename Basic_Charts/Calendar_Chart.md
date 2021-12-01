{:index 1}
# Calendar Chart

## Overview

A calendar chart is a visualization that shows activity over the course of a long span of time. It displays all the days of the year (or years), which are colored according to values assigned to them.

This article explains how to create a basic Calendar chart in AnyChart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Calendar chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Calendar](../Quick_Start/Modules#calendar)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Calendar}anychart.charts.Calendar{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Heat Map](Heat_Map_Chart)</td></tr>
<tr><td></td><td>[Treemap](Treemap_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Calendar Chart](https://www.anychart.com/products/anychart/gallery/Calendar_Chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Calendar chart requires adding the [Core](../Quick_Start/Modules#core) and [Calendar](../Quick_Start/Modules#calendar) modules:

```
<script src="https://cdn.anychart.com/releases/8.10.0/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/8.10.0/js/anychart-calendar.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Calendar chart, use the {api:anychart#calendar}anychart.calendar(){api} chart constructor, like in the following sample:

```
// create data
var data = [
  {x: "2020-01-12", value: "6"},
  {x: "2020-01-15", value: "2"},
  {x: "2020-01-18", value: "2"},
  {x: "2020-01-19", value: "5"},
  {x: "2020-02-03", value: "1"},
  {x: "2020-02-19", value: "9"},
  {x: "2020-03-19", value: "2"}
];

// create a chart and set the data
chart = anychart.calendar(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Calendar\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Calendar chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings
  
### Data

Data for a Calendar chart can be passed to the chart constructor or to the {api:anychart.charts.Calendar#Calendar#data}data(){api} method.

Use the following data fields:

* `x` to set dates ([days](#days))
* `value` to set values

**Note:** It is possible to add custom fields to your data - see the [Tooltips](#tooltips) section of this article.

This is how working with data fields of the Calendar chart looks like:

```
// create data
var data = [
  {x: "2020-01-12", value: "6"},
  {x: "2020-01-15", value: "2"},
  {x: "2020-01-18", value: "2"},
  {x: "2020-01-19", value: "5"},
  {x: "2020-02-03", value: "1"},
  {x: "2020-02-19", value: "9"},
  {x: "2020-03-19", value: "2"},
  {x: "2020-04-13", value: "3"},
  {x: "2020-04-15", value: "3"},
  {x: "2020-04-20", value: "4"},
  {x: "2020-04-21", value: "1"},
  {x: "2020-05-10", value: "3"},
  {x: "2020-05-11", value: "1"},
  {x: "2020-05-14", value: "1"},
  {x: "2021-01-12", value: "2"}
];

// create a chart and set the data
var chart = anychart.calendar(data);
```

{sample}BCT\_Calendar\_Chart\_02{sample}

### Days

The Calendar chart displays all the days of the year (or years). While some of them are specified in data with values assigned to them, others may be not. These two type of days are colored different colors and have different [appearance settings](../Appearance_Settings).

The appearance settings of days with values can be configured in two [states](../Common_Settings/Interactivity/States): **normal** and **hover**. Use the {api:anychart.charts.CirclePacking#normal}normal(){api} and {api:anychart.charts.CirclePacking#hovered}hovered(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

To set the appearance of days with no values, use these methods:

* {api:anychart.core.calendar.settings.Days#noDataFill}noDataFill(){api} to set the fill
* {api:anychart.core.calendar.settings.Days#noDataHatchFill}noDataHatchFill(){api} to set the hatch fill
* {api:anychart.core.calendar.settings.Days#noDataStroke}noDataStroke(){api} to set the stroke

Also, you can set the spacing between days with the help of the {api:anychart.core.calendar.settings.Days#spacing}spacing(){api} method. This setting is applied to all the days of the year.

In the sample below, there is a Calendar chart with days configured:

```
// configure days
var days = chart.days();
days.hovered().fill("#b00707");
days.normal().stroke("#01579b");
days.hovered().stroke("#b00707");
days.noDataFill("#f6efef");
days.noDataHatchFill(null);
days.noDataStroke("#f6efef");
days.spacing(4);
```

{sample}BCT\_Calendar\_Chart\_03{sample}

### Weeks

To configure weeks, use the following methods:

* {api:anychart.core.calendar.settings.Weeks#showWeekends}showWeekends(){api} to hide or show weekends
* {api:anychart.core.calendar.settings.Weeks#labels}labels(){api} to set the font of week [labels](../Common_Settings/Labels)
* {api:anychart.core.calendar.settings.Weeks#rightSpace}rightSpace(){api} to set the gap between week labels and the main part of the chart

This is how they work:

```
// configure weeks
var weeks = chart.weeks();
weeks.showWeekends(false);
weeks.labels().fontColor("#dd2c00");
weeks.labels().fontWeight(600);
weeks.labels().fontStyle('italic');
weeks.rightSpace(10);
```

{sample}BCT\_Calendar\_Chart\_04{sample}

### Months

The Calendar chart displays all the [days](#days) and months of the year (or years). While some of the months contain days that are specified in data with values assigned to them, others may not. These two types of months have separate stroke settings. There are also other settings that are applied to all the months.

To configure months, use these methods:

* {api:anychart.core.calendar.settings.Months#stroke}stroke(){api} to set the stroke of months containing days with values
* {api:anychart.core.calendar.settings.Months#noDataStroke}noDataStroke(){api} to set the stroke of months containing only days with no values
* {api:anychart.core.calendar.settings.Months#labels}labels(){api} to set the font of month [labels](../Common_Settings/Labels)
* {api:anychart.core.calendar.settings.Months#underSpace}underSpace(){api} to set the gap between month labels and the main part of the chart

Here is a Calendar chart with months configured:

```
// configure months
var months = chart.months();
months.stroke("#0767b1", 2);
months.noDataStroke("#dd2c00");
months.labels().fontColor("#dd2c00");
months.labels().fontWeight(600);
months.labels().fontStyle('italic');
months.underSpace(20);
```

{sample}BCT\_Calendar\_Chart\_05{sample}

### Years

To configure years, use the following methods:

* {api:anychart.core.calendar.settings.Years#inverted}inverted(){api} to invert the order of years
* {api:anychart.core.calendar.settings.Years#background}background(){api} to set the [background](../Common_Settings/Background)
* {api:anychart.core.calendar.settings.Years#title}title(){api} to set the [title](../Common_Settings/Title)
* {api:anychart.core.calendar.settings.Years#underSpace}underSpace(){api} to set the gap between years

The sample below shows how the work:

```
// configure years
years = chart.years();
years.inverted(true);
years.background("#e7f3fd");
years.title().fontColor("#dd2c00");
years.title().fontSize(30);
years.title().fontWeight(600);
years.underSpace(4);
```

{sample}BCT\_Calendar\_Chart\_06{sample}

### Color Scale

By default, the color scale of a Calendar chart is linear, and the color range is enabled. You can customize the linear scale, create an ordinal scale, and disable the color range.

#### Linear

To customize the **linear color scale**, you should create it explicitly by using the {api:anychart.scales#linearColor}linearColor(){api} constructor.

Combine it with {api:anychart.scales.LinearColor#colors}colors(){api} to set two colors, the first one indicating 0, and the second one indicating the maximum value. [Days](#days) are colored automatically in different mixtures of these two colors, and if you do not specify them, the default colors of the linear color scale are used.

To set your color scale as the color scale of the chart, use the {api:anychart.charts.Calendar#colorScale}colorScale(){api} method.

Optionally, you can use {api:anychart.charts.Calendar#colorRange}colorRange(){api} to configure the **color range** - a special element representing the color scale. With the linear color scale, the color range looks like a gradient from the first to the second color. You can find the available settings here: {api:anychart.core.ui.ColorRange}anychart.core.ui.ColorRange{api}.

The following sample shows a Calendar chart with a linear color scale and a color range:

```
// create and configure a color scale.
var customColorScale = anychart.scales.linearColor();
customColorScale.colors(["#ffcc00", "#00ccff"]);

// set the color scale as the color scale of the chart
chart.colorScale(customColorScale);

// configure the color range
chart.colorRange().length("90%");
```

{sample}BCT\_Calendar\_Chart\_07{sample}

#### Ordinal

To create an **ordinal color scale**, use the {api:anychart.scales#ordinalColor}ordinalColor(){api} constructor.

Then call {api:anychart.scales.OrdinalColor#ranges}ranges(){api} to set value ranges (two or more) you want to be marked by different colors. You can set a color for each of these ranges by using the {api:anychart.scales.OrdinalColor#colors}colors(){api} method. Please note that if you do not specify colors and ranges, the default settings of the ordinal color scale are used.

Finally, call {api:anychart.charts.Calendar#colorScale}colorScale(){api} to set your scale as the color scale of the chart.

Optionally, you can use  {api:anychart.charts.Calendar#colorRange}colorRange(){api} to configure the **color range** - a special interactive element representing the color scale. With the ordinal color scale, it shows the ranges and their colors. You can find the available settings here: {api:anychart.core.ui.ColorRange}anychart.core.ui.ColorRange{api}.

In this sample, there is a Calendar chart with an ordinal color scale and a color range:

```
// create and configure a color scale.
var customColorScale = anychart.scales.ordinalColor();
customColorScale.ranges([
    {less: 3},
    {from: 4, to: 6},
    {greater: 7},
]);
customColorScale.colors(["lightgray", "#ffcc00", "#00ccff"]);

// set the color scale as the color scale of the chart
chart.colorScale(customColorScale);

// configure the color range
chart.colorRange().length("90%");
```

{sample}BCT\_Calendar\_Chart\_08{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

#### Tokens

To change the text of tooltips, combine the {api:anychart.charts.Calendar#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

Here is the list of tokens that work with the Calendar chart:

* `{%x}`
* `{%value}`

Also, you can always add a custom field to your data and use a custom token corresponding to it.

This sample shows how to work with tokens:

```
// create data
var data = [
  {x: "2020-01-12", value: "6", custom_field: "info 1" },
  {x: "2020-01-15", value: "2", custom_field: "info 2" },
  {x: "2020-01-18", value: "2", custom_field: "info 3" },
  {x: "2020-01-19", value: "5", custom_field: "info 4" },
  {x: "2020-02-03", value: "1", custom_field: "info 5" },
  {x: "2020-02-19", value: "9", custom_field: "info 6" },
  {x: "2020-03-19", value: "2", custom_field: "info 7" },
  {x: "2020-04-13", value: "3", custom_field: "info 8" },
  {x: "2020-04-15", value: "3", custom_field: "info 9" },
  {x: "2020-04-20", value: "4", custom_field: "info 10"},
  {x: "2020-04-21", value: "1", custom_field: "info 11"},
  {x: "2020-05-10", value: "3", custom_field: "info 12"},
  {x: "2020-05-11", value: "1", custom_field: "info 13"},
  {x: "2020-05-14", value: "1", custom_field: "info 14"},
  {x: "2021-01-12", value: "2", custom_field: "info 15"}
];

// create a chart and set the data
chart = anychart.calendar(data);

// configure tooltips
chart.tooltip().format(
  "contributions: {%value}\n\n{%custom_field}"
);
```

{sample}BCT\_Calendar\_Chart\_09{sample}

#### Formatting Functions

To configure tooltips, you can use [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the following fields:

* `x`
* `value`

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

The sample below demonstrates how to work with formatting functions:

```
// create data
var data = [
  {x: "2020-01-12", value: "6", custom_field: "info 1" },
  {x: "2020-01-15", value: "2", custom_field: "info 2" },
  {x: "2020-01-18", value: "2", custom_field: "info 3" },
  {x: "2020-01-19", value: "5", custom_field: "info 4" },
  {x: "2020-02-03", value: "1", custom_field: "info 5" },
  {x: "2020-02-19", value: "9", custom_field: "info 6" },
  {x: "2020-03-19", value: "2", custom_field: "info 7" },
  {x: "2020-04-13", value: "3", custom_field: "info 8" },
  {x: "2020-04-15", value: "3", custom_field: "info 9" },
  {x: "2020-04-20", value: "4", custom_field: "info 10"},
  {x: "2020-04-21", value: "1", custom_field: "info 11"},
  {x: "2020-05-10", value: "3", custom_field: "info 12"},
  {x: "2020-05-11", value: "1", custom_field: "info 13"},
  {x: "2020-05-14", value: "1", custom_field: "info 14"},
  {x: "2021-01-12", value: "2", custom_field: "info 15"}
];

// create a chart and set the data
chart = anychart.calendar(data);

// configure tooltips
chart.tooltip().format(function() {
  var value = this.value;
  if (value < 4)
    return "Low (" + value + ")\n\n" +
                    this.getData("custom_field");
  if (value < 7)
    return "Medium (" + value + ")\n\n" +
                    this.getData("custom_field");
  if (value >= 7)
    return "High (" + value + ")\n\n" +
                this.getData("custom_field");
});
```

{sample}BCT\_Calendar\_Chart\_10{sample}
