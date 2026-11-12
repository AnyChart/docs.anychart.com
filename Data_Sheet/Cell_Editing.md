{:index 8}
# Cell Editing

Cell editing lets the user change a value directly in the grid. A double-click opens an editor inside the cell, and the accepted value goes into the row object you passed to the grid, so the array in your page stays the current copy of the data.

Use cell editing when people correct or enter values in the table instead of only reading them - a price list, a stock count, a review sheet. This article shows how to turn editing on, which editor each column gets, how to check a value before the grid accepts it, how to undo a change, how to read the edited data, and which limits the editor has.

## Turning Editing On

To let the user edit a column, set {api:anychart.core.dataSheet.Column#editable}editable: true{api} on it. A column is not editable until you do. Then double-click a cell to start editing it. To turn editing off for the whole grid, call {api:anychart.core.dataSheet.CellEditor#enabled}cellEditor().enabled(false){api}. In the code below, only `Product` and `Price` are editable:

```
// editable: true lets the user edit the cells of a column
// declare every column from index 0 up, with no gaps
chart.column(0, {field: 'product',  title: 'Product',  width: 150, editable: true});
chart.column(1, {field: 'category', title: 'Category', width: 120});
chart.column(2, {field: 'price',    title: 'Price',    width: 110, dataType: 'number', editable: true});
chart.column(3, {field: 'stock',    title: 'Units',    width: 110, dataType: 'number'});
```

## Editors and Data Types

The editor element follows the column `dataType`: a number input for `'number'`, a date input for `'date'`, a true/false select for `'boolean'`, and a text input for anything else. That is one more reason to set `dataType` on a declared column - see [Data Types and Formats](Columns#data_types_and_formats).

## Validation

{api:anychart.core.dataSheet.Column#validator}validator(fn){api} checks a value before the grid accepts it. **Set it as a method call.** The column configuration object ignores it, like every other key outside the eleven listed in [Defining Columns](Columns#defining_columns). The function receives `(value, rowData)`. Return `true` to accept the value, or a message string to reject it. If your function rejects a value, the editor stays open:

```
// a validator must be set as a method call - the column configuration object ignores it
// return true to accept, or a message to reject and keep the editor open
chart.column(2).validator(function (value, rowData) {
  if (value <= 0) {
    return 'The price of ' + rowData.product + ' must be above 0';
  }
  return true;
});
```

## Committing and Canceling

Enter accepts the value. Esc cancels the edit. A click outside the cell accepts the value as well. Tab accepts the value and opens the next editable cell, and Shift+Tab goes back. {api:anychart.core.dataSheet.CellEditor#commitEdit}commitEdit(){api}, {api:anychart.core.dataSheet.CellEditor#cancelEdit}cancelEdit(){api} and {api:anychart.core.dataSheet.CellEditor#isEditing}isEditing(){api} do the same from your own buttons.

## Starting an Edit from Code

To open an editor from a button of your own, call {api:anychart.core.dataSheet.CellEditor#startEdit}startEdit(){api}. It takes seven arguments: the position of the row on screen, the data index, the column index, the field, the data type, the current value and the cell element. To find the cell element, use its `data-row` and `data-col` attributes - see [CSS Classes](Appearance#css_classes). {api:anychart.core.dataSheet.CellEditor#moveToNextCell}moveToNextCell(){api} accepts the current value and opens the next editable cell, and `moveToNextCell(true)` goes back. It is the method the Tab key calls.

## Undo

Ctrl+Z (Cmd+Z) undoes the last accepted change, and so does {api:anychart.core.dataSheet.CellEditor#undo}undo(){api}. The grid remembers the last 20 changes, and it records only the edits that really changed a value:

```
// undo() reverts the last committed change and redraws by itself
chart.cellEditor().undo();
```

## Reading the Edited Values

Edits write into the row objects you passed to `data()`, so your own array already holds the new values - see [Updating the Data](Data#updating_the_data). To act on each accepted edit, listen to `celleditend`. The event fires just before the grid writes the new value, so read your array on the next tick:

```
// the edits are written into the row objects you passed to data()
// celleditend fires just BEFORE the new value is written,
// so read your array on the next tick
chart.listen('celleditend', function () {
  setTimeout(showData, 0);
});
```

## Blocking an Edit

To stop an edit from starting, return `false` from a `celleditstart` listener, or call `e.preventDefault()` in it - see [Events](Events).

## Editing Limits

Three things to know before you use cell editing in your own code:

* **The `celleditend` event fires just before the grid writes the new value into your row object.** A listener that reads your array at once sees the old value. Read `e.newValue`, or read your array a moment later inside `setTimeout(fn, 0)`, as the code above does
* **A date edit writes back a string.** The editor is an `<input type="date">`, and the value it commits is the plain `yyyy-mm-dd` text, not a `Date`. A column that held `Date` objects holds strings after the first edit
* **A number edit that is not a number becomes an empty value.** Text that is not a number is written into your data as an empty string, not rejected. Add a validator if that matters

## Editing in Practice

In the sample below, double-click a Product or a Price cell to edit it: the panel under the grid shows your own array, a price of 0 or less is rejected, and `Undo last edit` reverts the last change.

{sample}DS\_Data\_Sheet\_13{sample}
