{:index 6}
# Editing and Selection

## Overview

A Data Sheet lets a user pick rows, change values in place, take a change back and use the clipboard. Selection is whole rows only; editing is switched on column by column. Every index here is a data index, unchanged by sorting and filtering.

### Selection

To choose how rows are picked, set the mode:

```
// single, multi or checkbox
chart.selection().mode('checkbox');
```

In `single`, the default, a click replaces the selection, and a click on the selected row clears it. In `multi` a plain click replaces and Ctrl-click toggles one row. `checkbox` adds a leading checkbox column, and a click on a row toggles it. Changing the mode clears the selection. Enter and Space select the focused row.

To select from code, pass the data indices:

```
chart.selection().selectedIndices([0, 2, 4]);
```

{api:anychart.core.dataSheet.Selection#select}select(i){api}, {api:anychart.core.dataSheet.Selection#deselect}deselect(i){api}, {api:anychart.core.dataSheet.Selection#toggle}toggle(i){api} and {api:anychart.core.dataSheet.Selection#deselectAll}deselectAll(){api} change one row or all of them, {api:anychart.core.dataSheet.Selection#isSelected}isSelected(i){api} reports one, and the getter returns a copy. A selection made from code paints the grid itself and fires no `rowSelect`.

A user click fires `rowSelect` with the data index and the whole selection:

```
chart.listen('rowSelect', function (e) {
  out.value = 'dataIndex ' + e.dataIndex + ', selected [' + e.selectedIndices + ']';
});
```

To color the selected rows, call {api:anychart.charts.DataSheet#rowSelectedFill}rowSelectedFill(){api}:

```
chart.rowSelectedFill('#ffe082');
```

In the sample below the radios switch the mode.

{sample}DSV2\_Data\_Sheet\_15{sample}

### Editing

To let a user change a value, mark the [column](Columns) editable:

```
chart.column(2, {field: 'price',    title: 'Price',    width: 110, dataType: 'number', editable: true});
```

Double-click opens an editor in the cell, and its type follows the column's `dataType`. Enter commits, Esc cancels, and a click outside commits.

Tab commits and opens the next editable cell, skipping non-editable columns and wrapping to the next row; Shift+Tab reverses. A commit repaints the cell through the column's formatter.

`celleditend` fires as the change is accepted: read `e.field` and `e.newValue` in the handler; the row object the grid was given holds the new value once the handler returns:

```
chart.listen('celleditend', function (e) {
  out.value = e.field + ' = ' + e.newValue;
});
```

`celleditstart` fires before an editor opens. From code, {api:anychart.core.dataSheet.CellEditor#startEdit}startEdit(){api} opens one, {api:anychart.core.dataSheet.CellEditor#commitEdit}commitEdit(){api} and {api:anychart.core.dataSheet.CellEditor#cancelEdit}cancelEdit(){api} close it, and {api:anychart.core.dataSheet.CellEditor#isEditing}isEditing(){api} reports whether one is open.

In the sample below three columns are editable.

{sample}DSV2\_Data\_Sheet\_16{sample}

### Undo

To take a change back, call {api:anychart.core.dataSheet.CellEditor#undo}undo(){api}:

```
chart.cellEditor().undo();
```

Ctrl+Z does the same while the grid has focus. `chart.cellEditor().undo()` works from anywhere on the page, including a button outside the grid, so wire an Undo control to it. The cell and the row object both return to the previous value; the call paints the grid itself. The stack holds the twenty most recent accepted changes, and reports `false` when nothing is left to take back.

In the sample below the button takes back the last edit.

{sample}DSV2\_Data\_Sheet\_17{sample}

### Clipboard

To write the selected rows to the system clipboard as TSV and Excel XML, call {api:anychart.core.dataSheet.Clipboard#copy}copy(){api}:

```
chart.clipboard().copy();
```

Ctrl+C, Ctrl+X and Ctrl+V do the same from the keyboard. {api:anychart.core.dataSheet.Clipboard#cut}cut(){api} copies and then clears the editable columns only, and {api:anychart.core.dataSheet.Clipboard#paste}paste(){api} fills them, starting at the cell the user last landed on. Copy and cut act on the selected rows; with none selected nothing is copied. The values are the raw data, not the cell text, and a value starting with `=` or `+` gets a leading apostrophe.

The column titles are off by default:

```
chart.clipboard().includeHeaders(true);
```

For the same text without touching the clipboard, call {api:anychart.core.dataSheet.Clipboard#buildTSV}buildTSV(){api} or {api:anychart.core.dataSheet.Clipboard#buildExcelXML}buildExcelXML(){api}; both return an empty string when nothing is selected:

```
chart.clipboard().buildTSV();
```

A copy and a cut fire `clipboardcopy`, a paste `clipboardpaste`.

In the sample below the buttons copy, cut and paste, and the radios add the column titles.

{sample}DSV2\_Data\_Sheet\_18{sample}
