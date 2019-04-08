{:index 2}
# Appearance

You can configure the [appearance](../../Appearance_Settings) of the data grid: set the background and header fill, the stroke of columns, etc. It is possible to apply the same color to all rows or different colors to odd and even rows.

Combine {api:anychart.charts.Gantt#dataGrid}dataGrid(){api} with the following methods:

* {api:anychart.core.ui.DataGrid#backgroundFill}backgroundFill(){api} to set the background fill
* {api:anychart.core.ui.DataGrid#headerFill}headerFill(){api} to set the fill of the header
* {api:anychart.core.ui.DataGrid#rowFill}rowFill(){api} to set the fill of rows
* {api:anychart.core.ui.DataGrid#rowHoverFill}rowHoverFill(){api} to set the fill of rows when they are being hovered over
* {api:anychart.core.ui.DataGrid#rowSelectedFill}rowSelectedFill(){api} to set the fill of rows when they are being selected
* {api:anychart.core.ui.DataGrid#rowEvenFill}rowEvenFill(){api} to set the fill of even rows
* {api:anychart.core.ui.DataGrid#rowOddFill}rowOddFill(){api} to set the fill of odd rows
* {api:anychart.core.ui.DataGrid#columnStroke}columnStroke(){api} to set the stroke of columns

**Note 1:** See also [Timeline: Appearance](../Timeline/Appearance) to learn how to configure the appearance of the timeline.

**Note 2:** The [Basic Settings: Background](../Basic_Settings#background) and [Basic Settings: Rows and Columns](../Basic_Settings#rows_and_columns) sections explain how to apply some appearance settings simultaneously to the data grid and timeline. Please note that this is the only way to set the **row stroke**.

The sample below shows how to adjust the appearance of the data grid:

```
// configure the visual settings of the data grid
var dataGrid = chart.dataGrid();
dataGrid.rowEvenFill("gray 0.3");
dataGrid.rowOddFill("gray 0.1");
dataGrid.rowHoverFill("#ffd54f 0.3");
dataGrid.rowSelectedFill("#ffd54f 0.3");
dataGrid.columnStroke("2 #64b5f6");
dataGrid.headerFill("#64b5f6 0.2");
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Appearance{sample}