# DataGrid

* [Columns](#columns)
 * [Columns Set](#columns_set)
 * [Column Title](#column_title)
 * [Column Content](#column_content)
 * [Column Width](#column_width)
* [Visual Settings](#visual_settings)
 * [Interlaced mode](#interlaced_mode)
* [General Settings](#general_settings)
 * [DataGrid Width](#datagrid_width)
 * [Expand/Collapse](#expand/collapse)

<br>Data Grid - is one of the main parts of Gantt Chart. It usually contains main data about tasks and resources of the project, it displays nesting (for a hierarchical model configuration).

## Columns

### Columns Set

By default, Gantt Chart displays two columns: rows counts and names of Gantt elements (tasks or resources).
{sample :width 710 :height 190}GANTT\_Basic\_Sample{sample}

<br>Also you can <b>add</b> new column using the {api:anychart.core.ui.DataGrid#column}**.column()**{api} method:

```
//create new column contains names
dataGrid.column(4).width(100).textFormatter(function(item) {
    return item.get('name');
  }).title().text('Resources');
```

<br>For more information about the {api:anychart.core.ui.DataGrid.Column#textFormatter}**textFormatter()**{api} method see the <b>Content</b> topic.

<br> The sample below shows Resource Gantt Chart, note that the third column is created to display the start data value.
{sample :width 710 :height 190}GANTT\_Chart\_10{sample}

<br>The same for Project Gantt Chart. The next sample shows the datagrid with the actual start and actual end values.
{sample :width 710 :height 200}GANTT\_Chart\_11{sample}

<br>You can create and display custom fields in data items:
```
    'id': '1',
    'name': 'Task 1',
    'owner': 'Anthony Quayle',
    'actualStart': Date.UTC(2008, 7, 9),
    'actualEnd': Date.UTC(2008, 7, 20)
```
<br>{sample :width 710 :height 180}GANTT\_Chart\_12{sample}

### Column Title

Each column has its own title, so it is possible to tune the visual appearance of data grid headers, e.g. set the custom title value:

```
//set title values
title.text("new column");
title.fontWeight('bold').fontStyle('italic');
title.hAlign('left');
```

### Column Content

Column content can be tuned as well as its title with the {api:anychart.core.ui.DataGrid.Column#textFormatter}**textFormatter()**{api} method. It used to define a cell text value formatter, so you can pass your own custom function as an argument.
```
//create a column contains all IDs
column.textFormatter(function(item) {
    return item.get('id');
});
```

<br>Or it can be more complicated:

```
//create the third column
dataGrid.column(2).textFormatter(customColumnTextFormatter);

//define a custom content with actual start values
function customColumnTextFormatter(item)
{
  var field = item.get(anychart.enums.GanttDataFields.ACTUAL_START);

  var actualStart = new Date(field);
  return formatDate(actualStart.getUTCMonth() + 1) + '/' +
      formatDate(actualStart.getUTCDate()) + '/' + actualStart.getUTCFullYear();
}
```

### Column Width

<br>You should use the <b>.width()</b> method for customizing the column width.

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
<td>{api:anychart.core.ui.DataGrid#backgroundFill}**backgroundFill()**{api}</td>
<td>Allows to set background fill.</td>
</tr>
<tr>
<td>{api:anychart.core.ui.DataGrid#rowFill}**rowFill()**{api}</td>
<td>Used to collapse all tasks.</td>
</tr>
</tbody>
</table>

<br>
```
var dataGrid = chart.getDataGrid();
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
<td>{api:anychart.core.ui.DataGrid#rowOddFill}**rowOddFill()**{api}</td>
<td>Used to set row odd fill.</td>
</tr>
<tr>
<td>{api:anychart.core.ui.DataGrid#rowEvenFill}**rowEvenFill()**{api}</td>
<td>Used to set row even fill.</td>
</tr>
</tbody>
</table>

<br>
```
var dataGrid = chart.getDataGrid();

dataGrid.rowOddFill('#8a2be2 .2');
dataGrid.rowEvenFill('#8a2be2 .4');
```

<br>Use these methods to change the rows fill color of the main chart plot:

<table>
<tbody>
<tr>
<td>Method</td>
<td>Description</td>
</tr>
<tr>
<td>{api:anychart.core.gantt.Timeline#rowOddFill}**rowOddFill()**{api}</td>
<td>Used to set row odd fill.</td>
</tr>
<tr>
<td>{api:anychart.core.gantt.Timeline#rowEvenFill}**rowEvenFill()**{api}</td>
<td>Used to set row even fill.</td>
</tr>
</tbody>
</table>

<br>
```
//get chart timeline link to change color
var timeline = chart.getTimeline();

timeline.rowEvenFill('green .4');
timeline.rowOddFill("#add8e6");
```

<br>In the sample below the odd rows are colored with a solid fill as well as the even rows.
{sample :width 710 :height 210}GANTT\_Chart\_09{sample}

## General Settings

### DataGrid Width

You can define the width of Data Grid with {api:anychart.charts.Gantt#splitterPosition}**.splitterPosition()**{api} method:

```
//set width to 100
chart.splitterPosition(100);
```

### Expand/Collapse

DataGrid supports hierarchical data representation, so if the data is complicated, the DataGrid will display expanded/collapsed icons next to each group header row. You are free to expand and collapse child groups to see more data.

{sample :width 710 :height 210}GANTT\_Chart\_08{sample}

<br>Please note that expanded/collapsed buttons are located in the second DataGrid column near the group element name. Their appearance doesn't depend on the "name" field in data item, so you can leave this field empty or just set column settings to show only the buttons.

```
dataGrid.column(1).width(10).textFormatter(function(item) {
    return '';
  });
```

<br>{sample :width 710 :height 210}GANTT\_Chart\_14{sample}