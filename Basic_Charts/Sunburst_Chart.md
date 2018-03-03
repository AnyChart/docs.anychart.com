{:index 6}
# Sunburst Chart

## Overview

A sunburst chart, otherwise known as a radial treemap or multi-level pie chart, is a visualization that displays hierarchically organized data as a set of nested rings (the top level of the hierarchy is shown in the center). Rings are divided into slices that represent data points, the sizes of slices sometimes representing their values.

This article explains how to create a basic Sunburst chart in AnyChart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Sunburst chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Sunburst}anychart.charts.Sunburst{api}</td></tr>
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
<tr><td></td><td>[Treemap](Treemap_Chart)</td></tr>
<tr><td></td><td>[Pie](Pie_Chart)</td></tr>
<tr><td></td><td>[Doughnut](Doughnut_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/sunburst/" target="_blank">Chartopedia: Sunburst Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Sunburst chart, use the {api:anychart#sunburst}anychart.sunburst(){api} chart constructor, like in the following sample:

```
// create data
var data = [
  {name: "Company A", children: [
    {name: "Technical", children: [
      {name: "Team Leaders"},
      {name: "Architects"},
      {name: "Developers"},
      {name: "Testers"}
    ]},
    {name: "Sales", children: [
      {name: "Analysts"},
      {name: "Executives"}
    ]},
    {name: "HR"},
    {name: "Management"}
  ]}
];

// create a chart and set the data
var chart = anychart.sunburst(data, "as-tree");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Sunburst chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

The Sunburst chart requires the [tree data structure](../Working_with_Data/Using_Data_Tree_Model). Use the following fields:

* `id` to set unique identifiers
* `parent` to set parents
* `children` to set children
* `name` to set names
* `value` to set values

**Note:** It is possible to add custom fields to your data – see the [Labels and Tooltips](#labels_and_tooltips) section of this article.

Unlike other chart types based on the tree data structure (e.g., the [Treemap](Treemap_Chart) chart), this chart allows adding more than one parent node:

```
// create data
var data = [
  {name: "London", children: [
    {name: "Management"},
    {name: "Sales", children: [
      {name: "Analysts"},
      {name: "Executives"}
    ]},
    {name: "Accounting"}
  ]},
  {name: "New York", children: [
    {name: "Technical", children: [
      {name: "Team Leaders"},
      {name: "Architects"},
      {name: "Developers"},
      {name: "Testers"}
    ]},
    {name: "HR"}
  ]}
];

// create a chart and set the data
var chart = anychart.sunburst(data, "as-tree");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_02{sample}

### Calculation Mode

When you create a Sunburst chart, you can specify how the size of its points should be calculated. To set the calculation mode, use the {api:anychart.charts.Sunburst#calculationMode}calculationMode(){api} method with one of the parameters listed in {api:anychart.enums.SunburstCalculationMode}anychart.anychart.enums.SunburstCalculationMode{api}:

* `"ordinal-from-root"` (default)
* `"ordinal-from-leaves"`
* `"parent-dependent"`
* `"parent-independent"`

Please note that in the `"ordinal-from-root"` and `"ordinal-from-leaves"` modes, values do not affect the way the chart looks, so the `value` data field is not required. By contrast, to set the `"parent-dependent"` and `"parent-independent"` modes, you need to specify values.

To learn more about the difference between calculation modes, see the subsections below.

#### Ordinal from Root

The default calculation mode, `"ordinal-from-root"`, is used to focus solely on the hierarchy of categories.

In this mode the values of elements are not taken into account, so the `value` data field is not required. Root nodes divide the circle into equal parts, and if there is only one root node, it occupies the whole circle. Child elements also divide their parents into equal parts. 

```
// create data
var data = [
  {name: "Company A", children: [
    {name: "Technical", children: [
      {name: "Team Leaders"},
      {name: "Architects"},
      {name: "Developers"},
      {name: "Testers"}
    ]},
    {name: "Sales", children: [
      {name: "Analysts"},
      {name: "Executives"}
    ]},
    {name: "HR"},
    {name: "Management"}
  ]}
];

// create a chart and set the data
var chart = anychart.sunburst(data, "as-tree");

// set the calculation mode
chart.calculationMode("ordinal-from-root");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_03{sample}

#### Ordinal from Leaves

The `"ordinal-from-leaves"` mode is used to compare categories by the number of their child elements.

In this mode the values of nodes are not taken into account, so the `value` data field is not required. The elements at the last level of the hierarchy (leaves), divide the circle into equal parts, and the size of each parent element depends on the number of its children.

```
// create data
var data = [
  {name: "Italian", children: [
    {name: "Consonants", children: [
      {name: "m"}, {name: "n"}, {name: "ɲ"},
      {name: "p"}, {name: "b"}, {name: "t"},
      {name: "d"}, {name: "k"}, {name: "g"},
      {name: "t͡s"}, {name: "d͡z"}, {name: "t͡ʃ"},
      {name: "d͡ʒ"}, {name: "f"}, {name: "v"},
      {name: "s"}, {name: "z"}, {name: "ʃ"},
      {name: "j"}, {name: "w"}, {name: "l"},
      {name: "ʎ"}, {name: "r"}, {name: "ɾ"}
    ]},
    {name: "Vowels", children: [
      {name: "i"}, {name: "u"}, {name: "e"},
      {name: "o"}, {name: "ɛ"}, {name: "ɔ"},
      {name: "a"}
    ]} 
  ]}
];

// create a chart and set the data
var chart = anychart.sunburst(data, "as-tree");

// set the calculation mode
chart.calculationMode("ordinal-from-leaves");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_04{sample}

#### Parent Dependent

The `"parent-dependent"` calculation mode is used to compare elements by their values in case only some of the elements in each category are shown, while others are omitted (or when data is incomplete). 

In this mode the sizes of nodes depend on their values, so the `value` data field is required. The value of a parent node can exceed the sum of its child nodes' values. 

```
// create data
var data = [
  {name:     "Andorra", value: 57600000, children: [
    {name:   "Machines", value: 22400000, children: [
      {name: "Integrated Circuits", value: 12200000},
      {name: "Blank Audio Media", value: 2500000},
      {name: "Computers", value: 1100000}
    ]},
    {name:   "Instruments", value: 9750000, children: [
      {name: "Orthopedic Appliances", value: 8900000}
    ]},
    {name:   "Chemical Products", value: 4740000, children: [
      {name: "Essential Oils", value: 3690000},
      {name: "Beauty Products", value: 423000}
    ]},
    {name:   "Mineral Products", value: 4540000, children: [
      {name: "Coal Briquettes", value: 4280000}
    ]},
    {name:   "Transportation", value: 4060000, children: [
      {name: "Cars", value: 2870000},
      {name: "Vehicle Parts", value: 640000}
    ]}
  ]}
];

// create a chart and set the data
var chart = anychart.sunburst(data, "as-tree");

// set the calculation mode
chart.calculationMode("parent-dependent");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_05{sample}

#### Parent Independent

The `"parent-independent"` calculation mode is used to compare elements by their values in case all elements belonging to each category are shown.

This mode requires the `value` data field: you need to specify the values of the elements at the last level of the hierarchy (leaves). The size of each leaf depends on its value, while the size of each parent depends on the sum of its child nodes' values, which is calculated automatically.

```
// create data
var data = [
  {name: "Company A", children: [
    {name: "Technical", children: [
      {name: "Team Leaders", value: 7},
      {name: "Architects", value: 3},
      {name: "Developers", value: 35},
      {name: "Testers", value: 15}
    ]},
    {name: "Sales", children: [
      {name: "Analysts", value: 12},
      {name: "Executives", value: 8}
    ]},
    {name: "HR", value: 3},
    {name: "Management", value: 7}
  ]}
];

// create a chart and set the data
var chart = anychart.sunburst(data, "as-tree");

// set the calculation mode
chart.calculationMode("parent-independent");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_06{sample}

### Levels and Leaves

You can access any level (ring) of a Sunburst chart by its index – use the {api:anychart.charts.Sunburst#level}level(){api} method with an index as a parameter.

**Note 1:** The index of the root level is 0.

**Note 2:** If the index is not specified, this method affects all levels.

There is also an alternative way to access the elements of the last level (leaves): you can use the {api:anychart.charts.Sunburst#level}leaves(){api} method.

Here are the available settings of levels and leaves: {api:anychart.core.sunburst.Level}anychart.core.sunburst.Level{api}. For example, you can enable/disable them or set their thickness by calling {api:anychart.core.sunburst.Level#enabled}enabled(){api} or {api:anychart.core.sunburst.Level#thickness}thickness(){api}.To learn how to configure the labels of levels and leaves, see the [Labels and Tooltips](#labels_and_tooltips) section of this article.

In this sample, there is a Sunburst chart with the first level hidden and the thickness of leaves modified:

```
// hide the first level
chart.level(1).enabled(false);

// set the thickness of leaves
chart.leaves().thickness("70%");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_07{sample}

### Appearance

#### All Points

The [appearance settings](../Appearance_Settings) of a Sunburst chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.charts.Sunburst#normal}normal(){api}, {api:anychart.charts.Sunburst#hovered}hovered(){api}, and {api:anychart.charts.Sunburst#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In this sample, there is a Sunburst chart with appearance settings configured:

```
// configure the visual settings of the chart
chart.hovered().fill("#96a6a6", 0.4);
chart.selected().fill("#96a6a6", 0.6);
chart.selected().hatchFill("forward-diagonal", "#96a6a6", 0.5, 12);
chart.normal().stroke("#96a6a6", 2);
chart.hovered().stroke("#96a6a6", 2);
chart.selected().stroke("#96a6a6", 4);
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_08{sample}

#### Individual Points

It is possible to configure the appearance of each point individually – use extra data fields corresponding with the methods mentioned above:

```
// create data
var data = [
  {name: "Company A", children: [
    {name: "Technical",
     normal: {fill: "#ffad99"},
     children: [
      {name: "Team Leaders"},
      {name: "Architects"},
      {name: "Developers",
       normal: {fill: "#dd2c00"},
       selected: {fill: "#b32400"}
      },
      {name: "Testers"}
    ]},
    {name: "Sales", children: [
      {name: "Analysts"},
      {name: "Executives"}
    ]},
    {name: "HR"},
    {name: "Management"}
  ]}
];
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_09{sample}

#### Fill Functions

You can also set the colors of your chart by calling the {api:anychart.charts.Sunburst#fill}fill(){api} method with a function as a parameter. In this function, you can use the following fields:

* `autoColor` – the default color of a node or its color from the data, if specified (???) (цвет из палитры по линейному индексу ноды)
* `chart` – the chart (инстанс чарта?)
* `index` – the (linear? внутренний?) index of a node
* `isLeaf` – a test whether a node is a leaf
* `iterator` – the linear iterator
* `level` – the index of a level the current node belongs to
* `mainColor` – the color of a node's ancestor at the first level or, if there is more than one root, of its root ancestor (inherited by default) (???) 
* `parent` – the parent node of the current node (инстанс класса?)
* `parentColor` – the color of the parent node
* `path` – an array of nodes representing the path from the root to the current node (?)
* `point` – an instance of the {api:anychart.treeChartBase.Point}Point{api} class
* `series` – the chart (инстанс чарта?) (вообще про это не писать?)
* `sourceColor` – the color of a node from the data or, if not specified, the `mainColor` (???)

That is how the {api:anychart.core.StateSettings#fill}fill(){api} (на то ссылка?) method works in the normal state:

```
function() {
  return this.sourceColor;
};
```

The following sample demonstrates a simple fill function:

```
// configure the visual settings of the chart
chart.fill(function () {
  return this.parent ?
   anychart.color.lighten(this.parentColor, 0.5) : 
   this.mainColor;
});
```

{sample :height 500}BCT\_Sunburst\_Chart\_10{sample}

### Start Angle

You can set the angle where the first point is placed – use the {api:anychart.charts.Sunburst#startAngle}startAngle(){api} method. The angle is 0° by default.

In the sample below, the start angle of the first chart is not configured, and for the second chart it is set to 90°:

```
// set the start angle
sunburst2.startAngle(90);
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_11{sample}

### Sorting Order

By default, points are not sorted: they are shown as they appear in data. However, if you use [calculation modes](#calculation_mode) that take values into account (`"parent-dependent"` and `"parent-independent"`), you can sort points in ascending or descending order according to their values.

To set the sorting mode, call the {api:anychart.charts.Sunburst#sort}sort(){api} method with one of the parameters listed in {api:anychart.enums.Sort}anychart.enums.Sort{api}:

* `"none"` (default)
* `"asc"`
* `"desc"`

```
// set the sorting mode
chart.sort("asc");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_12{sample}

### Radius

You can set the radius and inner radius (0 by default) of a Sunburst chart. Call {api:anychart.charts.Sunburst#radius}radius(){api} or {api:anychart.charts.Sunburst#radius}innerRadius(){api} and specify either a value or a percentage of the chart's bounds.

In the following sample, the radius of the chart is set to 30%, and the inner radius is set to 20:

```
// set the radius
chart.radius("30%");

// set the inner radius
chart.innerRadius(20);
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_13{sample}

### Center Content

If the [inner radius](#radius) of a Sunburst chart if more than 0, there is a blank space in the center. You can place almost anything there: e.g., a text label, a chart, a map. See the [Doughnut Chart](Doughnut_Chart#center_content) article to learn about various types of center content.

The center content is set with the {api:anychart.charts.Sunburst#center}center(){api} method, which provides the access to the {api:anychart.core.ui.Center}anychart.core.ui.Center{api} object.

To put some text in the center, create a label and assign it to the center:

```
// create and configure a label
var label = anychart.standalones.label();
label.text("Company Structure");
label.width("100%");
label.height("100%");
label.fontSize(12);
label.fontWeight(600);
label.fontColor("#dd2c00");
label.hAlign("center");
label.vAlign("middle");

// set the center content
chart.center().content(label);
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_14{sample}

### Labels and Tooltips

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

#### Tokens

To change the text of labels, combine the {api:anychart.charts.Sunburst#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

To configure tooltips, do the same with the {api:anychart.charts.Sunburst#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods.

Please note that you can configure the labels and tokens of [levels and leaves](#levels_and_leaves). Use the methods mentioned above with {api:anychart.charts.Sunburst#level}level(){api} and {api:anychart.charts.Sunburst#level}leaves(){api}.

Here is the list of tokens that work with the Sunburst chart:

* `{%id}`
* `{%name}`
* `{%value}`

Also, you can always add a custom field to your data and use a custom token corresponding to it.

This sample shows how to work with tokens:

```
// create data
var data = [
  {name:     "Andorra", value: 57600000, custom_field: "info 1", children: [
    {name:   "Machines", value: 22400000, custom_field: "info 2", children: [
      {name: "Integrated Circuits", value: 12200000, custom_field: "info 7"},
      {name: "Blank Audio Media", value: 2500000, custom_field: "info 8"},
      {name: "Computers", value: 1100000, custom_field: "info 9"}
    ]},
    {name:   "Instruments", value: 9750000, custom_field: "info 3", children: [
      {name: "Orthopedic Appliances", value: 8900000, custom_field: "info 10"}
    ]},
    {name:   "Chemical Products", value: 4740000, custom_field: "info 4", children: [
      {name: "Essential Oils", value: 3690000, custom_field: "info 11"},
      {name: "Beauty Products", value: 423000, custom_field: "info 12"}
    ]},
    {name:   "Mineral Products", value: 4540000, custom_field: "info 5", children: [
      {name: "Coal Briquettes", value: 4280000, custom_field: "info 13"}
    ]},
    {name:   "Transportation", value: 4060000, custom_field: "info 6", children: [
      {name: "Cars", value: 2870000, custom_field: "info 14"},
      {name: "Vehicle Parts", value: 640000, custom_field: "info 15"}
    ]}
  ]}
];

// create a chart and set the data
var chart = anychart.sunburst(data, "as-tree");

// set the calculation mode
chart.calculationMode("parent-dependent");

// enable HTML for labels
chart.labels().useHtml(true);

// configure labels
chart.labels().format("<span style='font-weight:bold'>{%name}</span><br>{%value}");

// configure the labels of leaves
chart.leaves().labels().format("<span style='font-weight:bold'>{%name}</span>");

// configure tooltips
chart.tooltip().format("{%name}\n\nsales: {%value}\n{%custom_field}");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_15{sample}

#### Formatting Functions

To configure labels and tooltips, you can use [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the following fields:

* `name`
* `value`

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

The sample below demonstrates how to work with formatting functions:

```
// configure labels
chart.labels().format(function (){
  var sales = Math.round(this.value/100000)/10;
  return "<span style='font-weight:bold'>" + this.name + 
         "</span><br/>" + sales + " mln";
});

// configure the labels of leaves
chart.leaves().labels().format(function (){
  var sales = Math.round(this.value/100000)/10;
  return sales + " mln";
});

// configure tooltips
chart.tooltip().format(function (){
  var sales = Math.round(this.value/100000)/10;
  return this.name + "\n\nsales: " + sales +
         " mln\n" + this.getData("custom_field");
})
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_16{sample}

#### Position

To set the position of labels, use {api:anychart.charts.Sunburst#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#position}position(){api} with either `"circular"` or `"radial"` as a parameter.

The following sample shows how to change the position of labels, which is initially set to `"circular"`:

```
// set the position of labels
chart.labels().position("circular");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_17{sample}

The position of labels can also be set separately for levels and leaves – use the {api:anychart.charts.Sunburst#level}level(){api} and {api:anychart.charts.Sunburst#level}leaves(){api} methods.

The default position is `"circular"` for levels and `"radial"` for leaves, and this sample demonstrates how to reverse it:

```
// set the position of labels
chart.level().labels().position("radial");
chart.leaves().labels().position("circular");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_18{sample}

### Interactivity

#### Drilldown

The Sunburst chart is interactive by default. It comes with a built-in drilldown feature: if you click on an element, you drill down to its children, and if you click on the parent element or press **Esc**/**Backspace**, you drill up a level. This behavior can be modified.

**Note:** By default it is also possible to drill down or up from the [context menu](../Common_Settings/UI_Controls/Context_Menu): right-click on an element and select "Drill Down To" or "Drill Up" in the menu (if, of course, these options are available for the element).

When you work with interactivity, sometimes the {api:anychart.data.Tree#search}search(){api} method can be helpful. It requires your data to be organized in a special way: use the [data tree model](../Working_with_Data/Using_Data_Tree_Model) and create an instance of the {api:anychart.data.Tree}anychart.data.Tree{api} class with the help of {api:anychart.data#tree}anychart.data.tree(){api}:

```
// create data
var data = [
  {name: "Company A", children: [
    {name: "Technical", children: [
      {name: "Team Leaders"},
      {name: "Architects"},
      {name: "Developers"},
      {name: "Testers"}
    ]},
    {name: "Sales", children: [
      {name: "Analysts"},
      {name: "Executives"}
    ]},
    {name: "HR"},
    {name: "Management"}
  ]}
];

// create a storage for the data tree
treeData = anychart.data.tree(data, "as-tree");

// create a chart and set the data
chart = anychart.sunburst(treeData);
```

If you want to drill down to a particular item in the data tree, call the {api:anychart.data.Tree#search}search(){api} method to get the item and {api:anychart.charts.Sunburst#drillTo}drillTo{api} to drill down to it. For drilling up, call {api:anychart.charts.Sunburst#drillUp}drillUp{api}:

```
/* locate an item in the data tree,
get the item as an object*/
var item = treeData.search("name", "Technical");
// drill down to the item
chart.drillTo(item);

// drill up a level
chart.drillUp();
```

You can also call {api:anychart.charts.Sunburst#getDrilldownPath}getDrilldownPath(){api} to get the drilldown path.

The following sample shows how to drill down to a particular item, dill up, and add the drilldown path to the title of the chart (by using a custom function):

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_19{sample}

#### Selection Mode

Instead of the drilldown, you can use other [selection modes](../Common_Settings/Interactivity/Overview#select). This setting is configured by calling the {api:anychart.charts.Sunburst#interactivity}interactivity(){api} and {api:anychart.core.utils.Interactivity#selectionMode}selectionMode(){api} methods with one of the parameters listed in {api:anychart.enums.SelectionMode}anychart.enums.SelectionMode{api}:

* `"drill-down"` (default)
* `"multi-select"`
* `"single-select"`
* `"none"`

**Note:** The `"multi-select"` mode allows selecting multiple elements by holding down the **Shift** key while clicking them.

The sample below shows how to change the selection mode, which is initially set to `"none"`:

```
// set the selection mode
chart.interactivity().selectionMode("none");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Chart\_20{sample}