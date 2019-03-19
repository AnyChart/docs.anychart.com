{:index 3}
# Columns

## Overview

Columns of the data grid are defined as instances of the {api:anychart.core.ui.DataGrid.Column}anychart.core.ui.DataGrid.Column{api} class.

To access a column, combine {api:anychart.charts.Gantt#dataGrid}dataGrid(){api} with {api:anychart.core.ui.DataGrid#column}column(){api} and specify its index:

```
var column_1 = chart.dataGrid().column(0);
```

The sections below explain how to configure default columns or create [custom columns](#custom_columns). Also, you can use column presets – see the [Column Presets](#column_presets) article.

## Enabling / Disabling

Passing `true` or `false` to the {api:anychart.core.ui.DataGrid.Column#enabled()}enabled(){api} method allows enabling or disabling a column:

```
// disable the first data grid column
chart.dataGrid().column(0).enabled(false);
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_01{sample}

## Width

To set the width of a column, call the {api:anychart.core.ui.DataGrid.Column#width()}width(){api} method.

**Note:** The overall width of the data grid depends on the [width of its columns](Columns#width). Also, you can adjust the position of the splitter between the data grid and timeline – see [Basic Settings: Splitter](../Basic_Settings#splitter).

```
// set the width of data grid columns
chart.dataGrid().column(0).width(25);
chart.dataGrid().column(1).width(130);
```

{sample :height 260}GANTT\_NEW\_Data\_Grid\_Columns\_02{sample}

## Title

To configure [titles](../../Common_Settings/Title) of columns, use the {api:anychart.core.ui.DataGrid.Column#title}title(){api} method:

```
// configure the title of the first data grid column
var column_1 = chart.dataGrid().column(0);
column_1.title().enabled(false);

// configure the title of the second data grid column
var column_2 = chart.dataGrid().column(1);
column_2.title().text("TASK");
column_2.column(1).fontColor("#64b5f6");
column_2.column(1).fontWeight(600);
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_03{sample}

## Text (Labels)

misc:

* {api:anychart.core.ui.DataGrid.Column#labels()}labels(){api} + {api:anychart.core.ui.LabelsFactory#format}format(){api}
* `linearIndex`, `{%linearIndex}`

### Tokens

#### Project Tokens

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

misc:

* упомянуть поле `item`, но не в основном списке

#### Project Fields

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

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_06{sample}

#### Resource Fields

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

{sample :height 200}GANTT\_NEW\_Data\_Grid\_Columns\_07{sample}

## Indentation

misc:

* In case there are hierarchical relationships...
* ... set the indent for nested labels ...
* {api:anychart.core.ui.DataGrid.Column#depthPaddingMultiplier}depthPaddingMultiplier(){api}

In the sample below the indent in the second column is set to 60. The first column is left with the default indent of 0.

```
// set the indent for nested labels in the second column
chart.dataGrid().column(1).depthPaddingMultiplier(60);
```

{sample :height 260}GANTT\_NEW\_Data\_Grid\_Columns\_08{sample}

## Buttons

misc:

* {api:anychart.core.ui.DataGrid.Column#collapseExpandButtons()}collapseExpandButtons(){api}
* [Indentation](#indentation) + {api:anychart.core.ui.DataGrid.Column#depthPaddingMultiplier}depthPaddingMultiplier(){api}
* [Buttons](Buttons)
* [Basic Settings: Navigation](../Basic_Settings#navigation)


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

misc:

* {api:anychart.core.ui.DataGrid#column}column(){api}
* (?) [Basic Settings: Splitter](../Basic_Settings#splitter)

### Project Chart

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