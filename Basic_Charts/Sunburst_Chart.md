{:index 6.2}
# Sunburst Chart

## Overview

## Quick Start

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

## Special Settings

### Data

### Calculation Mode

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

```
// hide the first level
chart.level(1).enabled(false);

// set the thickness of leaves
chart.leaves().thickness("70%");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Levels\_Leaves{sample}

(позже поменять режим на дефолтный?)

### Appearance

#### All Points

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

```
// configure the visual settings of the chart
chart.fill(function () {
  return this.parent ?
         anychart.color.lighten(this.parentColor, 0.5) : 
         this.mainColor;
});
```

{sample :width 500 :height 500}BCT\_Sunburst\_Appearance\_03{sample}

### Start Angle

```
// set the start angle
sunburst2.startAngle(90);
```

{sample :width 500 :height 500}BCT\_Sunburst\_Start\_Angle{sample}

### Sorting Order

```
// set the sorting mode
chart.sort("asc");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Sorting\_Order{sample}

### Radius

```
// set the radius
chart.radius("30%");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Radius{sample}

### Center Content

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

(+ ссылка на doughnut)

### Labels and Tooltips

#### Tokens

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

```

```

{sample :width 500 :height 500}BCT\_Sunburst\_Labels\_02{sample}

#### Position

```
// set the position of labels
chart.labels().position("radial");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Labels\_03{sample}

```
// set the position of labels
chart.level().labels().position("radial");
chart.leaves().labels().position("circular");
```

{sample :width 500 :height 500}BCT\_Sunburst\_Labels\_04{sample}

### Interactivity

#### Drilldown

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

```
/* locate an item in the data tree,
get the item as an object*/
var item = treeData.search("name", "Developers");
// drill down to the item
chart.drillTo(item);

// drill up a level
chart.drillUp();
```

{sample :width 500 :height 500}BCT\_Sunburst\_Drill\_Down\_01{sample}

#### Disabling Drilldown

```
// disable the drilldown feature
chart.listen("drillchange", function(e){
  return false;
});
```

{sample :width 500 :height 500}BCT\_Sunburst\_Drill\_Down\_02{sample}