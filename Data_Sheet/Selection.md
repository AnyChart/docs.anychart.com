{:index 7}
# Selection

The selection is the set of rows the user has picked in the grid. A picked row is highlighted, and your code can read the picked rows at any time. [Copy and Paste](Keyboard_and_Clipboard#copy_and_paste) also acts on the selection, so it is how the user chooses what to copy.

Use the selection when the user has to point at some rows before your page does something with them. This article shows how to pick a selection mode, how to select and read rows from code, and why a selection made from code behaves differently from a user click. It also covers switching the selection off and setting the color of a selected row.

## Selection Modes

To set how a click changes the selection, call {api:anychart.core.dataSheet.Selection#mode}mode(){api} on the {api:anychart.charts.DataSheet#selection}selection(){api} controller. It takes three values. For any other value the grid uses `'single'`:

* `'single'` (default) - a click replaces the selection, and a click on the selected row clears it
* `'multi'` - a plain click replaces the selection, Ctrl-click (Cmd-click) toggles one row
* `'checkbox'` - the grid adds a leading checkbox column, and a click always toggles

Changing the mode clears the current selection.

```
// checkbox mode adds a leading checkbox column, and every click toggles one row
chart.selection().mode('checkbox');
```

## Row Indices

Every method of the selection controller uses the **data index** of a row. The data index is the position of the row in the array you passed to `data()`. It is not the position of the row on the screen, and [sorting](Sorting) or [filtering](Filtering_and_Search) never changes it.

## Selection Methods

To change or read the selection from code, use the methods of the selection controller: {api:anychart.core.dataSheet.Selection#select}select(index){api}, {api:anychart.core.dataSheet.Selection#deselect}deselect(index){api}, {api:anychart.core.dataSheet.Selection#toggle}toggle(index){api}, {api:anychart.core.dataSheet.Selection#deselectAll}deselectAll(){api}, {api:anychart.core.dataSheet.Selection#isSelected}isSelected(index){api} and {api:anychart.core.dataSheet.Selection#selectedIndices}selectedIndices(){api}.

`selectedIndices(array)` replaces the whole selection. The mode does not limit it: several indices in single mode select several rows.

To read the selection back, call `selectedIndices()` with no argument. To keep your own display in step with the user, listen to the `rowSelect` event. It fires when the user clicks a row or a checkbox. See [Events](Events):

```
// read the selection back - the indices are data indices, not screen positions
function showSelection() {
  var indices = chart.selection().selectedIndices();
  var names = [];
  for (var i = 0; i < indices.length; i++) {
    names.push(data[indices[i]].product);
  }
  state.innerHTML = names.length ? 'selected: ' + names.join(', ') : 'nothing selected';
}

// rowSelect fires when the USER clicks a row or a checkbox
chart.listen('rowSelect', function () {
  showSelection();
});
```

## Selecting from Code

**Selecting from code is different from a user click, in two ways.** First, it does not fire the `rowSelect` event. Second, it does not repaint the grid on its own, so the highlight and the checkboxes stay as they were until the next `draw()`. A user click fires the event and repaints the grid at the same time. That is why the difference is easy to miss. When you select from code, call `draw()` and refresh your own display straight after the call, as the code below does:

```
// selecting from code does NOT fire rowSelect, and it needs a redraw to show up,
// so update your own display right after the call
chart.selection().selectedIndices([0, 1]);
chart.draw();
showSelection();
```

Use the buttons in the sample below to select the first two rows from code and to clear the selection, and tick the checkboxes to change the selection yourself.

{sample}DS\_Data\_Sheet\_12{sample}

## Switching the Selection Off

To make the grid ignore the selection, call {api:anychart.core.dataSheet.Selection#enabled}enabled(false){api} on the selection controller. It clears the current selection, and after that both clicks and `select()` do nothing.

## Selected Row Color

To set the color of a selected row, use {api:anychart.charts.DataSheet#rowSelectedFill}rowSelectedFill(){api}. This method belongs to the grid itself, not to the selection controller. The other row colors are set the same way. See [Appearance](Appearance).
