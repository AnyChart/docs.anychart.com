{:index 1}
# Overview

The data grid is the part of the Gantt chart where names of its [elements](Elements) are displayed. Alternatively, you can display any other text – see [Columns: Text](Columns#text_\(labels\)).

The class of the data grid is {api:anychart.core.ui.DataGrid}anychart.core.ui.DataGrid{api} – use {api:anychart.charts.Gantt#dataGrid}dataGrid(){api} to access it.

## Articles

Articles in this section explain how to configure:

* [Appearance](Appearance) – the fill of rows, stroke of columns, etc.
* [Columns](Columns) – the width, title, text, and other settings of columns
* [Buttons](Buttons) – the expand / collapse buttons
* [Tooltips](Tooltips) – the data grid tooltips

Articles in other sections explain how to adjust:

* [Basic Settings: Splitter](../Basic_Settings#splitter) – the position of the splitter between the data grid and timeline.

Adjusting the the splitter position allows showing more or less of the data grid. Please note that the width of the data grid is defined by the sum of [its columns' widths](Columns#width).

## Enabling / Disabling

The data grid is enabled by default. To disable or enable it, pass `true` / `false` to {api:anychart.charts.Gantt#dataGrid}dataGrid(){api}:

```
chart.dataGrid(false);
```

{sample :height 260}GANTT\_NEW\_Data\_Grid\_Overview{sample}