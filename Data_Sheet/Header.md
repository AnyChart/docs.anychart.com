{:index 4}
# Header

The header is the row of column titles at the top of the grid. The {api:anychart.charts.DataSheet#header}header(){api} method returns the header controller. As in [Data](Data), a controller is a small object that holds the settings of one feature, and you call its methods to read and change those settings. Many features work this way: the header, sorting, filtering, search, selection, virtual scrolling, the clipboard, the export and the [saved layout](Export_and_Print#saved_layout).

The header controller has two settings:

* {api:anychart.core.dataSheet.Header#enabled}enabled(false){api} removes the header row
* {api:anychart.core.dataSheet.Header#height}height(){api} sets its height, 40 by default. If you set 0 or a value that is not a number, the grid uses 40

`header().height()` and `rowHeight()` are separate settings. `rowHeight()` does not touch the header.

**Set the header options before the first `draw()`.** `header().height()`, `header().enabled()`, {api:anychart.charts.DataSheet#headerGroup}headerGroup(){api} and {api:anychart.charts.DataSheet#removeHeaderGroup}removeHeaderGroup(){api} do not reach the grid on a later redraw. They reach it only when something else changes a column. This is one of the two exceptions to the redraw rule in [Quick Start](Overview#quick_start). The other one is in [Large Data Sets](Large_Data_Sets).

You can add a second level of titles above the columns with {api:anychart.charts.DataSheet#headerGroup}headerGroup(title, columns){api}. **Both arguments are required.** A call without the `columns` array throws an error:

```
// make the header row taller
chart.header().height(72);

// add a second level of titles above the columns
chart.headerGroup('Item', [0, 1]);
chart.headerGroup('Stock', [2, 3]);
```

A new group with a title that already exists replaces the old one. It does not add a second header group with the same title. {api:anychart.charts.DataSheet#headerGroups}headerGroups(){api} returns the current groups as `{title, columns}` objects, and {api:anychart.charts.DataSheet#removeHeaderGroup}removeHeaderGroup(title){api} deletes one.

{sample}DS\_Data\_Sheet\_08{sample}
