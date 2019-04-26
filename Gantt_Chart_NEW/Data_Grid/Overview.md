{:index 1}
# Overview

A data grid is a part of the Gantt chart where names of its [elements](Elements) are displayed. (Alternatively, you can display any other text – see [Columns: Text](Columns#text_\(labels\))).

The class of the data grid is {api:anychart.core.ui.DataGrid}anychart.core.ui.DataGrid{api} – use {api:anychart.charts.Gantt#dataGrid}dataGrid(){api} to access it.

Also, please note that the settings listed in this section can be applied both to [Project](../Project_Chart) and [Resource](../Resource_Chart) charts.

## Articles

Articles in this section explain how to configure:

* [Appearance](Appearance) – the fill of rows, stroke of columns, etc.
* [Columns](Columns) – the width, title, text, and other settings of columns
* [Buttons](Buttons) – the expand / collapse buttons
* [Tooltips](Tooltips) – the data grid tooltips

## Enabling / Disabling

The data grid is enabled by default. To disable or enable it, pass `false` / `true` to {api:anychart.charts.Gantt#dataGrid}dataGrid(){api}:

```
chart.dataGrid(false);
```

{sample :height 260}GANTT\_NEW\_Data\_Grid\_Overview{sample}