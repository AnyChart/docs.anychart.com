{:index 1}
# Circle Packing Chart

## Overview

A circle packing chart, or a circular treemap, is a visualization that displays hierarchically organized data as a set of nested circles. The sizes of circles are proportional to the values of the data points they represent.

This article explains how to create a basic Circle Packing chart in AnyChart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Circle Packing chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Circle Packing](../Quick_Start/Modules#circle_packing)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.CirclePacking}anychart.charts.CirclePacking{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[id, parent, children, name, value](../Working_with_Data/Overview)</td></tr>
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
<tr><td></td><td>[Venn](Venn_Diagram)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Circle Packing Chart](https://www.anychart.com/products/anychart/gallery/Circle_Packing/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Circle Packing chart requires adding the [Core](../Quick_Start/Modules#core) and [Circle Packing](../Quick_Start/Modules#circle_packing) modules:

```
<script src="https://cdn.anychart.com/releases/8.10.0/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/8.10.0/js/anychart-circle-packing.min.js"
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Circle Packing chart, use the {api:anychart#circlePacking}anychart.circlePacking(){api} chart constructor, like in the following sample:

```
// create data
var data = [
  {name:     "Slavic Languages", children: [
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
chart = anychart.circlePacking(data, "as-tree");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Circle\_Packing\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Circle Packing chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings
  
### Data

The Circle Packing chart requires the [tree data model](../Working_with_Data/Tree_Data_Model). Use the following fields:

* `id` to set unique identifiers
* `parent` to set parents
* `children` to set children
* `name` to set names
* `value` to set values

The sizes of circles represent the `value` field. You do not need to specify the values of parent elements - they are calculated automatically.

**Note:** It is possible to add custom fields to your data - see the [Labels and Tooltips](#labels_and_tooltips) section of this article.

Unlike other chart types based on the tree data structure (e.g., the [Treemap](Treemap_Chart) chart), this chart allows adding more than one root node:

```
// create data
var data = [
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
];

// create a chart and set the data
var chart = anychart.circlePacking(data, "as-tree");
```

{sample}BCT\_Circle\_Packing\_Chart\_02{sample}

### Appearance

#### States

The [appearance settings](../Appearance_Settings) of a Circle Packing chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.charts.CirclePacking#normal}normal(){api}, {api:anychart.charts.CirclePacking#hovered}hovered(){api}, and {api:anychart.charts.CirclePacking#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In this sample, there is a Circle Packing chart with appearance settings configured:

```
// configure the visual settings of the chart
chart.normal().fill("#00838f", 0.3);
chart.hovered().fill("#dd2c00", 0.1);
chart.selected().fill("#dd2c00", 0.3);
chart.normal().stroke("#00838f", 1);
chart.hovered().stroke("#dd2c00 ", 2);
chart.selected().stroke("#dd2c00", 4);
```

{sample}BCT\_Circle\_Packing\_Chart\_03{sample}

#### Fill Functions

Another way to set the colors of a chart is to call the {api:anychart.charts.CirclePacking#fill}fill(){api} method with a function as a parameter. In this function, you can use the following fields:

* `autoColor` - the default color of a node or its color from the data, if specified
* `depth` - the depth level of a node
* `index` - the index of a node in the tree
* `isLeaf` - a test whether a node is a leaf
* `item` - an instance of the {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api} class
* `name` - the name of a node
* `sourceColor` - in the normal state: the color of a node from the palette or the inherited color; in the hovered and selected states: the color in the normal state
* `value` - the value of a node
* `weight` - the relative radius of the circle representing the current node

This is how the {api:anychart.core.StateSettings#fill}fill(){api} method works in the normal state:

```
function() {
  return this.sourceColor;
}
```

The following sample demonstrates two simple fill functions:

```
// configure the visual settings of the chart

chart.normal().fill(function () {
 var palette = anychart.palettes.defaultPalette;
 return palette[this.depth];
});

chart.hovered().fill(function () {
 var palette = anychart.palettes.defaultPalette;
 return anychart.color.lighten(palette[this.depth], 0.3);
});
```

{sample}BCT\_Circle\_Packing\_Chart\_04{sample}

### Labels and Tooltips

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

#### Tokens

To change the text of labels, combine the {api:anychart.charts.CirclePacking#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

To configure tooltips, do the same with the {api:anychart.charts.CirclePacking#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods.

Here is the list of tokens that work with the Circle Packing chart:

* `{%id}`
* `{%name}`
* `{%value}`

Please note that the values of parent elements are calculated automatically, so you do not need to specify them in data - the `{%value}` token works anyway.

Also, you can always add a custom field to your data and use a custom token corresponding to it.

This sample shows how to work with tokens. Along with regular tokens, a custom token `{%country}` is used:

```
// create data
var data = [
  {name:   "East Slavic", children: [
    {name: "Russian",        value: 150000000, country: "Russia"         },
    {name: "Ukrainian",      value:  45000000, country: "Ukraine"        },
    {name: "Belarusian",     value:   3200000, country: "Belarus"        }
  ]},
  {name:   "West Slavic", children: [
    {name: "Polish",         value:  55000000, country: "Poland"         },
    {name: "Czech",          value:  10600000, country: "Czech Republic" },
    {name: "Slovak",         value:   5200000, country: "Slovakia"       }
  ]},
  {name:   "South Slavic", children: [
    {name: "Serbo-Croatian", value:  21000000, country: "Serbia, Croatia"},
    {name: "Bulgarian",      value:   9000000, country: "Bulgaria"       },
    {name: "Slovene",        value:   2500000, country: "Slovenia"       },
    {name: "Macedonian",     value:   1400000, country: "Macedonia"      }
  ]}  
];

// create a chart and set the data
chart = anychart.circlePacking(data, "as-tree");

// enable HTML for labels
chart.labels().useHtml(true);

// configure labels
chart.labels().format(
  "{%name}<br><span style='font-weight:bold'>{%value}</span>"
);

// configure tooltips
chart.tooltip().format(
  "number of speakers: {%value}\ncountry: {%country}"
);
```

{sample}BCT\_Circle\_Packing\_Chart\_05{sample}

#### Formatting Functions

To configure labels and tooltips, you can use [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the following fields:

* `name`
* `value`

The values of parent elements are calculated automatically, so you do not need to specify them in data.

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

The sample below demonstrates how to work with formatting functions. Along with regular fields, a custom field `country` is used:

```
// create data
var data = [
  {name:   "East Slavic", children: [
    {name: "Russian",        value: 150000000, country: "Russia"         },
    {name: "Ukrainian",      value:  45000000, country: "Ukraine"        },
    {name: "Belarusian",     value:   3200000, country: "Belarus"        }
  ]},
  {name:   "West Slavic", children: [
    {name: "Polish",         value:  55000000, country: "Poland"         },
    {name: "Czech",          value:  10600000, country: "Czech Republic" },
    {name: "Slovak",         value:   5200000, country: "Slovakia"       }
  ]},
  {name:   "South Slavic", children: [
    {name: "Serbo-Croatian", value:  21000000, country: "Serbia, Croatia"},
    {name: "Bulgarian",      value:   9000000, country: "Bulgaria"       },
    {name: "Slovene",        value:   2500000, country: "Slovenia"       },
    {name: "Macedonian",     value:   1400000, country: "Macedonia"      }
  ]}  
];

// create a chart and set the data
chart = anychart.circlePacking(data, "as-tree");

// enable HTML for labels
chart.labels().useHtml(true);

// configure labels
chart.labels().format(function() {
  var numberOfSpeakers = Math.round(this.value/100000)/10;
  return this.name + "<span style='font-weight:bold'><br>" +
         numberOfSpeakers + " mln";
});

// configure tooltips
chart.tooltip().format(function() {
var numberOfSpeakers = Math.round(this.value/100000)/10;
return "number of speakers: " + numberOfSpeakers +
       " mln\ncountry: " + this.getData("country");
});
```

{sample}BCT\_Circle\_Packing\_Chart\_06{sample}