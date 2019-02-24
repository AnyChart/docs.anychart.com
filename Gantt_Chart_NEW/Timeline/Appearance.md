{:index 2}
# Appearance

misc:

* [Basic Settings: Rows and Columns](../Basic_Settings#rows_and_columns)
* (?) [Data Grid](../Data_Grid)

methods:

* {api:anychart.core.ui.Timeline#backgroundFill}backgroundFill(){api} to set the background fill
* {api:anychart.core.ui.Timeline#columnStroke}columnStroke(){api} to set the stroke of columns
* {api:anychart.core.ui.Timeline#rowFill}rowFill(){api}, {api:anychart.core.ui.Timeline#rowHoverFill}rowHoverFill(){api}, and {api:anychart.core.ui.Timeline#rowSelectedFill}rowSelectedFill(){api} to set the fill of rows
* {api:anychart.core.ui.Timeline#rowEvenFill}rowEvenFill(){api} and {api:anychart.core.ui.Timeline#rowOddFill}rowOddFill(){api} to set the fill of even and odd rows


```
// configure the appearance of the timeline
var timeline = chart.getTimeline();
timeline.columnStroke(null);
timeline.rowEvenFill("gray 0.3");
timeline.rowOddFill("gray 0.1");
timeline.rowHoverFill("#ffd54f 0.3");
timeline.rowSelectedFill("#ffd54f 0.3");
```

{sample :height 220}GANTT\_NEW\_Timeline\_Appearance{sample}