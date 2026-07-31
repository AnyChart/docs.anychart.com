{:index 13}
# Export and Print

{api:anychart.charts.DataSheet#export}export(){api} returns the export controller.

{api:anychart.core.dataSheet.Export#csv}csv(options){api} does two things at once: it returns the CSV text **and** it starts a browser download. Its options are:

* `separator` - `,` by default
* `includeHeaders` - true by default. The grid writes the column title
* `filename` - `data-sheet-export` by default. The grid adds `.csv`
* `filteredOnly` - true by default. The grid exports only the rows that the current sorting and filtering leave on screen

{api:anychart.core.dataSheet.Export#json}json(options){api} only downloads. It returns nothing. Its options are `filename`, `filteredOnly` and `pretty` (true by default).

```
// the export follows the current filter and sorting
chart.filter().filterBy('category', {type: 'text', mode: 'exact', value: 'Tech'});

// csv() returns the text AND downloads the file
// the exported price is the raw 1200, not the $1200 shown in the cell
var text = chart.export().csv({filename: 'products', separator: ','});

// json() only downloads, it returns nothing
chart.export().json({filename: 'products', pretty: true});

// print() opens the print dialog of the browser
chart.print({title: 'Tech products', orientation: 'landscape', pageSize: 'A4'});
```

Both exporters write the **raw** data values, not the text you see in the cells. A cell showing `$1200` exports as `1200`. If you need the displayed text, format the data before it reaches the grid.

A JSON row holds only the fields that have a column. The grid drops the data properties with no column.

The CSV export also cleans the `filename`. It keeps letters, digits, underscore, dot, dash and space, and removes every other character. So `'Q1 report/2026'` gives the file `Q1 report2026.csv`. The JSON export does not clean it - pass a safe name yourself.

The CSV export quotes a field that holds the separator, a quote or a line break. It also changes a value that starts with `=`, so a spreadsheet does not run it as a formula. The JSON export does neither.

{api:anychart.charts.DataSheet#print}print(options){api} opens the print dialog of the browser. Its options are:

* `title` - a heading above the table
* `orientation` - `'landscape'`. Any other value gives portrait
* `pageSize` - `'A4'`, `'Letter'` and so on. The grid checks only the characters. If a value holds anything but letters, digits and spaces, the grid uses A4 instead. If a value looks correct, the grid passes it to the browser. A browser that does not know that size then uses its own default page size

Printing always follows the current sorting and filtering.

This is not the AnyChart Exports module. The Data Sheet still has the shared `saveAsPng()`, `saveAsPdf()`, `saveAsSvg()` and `toSvg()` methods. You will find them on the object, but they do not export the grid. The grid is HTML. These methods save the hidden SVG drawing area behind the grid, and that area is empty. Use `export().csv()`, `export().json()` or `print()` instead.

{sample}DS\_Data\_Sheet\_19{sample}

## Saved Layout

{api:anychart.charts.DataSheet#toJson}toJson(){api} writes the settings of the grid as JSON, and `anychart.fromJson()` reads the `'data-sheet'` type back. The JSON holds the settings only. Build the data and the columns in code first, then apply the saved settings on top.

The {api:anychart.charts.DataSheet#state}state(){api} controller writes the current layout into the `localStorage` of the browser and reads it back, so a user finds the table as they left it. The snapshot holds the column widths, the pinned flags, the column order, the sorting, the filter and the selection mode. When a hierarchy is active, it also holds the open and closed groups. It does **not** hold the data or the column declarations. Build those in code first, then restore.

```
// declare the columns first: restore only matches the columns that exist
chart.column(0, {field: 'product', title: 'Product', width: 200});
chart.column(1, {field: 'price',   title: 'Price',   width: 130, dataType: 'number'});

chart.container('container');
chart.draw();

// bring back what this user saw last time
chart.state().restore('products-grid');
chart.draw();

// from now on, save again after every sort, filter, resize or reorder
chart.state().autoSave('products-grid');
```

{api:anychart.core.dataSheet.State#save}save(key){api} takes one snapshot, {api:anychart.core.dataSheet.State#restore}restore(key){api} applies one, {api:anychart.core.dataSheet.State#clear}clear(key){api} deletes it, and {api:anychart.core.dataSheet.State#autoSave}autoSave(key){api} saves again after every change. `autoSave(key, false)` switches that off and keeps what is already stored.

The real key in `localStorage` is `'anychart-datasheet-' + key`, so two grids on one page need two different keys. Where `localStorage` is not available, or full, all of these methods do nothing and report nothing. `restore()` does not redraw the grid - call `draw()` after it.

This section has no sample, because a saved layout only shows its value on the **second** visit, and a sample starts fresh every time.
