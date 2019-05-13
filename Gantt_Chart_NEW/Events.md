{:index 13}
# Events

## Overview

This article explains how to work with the events of the Gantt chart.

You can listen to the events of rows and connectors by attaching event listeners to the [chart](#chart). Also, it is possible to listen to the events of the [data tree](#data_tree), which fire when the chart is edited in the [Live Edit](Live_Edit) mode. The last section explains how to [prevent the default behavior](#preventing_default_behavior) of the chart.

See the [Event Listeners](../Common_Settings/Event_Listeners) and [Interactivity](../Common_Settings/Interactivity) articles to learn more about events.

**Note:** To learn in detail about Live Edit actions that trigger data tree and other events, read [Live Edit: Default Behavior](Live_Edit#default_behavior).

## Chart

### Rows

You can listen to the following events of rows:

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>rowCollapseExpand</td><td>A row has been collapsed or expanded.</td>
<tr><td>rowClick</td><td>A row has been clicked on.</td></tr>
<tr><td>rowDblClick</td><td>A row has been double-clicked on.</td></tr>
<tr><td>rowMouseDown</td><td>The left mouse button has been pressed on a row.</td></tr>
<tr><td>rowMouseMove</td><td>The mouse is being moved over a row.</td></tr>
<tr><td>rowMouseOut</td><td>The mouse has been moved out of a row.</td></tr>
<tr><td>rowMouseOver</td><td>The mouse has been moved over a row.</td></tr>
<tr><td>rowMouseUp</td><td>The left mouse button has been released over a row.</td></tr>
<tr><td>rowSelect</td><td>A row has been selected.</td></tr>
</table>

In the sample below, event listeners are used to update the chart title when `"rowMouseOver"`, `"rowClick"`, `"rowDblClick"`, and `"rowCollapseExpand"` fire:

{sample :height 295}GANTT\_NEW\_Events\_01{sample}

```
/* listen to the rowMouseOver event
and update the chart title */
chart.listen("rowMouseOver", function (e) {
  var itemName = e.item.get("name");
  chart.title("Events: Chart<br><br>" +
              "< <span style = 'color:#990000'>" +
              itemName + "</span>: rowMouseOver >");
});

/* listen to the rowClick event
and update the chart title */
chart.listen("rowClick", function (e) {
  var itemName = e.item.get("name");
  chart.title("Events: Chart<br><br>" +
              "< <span style = 'color:#990000'>" +
              itemName + "</span>: rowClick >");
});

/* listen to the rowDblClick event
and update the chart title */
chart.listen("rowDblClick", function (e) {
  var itemName = e.item.get("name");
  chart.title("Events: Chart<br><br>" +
              "< <span style = 'color:#990000'>" +
              itemName + "</span>: rowDblClick >");
});

/* listen to the rowCollapseExpand event
and update the chart title */
chart.listen("rowCollapseExpand", function (e) {
  var itemName = e.item.get("name");
  chart.title("Events: Chart<br><br>" +
              "< <span style = 'color:#990000'>" +
              itemName + "</span>: rowCollapseExpand >");
});
```

### Connectors

Here are the events of [connectors](Project_Chart#connectors) you can listen to:

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>beforeCreateConnector</td><td> A connector is about to be created in the [Live Edit](Live_Edit) mode.</td></tr>
<tr><td>connectorClick</td><td>A connector has been clicked on.</td></tr>
<tr><td>connectorDblClick</td><td>A connector has been double-clicked on.</td></tr>
<tr><td>connectorMouseDown</td><td>The left mouse button has been pressed on a connector.</td></tr>
<tr><td>connectorMouseMove</td><td>The mouse is being moved over a connector.</td></tr>
<tr><td>connectorMouseOut</td><td>The mouse has been moved out of a connector.</td></tr>
<tr><td>connectorMouseOver</td><td>The mouse has been moved over a connector.</td></tr>
<tr><td>connectorMouseUp</td><td>The left mouse button has been released over a connector.</td></tr>
<tr><td>connectorSelect</td><td>A connector has been selected.</td></tr>
</table>

In the following sample, the [Live Edit](Live_Edit) mode is enabled. The `"connectorMouseOver"`, `"connectorClick"`, `"connectorDblClick"`, and `"beforeCreateConnector"` events are used to update the chart title:

{sample :height 295}GANTT\_NEW\_Events\_02{sample}

```
/* listen to the connectorMouseOver event
and update the chart title */
chart.listen("connectorMouseOver", function (e) {
  var sourceName = e.fromItem.get("name");
  var targetName = e.toItem.get("name");
  var type = e.connType;
  chart.title("Events: Connectors<br><br>" +
              "< <span style = 'color:#990000'>" +
              sourceName + " – " + targetName +
              " (" + type + ")</span>: connectorMouseOver >");
});

/* listen to the connectorClick event
and update the chart title */
chart.listen("connectorClick", function (e) {
  var sourceName = e.fromItem.get("name");
  var targetName = e.toItem.get("name");
  var type = e.connType;
  chart.title("Events: Connectors<br><br>" +
              "< <span style = 'color:#990000'>" +
              sourceName + " – " + targetName +
              " (" + type + ")</span>: connectorClick >");
});

/* listen to the connectorDblClick event
and update the chart title */
chart.listen("connectorDblClick", function (e) {
  var sourceName = e.fromItem.get("name");
  var targetName = e.toItem.get("name");
  var type = e.connType;
  chart.title("Events: Connectors<br><br>" +
              "< <span style = 'color:#990000'>" +
              sourceName + " – " + targetName +
              " (" + type + ")</span>: connectorDblClick >");
});

/* listen to the beforeCreateConnector event
and update the chart title */
chart.listen("beforeCreateConnector", function (e) {
  var sourceName = e.source.get("name");
  var targetName = e.target.get("name");
  var type = e.connectorType;
  chart.title("Events: Connectors<br><br>" +
              "< <span style = 'color:#990000'>" +
              sourceName + " – " + targetName +
              " (" + type + ")</span>: beforeCreateConnector  >");
});
```

## Data Tree

When the chart is edited in the [Live Edit](Live_Edit) mode, the following [events of the data tree](../Working_with_Data/Tree_Data_Model#events) fire:

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>treeItemMove</td><td>A data item has been moved.</td></tr>
<tr><td>treeItemUpdate</td><td>A data item has been updated.</td></tr>
</table>

In the sample below, there is a Gantt chart with the Live Edit mode enabled. You can drag and drop rows, which triggers `"treeItemMove"`. When you edit [elements](../Gantt_Chart/Elements) and the [data grid](Gantt_Chart/Data_Grid) text, `"treeItemUpdate"` fires.

Both events are used to update the chart title:

{sample :height 295}GANTT\_NEW\_Events\_03{sample}

```
/* listen to the treeItemUpdate event
and update the chart title */
treeData.listen("treeItemUpdate", function (e) {
  var itemName = e.item.get("name");
  chart.title("Events: Tree Data<br><br>< " +
              "<span style = 'color:#990000'>" +
              itemName + ": </span> treeItemUpdate >");
});

/* listen to the treeItemMove event
and update the chart title */
treeData.listen("treeItemMove", function (e) {
  var itemName = e.item.get("name");
  chart.title("Events: Tree Data<br><br>< " +
              "<span style = 'color:#990000'>" +
              itemName + "</span>: treeItemMove >");
});
```

## Preventing Default Behavior

To prevent the default behavior of the chart, use the {api:anychart.graphics.events.BrowserEvent#preventDefault}preventDefault(){api} method.

When you click on a row of Gantt chart, the row is selected, and when you double-click on a row with a parent element, this element is expanded or collapsed. In the sample below, the `"rowClick"` and `"rowDblClick"` [row events](#rows) are used to prevent this behavior:

{sample :height 220}GANTT\_NEW\_Events\_04{sample}

```
/* listen to the rowClick event
and prevent the default behavior of the chart */
chart.listen("rowClick", function (e) {
  e.preventDefault();
});

/* listen to the rowDblClick event
and prevent the default behavior of the chart */
chart.listen("rowDblClick", function (e) {
  e.preventDefault();
});
```

In the following sample, the [Live Edit](Live_Edit) mode is enabled. You can draw a connector preview, but cannot create a connector – this feature is disabled with the help of the `"beforeCreateConnector"` [connector event](#connectors):

{sample :height 220}GANTT\_NEW\_Events\_05{sample}

```
/* listen to the beforeCreateConnector event
and prevent the default behavior of the chart */
chart.listen("beforeCreateConnector", function (e) {
  e.preventDefault();
});
```