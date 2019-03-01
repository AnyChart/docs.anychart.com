{:index 2}
# Appearance

You can configure the [appearance](../../Appearance_Settings) of the data grid: set the background and header fill, the stroke of columns, etc. It is possible to apply the same color to all rows or different colors to odd and even rows.

Use the following methods:

* {anychart.core.ui.DataGrid#backgroundFill}backgroundFill(){api} to set the background fill
* {anychart.core.ui.DataGrid#backgroundFill}backgroundFill(){api} to set the fill of the header
* {anychart.core.ui.DataGrid#rowFill}rowFill(){api} to set the fill of rows
* {anychart.core.ui.DataGrid#rowHoverFill}rowHoverFill(){api} to set the fill of rows when they are being hovered over
* {anychart.core.ui.DataGrid#rowSelectedFill}rowSelectedFill(){api} to set the fill of rows when they are being selected
* {anychart.core.ui.DataGrid#rowEvenFill}rowEvenFill(){api} to set the fill of even rows
* {anychart.core.ui.DataGrid#rowOddFill}rowOddFill(){api} to set the fill of odd rows
* {anychart.core.ui.DataGrid#columnStroke}columnStroke(){api} to set the stroke of columns

**Note 1:** See also the [Timeline: Appearance](../Timeline/Appearance) to learn how to configure the appearance of the timeline.

**Note 2:** The [Basic Settings: Appearance](../Basic_Settings#rows_and_columns) section explains how to apply some appearance settings simultaneously to the data grid and timeline. Please note that this is the only way to set the **row stroke**.

The sample below shows how to adjust the appearance of the data grid:

```
// configure the appearance of the data grid
var dataGrid = chart.dataGrid();
dataGrid.rowEvenFill("gray 0.3");
dataGrid.rowOddFill("gray 0.1");
dataGrid.rowHoverFill("#ffd54f 0.3");
dataGrid.rowSelectedFill("#ffd54f 0.3");
dataGrid.columnStroke("2 #64b5f6");
dataGrid.headerFill("#64b5f6 0.2");
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Appearance{sample}