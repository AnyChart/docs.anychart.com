{:index 13}
# Events

## Overview

This article explains how to work with the events of the Gantt chart.

You can listen to the events of rows and connectors by attaching event listeners to the [chart](#chart). Also, it is possible to listen to the events of the [data tree](#data_tree), which fire when the chart is edited in the [Live Edit](Live_Edit) mode.

The last section explains how to [prevent the default behavior](#preventing_default_behavior) of the chart.

See [Event Listeners](../Common_Settings/Event_Listeners) and [Interactivity](../Common_Settings/Interactivity) to learn more.

## Chart

### Rows

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
</tr>
</table>

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

misc:

* [Project Chart: Connectors](Project_Chart#connectors)
* [Live Edit](Live_Edit)


<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>beforeCreateConnector</td><td> (?)</td></tr>
<tr><td>connectorClick</td><td>A connector has been clicked on.</td></tr>
<tr><td>connectorDblClick</td><td>A connector has been double-clicked on.</td></tr>
<tr><td>connectorMouseDown</td><td>The left mouse button has been pressed on a connector.</td></tr>
<tr><td>connectorMouseMove</td><td>The mouse is being moved over a connector.</td></tr>
<tr><td>connectorMouseOut</td><td>The mouse has been moved out of a connector.</td></tr>
<tr><td>connectorMouseOver</td><td>The mouse has been moved over a connector.</td></tr>
<tr><td>connectorMouseUp</td><td>The left mouse button has been released over a connector.</td></tr>
<tr><td>connectorSelect</td><td>A connector has been selected.</td></tr>
</tr>
</table>

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

misc:

* объяснить что такое move
* [Tree Data Model: Events](../Working_with_Data/Tree_Data_Model#events)
* [Live Edit](Live_Edit)


<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>treeItemMove</td><td>A data item has been moved.</td></tr>
<tr><td>treeItemUpdate</td><td>A data item has been updated.</td></tr>
</table>

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

{sample :height 220}GANTT\_NEW\_Events\_04{sample}

```
/* prevent the default behavior of the chart
on the rowClick event */
chart.listen("rowClick", function (e) {
  e.preventDefault();
});

/* prevent the default behavior of the chart
on the rowDblClick event */
chart.listen("rowDblClick", function (e) {
  e.preventDefault();
});
```

{sample :height 220}GANTT\_NEW\_Events\_05{sample}

```
/* prevent the default behavior of the chart
on the beforeCreateConnector event */
chart.listen("beforeCreateConnector", function (e) {
  e.preventDefault();
});
```