# DataGrid

* [General Settings](#general_settings)
 * [Width](#width)
 * [Expand/Collapse](#expand/collapse)
 * [Columns](#columns)
* [Visual Settings](#visual_settings)
 * [Interlaced mode](#interlaced_mode)

Data Grid - is one of the main parts of Gantt Chart. It usually contains main data about tasks and resources of the project, it displays nesting (for a hierarchical model configuration).

## General Settings

By default, Gantt Chart displays two columns: rows counts and names of gantt elements (tasks or resources).

### Width

<br>You can define the width of Data Grid with {api:anychart.charts.Gantt#splitterPosition}**.splitterPosition()**{api} method:

```
//set width to 100
chart.splitterPosition(100);
```

Or hide it if the {api:anychart.charts.Gantt#splitterPosition}**.splitterPosition()**{api} gets zero:

```
chart.splitterPosition(0);
```

### Expand/Collapse

DataGrid supports hierarchical data representation, so if the data is complicated, the DataGrid will display expanded/collapsed icons next to each group header row. You are free to expand and collapse child groups to see more data.

{sample :width 710 :height 210}GANTT\_Chart\_08{sample}

### Columns

<br>It is possible to tune the visual appearance of data grid headers, e.g. set the custom title value:

```
var firstColumn = dataGrid.column(0);
firstColumn.title('#');
```

<br>Or customize the column width:

```
//set column width to 30
var firstColumn = dataGrid.column(0);
firstColumn.width(30);
```

<br>Column content is tuning as well as its title:

```
//create a column contains all IDs
column.textFormatter(function(item) {
    return item.get('id');
});
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

<br>In the sample below the odd rows are colored with a solid fill as well as the odd rows.
{sample :width 710 :height 210}GANTT\_Chart\_09{sample}