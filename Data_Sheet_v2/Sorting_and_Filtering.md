{:index 5}
# Sorting and Filtering

## Overview

The Data Sheet reorders, narrows and searches its rows without changing the data you gave it. Sorting works from the header and from code, filters stack field by field, the search bar finds text anywhere, and grouping folds rows into summarized groups.

### Sorting

Sorting is on from the start: the first click on a column header sorts the rows ascending, the second descending, the third clears the sort. That cycle runs while the code sort stack is empty: sortBy() or addSort() holds the headers off until clearSort().

To set the order from code, call {api:anychart.core.dataSheet.Sorting#sortBy}sortBy(){api} with a field and `"asc"` or `"desc"`: it sets a single sort and clears the other levels. {api:anychart.core.dataSheet.Sorting#addSort}addSort(){api} appends a level, for a multi-level order. A code sort lands on the next `draw()`.

```js
// order by category, then by price, highest first
chart.sorting().sortBy("category", "asc");
chart.sorting().addSort("price", "desc");
chart.draw();
```

{api:anychart.core.dataSheet.Sorting#order}order(){api} is `"asc"`, `"desc"` or `"none"`. Read {api:anychart.core.dataSheet.Sorting#getSorts}getSorts(){api} for the code sort stack, as `{field, order}` entries; a header sort stays out of it:

```js
var sorts = chart.sorting().getSorts();
```

{api:anychart.core.dataSheet.Sorting#clearSort}clearSort(){api} empties the stack and brings back the original row order:

```js
chart.sorting().clearSort();
chart.draw();
```

A numeric column needs `dataType`, or its values sort as text. Missing and unparseable values group at one end: last when ascending, first when descending.

In the sample below the selects and radio buttons drive sortBy() and addSort(); header clicks sort only once Clear sort empties the stack.

{sample}DSV2\_Data\_Sheet\_11{sample}

### Filtering

A filter reads the raw value, not the cell text. Filters on different fields combine; a second filter on the same field replaces the first.

To narrow the rows, call {api:anychart.core.dataSheet.Filter#filterBy}filterBy(){api} with a field and a config. A text filter matches case-insensitively in mode `"contains"` (the default), `"startsWith"` or `"exact"`, and an empty value lets every row through. A number filter takes `min` and `max`, both inclusive and both optional.

```js
chart.filter().filterBy("category", {type: "text", mode: "exact", value: "Tech"});
chart.filter().filterBy("price", {type: "number", max: 500});
chart.draw();
```

{api:anychart.core.dataSheet.Filter#clearFilter}clearFilter(){api} drops one field's filter and {api:anychart.core.dataSheet.Filter#clearFilters}clearFilters(){api} drops them all; {api:anychart.core.dataSheet.Filter#getFilter}getFilter(){api} returns one field's config, {api:anychart.core.dataSheet.Filter#getFilters}getFilters(){api} a copy of them all.

```js
chart.filter().clearFilter("price");
chart.filter().clearFilters();
```

The `filter` event carries `filteredCount` and `totalCount`:

```js
chart.listen("filter", function (e) {
  state.value = e.filteredCount + " of " + e.totalCount + " shown";
});
```

In the sample below the select and the slider filter two fields at once.

{sample}DSV2\_Data\_Sheet\_12{sample}

### Search

Ctrl+F opens the search bar and puts the cursor in its input. From code, {api:anychart.core.dataSheet.Search#show}show(){api} opens the same bar, {api:anychart.core.dataSheet.Search#close}close(){api} shuts it, and {api:anychart.core.dataSheet.Search#isVisible}isVisible(){api} tells you whether it is open.

{api:anychart.core.dataSheet.Search#query}query(){api} matches any part of a raw value, case-insensitively, over every row the filter keeps, looking only at fields that have a column.

```js
chart.search().show();
chart.search().query("tech");
chart.draw();
```

{api:anychart.core.dataSheet.Search#matchCount}matchCount(){api} counts the matching cells. {api:anychart.core.dataSheet.Search#next}next(){api} and {api:anychart.core.dataSheet.Search#prev}prev(){api} step through them and scroll each into view, cycling at both ends; Enter and Shift+Enter do the same from the search box. Every query fires `search` with `e.query` and `e.matchCount`.

```js
chart.search().next();
```

In the sample below the select runs a query and the buttons walk the matches.

{sample}DSV2\_Data\_Sheet\_13{sample}

### Grouping

{api:anychart.charts.DataSheet#groupBy}groupBy(){api} folds the rows under a group row showing the group name, its row count and the summaries. Pass one field, an array to nest fields in the order given, or `null` to drop the grouping; every change fires `groupchange` with the fields and lands on the next `draw()`.

Summaries go under an `aggregates` key mapping a field to `count`, `sum`, `avg`, `min`, `max`, `median`, `first`, `last` or a function.

```js
chart.groupBy("category", {aggregates: {price: "sum", units: "max"}});
chart.draw();
```

Nesting takes an array:

```js
chart.groupBy(["category", "supplier"], {aggregates: {price: "sum", units: "max"}});
```

groupBy() switches the group zone on by itself, and {api:anychart.charts.DataSheet#groupZone}groupZone(){api} shows it on an ungrouped grid. Each grouped field is a chip there: its cross removes the field, and a column header dragged into the zone groups by it.

To open and close groups from code, use the same {api:anychart.charts.DataSheet#hierarchy}hierarchy(){api} calls as [tree rows](Data):

```js
chart.hierarchy().expandAll();
chart.hierarchy().collapseAll();
```

In the sample below the select regroups the grid and the buttons open and close every group.

{sample}DSV2\_Data\_Sheet\_14{sample}
