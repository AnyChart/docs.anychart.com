{:index 12}
# Keyboard and Clipboard

The grid takes keyboard focus and talks to the system clipboard. The user can Tab into it, move from cell to cell with the arrow keys, select rows, copy them into a spreadsheet, paste values back, and open a menu on any cell with a right-click. All of this works before you set anything, which is what makes a Data Sheet feel like a spreadsheet rather than a static table.

Read this article when you want a grid the user can drive without the mouse, when you need to move rows between the grid and another application, or when the entries of the right-click menu do not match your application. It lists the keys the grid answers to, the clipboard methods and their limits, and the ways to change the context menu or open it from your own control.

## Keyboard Shortcuts

The grid root has `tabindex="0"`, so the user can Tab into it and then use these keys. On macOS, use Cmd where the table says Ctrl.

<table class="dtTABLE" width="700">
<tbody>
<tr><th width="220">Keys</th><th width="480">What happens</th></tr>
<tr><td>Arrow keys</td><td>move the focused cell</td></tr>
<tr><td>Home, End</td><td>jump to the first or the last column</td></tr>
<tr><td>Ctrl+Home, Ctrl+End</td><td>jump to the first or the last row</td></tr>
<tr><td>Enter, Space</td><td>select the focused row. Hold Ctrl to add it to the selection</td></tr>
<tr><td>Ctrl+C, Ctrl+X, Ctrl+V</td><td>copy, cut and paste the selected rows</td></tr>
<tr><td>Ctrl+F</td><td>open the search bar. The bar itself appears on the next redraw</td></tr>
<tr><td>Esc</td><td>close the search bar, or cancel a cell edit</td></tr>
<tr><td>Enter (while editing)</td><td>accept the value</td></tr>
<tr><td>Tab, Shift+Tab (while editing)</td><td>accept the value and close the editor. They do not move to the next cell</td></tr>
<tr><td>Ctrl+Z</td><td>undo the last cell edit</td></tr>
<tr><td>Shift+click on a header</td><td>add a sort level</td></tr>
</tbody>
</table>

