{:index 6.2}
# Treemap Chart

## Overview

A treemap is...

This article explains how to create a basic Treemap chart in AnyChart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Treemap chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.TreeMap}anychart.charts.TreeMap{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[children, id, name, parent, size, value](../Working_with_Data/Overview)</td></tr>
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
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/treemap/" target="_blank">Chartopedia: Treemap Chart</a></td></tr>
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

* `children` to set children
* `id` to set unique identifiers
* `name` to set names
* `parent` to set parents
* `size` to set sizes
* `value` to set values

In addition, it is possible to add custom fields to your data – read the [Labels and Tooltips](#labels_and_tooltips) section of this article to learn how you can use this feature.

There are two ways to arrange data for a Treemap chart: [as a tree](../Working_with_Data/Using_Data_Tree_Model) or [as a table](../Working_with_Data/Using_Table_Data_Model).

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

You can sort the tiles of a Treemap chart by their values in descending (default) or ascending order or disable sorting. Use the {api:anychart.charts.TreeMap#sort}sort(){api} method with `"desc"`, `"asc"`, or `"none"` as a parameter. When there is no sorting, tiles are arranged according to the order of their listing in data.

Please note: if you add the `size` field, tiles are sorted by size, not value.

The sample below shows how to set the sorting mode:

```
// set the sorting mode
chart.sort("asc");
```

{sample}BCT\_Treemap\_Chart\_06{sample}

### Appearance

Here is a full list of methods used to configure visual settings that are available for the Treemap chart:

*  {api:anychart.charts.Treemap#fill}fill(){api}, {api:anychart.charts.HeatMap#hatchFill}hatchFill(){api}, {api:anychart.charts.Treemap#stroke}stroke(){api} set the fill, hatch fill, and stroke
*  {api:anychart.charts.Treemap#hoverFill}hoverFill(){api}, {api:anychart.charts.Treemap#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.charts.Treemap#hoverStroke}hoverStroke(){api} configure the visual settings on hover
*  {api:anychart.charts.Treemap#selectFill}selectFill(){api}, {api:anychart.charts.Treemap#selectHatchFill}selectHatchFill(){api}, {api:anychart.charts.Treemap#selectStroke()}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) section.

In the followoing sample, there is a Treemap chart with some of the appearance settings configured:

```
// configure visual settings
chart.hoverFill("gray", 0.4);
chart.selectFill("gray", 0.6);
chart.selectHatchFill("backwardDiagonal", "gray", 2, 20);
chart.stroke("gray");
chart.hoverStroke("gray");
chart.selectStroke("gray", 2);
```
It is also possible to configure the appearance of each cell individually — add extra fields corresponding with the methods mentioned above to your data:

{sample}BCT\_Treemap\_Chart\_07{sample}

```
// create data
var data = [
  {name:   "European Union – Top 10 Most Populated Countries", children: [
    {name: "Belgium",        value: 11443830, fill: "#ffcc00"},
    {name: "France",         value: 64938716, fill: "#ff6600"},
    {name: "Greece",         value: 10892931, fill: "#ffcc00"},
    {name: "Italy",          value: 59797978, fill: "#ff6600"},
    {name: "Netherlands",    value: 17032845, fill: "#ffcc00"},
    {name: "Poland",         value: 38563573, fill: "#ff9933"},
    {name: "Romania",        value: 19237513, fill: "#ffcc00"}, 
    {name: "Spain",          value: 46070146, fill: "#ff9933"},
    {name: "United Kingdom", value: 65511098, fill: "#ff6600"},
    {name: "Germany",
     value: 80636124,
     fill: "#ff0000",
     hoverFill: "#ff0000",
     selectFill: "#b30059",
     stroke: "4 #b30059",
     hoverStroke: "5 white",
     selectStroke: "5 white"
    }  
  ]} 
];

// create a chart and set the data
chart = anychart.treeMap(data, "as-tree");
```

{sample}BCT\_Treemap\_Chart\_08{sample}

### Color Scale

By default, the color scale of a Treemap chart is ordinal, and cells are colored in the colors of the default [palette](../Appearance_Settings/Palettes). Color ranges are set automatically.

To customize the **ordinal color scale**, you should create it explicitly by using the {api:anychart.scales#ordinalColor}ordinalColor(){api} constructor.

Combine it with {api:anychart.scales.OrdinalColor#ranges}ranges(){api} to set heat ranges (two or more) you want to be marked by different colors. Then you can set a color for each of these ranges by using the {api:anychart.scales.OrdinalColor#colors}colors(){api} method. Please note that if you do not specify colors and ranges, the default settings of the ordinal color scale are used.

To set your scale as the color scale of the chart, use the {api:anychart.charts.Treemap#colorScale}colorScale(){api} method.

Optionally, you can use {api:anychart.charts.Treemap#colorRange}colorRange(){api} to enable a **color range** – a special interactive element representing the color scale. With the ordinal color scale, the color range shows the ranges and their colors.

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
chart.colorRange().colorLineSize(10);
```

{sample}BCT\_Treemap\_Chart\_09{sample}

To create a **linear color scale**, use the {api:anychart.scales#linearColor}linearColor(){api} constructor.

Then call {api:anychart.scales.LinearColor#colors}colors(){api} to set two colors, the first one indicating 0, and the second one indicating the maximum heat. Cells are colored automatically in different mixtures of these two colors, and if you do not specify them, the default colors of the linear color scale are used.

Finally, call {api:anychart.charts.Treemap#colorScale}colorScale(){api} to set your scale as the color scale of the chart, and {api:anychart.charts.Treemap#colorRange}colorRange(){api} to add a **color range**. With the linear color scale, it looks like a gradient from the first to the second color.

In the following sample, there is a Treemap with a linear color scale and a color range:

```
// create and configure a color scale.
var customColorScale = anychart.scales.linearColor();
customColorScale.colors(["#00ccff", "#ffcc00"]);

// set the color scale as the color scale of the chart
chart.colorScale(customColorScale);

// add a color range
chart.colorRange().enabled(true);
chart.colorRange().colorLineSize(10);
```

{sample}BCT\_Treemap\_Chart\_10{sample}

### Labels and Tooltips

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

To change the text of labels, combine the {api:anychart.charts.Treemap#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

To configure tooltips, do the same with the {api:anychart.charts.Treemap#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods.

Here is the list of tokens that work with the Treemap chart:

* `{%id}`
* `{%name}`
* `{%size}`
* `{%value}`

Please note that values and sizes of parent elements are calculated automatically, so you do not need to specify them in data – the `{%value}` and `{%size}` tokens work anyway.

You can use custom data fields and custom tokens of the same name, like in this sample:

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

Labels and Tooltips are also configured with the help of [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the following fields:

* `*name`
* `size`
* `value`

Values and sizes of parent elements are calculated automatically, so you do not need to specify them in data. If there is a custom field in your data, you can use a field of the same name in formatting functions:

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
chart.labels().format(function(){
  var population = Math.round(this.value/100000)/10;
  return "<span style='font-weight:bold'>" + this.name + 
         "</span><br/>" + population + " mln";
});

// configure tooltips
chart.tooltip().format(function(){
  var population = Math.round(this.value/100000)/10;
  return "population: " + population + " mln" +
         "\ncapital: " + this.getData("capital");
});
```

{sample}BCT\_Treemap\_Chart\_12{sample}

### Headers

By default, parent elements of the currently shown levels are visualized as headers. You can disable them or configure their text and font in the **normal** and **hover** states. Plus, you can set the maximum height of headers.

To disable headers, use the {api:anychart.charts.TreeMap#headers}headers(){api} and {api:anychart.charts.TreeMap#hoverHeaders}hoverHeaders(){api} methods with `false` or `null` as parameters. To enable headers, use the same methods with `true`.

**Note:** The {api:anychart.charts.TreeMap#headers}headers(){api} method affects only the normal state, so you have to use both methods if you want to disable headers completely:

```
// disable headers in the normal state
chart.headers(false);
// disable headers in the hover state
chart.hoverHeaders(false);
```

To configure the text of headers, combine the {api:anychart.charts.TreeMap#headers}headers(){api} and {api:anychart.charts.TreeMap#hoverHeaders}hoverHeaders(){api} methods with {api:anychart.core.ui.LabelsFactory#format}format(){api} and [tokens](../Common_Settings/Text_Formatters#string_tokens) or [formatting functions](../Common_Settings/Text_Formatters#formatting_functions), like for configuring [labels and tooltips](#labels_and_tooltips):

```
// configure the text of headers on hover
chart.hoverHeaders().format("{%value}");
```

To configure the font of headers, combine the {api:anychart.charts.TreeMap#headers}headers(){api} and {api:anychart.charts.TreeMap#hoverHeaders}hoverHeaders(){api} with... (???)

```
// configure the font of headers
chart.headers().fontColor("#990000");
chart.headers().fontWeight('bold');
chart.headers().fontSize("18");
chart.hoverHeaders().fontColor("#000099");
```

The height of headers adjusts to the height of their text. However, by default the maximum height is 25 pixels, and the text is cropped if it occupies an area bigger than this value. To change the maximum height of headers, call the {api:anychart.charts.TreeMap#maxHeadersHeight}maxHeadersHeight(){api} method:

```
// set the maximum height of headers
chart.maxHeadersHeight("30");
```

The following sample demonstrates how to change the default text and font settings as well as maximum height of headers and disable/enable them:

{sample}BCT\_Treemap\_Chart\_13{sample}

```
// create data
var data = [
  {name:     "Slavic Languages – Number of Speakers",
   header: {
     format: "{%name} ({%value} Total)",
     fontColor: "#990000",
     fontWeight: "bold",
     fontSize: "14"
   },
   hoverHeader: {fontColor: "#000099"},
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

{sample}BCT\_Treemap\_Chart\_14{sample}

```
  // set the display mode of headers
  chart.headersDisplayMode("alwaysShow");
```

{sample}BCT\_Treemap\_Chart\_15{sample}

### Interactivity

[создать instance of the anychart.data.Tree class, используя метод anychart.data.tree()]

```
/* locate an item in the data tree,
get the item as an object*/
var item = treeData.search("name", "Lvl 3-4");
// drill down to the item
chart.drillTo(item);

// drill up
chart.drillUp();
```

```
/* listen to the chartDraw event
and add the drill-down path to the chart title */
chart.listen("chartDraw",function(){
  // get the drill-down path and convert it to a string
  var text = printPath(chart.getDrilldownPath());
  // set the chart title
  chart.title().useHtml(true);
  chart.title("Treemap: Interactivity (Drilling Up and Down)<br>Path: " +
              "<span style = 'color:#990000; font-style:italic'>"
              + text + "</span>");
});

/* a function for converting the current
drill-down path to a string */
function printPath(path){
  /* go through the array of the data tree items
  and use the get() method to obtain the "name" field */
  var text = "";
  for (i = 0; i <  path.length; i++){ 
    text += path[i].get("name") + "\\";
  }
  return text;
};
```

{sample}BCT\_Treemap\_Chart\_16{sample}

```
// disable the drill-down option
chart.listen("drillchange", function(e){
  return false;
});
```

{sample}BCT\_Treemap\_Chart\_17{sample}
