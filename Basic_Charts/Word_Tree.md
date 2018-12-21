{:index 7.5}
# Word Tree

## Overview

A word tree is a visualization that displays text data in a hierarchical way: as a tree of elements, usually single words, connected by lines. The font size of words represents their weight – the frequency / number of children. This type can be used to show typical contexts a root word appears in or a hierarchy of terms. 

This article explains how to create a basic Word Tree chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Word Tree's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Word Tree](../Quick_Start/Modules#word_tree)</td></tr>
<tr><td>Class</td><td>{api:anychart.charts.Wordtree}anychart.charts.Wordtree{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[id, parent, children, value, weight](../Working_with_Data/Overview)</td></tr>
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
<tr><td></td><td>[Tag Cloud](Tag_Cloud)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Word Tree](https://www.anychart.com/chartopedia/chart-types/wordtree/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Word Tree requires adding the [Core](../Quick_Start/Modules#core) and [Word Tree](../Quick_Start/Modules#word_tree) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-bundle.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Word Tree, use the {api:anychart#wordtree}anychart.wordtree(){api} chart constructor.

The following sample demonstrates how a basic Word Tree is created:

```
// create data
var data = [
  {value:     "Slavic Languages", children: [
    {value:   "East", children: [
      {value: "Russian"},
      {value: "Ukrainian"},
      {value: "Belarusian"}
    ]},
    {value:   "West", children: [
      {value: "Polish"},
      {value: "Czech"},
      {value: "Slovak"}
    ]},
    {value:   "South", children: [
      {value: "Bulgarian"},
      {value: "Serbian"},
      {value: "Croatian"},
      {value: "Slovene"},
      {value: "Macedonian"}
    ]}  
  ]} 
];

// create a chart and set the data
var chart = anychart.wordtree(data, "as-tree");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Word\_Tree\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Word Tree chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

The Word Tree chart requires the [tree data model](../Working_with_Data/Tree_Data_Model), which represents data as a hierarchical tree-like structure with data items connected by parent–child relationships.

You can establish the hierarchy between words **explicitly**, by passing [tree data](#tree) to the chart constructor. Alternatively, the relationship between words can be established **implicitly**: when you pass a [list of phrases](#list) or a [text](#text), AnyChart engine automatically analyzes the data.

**Note 1:** A Word Tree can have only one [root word](#root_word).

**Note 2:** When your data is a list or a text, it is parsed into single words, but in tree data you can set items both as words and word combinations.

#### Tree

With tree-like data, the following data fields are used:

* `id` to set unique identifiers
* `parent` to set parents
* `children` to set children
* `value` to set words / word combinations
* `weight` to set weight

When you pass the data to the chart constructor, add a second parameter – `"as-tree"` or `"as-table"`. The choice of the parameter and data fields depends on how exactly you data is organized. See [Tree Data Model: Setting Data](../Working_with_Data/Tree_Data_Model#setting_data) to learn more. 

The **weight** (number of children) is calculated automatically. It is shown in [tooltips](#tooltips) and affects the font size. If for some reason you do not include an item's children in the data, you can specify the weight of this item manually.

In this sample, the children of the *South* element are not included in the data, but its weight is set to 5 to show that there are 5 South Slavic languages:

```
// create data
var data = [
  {value:     "Slavic Languages", children: [
    {value:   "East", children: [
      {value: "Russian"},
      {value: "Ukrainian"},
      {value: "Belarusian"}
    ]},
    {value:   "West", children: [
      {value: "Polish"},
      {value: "Czech"},
      {value: "Slovak"}
    ]},
    {value:   "South", weight: 5}  
  ]} 
];

// create a chart and set the data
var chart = anychart.wordtree(data, "as-tree");
```

{sample}BCT\_Word\_Tree\_02{sample}

#### List

When you set the data as a list of phrases, AnyChart automatically analyzes it and constructs a tree. For example, in the sample below a set of phrases about oxygen is passed to the chart constructor, and it creates a tree with the root *oxygen*. 

**Note:** If necessary, you can set the [root word](#root_word) manually.

```
// create data
var data = [
  ["oxygen is a chemical element"],
  ["in nature, oxygen is a gas with no color or smell"],
  ["oxygen is a very important element"],
  ["oxygen was initially discovered in 1772"],
  ["oxygen is what makes burning possible"],
  ["oxygen can be used in smelting metal from ore"],
  ["oxygen is used in hospitals for killing bacteria"],
  ["oxygen is used to purify the water"],
  ["in nature, oxygen is produced by plants"]
];
    
// create a chart and set the data
var chart = anychart.wordtree(data);
```

{sample}BCT\_Word\_Tree\_03{sample}

#### Text

Setting data as a text requires setting the root [root word](#root_word) manually by using the {api:anychart.charts.Wordtree#word}word(){api} method. Then AnyChart automatically builds a tree with the specified root. In the following sample, it is the word *He*:

```
// create data
var data = "Here come old flat top, " +
           "He come groovin' up slowly. " +
           "He got joo joo eyeballs. " +
           "He one holy roller. " +
           "He got hair down to his knee. " +
           "He wear no shoeshine. " +
           "He got toe jam football. " +
           "He got monkey finger. " +
           "He shoot Coca-Cola. " +
           "He say I know you, you know me. " +
           "One thing I can tell you is " +
           "You got to be free. " +
           "Come together, right now" +
           "Over me. ";

// create a chart and set the data
var chart = anychart.wordtree(data);

// set the root word
chart.word("He");
```

{sample}BCT\_Word\_Tree\_04{sample}

### Root Word

A Word Tree can have only one root word. It is always explicitly specified in [tree data](#tree). With [lists](#list) and [texts](#text), the {api:anychart.charts.Wordtree#word}word(){api} method is used:

```
chart.word("word");
```

If your data is a text, it is required to specify the root. For a list of phrases, this setting is optional: by default, the first word of the first string is automatically selected.

Please keep in mind that {api:anychart.charts.Wordtree#word}word(){api} is **case senstive** and that the string you pass to it needs to be **a single word**.

**Note:** In tree data the root can be both a word and a word combination. Phrases and texts, however, are parsed into words, so the root is also a single word. Even if you set it manually, it still needs to be just one word for the chart to work correctly.

In this sample, there is a chart based on a list of phrases about oxygen. The root word, *liquid*, is set explicitly – the default root would be *oxygen* since it is the first word in the first string. You can switch to *oxygen* or *pure* to see how the choice of the root affects the chart.

```
// create data
var data = [
  ["oxygen is a chemical element"],
  ["in nature, oxygen is a gas with no color or smell"],
  ["oxygen is a very important element"],
  ["oxygen was initially discovered in 1772"],
  ["oxygen is what makes burning possible"],
  ["oxygen can be used in smelting metal from ore"],
  ["oxygen is used in hospitals for killing bacteria"],
  ["oxygen is used to purify the water"],
  ["in nature, oxygen is produced by plants"],
  ["pure oxygen helps people with certain illnesses"],
  ["pure oxygen can be breathed during decompression"],
  ["pure oxygen is toxic"],
  ["exposure to pure oxygen can cause lung collapse"],
  ["liquid oxygen is a pale blue cryogenic liquid"],
  ["liquid oxygen is used for industrial purposes"],
  ["liquid oxygen is a powerful oxidizing agent"],
  ["liquid oxygen is used in rocket fuel"],
  ["liquid oxygen is supplied to hospitals"]
];

// create a chart and set the data
chart = anychart.wordtree(data);

//set the root word
chart.word("liquid")
```

{sample}BCT\_Word\_Tree\_05{sample}

### Font

#### All Points

You can configure the font of a Word Tree. Use the following methods:

* {api:anychart.charts.Wordtree#fontColor}fontColor(){api} to set the font color
* {api:anychart.charts.Wordtree#fontDecoration}fontDecoration(){api} to set the font decoration – overline, underline, etc.
* {api:anychart.charts.Wordtree#fontFamily}fontFamily(){api} to set the font family – Verdana, Helvetica, Arial, etc.
* {api:anychart.charts.Wordtree#fontOpacity}fontOpacity(){api} to set the font opacity
* {api:anychart.charts.Wordtree#fontStyle}fontStyle(){api} to set the font style – normal, italic, oblique
* {api:anychart.charts.Wordtree#fontWeight}fontWeight(){api} to set the font weight

The size of each element is calculated automatically from its weight (frequency / number of children), but you can establish general limits to the font size. Call these methods:

* {api:anychart.charts.Wordtree#maxFontSize}maxFontSize(){api} to set the maximum font size
* {api:anychart.charts.Wordtree#minFontSize}minFontSize(){api} to set the minimum font size

In the sample below, there is a Word Tree with font adjusted:

```
// configure the font
chart.fontColor("#1976d2");
chart.fontWeight(600);
chart.maxFontSize(20);
```

{sample}BCT\_Word\_Tree\_06{sample}

#### Individual Points

In case of [tree data](#tree), you can configure the font of individual items – use extra data fields corresponding with the methods mentioned above.

The maximum and minimum font size cannot be set this way. Also, please note: the individual settings of an element are applied to its children as well unless they have their own settings. This is how it works:

```
// create data
var data = [
  {value:     "Slavic Languages", children: [
    {value:   "East", children: [
      {value: "Russian"},
      {value: "Ukrainian"},
      {value: "Belarusian"}
    ]},
    {value:   "West", children: [
      {value: "Polish"},
      {value: "Czech"},
      {value: "Slovak"}
    ]},
    {value:   "South", fontColor: "#1976d2", children: [
      {value: "Bulgarian"},
      {value: "Serbian"},
      {value: "Croatian"},
      {value: "Slovene"},
      {value: "Macedonian", fontColor: "#dd2c00"}
    ]}  
  ]} 
];

// create a chart and set the data
var chart = anychart.wordtree(data, "as-tree");
```

{sample}BCT\_Word\_Tree\_07{sample}


### Connectors

A connector is a line connecting words. Use the following methods to configure connectors:

* {api:anychart.core.wordtree.Connectors#curveFactor}curveFactor(){api} to set the curvature
* {api:anychart.core.wordtree.Connectors#length}length(){api} to set the length
* {api:anychart.core.wordtree.Connectors#offset}offset(){api} to set the offset
* {api:anychart.core.wordtree.Connectors#stroke}stroke(){api} to set the stroke

**Note 1:** The curvature, or curve factor, is specified as a decimal value from 0 to 1. Setting it 0 straightens connectors, like in the sample below.

**Note 2:** With the length set to 0, connectors look like straight vertical lines, regardless of the curvature.

```
// configure the connectors
var connectors = chart.connectors();
connectors.curveFactor(0);
connectors.length(100);
connectors.offset(20);
connectors.stroke("0.5 #1976d2");
```

{sample}BCT\_Word\_Tree\_08{sample}

### Postfix

If a tree does not fit the height of the chart, children of some or all items are hidden. After each such item, its weight (frequency / the number of children) is shown, followed by a text element – postfix.

The default postfix is `"more"`, but you can set your own text by passing a custom string to the {api:anychart.charts.Wordtree#postfix}postfix(){api} method. When you pass an empty string, only the weight is displayed.

In the following sample, the [font size](#font) is adjusted so that some child words are hidden. The postfix is customized:

```
// set the postfix
chart.postfix("lines");
```

{sample}BCT\_Word\_Tree\_09{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

#### Tokens

```
// create data
var data = [
  {value:     "Slavic Languages", custom_field: "info 1", children: [
    {value:   "East", custom_field: "info 2", children: [
      {value: "Russian", custom_field: "info 3"},
      {value: "Ukrainian", custom_field: "info 4"},
      {value: "Belarusian", custom_field: "info 5"}
    ]},
    {value:   "West", custom_field: "info 6", children: [
      {value: "Polish", custom_field: "info 7"},
      {value: "Czech", custom_field: "info 8"},
      {value: "Slovak", custom_field: "info 9"}
    ]},
    {value:   "South", custom_field: "info 10", children: [
      {value: "Bulgarian", custom_field: "info 11"},
      {value: "Serbian", custom_field: "info 12"},
      {value: "Croatian", custom_field: "info 13"},
      {value: "Slovene", custom_field: "info 14"},
      {value: "Macedonian", custom_field: "info 15"}
    ]}  
  ]} 
];

// create a chart and set the data
var chart = anychart.wordtree(data, "as-tree");

// configure tooltips
chart.tooltip().format(
  "value: {%value}\nweight: {%weight}\n\n{%custom_field}"
);
```

{sample}BCT\_Word\_Tree\_10{sample}

#### Formatting Functions

```
// create data
var data = [
  {value:     "Slavic Languages", custom_field: 315, children: [
    {value:   "East", custom_field: 200, children: [
      {value: "Russian", custom_field: 150},
      {value: "Ukrainian", custom_field: 37},
      {value: "Belarusian", custom_field: 5.1}
    ]},
    {value:   "West", custom_field: 60, children: [
      {value: "Polish", custom_field: 45},
      {value: "Czech", custom_field: 10.7},
      {value: "Slovak", custom_field: 5.2}
    ]},
    {value:   "South", custom_field: 30, children: [
      {value: "Bulgarian", custom_field: 9},
      {value: "Serbian", custom_field: 9.5},
      {value: "Croatian", custom_field: 5.6},
      {value: "Slovene", custom_field: 2.5},
      {value: "Macedonian", custom_field: 1.4}
    ]}  
  ]} 
];

// create a chart and set the data
var chart = anychart.wordtree(data, "as-tree");

// configure tooltips
chart.tooltip().format(function() {
  if (this.weight > 1)
    return "main living languages: " + this.weight + "\n\n" +
           "native speakers: ~" + 
           this.getData("custom_field") + " mln";
  else
    return "native speakers: ~" +
           this.getData("custom_field") + " mln";
});
```

{sample}BCT\_Word\_Tree\_11{sample}

### Interactivity

The Word Tree chart is interactive by default. It comes with a built-in drilldown feature: if you click on an element that has children, you drill down to it and its children, and if you click on the parent element of the current one, you drill up a level. This behavior can be modified – use the following methods:

* {api:anychart.charts.Wordtree#drillTo}drillTo(){api} to drill to an item
* {api:anychart.charts.Wordtree#drillUp}drillUp(){api} to drill up

Sometimes you might also need to perform a [search](../Working_with_Data/Tree_Data_Model#searching) in the data with the {api:anychart.data.Tree#search}search(){api} method of the {api:anychart.data.Tree}anychart.data.Tree{api} class
(see the [Tree Data Model](../Working_with_Data/Tree_Data_Model) article to learn more about operating tree-like data). For example, if you want to drill down to a particular item in the data tree, call {api:anychart.data.Tree#search}search(){api} to get the item and {api:anychart.charts.TreeMap#drillTo}drillTo(){api} to drill down to it. For drilling up, call {api:anychart.charts.TreeMap#drillUp}drillUp(){api}:

```
/* locate an item in the data tree
and get it as an object */
var item = chart.data().search("value", "a");

// drill down to the item
chart.drillTo(item);

// drill up
chart.drillUp();
```

This sample shows how to drill down to a particular item and then drill up:

{sample}BCT\_Word\_Tree\_12{sample}