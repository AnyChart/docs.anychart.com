{:index 1.61}
# Org Chart

## Overview

An Org chart (organizational chart) shows a hierarchy as a tree of cards. Each node is a card with a name and a title, and the chart draws parent-child links as connector lines between the cards. The chart takes its name from its most common use — showing the structure of an organization — but any hierarchical data fits. The chart lays out the tree automatically and fits it into the container. Collapsing branches and panning work by default; zooming is added with a zoom control or turned on for the mouse wheel — see [Zoom and Pan](#zoom_and_pan).

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
<tr><td></td><td>[Chartopedia: Organizational Chart](https://www.anychart.com/chartopedia/chart-types/organizational-chart/)</td></tr>
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

The chart is interactive by default. Hover over a card to highlight it. Click a card to select it. Click the button under a parent card to collapse or expand its branch: a collapsed card shows the number of hidden cards on the button. The samples in this article also add a zoom control — see [Zoom and Pan](#zoom_and_pan).

{sample}BCT\_Org\_Chart\_01{sample}

## General Settings

In AnyChart, many settings work the same way for all chart types. This is true for the Org chart too. For example, its interactivity settings work the same way.

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

The Org chart uses the [tree data model](../Working_with_Data/Tree_Data_Model). Each item has two text fields. The `name` field is the header line of the card. The `title` field is the second, smaller line of the card. Its name comes from the job title it holds in an organization chart — the field itself takes any text. Give every item a `name`. The `title` field is optional: a card without it shows only the name line. You set the hierarchy in one of two modes. The second argument of the constructor sets the mode:

* `"as-table"` — a flat array where each item points to its parent with `id` and `parent` fields (the root item has no `parent`)
* `"as-tree"` — a nested array where each parent holds its children in the `children` field

If you omit the mode and the items carry `parent` references, the chart detects the flat table itself and logs a warning — pass the mode explicitly to keep the console clean. If the items carry both `parent` and `children` fields, the mode is ambiguous: the chart reads the data as a tree and warns about it, and an item that is linked only by `parent` ends up as a second root. An item whose `parent` points at itself is left where it is, with no warning. If several items share an `id`, the chart draws the first one and skips the rest: in the `"as-table"` mode, the items that point at that `id` attach under the first card; in the `"as-tree"` mode, the children of a skipped item are skipped too.

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

You can style the node cards in three [states](../Common_Settings/Interactivity/States): **normal**, **hovered**, and **selected**. Use the {api:anychart.charts.OrgChart#normal}normal(){api}, {api:anychart.charts.OrgChart#hovered}hovered(){api}, and {api:anychart.charts.OrgChart#selected}selected(){api} methods. A card is hovered when you move the pointer over it. A card is selected when you click it — see [Selection](#selection).

Combine the state methods with these methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the card background. It accepts a plain color, gradient, or pattern fill, or a function: the chart calls the function for each card and uses the fill it returns. The function reads the card's data item, its level, and its state
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the card border. In the **hovered** and **selected** states it also colors the connectors that touch the card (see [Connectors](#connectors))
* `cornerRadius()` to round the corners of the card, in pixels (4 by default). The radius is limited to half of the smaller side of the card. The {api:anychart.charts.OrgChart#cornerRadius}cornerRadius(){api} method of the chart sets it for the normal state
* {api:anychart.core.StateSettings#labels}labels(){api} to style the card text — see [Labels](#labels). Set the base settings in the normal state; the hovered and selected states override the settings you give them and inherit the rest. The font settings apply per state: size, family, color, weight, style, variant, decoration, opacity, letter spacing, text direction, line height, text indent, and vertical and horizontal alignment. The layout settings do not: the position and offsets of the text are owned by the card

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

// the name line follows the state too
chart.hovered().labels().fontColor("rgb(245,124,0)");
chart.selected().labels().fontColor("green");
chart.selected().labels().fontWeight("bold");
```

In the sample below, the fill, the stroke, and the name line of a card change when you hover over it and when you click it, and the connectors that touch the card take the stroke of the same state:

{sample}BCT\_Org\_Chart\_03{sample}

#### Levels

To style a whole level of the tree, call {api:anychart.charts.OrgChart#level}level(){api} with the depth of the level — 0 is the root — and an object with the settings. It takes `fill`, `stroke`, `cornerRadius`, `labels`, `titleFontColor`, and `connectorStroke`, which styles the connectors that lead into the cards of the level, as well as the `normal`, `hovered`, and `selected` states.

A card takes each setting from the most specific place that sets it: its own data item, then its level, then its [node type](#node_types), then the chart. A data item carries the settings as its own fields — for example, `fill`.

```
// the root level: a dark card with light text
chart.level(0, {
  fill: "#1565c0",
  stroke: "1.5 #0d47a1",
  labels: {fontColor: "#ffffff"},
  titleFontColor: "#bbdefb"
});

// the second level: tinted cards and thicker connectors leading into them
chart.level(1, {
  fill: "#e3f2fd",
  connectorStroke: "2.5 #1976d2"
});
```

In the sample below, the root card and the second level are styled with `level()`, and one card keeps the fill set in its data item:

{sample}BCT\_Org\_Chart\_15{sample}

#### Node Types

The `type` field of a data item picks the layout of its card. Three types are built in, and each one reads its own data fields:

<table border="1" class="seriesTABLE">
<tr><th>Type</th><th>Image</th><th>Title</th><th>Subtitle</th><th>Details</th><th>Badge</th></tr>
<tr><td><code>"person"</code></td><td><code>photo</code></td><td><code>name</code></td><td><code>position</code></td><td><code>phone</code>, <code>email</code></td><td><code>status</code></td></tr>
<tr><td><code>"department"</code></td><td><code>icon</code></td><td><code>name</code></td><td><code>head</code></td><td><code>headcount</code>, <code>budget</code></td><td>—</td></tr>
<tr><td><code>"agent"</code></td><td><code>icon</code></td><td><code>name</code></td><td>the word "agent"</td><td><code>owner</code></td><td><code>kind</code></td></tr>
</table>

A card without a `type` shows the `name` and `title` fields, like the cards in the rest of this article. A field that an item does not have is left out of its card.

To change a type or add your own, call {api:anychart.charts.OrgChart#nodeTypes}nodeTypes(){api} with an object keyed by the type name. For each part of the card — `image`, `title`, `subtitle`, `details`, `badge` — give the data field to read, or `null` to hide the part. A type also takes the style settings that `level()` takes, and they apply to every card of that type.

```
// give the department cards their own fill
chart.nodeTypes({
  department: {fill: "#f1f8e9"}
});
```

In the sample below, the data mixes the three built-in types, and the department cards get their own fill:

{sample}BCT\_Org\_Chart\_16{sample}

### Selection

A plain click selects one card and replaces whatever was selected before. Hold **Ctrl** (**Cmd** on macOS) or **Shift** and click to add a card to the selection; the same modifier-held click on a card that is already selected removes it. A plain click on the empty area clears the selection, while a modifier-held click there leaves it as it is.

The same works in code:

* `select()` — select a card. Pass the node `id`, or pass the data item itself. It adds to the selection, so call it once per card
* `unselect()` — clear the selection
* {api:anychart.charts.OrgChart#getSelectedPoints}getSelectedPoints(){api} — the cards that are selected at the moment

The chart dispatches the `"pointsSelect"` event whenever the selected set changes, and the listener reads the new set with `getSelectedPoints()`: [Event Listeners](../Common_Settings/Event_Listeners):

```
// select two cards from code
function selectPair() {
  chart.select("cto");
  chart.select("cfo");
}

// keep a live readout of the selection
chart.listen("pointsSelect", function () {
  var names = chart.getSelectedPoints().map(function (p) { return p.get("name"); });
  document.getElementById("selectedCards").value = names.join(", ") || "none";
});
```

To make the cards unselectable, set the selection mode to `"none"` with `chart.interactivity().selectionMode("none")`. The click events still fire. Read more: [Interactivity](../Common_Settings/Interactivity/Overview).

The cards can also be selected from the keyboard. Press **Tab** to move the focus into the chart, then use **↑** and **↓** to move between the visible cards, **Home** and **End** to jump to the first or the last card, **→** to expand a card or move to its first child, **←** to collapse a card or move to its parent, and **Enter** or **Space** to add the focused card to the selection.

In the sample below, click the cards — plain to replace, with **Ctrl** or **Shift** held to add — or use the buttons; the readout under them is driven by the `"pointsSelect"` event:

{sample}BCT\_Org\_Chart\_04{sample}

### Labels

Each card draws two lines of text: the `name` line and the `title` line under it. Together they are the card's [labels](../Common_Settings/Labels). Two methods style them — {api:anychart.charts.OrgChart#labels}labels(){api} and {api:anychart.charts.OrgChart#titleFontColor}titleFontColor(){api}. Only the font settings of `labels()` apply:

<table border="1" class="seriesTABLE">
<tr><th>To change</th><th>of the name line</th><th>of the title line</th></tr>
<tr><td>Text</td><td>{api:anychart.core.ui.LabelsFactory#format}labels().format(){api} (the <code>name</code> field by default)</td><td>not formattable — always the <code>title</code> data field</td></tr>
<tr><td>Font</td><td>{api:anychart.core.ui.LabelsFactory#fontFamily}labels().fontFamily(){api}</td><td>follows the name line</td></tr>
<tr><td>Size</td><td>{api:anychart.core.ui.LabelsFactory#fontSize}labels().fontSize(){api}</td><td>follows the name line, drawn 2 px smaller</td></tr>
<tr><td>Color</td><td>{api:anychart.core.ui.LabelsFactory#fontColor}labels().fontColor(){api}</td><td>{api:anychart.charts.OrgChart#titleFontColor}titleFontColor(){api}</td></tr>
<tr><td>Weight</td><td>{api:anychart.core.ui.LabelsFactory#fontWeight}labels().fontWeight(){api} (regular by default)</td><td>not settable — always regular</td></tr>
<tr><td>Visibility</td><td colspan=2>{api:anychart.charts.OrgChart#labels}chart.labels(false){api} hides both lines</td></tr>
</table>

The text of the `name` line is set with {api:anychart.core.ui.LabelsFactory#format}labels().format(){api} — a [text formatter](../Common_Settings/Text_Formatters) with the `{%name}`, `{%title}`, and `{%id}` tokens; a formatting function can read any data field with `getData()`. A format that returns an empty string removes the `name` line of that card. A long name wraps to a second line and ends in an ellipsis if it still does not fit; {api:anychart.charts.OrgChart#nameMaxLines}nameMaxLines(){api} sets the number of lines (2 by default).

The font size is set in the layout's own scale: when the chart shrinks or zooms the tree to fit its frame, the rendered text shrinks or grows with the cards, so on screen it can differ from the value you set. On a large tree, the chart shrinks the cards until the text no longer fits. The `labelsDisplayMode()` method sets what happens to the labels then: `"drop"` (default) hides the labels that would be unreadable, `"clip"` crops them to the card.

```
// the font family and the font size apply to both lines
// the title line is drawn 2 px smaller than the name line
chart.labels().fontFamily("Verdana, sans-serif");
chart.labels().fontSize(13);

// the font color and the font weight change only the name (header) line
chart.labels().fontColor("#1a237e");
// the name line is regular by default: make it bold
chart.labels().fontWeight("bold");

// uppercase the name line with a formatting function
chart.labels().format(function () {
  return this.getData("name").toUpperCase();
});

// set the color of the title line on its own
chart.titleFontColor("#00796b");
```

In the sample below, both label lines are set in Verdana, the name line is bold, dark blue, and uppercased by a formatting function, and the title line is teal:

{sample}BCT\_Org\_Chart\_05{sample}

### Node Size

Use these methods to set the size of the node cards:

* {api:anychart.charts.OrgChart#nodeWidth}nodeWidth(){api} and {api:anychart.charts.OrgChart#nodeHeight}nodeHeight(){api} — the size of the node cards, in pixels (150×80 by default)
* {api:anychart.charts.OrgChart#nodePadding}nodePadding(){api} — the inner padding of the card text (10 by default)

```
// the size of the node cards
chart.nodeWidth(180);
chart.nodeHeight(60);
chart.nodePadding(8);
```

In the sample below, the sliders change the size of the node cards and the inner padding of their text:

{sample}BCT\_Org\_Chart\_06{sample}

### Connectors

The chart draws the parent-child links as connector lines between the cards. The {api:anychart.charts.OrgChart#connectorType}connectorType(){api} method sets their shape:

* `"orthogonal"` (default) — right-angle elbow lines
* `"straight"` — direct diagonal segments
* `"curved"` — smooth curves

The {api:anychart.charts.OrgChart#connectorStroke}connectorStroke(){api} method sets the line style: the color, the thickness, and the dash pattern. It applies in the **normal** state only. When the card at either end of a connector is hovered or selected, the connector is drawn with the `stroke()` of that state instead (see [Appearance](#appearance)). The line is itself interactive: hovering it highlights the card at its child end. Clicking it leaves the selection unchanged, but it still reports a click on that card to an [event listener](../Common_Settings/Event_Listeners).

```
// draw the parent-child connectors as smooth curves
chart.connectorType("curved");
chart.connectorStroke("2 #64b5f6");
```

In the sample below, the radio buttons switch the shape of the parent-child connectors, drawn with a thicker blue stroke:

{sample}BCT\_Org\_Chart\_07{sample}

### Layout

The chart lays out the tree automatically and rescales it to fit the container. The subsections below cover the growth direction of the tree and its spacing.

#### Orientation

By default, the tree grows from the top down. The {api:anychart.charts.OrgChart#orientation}orientation(){api} method makes it grow in one of four directions:

* `"top-to-bottom"` (default)
* `"bottom-to-top"`
* `"left-to-right"`
* `"right-to-left"`
* `"auto"` — the chart picks the vertical or the horizontal direction, whichever shows the cards bigger

The {api:anychart.charts.OrgChart#getEffectiveOrientation}getEffectiveOrientation(){api} method returns the direction the tree is drawn in, which is useful with `"auto"`.

```
// grow the tree from the left edge to the right
chart.orientation("left-to-right");
```

In the sample below, the radio buttons switch the growth direction of the tree, and the chart title shows the direction the tree is drawn in:

{sample}BCT\_Org\_Chart\_08{sample}

#### Spacing

Two methods set the spacing of the tree:

* {api:anychart.charts.OrgChart#levelSpacing}levelSpacing(){api} — the spacing between the levels of the tree (80 by default)
* {api:anychart.charts.OrgChart#siblingSpacing}siblingSpacing(){api} — the spacing between sibling cards (30 by default)

```
// the spacing between levels and between siblings
chart.levelSpacing(50);
chart.siblingSpacing(16);
```

In the sample below, the sliders change the spacing between the levels and between the siblings:

{sample}BCT\_Org\_Chart\_09{sample}

### Collapse and Expand

Every parent card gets a button that collapses or expands its branch; a collapsed card shows the number of hidden cards on the button. You can also do the same in code:

* {api:anychart.charts.OrgChart#collapse}collapse(){api} and {api:anychart.charts.OrgChart#expand}expand(){api} — collapse or expand the branch of a node. Pass the node `id`, or pass the data item itself. Get the item with the search() method of the [tree](../Working_with_Data/Tree_Data_Model). This is useful in the `"as-tree"` mode, where items may have no `id` field
* {api:anychart.charts.OrgChart#collapseAll}collapseAll(){api} and {api:anychart.charts.OrgChart#expandAll}expandAll(){api} — collapse or expand all branches at once
* `expandTo()` — show the tree down to the given level and collapse everything deeper: `expandTo(1)` leaves only the root visible

```
// collapse the CTO branch by the node id
chart.collapse("cto");
```

Each change dispatches the `"rowcollapseexpand"` event: its `item` field is the data item of the card, `id` is the node id, and `collapsed` tells which way the branch went. For a click on the button and for `collapse()` and `expand()`, call `preventDefault()` on the event to cancel the change; the events of `collapseAll()`, `expandAll()`, and `expandTo()` cannot be canceled. Read more: [Event Listeners](../Common_Settings/Event_Listeners).

```
// show the last collapsed or expanded card
chart.listen("rowcollapseexpand", function (e) {
  var state = e.collapsed ? "collapsed" : "expanded";
  document.getElementById("lastChange").value = e.item.get("name") + " " + state;
});
```

In the sample below, the CTO branch is collapsed from the start, the button under a parent card expands or collapses its branch, the buttons above the chart collapse or expand all branches at once, and the readout shows the last change:

{sample}BCT\_Org\_Chart\_10{sample}

### Zoom and Pan

Drag-to-pan is on by default. Zoom is off by default: the mouse wheel scrolls the page and pinch does nothing, so the tree never zooms by accident. To let users zoom the tree, add a zoom control, turn on the wheel and pinch gestures with the {api:anychart.charts.OrgChart#interactivity}interactivity(){api} method (see [Gestures](#gestures)), or zoom from code (see [Zoom Level](#zoom_level)).

The zoom control is a panel with the zoom-in, zoom-out, and fit buttons. Every sample in this article has one. Combine the {api:anychart.ui#zoom}anychart.ui.zoom(){api} method with {api:anychart.ui.Zoom#target}target(){api} and {api:anychart.ui.Zoom#render}render(){api} to create it — the panel needs the UI module and its stylesheets, see [Zoom Controls](../Common_Settings/UI_Controls/Zoom_Controls):

```
// add the zoom control
var zoomController = anychart.ui.zoom();
zoomController.target(chart);
zoomController.render();
```

Exporting and printing always render the whole tree, whatever the current zoom and pan.

#### Gestures

The gestures work anywhere on the chart — over the cards and over the empty area alike. Wheel zoom is anchored at the pointer: the spot under the cursor stays in place.

Combine `interactivity()` with these methods:

* {api:anychart.core.orgChart.Interactivity#zoomOnMouseWheel}zoomOnMouseWheel(){api} — enable or disable wheel zoom (`false` by default)
* {api:anychart.core.orgChart.Interactivity#zoomOnPinch}zoomOnPinch(){api} — enable or disable pinch zoom on touch screens (`false` by default)
* {api:anychart.core.orgChart.Interactivity#scrollOnMouseWheel}scrollOnMouseWheel(){api} — make the wheel pan the tree vertically instead of zooming it (`false` by default)
* {api:anychart.core.orgChart.Interactivity#drag}drag(){api} — enable or disable panning (`true` by default)
* {api:anychart.core.orgChart.Interactivity#zoomStep}zoomStep(){api}, {api:anychart.core.orgChart.Interactivity#wheelZoomStep}wheelZoomStep(){api}, and {api:anychart.core.orgChart.Interactivity#pinchZoomStep}pinchZoomStep(){api} — how much one step zooms in: a click on the zoom control or a `zoomIn()` call (1.2 by default), one wheel notch (1.1), and one pinch step (1.3)

The two wheel options exclude each other: turning one on turns the other off, and turning both off gives the wheel back to the page.

```
// make the wheel scroll the tree instead of zooming it
chart.interactivity().scrollOnMouseWheel(true);

// turn off panning
chart.interactivity().drag(false);
```

In the sample below, the radio buttons set what the mouse wheel does — it starts with the default, which leaves the wheel to the page — and the checkbox turns panning on and off:

{sample}BCT\_Org\_Chart\_11{sample}

#### Zoom Level

The zoom level is measured against the natural size of the cards: at 1, every card is drawn at its {api:anychart.charts.OrgChart#nodeWidth}nodeWidth(){api} and {api:anychart.charts.OrgChart#nodeHeight}nodeHeight(){api}. Right after drawing, the chart fits the whole tree into the chart area, so the level is 1 for a small tree and less than 1 for a big one. By default, the tree zooms out as far as that fitted size and in up to 2, and every way of zooming — the zoom control, the wheel, pinch, and the methods below — stops at the limits.

* {api:anychart.charts.OrgChart#zoomIn}zoomIn(){api} and {api:anychart.charts.OrgChart#zoomOut}zoomOut(){api} — scale the tree up or down around the center of the chart area
* {api:anychart.charts.OrgChart#fit}fit(){api} — reset the zoom and pan and fit the whole tree into the container
* {api:anychart.charts.OrgChart#minZoom}minZoom(){api} and {api:anychart.charts.OrgChart#maxZoom}maxZoom(){api} — set the zoom limits
* {api:anychart.charts.OrgChart#getZoomLevel}getZoomLevel(){api} — read the current zoom level
* {api:anychart.charts.OrgChart#goToNode}goToNode(){api} — show one card: expand the branches that hide it, zoom to a readable scale, bring the card into view, and select it. Pass the node `id` or the data item

```
// let the tree zoom out to 0.7 and in to 4 times the natural card size
chart.minZoom(0.7);
chart.maxZoom(4);

// zoom in programmatically
chart.zoomIn();

// read the current zoom level
var zoom = chart.getZoomLevel();

// expand the path to a card, zoom to a readable scale, bring it into view and select it
chart.goToNode("be");
```

In the sample below, the buttons zoom the tree, fit it back, and go to one card, and the chart title shows the current zoom level:

{sample}BCT\_Org\_Chart\_12{sample}

#### Panning Bounds

Panning is bounded by default: the tree cannot be dragged out of the chart area. To change that, call {api:anychart.core.orgChart.Interactivity#boundsMode}boundsMode(){api} with one of the following values:

* `"contain"` (default) — the tree stays inside the chart area; when it is bigger than the area, its far edge stops at the edge of the area
* `"free"` — the tree can be dragged anywhere
* `"auto-center"` — the tree can be dragged anywhere, but when you release it fully out of view, it slides back to the center

```
// let the tree be dragged anywhere
chart.interactivity().boundsMode("free");
```

In the sample below, the drop-down list switches the panning bounds — drag the tree out of view in each mode:

{sample}BCT\_Org\_Chart\_13{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box that appears when you hover over a card. Its look and behavior — fonts, background, position — are the standard AnyChart tooltip settings.

By default, the title of the tooltip shows the `name` field, and the text shows the `title` field. Change them with {api:anychart.charts.OrgChart#tooltip}tooltip(){api}: {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api} sets the title, {api:anychart.core.ui.Tooltip#format}format(){api} sets the text. A formatting function can read any field of the hovered item with {api:anychart.format.Context#getData}getData(){api}.

In the sample below, the tooltip shows extra data fields instead of repeating what the card already displays:

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

{sample}BCT\_Org\_Chart\_14{sample}
