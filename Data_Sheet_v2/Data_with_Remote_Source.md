{:index 3.5}
# Data with Remote Source

## Overview

A Data Sheet reads several data shapes: an array of row objects, an array of arrays, CSV text, and the two tree formats. This page shows where the columns of each shape come from, how tree rows open and close, and how to put new rows into a grid that is already on screen.

### Data Formats

To show an array of row objects, pass it to {api:anychart#dataSheet}anychart.dataSheet(){api}. The keys of the first row become the columns, capitalized:

```
// an array of row objects: the keys of the first row become the columns
var rows = [
  {product: "Laptop", category: "Tech", price: 1200, units: 34},
  {product: "Chair", category: "Office", price: 150, units: 120},
  {product: "Monitor", category: "Tech", price: 300, units: 58}
];
var objectGrid = anychart.dataSheet(rows);
```

An array of arrays gives positional columns, titled `0`, `1`, and on:

```
// an array of arrays: the columns are positional, titled 0, 1, and on
var cells = [
  ["Laptop", "Tech", 1200, 34],
  ["Chair", "Office", 150, 120],
  ["Monitor", "Tech", 300, 58]
];
var arrayGrid = anychart.dataSheet(cells);
```

CSV text is read with its header line taken verbatim as the column keys. Parser settings, such as a different column separator, go in the second argument of `anychart.dataSheet()`:

```
// CSV text: the header line is taken verbatim as the column keys
var csv = "product,category,price,units\n" +
  "Laptop,Tech,1200,34\n" +
  "Chair,Office,150,120\n" +
  "Monitor,Tech,300,58";
var csvGrid = anychart.dataSheet(csv);
```

{api:anychart.charts.DataSheet#data}data(){api} takes the same shapes, an `anychart.data.Set`, an `anychart.data.View`, and a `{header, rows}` object whose header is also taken verbatim.

Automatic columns are built from the keys of the first row only, so declare the columns with {api:anychart.charts.DataSheet#column}column(){api}, as [Columns](Columns) shows, whenever the rows are not uniform.

In the sample below, the same products are shown three times, one grid per format.

{sample}DSV2\_Data\_Sheet\_03{sample}

### Remote Data Source

To feed the grid from a source of your own, give {api:anychart.charts.DataSheet#dataSource}dataSource(){api} an adapter function through {api:anychart.core.dataSheet.DataSource#setAdapter}setAdapter(){api}. The grid calls the adapter when it draws, asking for the first page of rows, and shows what comes back; the source is active from the moment the adapter is set.

The adapter is called with `(params, callback)`: `params.page` and `params.pageSize` say which rows to hand back, and the callback takes `{data: Array, total: number}`. The request the grid makes when it draws carries page 0, the first page.

```
// create a data sheet with no rows of its own
var grid = anychart.dataSheet();

// the grid calls this function when it draws, for the first page
grid.dataSource().setAdapter(function (params, callback) {
  callback({data: loadPage(params.page, params.pageSize), total: catalog.length});
});
```

{api:anychart.core.dataSheet.DataSource#pageSize}pageSize(){api} sets how many rows the grid asks for when it draws, fifty by default, and {api:anychart.core.dataSheet.DataSource#totalRows}totalRows(){api} gives the total the response reported, zero until one arrives.

```
// ask for eight rows in that request
grid.dataSource().pageSize(8);
// the total the source reported in its response
var total = grid.dataSource().totalRows();
```

In the sample below the grid fills itself from a function held on the page, and the output reads the total that function reported.

{sample}DSV2\_Data\_Sheet\_19{sample}

### Tree Data

The grid reads two tree formats: **nested**, where a parent row holds its children in a `children` array, and **flat**, where every row has an `id` and a child row points to its parent with a `parent` field. The names `children`, `id` and `parent` are fixed. The nested format is read from the first row, and the flat format asks for an `id` on the first row and a `parent` among the first rows of the array.

```
var data = [
  {product: "Tech", category: "Tech", units: 332, price: 1580, children: [
    {product: "Laptop", category: "Tech", units: 34, price: 1200},
    {product: "Monitor", category: "Tech", units: 58, price: 300},
    {product: "Keyboard", category: "Tech", units: 240, price: 80}
  ]}
];
var chart = anychart.dataSheet(data);
```

Declare the columns you want, and the `children` field stays out of the grid:

```
chart.column(0, {field: "product", title: "Product", width: 220});
chart.column(1, {field: "units", title: "Units", width: 120, dataType: "number"});
chart.column(2, {field: "price", title: "Price", width: 140, dataType: "number"});
```

Tree rows open and close. Click the arrow in a row to toggle one node, or drive the tree from code through {api:anychart.charts.DataSheet#hierarchy}hierarchy(){api}: {api:anychart.core.dataSheet.Hierarchy#expand}expand(key){api}, {api:anychart.core.dataSheet.Hierarchy#collapse}collapse(key){api} and {api:anychart.core.dataSheet.Hierarchy#toggle}toggle(key){api} take one node, and {api:anychart.core.dataSheet.Hierarchy#expandAll}expandAll(){api} and {api:anychart.core.dataSheet.Hierarchy#collapseAll}collapseAll(){api} take the whole tree. The key of a tree node is its data index as a string, so `collapse("0")` closes the first row.

```
chart.hierarchy().collapseAll();
chart.hierarchy().expandAll();
```

These calls paint the grid themselves, and the state they set holds from one painting to the next.

In the sample below, the buttons open and close the whole product tree, and a row arrow toggles a single node.

{sample}DSV2\_Data\_Sheet\_04{sample}

### Updating the Data

To put new rows into a grid that is on screen, build a new array, pass it to `data()`, and call `draw()`:

```
rows = rows.concat([{product: "Desk", category: "Office", price: 450, units: 12}]);
chart.data(rows);
chart.draw();
```

`data()` compares the array you pass with the array it holds, so filling the same array and passing it again shows nothing new. `concat()` hands back a new array every time.

In the sample below, the button adds a product and the new row appears.

{sample}DSV2\_Data\_Sheet\_05{sample}
