{:index 1}
# Overview

The data grid is the part of the Gantt chart where names of its [elements](Elements) are displayed. Alternatively, you can display any other text – see [Columns: Text](Columns#text_\(labels\)).

The class of the data grid is {api:anychart.core.ui.DataGrid}anychart.core.ui.DataGrid{api} – use {api:anychart.charts.Gantt#dataGrid}dataGrid(){api} to access it.

## Articles

Articles in this section explain how to configure:

* [Appearance](Appearance) – the fill of rows, stroke of columns, etc.
* [Columns](Columns) – the title, text, and other settings of each column
* [Buttons](Buttons) – the expand / collapse buttons
* [Tooltips](Tooltips) – the data grid tooltips

**Note:** The overall width of the data grid depends on the [width of its columns](Columns#width). Also, you can adjust the position of the splitter between the data grid and timeline – see [Basic Settings: Splitter](../Basic_Settings#splitter).

## Enabling / Disabling

The data grid is enabled by default. To disable or enable it, pass `true` / `false` to {api:anychart.charts.Gantt#dataGrid}dataGrid(){api}:

```
chart.dataGrid(false);
```

{sample :height 260}GANTT\_NEW\_Data\_Grid\_Overview{sample}