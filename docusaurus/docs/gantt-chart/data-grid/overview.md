---
sidebar_position: 1
---
# Overview

A data grid is a part of the Gantt chart where names of its [elements](../elements) are displayed. (Alternatively, you can display any other text - see [Columns: Text](columns#text-labels))).

The class of the data grid is {api:anychart.core.ui.DataGrid}anychart.core.ui.DataGrid{api} - use {api:anychart.charts.Gantt#dataGrid}dataGrid(){api} to access it.

Also, please note that the settings listed in this section can be applied both to [Project](../project-chart) and [Resource](../resource-chart) charts.

## Articles

Articles in this section explain how to configure:

* [Appearance](appearance) - the fill of rows, stroke of columns, etc.
* [Columns](columns) - the width, title, text, and other settings of columns
* [Buttons](buttons) - the expand / collapse buttons
* [Tooltips](tooltips) - the data grid tooltips

## Enabling / Disabling

The data grid is enabled by default. To disable or enable it, pass `false` / `true` to {api:anychart.charts.Gantt#dataGrid}dataGrid(){api}:

```
chart.dataGrid(false);
```

{sample :height 260}GANTT\_Data\_Grid\_Overview{sample}