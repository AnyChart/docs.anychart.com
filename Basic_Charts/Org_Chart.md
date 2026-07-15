{:index 1.61}
# Org Chart

## Overview

An Org chart (organizational chart) visualizes the hierarchical structure of an organization: each node is drawn as a card with a name and a title, and parent-child relationships are drawn as connector lines between the cards. The chart lays the tree out automatically, fits it into the container, and supports interactive collapsing of branches, zooming, and panning out of the box.

This article explains how to create a basic Org chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Org chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Org Chart](../Quick_Start/Modules#org_chart)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.OrgChart}anychart.charts.OrgChart{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[id, parent (or children), name, title](../Working_with_Data/Tree_Data_Model)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[orientation()](#orientation)</td></tr>
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

The Org chart requires adding the [Core](../Quick_Start/Modules#core) and [Org Chart](../Quick_Start/Modules#org_chart) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-org-chart.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create an Org chart, use the {api:anychart#orgChart}anychart.orgChart(){api} chart constructor. Pass the data and the data mode — `"as-table"` for a flat list with `id`/`parent` references:

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

// set the chart title
chart.title("Org Chart: Basic Sample");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

The chart is interactive by default: hover a card to highlight it, click a card to select it, click the +/− indicator under a parent card to collapse or expand its branch, scroll to [zoom, and drag to pan](#zoom_and_pan).

{sample}BCT\_Org\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Org chart (for example, the chart title).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

The Org chart uses the [tree data model](../Working_with_Data/Tree_Data_Model). Each item carries two text fields — `name` (the header line of the card) and `title` (the secondary line) — and the hierarchy is set in one of two ways, chosen by the second argument of the constructor:

* `"as-table"` — a flat array where each item refers to its parent: `id` and `parent` fields (the root item has no `parent`)
* `"as-tree"` — a nested array where each parent holds its children in the `children` field

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

{sample}BCT\_Org\_Chart\_07{sample}

### Appearance

The node cards are configured in three [states](../Common_Settings/Interactivity/States) — **normal**, **hover**, and **selected** — via the {api:anychart.charts.OrgChart#normal}normal(){api}, {api:anychart.charts.OrgChart#hovered}hovered(){api}, and {api:anychart.charts.OrgChart#selected}selected(){api} methods with the {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} settings (use plain colors). A card is hovered when it is pointed at and selected when it is clicked; a click on the empty area clears the selection.

The two text lines of a card are styled separately: the {api:anychart.charts.OrgChart#labels}labels(){api} method controls the `name` (header) line, and the {api:anychart.charts.OrgChart#titleFontColor}titleFontColor(){api} method sets the color of the `title` line. The connector lines are styled with {api:anychart.charts.OrgChart#connectorStroke}connectorStroke(){api}:

```
// node cards in three states (plain colors)
chart.normal().fill("#f0f7ff");
chart.normal().stroke("1.5 #90a4ae");
chart.hovered().fill("#e3f2fd");
chart.hovered().stroke("2 #1976d2");
chart.selected().fill("#bbdefb");
chart.selected().stroke("2.5 #1565c0");

// the name (header) line of the cards
chart.labels().fontColor("#1a237e");
chart.labels().fontWeight("bold");

// the secondary title line of the cards
chart.titleFontColor("#546e7a");

// the connector lines
chart.connectorStroke("1.5 #90a4ae");
```

{sample}BCT\_Org\_Chart\_02{sample}

### Orientation

By default, the tree grows from the top down. The {api:anychart.charts.OrgChart#orientation}orientation(){api} method reflows it in any of the four directions: `"top-to-bottom"` (default), `"bottom-to-top"`, `"left-to-right"`, or `"right-to-left"`:

```
// grow the tree from the left edge to the right
chart.orientation("left-to-right");
```

{sample}BCT\_Org\_Chart\_03{sample}

### Connectors

The {api:anychart.charts.OrgChart#connectorType}connectorType(){api} method sets the shape of the parent-child connectors: `"orthogonal"` (default) — right-angle elbow lines, `"straight"` — direct diagonal segments, or `"curved"` — smooth curves:

```
// draw the parent-child connectors as smooth curves
chart.connectorType("curved");
chart.connectorStroke("2 #64b5f6");
```

{sample}BCT\_Org\_Chart\_04{sample}

### Node Size and Spacing

The layout of the tree is adjusted with the following methods (the whole tree is automatically rescaled to fit the container):

* {api:anychart.charts.OrgChart#nodeWidth}nodeWidth(){api} and {api:anychart.charts.OrgChart#nodeHeight}nodeHeight(){api} — the size of the node cards, in pixels (150×80 by default)
* {api:anychart.charts.OrgChart#nodePadding}nodePadding(){api} — the inner padding of the card text (10 by default)
* {api:anychart.charts.OrgChart#levelSpacing}levelSpacing(){api} — the gap between the levels of the tree (80 by default)
* {api:anychart.charts.OrgChart#siblingSpacing}siblingSpacing(){api} — the gap between sibling cards (30 by default)

```
// the size of the node cards
chart.nodeWidth(180);
chart.nodeHeight(56);
chart.nodePadding(8);

// the gaps between levels and between siblings
chart.levelSpacing(50);
chart.siblingSpacing(16);
```

{sample}BCT\_Org\_Chart\_05{sample}

### Collapse and Expand

Every parent card gets a +/− indicator that collapses or expands its branch on click. The same can be done programmatically:

* {api:anychart.charts.OrgChart#collapse}collapse(){api} and {api:anychart.charts.OrgChart#expand}expand(){api} — collapse/expand the branch of a node, referenced by its `id`
* {api:anychart.charts.OrgChart#collapseAll}collapseAll(){api} and {api:anychart.charts.OrgChart#expandAll}expandAll(){api} — collapse/expand all branches at once

```
// collapse the CTO branch by the node id
chart.collapse("cto");
```

{sample}BCT\_Org\_Chart\_06{sample}

### Zoom and Pan

Mouse-wheel zoom and drag-to-pan are enabled by default; control them with the {api:anychart.charts.OrgChart#zoomEnabled}zoomEnabled(){api} and {api:anychart.charts.OrgChart#panEnabled}panEnabled(){api} methods. The zoom can also be driven programmatically:

* {api:anychart.charts.OrgChart#zoomIn}zoomIn(){api} and {api:anychart.charts.OrgChart#zoomOut}zoomOut(){api} — scale the tree up/down around the center
* {api:anychart.charts.OrgChart#fit}fit(){api} — reset the zoom and pan and fit the whole tree into the container

```
// mouse-wheel zoom and drag-to-pan are enabled by default;
// this is how to turn them off:
// chart.zoomEnabled(false);
// chart.panEnabled(false);

// zoom in programmatically (use fit() to reset zoom and pan)
chart.zoomIn();
```

{sample}BCT\_Org\_Chart\_08{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is displayed when a card is hovered over. By default, it shows the `name` field as the title and the `title` field as the text. The `{%name}` token is available in the formats, and any field of the hovered data item can be read in a formatting function via `this.getData()`:

```
// the tooltip title shows the name; build the text from the data fields
chart.tooltip().titleFormat("{%name}");
chart.tooltip().format(function () {
  return "Role: " + this.getData("title") + "\nID: " + this.getData("id");
});
```

{sample}BCT\_Org\_Chart\_09{sample}
