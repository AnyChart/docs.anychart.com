{:index 13}
# Export and Print

The grid can write its rows to a file and send them to the printer. The export methods produce a CSV or a JSON file, and the print method opens the print dialog of the browser. All of them work on the rows the user sees right now, so the result matches the screen after a sort or a filter.

Reach for this page when a user needs the table outside the browser: a spreadsheet, a data file for another tool, or a sheet of paper. The page shows how to export CSV and JSON, how to print, which methods do **not** export the grid, and how to save the layout so a user finds the table as they left it.

## Export Controller

{api:anychart.charts.DataSheet#export}export(){api} returns the export controller. The controller has one method per format: `csv()` and `json()`.

The CSV export writes the text you see in the cells, and the JSON export writes the raw data values. A cell showing `$1200` exports as `$1200` to CSV and as `1200` to JSON. See [Data Types and Formats](Columns#data_types_and_formats) for what the cells show.

## CSV Export

{api:anychart.core.dataSheet.Export#csv}csv(options){api} does two things at once: it returns the CSV text **and** it starts a browser download. Its options are:

* `separator` - `,` by default
* `includeHeaders` - true by default. The grid writes the column title
* `filename` - `data-sheet-export` by default. The grid adds `.csv`
* `filteredOnly` - true by default. The grid exports only the rows that the current sorting and filtering leave on screen

Both exports clean the `filename`. They keep Latin letters, digits, underscore, dot, dash and space, and remove every other character. So `'Q1 report/2026'` gives the file `Q1 report2026.csv`. Accented and non-Latin letters are removed as well, so write the name in Latin letters.

The CSV export quotes a field that holds the separator, a quote or a line break. It also changes a value that starts with `=`, so a spreadsheet does not run it as a formula. The JSON export does neither.

## JSON Export

{api:anychart.core.dataSheet.Export#json}json(options){api} works the same way: it returns the JSON text and starts a browser download. Its options are `filename`, `filteredOnly` and `pretty` (true by default).

A JSON row holds only the fields that have a column. The grid drops the data properties with no column. See [Defining Columns](Columns#defining_columns).

## Printing

{api:anychart.charts.DataSheet#print}print(options){api} opens the print dialog of the browser. Its options are:

* `title` - a heading above the table
* `orientation` - `'landscape'`. Any other value gives portrait
* `pageSize` - `'A4'`, `'Letter'` and so on. The grid checks only the characters. If a value holds anything but letters, digits and spaces, the grid uses A4 instead. If a value looks correct, the grid passes it to the browser. A browser that does not know that size then uses its own default page size

The printed table always follows the current [sorting](Sorting) and [filtering](Filtering_and_Search).

## SVG Export Methods

This is not the AnyChart Exports module. The Data Sheet still has the shared `saveAsPng()`, `saveAsPdf()`, `saveAsSvg()` and `toSvg()` methods. You will find them on the object, but they do not export the grid. The grid is HTML. These methods save the hidden SVG drawing area behind the grid, and that area is empty. Use `export().csv()`, `export().json()` or `print()` instead.

## Export and Print in Practice

The three methods work on a grid that is already drawn, so a button can call each of them directly:

```
// the export follows the current filter and sorting
chart.filter().filterBy('category', {type: 'text', mode: 'exact', value: 'Tech'});
chart.draw();

// csv() returns the text AND downloads the file
// the CSV holds the text shown in the cell: $1200
out.textContent = chart.export().csv({filename: 'products', separator: ','});

// json() returns the text AND downloads the file, with the raw price 1200
chart.export().json({filename: 'products', pretty: true});

// print() opens the print dialog of the browser
chart.print({title: 'Tech products', orientation: 'landscape', pageSize: 'A4'});
```

Use the buttons in the sample below to export the four filtered Tech rows: the panel shows the CSV text, with the price as the cell shows it.

{sample}DS\_Data\_Sheet\_19{sample}

## Saved Layout

A layout is everything the user changed around the data: the column sizes, the column order, the sorting and the filter. The grid can write that layout out as JSON, or store it in the browser and read it back on the next visit.

### Settings as JSON

{api:anychart.charts.DataSheet#toJson}toJson(){api} writes the settings of the grid as JSON, and `anychart.fromJson()` reads the `'data-sheet'` type back. The JSON holds the settings and the column declarations, but not the data. `anychart.fromJson()` builds a new grid with the same columns and no rows, so pass the rows to `data()` before you draw it.

### The State Controller

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

### State Methods

{api:anychart.core.dataSheet.State#save}save(key){api} takes one snapshot, {api:anychart.core.dataSheet.State#restore}restore(key){api} applies one, {api:anychart.core.dataSheet.State#clear}clear(key){api} deletes it, and {api:anychart.core.dataSheet.State#autoSave}autoSave(key){api} saves again after every sort, filter, column resize or column reorder. `autoSave(key, false)` switches that off and keeps what is already stored.

### Storage Keys and Limits

The real key in `localStorage` is `'anychart-data-sheet-' + key`, so two grids on one page need two different keys. Where `localStorage` is not available, or full, all of these methods do nothing and report nothing.

This section has no sample, because a saved layout only shows its value on the **second** visit, and a sample starts fresh every time.
