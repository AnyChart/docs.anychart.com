{:index 3}
# Columns

## Overview

Columns of the data grid are defined as instances of the {api:anychart.core.ui.DataGrid.Column}anychart.core.ui.DataGrid.Column{api} class.

To access a column, combine {api:anychart.charts.Gantt#dataGrid}dataGrid(){api} with {api:anychart.core.ui.DataGrid#column}column(){api} and specify its index:

```
var column_1 = chart.dataGrid().column(0);
```

By default, there are two columns, numbered from left to right. The first column displays linear indexes of data items, and the second one displays their names.

As explained in the sections below, you can change the [text](#text_\(labels\)) as well as other parameters of default columns or create completely [custom columns](#custom_columns). Also, you can use column presets – see the [Column Presets](Column_Presets) article.

## Enabling / Disabling

Passing `true` / `false` to the {api:anychart.core.ui.DataGrid.Column#enabled()}enabled(){api} method allows enabling or disabling a column:

```
// disable the first data grid column
chart.dataGrid().column(0).enabled(false);
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_01{sample}

## Width

To set the width of a column, call the {api:anychart.core.ui.DataGrid.Column#width()}width(){api} method.

**Note:** The overall width of the data grid depends on the width of its columns. Also, you can adjust the position of the splitter between the data grid and timeline – see [Basic Settings: Splitter](../Basic_Settings#splitter).

```
// set the width of data grid columns
chart.dataGrid().column(0).width(25);
chart.dataGrid().column(1).width(130);
```

{sample :height 260}GANTT\_NEW\_Data\_Grid\_Columns\_02{sample}

## Title

To configure [titles](../../Common_Settings/Title) of columns, use the {api:anychart.core.ui.DataGrid.Column#title}title(){api} method with methods of the {api:anychart.core.ui.Title}anychart.core.ui.Title{api} class, for example {api:anychart.core.ui.Title#enabled}enabled(){api}, {api:anychart.core.ui.Title#text}text(){api}, {api:anychart.core.ui.Title#fontColor}fontColor(){api}, {api:anychart.core.ui.Title#fontWeight}fontWeight(){api}, etc.:

```
// configure the title of the first data grid column
var column_1 = chart.dataGrid().column(0);
column_1.title().enabled(false);

// configure the title of the second data grid column
var column_2 = chart.dataGrid().column(1);
column_2.title().text("TASK");
column_2.title().fontColor("#64b5f6");
column_2.title().fontWeight(600);
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_03{sample}

## Text (Labels)

To adjust the text of columns, combine {api:anychart.core.ui.DataGrid.Column#labels}labels(){api} with methods of the {api:anychart.core.ui.LabelsFactory}anychart.core.ui.LabelsFactory{api} class, for example {api:anychart.core.ui.LabelsFactory#fontColor}fontColor(){api}, {api:anychart.core.ui.LabelsFactory#fontWeight}fontWeight(){api}, {api:anychart.core.ui.LabelsFactory#fontSize}fontSize(){api}, etc.

The {api:anychart.core.ui.LabelsFactory#format}format(){api} method, combined with [text formatters](../../Common_Settings/Text_Formatters), allows setting the text format – read the sections below to learn more.

Alternatively, you can configure the text (and width) with the help of column presets – see [Column Presets](Column_Presets).

### Tokens

To format the text of columns, combine the {api:anychart.core.ui.LabelsFactory#format}format(){api} method with [tokens](../../Common_Settings/Text_Formatters#string_tokens).

Please keep in mind that in addition to default tokens you can always use a custom token corresponding to a custom field in your data.

Also, if you need to enable HTML in tokens, pass `true` to {api:anychart.core.ui.LabelsFactory#useHtml()}useHtml(){api}.

#### Project Tokens

For the [Project Gantt](../Project_Chart) chart, the following tokens are available:

* `{%id}`
* `{%name}`
* `{%actualStart}`
* `{%actualEnd}`
* `{%baselineStart}`
* `{%baselineEnd}`
* `{%progress}`
* `{%linearIndex}`

In the sample below, the text format of both default columns is set with the help of tokens. In the second column a custom token is used. Also, the text font of the first column is  adjusted.

```
// set the text of the first data grid column
var column_1 = chart.dataGrid().column(0);
column_1.labels().fontColor("#64b5f6");
column_1.labels().fontWeight(600);
column_1.labels().format("{%linearIndex}.");

// set the text of the second data grid column
var column_2 = chart.dataGrid().column(1);
column_2.labels().useHtml(true);
column_2.labels().format(
  "<span style='color:#dd2c00;font-weight:bold'>{%custom_field} </span>" +
  "{%name}: <span style='color:#64b5f6'>{%progress}</span>"
);
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_04{sample}

#### Resource Tokens

The [Resource Gantt](../Resource_Chart) chart supports these tokens:

* `{%id}`
* `{%name}`
* `{%start}`
* `{%end}`
* `{%linearIndex}`

In the following sample, tokens are used to format the text of both default columns. In the second column a custom token is used. Also, the text font of the first column is  adjusted.

```
// set the text of the first data grid column
var column_1 = chart.dataGrid().column(0);
column_1.labels().fontColor("#64b5f6");
column_1.labels().fontWeight(600);
column_1.labels().format("{%linearIndex}.");

// set the text of the second data grid column
var column_2 = chart.dataGrid().column(1);
column_2.labels().useHtml(true);
column_2.labels().format(
  "<span style='color:#dd2c00;font-weight:bold'>" +
  "{%custom_field}</span> {%name}"
);
```

{sample :height 200}GANTT\_NEW\_Data\_Grid\_Columns\_05{sample}

### Formatting Functions

You can configure the text of columns by combining the {api:anychart.core.ui.LabelsFactory#format}format(){api} method with [formatting functions](../../Common_Settings/Text_Formatters#formatting_functions).

In these functions, a number of default context fields is available. Also, you can use {api:anychart.format.Context#getData}getData(){api} to refer to a custom field in your data and methods of the [tree data model](../../Working_with_Data/Tree_Data_Model) to perform operations on data.

If you need to enable HTML in formatting functions, pass `true` to {api:anychart.core.ui.LabelsFactory#useHtml()}useHtml(){api}.

#### Project Fields

For the [Project Gantt](../Project_Chart) chart, the following fields are available in formatting functions:

* `id`
* `name`
* `actualStart`
* `actualEnd`
* `baselineStart`
* `baselineEnd`
* `progress`
* `linearIndex`

In the sample below, formatting functions are used to display different column labels for different types of [tasks](../Project_Chart#tasks_\(actual\)):

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_06{sample}

A special context field `item` and the {api:anychart.data.Tree.DataItem#numChildren}numChildren(){api} method of the [Tree Data Model](../../Working_with_Data/Tree_Data_Model) are used to get the number of the current data item's children and distinguish regular tasks from parent ones. To distinguish regular tasks from milestones, the duration of tasks is calculated.

This is how the first column is configured – please note that both text font and text format are set:

```
// set the text of the first data grid column

var column_1 = chart.dataGrid().column(0);
column_1.labels().fontWeight(600);
column_1.labels().useHtml(true);

column_1.labels().format( function() {

  var children = this.item.numChildren();
  var duration = (this.actualEnd - this.actualStart);
  var index = this.linearIndex;

  var parentText = "<span style='color:#dd2c00'>" + index + ".</span>";
  var milestoneText = "<span style='color:#ffa000'>" + index + ".</span>";
  var taskText =  "<span style='color:#64b5f6'>" + index + ".</span>";

  // identify the task type and display the corresponding text
  if (children > 0) {
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

The text of the second column includes the content of a custom data field:

```
// set the text of the second data grid column

var column_2 = chart.dataGrid().column(1);
column_2.labels().useHtml(true);

column_2.labels().format(function() {

  var numChildren = this.item.numChildren();
  var duration = (this.actualEnd - this.actualStart) / 1000 / 3600 / 24;
  var progress = this.progress * 100 + "%";
  var customField = "";
  if (this.getData("custom_field")) {
    customField = "<span style='font-weight:bold'>" +
             this.getData("custom_field") + " </span>";
  }

  var parentText = "<span style='color:#dd2c00;font-weight:bold'>" +
                   this.name + ": " + duration + "d</span>";
  var milestoneText = "<span style='color:#ffa000;font-weight:bold'>" + 
                      customField + this.name + "</span";
  var taskText = "<span style='color:#64b5f6'>" + customField + 
                 this.name + ": " + progress + "</span>";

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

#### Resource Fields

Here are the fields supported by the [Resource Gantt](../Resource_Chart) chart:

* `id`
* `name`
* `start`
* `end`
* `linearIndex`

In this sample, formatting functions are used to display different column labels for parent and child [resources](../Resource_Chart#periods_and_resources):

{sample :height 200}GANTT\_NEW\_Data\_Grid\_Columns\_07{sample}

A special context field `item` and the {api:anychart.data.Tree.DataItem#numChildren}numChildren(){api} method of the [Tree Data Model](../../Working_with_Data/Tree_Data_Model) are used to get the number of the current data item's children and distinguish regular resources from parent ones.

This is how the first column is configured – please note that both text font and text format are set:

```
// set the text of the first data grid column

var column_1 = chart.dataGrid().column(0);
column_1.labels().fontWeight(600);
column_1.labels().useHtml(true);

column_1.labels().format( function() {

  var children = this.item.numChildren();
  var index = this.linearIndex;

  // identify the resource type and display the corresponding text
  if (children > 0) {
    return "<span style='color:#dd2c00'>" + index + ".</span>";
  } else {
    return "<span style='color:#64b5f6'>" + index + ".</span>";
  }

});
```
The text of the second column includes the content of a custom data field:

```
// set the text of the second data grid column

var column_2 = chart.dataGrid().column(1);    
column_2.labels().useHtml(true);

column_2.labels().format(function() {

  var numChildren = this.item.numChildren();
  var duration = (this.end - this.start) / 1000 / 3600 / 24;
  var customField = " ";
  if (this.getData("custom_field")) {
    customField = "<span style='font-weight:bold'>" +
             this.getData("custom_field") + customField + "</span>";
  }

  var parentText = "<span style='color:#dd2c00;font-weight:bold'>" +
                   this.name.toUpperCase() + "<span>";
  var childText = "<span style='color:#64b5f6'>" + customField + 
                  this.name + ": " + duration + "d</span>";

  // identify the resource type and display the corresponding text
  if (numChildren > 0) {
    return parentText;
  } else {
    return childText;
  }

});
```

## Indentation

In case there are hierarchical relationships between data items, nested data grid labels in the second column are indented. To set an indent in any column, call the {api:anychart.core.ui.DataGrid.Column#depthPaddingMultiplier}depthPaddingMultiplier(){api} method.

In the following sample, the indent in the second column is set to 60, and the first column is left with the default indent of 0:

```
// set the indent for nested labels in the second column
chart.dataGrid().column(1).depthPaddingMultiplier(60);
```

{sample :height 260}GANTT\_NEW\_Data\_Grid\_Columns\_08{sample}

## Buttons

If there are hierarchical relationships between data items, special buttons are shown in the second data grid column. They allow expanding or collapsing parent [tasks](../Project_Chart#tasks_\(actual\)) or [resources](../Resource_Chart#periods_and_resources) on the [timeline](../Timeline) as well as their labels on the data grid.

With the help of the {api:anychart.core.ui.DataGrid.Column#collapseExpandButtons()}collapseExpandButtons(){api} method, you can enable or disable buttons in any column. As a rule, it also makes sense to set the hierarchical indentation – see the [Indentation](#indentation) section. Other button settings are listed in the [Buttons](Buttons) article.

**Note**: (?) By default, the chart is drawn with all elements expanded. To learn how to change this setting, read [Basic Settings: Navigation](../Basic_Settings#navigation).

The sample below shows how to enable and disable buttons:

```
// disable buttons in the second column
chart.dataGrid().column(1).collapseExpandButtons(false);

// enable buttons in the first column
chart.dataGrid().column(0).collapseExpandButtons(true);

// set the indent for nested labels in the first column
chart.dataGrid().column(0).depthPaddingMultiplier(20);
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_09{sample}

## Custom Columns

You can create custom data grid columns by combining {api:anychart.charts.Gantt#dataGrid}dataGrid(){api} with {api:anychart.core.ui.DataGrid#column}column(){api} and specifying indexes:

```
var newColumn_1 = chart.dataGrid().column(2);
var newColumn_2 = chart.dataGrid().column(3);
```

To configure a custom column, use methods of the {api:anychart.core.ui.DataGrid.Column}anychart.core.ui.DataGrid.Column{api} class, which are listed in the previous sections of this article.

### Project Chart

In the following sample, there is a [Project Gantt](../Project_Chart) chart with two default columns and custom one. The text of the custom column is formatted with the help of a token – see the [Project Tokens](#project_tokens) section.

```
// create and configure a custom data grid column
var newColumn = chart.dataGrid().column(2);
newColumn.width(90);
newColumn.title("Start");
newColumn.title().fontColor("#64b5f6");
newColumn.title().fontWeight(600);
newColumn.labels().fontColor("#64b5f6");
newColumn.labels().format("{%actualStart}{dateTimeFormat:dd MMM}");
newColumn.depthPaddingMultiplier(20);
newColumn.collapseExpandButtons(true);
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_10{sample}

### Resource Chart

In the sample below, there is a [Resource Gantt](../Resource_Chart) chart with two default columns and custom one.  The text of the custom column is formatted with the help of a token – see the [Resource Tokens](#resource_tokens) section.

```
// create and configure a custom data grid column
var newColumn = chart.dataGrid().column(2);
newColumn.width(90);
newColumn.title("Start");
newColumn.title().fontColor("#64b5f6");
newColumn.title().fontWeight(600);
newColumn.labels().fontColor("#64b5f6");
newColumn.labels().format("{%start}{dateTimeFormat:dd MMM}");
```

{sample :height 160}GANTT\_NEW\_Data\_Grid\_Columns\_11{sample}