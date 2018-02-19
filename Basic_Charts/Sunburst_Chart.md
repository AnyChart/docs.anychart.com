{:index 6.2}
# Sunburst Chart

## Overview

A sunburst chart...

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

{sample :width 500 :height 500}BCT\_Sunburst\_Quick\_Start{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Sunburst chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

This chart type requires the [tree data structure](../Working_with_Data/Using_Data_Tree_Model). Use the following fields:

* `id` to set unique identifiers
* `parent` to set parents
* `children` to set children
* `name` to set names
* `value` to set values

**Note:** It is possible to add custom fields to your data – see the [Labels and Tooltips](#labels_and_tooltips) section of this article.

### Calculation Mode

* {api:anychart.charts.Sunburst#calculationMode}calculationMode(){api}
* {api:anychart.enums.SunburstCalculationMode}anychart.anychart.enums.SunburstCalculationMode{api}

* `"ordinal-from-root"` (default)
* `"ordinal-from-leaves"`
* `"parent-dependent"`
* `"parent-independent"`

Написать, где значение влияет на размер точки и каким образом. Есть режимы, которые можно назвать value-dependent и value-independent.

#### Ordinal from Root

```
// set the calculation mode
chart.calculationMode("ordinal-from-root");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Ordinal\_Root{sample}

#### Ordinal from Leaves

```
// set the calculation mode
chart.calculationMode("ordinal-from-leaves");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Ordinal\_Leaves{sample}

#### Parent Dependent

```
// set the calculation mode
chart.calculationMode("parent-dependent");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Parent\_Dependent{sample}

#### Parent Independent

```
// set the calculation mode
chart.calculationMode("parent-independent");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Parent\_Independent{sample}

### Levels and Leaves

* {api:anychart.charts.Sunburst#level}level(){api}
* {api:anychart.charts.Sunburst#level}leaves(){api}
* thickness()
* enabled()

* !!! написать про level() с индексом и без индекса
* уровни называть кольцами (тогда можно будет использовать thickness)

```
// hide the first level
chart.level(1).enabled(false);

// set the thickness of leaves
chart.leaves().thickness("70%");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Levels\_Leaves{sample}

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

{sample :width 500 :height 500}BCT\_Sunburst\_Appearance\_01{sample}

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

{sample :width 500 :height 500}BCT\_Sunburst\_Appearance\_02{sample}

#### Fill Functions

сделать алфавитный порядок:

* `index`
* `level`
* `isLeaf`
* `parent`
* `point`
* `path`
* `autoColor`
* `parentColor`
* `sourceColor`
* `iterator`
* `series`
* `chart`

```
// configure the visual settings of the chart
chart.fill(function () {
  return this.parent ?
         anychart.color.lighten(this.parentColor, 0.5) : 
         this.mainColor;
});
```

{sample :height 500}BCT\_Sunburst\_Appearance\_03{sample}

### Start Angle

You can set the angle where the first point is placed. Use the {api:anychart.charts.Sunburst#startAngle}startAngle(){api} method. The angle is 0° by default.

In the sample below, the start angle of the first chart is not configured, and for the second chart it is set to 90°:

```
// set the start angle
sunburst2.startAngle(90);
```

{sample :width 500 :height 500}BCT\_Sunburst\_Start\_Angle{sample}

### Sorting Order

By default, point of Sunburst charts are sorted in descending order according to their values. You can sort them in ascending order or disable sorting.

(???) дописать про режимы калькуляции?

To set the sorting mode, call the {api:anychart.charts.Sunburst#sort}sort(){api} method with one of the parameters listed in {api:anychart.enums.Sort}anychart.enums.Sort{api}:

* `"desc"` (default)
* `"asc"`
* `"none"`

```
// set the sorting mode
chart.sort("asc");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Sorting\_Order{sample}

### Radius

You can set the radius and inner radius (0 by default) of a Sunburst chart. Call {api:anychart.charts.Sunburst#radius}radius(){api} or {api:anychart.charts.Sunburst#radius}innerRadius(){api} and specify either a value or a percentage of the chart's bounds.

In the following sample, the radius of the chart is set to 30%, and the inner radius is set to 20:

```
// set the radius
chart.radius("30%");

// set the inner radius
chart.innerRadius(20);
```

{sample :width 500 :height 500}BCT\_Sunburst\_Radius{sample}

### Center Content

If the [inner radius](#radius) of a Sunburst chart if more than 0, there is a blank space in the center. You can place almost anything there: e.g., a text label, a chart, a map.

The center content is set with the {api:anychart.charts.Sunburst#center}center(){api} method, which provides the access to the {api:anychart.core.sunburst.Center}anychart.core.sunburst.Center{api} object.

To put some text in the center, create a label and assign it to the center:

```
// create and configure a label
var label = anychart.standalones.label();
label.text("Company Structure");
label.width("100%");
label.height("100%");
label.fontSize(12);
label.fontWeight(600);
label.fontColor("red");
label.hAlign("center");
label.vAlign("middle");

// set the center content
chart.center().content(label);
```

{sample :width 500 :height 500}BCT\_Sunburst\_Center\_Content{sample}

To learn about other types of center content, see the [Doughnut Chart](Doughnut_Chart#center_content) article.

(поднять эту ссылку повыше)

### Labels and Tooltips

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

#### Tokens

To change the text of labels, combine the {api:anychart.charts.Sunburst#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

To configure tooltips, do the same with the {api:anychart.charts.Sunburst#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods.

Here is the list of tokens that work with the Sunburst chart:

* `{%id}`
* `{%name}`
* `{%value}`

Also, you can always add a custom field to your data and use a custom token corresponding to it.

This sample shows how to work with tokens:

```
// configure labels
chart.labels().format(
  "<span style='font-weight:bold'>{%name}</span><br>{%value}"
);

// configure tooltips
chart.tooltip().titleFormat(
  "{%name}"
);

chart.tooltip().format(
  "{%value}\n\n{%custom_field}"
);
```

{sample :width 500 :height 500}BCT\_Sunburst\_Labels\_01{sample}

#### Formatting Functions

To configure labels and tooltips, you can use [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the following fields:

* `name`
* `value`

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

The sample below demonstrates how to work with formatting functions:

```

```

{sample :width 500 :height 500}BCT\_Sunburst\_Labels\_02{sample}

#### Position

To set the position of labels, use {api:anychart.charts.Sunburst#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#position}position(){api} with either `"circular"` or `"radial"` as a parameter.

The following sample shows how to change the position of labels, which is initially set to `"circular"`:

```
// set the position of labels
chart.labels().position("circular");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Labels\_03{sample}

The position of labels can also be set separately for levels and leaves – use the {api:anychart.charts.Sunburst#level}level(){api} and {api:anychart.charts.Sunburst#level}leaves(){api} methods.

The default position is `"circular"` for levels and `"radial"` for leaves, and this sample demonstrates how to reverse it:

```
// set the position of labels
chart.level().labels().position("radial");
chart.leaves().labels().position("circular");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Labels\_04{sample}

### Interactivity

#### Drilldown

The Sunburst chart is interactive by default. It comes with a built-in drilldown feature: if you click on an element, you drill down to its children, and if you click on the parent element, you drill up a level. This behavior can be modified.

**Note** It is also possible to drill down or up from the [context menu](../Common_Settings/UI_Controls/Context_Menu): right-click on an element and select "Drill Down To" or "Drill Up" in the menu (if, of course, either of these options is available for the element).

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

If you want to drill down to a particular item in the data tree, call the {api:anychart.data.Sunburst#search}search(){api} method to get the item and {api:anychart.charts.Sunburst#drillTo}drillTo{api} to drill down to it. For drilling up, call {api:anychart.charts.Sunburst#drillUp}drillUp{api}:

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

{sample :width 500 :height 500}BCT\_Sunburst\_Drill\_Down\_01{sample}

#### Disabling Drilldown

To disable the drilldown feature, you should add an [event listener](../Common_Settings/Event_Listeners) to your chart. Use the {api:anychart.core.Base#listen}listen(){api} method and specify the event type – `drillchange`:

```
// disable the drilldown feature
chart.listen("drillchange", function(e){
  return false;
});
```

{sample :width 500 :height 500}BCT\_Sunburst\_Drill\_Down\_02{sample}