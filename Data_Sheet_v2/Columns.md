{:index 4}
# Columns

## Overview

A data sheet builds one column per field of your data. Declare the columns yourself when you want to choose
which fields the reader sees, what their values look like, how wide they are and in which order they stand.

### Defining Columns

To declare a column, call {api:anychart.charts.DataSheet#column}column(){api} with the slot it occupies and a
configuration object. The `field` key binds the column to a field of your data, and `title` is the header text:

```
var chart = anychart.dataSheet(products);
chart.column(0, {field: 'product', title: 'Product', width: 220});
chart.column(1, {field: 'category', title: 'Category', width: 160});
chart.column(2, {field: 'price', title: 'Price, USD', width: 140, dataType: 'number'});
```

Declare the slots 0 to n once, before the first draw(). The columns you declare are the whole set, so the fields
you leave undeclared stay out of the grid, and {api:anychart.charts.DataSheet#columnCount}columnCount(){api}
reports how many columns the grid has. The rest of the configuration keys are on the
{api:anychart.core.dataSheet.Column}Column{api} page.

In the sample below, three of the six fields in the data are declared as columns, and the count above the grid is
read from the chart.

{sample}DSV2\_Data\_Sheet\_06{sample}

### Types and Formats

The `dataType` key tells the column how to treat its values: `'number'`, `'date'`, `'boolean'` or `'string'`.
Number and date cells are formatted by AnyChart, not by the browser, so they read the same on every machine, and a
boolean cell shows a tick or a cross.

```
chart.column(1, {field: 'price', title: 'Price', width: 120, dataType: 'number', format: '${%value}'});
chart.column(2, {field: 'date', title: 'Added', width: 130, dataType: 'date'});
chart.column(3, {field: 'inStock', title: 'In Stock', width: 110, dataType: 'boolean'});
```

To compose the cell text yourself, set `format` either to a string carrying the `{%value}` placeholder, as the
price column above does, or to a function that takes no arguments and reads `this.value`:

```
chart.column(4, {field: 'units', title: 'Units', width: 130, dataType: 'number',
  format: function () {
    return this.value + ' pcs';
  }
});
```

A cell is plain text, so HTML in a value or in a format string reaches the reader as characters.

In the sample below, a number, a date and a boolean column stand beside a format string and a format function.

{sample}DSV2\_Data\_Sheet\_07{sample}

### Width

The `width` key sets how wide a column is, and `minWidth` and `maxWidth` clamp that width. A column with `sizing`
set to `'flex'` takes a share of the space the other columns leave instead: the free space is split between the
flexible columns in the ratio of their `flex` weights.

```
chart.column(0, {field: 'product', title: 'Product', width: 240, minWidth: 180, maxWidth: 200});
chart.column(1, {field: 'price', title: 'Price', width: 120, dataType: 'number'});
chart.column(2, {field: 'category', title: 'Category', sizing: 'flex', flex: 1});
chart.column(3, {field: 'units', title: 'Units', sizing: 'flex', flex: 2, dataType: 'number'});
```

In the sample below, the first column is held to its maximum width and the last two split the free space one to two.

{sample}DSV2\_Data\_Sheet\_08{sample}

### Pinning

To keep a column at the edge of the grid while the reader scrolls the rest sideways, set its `pinned` key to
`'left'`. Give every column a `minWidth` equal to its `width` as well: that is what stops the columns from
squeezing into the container, and a grid that already fits has nothing to scroll.

```
chart.column(0, {field: 'product', title: 'Product', width: 220, minWidth: 220, pinned: 'left'});
chart.column(1, {field: 'category', title: 'Category', width: 180, minWidth: 180});
chart.column(2, {field: 'price', title: 'Price', width: 180, minWidth: 180, dataType: 'number'});
```

The context menu of a header pins and unpins its column too.

In the sample below, the product column holds at the left edge while the other columns move with the scroll.

{sample}DSV2\_Data\_Sheet\_09{sample}

### Order

To move a column into another slot, call {api:anychart.charts.DataSheet#reorderColumn}reorderColumn(){api} with
the slot it is in and the slot it should take:

```
function movePrice(slot) {
  chart.reorderColumn(priceIndex, Number(slot));
}
```

Each move dispatches a `columnreorder` event carrying `fromIndex` and `toIndex`, which is where the column's new
slot comes from:

```
chart.listen('columnreorder', function (e) {
  priceIndex = e.toIndex;
});
```

In the sample below, the select moves the price column to the slot you choose and the event writes the move out.

{sample}DSV2\_Data\_Sheet\_10{sample}
