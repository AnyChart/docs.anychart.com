{:index 15}
# Events

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
<tr><td>dataload, dataerror</td><td>they belong to the dataSource() controller, which this section does not cover - see [Data](Data)</td></tr>
<tr><td>detailexpand, detailcollapse</td><td>they belong to detail rows, which this section does not cover</td></tr>
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

* `rowSelect` fires from a user click or a keyboard selection. It does **not** fire from `select()` or `selectedIndices()` in code - see [Selection](Selection)
* To stop a cell edit, return `false` from your `celleditstart` listener. Do not call `e.preventDefault()` on `celleditstart` or `celleditend`. The event object has a property with that name. The property hides the method, so the call fails. Setting `e.preventDefault = true` does nothing either, because the listener gets a copy of the event
* `sort` fires whenever the grid re-sorts the rows, not only when the sort changes. A filter change or a data change re-runs the sort and fires the event again

There are no row click, double-click or hover events. Use `rowSelect` for a click, and CSS `:hover` or `rowHoverFill()` for a hover.

{sample}DS\_Data\_Sheet\_20{sample}
