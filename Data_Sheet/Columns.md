{:index 3}
# Columns

A column is one vertical slice of the grid. It binds to one field of your data, carries a title in the header, and decides how the grid formats, sorts and edits every value under that title. With no setup at all the grid builds one column per key of the first row object, which is enough for a quick look at the data. As soon as you need a real table - your own titles, a money format, a fixed left column - you declare the columns yourself and take over the whole set.

This article shows how to declare columns, how to set the data type and the format of their cells, how to control their width, and how to pin a column to an edge or move it to another position. Every setting on this page belongs to a single column.

## Defining Columns

To declare a column, call the {api:anychart.charts.DataSheet#column}column(){api} method. `column(index)` gets a column, or creates it if it does not exist yet. `column(index, {...})` configures it. Pass the configuration object as the second argument: the {api:anychart.core.dataSheet.Column#field}field{api} property says which data field the column shows, {api:anychart.core.dataSheet.Column#title}title{api} sets the header text, and `width` sets the width in pixels.

**The binding property is `field`, never `key`.** This is the most common mistake with this type. A column with `key` shows its title, but all of its cells stay empty. The grid writes no message to the console. Developers who come from another grid library often type `key` by habit.

The grid reads exactly eleven keys from the configuration object: `field`, `title`, `width`, `minWidth`, `maxWidth`, `dataType`, `format`, `editable`, `pinned`, `sizing` and `flex`. It ignores every other key, and it shows no warning. In particular {api:anychart.core.dataSheet.Column#validator}validator{api} is **not** one of them. Set it as a method call, `chart.column(1).validator(fn)` - see [Cell Editing](Cell_Editing).

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

In the sample below, six data fields give three declared columns, and a method call replaces the title of the price column.

{sample}DS\_Data\_Sheet\_04{sample}

### Column Indexes

The index you pass is a position in the list of columns. The columns appear in the index order you declare.

**Start at 0 and leave no gaps.** If you declare index 2 but not indices 0 and 1, those two positions stay empty, and the next `draw()` throws a `TypeError` and shows nothing at all. Declare every index from 0 up to the last one you need.

### The Fixed Column Set

A declared set of columns **replaces** the whole automatic set. The sample data above has six fields, three columns are declared, and {api:anychart.charts.DataSheet#columnCount}columnCount(){api} returns 3.

**A column cannot be removed.** There is no `removeColumn()`, and a column has no `visible()` setting, so the set of columns only ever grows. Declare the columns you want once, before the first `draw()`. To show a different set later, build a new Data Sheet. For the same reason, never call `column(index)` just to test whether a column exists: as a getter it creates the column when the index is new.

## Data Types and Formats

A column's `dataType` tells the grid what kind of values the column holds. **Set `dataType` on every column you declare.** A declared column is a string column until you say otherwise. Only automatic columns get a detected type. A number in a string column loses its thousands separator, and the grid sorts it as text, so `'1200'` comes before `'450'`.

{api:anychart.core.dataSheet.Column#dataType}dataType{api} takes `'string'`, `'number'`, `'date'` or `'boolean'`. It controls three things: how the grid compares values when it sorts (see [Sorting](Sorting)), how it formats them, and which editor opens on a double-click (see [Cell Editing](Cell_Editing)).

### Default Format of Each Type

Until you set a format of your own, each type renders its values in a way that suits it:

* `'number'` - thousands separators, from `toLocaleString()`
* `'boolean'` - a check mark or a cross
* `'date'` - a date in the date format of the browser's language. Your value can be a `Date` object, a number of milliseconds, or a text string that `new Date()` can read. The grid shows any other value as it is, and sorts it as January 1, 1970
* `'string'` - the plain text

### Custom Formats

To render the cells your own way, use the {api:anychart.core.dataSheet.Column#format}format{api} setting. It replaces the default format of the type and takes either a format string or a function.

A format string holds the `{%value}` placeholder: the grid puts the cell value there. For example, `'{%value} pcs'` or `'${%value}'`. Add `{decimalsCount:N}` right after the placeholder to set the number of decimal places: `'${%value}{decimalsCount:2}'` shows `1200` as `$1200.00`.

**A format function takes no arguments.** The value arrives as `this.value`. A function written as `function (v) { return '$' + v; }` renders `$undefined`.

**`this.value` is all there is.** The grid calls your function with an object that holds the cell value and nothing else - no row object, no field name, no row index. So a format function cannot look at another column of the same row. If your formatting depends on the whole row, build a ready-made text field in your data first and bind a column to that field.

Both forms replace the default formatting of the type. So a number column with a format loses its thousands separator: `1200` renders as `$1200`, not `$1,200`. The default separator comes from `toLocaleString()`, so a format function can put it back. That is the last column in the block below. A format string cannot do this: `{decimalsCount:N}` sets the decimal places, but it never adds a separator.

```
// a declared column is a string column unless you say otherwise
chart.column(0, {field: 'product', title: 'Product', width: 200});

// dataType 'number' adds the thousands separator: 1200 becomes 1,200
chart.column(1, {field: 'price', title: 'Price', width: 130, dataType: 'number'});

// a format FUNCTION takes no arguments - the value arrives as this.value
// it also replaces the default number formatting, so the separator is gone
chart.column(2, {
  field: 'price',
  title: 'Price, function',
  width: 170,
  dataType: 'number',
  format: function () {
    return '$' + this.value;
  }
});

// a format STRING uses the {%value} placeholder
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

More than one column can bind the same field. In the sample below, `price` appears four times, so you can watch the separator appear and disappear side by side.

{sample}DS\_Data\_Sheet\_05{sample}

### Cell Content

**A cell holds plain text only.** The grid writes whatever the format returns into the cell as text. HTML in that text appears as characters, not as markup. There is no cell renderer in this API, so a badge, a link, a button or an icon inside a cell is not possible in this release. Color a whole row with `rowEvenFill()` and `rowOddFill()`, or a whole column with a CSS rule - see [Appearance](Appearance).

## Column Width

Five settings control the width of a column. Two of them set the numbers, two set the limits, and one picks the mode that decides which of the numbers the grid actually uses.

### Width Settings

Set these keys in the configuration object, or call them as methods on the column:

* {api:anychart.core.dataSheet.Column#width}width{api} - the width in pixels, 150 by default. If you set 0 or a value that is not a number, the grid uses 150
* {api:anychart.core.dataSheet.Column#minWidth}minWidth{api} - 50 by default
* {api:anychart.core.dataSheet.Column#maxWidth}maxWidth{api} - no limit by default
* {api:anychart.core.dataSheet.Column#sizing}sizing{api} - `'fixed'` (default), `'auto'` or `'flex'`. For any other value the grid uses `'fixed'`
* {api:anychart.core.dataSheet.Column#flex}flex{api} - the weight of a `'flex'` column, 1 by default

### Sizing Modes

A `'fixed'` column keeps the width you set. An `'auto'` column is as wide as its widest cell, but never narrower than `minWidth` and never wider than `maxWidth`. The `'flex'` columns share the free space that is left, by weight. Two flex columns with weights 1 and 2 split that space one third to two thirds.

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

In the sample below, the SKU column is `'fixed'`, the Category column is `'auto'`, and the Product and Status columns are `'flex'` columns that split the free space one third to two thirds.

{sample}DS\_Data\_Sheet\_06{sample}

### Auto Column Measurement

You do not always have to call {api:anychart.charts.DataSheet#autoSizeColumns}autoSizeColumns(){api}. When `draw()` builds the layout again, it also measures the `'auto'` columns for you. A data change builds the layout again, so a plain `draw()` after a data change re-measures them too. But when a redraw only filters, sorts or searches again, it does not measure them. So call the method yourself when the measurement changed but the data did not - after a font or a CSS change, for example - and then call `draw()`. It never touches a `'fixed'` or a `'flex'` column.

### Manual Resizing

The user can drag the right edge of a header cell to resize a column. Every resize fires a `columnresize` event - see [Events](Events).

`minWidth` and `maxWidth` also limit how far the user can drag the edge of a column.

## Column Pinning

A pinned column stays at the edge of the grid while the other columns scroll sideways. The {api:anychart.core.dataSheet.Column#pinned}pinned{api} setting takes `'left'`, `'right'` or `false` (default). Any other value unpins the column.

**A pinned column needs a horizontal scrollbar, and the scrollbar needs `minWidth`.** Each row uses the CSS flexbox layout. That means the browser makes wide columns narrower so that they fit the container. Then the grid never scrolls sideways, the other columns never move, and pinning has no visible effect. Set `minWidth` equal to `width` on the columns, so the row cannot shrink them:

```
// the columns are wider than the container, so the grid scrolls sideways
// minWidth matters here: without it the row squeezes the columns to fit,
// nothing scrolls sideways, and a pinned column has nothing to freeze against
chart.column(0, {field: 'product',  title: 'Product',  width: 220, minWidth: 220, pinned: 'left'});
chart.column(1, {field: 'category', title: 'Category', width: 170, minWidth: 170});
chart.column(2, {field: 'price',    title: 'Price',    width: 160, minWidth: 160, dataType: 'number'});
chart.column(3, {field: 'stock',    title: 'In Stock', width: 160, minWidth: 160, dataType: 'number'});
chart.column(4, {field: 'sku',      title: 'SKU',      width: 160, minWidth: 160, dataType: 'number'});
chart.column(5, {field: 'status',   title: 'Status',   width: 200, minWidth: 200, pinned: 'right'});
```

The default [context menu](Keyboard_and_Clipboard#context_menu) also pins a column, with its "Pin Left" and "Unpin Column" items.

## Column Order

To move a column from code, call {api:anychart.charts.DataSheet#reorderColumn}reorderColumn(fromIndex, toIndex){api}. The user can do the same by dragging a header cell. Both routes fire a `columnreorder` event - see [Events](Events).

`reorderColumn()` refuses to move a pinned column, and it refuses to drop a column onto one. A drag has no such rule, so a user can still drag a pinned header out of its place.

```
// move SKU from position 4 to position 1
// pinned columns are never moved, so Product stays first and Status stays last
chart.reorderColumn(4, 1);
chart.draw();
```

In the sample below, Product is pinned left and Status is pinned right, so both stay in place while the other columns scroll sideways, and `reorderColumn(4, 1)` has already moved SKU to the second position.

{sample}DS\_Data\_Sheet\_07{sample}
