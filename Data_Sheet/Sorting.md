{:index 5}
# Sorting

Sorting sets the order of the rows in the grid. The user sorts by clicking a column header, and you can set the same order from code. A sort can have more than one level, so rows that tie on the first field are put in order by the next one.

Sorting is on from the start, so a grid that only needs header clicks needs no setup at all. This article shows how the header clicks work, how to set and clear a sort from code, what happens to header clicks while a sort set from code is in place, why sorting does nothing in a grouped grid, and what the `sort` event carries.

## Header Clicks

Click a header to sort that column. The first click sorts up (ascending), the second click sorts down (descending), and the third click removes the sort. Shift+click adds a second and a third sort level.

## Sort Methods

To sort from code, use the {api:anychart.charts.DataSheet#sorting}sorting(){api} controller of the grid. It keeps the list of sort levels, and each of its methods works on that list:

* {api:anychart.core.dataSheet.Sorting#sortBy}sortBy(field, order){api} - sets a single sort and clears the levels you had
* {api:anychart.core.dataSheet.Sorting#addSort}addSort(field, order){api} - adds one more sort level at the end of the list. If the field is already in the list, the grid moves it to the end
* {api:anychart.core.dataSheet.Sorting#getSorts}getSorts(){api} - returns a copy of the list, most important level first
* {api:anychart.core.dataSheet.Sorting#clearSort}clearSort(){api} - empties the list of sort levels and brings back the original row order
* {api:anychart.core.dataSheet.Sorting#order}order(){api} returns `'asc'`, `'desc'` or `'none'`, and {api:anychart.core.dataSheet.Sorting#column}column(){api} returns the field of the last level. You can also call each of them with a value. If the list of sort levels is empty, the grid then sorts by that field and that order. `sortBy()` does the same in one call. Use `sortBy()`
* {api:anychart.core.dataSheet.Sorting#enabled}enabled(false){api} - a click on a header no longer changes the order

## Sorting from Code

To sort by more than one field, call `sortBy()` for the first level and `addSort()` for every level after it. A numeric column needs `dataType`, or the grid sorts it as text - see [Data Types and Formats](Columns#data_types_and_formats):

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

Remember the redraw rule from [Rules for Every Grid](Overview#rules_for_every_grid): a sort you set from code takes effect on the next `draw()`.

## Code Sorts and Header Clicks

A sort set from code locks the plain header click. As long as the list of sort levels is not empty, a plain click on a header no longer changes the order. Shift+click still works, because it adds one more level to that list. To hand full control back to the user, call `clearSort()`, as the sample below does.

Use the `Clear sort` button in the sample below to hand the two-level sort back to the user: while that sort is set, a plain header click changes nothing.

{sample}DS\_Data\_Sheet\_09{sample}

## Flat Data Only

Sorting works on flat data only. When the rows are [grouped](Grouping), or when the grid reads your data as [tree data](Data#tree_data), the row order comes from the tree. The grid then ignores both header clicks and `sortBy()` - with no error, and the header still shows a sort arrow. Do not set a sort in a grouped grid.

## Sort Event

A `sort` event fires whenever the grid re-sorts the rows. That is more often than you would expect: a filter change or a data change re-runs the sort and fires the event again, even though the sort itself did not change. A `draw()` that changes nothing fires nothing.

The payload depends on where the sort came from, not on how many levels it has. A sort made by a plain header click carries `column` and `order`. A sort set with `sortBy()`, with `addSort()` or by Shift+click carries `sorts` instead, even when it has only one level. So check `e.sorts` first, as the code in [Events](Events) does.
