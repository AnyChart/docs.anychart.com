{:index 6}
# Tooltips

## Overview

[Tooltips](../../Common_Settings/Tooltip) are text boxes displayed when data grid or [timeline](../Timeline) rows are hovered over. They are defined as instances of the {api:anychart.core.ui.Tooltip}anychart.core.ui.Tooltip{api} class.

To access tooltips of the data grid, combine the {api:anychart.charts.Gantt#dataGrid}dataGrid(){api} method with {api:anychart.core.ui.DataGrid#tooltip}tooltip(){api}.

By default, tooltips are enabled. To disable or enable them, pass `false` / `true` either directly to {api:anychart.core.ui.DataGrid#tooltip}tooltip(){api} or to the {api:anychart.core.ui.Tooltip#enabled}enabled(){api} method of tooltips:

```
chart.dataGrid().tooltip(false);
```

```
chart.dataGrid().tooltip.enabled(false);
```

To configure tooltips, use other methods of {api:anychart.core.ui.Tooltip}anychart.core.ui.Tooltip{api} – for example, {api:anychart.core.ui.Tooltip#fontColor}fontColor(){api}, {api:anychart.core.ui.Tooltip#fontWeight}fontWeight(){api}, {api:anychart.core.ui.Tooltip#fontSize}fontSize(){api}, etc. The {api:anychart.core.ui.Tooltip#format}format(){api} method, combined with [text formatters](../../Common_Settings/Text_Formatters), allows setting the text format – read the sections below to learn more.

**Note:** The tooltips that are shown on the timeline are configured independently from the data grid tooltips. See [Timeline: Tooltips](../Timeline/Tooltips).

## Tokens

To format the text of tooltips, combine the {api:anychart.core.ui.Tooltip#format}format(){api} method with [tokens](../../Common_Settings/Text_Formatters#string_tokens).

Please keep in mind that in addition to default tokens you can always use a custom token corresponding to a custom field in your data.

Also, if you need to enable HTML in tokens, pass `true` to {api:anychart.core.ui.Tooltip#useHtml()}useHtml(){api}.

### Project Tokens

For the [Project Gantt](../Project_Chart) chart, the following tokens are available:

* `{%id}`
* `{%name}`
* `{%actualStart}`
* `{%actualEnd}`
* `{%baselineStart}`
* `{%baselineEnd}`
* `{%progress}`
* `{%linearIndex}`

In the sample below, there is a Project chart with tooltips showing the start and end dates of elements, the progress, and the content of the custom field `manager`:

```
// configure tooltips of the data grid
chart.dataGrid().tooltip().useHtml(true);    
chart.dataGrid().tooltip().format(
  "<span style='font-weight:600;font-size:12pt'>" +
  "{%actualStart}{dateTimeFormat:dd MMM} – " +
  "{%actualEnd}{dateTimeFormat:dd MMM}</span><br><br>" +
  "Progress: {%progress}<br>" +
  "Manager: {%manager}"
);
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Tooltips\_01{sample}

### Resource Tokens

The [Resource Gantt](../Resource_Chart) chart supports these tokens:

* `{%id}`
* `{%name}`
* `{%start}`
* `{%end}`
* `{%linearIndex}`

In the following sample, tokens, including a custom one (`disc_space`), are used to format the text of tooltips of a Resource chart:

```
// configure tooltips of the data grid
chart.dataGrid().tooltip().useHtml(true);    
chart.dataGrid().tooltip().format(
  "<span style='font-weight:600;font-size:12pt'>" +
  "{%start}{dateTimeFormat:dd MMM} – " +
  "{%end}{dateTimeFormat:dd MMM}</span><br><br>" +
  "Disc Space: {%disc_space}"
);
```

{sample :height 200}GANTT\_NEW\_Data\_Grid\_Tooltips\_02{sample}

## Formatting Functions

You can configure the text of tooltips by combining the {api:anychart.core.ui.Tooltip#format}format(){api} method with [formatting functions](../../Common_Settings/Text_Formatters#formatting_functions).

In these functions, a number of default context fields is available. Also, you can use {api:anychart.format.Context#getData}getData(){api} to refer to a custom field in your data and methods of the [tree data model](../../Working_with_Data/Tree_Data_Model) to perform operations on data.

If you need to enable HTML in formatting functions, pass `true` to {api:anychart.core.ui.Tooltip#useHtml()}useHtml(){api}.

### Project Fields

For the [Project Gantt](../Project_Chart) chart, the following fields are available in formatting functions:

* `id`
* `name`
* `actualStart`
* `actualEnd`
* `baselineStart`
* `baselineEnd`
* `progress`
* `linearIndex`

In the sample below, a formatting function is used to display different tooltips for different types of [tasks](../Project_Chart#tasks_\(actual\)). Also, in all tooltips the content of a custom data field `manager` is shown.

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Tooltips\_03{sample}

A special context field `item` and the {api:anychart.data.Tree.DataItem#numChildren}numChildren(){api} method of the [Tree Data Model](../../Working_with_Data/Tree_Data_Model) are used to get the number of the current data item's children and distinguish regular tasks from parent ones. To distinguish regular tasks from milestones, the duration of tasks is calculated.

```
// configure tooltips of the data grid

chart.dataGrid().tooltip().useHtml(true);

chart.dataGrid().tooltip().format(function() {

  var numChildren = this.item.numChildren();
  var duration = (this.actualEnd - this.actualStart) / 1000 / 3600 / 24;      
  var startDate = anychart.format.dateTime(this.actualStart, "dd MMM");
  var endDate = anychart.format.dateTime(this.actualEnd, "dd MMM");
  var progress = this.progress * 100 + "%";
  var manager = this.getData("manager");

  var parentText = "<span style='font-weight:600;font-size:12pt'>" + 
                   startDate + " – " + endDate + "</span><br><br>" +
                   "Duration: " + duration + " days<br>" +
                   "Number of Tasks: " + numChildren + "<br><br>" +                       
                   "Manager: " + manager;

  var milestoneText = "<span style='font-weight:600;font-size:12pt'>" +
                      startDate + "</span><br><br>" +
                      "Manager: " + manager;

  var taskText = "<span style='font-weight:600;font-size:12pt'>" + 
                 startDate + " – " + endDate + "</span><br><br>" +
                 "Duration: " + duration + " days<br>" +
                 "Progress: " + progress + "<br><br>" +
                 "Manager: " + manager;

  // identify the task type and display the corresponding text
  if (numChildren > 0) {
    return parentText;
  } else {
    if (duration == 0) {
      return milestoneText;
    } else {
      return taskText;
    }
  }

});
```

### Resource Fields

Here are the fields supported by the [Resource Gantt](../Resource_Chart) chart:

* `id`
* `name`
* `start`
* `end`
* `linearIndex`

In this sample, a formatting function is used to display different tooltips for parent and child [resources](../Resource_Chart#periods_and_resources). For example, the content of a custom field `disc_space` is shown only for child resources.

{sample :height 200}GANTT\_NEW\_Data\_Grid\_Tooltips\_04{sample}

A special context field `item` and the {api:anychart.data.Tree.DataItem#numChildren}numChildren(){api} method of the [Tree Data Model](../../Working_with_Data/Tree_Data_Model) are used to get the number of the current data item's children and distinguish regular resources from parent ones:

```
// configure tooltips of the data grid

chart.dataGrid().tooltip().useHtml(true);

chart.dataGrid().tooltip().format(function() {

  var numChildren = this.item.numChildren();
  var duration = (this.end - this.start) / 1000 / 3600 / 24;
  var startDate = anychart.format.dateTime(this.start, "dd MMM");
  var endDate = anychart.format.dateTime(this.end, "dd MMM");
  var discSpace = this.getData("disc_space");

  var parentText = "Number of Servers: " + numChildren;

  var childText = "<span style='font-weight:600;font-size:12pt'>" + 
                 startDate + " – " + endDate + "</span><br><br>" +
                 "Duration: " + duration + " days<br>" +
                 "Disc Space: " + discSpace;

  // identify the resource type and display the corresponding text
  if (numChildren > 0) {
    return parentText;
  } else {
    return childText;
  }

});
```