{:index 2}
# Data

Pass a plain array of row objects to {api:anychart.charts.DataSheet#data}data(){api}. This is the only data format that this type supports. Each object is one row, and each key is one field. Call `data()` with no argument to read the array of row objects back.

`anychart.data.Set` and `anychart.data.View` do **not** work with this type yet, even though most other AnyChart types accept them. If you pass a data set you get zero columns, no rows at all and the "No data" message - and no error. Use a plain array.

The grid can also load rows from a server, one page at a time. It does this through the {api:anychart.charts.DataSheet#dataSource}dataSource(){api} controller. A controller is a small object that holds the settings of one feature: you call its methods to read and change those settings. You give this one an adapter that loads a single page and reports the total number of rows. The grid then asks for a page when the user scrolls to it, keeps the pages it already has, and fires a `dataload` or a `dataerror` event - see [Events](Events). Loading data from a server is a big topic, and this section does not cover it. Read {api:anychart.core.dataSheet.DataSource}anychart.core.dataSheet.DataSource{api} for the whole controller. Everything else in this section works with the plain array above.

Every row keeps the index it had in the array you passed. That number is called the **data index**. [Selection](Selection) and the [events](Events) address rows by the data index, not by the position on screen. This matters as soon as sorting or filtering is on.

The two sections below cover tree-shaped data, and how to change the data after the grid is drawn.

## Tree Data

The Data Sheet reads two tree formats:

* **Nested** - a parent row holds its children in a `children` array
* **Flat** - every row has an `id`, and a child row points to its parent with a `parent` field

The field names `children`, `id` and `parent` are fixed. You cannot rename them.

The grid checks the **first row only** for the nested format. If the first row has no `children` array, the whole set renders as a flat table, and no error appears. Put a parent row first. For the flat format the first row must have an `id`, and at least one of the first 20 rows must have a `parent`.

Always declare your columns when you use nested data. With automatic columns the grid also makes a column for the `children` key, and those cells read `[object Object],[object Object]`:

```
// create tree data: the first row has a children array
var data = [
  {name: "Tech", units: 408, value: 94120, children: [
    {name: "Laptop", units: 34, value: 40800},
    {name: "Monitor", units: 58, value: 17400},
    {name: "Keyboard", units: 240, value: 19200},
    {name: "Headset", units: 76, value: 16720}
  ]},
  {name: "Office", units: 140, value: 28520, children: [
    {name: "Chair", units: 120, value: 18000},
    {name: "Desk", units: 12, value: 5400},
    {name: "Lamp", units: 0, value: 0},
    {name: "Cabinet", units: 8, value: 5120}
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
// and a child row points to its parent with parent
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

**Limitation.** Tree rows are always fully open in this release, and you cannot close them. The arrows appear, but a click on an arrow does nothing. {api:anychart.core.dataSheet.Hierarchy#collapseAll}collapseAll(){api} does nothing here either, because the grid rebuilds the tree fully open on every redraw. {api:anychart.core.dataSheet.Hierarchy#expandAll}expandAll(){api} is harmless, because everything is already open. Opening and closing **do** work for groups - see [Grouping](Grouping). Use {api:anychart.core.dataSheet.Hierarchy#isActive}isActive(){api} to check that the grid built a tree or a grouping. It returns true in both cases, so it never tells you which of the two you have. To find that out, call {api:anychart.core.dataSheet.Hierarchy#getGroupFields}getGroupFields(){api} as well. It returns `null` when you did not group the rows. So `isActive()` true plus `getGroupFields()` null means the grid read your data as a tree.

In the sample below, two parent rows carry four children each, and the three declared columns keep the `children` field out of the grid.

{sample}DS\_Data\_Sheet\_02{sample}

## Updating the Data

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

Cell editing works in the opposite direction. The grid writes the new values into the row objects you passed, so your own array already holds them. See [Cell Editing](Cell_Editing).

Use the buttons in the sample below to compare the two calls: `Add row, same array` leaves the grid unchanged, and `Add row, new array` makes the new rows appear.

{sample}DS\_Data\_Sheet\_03{sample}
