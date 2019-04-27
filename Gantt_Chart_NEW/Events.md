{:index 13}
# Events

## Overview

## Rows

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

{sample :height 290}GANTT\_NEW\_Events\_01{sample}

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

## Connectors

misc:

* сослаться на Live Edit


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

{sample :height 240}GANTT\_NEW\_Events\_02{sample}

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

## Tree Data

misc:

* события только на move и update
* объяснить что такое move
* сослаться на Live Edit
* сослаться на Tree Data


<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>treeItemMove</td><td>A data item has been moved.</td></tr>
<tr><td>treeItemUpdate</td><td>A data item has been updated.</td></tr>
</table>

{sample :height 240}GANTT\_NEW\_Events\_03{sample}

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