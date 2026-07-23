{:index 0}
# Data Sheet

## Overview

A Data Sheet is an interactive table. It shows your rows in columns. The user can sort the rows, filter them, search them and edit the cells. The user can also group the rows, and resize, reorder or pin the columns. Pinning keeps a column at the edge of the table while the other columns scroll. You can also do all of this from code.

The Data Sheet draws HTML elements. It does not draw SVG. It is the only AnyChart type that works this way. This one fact explains all the other differences on this page. Cells are `<div>` elements with CSS classes. So you can style them in your own stylesheet, and find them with `querySelector()`.

Because it is not an SVG chart, it is not built on the common chart class. It has no `title()`, no `legend()`, no `tooltip()`, no `credits()`, no `animation()` and no `background()`. Read [What Is Not Supported](#what_is_not_supported) before you look for them.

It also does one thing no chart can do. A screen reader can read it as a real table, because a Data Sheet is built from real HTML with ARIA roles. ARIA roles are extra HTML attributes that tell a screen reader what each element is. See [Accessibility](#accessibility).

This article calls the table on your page **the grid**. That is only a short name for the Data Sheet.

Use a Data Sheet to show the numbers behind a chart, or as a table on its own.

Do not confuse it with the [Gantt data grid](../Gantt_Chart/Data_Grid/Overview). That one is a component inside a Gantt chart and has a different API.

This article shows how to make a Data Sheet and how to set its options. The table below is a quick overview:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Data Sheet](../Quick_Start/Modules#data_sheet)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.DataSheet}anychart.charts.DataSheet{api}</td></tr>
<tr><td>Constructor</td><td>{api:anychart#dataSheet}anychart.dataSheet(){api}</td></tr>
<tr><td>Chart Type</td><td>"data-sheet"</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Format</td><td>Array of row objects</td></tr>
<tr><td>Column Binding</td><td>[field](#defining_columns)</td></tr>
<tr><td>Tree Data</td><td>[children, or id / parent](#tree_data) - always fully open</td></tr>
<tr><th colspan=2>RENDERING</th></tr>
<tr><td>Output</td><td>HTML DOM (not SVG)</td></tr>
<tr><td>Stylesheet</td><td>Required - see [Modules and Styles](#modules_and_styles)</td></tr>
<tr><td>Accessibility</td><td>[ARIA grid roles](#accessibility)</td></tr>
<tr><th colspan=2>FEATURES</th></tr>
<tr><td>Sorting</td><td>[sorting()](#sorting)</td></tr>
<tr><td>Filtering</td><td>[filter()](#filtering)</td></tr>
<tr><td>Search</td><td>[search()](#search)</td></tr>
<tr><td>Selection</td><td>[selection()](#selection)</td></tr>
<tr><td>Cell Editing</td><td>[cellEditor()](#cell_editing)</td></tr>
<tr><td>Grouping</td><td>[groupBy()](#grouping)</td></tr>
<tr><td>Large Data Sets</td><td>[virtualScroll()](#large_data_sets)</td></tr>
<tr><td>Copy and Paste</td><td>[clipboard()](#copy_and_paste)</td></tr>
<tr><td>Export</td><td>[export()](#export_and_print)</td></tr>
<tr><td>Saved Layout</td><td>[state()](#saved_layout)</td></tr>
<tr><th colspan=2>NOT SUPPORTED</th></tr>
<tr><td>Title, Legend, Tooltip</td><td>N/A - see [What Is Not Supported](#what_is_not_supported)</td></tr>
<tr><td>Credits, Animation, Background</td><td>N/A - see [What Is Not Supported](#what_is_not_supported)</td></tr>
<tr><td>Custom Cell Content</td><td>N/A - a cell holds plain text, see [Data Types and Formats](#data_types_and_formats)</td></tr>
<tr><td>Hiding a Column</td><td>N/A - see [What Is Not Supported](#what_is_not_supported)</td></tr>
<tr><td>Date Filter</td><td>N/A - text, number and boolean only, see [Filtering](#filtering)</td></tr>
<tr><td>Closing Tree Rows</td><td>N/A in this release - groups do close, see [Tree Data](#tree_data)</td></tr>
<tr><td>Detail Rows</td><td>N/A in this release - see [What Is Not Supported](#what_is_not_supported)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Working with Data](../Working_with_Data/Overview)</td></tr>
<tr><td></td><td>[Gantt Data Grid](../Gantt_Chart/Data_Grid/Overview)</td></tr>
</table>

## Modules and Styles

The Data Sheet is a separate module. Load the [Core](../Quick_Start/Modules#core) module first, then the [Data Sheet](../Quick_Start/Modules#data_sheet) module:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-data-sheet.min.js"></script>
```

The big all-in-one bundle `anychart-bundle.min.js` is **not** enough on its own. It holds only a small placeholder for this type. If you call `anychart.dataSheet()` with the bundle alone, that placeholder throws an error and tells you to load the module. If you already use the bundle, add `anychart-data-sheet.min.js` after it. The module then replaces the placeholder and everything works.

The Data Sheet also uses three stylesheets:

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/data-sheet.css" />
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/anychart-ui.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/fonts/css/anychart-font.min.css" />
```

The first file is the one that draws the grid. It holds every `anychart-ds-*` rule - the header, the row heights, the cell padding, the cell borders, the hover and selection colors, the group indent. Every other AnyChart type draws SVG and needs no stylesheet at all, but this one draws `<div>` elements. So without this file the grid still appears and still works, and still looks like plain unstyled text.

The second file is the AnyChart UI stylesheet, which the [context menu](#context_menu) needs. The third file holds the AnyChart icon font, which draws the small icons inside that menu. Without the font, every menu row shows an empty space instead of its icon.

The grid also needs a container element with a height greater than zero:

```
<style>
    html, body, #container { width: 100%; height: 100%; margin: 0; padding: 0; }
</style>

<div id="container"></div>
```

Every live sample on this page uses exactly these two script tags, these two link tags and this container. This section has no sample of its own, because a sample cannot show you its own `<head>`.

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Data Sheet, use the {api:anychart#dataSheet}anychart.dataSheet(){api} constructor. Pass a plain array of row objects. Then set the container with `container()` and draw the grid with {api:anychart.charts.DataSheet#draw}draw(){api}:

```
// create data
var data = [
  {id: 1, product: "Laptop", category: "Tech", price: 1200, stock: 34, status: "In stock"},
  {id: 2, product: "Chair", category: "Office", price: 150, stock: 120, status: "In stock"},
  {id: 3, product: "Monitor", category: "Tech", price: 300, stock: 58, status: "In stock"},
  {id: 4, product: "Desk", category: "Office", price: 450, stock: 12, status: "Low"}
];

// create a data sheet
var chart = anychart.dataSheet(data);

// set the container id
chart.container("container");

// initiate drawing the data sheet
chart.draw();
```

You do not have to declare the columns. With no setup the grid makes one column for each key of the first row object. Six keys give six columns, and {api:anychart.charts.DataSheet#columnCount}columnCount(){api} returns 6. The grid also builds the titles from the keys: `id` becomes `Id`, `product` becomes `Product`. Every column is 150 px wide by default.

An automatic column also gets an automatic data type. That is why `1200` appears as `1,200` in the sample below. This is **not** true once you declare the columns yourself - see [Data Types and Formats](#data_types_and_formats).

The grid is interactive from the start. Click a header to sort. Drag the right edge of a header cell to resize the column. Hover a row to highlight it. Right-click a cell to open the context menu.

Three rules apply to every Data Sheet on this page:

* **Give the container a real height.** The grid fills its container. If the parent element has a height of zero, the scrolling area also gets no height. The grid then builds only a few rows, inside a box that is almost invisible. A container with `height: 100%` inside a page that has a height is fine.
* **Settings need a redraw.** A setting you apply after the first `draw()` does nothing until you call `draw()` again. For example, `sortBy()` on its own leaves the rows untouched. This rule comes back in [Sorting](#sorting), [Filtering](#filtering), [Search](#search) and [Grouping](#grouping). Two groups of settings do not follow the rule, and a `draw()` does not help them: the [Header](#header) settings and the two [Large Data Sets](#large_data_sets) settings. Set those before the first `draw()`.
* **Only the rows on screen exist in the page HTML.** 5,000 rows of data produce only a few dozen row elements. See [Large Data Sets](#large_data_sets).

{sample}DS\_Data\_Sheet\_01{sample}

## Data

Pass a plain array of row objects to {api:anychart.charts.DataSheet#data}data(){api}. This is the only data format that this type supports. Each object is one row, and each key is one field. Call `data()` with no argument to read the array of row objects back.

`anychart.data.Set` and `anychart.data.View` do **not** work with this type yet, even though most other AnyChart types accept them. If you pass a data set you get zero columns, no rows at all and the "No data" message - and no error. Use a plain array.

The grid can also load rows from a server, one page at a time. It does this through the {api:anychart.charts.DataSheet#dataSource}dataSource(){api} controller. A controller is a small object that holds the settings of one feature: you call its methods to read and change those settings. You give this one an adapter that loads a single page and reports the total number of rows. The grid then asks for a page when the user scrolls into it, keeps the pages it already has, and fires a `dataload` or a `dataerror` event - see [Events](#events). Loading data from a server is a big topic, and this article does not cover it. Read {api:anychart.core.dataSheet.DataSource}anychart.core.dataSheet.DataSource{api} for the whole controller. Everything else on this page works with the plain array above.

Every row keeps the index it had in the array you passed. That number is called the **data index**. [Selection](#selection) and the [events](#events) address rows by the data index, not by the position on screen. This matters as soon as sorting or filtering is on.

The two sections below cover tree-shaped data, and how to change the data after the grid is drawn.

### Tree Data

The Data Sheet reads two tree formats:

* **Nested** - a parent row holds its children in a `children` array
* **Flat** - every row has an `id`, and a child row points at its parent with a `parent` field

The field names `children`, `id` and `parent` are fixed. You cannot rename them.

The grid checks the **first row only** for the nested format. If the first row has no `children` array, the whole set renders as a flat table, and no error appears. Put a parent row first. For the flat format the first row must have an `id`, and at least one of the first 20 rows must have a `parent`.

Always declare your columns when you use nested data. With automatic columns the grid also makes a column for the `children` key, and those cells read `[object Object],[object Object]`:

```
// create tree data: the first row has a children array
var data = [
  {name: "Tech", units: 408, value: 94120, children: [
    {name: "Laptop", units: 34, value: 40800},
    {name: "Monitor", units: 58, value: 17400}
  ]},
  {name: "Office", units: 140, value: 28520, children: [
    {name: "Chair", units: 120, value: 18000},
    {name: "Desk", units: 12, value: 5400}
  ]}
];

var chart = anychart.dataSheet(data);

// declare the columns, so that the children field does not become a column
chart.column(0, {field: "name", title: "Product", width: 220});
chart.column(1, {field: "units", title: "Units", width: 120, dataType: "number"});
chart.column(2, {field: "value", title: "Value", width: 140, dataType: "number"});
```

The same tree in the flat format looks like this:

```
// the same tree written as flat rows: every row has an id,
// and a child row points at its parent with parent
var data = [
  {id: 1, name: "Tech", units: 408},
  {id: 2, name: "Laptop", units: 34, parent: 1},
  {id: 3, name: "Monitor", units: 58, parent: 1},
  {id: 4, name: "Office", units: 140},
  {id: 5, name: "Chair", units: 120, parent: 4}
];
```

A row whose `parent` matches no `id` becomes a top-level row. There is no warning.

The two formats number the rows differently. In the flat format the child rows are rows you passed, so five source rows give five rows on screen. In the nested format the grid adds the children at the end of the row list. Their indices start after the last index of your original array. So two source rows with four children each give ten rows.

**Limitation.** Tree rows are always fully open in this release, and you cannot close them. The arrows appear, but a click on an arrow does nothing. {api:anychart.core.dataSheet.Hierarchy#collapseAll}collapseAll(){api} does nothing here either, because the grid rebuilds the tree fully open on every redraw. {api:anychart.core.dataSheet.Hierarchy#expandAll}expandAll(){api} is harmless, because everything is already open. Opening and closing **do** work for groups - see [Grouping](#grouping). Use {api:anychart.core.dataSheet.Hierarchy#isActive}isActive(){api} to check that the grid built a tree or a grouping. It returns true in both cases, so it never tells you which of the two you have. To find that out, call {api:anychart.core.dataSheet.Hierarchy#getGroupFields}getGroupFields(){api} as well. It returns `null` when you did not group the rows. So `isActive()` true plus `getGroupFields()` null means the grid read your data as a tree.

{sample}DS\_Data\_Sheet\_02{sample}

### Updating the Data

To put new rows into a grid that is already on screen, pass a **new** array to {api:anychart.charts.DataSheet#data}data(){api} and call {api:anychart.charts.DataSheet#draw}draw(){api}.

If you change the array you passed before and then pass the same array again, nothing happens. `data()` only checks whether the new array is the **same object** as the old one. It does not look inside the array. Your array is the same object, so the grid skips all the work. Take a copy with `slice()` instead:

```
// this does nothing: the data sheet already holds this array
function addRowSameArray() {
  rows.push(nextRow());
  chart.data(rows);
  chart.draw();
}

// this works: the data sheet gets a new array
function addRowNewArray() {
  rows.push(nextRow());
  rows = rows.slice();
  chart.data(rows);
  chart.draw();
}
```

The grid takes a one-time copy of the rows. It does not watch your array, and it does not watch any AnyChart data object.

Cell editing works in the opposite direction. The grid writes the new values into the row objects you passed, so your own array already holds them. See [Cell Editing](#cell_editing).

{sample}DS\_Data\_Sheet\_03{sample}

## Columns

You set up every column through the {api:anychart.charts.DataSheet#column}column(){api} method. `column(index)` gets a column, or creates it if it does not exist yet. `column(index, {...})` configures it.

The four sections below all describe the settings of a single column.

### Defining Columns

Pass a configuration object as the second argument of {api:anychart.charts.DataSheet#column}column(){api}. The {api:anychart.core.dataSheet.Column#field}field{api} property says which data field the column shows, {api:anychart.core.dataSheet.Column#title}title{api} sets the header text, and `width` sets the width in pixels.

**The binding property is `field`, never `key`.** This is the most common mistake with this type. A column with `key` shows its title, but all of its cells stay empty. The grid writes no message to the console. Developers who come from another grid library often type `key` by habit.

The grid reads exactly eleven keys from the configuration object: `field`, `title`, `width`, `minWidth`, `maxWidth`, `dataType`, `format`, `editable`, `pinned`, `sizing` and `flex`. It ignores every other key, and it shows no warning. In particular {api:anychart.core.dataSheet.Column#validator}validator{api} is **not** one of them. Set it as a method call, `chart.column(1).validator(fn)`.

Every setting is also a method on the column object. A method call after the configuration object replaces the value from the object:

```
// the binding property is "field" - never "key"
chart.column(0, {field: 'product',  title: 'Product',    width: 220});
chart.column(1, {field: 'category', title: 'Category',   width: 150});
chart.column(2, {field: 'price',    title: 'Price, USD', width: 130, dataType: 'number'});

// every setting is also a method on the column object
chart.column(2).title('Unit Price, USD');

// the other three fields (sku, stock, status) are not shown:
// declaring columns replaces the whole auto-generated set,
// so chart.columnCount() is 3, not 6
```

Declaring columns **replaces** the whole automatic set. The sample data below has six fields, three columns are declared, and {api:anychart.charts.DataSheet#columnCount}columnCount(){api} returns 3. The columns appear in the index order you declare.

**Start at 0 and leave no gaps.** The index you pass is a position in the list of columns. If you declare index 2 but not index 0 and 1, those two positions stay empty, and the next `draw()` throws a `TypeError` and shows nothing at all. Declare every index from 0 up to the last one you need.

**A column cannot be taken away again.** There is no `removeColumn()`, and a column has no `visible()` setting, so the set of columns only ever grows. Declare the columns you want once, before the first `draw()`. To show a different set later, build a new Data Sheet - see [What Is Not Supported](#what_is_not_supported). For the same reason, never call `column(index)` just to test whether a column exists: as a getter it creates the column when the index is new.

{sample}DS\_Data\_Sheet\_04{sample}

### Data Types and Formats

**Set `dataType` on every column you declare.** A declared column is a string column until you say otherwise. Only automatic columns get a detected type. A number in a string column loses its thousands separator, and the grid sorts it as text, so `'1200'` comes before `'450'`.

{api:anychart.core.dataSheet.Column#dataType}dataType{api} takes `'string'`, `'number'`, `'date'` or `'boolean'`. It controls three things: how the grid compares values when it sorts, how it formats them, and which editor opens on a double-click.

Each type has a default format:

* `'number'` - thousands separators, from `toLocaleString()`
* `'boolean'` - a check mark or a cross
* `'date'` - a date in the date format of the browser language. Your value can be a `Date` object, a number of milliseconds, or a text string that `new Date()` can read. The grid shows any other value as it is, and sorts it as 1 January 1970
* `'string'` - the plain text

The {api:anychart.core.dataSheet.Column#format}format{api} setting replaces that default. It takes a format string. In that string, `{%value}` is a placeholder: the grid puts the cell value there. For example, `'{%value} pcs'` or `'${%value}'`. Add `{decimalsCount:N}` right after the placeholder to set the number of decimal places: `'${%value}{decimalsCount:2}'` shows `1200` as `$1200.00`. The setting also takes a function.

**A format function takes no arguments.** The value arrives as `this.value`. A function written as `function (v) { return '$' + v; }` renders `$undefined`.

**`this.value` is all there is.** The grid calls your function with an object that holds the cell value and nothing else - no row object, no field name, no row index. So a format function cannot look at another column of the same row. If your formatting depends on the whole row, build a ready-made text field in your data first and bind a column to that field.

**A cell holds plain text only.** The grid writes whatever the format returns into the cell as text. HTML in that text appears as characters, not as markup. There is no cell renderer in this API, so a badge, a link, a button or an icon inside a cell is not possible in this release. Color a whole row with `rowEvenFill()` and `rowOddFill()`, or a whole column with a CSS rule - see [Appearance](#appearance).

Both forms replace the default formatting of the type. So a number column with a format loses its thousands separator: `1200` renders as `$1200`, not `$1,200`. The default separator comes from `toLocaleString()`, so a format function can put it back. That is the last column in the block below. A format string cannot do this: `{decimalsCount:N}` sets the decimal places, but it never adds a separator.

```
// a declared column is a string column unless you say otherwise
chart.column(0, {field: 'product', title: 'Product', width: 200});

// dataType 'number' adds the thousands separator: 1200 becomes 1,200
chart.column(1, {field: 'price', title: 'Price', width: 130, dataType: 'number'});

// a format FUNCTION takes no arguments - the value arrives as this.value
// it also replaces the default number formatting, so the separator is gone: $1200
chart.column(2, {
  field: 'price',
  title: 'Price, function',
  width: 170,
  dataType: 'number',
  format: function () {
    return '$' + this.value;
  }
});

// a format STRING uses the {%value} placeholder: 34 pcs
chart.column(3, {
  field: 'stock',
  title: 'Stock, format string',
  width: 190,
  dataType: 'number',
  format: '{%value} pcs'
});

// {decimalsCount:2} sets the number of decimal places: $1200.00
chart.column(4, {
  field: 'price',
  title: 'Price, 2 decimals',
  width: 180,
  dataType: 'number',
  format: '${%value}{decimalsCount:2}'
});

// a money column that keeps the separator: toLocaleString() puts it back
chart.column(5, {
  field: 'price',
  title: 'Price, USD',
  width: 170,
  dataType: 'number',
  format: function () {
    return '$' + this.value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  }
});
```

Two columns can bind the same field. The sample below shows `price` four times, so you can watch the separator appear and disappear side by side.

{sample}DS\_Data\_Sheet\_05{sample}

### Column Width

Five settings control the width of a column:

* {api:anychart.core.dataSheet.Column#width}width{api} - the width in pixels, 150 by default. If you set 0 or a value that is not a number, the grid uses 150
* {api:anychart.core.dataSheet.Column#minWidth}minWidth{api} - 50 by default
* {api:anychart.core.dataSheet.Column#maxWidth}maxWidth{api} - no limit by default
* {api:anychart.core.dataSheet.Column#sizing}sizing{api} - `'fixed'` (default), `'auto'` or `'flex'`. For any other value the grid uses `'fixed'`
* {api:anychart.core.dataSheet.Column#flex}flex{api} - the weight of a `'flex'` column, 1 by default

A `'fixed'` column keeps the width you set. An `'auto'` column is as wide as its widest cell, but never narrower than `minWidth` and never wider than `maxWidth`. The `'flex'` columns share the free space that is left, by weight. Two flex columns with weights 1 and 2 split that space one third to two thirds.

`minWidth` and `maxWidth` also limit how far the user can drag the edge of a column.

```
// 'fixed' keeps the width you set - this is the default
chart.column(0, {field: 'sku', title: 'SKU', width: 90, dataType: 'number', sizing: 'fixed'});

// 'auto' measures the widest cell and the title, inside minWidth and maxWidth
chart.column(1, {field: 'category', title: 'Category', sizing: 'auto', minWidth: 80, maxWidth: 200});

// 'flex' columns share the free space by weight: 1 to 2
chart.column(2, {field: 'product', title: 'Product', sizing: 'flex', flex: 1});
chart.column(3, {field: 'status',  title: 'Status',  sizing: 'flex', flex: 2});

// re-measure every 'auto' column - fixed and flex columns are left alone
chart.autoSizeColumns();
chart.draw();
```

You do not always have to call {api:anychart.charts.DataSheet#autoSizeColumns}autoSizeColumns(){api}. When `draw()` builds the layout again, it also measures the `'auto'` columns for you. A data change builds the layout again, so a plain `draw()` after a data change re-measures them too. But when a redraw only filters, sorts or searches again, it does not measure them. So call the method yourself when the measurement changed but the data did not - after a font or a CSS change, for example - and then call `draw()`. It never touches a `'fixed'` or a `'flex'` column.

The user can drag the right edge of a header cell to resize a column. Every resize fires a `columnresize` event - see [Events](#events).

{sample}DS\_Data\_Sheet\_06{sample}

### Pinning and Reordering

The {api:anychart.core.dataSheet.Column#pinned}pinned{api} setting takes `'left'`, `'right'` or `false` (default). Any other value unpins the column. A pinned column stays at the edge of the grid while the other columns scroll sideways.

**Pinning needs a horizontal scrollbar, and the scrollbar needs `minWidth`.** Each row uses the CSS flexbox layout. That means the browser makes wide columns narrower so that they fit the container. Then the grid never scrolls sideways, the other columns never move, and pinning has no visible effect. Set `minWidth` equal to `width` on the columns, so the row cannot shrink them:

```
// the columns are wider than the container, so the grid scrolls sideways
// minWidth matters here: without it the row squeezes the columns to fit,
// nothing scrolls sideways, and pinning has no visible effect
chart.column(0, {field: 'product',  title: 'Product',  width: 220, minWidth: 220, pinned: 'left'});
chart.column(1, {field: 'category', title: 'Category', width: 170, minWidth: 170});
chart.column(2, {field: 'price',    title: 'Price',    width: 160, minWidth: 160, dataType: 'number'});
chart.column(3, {field: 'stock',    title: 'In Stock', width: 160, minWidth: 160, dataType: 'number'});
chart.column(4, {field: 'sku',      title: 'SKU',      width: 160, minWidth: 160, dataType: 'number'});
chart.column(5, {field: 'status',   title: 'Status',   width: 200, minWidth: 200, pinned: 'right'});

// move SKU from position 4 to position 1
// reorderColumn() never moves a pinned column, so Product stays first and Status stays last
chart.reorderColumn(4, 1);
chart.draw();
```

{api:anychart.charts.DataSheet#reorderColumn}reorderColumn(fromIndex, toIndex){api} moves a column from code. The user can do the same by dragging a header cell. Both routes fire a `columnreorder` event. `reorderColumn()` refuses to move a pinned column, and it refuses to drop a column onto one. Dragging has no such rule, so a user can still drag a pinned header out of its place.

Pinning is also in the default [context menu](#context_menu), as "Pin Left" and "Unpin Column".

{sample}DS\_Data\_Sheet\_07{sample}

## Header

The {api:anychart.charts.DataSheet#header}header(){api} method returns the header controller. As in [Data](#data), a controller is a small object that holds the settings of one feature, and you call its methods to read and change those settings. Many features work this way: the header, sorting, filtering, search, selection, virtual scrolling, the clipboard, the export and the [saved layout](#saved_layout).

The header controller has two settings:

* {api:anychart.core.dataSheet.Header#enabled}enabled(false){api} removes the header row
* {api:anychart.core.dataSheet.Header#height}height(){api} sets its height, 40 by default. If you set 0 or a value that is not a number, the grid uses 40

`header().height()` and `rowHeight()` are separate settings. `rowHeight()` does not touch the header.

**Set the header options before the first `draw()`.** `header().height()`, `header().enabled()`, {api:anychart.charts.DataSheet#headerGroup}headerGroup(){api} and {api:anychart.charts.DataSheet#removeHeaderGroup}removeHeaderGroup(){api} do not reach the grid on a later redraw. They reach it only when something else changes a column. This is one of the two exceptions to the redraw rule in [Quick Start](#quick_start). The other one is in [Large Data Sets](#large_data_sets).

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

## Sorting

Sorting is on from the start. Click a header to sort that column. The first click sorts up (ascending), the second click sorts down (descending), and the third click removes the sort. Shift+click adds a second and a third sort level.

From code, use the {api:anychart.charts.DataSheet#sorting}sorting(){api} controller:

* {api:anychart.core.dataSheet.Sorting#sortBy}sortBy(field, order){api} - sets a single sort and clears the levels you had
* {api:anychart.core.dataSheet.Sorting#addSort}addSort(field, order){api} - adds one more sort level at the end of the list. If the field is already in the list, the grid moves it to the end
* {api:anychart.core.dataSheet.Sorting#getSorts}getSorts(){api} - returns a copy of the list, most important level first
* {api:anychart.core.dataSheet.Sorting#clearSort}clearSort(){api} - empties the list of sort levels and brings back the original row order
* {api:anychart.core.dataSheet.Sorting#order}order(){api} returns `'asc'`, `'desc'` or `'none'`, and {api:anychart.core.dataSheet.Sorting#column}column(){api} returns the field of the last level. You can also call each of them with a value. If the list of sort levels is empty, the grid then sorts by that field and that order. `sortBy()` does the same in one call. Use `sortBy()`
* {api:anychart.core.dataSheet.Sorting#enabled}enabled(false){api} - a click on a header no longer changes the order

```
// declare every column from index 0 up, with no gaps
// a numeric column needs dataType, or it is sorted as text
chart.column(0, {field: 'product',  title: 'Product',  width: 150});
chart.column(1, {field: 'category', title: 'Category', width: 120});
chart.column(2, {field: 'price',    title: 'Price',    width: 110, dataType: 'number'});

// sort by two fields: category ascending, then price descending
chart.sorting().sortBy('category', 'asc');
chart.sorting().addSort('price', 'desc');

// clearSort() hands control back to the user
document.getElementById('clear').onclick = function () {
  chart.sorting().clearSort();
  chart.draw();
};
```

Remember the redraw rule from [Quick Start](#quick_start): a sort you set from code takes effect on the next `draw()`.

**Limit 1: a sort set from code locks the plain header click.** As long as the list of sort levels is not empty, a plain click on a header no longer changes the order. Shift+click still works, because it adds one more level to that list. Call `clearSort()` to hand full control back to the user, as the sample below does.

**Limit 2: sorting works on flat data only.** When the rows are grouped, or when the grid reads your data as a tree, the row order comes from the tree. The grid then ignores both header clicks and `sortBy()` - with no error, and the header still shows a sort arrow. Do not set a sort in a grouped grid.

A `sort` event fires whenever the grid re-sorts the rows. That is more often than you would expect: a filter change or a data change re-runs the sort and fires the event again, even though the sort itself did not change. A `draw()` that changes nothing fires nothing.

The payload depends on where the sort came from, not on how many levels it has. A sort made by a plain header click carries `column` and `order`. A sort set with `sortBy()`, with `addSort()` or by Shift+click carries `sorts` instead, even when it has only one level. So check `e.sorts` first, as the code in [Events](#events) does.

{sample}DS\_Data\_Sheet\_09{sample}

## Filtering

The {api:anychart.charts.DataSheet#filter}filter(){api} controller shows only the rows that match your conditions. {api:anychart.core.dataSheet.Filter#filterBy}filterBy(field, config){api} sets one filter per field. A second filter on the same field replaces the first.

There are three kinds of filter configuration:

* **Text** - `{type: 'text', mode: 'contains' | 'startsWith' | 'exact', value: '...'}`. The match is not case sensitive. `mode` defaults to `contains`. An empty value matches every row
* **Number** - `{type: 'number', min: 100, max: 500}`. Both ends are included, and both are optional. A value that is not a number never passes
* **Boolean** - `{type: 'boolean', value: true}`. The grid compares with `==`, so any value that JavaScript treats as true counts as true

**These three are the only types.** There is no date filter. Any other `type`, and any other `mode` in a text filter, lets every row through. You get no error, and the `filter` event still reports that the grid removed no rows. To filter a date column, put a number in your data next to the date and use a number filter.

A row is shown only if it passes **every** active filter.

```
// a text filter: keep the rows of the Tech category
chart.filter().filterBy('category', {type: 'text', mode: 'exact', value: 'Tech'});

// a number filter: keep the rows with a price from 100 to 500
// both bounds are included, and a row must pass every filter
chart.filter().filterBy('price', {type: 'number', min: 100, max: 500});

// the filter event reports how many rows are left
chart.listen('filter', function (e) {
  state.innerHTML = e.filteredCount + ' of ' + e.totalCount + ' rows shown';
});

// clearFilters() removes every filter at once
chart.filter().clearFilters();
chart.draw();
```

A filter reads the raw data value, not the text in the cell. If a column has a `format`, write the filter for the raw value, not for the text that the format produces.

{api:anychart.core.dataSheet.Filter#clearFilter}clearFilter(field){api} removes one filter and {api:anychart.core.dataSheet.Filter#clearFilters}clearFilters(){api} removes all of them. {api:anychart.core.dataSheet.Filter#getFilter}getFilter(field){api} and {api:anychart.core.dataSheet.Filter#getFilters}getFilters(){api} read the configuration back. {api:anychart.core.dataSheet.Filter#enabled}enabled(false){api} lets every row through but keeps your configurations, so switching it back on restores them.

Filters follow the redraw rule as well. The `filter` event carries `filteredCount` and `totalCount`.

To get the rows themselves, and not only the count, call {api:anychart.core.dataSheet.Filter#applyFilters}applyFilters(data){api}. It runs the active filters over an array and returns the indices of the rows that pass, so you can build your own total from them:

```
// the indices of the rows that pass every active filter
var rows = chart.data();
var indices = chart.filter().applyFilters(rows);

var total = 0;
for (var i = 0; i < indices.length; i++) {
  total += rows[indices[i]].price;
}
```

With filtering switched off, or with no filter set, it returns every index.

{sample}DS\_Data\_Sheet\_10{sample}

## Search

Search finds text anywhere in the grid and highlights it. It does not hide the other rows - that is what [Filtering](#filtering) is for. The two are easy to confuse.

The {api:anychart.charts.DataSheet#search}search(){api} controller works with the search bar inside the grid:

* {api:anychart.core.dataSheet.Search#show}show(){api} opens the bar. {api:anychart.core.dataSheet.Search#close}close(){api} hides it, clears the query and removes the highlighting. Esc does the same as `close()`
* {api:anychart.core.dataSheet.Search#query}query(text){api} runs a search. It matches any part of a value and is not case sensitive
* {api:anychart.core.dataSheet.Search#matchCount}matchCount(){api} returns the number of matching cells
* {api:anychart.core.dataSheet.Search#next}next(){api} and {api:anychart.core.dataSheet.Search#prev}prev(){api} step through the matches and scroll each one into view. After the last match they go back to the first one
* {api:anychart.core.dataSheet.Search#isVisible}isVisible(){api} reports whether the bar is open, and {api:anychart.core.dataSheet.Search#enabled}enabled(false){api} stops it opening at all

**The order of the calls matters.** The grid builds the search bar during `draw()`, and `query()` searches the rows that a `draw()` prepared. So draw the grid first, then call `show()` and `query()`, then draw again:

```
// the search event reports the query and how many cells matched
chart.listen('search', function (e) {
  state.innerHTML = '"' + e.query + '" - ' + e.matchCount + ' matching cells';
});

chart.container('container');
chart.draw();

// open the search bar and run a query
// both steps need a redraw: the bar is built during draw(),
// and query() searches the rows that the first draw() prepared
chart.search().show();
chart.search().query('Tech');
chart.draw();

// step through the matches - each one is scrolled into view
// after the last match, next() goes back to the first one
chart.search().next();
chart.search().prev();
```

Ctrl+F (Cmd+F on macOS) opens the bar too, but the bar itself appears only on the next redraw.

A query you run from code does not fill the input box of the bar. No later call fills it either. The box stays empty until the user types in it. The highlighting and `matchCount()` are still correct. The counter beside the box is also empty at first: when `query()` runs, the bar does not exist yet. `next()` or `prev()` then fills the counter in. That is why the sample below prints the count in a line of its own.

Search looks at every row that the current filter keeps, including rows you have scrolled past. It looks only at the fields that have a column. If you declare columns, the values in the other fields are never found. It also matches the raw data value, not the text in the cell: on a formatted number, `1,200` finds nothing and `1200` finds the row.

A `search` event carries `query` and `matchCount`.

{sample}DS\_Data\_Sheet\_11{sample}

## Selection

The {api:anychart.charts.DataSheet#selection}selection(){api} controller lets the user pick rows. {api:anychart.core.dataSheet.Selection#mode}mode(){api} takes three values. For any other value the grid uses `'single'`:

* `'single'` (default) - a click replaces the selection, and a click on the selected row clears it
* `'multi'` - a plain click replaces the selection, Ctrl-click (Cmd-click) toggles one row
* `'checkbox'` - the grid adds a leading checkbox column, and a click always toggles

Changing the mode clears the current selection.

All these methods use the **data index** of a row. The data index is the position of the row in the array you passed to `data()`. It is not the position of the row on the screen, and sorting or filtering never changes it. The methods are {api:anychart.core.dataSheet.Selection#select}select(index){api}, {api:anychart.core.dataSheet.Selection#deselect}deselect(index){api}, {api:anychart.core.dataSheet.Selection#toggle}toggle(index){api}, {api:anychart.core.dataSheet.Selection#deselectAll}deselectAll(){api}, {api:anychart.core.dataSheet.Selection#isSelected}isSelected(index){api} and {api:anychart.core.dataSheet.Selection#selectedIndices}selectedIndices(){api}.

`selectedIndices(array)` replaces the whole selection. The mode does not limit it: several indices in single mode select several rows.

```
// checkbox mode adds a leading checkbox column, and every click toggles one row
chart.selection().mode('checkbox');

// read the selection back - the indices are data indices, not screen positions
function showSelection() {
  var indices = chart.selection().selectedIndices();
  var names = [];
  for (var i = 0; i < indices.length; i++) {
    names.push(data[indices[i]].product);
  }
  state.innerHTML = names.length ? 'selected: ' + names.join(', ') : 'nothing selected';
}

// rowSelect fires when the USER clicks a row or a checkbox
chart.listen('rowSelect', function () {
  showSelection();
});

// selecting from code does NOT fire rowSelect, and it needs a redraw to show up,
// so update your own display right after the call
chart.selection().selectedIndices([0, 1]);
chart.draw();
showSelection();
```

**Selecting from code is different from a user click, in two ways.** First, it does not fire the `rowSelect` event. Second, it does not repaint the grid on its own, so the highlight and the checkboxes stay as they were until the next `draw()`. A user click fires the event and repaints the grid at the same time. That is why the difference is easy to miss. When you select from code, call `draw()` and refresh your own display straight after the call, as the code above does.

{api:anychart.core.dataSheet.Selection#enabled}enabled(false){api} clears the selection and makes both clicks and `select()` do nothing.

{api:anychart.charts.DataSheet#rowSelectedFill}rowSelectedFill(){api} sets the color of a selected row - see [Appearance](#appearance). The selection is also what [Copy and Paste](#copy_and_paste) acts on.

{sample}DS\_Data\_Sheet\_12{sample}

## Cell Editing

Editing needs **two** switches, and one alone does nothing:

* {api:anychart.core.dataSheet.CellEditor#enabled}cellEditor().enabled(true){api} on the grid
* {api:anychart.core.dataSheet.Column#editable}editable: true{api} on each column you want to edit

Both are off by default. To start editing, double-click a cell. The editor element follows the column `dataType`: a number input for `'number'`, a date input for `'date'`, a true/false select for `'boolean'`, and a text input for anything else. That is one more reason to set `dataType` on a declared column.

{api:anychart.core.dataSheet.Column#validator}validator(fn){api} checks a value before the grid accepts it. **Set it as a method call.** The column configuration object ignores it, like every other key outside the eleven listed in [Defining Columns](#defining_columns). The function receives `(value, rowData)`. Return `true` to accept the value, or a message string to reject it. If your function rejects a value, the editor stays open and shows your message.

```
// editing needs TWO switches: editable on the column, and cellEditor().enabled() on the grid
// declare every column from index 0 up, with no gaps
chart.column(0, {field: 'product',  title: 'Product',  width: 150, editable: true});
chart.column(1, {field: 'category', title: 'Category', width: 120});
chart.column(2, {field: 'price',    title: 'Price',    width: 110, dataType: 'number', editable: true});
chart.column(3, {field: 'stock',    title: 'Units',    width: 110, dataType: 'number'});

chart.cellEditor().enabled(true);

// a validator must be set as a method call - the column configuration object ignores it
// return true to accept, or a message to reject and keep the editor open
chart.column(2).validator(function (value, rowData) {
  if (value <= 0) {
    return 'The price of ' + rowData.product + ' must be above 0';
  }
  return true;
});

// the edits are written into the row objects you passed to data(), but
// celleditend fires just BEFORE the value is written, so read your array inside setTimeout
chart.listen('celleditend', function () {
  setTimeout(showData, 0);
});

// undo() reverts the last committed change and redraws by itself
chart.cellEditor().undo();
```

Enter accepts the value. Esc cancels the edit. A click outside the cell accepts the value as well. {api:anychart.core.dataSheet.CellEditor#commitEdit}commitEdit(){api}, {api:anychart.core.dataSheet.CellEditor#cancelEdit}cancelEdit(){api} and {api:anychart.core.dataSheet.CellEditor#isEditing}isEditing(){api} do the same from your own buttons.

**Only the user can start an edit.** The API reference lists {api:anychart.core.dataSheet.CellEditor#startEdit}startEdit(){api}, but it wants the internal cell element of the grid, and a data cell has no attribute that a selector can find it by - see [CSS Classes](#css_classes). So there is no supported way to open an editor from a button of your own in this release. {api:anychart.core.dataSheet.CellEditor#moveToNextCell}moveToNextCell(){api} fails for the same reason. It is the method the Tab key calls, and it is why Tab closes the editor instead of stepping to the next cell.

Ctrl+Z (Cmd+Z) undoes the last accepted change, and so does {api:anychart.core.dataSheet.CellEditor#undo}undo(){api}. The grid remembers the last 20 changes, and it records only the edits that really changed a value.

Edits write into the row objects you passed to `data()`, so your own array already holds the new values - see [Updating the Data](#updating_the_data).

Five things to know before you use cell editing in your own code:

* **Tab does not move to the next editable cell.** It accepts the value and closes the editor. Shift+Tab does the same. Use the mouse to open the next cell
* **The `celleditend` event fires just before the grid writes the new value into your row object.** A listener that reads your array at once sees the old value. Read `e.newValue`, or read your array a moment later inside `setTimeout(fn, 0)`, as the code above does
* **A cell you have just edited shows the raw value.** A number you accept reads `1350`, not `1,350`. The format comes back the next time the grid draws the rows. `undo()` does that, for example
* **A date edit writes back a string.** The editor is an `<input type="date">`, and the value it commits is the plain `yyyy-mm-dd` text, not a `Date`. A column that held `Date` objects holds strings after the first edit
* **A number edit with no validator becomes 0.** Text that is not a number is written into your data as `0`, not rejected. Add a validator if that matters

To stop an edit from starting, return `false` from a `celleditstart` listener. Do **not** call `e.preventDefault()` on that event - see [Events](#events).

{sample}DS\_Data\_Sheet\_13{sample}

## Grouping

{api:anychart.charts.DataSheet#groupBy}groupBy(field){api} puts the rows into groups by one field. `groupBy([field1, field2])` makes groups inside groups, in the order you give. `groupBy(null)` removes the grouping.

The optional second argument holds the summaries. You must put them inside an `aggregates` key:

```
// group the rows by category and summarize each group
chart.groupBy("category", {aggregates: {price: "sum", stock: "avg"}});

// open every group
chart.hierarchy().expandAll();
chart.draw();

// close every group
chart.hierarchy().collapseAll();
chart.draw();
```

A summary can be `count`, `sum`, `avg`, `min`, `max`, `median`, `first` or `last`. You can also pass a function of your own. It receives the array of values in the group.

The summaries do not line up under their columns. The grid adds each one to the group row, after the group name and the row count, as `field: value`. It uses the raw field name, not the column title. The grid does not format these values: in the sample below, the summed price of the Tech group reads `price: 1720`, not `1,720`. The grid does use a `format` function from the column for a summary, but it ignores a `format` string. Use the `anychart-ds-aggregate` class in your stylesheet to place them, or a format function on the column to format them.

`groupBy()` switches the group zone on by itself. That is the strip above the header. It shows one small tag - a chip - for each grouped field, and each chip has a cross that removes it. The user can drag a column header into the strip to group by that field, and drag the chips to reorder the grouping. Call `groupZone(true)` to show the zone without grouping anything yourself, and let the user do the grouping. `groupBy(null)` does **not** switch the zone off again - call {api:anychart.charts.DataSheet#groupZone}groupZone(false){api} for that.

The zone adds one more row above the header. The grid does not make its own height smaller for that row. So give the container a little more height. If you do not, the last rows are cut off.

The {api:anychart.charts.DataSheet#hierarchy}hierarchy(){api} controller opens and closes the groups: {api:anychart.core.dataSheet.Hierarchy#expandAll}expandAll(){api} and {api:anychart.core.dataSheet.Hierarchy#collapseAll}collapseAll(){api} for all of them, and {api:anychart.core.dataSheet.Hierarchy#expand}expand(key){api}, {api:anychart.core.dataSheet.Hierarchy#collapse}collapse(key){api} and {api:anychart.core.dataSheet.Hierarchy#toggle}toggle(key){api} for one group at a time. {api:anychart.core.dataSheet.Hierarchy#isExpanded}isExpanded(key){api} reports the state of one group.

A group key is the grouped fields down to that level, joined with `/`, then `=` and the value. Grouping by `category` alone gives `'category=Tech'`. Grouping by `category` and then `supplier` gives `'category=Tech'` for the outer group and `'category/supplier=Contoso'` for the inner one. {api:anychart.core.dataSheet.Hierarchy#getGroupFields}getGroupFields(){api} returns the fields you grouped by. These methods work for groups. They do not work for [tree data](#tree_data).

Grouping follows the redraw rule, and it fires a `groupchange` event.

**Do not set a sort in a grouped grid.** As [Sorting](#sorting) says, the row order comes from the groups, and the sort is ignored.

{sample}DS\_Data\_Sheet\_14{sample}

## Appearance

The API covers the sizes and the colors of the rows and the header:

* {api:anychart.charts.DataSheet#rowHeight}rowHeight(){api} - 32 by default. It does not touch the header. Use {api:anychart.core.dataSheet.Header#height}header().height(){api} for that
* {api:anychart.charts.DataSheet#headerFill}headerFill(){api} - `'#f5f5f5'` by default
* {api:anychart.charts.DataSheet#rowEvenFill}rowEvenFill(){api} and {api:anychart.charts.DataSheet#rowOddFill}rowOddFill(){api} - `'#ffffff'` and `'#f8f8f8'`, the zebra stripes
* {api:anychart.charts.DataSheet#rowHoverFill}rowHoverFill(){api} - `'#e8f0fe'`
* {api:anychart.charts.DataSheet#rowSelectedFill}rowSelectedFill(){api} - `'#d2e3fc'`
* {api:anychart.charts.DataSheet#noDataText}noDataText(){api} - the message shown when there is nothing to display, either because the data is empty or because a filter matched no row

These take plain strings and numbers. They are not the fill objects used in the rest of AnyChart. There are no gradients and no fill functions here, even though the names look like chart fills.

```
// set the row height and the header height
chart.rowHeight(40);
chart.header().height(52);

// recolor the header and the rows
chart.headerFill("#37474f");
chart.rowEvenFill("#ffffff");
chart.rowOddFill("#e3f2fd");
chart.rowHoverFill("#fff8e1");
chart.rowSelectedFill("#ffe082");

// message shown when there is nothing to display
chart.noDataText("No products to show");
```

The API does not cover the text alignment of a column, or the color of one single column. Everything else is CSS. The grid is HTML, so your own CSS rules apply to it. A number cell also gets the `anychart-ds-cell-number` class, which gives you a hook for one column type:

```
/* what the API does not cover, CSS does */
#container .anychart-ds-header-cell {
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
}
#container .anychart-ds-cell {
    padding: 0 16px;
    border-right: 1px solid #b0bec5;
}
/* the API has no alignment setting - a number cell carries its own class */
#container .anychart-ds-cell-number {
    text-align: right;
}
```

Use CSS for the cell padding and the cell borders. `cellPadding()` and `cellBorder()` are in the API, and they give back the values you set, but nothing in this release reads those values. The padding and the borders come from the stylesheet. The group header colors and the tree indent are CSS as well.

Sizing works the same way as everywhere else in AnyChart: `container()`, `width()`, `height()` and `bounds()`. With none of them set, the grid takes the size of its container.

The grid works out its layout during `draw()`. So a container that changes size later - a responsive page, a splitter, a dashboard tile - needs a `draw()` of its own after the change. Call it from your own resize handler.

{sample}DS\_Data\_Sheet\_15{sample}

### CSS Classes

These are the class names the grid puts on its elements. Use them in your own stylesheet, and in your own `querySelector()` calls.

<table class="dtTABLE" width="700">
<tbody>
<tr><th width="260">Class</th><th width="440">What it is</th></tr>
<tr><td>anychart-data-sheet</td><td>the root element of the grid</td></tr>
<tr><td>anychart-ds-header</td><td>the header row</td></tr>
<tr><td>anychart-ds-header-cell</td><td>one header cell</td></tr>
<tr><td>anychart-ds-header-group-row</td><td>the row of header groups above the header</td></tr>
<tr><td>anychart-ds-header-group-cell</td><td>one header group title</td></tr>
<tr><td>anychart-ds-viewport</td><td>the scrolling area that holds the rows</td></tr>
<tr><td>anychart-ds-spacer</td><td>the empty blocks that keep the scrollbar the right size</td></tr>
<tr><td>anychart-ds-measure</td><td>the hidden element used to measure text</td></tr>
<tr><td>anychart-ds-row</td><td>one data row</td></tr>
<tr><td>anychart-ds-row-even, anychart-ds-row-odd</td><td>the zebra stripes</td></tr>
<tr><td>anychart-ds-row-selected</td><td>a selected row</td></tr>
<tr><td>anychart-ds-no-data</td><td>the message shown when there are no rows</td></tr>
<tr><td>anychart-ds-cell</td><td>one cell</td></tr>
<tr><td>anychart-ds-cell-number</td><td>a cell of a number column</td></tr>
<tr><td>anychart-ds-cell-boolean</td><td>a cell of a boolean column</td></tr>
<tr><td>anychart-ds-cell-focused</td><td>the cell the keyboard is on</td></tr>
<tr><td>anychart-ds-cell-editor</td><td>the input element of an open editor</td></tr>
<tr><td>anychart-ds-editor-invalid, anychart-ds-editor-error</td><td>a rejected value and its message</td></tr>
<tr><td>anychart-ds-checkbox, anychart-ds-checkbox-cell</td><td>the checkbox and its cell in checkbox mode</td></tr>
<tr><td>anychart-ds-group-header</td><td>a group row</td></tr>
<tr><td>anychart-ds-group-label, anychart-ds-group-count</td><td>the group name and the number of rows in it</td></tr>
<tr><td>anychart-ds-aggregate</td><td>one summary value on a group row</td></tr>
<tr><td>anychart-ds-group-zone</td><td>the drop area above the header</td></tr>
<tr><td>anychart-ds-group-chip, anychart-ds-group-chip-remove</td><td>a chip in that area and its remove button</td></tr>
<tr><td>anychart-ds-toggle</td><td>the open/close arrow of a group or a tree row</td></tr>
<tr><td>anychart-ds-detail-row, anychart-ds-detail-toggle</td><td>detail rows - see [What Is Not Supported](#what_is_not_supported)</td></tr>
<tr><td>anychart-ds-search-bar</td><td>the search bar</td></tr>
<tr><td>anychart-ds-search-input, anychart-ds-search-count</td><td>its input box and its counter</td></tr>
<tr><td>anychart-ds-search-btn, anychart-ds-search-close</td><td>its buttons</td></tr>
<tr><td>anychart-ds-search-match</td><td>a highlighted match</td></tr>
<tr><td>anychart-ds-pinned-left, anychart-ds-pinned-right</td><td>the cells of a pinned column</td></tr>
<tr><td>anychart-ds-resize-handle</td><td>the drag area on the right edge of a header cell</td></tr>
<tr><td>anychart-ds-resizing</td><td>set on document.body while the user drags that handle</td></tr>
<tr><td>anychart-ds-col-dragging</td><td>set while the user drags a header to reorder it</td></tr>
<tr><td>anychart-ds-context-menu, anychart-ds-context-menu-item</td><td>the right-click menu and its rows</td></tr>
<tr><td>anychart-ds-skip-link</td><td>the "Skip to data" link</td></tr>
<tr><td>anychart-ds-live-region</td><td>the region for screen reader messages</td></tr>
</tbody>
</table>

The grid also writes a few attributes that you can use in a selector: `data-data-index` on a data row, `data-group-key`, `data-depth` and `data-node-type` on a group row, and `data-col-index` on a header cell and its resize handle. A data cell has none of these attributes. A data cell carries only a class and `role="gridcell"`, so a selector cannot find one single cell. Find its row first, then take the cell by its position in that row.

The stylesheet also has rules for a few class names that the current build never puts on an element, such as `anychart-ds-sort-badge` and `anychart-ds-drop-indicator`. Do not rely on them.

**One warning.** The grid writes the column widths, the row heights and the row colors as inline styles. An inline style is stronger than a simple class rule, so a simple class rule has no effect. Use a stronger selector, as the CSS above does with `#container`, or set the color through the API instead.

## Large Data Sets

Virtual scrolling is on by default. Only the rows in the visible part of the grid exist in the page HTML. The grid also keeps a few extra rows above and below them. Those extra rows are called the buffer. So a grid of 5,000 rows keeps only a few dozen row elements, and more if you raise the buffer. That is why the grid stays fast: the first `draw()` of 5,000 rows takes a few tens of milliseconds. The sample below uses a buffer of 25 and prints the live count, so you can watch the number yourself.

Remember this in your own code. A CSS rule, a `querySelectorAll()` count or a UI test may look for every row. All of them get the wrong result.

{api:anychart.charts.DataSheet#virtualScroll}virtualScroll(){api} returns the controller:

* {api:anychart.core.dataSheet.VirtualScroll#bufferSize}bufferSize(){api} - the number of extra rows kept on each side, 10 by default. A bigger buffer makes fast scrolling smoother and keeps more rows in the page
* {api:anychart.core.dataSheet.VirtualScroll#enabled}enabled(false){api} - renders every row at once. Use it only for small grids, or when you need the whole table in the page for printing or testing

```
// build 5,000 rows
var rows = [];
for (var i = 1; i <= 5000; i++) {
  rows.push({
    id: i,
    product: "Product #" + i,
    category: "Tech",
    price: 20 + ((i * 37) % 1500),
    stock: (i * 13) % 500
  });
}

// virtual scrolling is on by default:
// keep 25 extra rows above and below the visible rows
// set this before the first draw()
chart.virtualScroll().bufferSize(25);
```

**Set these two options before the first `draw()`.** The controller does not tell the grid that something changed, so a `draw()` on its own after the change does nothing at all. The new value is picked up by the next redraw that something else triggers - a data change, a filter, a sort or a scroll. That makes the moment it takes effect hard to predict.

Virtual scrolling needs a container with a real height. With a zero-height container the grid builds only the buffer rows - see the size rule in [Quick Start](#quick_start).

The `aria-rowcount` attribute on the grid reports every row the current filter keeps, not the number of rows in the page. With no filter that is the whole data set, so for the sample below it reads 5000.

{sample}DS\_Data\_Sheet\_16{sample}

## Keyboard Shortcuts

The grid root has `tabindex="0"`, so the user can Tab into it and then use these keys. On macOS, use Cmd where the table says Ctrl.

<table class="dtTABLE" width="700">
<tbody>
<tr><th width="220">Keys</th><th width="480">What happens</th></tr>
<tr><td>Arrow keys</td><td>move the focused cell</td></tr>
<tr><td>Home, End</td><td>jump to the first or the last column</td></tr>
<tr><td>Ctrl+Home, Ctrl+End</td><td>jump to the first or the last row</td></tr>
<tr><td>Enter, Space</td><td>select the focused row. Hold Ctrl to add it to the selection</td></tr>
<tr><td>Ctrl+C, Ctrl+X, Ctrl+V</td><td>copy, cut and paste the selected rows</td></tr>
<tr><td>Ctrl+F</td><td>open the search bar. The bar itself appears on the next redraw</td></tr>
<tr><td>Esc</td><td>close the search bar, or cancel a cell edit</td></tr>
<tr><td>Enter (while editing)</td><td>accept the value</td></tr>
<tr><td>Tab, Shift+Tab (while editing)</td><td>accept the value and close the editor. They do not move to the next cell</td></tr>
<tr><td>Ctrl+Z</td><td>undo the last cell edit</td></tr>
<tr><td>Shift+click on a header</td><td>add a sort level</td></tr>
</tbody>
</table>

Every sample on this page responds to these keys after you click the grid.

## Copy and Paste

Copy and cut act on the **selected rows**. With nothing selected, nothing is copied. See [Selection](#selection).

`paste()` is the exception: it ignores the selection. It starts at the cell that has the keyboard focus, and from there it fills the cells below and to the right. The grid clears that focus on every data or filter change, so with no focused cell `paste()` does nothing at all. Let the user Tab into the grid and move with the arrow keys first.

The {api:anychart.charts.DataSheet#clipboard}clipboard(){api} controller writes two formats at once: tab-separated text for a text editor, and Excel XML for a spreadsheet. So you can paste into either one.

* {api:anychart.core.dataSheet.Clipboard#copy}copy(){api} writes the selected rows to the system clipboard
* {api:anychart.core.dataSheet.Clipboard#cut}cut(){api} copies them and then clears the editable columns only
* {api:anychart.core.dataSheet.Clipboard#paste}paste(){api} fills the editable columns only, and drops the values that a validator rejects. It does not finish at once: the grid updates a moment later, when the browser gives it the content of the clipboard
* {api:anychart.core.dataSheet.Clipboard#includeHeaders}includeHeaders(){api} is off by default. Turn it on to add the column titles
* {api:anychart.core.dataSheet.Clipboard#buildTSV}buildTSV(){api} and {api:anychart.core.dataSheet.Clipboard#buildExcelXML}buildExcelXML(){api} return the same strings without touching the system clipboard. Both return an empty string when nothing is selected
* {api:anychart.core.dataSheet.Clipboard#enabled}enabled(false){api} turns the whole feature off

```
// copy, cut and paste act on the selected rows
chart.selection().mode('checkbox');

// add the column titles to the copied content - off by default
chart.clipboard().includeHeaders(true);

// select two rows, or there is nothing to copy
chart.selection().selectedIndices([0, 2]);

// buildTSV() returns the same text that copy() writes to the clipboard
var text = chart.clipboard().buildTSV();

// copy the selected rows to the system clipboard
chart.clipboard().copy();
```

The copied values are the raw data, not the text in the cells. A cell that shows `1,200` copies as `1200`.

The grid changes a value that starts with `=`, so a spreadsheet does not run it as a formula.

In checkbox mode a click anywhere on a row toggles that row, not only a click on the checkbox.

The `clipboardcopy` and `clipboardpaste` events fire - see [Events](#events).

{sample}DS\_Data\_Sheet\_17{sample}

## Context Menu

The context menu - the menu you open with a right-click - is on by default. On a cell it holds, in this order: Sort Ascending, Sort Descending, a separator, Pin Left (or Unpin Column), a separator, Export as CSV, Export as JSON, Print to PDF. A right-click on a header adds a Group by / Remove Grouping entry.

The icons come from the AnyChart icon font - see [Modules and Styles](#modules_and_styles).

{api:anychart.core.dataSheet.ContextMenu#items}items([...]){api} replaces the whole set. An item is `{text, action, icon}`, or `{separator: true}`. If `action` is a string, it names one of the built-in actions: `sortAsc`, `sortDesc`, `pinLeft`, `unpin`, `exportCsv`, `exportJson` or `print`. If `action` is a function, the grid calls it with a context object with `rowIndex`, `colIndex`, `dataIndex` and `field`:

```
// replace the whole menu: two built-in actions and one of your own
chart.contextMenu().items([
  {text: 'Sort Ascending',  action: 'sortAsc',  icon: 'ac ac-sort-amount-asc'},
  {text: 'Sort Descending', action: 'sortDesc', icon: 'ac ac-sort-amount-desc'},
  {separator: true},
  {text: 'Show cell info', icon: 'ac ac-info-circle', action: function (context) {
    // the context tells you which cell the menu was opened on
    info.innerHTML = 'field: ' + context.field + ', data index: ' + context.dataIndex;
  }}
]);

// open the same menu from your own button
chart.contextMenu().show(x, y, {rowIndex: 0, colIndex: 2, dataIndex: 0, field: 'price'});
```

`items(null)` restores the defaults. `items()` with no argument does **not** read the menu back: it also throws your custom menu away and goes back to the defaults. There is no way to read the current menu.

{api:anychart.core.dataSheet.ContextMenu#show}show(x, y, context){api} opens the menu from your own button or a long press, and {api:anychart.core.dataSheet.ContextMenu#hide}hide(){api} closes it. Build the context object with those four names. A menu you open this way always shows the entries for a cell, never the ones for a header. {api:anychart.core.dataSheet.ContextMenu#enabled}enabled(false){api} turns the menu off completely.

A `contextmenuaction` event carries `item`, `rowIndex` and `colIndex`.

{sample}DS\_Data\_Sheet\_18{sample}

## Export and Print

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
* `pageSize` - `'A4'`, `'Letter'` and so on. The grid checks only the characters. If a value holds anything but letters, digits and spaces, the grid uses A4 instead. If a value looks correct, the grid passes it to the browser, and a browser that does not know that size uses its own default page size

Printing always follows the current sorting and filtering.

This is not the AnyChart Exports module. The Data Sheet still has the shared `saveAsPng()`, `saveAsPdf()`, `saveAsSvg()` and `toSvg()` methods. You will find them on the object, but they do not export the grid. The grid is HTML. These methods save the hidden SVG drawing area behind the grid, and that area is empty. Use `export().csv()`, `export().json()` or `print()` instead.

{sample}DS\_Data\_Sheet\_19{sample}

## Saved Layout

The {api:anychart.charts.DataSheet#state}state(){api} controller writes the current layout into the `localStorage` of the browser and reads it back, so a user finds the table as they left it. The snapshot holds the column widths, the pinned flags, the column order, the sorting, the filter, the selection mode and, when a hierarchy is active, the open and closed groups. It does **not** hold the data or the column declarations. Build those in code first, then restore.

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

## Accessibility

The Data Sheet is real HTML, so a screen reader can read it as a table. No SVG chart type can do that.

The grid writes these attributes:

<table class="dtTABLE" width="700">
<tbody>
<tr><th width="220">Element</th><th width="480">Attributes</th></tr>
<tr><td>the grid root</td><td>role="grid", aria-label="Data Sheet", tabindex="0", aria-rowcount, aria-colcount, and aria-multiselectable="true" in multi or checkbox selection mode</td></tr>
<tr><td>the header row</td><td>role="row"</td></tr>
<tr><td>a header cell</td><td>role="columnheader" with aria-sort set to none, ascending or descending</td></tr>
<tr><td>the scrolling area</td><td>role="rowgroup"</td></tr>
<tr><td>a row</td><td>role="row" with aria-rowindex</td></tr>
<tr><td>a cell</td><td>role="gridcell"</td></tr>
</tbody>
</table>

`aria-rowcount` reports every row the current filter keeps, even though only the visible rows exist in the page - see [Large Data Sets](#large_data_sets).

The grid also adds a "Skip to data" link at the top. A keyboard user can jump past the header with it. `tabindex="0"` on the root means the user can Tab into the grid and then use the keys in [Keyboard Shortcuts](#keyboard_shortcuts).

**One part does not work yet.** The grid creates an ARIA live region. That is a hidden element: when its text changes, a screen reader reads the new text out loud. The region is "polite", which means that the screen reader waits until it has finished the current sentence. In this release nothing writes text into that region, so a screen reader does not announce a sort or a filter change. If you need those announcements, write them into a live region of your own from the `sort` and `filter` [events](#events).

This section has no sample, because it is about attributes and a sample shows pixels. Open the browser inspector on the [Quick Start](#quick_start) grid and look at the root element to see them.

## Events

Listen with the normal `chart.listen(type, handler)`.

Write the event name as a plain string. The `anychart.enums` object is not there when your code runs, so you cannot use its constants. The names are not case sensitive: `listen()` and the grid both change the name to lower case. Note that `e.type` always arrives in lower case: a listener for `'rowSelect'` reads `e.type` as `'rowselect'`.

<table class="dtTABLE" width="700">
<tbody>
<tr><th width="200">Event</th><th width="500">Payload and notes</th></tr>
<tr><td>sort</td><td>column and order for a plain header click, sorts for a sort set from code or by Shift+click</td></tr>
<tr><td>filter</td><td>filteredCount, totalCount</td></tr>
<tr><td>rowSelect</td><td>dataIndex, selectedIndices</td></tr>
<tr><td>columnresize</td><td>columnIndex, width</td></tr>
<tr><td>columnreorder</td><td>fromIndex, toIndex</td></tr>
<tr><td>groupchange</td><td>fires when the grouping changes</td></tr>
<tr><td>search</td><td>query, matchCount</td></tr>
<tr><td>celleditstart</td><td>fires before an editor opens. Return false to stop it</td></tr>
<tr><td>celleditend</td><td>field, oldValue, newValue. It fires just before the grid writes the value into your row object</td></tr>
<tr><td>clipboardcopy</td><td>fires after a copy or a cut</td></tr>
<tr><td>clipboardpaste</td><td>fires after a paste</td></tr>
<tr><td>contextmenuaction</td><td>item, rowIndex, colIndex</td></tr>
<tr><td>dataload, dataerror</td><td>they belong to the dataSource() controller, which this article does not cover - see [Data](#data)</td></tr>
<tr><td>detailexpand, detailcollapse</td><td>they belong to detail rows, which do not work in this release - see [What Is Not Supported](#what_is_not_supported)</td></tr>
</tbody>
</table>

```
// a plain header click sends column and order, a sort set from code sends sorts
chart.listen('sort', function (e) {
  var text = e.sorts
    ? e.sorts.map(function (s) { return s.field + ' ' + s.order; }).join(', ')
    : e.column + ' ' + e.order;
  log(e.type + ' - ' + text);
});

chart.listen('filter', function (e) {
  log(e.type + ' - ' + e.filteredCount + ' of ' + e.totalCount + ' rows');
});

// rowSelect comes from a click or the keyboard, never from select() in code
chart.listen('rowSelect', function (e) {
  log(e.type + ' - data index ' + e.dataIndex + ', selected ' + e.selectedIndices.join(', '));
});

chart.listen('columnresize', function (e) {
  log(e.type + ' - column ' + e.columnIndex + ' is now ' + Math.round(e.width) + 'px');
});

chart.listen('columnreorder', function (e) {
  log(e.type + ' - from ' + e.fromIndex + ' to ' + e.toIndex);
});

chart.listen('search', function (e) {
  log(e.type + ' - "' + e.query + '", ' + e.matchCount + ' matches');
});
```

Three things surprise people:

* `rowSelect` fires from a user click or a keyboard selection. It does **not** fire from `select()` or `selectedIndices()` in code - see [Selection](#selection)
* To stop a cell edit, return `false` from your `celleditstart` listener. Do not call `e.preventDefault()` on `celleditstart` or `celleditend`. The event object has a property with that name. The property hides the method, so the call fails. Setting `e.preventDefault = true` does nothing either, because the listener gets a copy of the event
* `sort` fires whenever the grid re-sorts the rows, not only when the sort changes. A filter change or a data change re-runs the sort and fires the event again

There are no row click, double-click or hover events. Use `rowSelect` for a click, and CSS `:hover` or `rowHoverFill()` for a hover.

{sample}DS\_Data\_Sheet\_20{sample}

## What Is Not Supported

If you come here from a chart page, read this section first. It saves time.

**No `title()`, `legend()`, `tooltip()`, `credits()`, `animation()` or `background()`.** They are left out on purpose. The Data Sheet is built on `anychart.core.VisualBaseWithBounds`, not on the common chart class. Use a plain HTML heading above the container instead of `title()`. Use a panel of your own, or a DOM tooltip, instead of `tooltip()`. Use CSS instead of `background()`.

**No series, no axes, no scales, no data labels and no chart palette.** The general Interactivity, Labels and Tooltip articles do not apply to this type. Do not follow those cross-links from other pages - they do not help you with this type.

**`anychart.data.Set` and `anychart.data.View` do not work yet.** Pass a plain array - see [Data](#data).

**Tree rows cannot be closed** in this release, and the arrows do nothing - see [Tree Data](#tree_data). Groups open and close normally.

**Detail rows do not work.** The `detailRow()` methods are in the API, but the grid never removes the elements it creates for a detail row. More and more of them stay in the page. Do not use them yet.

**`cellPadding()` and `cellBorder()` have no effect,** and neither do the group header color and the tree indent. Use CSS - see [CSS Classes](#css_classes).

**A column cannot be hidden or removed.** There is no `removeColumn()`, and a column has no `visible()` setting, so the set of columns only grows. To show a different set of columns, build a new Data Sheet - see [Defining Columns](#defining_columns).

**A cell holds plain text only.** There is no cell renderer, so a badge, a link, a button or an icon inside a cell is not possible. A format function also sees the cell value alone, never the whole row - see [Data Types and Formats](#data_types_and_formats).

**There is no date filter.** Filtering handles text, numbers and booleans only - see [Filtering](#filtering).

**An edit can only be started by the user.** `startEdit()` and `moveToNextCell()` are in the API, but they need a cell element that no selector can find - see [Cell Editing](#cell_editing).

**`print({includeFiltered: true})` does nothing.** The API reference lists it as a way to print every row and ignore the current filter, but the option is lost when the library is compiled. Printing always follows the current sorting and filtering. Clear the filter before you print.

**Tab does not walk between editable cells.** It accepts the value and closes the editor - see [Cell Editing](#cell_editing).

**JSON has a limit.** {api:anychart.charts.DataSheet#toJson}toJson(){api} saves the settings, and `anychart.fromJson()` accepts the `'data-sheet'` type. But the data and the column setup are not part of that JSON. A grid built only from a configuration has no columns and no rows. Set those in code.

Sizing does work. `container()`, `width()`, `height()` and `bounds()` work as they do everywhere else in AnyChart - see [Appearance](#appearance).