The keys reach the features described on the sibling pages: [Selection](Selection), [Search](Filtering_and_Search#search), [Cell Editing](Cell_Editing) and [Sorting](Sorting). Every sample in this section responds to these keys after you click the grid.

## Copy and Paste

Copy and cut act on the **selected rows**. With nothing selected, nothing is copied. See [Selection](Selection). In checkbox mode a click anywhere on a row toggles that row, not only a click on the checkbox.

The {api:anychart.charts.DataSheet#clipboard}clipboard(){api} controller writes two formats at once: tab-separated text for a text editor, and Excel XML for a spreadsheet. So you can paste into either one.

### Clipboard Methods

To drive the clipboard from code, call the methods of the controller. Each one has a rule of its own:

* {api:anychart.core.dataSheet.Clipboard#copy}copy(){api} writes the selected rows to the system clipboard
* {api:anychart.core.dataSheet.Clipboard#cut}cut(){api} copies them and then clears the editable columns only
* {api:anychart.core.dataSheet.Clipboard#paste}paste(){api} fills the editable columns only, and drops the values that a validator rejects. It does not finish at once: the grid updates a moment later, when the browser gives it the content of the clipboard
* {api:anychart.core.dataSheet.Clipboard#includeHeaders}includeHeaders(){api} is off by default. Turn it on to add the column titles
* {api:anychart.core.dataSheet.Clipboard#buildTSV}buildTSV(){api} and {api:anychart.core.dataSheet.Clipboard#buildExcelXML}buildExcelXML(){api} return the same strings without touching the system clipboard. Both return an empty string when nothing is selected
* {api:anychart.core.dataSheet.Clipboard#enabled}enabled(false){api} turns the whole feature off

```
// copy, cut and paste act on the selected rows
chart.selection().mode('checkbox');

// add the column titles to the copied content - off by default
chart.clipboard().includeHeaders(true);

// select two rows, or there is nothing to copy
chart.selection().selectedIndices([0, 2]);

// buildTSV() returns the same text that copy() writes to the clipboard
var text = chart.clipboard().buildTSV();

// copy the selected rows to the system clipboard
chart.clipboard().copy();
```

In the sample below, the panel shows the TSV that `buildTSV()` returns for the ticked rows, with the column titles on the first line.

{sample}DS\_Data\_Sheet\_17{sample}

### Copied Values

The copied values are the raw data, not the text in the cells. A cell that shows `1,200` copies as `1200`.

The grid changes a value that starts with `=`, so a spreadsheet does not run it as a formula.

### Paste and Cell Focus

`paste()` is the exception: it ignores the selection. It starts at the cell that has the keyboard focus, and from there it fills the cells below and to the right. The grid clears that focus on every data or filter change, so with no focused cell `paste()` does nothing at all. Let the user Tab into the grid and move with the arrow keys first.

### Clipboard Events

The `clipboardcopy` and `clipboardpaste` events fire - see [Events](Events).

## Context Menu

The context menu opens with a right-click, and it is on by default. Its entries run the built-in actions of the grid, and you can replace them with your own set.

### Default Entries

On a cell the menu holds, in this order: Sort Ascending, Sort Descending, a separator, Pin Left (or Unpin Column), a separator, Export as CSV, Export as JSON, Print to PDF. A right-click on a header adds a Group by / Remove Grouping entry. These entries drive [Sorting](Sorting), [Column Pinning](Columns#column_pinning), [Export and Print](Export_and_Print) and [Grouping](Grouping).

The icons come from the AnyChart icon font - see [Modules and Styles](Overview#modules_and_styles).

### Custom Menu Items

{api:anychart.core.dataSheet.ContextMenu#items}items([...]){api} replaces the whole set. An item is `{text, action, icon}`, or `{separator: true}`. If `action` is a string, it names one of the built-in actions: `sortAsc`, `sortDesc`, `pinLeft`, `unpin`, `exportCsv`, `exportJson` or `print`. If `action` is a function, the grid calls it with a context object that holds `rowIndex`, `colIndex`, `dataIndex` and `field`:

```
// replace the whole menu: two built-in actions and one of your own
chart.contextMenu().items([
  {text: 'Sort Ascending',  action: 'sortAsc',  icon: 'ac ac-sort-amount-asc'},
  {text: 'Sort Descending', action: 'sortDesc', icon: 'ac ac-sort-amount-desc'},
  {separator: true},
  {text: 'Show cell info', icon: 'ac ac-info-circle', action: function (context) {
    // the context tells you which cell the menu was opened on
    info.innerHTML = 'field: <b>' + context.field + '</b>, data index: <b>' + context.dataIndex +
      '</b>, value: <b>' + data[context.dataIndex][context.field] + '</b>';
  }}
]);
```

`items(null)` restores the defaults. `items()` with no argument does **not** read the menu back: it also throws your custom menu away and goes back to the defaults. There is no way to read the current menu.

### Menu Control from Code

{api:anychart.core.dataSheet.ContextMenu#show}show(x, y, context){api} opens the menu from your own button or a long press, and {api:anychart.core.dataSheet.ContextMenu#hide}hide(){api} closes it. Build the context object with those four names. A menu you open this way always shows the entries for a cell, never the ones for a header. {api:anychart.core.dataSheet.ContextMenu#enabled}enabled(false){api} turns the menu off completely.

```
// open the same menu from your own button
chart.contextMenu().show(e.clientX, e.clientY, {rowIndex: 0, colIndex: 2, dataIndex: 0, field: 'price'});
```

In the sample below, right-click any cell or press the button to open the same three-entry menu, and `Show cell info` writes the field, the data index and the value into the line above the grid.

{sample}DS\_Data\_Sheet\_18{sample}

### Menu Events

A `contextmenuaction` event carries `item`, `rowIndex` and `colIndex`. See [Events](Events).
