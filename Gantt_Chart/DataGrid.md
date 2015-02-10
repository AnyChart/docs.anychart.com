# DataGrid

* [General Settings](#general_settings)
 * [Width](#width)
 * [Expand/Collapse](#expand/collapse)
* [Columns](#columns)
 * [Using Custom Fields][#using_custom_fields]
* [Visual Settings](#visual_settings)
 * [Interlaced mode](#interlaced_mode)

<br>Data Grid - is one of the main parts of Gantt Chart. It usually contains main data about tasks and resources of the project, it displays nesting (for a hierarchical model configuration).

## General Settings

By default, Gantt Chart displays two columns: rows counts and names of Gantt elements (tasks or resources).

### Width

You can define the width of Data Grid with {api:anychart.charts.Gantt#splitterPosition}**.splitterPosition()**{api} method:

```
//set width to 100
chart.splitterPosition(100);
```

<br>Or hide it if the {api:anychart.charts.Gantt#splitterPosition}**.splitterPosition()**{api} gets zero:

```
chart.splitterPosition(0);
```

<br>{sample :width 710 :height 180}GANTT\_Chart\_13{sample}

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

## Columns

As mentioned above every Gantt Chart has a predefined set of columns contains rows counts and elements names. It is possible to tune the visual appearance of data grid headers, e.g. set the custom title value:

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

<br>Also you can <b>add</b> new column using the {api:anychart.core.ui.DataGrid#column}**.column()**{api} method:

```
//create new column contains names
dataGrid.column(4).width(100).textFormatter(function(item) {
    return item.get('name');
  }).title().text('Resources');
```

<br> The sample below shows Resource Gantt Chart, note that the third column is created to show the start data value.
{sample :width 710 :height 190}GANTT\_Chart\_10{sample}

<br>The same for Project Gantt Chart. The next sample shows the datagrid with the actual start and actual end values.
{sample :width 710 :height 200}GANTT\_Chart\_11{sample}

### Using Custom Fields

<br>You also can create and display custom fields in data items:
```
    'id': '1',
    'name': 'Task 1',
    'owner': 'Anthony Quayle',
    'actualStart': Date.UTC(2008, 7, 9),
    'actualEnd': Date.UTC(2008, 7, 20)
```
<br>{sample :width 710 :height 180}GANTT\_Chart\_12{sample}

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