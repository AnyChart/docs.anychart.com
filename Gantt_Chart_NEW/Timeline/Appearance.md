{:index 2}
# Appearance

You can configure the [appearance](../../Appearance_Settings) of the timeline: set the fill of even and odd rows, the stroke of columns, etc.

See also the [Data Grid: Appearance](../Data_Grid/Appearance) and [Header: Appearance](Header#appearance) sections to learn how to configure the appearance of the data grid and the timeline header.

The [Basic Settings: Appearance](../Basic_Settings#rows_and_columns) section explains how to apply some appearance settings simultaneously to the timeline and data grid. Please note that this is the only way to set the **row stroke**.

Use the following methods to adjust the appearance of the timeline:

* {api:anychart.core.ui.Timeline#backgroundFill}backgroundFill(){api} to set the background fill
* {api:anychart.core.ui.Timeline#rowEvenFill}rowEvenFill(){api} and {api:anychart.core.ui.Timeline#rowOddFill}rowOddFill(){api} to set the fill of even and odd rows
* {api:anychart.core.ui.Timeline#rowFill}rowFill(){api}, {api:anychart.core.ui.Timeline#rowHoverFill}rowHoverFill(){api}, and {api:anychart.core.ui.Timeline#rowSelectedFill}rowSelectedFill(){api} to set the fill of rows when they are being hovered over / selected
* {api:anychart.core.ui.Timeline#columnStroke}columnStroke(){api} to set the stroke of columns


```
// configure the appearance of the timeline
var timeline = chart.getTimeline();
timeline.rowEvenFill("gray 0.3");
timeline.rowOddFill("gray 0.1");
timeline.rowHoverFill("#ffd54f 0.3");
timeline.rowSelectedFill("#ffd54f 0.3");
timeline.columnStroke(null);
```

{sample :height 220}GANTT\_NEW\_Timeline\_Appearance{sample}