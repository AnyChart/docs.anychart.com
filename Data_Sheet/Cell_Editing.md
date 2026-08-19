{:index 8}
# Cell Editing

Cell editing lets the user change a value directly in the grid. A double-click opens an editor inside the cell, and the accepted value goes into the row object you passed to the grid, so the array in your page stays the current copy of the data.

Use cell editing when people correct or enter values in the table instead of only reading them - a price list, a stock count, a review sheet. This article shows how to turn editing on, which editor each column gets, how to check a value before the grid accepts it, how to undo a change, how to read the edited data, and which limits the editor has in this release.

## Turning Editing On

Editing needs **two** switches, and one alone does nothing:

* {api:anychart.core.dataSheet.CellEditor#enabled}cellEditor().enabled(true){api} on the grid
* {api:anychart.core.dataSheet.Column#editable}editable: true{api} on each column you want to edit

Both are off by default. Once both are set, double-click a cell to start editing it. In the code below, only `Product` and `Price` are editable:

```
// editing needs TWO switches: editable on the column, and cellEditor().enabled() on the grid
// declare every column from index 0 up, with no gaps
chart.column(0, {field: 'product',  title: 'Product',  width: 150, editable: true});
chart.column(1, {field: 'category', title: 'Category', width: 120});
chart.column(2, {field: 'price',    title: 'Price',    width: 110, dataType: 'number', editable: true});
chart.column(3, {field: 'stock',    title: 'Units',    width: 110, dataType: 'number'});

chart.cellEditor().enabled(true);
```

## Editors and Data Types

The editor element follows the column `dataType`: a number input for `'number'`, a date input for `'date'`, a true/false select for `'boolean'`, and a text input for anything else. That is one more reason to set `dataType` on a declared column - see [Data Types and Formats](Columns#data_types_and_formats).

## Validation

{api:anychart.core.dataSheet.Column#validator}validator(fn){api} checks a value before the grid accepts it. **Set it as a method call.** The column configuration object ignores it, like every other key outside the eleven listed in [Defining Columns](Columns#defining_columns). The function receives `(value, rowData)`. Return `true` to accept the value, or a message string to reject it. If your function rejects a value, the editor stays open and shows your message:

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

Enter accepts the value. Esc cancels the edit. A click outside the cell accepts the value as well. {api:anychart.core.dataSheet.CellEditor#commitEdit}commitEdit(){api}, {api:anychart.core.dataSheet.CellEditor#cancelEdit}cancelEdit(){api} and {api:anychart.core.dataSheet.CellEditor#isEditing}isEditing(){api} do the same from your own buttons.

## Starting an Edit from Code

**Only the user can start an edit.** The API reference lists {api:anychart.core.dataSheet.CellEditor#startEdit}startEdit(){api}, but it wants the internal cell element of the grid, and a data cell has no attribute that a selector can use to find it - see [CSS Classes](Appearance#css_classes). So there is no supported way to open an editor from a button of your own in this release. {api:anychart.core.dataSheet.CellEditor#moveToNextCell}moveToNextCell(){api} fails for the same reason. It is the method the Tab key calls, and it is why Tab closes the editor instead of stepping to the next cell.

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

To stop an edit from starting, return `false` from a `celleditstart` listener. Do **not** call `e.preventDefault()` on that event - see [Events](Events).

## Editing Limits

Five things to know before you use cell editing in your own code:

* **Tab does not move to the next editable cell.** It accepts the value and closes the editor. Shift+Tab does the same. Use the mouse to open the next cell
* **The `celleditend` event fires just before the grid writes the new value into your row object.** A listener that reads your array at once sees the old value. Read `e.newValue`, or read your array a moment later inside `setTimeout(fn, 0)`, as the code above does
* **A cell you have just edited shows the raw value.** A number you accept reads `1350`, not `1,350`. The format comes back the next time the grid draws the rows. `undo()` does that, for example
* **A date edit writes back a string.** The editor is an `<input type="date">`, and the value it commits is the plain `yyyy-mm-dd` text, not a `Date`. A column that held `Date` objects holds strings after the first edit
* **A number edit with no validator becomes 0.** Text that is not a number is written into your data as `0`, not rejected. Add a validator if that matters

## Editing in Practice

In the sample below, double-click a Product or a Price cell to edit it: the panel under the grid shows your own array, a price of 0 or less is rejected, and `Undo last edit` reverts the last change.

{sample}DS\_Data\_Sheet\_13{sample}
