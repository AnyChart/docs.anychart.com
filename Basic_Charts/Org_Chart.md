{:index 1.61}
# Org Chart

## Overview

An Org chart (organizational chart) shows a hierarchy as a tree of cards. Each node is a card with a name and a title, and the chart draws parent-child links as connector lines between the cards. The chart takes its name from its most common use — showing the structure of an organization — but any hierarchical data fits: departments and teams, product categories, site maps, family trees. The chart lays out the tree automatically and fits it into the container. It also lets you collapse branches, zoom, and pan, all by default.

This article shows how to make a basic Org chart. It also shows how to set options that are special to this type. You can read the table below for a quick overview of the Org chart's features:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Org Chart](../Quick_Start/Modules#org_chart)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.OrgChart}anychart.charts.OrgChart{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[id, parent (or children), name, title](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[orientation()](#tree_layout)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Treemap](Treemap_Chart)</td></tr>
<tr><td></td><td>[Sunburst](Sunburst_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Tree Data Model](../Working_with_Data/Tree_Data_Model)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Org chart needs the [Core](../Quick_Start/Modules#core) and [Org Chart](../Quick_Start/Modules#org_chart) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-org-chart.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create an Org chart, use the {api:anychart#orgChart}anychart.orgChart(){api} chart constructor. Pass the data and the data mode. Use `"as-table"` for a flat list with `id`/`parent` references. Use `"as-tree"` for nested data (see [Data](#data)):

```
// create data: a flat table with id/parent references
var data = [
  {id: "ceo", name: "Sarah Johnson", title: "CEO"},
  {id: "cto", parent: "ceo", name: "Michael Chen", title: "CTO"},
  {id: "cfo", parent: "ceo", name: "Emily Davis", title: "CFO"},
  {id: "coo", parent: "ceo", name: "Robert Wilson", title: "COO"},
  {id: "eng", parent: "cto", name: "David Kim", title: "Head of Engineering"},
  {id: "prod", parent: "cto", name: "Lisa Zhang", title: "Head of Product"},
  {id: "acct", parent: "cfo", name: "Diana Ross", title: "Head of Accounting"},
  {id: "ops", parent: "coo", name: "Peter Jackson", title: "Head of Operations"},
  {id: "fe", parent: "eng", name: "Anna Lee", title: "Frontend Lead"},
  {id: "be", parent: "eng", name: "Tom Harris", title: "Backend Lead"}
];

// create an org chart and set the data
var chart = anychart.orgChart(data, "as-table");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

The chart is interactive by default. Hover over a card to highlight it. Click a card to select it. Click the +/− indicator under a parent card to collapse or expand its branch.

{sample}BCT\_Org\_Chart\_01{sample}

## General Settings

In AnyChart, many settings work the same way for all chart types. This is true for the Org chart too. For example, its interactivity settings work the same way.

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

The Org chart uses the [tree data model](../Working_with_Data/Tree_Data_Model). Each item has two text fields. The `name` field is the header line of the card. The `title` field is the second, smaller line of the card. Its name comes from the job title it holds in an organization chart — the field itself takes any text. Give every item a `name`. The `title` field is optional: a card without it shows only the name line. You set the hierarchy in one of two modes. The second argument of the constructor sets the mode:

* `"as-table"` — a flat array where each item points to its parent with `id` and `parent` fields (the root item has no `parent`)
* `"as-tree"` — a nested array where each parent holds its children in the `children` field

If you omit the mode and the items carry `parent` references, the chart detects the flat table itself and logs a warning — pass the mode explicitly to keep the console clean.

```
// create data as a tree: children are nested into their parents
var data = [
  {name: "Sarah Johnson", title: "CEO", children: [
    {name: "Michael Chen", title: "CTO", children: [
      {name: "David Kim", title: "Head of Engineering"},
      {name: "Lisa Zhang", title: "Head of Product"}
    ]},
    {name: "Emily Davis", title: "CFO"},
    {name: "Robert Wilson", title: "COO"}
  ]}
];

// create an org chart in the "as-tree" mode
var chart = anychart.orgChart(data, "as-tree");
```

In the sample below, the chart reads nested data in the `"as-tree"` mode, and no item carries an `id` or a `parent` field:

{sample}BCT\_Org\_Chart\_02{sample}

### Appearance

You can style the node cards in three [states](../Common_Settings/Interactivity/States): **normal**, **hovered**, and **selected**. Use the {api:anychart.charts.OrgChart#normal}normal(){api}, {api:anychart.charts.OrgChart#hovered}hovered(){api}, and {api:anychart.charts.OrgChart#selected}selected(){api} methods. A card is hovered when you move the pointer over it. A card is selected when you click it. A click on the empty area clears the selection.

Combine the state methods with these methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the card background. It accepts a plain color, gradient, or pattern fill. A fill function is not supported here: the chart reads the setting as a ready color and never calls a function to compute it
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the card border. In the **hovered** and **selected** states it also colors the connectors that touch the card (see [Connectors](#connectors))

A plain color can be written in any CSS notation: a hex string, an `rgb()` string, or a named color — see [Color Management](../Appearance_Settings/Color_Management).

```
// normal state: hex strings
chart.normal().fill("#e3f2fd");
chart.normal().stroke("1.5 #1976d2");

// hovered state: rgb() strings
chart.hovered().fill("rgb(255,224,130)");
chart.hovered().stroke("2 rgb(245,124,0)");

// selected state: named colors
chart.selected().fill("lightgreen");
chart.selected().stroke("2.5 green");
```

In the sample below, the fill and the stroke of a card change when you hover over it and when you click it, and the connectors that touch the card take the stroke of the same state:

{sample}BCT\_Org\_Chart\_03{sample}

### Labels

Each card draws two lines of text: the `name` line and the `title` line under it. Together they are the card's [labels](../Common_Settings/Labels). Two methods style them — {api:anychart.charts.OrgChart#labels}labels(){api} and {api:anychart.charts.OrgChart#titleFontColor}titleFontColor(){api}. Only the font settings of `labels()` apply:

<table border="1" class="seriesTABLE">
<tr><th></th><th>name line</th><th>title line</th></tr>
<tr><td>Text</td><td><code>labels().format()</code> (the <code>name</code> field by default)</td><td>always the <code>title</code> data field</td></tr>
<tr><td>Font and size</td><td><code>labels().fontFamily()</code>, <code>labels().fontSize()</code></td><td>the same, drawn 2 px smaller</td></tr>
<tr><td>Color</td><td><code>labels().fontColor()</code></td><td><code>titleFontColor()</code></td></tr>
<tr><td>Weight</td><td><code>labels().fontWeight()</code> (bold by default)</td><td>always regular</td></tr>
<tr><td>Visibility</td><td colspan=2><code>chart.labels(false)</code> hides both lines</td></tr>
</table>

The text of the `name` line is set with `labels().format()` — a [text formatter](../Common_Settings/Text_Formatters) with the `{%name}`, `{%title}`, and `{%id}` tokens; a formatting function can read any data field with `getData()`. A format that returns an empty string removes the `name` line of that card.

On a large tree, the chart shrinks the cards until the text no longer fits. The {api:anychart.charts.OrgChart#labelsDisplayMode}labelsDisplayMode(){api} method sets what happens to the labels then: `"drop"` (default) hides the labels that would be unreadable, `"clip"` crops them to the card.

```
// the font family and the font size apply to both lines
// the title line is drawn 2 px smaller than the name line
chart.labels().fontFamily("Verdana, sans-serif");
chart.labels().fontSize(13);

// the font color and the font weight change only the name (header) line
chart.labels().fontColor("#1a237e");
chart.labels().fontWeight("bold");

// uppercase the name line with a formatting function
chart.labels().format(function () {
  return this.getData("name").toUpperCase();
});

// set the color of the title line on its own
chart.titleFontColor("#00796b");
```

In the sample below, both label lines are set in Verdana, the name line is bold, dark blue, and uppercased by a formatting function, and the title line is teal:

{sample}BCT\_Org\_Chart\_04{sample}

### Node Size

Use these methods to set the size of the node cards:

* {api:anychart.charts.OrgChart#nodeWidth}nodeWidth(){api} and {api:anychart.charts.OrgChart#nodeHeight}nodeHeight(){api} — the size of the node cards, in pixels (150×80 by default)
* {api:anychart.charts.OrgChart#nodePadding}nodePadding(){api} — the inner padding of the card text (10 by default)

```
// the size of the node cards
chart.nodeWidth(180);
chart.nodeHeight(56);
chart.nodePadding(8);
```

In the sample below, the cards are wider and shorter than the default ones:

{sample}BCT\_Org\_Chart\_05{sample}

### Connectors

The chart draws the parent-child links as connector lines between the cards. The {api:anychart.charts.OrgChart#connectorType}connectorType(){api} method sets their shape:

* `"orthogonal"` (default) — right-angle elbow lines
* `"straight"` — direct diagonal segments
* `"curved"` — smooth curves

The {api:anychart.charts.OrgChart#connectorStroke}connectorStroke(){api} method sets the line style: the color, the thickness, and the dash pattern. It applies in the **normal** state only. When the card at either end of a connector is hovered or selected, the connector is drawn with the `stroke()` of that state instead (see [Appearance](#appearance)). The line is itself interactive: hovering or clicking it acts on the card at its child end.

```
// draw the parent-child connectors as smooth curves
chart.connectorType("curved");
chart.connectorStroke("2 #64b5f6");
```

In the sample below, the parent-child connectors are smooth curves drawn with a thicker blue stroke:

{sample}BCT\_Org\_Chart\_06{sample}

### Tree Layout

The chart lays out the tree automatically and rescales it to fit the container. Three methods shape that layout.

By default, the tree grows from the top down. The {api:anychart.charts.OrgChart#orientation}orientation(){api} method makes it grow in one of four directions:

* `"top-to-bottom"` (default)
* `"bottom-to-top"`
* `"left-to-right"`
* `"right-to-left"`

The spacing methods set the gaps of the tree:

* {api:anychart.charts.OrgChart#levelSpacing}levelSpacing(){api} — the gap between the levels of the tree (80 by default)
* {api:anychart.charts.OrgChart#siblingSpacing}siblingSpacing(){api} — the gap between sibling cards (30 by default)

```
// grow the tree from the left edge to the right
chart.orientation("left-to-right");

// the gaps between levels and between siblings
chart.levelSpacing(50);
chart.siblingSpacing(16);
```

In the sample below, the radio buttons switch the growth direction of the tree, and the sliders change the gaps between the levels and between the siblings:

{sample}BCT\_Org\_Chart\_07{sample}

### Collapse and Expand

Every parent card gets a +/− indicator. It collapses or expands the branch when you click it. You can also do the same in code:

* {api:anychart.charts.OrgChart#collapse}collapse(){api} and {api:anychart.charts.OrgChart#expand}expand(){api} — collapse or expand the branch of a node. Pass the node `id`, or pass the data item itself. Get the item with the search() method of the [tree](../Working_with_Data/Tree_Data_Model). This is useful in the `"as-tree"` mode, where items may have no `id` field
* {api:anychart.charts.OrgChart#collapseAll}collapseAll(){api} and {api:anychart.charts.OrgChart#expandAll}expandAll(){api} — collapse or expand all branches at once
* {api:anychart.charts.OrgChart#expandTo}expandTo(){api} — show the tree down to the given level and collapse everything deeper: `expandTo(1)` leaves only the root visible

```
// collapse the CTO branch by the node id
chart.collapse("cto");
```

In the sample below, the CTO branch is collapsed from the start, and the +/− indicator under a parent card expands or collapses its branch:

{sample}BCT\_Org\_Chart\_08{sample}

### Zoom and Pan

Mouse-wheel zoom and drag-to-pan are on by default and work anywhere on the chart — over the cards and over the empty area alike. On touch screens, pinch does the zoom. Wheel zoom is anchored at the pointer: the spot under the cursor stays in place.

Both gestures are controlled through the {api:anychart.charts.OrgChart#interactivity}interactivity(){api} method:

* `chart.interactivity().zoomOnMouseWheel()` — enable or disable wheel zoom (`true`/`false`)
* `chart.interactivity().drag()` — enable or disable panning

You can also control the zoom in code:

* {api:anychart.charts.OrgChart#zoomIn}zoomIn(){api} and {api:anychart.charts.OrgChart#zoomOut}zoomOut(){api} — scale the tree up or down around the center of the chart area
* {api:anychart.charts.OrgChart#fit}fit(){api} — reset the zoom and pan and fit the whole tree into the container

```
// zoom in programmatically
chart.zoomIn();
```

In the sample below, the chart is zoomed in by one step after the draw, and you can zoom it with the mouse wheel and pan it by dragging:

{sample}BCT\_Org\_Chart\_09{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box that appears when you hover over a card. It has many settings for its look and behavior. For example, you can edit the text with font settings and [text formatters](../Common_Settings/Text_Formatters). You can also change the background style and move the tooltip.

By default, the tooltip shows the `name` field as the title. It shows the `title` field as the text. Use the {api:anychart.charts.OrgChart#tooltip}tooltip(){api} method with {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} to change it. The `{%name}` token works in both formats. You can read any field of the hovered data item in a formatting function with {api:anychart.format.Context#getData}getData(){api}. In the sample below, the data items carry extra fields (department, location, hire date, email), and the tooltip shows them instead of repeating what the card already displays:

```
// the tooltip reads any data field via getData()
chart.tooltip().titleFormat("{%name}");
chart.tooltip().format(function () {
  return "Department: " + this.getData("department") +
    "\nLocation: " + this.getData("location") +
    "\nHired: " + this.getData("hired") +
    "\nEmail: " + this.getData("email");
});
```

{sample}BCT\_Org\_Chart\_10{sample}
