{:index 1}
# Overview

The data grid is the part of the Gantt chart where names of its [elements](Elements) are displayed. Alternatively, you can display any other text – see [Columns: Text](Columns#text_\(labels\)).

The class of the data grid is {api:anychart.core.ui.DataGrid}anychart.core.ui.DataGrid{api}.

To access it, use {api:anychart.charts.Gantt#dataGrid}dataGrid(){api}.

## Articles

Articles in this section explain how to configure:

* [Appearance](Appearance) – the fill of rows, stroke of columns, etc.
* [Columns](Columns) – the title, text, and other settings of each column
* [Buttons](Buttons) – the expand / collapse buttons
* [Tooltips](Tooltips) – the data grid tooltips

## Enabling / Disabling

The data grid is enabled by default. To disable / enable it, pass `true` / `false` to {api:anychart.charts.Gantt#dataGrid}dataGrid(){api}:

```
chart.dataGrid(false);
```

{sample :height 255}GANTT\_NEW\_Data\_Grid\_Overview{sample}