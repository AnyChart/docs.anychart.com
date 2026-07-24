{:index 5}
# Sorting

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

Remember the redraw rule from [Quick Start](Overview#quick_start): a sort you set from code takes effect on the next `draw()`.

**Limit 1: a sort set from code locks the plain header click.** As long as the list of sort levels is not empty, a plain click on a header no longer changes the order. Shift+click still works, because it adds one more level to that list. Call `clearSort()` to hand full control back to the user, as the sample below does.

**Limit 2: sorting works on flat data only.** When the rows are grouped, or when the grid reads your data as a tree, the row order comes from the tree. The grid then ignores both header clicks and `sortBy()` - with no error, and the header still shows a sort arrow. Do not set a sort in a grouped grid.

A `sort` event fires whenever the grid re-sorts the rows. That is more often than you would expect: a filter change or a data change re-runs the sort and fires the event again, even though the sort itself did not change. A `draw()` that changes nothing fires nothing.

The payload depends on where the sort came from, not on how many levels it has. A sort made by a plain header click carries `column` and `order`. A sort set with `sortBy()`, with `addSort()` or by Shift+click carries `sorts` instead, even when it has only one level. So check `e.sorts` first, as the code in [Events](Events) does.

{sample}DS\_Data\_Sheet\_09{sample}
