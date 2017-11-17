{:index 6.1}
# Tag Cloud

## Overview

A tag cloud, also known as a word cloud or weighted list,  is a visual representation of text data. This chart is typically used to show keyword metadata (tags) on websites, or to visualize free form text. Tags are usually single words, and the importance of each tag, which is often based on its frequency, is shown with font size or color.

This article explains how to create a basic Tag Cloud chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Tag Cloud's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.TagCloud}anychart.charts.TagCloud{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value, category](../Working_with_Data/Overview)</td></tr>
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
<tr><td></td><td>N/A</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="http://www.anychart.com/chartopedia/chart-types/tag-cloud-chart/" target="_blank">Chartopedia: Venn Diagram</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Tag Cloud, use the {api:anychart#tagCloud}anychart.tagCloud(){api} chart constructor, like in the following sample:

```
var data = [
    {x: "learning", value: 80},
    {x: "includes", value: 56},
    {x: "lists", value: 44},
    {x: "meaning", value: 40},
    {x: "useful", value: 36},
    {x: "different", value: 32}
];

// create a chart and set the data
chart = anychart.tagCloud(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Tag\_Cloud\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Tag Cloud chart (for example, legend settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Data for a Tag Cloud can be passed to the chart constructor {api:anychart#tagCloud}anychart.tagCloud(){api} or to the {api:anychart.charts.TagCloud#data}data(){api} method.

There are two ways to create data: you can add either a list of words or a text.

When you add a list of words (or other elements), you have to specify their frequencies. Use the following data fields:

* `x` to set words
* `value` to set frequencies
* `category` to set categories

This is how working with `x` and `value` looks like:

```
// create data
var data = [
    {"x": "learning", "value": 80},
    {"x": "includes", "value": 56},
    {"x": "lists", "value": 44},
    {"x": "meaning", "value": 40},
    {"x": "useful", "value": 36},
    {"x": "different", "value": 32},
    {"x": "grammar", "value": 28},
    {"x": "teaching", "value": 24},
    {"x": "example", "value": 20},
    {"x": "thing", "value": 12},
];

// create a chart and set the data
chart = anychart.tagCloud(data);
```

{sample}BCT\_Tag\_Cloud\_Chart\_02{sample}

The `category` field is optional: it causes elements to be colored according to the categories they belong to. This field also affects the legend and can be used with the ordinal [color scale](#color_scale). Here is a sample showing how to add categories and how the chart looks after that:

```
// create data   
var data = [
    {x: "learning", value: 80, category: "noun"},
    {x: "includes", value: 56, category: "verb"},
    {x: "lists", value: 44, category: "noun"},
    {x: "meaning", value: 40, category: "noun"},
    {x: "useful", value: 36, category: "adjective"},
    {x: "different", value: 32, category: "adjective"},
    {x: "grammar", value: 28, category: "noun"},
    {x: "teaching", value: 24, category: "noun"},
    {x: "example", value: 20, category: "noun"},
    {x: "thing", value: 12, category: "noun"}
];

// create a chart and set the data
chart = anychart.tagCloud(data);
```

{sample}BCT\_Tag\_Cloud\_Chart\_03{sample}

When you add just a text, the next step is to parse it into elements and calculate their frequencies. For parsing, use the {api:anychart.charts.TagCloud#data}data(){api} method with settings listed in {api:anychart.data.TextParsingSettings}anychart.data.TextParsingSettings{api}:

* **cutLength** cuts the length of words
* **ignoreItems** adds a list of ignored elements
* **ignoreTrailingSpaces** ignores trailing spaces
* **maxItems** sets the number of the most frequent elements to be displayed
* **maxLength** ignores elements longer than a certain value
* **minLength** ignores elements shorter than a certain value
* **mode** sets the parsing mode

The parsing mode, unlike other settings, must be always specified. There are two parsing modes:

* **byWord** for parsing text into words
* **byChar** for parsing text into characters

If the only thing you want to set is the mode, you can use a shortcut from {api:anychart.enums.TextParsingMode}anychart.anychart.enums.TextParsingMode{api}:

```
chart.data("Tyger, tyger, burning bright", "by-char");
```

The following sample shows how to work with parsing settings. It is a Tag Cloud with the 16 most frequent words in William Blake's poem "The Tyger", some function words ignored:

```
// create data
var text =
    "Tyger, tyger, burning bright " +
    "In the forests of the night, " +
    "What immortal hand or eye " +
    "Could frame thy fearful symmetry? ";

// set the parsing mode and configure parsing settings
chart.data(text, {
        mode: "byWord",
        maxItems: 16,
        ignoreItems: [
                     "the",
                     "and",
                     "he",
                     "or",
                     "of",
                     "in",
                     "thy"
        ]
});
```

{sample}BCT\_Tag\_Cloud\_Chart\_04{sample}

### Appearance

The [appearance settings](../Appearance_Settings) of a Tag Cloud can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.charts.TagCloud#normal}normal(){api}, {api:anychart.charts.TagCloud#hovered}hovered(){api}, and {api:anychart.charts.TagCloud#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#fontFamily}fontFamily(){api} to set the font family – Verdana, Helvetica, Arial, etc.
* {api:anychart.core.StateSettings#fontSize}fontSize(){api} to set the font size
* {api:anychart.core.StateSettings#fontStyle}fontStyle(){api} to set the font style – normal, italic, oblique
* {api:anychart.core.StateSettings#fontVariant}fontVariant(){api} to set the font variant – normal or small caps
* {api:anychart.core.StateSettings#fontWeight}fontWeight(){api} to set the font weight 

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

**Note**: If settings are specified only for the normal state, they are inherited by the hover and selected states. The only exception is the fill: the selected state does not inherit its settings (but the hover state does).

In this sample, there is a Tag Cloud with appearance settings configured:

```
// configure the visual settings of the chart
chart.normal().fill("#1fadad");
chart.hovered().fill("#93bfec");
chart.selected().fill("#1f66ad");
chart.normal().fontWeight(600);
```

{sample}BCT\_Tag\_Cloud\_Chart\_05{sample}

### Color Scale

By default, elements are colored in the colors of the default [palette](../Appearance_Settings/Palettes). You can also create a color scale, linear or ordinal, and add a color range.

#### Linear

To create a **linear color scale**, use the {api:anychart.scales#linearColor}linearColor(){api} constructor.

Then call {api:anychart.scales.LinearColor#colors}colors(){api} to set two colors: the second one is applied to the most frequent element, and the first one indicates 0. Elements of frequencies that lie within this range are colored automatically in different mixtures of these two colors, and if you do not specify them, the default colors of the linear color scale are used.

To set your scale as the color scale of the chart, use the {api:anychart.charts.TagCloud#colorScale}colorScale(){api} method.

Optionally, you can use {api:anychart.charts.TagCloud#colorRange}colorRange(){api} to enable a **color range** – a special interactive element representing the color scale. With the linear color scale, it looks like a gradient from the first to the second color.

The {api:anychart.core.ui.ColorRange#colorLineSize}colorLineSize(){api} allows you to customize the size of the color scale (20 by default). See other settings: {api:anychart.core.ui.ColorRange}anychart.core.ui.ColorRange{api}.

The following sample shows a Tag Cloud with a linear color scale and a color range:

```
// create and configure a color scale.
var customColorScale = anychart.scales.linearColor();
customColorScale.colors(["#ffcc00", "#00ccff"]);

// set the color scale as the color scale of the chart
chart.colorScale(customColorScale);

// add a color range
chart.colorRange().enabled(true);
```

{sample}BCT\_Tag\_Cloud\_Chart\_06{sample}

#### Ordinal

To create an **ordinal color scale**, you should use the {api:anychart.scales#ordinalColor}ordinalColor(){api} constructor.

Combine it with {api:anychart.scales.OrdinalColor#ranges}ranges(){api} to set frequency ranges (two or more) you want to be marked by different colors. Then you can set a color for each of these ranges by using the {api:anychart.scales.OrdinalColor#colors}colors(){api} method. Please note that if you do not specify colors and ranges, the default settings of the ordinal color scale are used.

Finally, call {api:anychart.charts.TagCloud#colorScale}colorScale(){api} to set your scale as the color scale of the chart, and {api:anychart.charts.TagCloud#colorRange}colorRange(){api} to add a **color range**. With the ordinal color scale, the color range shows the ranges and their colors.

In this sample, there is a Tag Cloud with an ordinal color scale and a color range:

```
// create and configure a color scale.
var customColorScale = anychart.scales.ordinalColor();
customColorScale.ranges([
    {less: 50},
    {from: 50, to: 60},
    {greater: 60}
]);
customColorScale.colors(["lightgray", "#ffcc00", "#00ccff"]);

// set the color scale as the color scale of the chart
chart.colorScale(customColorScale);

// add a color range
chart.colorRange().enabled(true);
```

{sample}BCT\_Tag\_Cloud\_Chart\_07{sample}

#### Categories

Instead of frequency ranges, the ordinal color scale and the color range can indicate the categories of data. Add the `category` field to your data to set categories, then specify colors for the scale:

```
// create data   
var data = [
    {x: "learning", value: 80, category: "noun"},
    {x: "includes", value: 56, category: "verb"},
    {x: "lists", value: 44, category: "noun"},
    {x: "meaning", value: 40, category: "noun"},
    {x: "useful", value: 36, category: "adjective"},
    {x: "different", value: 32, category: "adjective"},
    {x: "grammar", value: 28, category: "noun"},
    {x: "teaching", value: 24, category: "noun"},
    {x: "example", value: 20, category: "noun"},
    {x: "thing", value: 12, category: "noun"}
];

// create and configure a color scale.
var customColorScale = anychart.scales.ordinalColor();
customColorScale.colors(["#00b8e6", "#e6b800", "#ff4d4d"]);

// set the color scale as the color scale of the chart
chart.colorScale(customColorScale);

// add a color range
chart.colorRange().enabled(true);
```

{sample}BCT\_Tag\_Cloud\_Chart\_08{sample}

### Angles

Every element on a Tag Cloud chart is rotated by a certain angle. To configure these angles, use the following methods:

* {api:anychart.charts.TagCloud#angles}angles(){api} specifies the set of angles
* {api:anychart.charts.TagCloud#anglesCount}anglesCount(){api} sets the number of angles
* {api:anychart.charts.TagCloud#fromAngle}fromAngle(){api} sets the  first angle in a range
* {api:anychart.charts.TagCloud#toAngle}toAngle(){api} sets the last angle in a range

You can specify the set of angles to be used in your chart by passing an array of angles to {api:anychart.charts.TagCloud#angles}angles(){api}:

```
// configure angles
chart.angles([0, 30, 90]);
```

{sample}BCT\_Tag\_Cloud\_Chart\_09{sample}

There is also another way to configure angles. Call {api:anychart.charts.TagCloud#fromAngle}fromAngle(){api} and {api:anychart.charts.TagCloud#toAngle}toAngle(){api} to set the first and the last angle in a range, then call {api:anychart.charts.TagCloud#anglesCount}anglesCount(){api} to set the total number of angles. The defaults are: 0&deg;, 90&deg;, and 2.

In this sample the number of angles is 5, the first angle is 10&deg;, the last is 100&deg;, and 3 angles lying between them are calculated automatically:

```
// configure angles
chart.fromAngle(10);
chart.toAngle(100);
chart.anglesCount(5);
```

{sample}BCT\_Tag\_Cloud\_Chart\_10{sample}

### Text Spacing

The {api:anychart.charts.TagCloud#textSpacing}textSpacing(){api} method allows you to change the spacing between elements of your Tag Cloud chart. The default value is 1.

In the sample below the spacing is set to 15:

```
// set text spacing
chart.textSpacing(15);
```

{sample}BCT\_Tag\_Cloud\_Chart\_11{sample}

### Mode

There are two modes of positioning elements on a Tag Cloud: **spiral** (default) and **rectangle**. To set the mode, use the {api:anychart.charts.TagCloud#mode}mode(){api} method with either `"spiral"` or `"rect"` as a parameter – see {api:anychart.enums.TagCloudMode}anychart.enums.TagCloudMode{api}:

```
// set the mode of the tag cloud
chart.mode("rect");
```

{sample}BCT\_Tag\_Cloud\_Chart\_12{sample}

### Scales

To learn about scales in general, see the [Scales](../Axes_and_Grids/Scales) section.

If frequencies of elements cover a large range, the font size of the least frequent elements tends to be too small. You can prevent this situation with the help of the [logarithmic scale](../Axes_and_Grids/Scales#logarithmic). 

Use the {api:anychart.scales#log}log(){api} method to create a logarithmic scale and {api:anychart.charts.TagCloud#scale}scale(){api} to set it as the value scale of your chart:

```
/* create a logarithmic scale and set it
as the value scale of the chart */
tagCloud2.scale(anychart.scales.log());
```

{sample}BCT\_Tag\_Cloud\_Chart\_13{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

#### Tokens

In the case of Tag Clouds, you need to know that the *{%Value} * [token](../Common_Settings/Text_Formatters#string_tokens) returns the frequency of an element, and *{%YPercentOfTotal}* returns the percent of total frequency. By default, both are shown. To change the text of tooltips, use tokens with the {api:anychart.core.ui.Tooltip#format}format(){api} method, combined with {api:anychart.charts.TagCloud#tooltip}tooltip(){api}:

```
// configure tooltips
chart.tooltip().format("Value: {%Value}\n Percent: {%YPercentOfTotal}");
```

{sample}BCT\_Tag\_Cloud\_Chart\_14{sample}

#### Formatting Functions

You can also configure tooltips by using [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) instead of tokens. For example, the function in the sample below returns the percent of total frequency:

```
// configure tooltips
chart.tooltip().format(function (){
    var percentOfTotal = (this.getData("value")*100)/this.getStat("sum");
    return percentOfTotal.toFixed(1) + "%";
});
```

{sample}BCT\_Tag\_Cloud\_Chart\_15{sample}

### Interactivity

You might want to link elements of a Tag Cloud to web pages. In this case, use the {api:anychart.core.Base#listen}listen(){api} method to add an [event listener](../Common_Settings/Event_Listeners) to your chart. Specify the event type you want to trigger the action and the action itself (opening a web page).

For example, here clicking on a word leads to its page opening in Wiktionary:

```
// add an event listener
chart.listen("pointClick", function(e){
  var url = "//en.wiktionary.org/wiki/" + e.point.get("x");
  window.open(url, "_blank");
});
```

{sample}BCT\_Tag\_Cloud\_Chart\_16{sample}