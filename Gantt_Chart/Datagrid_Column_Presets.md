{:index 1}
DataGrid Column Presets
===========
  
Data Grid - is one of the main parts of Gantt Chart. It usually contains main data about tasks and resources of the project, it displays nesting (for a hierarchical model configuration).

## Column Formatting

DataGrid columns can contain different types of information. You can format each column according to your needs and desires. Use **.setColumnFormat()** to define information field in your data set and data type for the column. You can find all possible data formats in {api:anychart.enums.ColumnFormats}**API**{api}. 

```
  var chart = anychart.ganttProject();
  chart.data(data);
  
  var column = chart.column(3)
  column.setColumnFormat("actualStart","dateIso8601")
```
