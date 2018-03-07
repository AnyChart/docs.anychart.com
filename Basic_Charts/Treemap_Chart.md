{:index 6.2}
# Treemap Chart

## Overview

A treemap is a visualization that displays hierarchically organized data as a set of nested rectangles, parent elements being tiled with their child elements. The sizes and colors of rectangles are proportional to the values of the data points they represent.

This article explains how to create a basic Treemap chart in AnyChart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Treemap chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.TreeMap}anychart.charts.TreeMap{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[id, parent, children, name, size, value](../Working_with_Data/Overview)</td></tr>
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
<tr><td></td><td>[Marimekko](Marimekko_Chart/Mekko_Chart)</td></tr>
<tr><td></td><td>[Venn](Venn_Diagram)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Treemap Chart](https://www.anychart.com/chartopedia/chart-types/treemap/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Treemap chart, use the {api:anychart#treeMap}anychart.treeMap(){api} chart constructor.

In the sample below, there is a basic Treemap comparing the top 10 most populated European Union countries by their population:

```
// create data
var data = [
  {name:   "European Union – Top 10 Most Populated Countries", children: [
    {name: "Belgium",        value: 11443830},
    {name: "France",         value: 64938716},
    {name: "Germany",        value: 80636124},
    {name: "Greece",         value: 10892931},
    {name: "Italy",          value: 59797978},
    {name: "Netherlands",    value: 17032845},
    {name: "Poland",         value: 38563573},
    {name: "Romania",        value: 19237513}, 
    {name: "Spain",          value: 46070146},
    {name: "United Kingdom", value: 65511098}  
  ]} 
];

// create a chart and set the data
chart = anychart.treeMap(data, "as-tree");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Treemap\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Treemap chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings
  
### Data

Use the following data fields to create data for a Treemap chart:

* `id` to set unique identifiers
* `parent` to set parents
* `children` to set children
* `name` to set names
* `size` to set sizes
* `value` to set values

**Note:** It is possible to add custom fields to your data – see the [Labels and Tooltips](#labels_and_tooltips) section of this article.

There are two ways to arrange data for a Treemap chart: [as a tree](../Working_with_Data/Tree_Data_Model#tree) or [as a table](../Working_with_Data/Tree_Data_Model#table).

#### Tree Structure

The **tree data structure** is expected by this chart type by default. To organize your data as a tree, pass the data to the chart constructor {api:anychart#treeMap}anychart.treeMap(){api} or to the {api:anychart.charts.TreeMap#data}data(){api} method and use `"as-tree"` as the second parameter.

Three data fields are required: `value`, `name` / `id`, and `children` – the last one is used to specify the hierarchy of elements.

That is how it looks like:

```
// create data
var data = [
  {name:     "Slavic Languages – Number of Speakers", children: [
    {name:   "East Slavic", children: [
      {name: "Russian",        value: 150000000},
      {name: "Ukrainian",      value:  45000000},
      {name: "Belarusian",     value:   3200000}
    ]},
    {name:   "West Slavic", children: [
      {name: "Polish",         value:  55000000},
      {name: "Czech",          value:  10600000},
      {name: "Slovak",         value:   5200000}
    ]},
    {name:   "South Slavic", children: [
      {name: "Serbo-Croatian", value:  21000000},
      {name: "Bulgarian",      value:   9000000},
      {name: "Slovene",        value:   2500000},
      {name: "Macedonian",     value:   1400000}
    ]}  
  ]} 
];

// create a chart and set the data
chart = anychart.treeMap(data, "as-tree");
```

{sample}BCT\_Treemap\_Chart\_02{sample}

#### Table Structure

The **table data structure** is particularly useful when you store your data in a relational database table. Pass the data to the chart constructor {api:anychart#treeMap}anychart.treeMap(){api} or to the {api:anychart.charts.TreeMap#data}data(){api} method and use `"as-table"` as the second parameter.

Four data fields are required: `name`, `value`, `id`, and `parent` – the last two are used to specify the hierarchy of elements.

That is how it looks like:

```
// create data
var data = [
  {id:  1, parent: null, name: "Slavic Languages – Number of Speakers"},
  {id:  2, parent:    1, name: "East Slavic"},
  {id:  3, parent:    2, name: "Russian",        value: 150000000},
  {id:  4, parent:    2, name: "Ukrainian",      value:  45000000},
  {id:  5, parent:    2, name: "Belarusian",     value:   3200000},
  {id:  6, parent:    1, name: "West Slavic"},
  {id:  7, parent:    6, name: "Polish",         value:  55000000},
  {id:  8, parent:    6, name: "Czech",          value:  10600000},
  {id:  9, parent:    6, name: "Slovak",         value:   5200000},
  {id: 10, parent:    1, name: "South Slavic"},
  {id: 11, parent:   10, name: "Serbo-Croatian", value:  21000000},
  {id: 12, parent:   10, name: "Bulgarian",      value:   9000000},
  {id: 13, parent:   10, name: "Slovene",        value:   2500000},
  {id: 13, parent:   10, name: "Macedonian",     value:   1400000}
];

// create a chart and set the data
chart = anychart.treeMap(data, "as-table");
```

{sample}BCT\_Treemap\_Chart\_03{sample}

#### Size and Value

No matter what data structure you use, colors and sizes of tiles represent the `value` field. Alternatively, sizes can represent an optional `size` field, so adding it to the data allows you to show two different parameters instead of one.

Please note: you do not need to specify values and sizes of parent elements – they are calculated automatically. Also note that tiles are [sorted](#sorting_order) by value, but if you add the `size` field, they are sorted by size.

On the Treemap chart below, the size of each tile represents the population of a country (`size`), and the color represents the population density (`value`):

```
// create data
var data = [
  {name:   "EU – Population Density in Top 10 Most Populated Countries", children: [
    {name: "Belgium",        size: 11443830, value: 378},
    {name: "France",         size: 64938716, value: 119},
    {name: "Germany",        size: 80636124, value: 231},
    {name: "Greece",         size: 10892931, value:  85},
    {name: "Italy",          size: 59797978, value: 203},
    {name: "Netherlands",    size: 17032845, value: 505},
    {name: "Poland",         size: 38563573, value: 126},
    {name: "Romania",        size: 19237513, value:  84}, 
    {name: "Spain",          size: 46070146, value:  92},
    {name: "United Kingdom", size: 65511098, value: 271}  
  ]} 
];

// create a chart and set the data
chart = anychart.treeMap(data, "as-tree");
```

{sample}BCT\_Treemap\_Chart\_04{sample}

### Depth and Hints

You can specify how many levels of the hierarchy are shown simultaneously on a chart: use the {api:anychart.charts.TreeMap#maxDepth}maxDepth(){api} method.

All elements shown with this method are interactive, and their parents are visualized as [headers](#headers). The default value is 1, which means that users can see only one level with its parent at a time, and the lower levels are hidden.

The {api:anychart.charts.TreeMap#hintDepth}hintDepth(){api} method sets the depth of hints – lines indicating the elements of hidden levels. The elements shown with this method are not interactive; the default value is 0, which means that hints are disabled.

To set the opacity of hints, use {api:anychart.charts.TreeMap#hintOpacity}hintOpacity(){api}.

The following sample demonstrates how to configure the depth of levels shown and the depth and opacity of hints:

```
// set the maximum depth of levels shown
chart.maxDepth(2);

// set the depth of hints
chart.hintDepth(1);

// set the opacity of hints
chart.hintOpacity(0.7);  
```

{sample}BCT\_Treemap\_Chart\_05{sample}

### Sorting Order

By default, tiles of Treemaps are sorted in descending order according to their values. You can sort them in ascending order or disable sorting.

To set the sorting mode, call the {api:anychart.charts.TreeMap#sort}sort(){api} method with one of the parameters listed in {api:anychart.enums.Sort}anychart.enums.Sort{api}:

* `"desc"` (default)
* `"asc"`
* `"none"`

**Note**: If you add the `size` field to your data, tiles are sorted by size, not value. If you disable sorting, tiles are arranged according to the order of their listing in data.

The sample below shows how to set the sorting mode:

```
// set the sorting mode
chart.sort("asc");
```

{sample}BCT\_Treemap\_Chart\_06{sample}

### Appearance

#### All Points

The [appearance settings](../Appearance_Settings) of a Treemap chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.charts.TreeMap#normal}normal(){api}, {api:anychart.charts.TreeMap#hovered}hovered(){api}, and {api:anychart.charts.TreeMap#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In this sample, there is a Treemap chart with appearance settings configured:

```
// configure the visual settings of the chart
chart.hovered().fill("gray", 0.4);
chart.selected().fill("gray", 0.6);
chart.selected().hatchFill("forward-diagonal", "gray", 2, 20);
chart.normal().stroke("gray");
chart.hovered().stroke("gray");
chart.selected().stroke("gray", 2);
```

{sample}BCT\_Treemap\_Chart\_07{sample}

#### Individual Points

It is possible to configure the appearance of each tile individually – use extra data fields corresponding with the methods mentioned above:

```
// create data
var data = [
  {name:   "European Union", children: [
    {name: "Belgium",        value: 11443830, fill: "#ffcc00"},
    {name: "France",         value: 64938716, fill: "#ff6600"},
    {name: "Greece",         value: 10892931, fill: "#ffcc00"},
    {name: "Italy",          value: 59797978, fill: "#ff6600"},
    {name: "Netherlands",    value: 17032845, fill: "#ffcc00"},
    {name: "Poland",         value: 38563573, fill: "#ff9933"},
    {name: "Romania",        value: 19237513, fill: "#ffcc00"}, 
    {name: "Spain",          value: 46070146, fill: "#ff9933"},
    {name: "United Kingdom", value: 65511098, fill: "#ff6600"},
    {name: "Germany",        value: 80636124,
     normal:   {fill: "#ff0000", stroke: "4 #b30059"},
     hovered:  {fill: "#ff0000", stroke: "5 white"},
     selected: {fill: "#b30059", stroke: "5 white"}
    }
  ]} 
];

// create a chart and set the data
chart = anychart.treeMap(data, "as-tree");
```

{sample}BCT\_Treemap\_Chart\_08{sample}

### Color Scale

By default, the color scale of a Treemap chart is ordinal, and tiles are colored in the colors of the default [palette](../Appearance_Settings/Palettes). Color ranges are set automatically.

#### Ordinal

To customize the **ordinal color scale**, you should create it explicitly by using the {api:anychart.scales#ordinalColor}ordinalColor(){api} constructor.

Combine it with {api:anychart.scales.OrdinalColor#ranges}ranges(){api} to set heat ranges (two or more) you want to be marked by different colors. Then you can set a color for each of these ranges by using the {api:anychart.scales.OrdinalColor#colors}colors(){api} method. Please note that if you do not specify colors and ranges, the default settings of the ordinal color scale are used.

To set your scale as the color scale of the chart, use the {api:anychart.charts.TreeMap#colorScale}colorScale(){api} method.

Optionally, you can use {api:anychart.charts.TreeMap#colorRange}colorRange(){api} to enable a **color range** – a special interactive element representing the color scale. With the ordinal color scale, the color range shows the ranges and their colors.

The {api:anychart.core.ui.ColorRange#colorLineSize}colorLineSize(){api} allows you to customize the size of the color scale (20 by default). See other settings: {api:anychart.core.ui.ColorRange}anychart.core.ui.ColorRange{api}.

This sample shows a Treemap with an ordinal color scale and a color range:

```
// create and configure a color scale.
var customColorScale = anychart.scales.ordinalColor();
customColorScale.ranges([
    {less: 20000000},
    {from: 20000000, to: 50000000},
    {from: 50000000, to: 70000000},
    {greater: 70000000}
]);
customColorScale.colors(["lightgray", "#9ed1de", "#00ccff", "#ffcc00"]);

// set the color scale as the color scale of the chart
chart.colorScale(customColorScale);

// add a color range
chart.colorRange().enabled(true);
chart.colorRange().length("100%");
```

{sample}BCT\_Treemap\_Chart\_09{sample}

#### Linear

To create a **linear color scale**, use the {api:anychart.scales#linearColor}linearColor(){api} constructor.

Then call {api:anychart.scales.LinearColor#colors}colors(){api} to set two colors, the first one indicating 0, and the second one indicating the maximum heat. Tiles are colored automatically in different mixtures of these two colors, and if you do not specify them, the default colors of the linear color scale are used.

Finally, call {api:anychart.charts.TreeMap#colorScale}colorScale(){api} to set your scale as the color scale of the chart, and {api:anychart.charts.TreeMap#colorRange}colorRange(){api} to add a **color range**. With the linear color scale, it looks like a gradient from the first to the second color.

In the following sample, there is a Treemap with a linear color scale and a color range:

```
// create and configure a color scale.
var customColorScale = anychart.scales.linearColor();
customColorScale.colors(["#00ccff", "#ffcc00"]);

// set the color scale as the color scale of the chart
chart.colorScale(customColorScale);

// add a color range
chart.colorRange().enabled(true);
chart.colorRange().length("100%");
```

{sample}BCT\_Treemap\_Chart\_10{sample}

### Labels and Tooltips

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

#### Tokens

To change the text of labels, combine the {api:anychart.charts.TreeMap#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

To configure tooltips, do the same with the {api:anychart.charts.TreeMap#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods.

Here is the list of tokens that work with the Treemap chart:

* `{%id}`
* `{%name}`
* `{%size}`
* `{%value}`

Please note that values and sizes of parent elements are calculated automatically, so you do not need to specify them in data – the `{%value}` and `{%size}` tokens work anyway.

Also, you can always add a custom field to your data and use a custom token corresponding to it.

This sample shows how to work with tokens. Along with regular tokens, a custom token *{%capital}* is used:

```
// create data
var data = [
  {name:   "European Union – Top 10 Most Populated Countries", children: [
    {name: "Belgium",        value: 11443830, capital: "Brussels" },
    {name: "France",         value: 64938716, capital: "Paris"    },
    {name: "Germany",        value: 80636124, capital: "Berlin"   },
    {name: "Greece",         value: 10892931, capital: "Athens"   },
    {name: "Italy",          value: 59797978, capital: "Rome"     },
    {name: "Netherlands",    value: 17032845, capital: "Amsterdam"},
    {name: "Poland",         value: 38563573, capital: "Warsaw"   },
    {name: "Romania",        value: 19237513, capital: "Bucharest"}, 
    {name: "Spain",          value: 46070146, capital: "Madrid"   },
    {name: "United Kingdom", value: 65511098, capital: "London"   }  
  ]} 
];

// create a chart and set the data
chart = anychart.treeMap(data, "as-tree");

// enable HTML for labels
chart.labels().useHtml(true);

// configure labels
chart.labels().format(
  "<span style='font-weight:bold'>{%name}</span><br>{%value}"
);

// configure tooltips
chart.tooltip().format(
  "population: {%value}\ncapital: {%capital}"
);
```

{sample}BCT\_Treemap\_Chart\_11{sample}

#### Formatting Functions

To configure labels and tooltips, you can use [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the following fields:

* `name`
* `size`
* `value`

Values and sizes of parent elements are calculated automatically, so you do not need to specify them in data.

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

The sample below demonstrates how to work with formatting functions. Along with regular fields, a custom field *capital* is used:

```
// create data
var data = [
  {name:   "European Union – Top 10 Most Populated Countries", children: [
    {name: "Belgium",        value: 11443830, capital: "Brussels" },
    {name: "France",         value: 64938716, capital: "Paris"    },
    {name: "Germany",        value: 80636124, capital: "Berlin"   },
    {name: "Greece",         value: 10892931, capital: "Athens"   },
    {name: "Italy",          value: 59797978, capital: "Rome"     },
    {name: "Netherlands",    value: 17032845, capital: "Amsterdam"},
    {name: "Poland",         value: 38563573, capital: "Warsaw"   },
    {name: "Romania",        value: 19237513, capital: "Bucharest"}, 
    {name: "Spain",          value: 46070146, capital: "Madrid"   },
    {name: "United Kingdom", value: 65511098, capital: "London"   }  
  ]} 
];

// create a chart and set the data
chart = anychart.treeMap(data, "as-tree");

// enable HTML for labels
chart.labels().useHtml(true);

// configure labels
chart.labels().format(function (){
  var population = Math.round(this.value/100000)/10;
  return "<span style='font-weight:bold'>" + this.name + 
         "</span><br/>" + population + " mln";
});

// configure tooltips
chart.tooltip().format(function (){
  var population = Math.round(this.value/100000)/10;
  return "population: " + population +
         " mln\ncapital: " + this.getData("capital");
});
```

{sample}BCT\_Treemap\_Chart\_12{sample}

#### Font Size

The font size of labels can be automatically adjusted according to the size of tiles – use {api:anychart.charts.TreeMap#labels}labels(){api} with {api:anychart.core.ui.LabelsFactory#adjustFontSize}adjustFontSize(){api} and `true` as a parameter to enable this mode:

```
/* adjust the font size of labels
according to the size of tiles */
chart.labels().adjustFontSize(true);
```

{sample :height 500}BCT\_Treemap\_Chart\_13{sample}

### Headers

#### All Headers

By default, parent elements of the currently shown levels are visualized as headers. To disable or enable them, call the {api:anychart.core.StateSettings#headers}headers(){api} method with `false` or `true` as a parameter:

```
// disable headers
chart.headers(false);
```

You can limit the maximum height of headers, which might be necessary in case your chart is small or its size is dynamically changing. Call the {api:anychart.charts.TreeMap#maxHeadersHeight}maxHeadersHeight(){api} method and set the maximum height either in pixels (25 by default) or in percent:

```
//set the maximum height of headers
chart.maxHeadersHeight("20%");
```

The text and font of headers can be configured in the **normal** and **hover** [states](../Common_Settings/Interactivity/States): combine the {api:anychart.charts.TreeMap#normal}normal(){api} and {api:anychart.charts.TreeMap#hovered}hovered(){api} methods with {api:anychart.core.StateSettings#headers}headers(){api}.

Changing the default text of headers is similar to configuring [labels and tooltips](#labels_and_tooltips). You should use the {api:anychart.core.ui.LabelsFactory#format}format(){api} method with [tokens](../Common_Settings/Text_Formatters#string_tokens) or [formatting functions](../Common_Settings/Text_Formatters#formatting_functions):

```
// configure the text of headers in the hovered state
chart.hovered().headers().format("{%value}");
```

To [configure the font](../Appearance_Settings/Text_Settings) of headers, use methods listed on {api:anychart.core.ui.LabelsFactory}anychart.core.ui.LabelsFactory{api}:

```
// configure the font of headers
chart.normal().headers().fontColor("#990000");
chart.normal().headers().fontWeight('bold');
chart.normal().headers().fontSize("14");
chart.hovered().headers().fontColor("#000099");
```

The following sample demonstrates how to disable/enable headers; their text is customized in the hovered state, and font settings are changed in all states:

{sample :height 525}BCT\_Treemap\_Chart\_14{sample}

#### Individual Headers

Each header can be configured individually by adding the `header` field to the data:

```
// create data
var data = [
  {name:     "Slavic Languages",
   normal:  {header: {
                      format: "{%name} ({%value} Total)",
                      fontColor: "#990000",
                      fontWeight: "bold",
                      fontSize: "14",
                     }
            },
   hovered: {header: {fontColor: "#000099"}},
   children: [
    {name:   "East Slavic", header: null, children: [
      {name: "Russian",        value: 150000000},
      {name: "Ukrainian",      value:  45000000},
      {name: "Belarusian",     value:   3200000}
    ]},
    {name:   "West Slavic", header: null, children: [
      {name: "Polish",         value:  55000000},
      {name: "Czech",          value:  10600000},
      {name: "Slovak",         value:   5200000}
    ]},
    {name:   "South Slavic", header: null, children: [
      {name: "Serbo-Croatian", value:  21000000},
      {name: "Bulgarian",      value:   9000000},
      {name: "Slovene",        value:   2500000},
      {name: "Macedonian",     value:   1400000}
    ]}  
  ]} 
];

// create a chart and set the data
chart = anychart.treeMap(data, "as-tree");
```

{sample :height 500}BCT\_Treemap\_Chart\_15{sample}

#### Display Mode

By default, the text of a header is not shown if it does not fit its height. However, you can hide such text or always show the text of headers. To set the display mode of headers, call the {api:anychart.charts.TreeMap#headersDisplayMode}headersDisplayMode{api} method with one of the parameters listed in {api:anychart.enums.LabelsDisplayMode}anychart.enums.LabelsDisplayMode{api}:

* `"alwaysShow"` (default)
* `"clip"`
* `"drop"`

The sample below shows how to change the display mode, which is initially set to `"drop"`:

```
// set the display mode of headers
chart.headersDisplayMode("drop");
```

{sample :height 525}BCT\_Treemap\_Chart\_16{sample}

### Interactivity

#### Drilldown

The Treemap chart is interactive by default. It comes with a built-in drilldown feature: if you click on an element, you drill down to its children, and if you click on a header, you drill up a level. This behavior can be modified.

**Note:** By default it is also possible to drill down or up from the [context menu](../Common_Settings/UI_Controls/Context_Menu): right-click on a tile or a header and select "Drill Down To" or "Drill Up" in the menu (if, of course, these options are available for the element).

When you work with interactivity, sometimes the {api:anychart.data.Tree#search}search(){api} method can be helpful. It requires your data to be organized in a special way: use the [tree data model](../Working_with_Data/Tree_Data_Model) and create an instance of the {api:anychart.data.Tree}anychart.data.Tree{api} class with the help of {api:anychart.data#tree}anychart.data.tree(){api}:

```
// get data
var data = getData(); 

// create a storage for the data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart and set the data
chart = anychart.treeMap(treeData);
```

If you want to drill down to a particular item in the data tree, call the {api:anychart.data.Tree#search}search(){api} method to get the item and {api:anychart.charts.TreeMap#drillTo}drillTo{api} to drill down to it. For drilling up, call {api:anychart.charts.TreeMap#drillUp}drillUp{api}:

```
/* locate an item in the data tree,
get the item as an object */
var item = treeData.search("name", "Lvl 3-4");
// drill down to the item
chart.drillTo(item);

// drill up
chart.drillUp();
```

You can also call {api:anychart.charts.TreeMap#getDrilldownPath}getDrilldownPath(){api} to get the drilldown path.

The following sample shows how to drill down to a particular item, dill up, and add the drilldown path to the title of the chart (by using a custom function):

{sample}BCT\_Treemap\_Chart\_17{sample}

#### Disabling Drilldown

To disable the drilldown feature, you should add an [event listener](../Common_Settings/Event_Listeners) to your chart. Use the {api:anychart.core.Base#listen}listen(){api} method and specify the event type – `drillchange`:

```
// disable the drilldown feature
chart.listen("drillchange", function(e){
  return false;
});
```

{sample}BCT\_Treemap\_Chart\_18{sample}