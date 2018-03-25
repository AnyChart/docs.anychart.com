# Data Grid

## Overview

Data Grid - is one of the main parts of JavaScript Gantt Chart. It usually contains main data about tasks and resources of the project, it displays nesting (for a hierarchical model configuration).

## Columns

### Columns Set

By default, JS Gantt Chart displays two columns: rows counts and names of Gantt elements (tasks or resources).

{sample :width 690 :height 190}GANTT\_Basic\_Sample{sample}

The **set of columns** is set and defined using the {api:anychart.core.ui.DataGrid#column}column(){api} method:

```
//create new column contains names
dataGrid.column(4).width(100).format(function(item) {
    return item.get('name');
  }).title('Resources');
```

Just see simple code below. You can create new columns using this method and their ids can assume different values that do not have to be consecutive.
```
//this code in fact creates only two columns
var firstColumn = dataGrid.column(10);

var secondColumn = dataGrid.column(20);
```

For more information about the {api:anychart.core.ui.DataGrid.Column#format}format(){api} method see the [Text](#text) topic.

The sample below shows Resource Gantt Chart, note that the third column is created to display the start data value.

{sample :width 690 :height 190}GANTT\_Chart\_10{sample}

The same for Project Gantt Chart. The next sample shows the data grid with the actual start and actual end values.

{sample :width 690 :height 200}GANTT\_Chart\_11{sample}

You can create and display custom fields in data items:

```
'id': '1',
'name': 'Task 1',
'owner': 'Anthony Quayle',
'actualStart': Date.UTC(2008, 7, 9),
'actualEnd': Date.UTC(2008, 7, 20)
```

{sample :width 690 :height 170}GANTT\_Chart\_12{sample}

### Title

Each column has its own title, so it is possible to tune the visual appearance of data grid headers, e.g., set the custom title value:

```
//set title values
title.text("new column");
title.fontWeight("bold").fontStyle("italic");
title.hAlign("left");
```

### Text

Column content can be tuned as well as its title. The easiest way to manage column content is [using presets](./DataGrid_Column_Presets). The advanced one is {api:anychart.core.ui.DataGrid.Column#format}format(){api} method. It used to define a cell text value formatter, so you can pass your own custom function as an argument.
```
//create a column contains all IDs
column.format(function(item) {
    return item.get('id') + '';
});
```

Or it can be more complicated:

```
//create the third column
dataGrid.column(2).format(customColumnformat);

//define a custom content with actual start values
function customColumnformat(item){
    var start = item.get("actualStart");
    var end = item.get("actualEnd");
    var duration = end - start;
    var hours = duration/1000/60/60;
    if (hours>24){
        return hours + " hours <a style='color: #7c868e;'>(" + (hours/24).toFixed(0) + " days)<a>";
    }else{
        return hours + " hours";
    }
}
```

Here is a sample with the complex {api:anychart.core.ui.DataGrid.Column#format}format(){api}.

{sample :width 690 :height 220}GANTT\_Chart\_17{sample}

### Width

You should use the {api:anychart.core.ui.DataGrid.Column#width}width(){api} method for customizing the column width.

```
//set column width to 30
dataGrid.column(0).width(30);
```

## Visual Settings

These methods can be used to change the background color:

<table>
<tbody>
<tr>
<td>Method</td>
<td>Description</td>
</tr>
<tr>
<td>{api:anychart.core.ui.DataGrid#backgroundFill}backgroundFill(){api}</td>
<td>Allows to set background fill.</td>
</tr>
<tr>
<td>{api:anychart.core.ui.DataGrid#rowFill}rowFill(){api}</td>
<td>Used to collapse all tasks.</td>
</tr>
</tbody>
</table>

```
var dataGrid = chart.dataGrid();
dataGrid.backgroundFill('blue .4');
dataGrid.rowFill('green .2');
```

### Interlaced mode

By default, the odd and the even fields are differentiated by their fill. To change them you have to use the corresponding methods.

<table>
<tbody>
<tr>
<td>Method</td>
<td>Description</td>
</tr>
<tr>
<td>{api:anychart.core.ui.DataGrid#rowOddFill}rowOddFill(){api}</td>
<td>Used to set row odd fill.</td>
</tr>
<tr>
<td>{api:anychart.core.ui.DataGrid#rowEvenFill}rowEvenFill(){api}</td>
<td>Used to set row even fill.</td>
</tr>
</tbody>
</table>

```
var dataGrid = chart.dataGrid();

dataGrid.rowOddFill('#8a2be2 .2');
dataGrid.rowEvenFill('#8a2be2 .4');
```

Use these methods to change the rows fill color of the main chart plot:

<table>
<tbody>
<tr>
<td>Method</td>
<td>Description</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#rowOddFill}rowOddFill(){api}</td>
<td>Used to set row odd fill.</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#rowEvenFill}rowEvenFill(){api}</td>
<td>Used to set row even fill.</td>
</tr>
</tbody>
</table>

```
//get chart timeline link to change color
var timeline = chart.getTimeline();

timeline.rowEvenFill('green .4');
timeline.rowOddFill("#add8e6");
```

In the sample below the odd rows are colored with a solid fill as well as the even rows.
{sample :width 690 :height 190}GANTT\_Chart\_09{sample}

## General Settings

### Turning On/Off

By default Data Grid is turned on. If you need to show only timeline and timeline plot - you can turn Data Grid off using the {api:anychart.charts.Gantt#dataGrid}dataGrid(){api} with <b>false</b> as the argument:

```
//disable data grid
chart.dataGrid(false);
```

And here is a simple illustration of this idea:

{sample :width 690 :height 190}GANTT\_Chart\_15{sample}

### Data Grid Width

It is possible to configure your html5 Gantt Charts by simply dragging and dropping data grid splitter. Also you can define the width of Data Grid with {api:anychart.charts.Gantt#splitterPosition}splitterPosition(){api} method:

```
//set width to 100
chart.splitterPosition(100);
```

### Expand/Collapse

Data Grid supports hierarchical data representation, so if the data is complicated, the Data Grid will display expanded/collapsed icons next to each group header row. You are free to expand and collapse child groups to see more data.

{sample :width 690 :height 210}GANTT\_Chart\_08{sample}

Please note that it is also possible to configure the expand/collapse button settings using the {api:anychart.core.ui.DataGrid.Column#collapseExpandButtons}, collapseExpandButtons(){api} method.

```
column.collapseExpandButtons(false);
```

You can set the left padding in a cell depending on a tree data item's depth with {api:anychart.core.ui.DataGrid.Column#depthPaddingMultiplier}depthPaddingMultiplier(){api} method to to customize the data view.

```
column.depthPaddingMultiplier(8);
```

In the example below we have disabled the default appearance of the expand/collapse buttons in the second column and put them into the first.

{sample :width 690 :height 200}GANTT\_Chart\_14{sample}