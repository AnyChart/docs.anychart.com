{:index 2}
# Appearance

You can configure the [appearance](../../Appearance_Settings) of the timeline: set the background fill, the stroke of columns, etc. It is possible to apply the same color to all rows or different colors to odd and even rows.

Combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} with the following methods:

* {api:anychart.core.ui.Timeline#backgroundFill}backgroundFill(){api} to set the background fill
* {api:anychart.core.ui.Timeline#rowFill}rowFill(){api} to set the fill of rows
* {api:anychart.core.ui.Timeline#rowHoverFill}rowHoverFill(){api} to set the fill of rows when they are being hovered over
* {api:anychart.core.ui.Timeline#rowSelectedFill}rowSelectedFill(){api} to set the fill of rows when they are being selected
* {api:anychart.core.ui.Timeline#rowEvenFill}rowEvenFill(){api} to set the fill of even rows
* {api:anychart.core.ui.Timeline#rowOddFill}rowOddFill(){api} to set the fill of odd rows
* {api:anychart.core.ui.Timeline#columnStroke}columnStroke(){api} to set the stroke of columns

**Note 1:** See also the [Data Grid: Appearance](../Data_Grid/Appearance) and [Header: Appearance](Header#appearance) sections to learn how to configure the appearance of the data grid and header.

**Note 2:** The [Basic Settings: Background](../Basic_Settings#background) and [Basic Settings: Rows and Columns](../Basic_Settings#rows_and_columns) sections explain how to apply some appearance settings simultaneously to the data grid and timeline. Please note that this is the only way to set the **row stroke**.

The sample below shows how to adjust the appearance of the timeline:

```
// configure the visual settings of the timeline
var timeline = chart.getTimeline();
timeline.rowEvenFill("gray 0.3");
timeline.rowOddFill("gray 0.1");
timeline.rowHoverFill("#ffd54f 0.3");
timeline.rowSelectedFill("#ffd54f 0.3");
timeline.columnStroke(null);
```

{sample :height 220}GANTT\_NEW\_Timeline\_Appearance{sample}