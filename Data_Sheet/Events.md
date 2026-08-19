{:index 15}
# Events

The grid reports what the user does through events. A header click, a filter, a row selection, a column resize, a clipboard action and a cell edit each fire an event, and the event object carries the details of what changed. You subscribe to them with the same `listen()` method that every other AnyChart type uses.

Use events when something outside the grid has to react: a counter that shows how many rows survived a filter, a panel that follows the selected row, a save call after an edit, or a rule that blocks an edit before the editor opens. This article shows how to attach a listener, lists every event with its payload, and covers the cases where an event fires more or less often than you expect.

## Attaching a Listener

To handle an event, use the normal `chart.listen(type, handler)`. Write the event name as a plain string. The `anychart.enums` object is not there when your code runs, so you cannot use its constants.

The names are not case sensitive: `listen()` and the grid both change the name to lower case. Note that `e.type` always arrives in lower case: a listener for `'rowSelect'` reads `e.type` as `'rowselect'`.

## Event Reference

The grid fires the events below. Each row names the payload the handler receives, or the behavior that is special to that event:

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

## Reading the Payload

To find out what changed, read the properties of the event object inside the handler. The listeners below read the payload of the six events that a user action produces most often:

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

Use the buttons in the sample below, and click a header, click a row or drag a column edge, to see each event and its payload appear in the log.

{sample}DS\_Data\_Sheet\_20{sample}

## When Events Fire

`rowSelect` fires from a user click or a keyboard selection. It does **not** fire from `select()` or `selectedIndices()` in code - see [Selection](Selection).

`sort` fires whenever the grid re-sorts the rows, not only when the sort changes. A filter change or a data change re-runs the sort and fires the event again. See [Sorting](Sorting) and [Filtering](Filtering_and_Search).

## Blocking a Cell Edit

To stop a cell edit, return `false` from your `celleditstart` listener. Do not call `e.preventDefault()` on `celleditstart` or `celleditend`. The event object has a property with that name. The property hides the method, so the call fails. Setting `e.preventDefault = true` does nothing either, because the listener gets a copy of the event. See [Cell Editing](Cell_Editing).

## Mouse and Hover Events

There are no row click, double-click or hover events. Use `rowSelect` for a click, and CSS `:hover` or `rowHoverFill()` for a hover - see [Appearance](Appearance).
