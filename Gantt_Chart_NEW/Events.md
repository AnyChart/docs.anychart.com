{:index 13}
# Events

## Overview

## Rows

{sample :height 240}GANTT\_NEW\_Events\_01{sample}

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

* не забыть beforeCreateConnector
* сослаться на Live Edit

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

### Preventing Default Behavior

{sample :height 220}GANTT\_NEW\_Events\_04{sample}

```
/* prevent the default behavior of the chart
on the rowDblClick event */
chart.listen("rowDblClick", function (e) {
  e.preventDefault();
});

/* prevent the default behavior of the chart
on the beforeCreateConnector event */
chart.listen("beforeCreateConnector", function (e) {
  e.preventDefault();
});
```