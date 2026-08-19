{:index 7}
# Selection

The {api:anychart.charts.DataSheet#selection}selection(){api} controller lets the user pick rows. {api:anychart.core.dataSheet.Selection#mode}mode(){api} takes three values. For any other value the grid uses `'single'`:

* `'single'` (default) - a click replaces the selection, and a click on the selected row clears it
* `'multi'` - a plain click replaces the selection, Ctrl-click (Cmd-click) toggles one row
* `'checkbox'` - the grid adds a leading checkbox column, and a click always toggles

Changing the mode clears the current selection.

All these methods use the **data index** of a row. The data index is the position of the row in the array you passed to `data()`. It is not the position of the row on the screen, and sorting or filtering never changes it. The methods are {api:anychart.core.dataSheet.Selection#select}select(index){api}, {api:anychart.core.dataSheet.Selection#deselect}deselect(index){api}, {api:anychart.core.dataSheet.Selection#toggle}toggle(index){api}, {api:anychart.core.dataSheet.Selection#deselectAll}deselectAll(){api}, {api:anychart.core.dataSheet.Selection#isSelected}isSelected(index){api} and {api:anychart.core.dataSheet.Selection#selectedIndices}selectedIndices(){api}.

`selectedIndices(array)` replaces the whole selection. The mode does not limit it: several indices in single mode select several rows.

```
// checkbox mode adds a leading checkbox column, and every click toggles one row
chart.selection().mode('checkbox');

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

// selecting from code does NOT fire rowSelect, and it needs a redraw to show up,
// so update your own display right after the call
chart.selection().selectedIndices([0, 1]);
chart.draw();
showSelection();
```

**Selecting from code is different from a user click, in two ways.** First, it does not fire the `rowSelect` event. Second, it does not repaint the grid on its own, so the highlight and the checkboxes stay as they were until the next `draw()`. A user click fires the event and repaints the grid at the same time. That is why the difference is easy to miss. When you select from code, call `draw()` and refresh your own display straight after the call, as the code above does.

{api:anychart.core.dataSheet.Selection#enabled}enabled(false){api} clears the selection and makes both clicks and `select()` do nothing.

{api:anychart.charts.DataSheet#rowSelectedFill}rowSelectedFill(){api} sets the color of a selected row - see [Appearance](Appearance). The selection is also what [Copy and Paste](Keyboard_and_Clipboard#copy_and_paste) acts on.

Use the buttons in the sample below to select the first two rows from code and to clear the selection, and tick the checkboxes to change the selection yourself.

{sample}DS\_Data\_Sheet\_12{sample}
