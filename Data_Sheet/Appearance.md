{:index 10}
# Appearance

The API covers the sizes and the colors of the rows and the header:

* {api:anychart.charts.DataSheet#rowHeight}rowHeight(){api} - 32 by default. It does not touch the header. Use {api:anychart.core.dataSheet.Header#height}header().height(){api} for that
* {api:anychart.charts.DataSheet#headerFill}headerFill(){api} - `'#f5f5f5'` by default
* {api:anychart.charts.DataSheet#rowEvenFill}rowEvenFill(){api} and {api:anychart.charts.DataSheet#rowOddFill}rowOddFill(){api} - `'#ffffff'` and `'#f8f8f8'`, the zebra stripes
* {api:anychart.charts.DataSheet#rowHoverFill}rowHoverFill(){api} - `'#e8f0fe'`
* {api:anychart.charts.DataSheet#rowSelectedFill}rowSelectedFill(){api} - `'#d2e3fc'`
* {api:anychart.charts.DataSheet#noDataText}noDataText(){api} - the message shown when there is nothing to display, either because the data is empty or because a filter matched no row

These take plain strings and numbers. They are not the fill objects used in the rest of AnyChart. There are no gradients and no fill functions here, even though the names look like chart fills.

```
// set the row height and the header height
chart.rowHeight(40);
chart.header().height(52);

// recolor the header and the rows
chart.headerFill("#37474f");
chart.rowEvenFill("#ffffff");
chart.rowOddFill("#e3f2fd");
chart.rowHoverFill("#fff8e1");
chart.rowSelectedFill("#ffe082");

// message shown when there is nothing to display
chart.noDataText("No products to show");
```

The API does not cover the text alignment of a column, or the color of a single column. Everything else is CSS. The grid is HTML, so your own CSS rules apply to it. A number cell also gets the `anychart-ds-cell-number` class, which gives you a hook for one column type:

```
/* what the API does not cover, CSS does */
#container .anychart-ds-header-cell {
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
}
#container .anychart-ds-cell {
    padding: 0 16px;
    border-right: 1px solid #b0bec5;
}
/* the API has no alignment setting - a number cell carries its own class */
#container .anychart-ds-cell-number {
    text-align: right;
}
```

Use CSS for the cell padding and the cell borders. `cellPadding()` and `cellBorder()` are in the API, and they give back the values you set, but nothing in this release reads those values. The padding and the borders come from the stylesheet. The group header colors and the tree indent are CSS as well.

Sizing works the same way as everywhere else in AnyChart: `container()`, `width()`, `height()` and `bounds()`. With none of them set, the grid takes the size of its container.

The grid works out its layout during `draw()`. So a container that changes size later - a responsive page, a splitter, a dashboard tile - needs a `draw()` of its own after the change. Call it from your own resize handler.

In the sample below, the row height, the header height and the five fills come from the API, while the uppercase header text, the cell padding and the right-aligned number cells come from the CSS above.

{sample}DS\_Data\_Sheet\_15{sample}

## CSS Classes

These are the class names the grid puts on its elements. Use them in your own stylesheet, and in your own `querySelector()` calls.

<table class="dtTABLE" width="700">
<tbody>
<tr><th width="260">Class</th><th width="440">What it is</th></tr>
<tr><td>anychart-data-sheet</td><td>the root element of the grid</td></tr>
<tr><td>anychart-ds-header</td><td>the header row</td></tr>
<tr><td>anychart-ds-header-cell</td><td>one header cell</td></tr>
<tr><td>anychart-ds-header-group-row</td><td>the row of header groups above the header</td></tr>
<tr><td>anychart-ds-header-group-cell</td><td>one header group title</td></tr>
<tr><td>anychart-ds-viewport</td><td>the scrolling area that holds the rows</td></tr>
<tr><td>anychart-ds-spacer</td><td>the empty blocks that keep the scrollbar the right size</td></tr>
<tr><td>anychart-ds-measure</td><td>the hidden element used to measure text</td></tr>
<tr><td>anychart-ds-row</td><td>one data row</td></tr>
<tr><td>anychart-ds-row-even, anychart-ds-row-odd</td><td>the zebra stripes</td></tr>
<tr><td>anychart-ds-row-selected</td><td>a selected row</td></tr>
<tr><td>anychart-ds-no-data</td><td>the message shown when there are no rows</td></tr>
<tr><td>anychart-ds-cell</td><td>one cell</td></tr>
<tr><td>anychart-ds-cell-number</td><td>a cell of a number column</td></tr>
<tr><td>anychart-ds-cell-boolean</td><td>a cell of a boolean column</td></tr>
<tr><td>anychart-ds-cell-focused</td><td>the cell the keyboard is on</td></tr>
<tr><td>anychart-ds-cell-editor</td><td>the input element of an open editor</td></tr>
<tr><td>anychart-ds-editor-invalid, anychart-ds-editor-error</td><td>a rejected value and its message</td></tr>
<tr><td>anychart-ds-checkbox, anychart-ds-checkbox-cell</td><td>the checkbox and its cell in checkbox mode</td></tr>
<tr><td>anychart-ds-group-header</td><td>a group row</td></tr>
<tr><td>anychart-ds-group-label, anychart-ds-group-count</td><td>the group name and the number of rows in it</td></tr>
<tr><td>anychart-ds-aggregate</td><td>one summary value on a group row</td></tr>
<tr><td>anychart-ds-group-zone</td><td>the drop area above the header</td></tr>
<tr><td>anychart-ds-group-chip, anychart-ds-group-chip-remove</td><td>a chip in that area and its remove button</td></tr>
<tr><td>anychart-ds-toggle</td><td>the open/close arrow of a group or a tree row</td></tr>
<tr><td>anychart-ds-detail-row, anychart-ds-detail-toggle</td><td>reserved for detail rows, which this section does not cover</td></tr>
<tr><td>anychart-ds-search-bar</td><td>the search bar</td></tr>
<tr><td>anychart-ds-search-input, anychart-ds-search-count</td><td>its input box and its counter</td></tr>
<tr><td>anychart-ds-search-btn, anychart-ds-search-close</td><td>its buttons</td></tr>
<tr><td>anychart-ds-search-match</td><td>a highlighted match</td></tr>
<tr><td>anychart-ds-pinned-left, anychart-ds-pinned-right</td><td>the cells of a pinned column</td></tr>
<tr><td>anychart-ds-resize-handle</td><td>the drag area on the right edge of a header cell</td></tr>
<tr><td>anychart-ds-resizing</td><td>set on document.body while the user drags that handle</td></tr>
<tr><td>anychart-ds-col-dragging</td><td>set while the user drags a header to reorder it</td></tr>
<tr><td>anychart-ds-context-menu, anychart-ds-context-menu-item</td><td>the right-click menu and its rows</td></tr>
<tr><td>anychart-ds-skip-link</td><td>the "Skip to data" link</td></tr>
<tr><td>anychart-ds-live-region</td><td>the region for screen reader messages</td></tr>
</tbody>
</table>

The grid also writes a few attributes that you can use in a selector: `data-data-index` on a data row, `data-group-key`, `data-depth` and `data-node-type` on a group row, and `data-col-index` on a header cell and its resize handle. A data cell has none of these attributes. A data cell carries only a class and `role="gridcell"`, so a selector cannot find one single cell. Find its row first, then take the cell by its position in that row.

The stylesheet also has rules for a few class names that the current build never puts on an element, such as `anychart-ds-sort-badge` and `anychart-ds-drop-indicator`. Do not rely on them.

**One warning.** The grid writes the column widths, the row heights and the row colors as inline styles. An inline style is stronger than a simple class rule, so a simple class rule has no effect. Use a stronger selector, as the CSS above does with `#container`, or set the color through the API instead.
