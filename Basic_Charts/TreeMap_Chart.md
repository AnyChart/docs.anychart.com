{:index 6.2}
# Treemap Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Data](#data)
  * [Depth and Hints](#depth_and_hints)
  * [Sorting Order](#sorting_order)
  * [Appearance](#appearance)
  * [Color Scale](#color_scale)
  * [Labels and Tooltips](#labels_and_tooltips)
  * [Headers](#headers)
  * [Interactivity](#interactivity)

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

In the sample below, there is a basic Treemap comparing the top 10 most populated EU countries by their population:

```
// create data
var data = [
{name: "European Union – Top 10 Most Populated Countries",
  children: [
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

Data for a Treemap chart can be passed to the chart constructor {api:anychart#treeMap}anychart.treeMap(){api} or to the {api:anychart.charts.TreeMap#data}data(){api} method.

Use the following data fields:

* **children** to set children
* **id** to set unique identifiers
* **name** to set names
* **parent** to set parents
* **size** to set sizes
* **value** to set values

In addition, it is possible to add custom fields to your data – see the [Labels and Tooltips](#labels_and_tooltips) section of this article.

There are two ways to arrange data for a Treemap chart: [as a tree](../Working_with_Data/Using_Data_Tree_Model) or [as a table](../Working_with_Data/Using_Table_Data_Model).

Tree data structure is expected by the Treemap by default. It requires three fields: "value", "name" or "id", "children" (the last one used to specify the hierarchy of elements).

That is how working with tree data structure looks like:

```
// create data
var data = [
{name: "Slavic Languages – Number of Speakers",
  children: [
    {name: "East Slavic", children: [
      {name: "Russian",        value: 150000000},
      {name: "Ukrainian",      value:  45000000},
      {name: "Belarusian",     value:   3200000}
    ]},
    {name: "West Slavic", children: [
      {name: "Polish",         value:  55000000},
      {name: "Czech",          value:  10600000},
      {name: "Slovak",         value:   5200000}
    ]},
    {name: "South Slavic", children: [
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

Arranging data as a table is particularly useful when you store your data in a relational database table. This way of organizing data requires the "name", "value", id", and "parent" fields ("id" and "parent" used to specify the hierarchy of elements).

That is how working with table data structure looks like:

```
// create data
var data = [
  {id: 1,  parent: null, name: "Slavic Languages – Number of Speakers"},
  {id: 2,  parent:    1, name: "East Slavic"},
  {id: 3,  parent:    2, name: "Russian",        value: 150000000},
  {id: 4,  parent:    2, name: "Ukrainian",      value:  45000000},
  {id: 5,  parent:    2, name: "Belarusian",     value:   3200000},
  {id: 6,  parent:    1, name: "West Slavic"},
  {id: 7,  parent:    6, name: "Polish",         value:  55000000},
  {id: 8,  parent:    6, name: "Czech",          value:  10600000},
  {id: 9,  parent:    6, name: "Slovak",         value:   5200000},
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

No matter how your data is organised, colors and sizes of tiles represent the "value" field. Alternatively, sizes can represent an optional "size" field, so adding it to the data allows you to show two different parameters instead of one.

On the Treemap chart below, the size of each tile represents the population of a country ("size"), and the color represents the population density ("value"):

```
// create data
var data = [
{name: "EU – Population Density in Top 10 Most Populated Countries",
  children: [
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

```
// set the maximum depth of levels shown
chart.maxDepth(2);

// set the depth of hints
chart.hintDepth(3);

// set the opacity of hints
chart.hintOpacity(0.7);  
```

{sample}BCT\_Treemap\_Chart\_05{sample}

### Sorting Order

```
// set the sorting mode
chart.sort("asc");
```

{sample}BCT\_Treemap\_Chart\_06{sample}

### Appearance

```
// configure visual settings
chart.hoverFill("gray", 0.4);
chart.selectFill("gray", 0.6);
chart.selectHatchFill("backwardDiagonal", "gray", 2, 20);
chart.stroke("gray");
chart.hoverStroke("gray");
chart.selectStroke("gray", 2);
```

{sample}BCT\_Treemap\_Chart\_07{sample}

```
// create data
var data = [
{name: "European Union – Top 10 Most Populated Countries",
  children: [
    {name: "Belgium",        value: 11443830, fill: "#ffcc00"},
    {name: "France",         value: 64938716, fill: "#ff6600"},
    {name: "Greece",         value: 10892931, fill: "#ffcc00"},
    {name: "Italy",          value: 59797978, fill: "#ff6600"},
    {name: "Netherlands",    value: 17032845, fill: "#ffcc00"},
    {name: "Poland",         value: 38563573, fill: "#ff9933"},
    {name: "Romania",        value: 19237513, fill: "#ffcc00"}, 
    {name: "Spain",          value: 46070146, fill: "#ff9933"},
    {name: "United Kingdom", value: 65511098, fill: "#ff6600"},
    {
      name: "Germany",
      value: 80636124,
      fill: "#ff0000",
      hoverFill: "#ff0000",
      selectFill: "#b30059",
      stroke: {color: "#b30059", thickness: 4},
      hoverStroke: {color: "white", thickness: 5},
      selectStroke: {color: "white", thickness: 5}
    }  
  ]} 
];

// create a chart and set the data
chart = anychart.treeMap(data, "as-tree");
```

{sample}BCT\_Treemap\_Chart\_08{sample}

### Color Scale

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

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

```
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

```
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

```
// configure the text of headers
chart.headers().format("{%name} – {%value}");

// configure the appearance of headers
chart.headers().fontColor("#990000");
chart.headers().fontWeight('bold');
chart.headers().fontSize("20");
chart.hoverHeaders().fontColor("#000099");
chart.maxHeadersHeight("40");
```

{sample}BCT\_Treemap\_Chart\_13{sample}

```
// create data
var data = [
  {id: 1,  parent: null, name: "Slavic Languages", header: {
                                                     format: "{%name} – {%value} Speakers",
                                                     fontColor: "#990000",
                                                     fontWeight: "bold",
                                                     fontSize: "14"
                                                   },
                                                   hoverHeader: {fontColor: "#000099"}
  },
  {id: 2,  parent:    1, name: "East Slavic",      header: null},
  {id: 3,  parent:    2, name: "Russian",          value: 150000000},
  {id: 4,  parent:    2, name: "Ukrainian",        value:  45000000},
  {id: 5,  parent:    2, name: "Belarusian",       value:   3200000},
  {id: 6,  parent:    1, name: "West Slavic",      header: null},
  {id: 7,  parent:    6, name: "Polish",           value:  55000000},
  {id: 8,  parent:    6, name: "Czech",            value:  10600000},
  {id: 9,  parent:    6, name: "Slovak",           value:   5200000},
  {id: 10, parent:    1, name: "South Slavic",     header: null},
  {id: 11, parent:   10, name: "Serbo-Croatian",   value:  21000000},
  {id: 12, parent:   10, name: "Bulgarian",        value:   9000000},
  {id: 13, parent:   10, name: "Slovene",          value:   2500000},
  {id: 13, parent:   10, name: "Macedonian",       value:   1400000}
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
