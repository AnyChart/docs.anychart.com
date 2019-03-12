{:index 3}
# Columns

## Overview

misc:

* {api:anychart.core.ui.DataGrid.Column}anychart.core.ui.DataGrid.Column{api}
* {api:anychart.core.ui.DataGrid#column}column(){api}

## Width

misc:

* [Basic Settings: Splitter](../Basic_Settings#splitter)
* {api:anychart.core.ui.DataGrid.Column#width()}width(){api}


```
// set the width of data grid columns
var dataGrid = chart.dataGrid();
dataGrid.column(0).width(25);
dataGrid.column(1).width(120);
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_01{sample}

## Title

* {api:anychart.core.ui.DataGrid.Column#title()}title(){api}


```
// configure the title of data grid columns
var dataGrid = chart.dataGrid();
dataGrid.column(0).title().enabled(false);
dataGrid.column(1).title().text("TASK");
dataGrid.column(1).title().fontColor("#64b5f6");
dataGrid.column(1).title().fontWeight(600);
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_02{sample}

## Text (Labels)

misc:

* {api:anychart.core.ui.DataGrid.Column#labels()}labels(){api}
* `linearIndex`, `{%linearIndex}`

### Tokens

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

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_03{sample}

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

{sample :height 200}GANTT\_NEW\_Data\_Grid\_Columns\_04{sample}

### Formatting Functions

* упомянуть поле `item`, но не в основном списке


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

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_05{sample}

```
// set the text of the first data grid column
var column_1 = chart.dataGrid().column(0);
column_1.labels().fontWeight(600);
column_1.labels().useHtml(true);
column_1.labels().format( function() {
  var children = this.item.numChildren();
  var index = this.linearIndex;
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

{sample :height 200}GANTT\_NEW\_Data\_Grid\_Columns\_06{sample}

## Buttons

* [Buttons](Buttons)
* {api:anychart.core.ui.DataGrid.Column#collapseExpandButtons()}collapseExpandButtons(){api}


```
// enable buttons on the first column
chart.dataGrid().column(0).collapseExpandButtons(true);

// disable buttons on the second column
chart.dataGrid().column(1).collapseExpandButtons(false);
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_07{sample}

## Custom Columns

* {api:anychart.core.ui.DataGrid#column}column(){api}


```
// create and configure a custom data grid column
var newColumn = chart.dataGrid().column(2);
newColumn.width(75);
newColumn.title("Start");
newColumn.title().fontColor("#64b5f6");
newColumn.title().fontWeight(600);
newColumn.labels().fontColor("#64b5f6");
newColumn.labels().format("{%actualStart}{dateTimeFormat:dd MMM}");
newColumn.collapseExpandButtons(true);
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Columns\_08{sample}