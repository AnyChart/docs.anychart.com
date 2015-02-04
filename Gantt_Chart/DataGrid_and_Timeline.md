# DataGrid and Timeline

* [DataGrid](#dtoverview)
 * [Overview](#dtoverview)
 * [General Settings](#dtgeneral)
 * [Visual Appearance](#visual)
* [Timeline](#tloverview)
 * [Timeline Overview](#tloverview)
 * [General Settings](#tlgeneral)

### DataGrid Overview

Data Grid - is one of the main parts of Gantt Chart. It usually contains main data about tasks and resources of the project, it displays nesting (for a hierarchical model configuration).

### General Settings

By default, Gantt Chart displays two columns: rows counts and names of gantt elements (tasks or resources). Although it allows to configure a view of each column:

 ```
 //get the first column by index
 var firstColumn = dataGrid.column(0);
 ```

<br>You can define the width of Data Grid with {api:anychart.charts.Gantt#splitterPosition}**.splitterPosition()**{api} method:

```
//set width to 100
chart.splitterPosition(100);
```

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
<br>
<b>ТУТ РЕЧЬ + ПРИМЕРЫ О СЛОЖНОМ ФОРМАТИРОВАНИИ КОЛОНОК. ну и допилить текст + пара примеров на всё вышесказанное</b>

### Visual Appearance

To change the background color these methods can be useful:

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

## Timeline

### Timeline Overview

Timeline is configured to cover most of the cases and can be used as is, without any additional setting.

### General Settings

про подобную заливку