{:index 14}
# Accessibility

The Data Sheet is real HTML, so a screen reader can read it as a table. No SVG chart type can do that.

The grid writes these attributes:

<table class="dtTABLE" width="700">
<tbody>
<tr><th width="220">Element</th><th width="480">Attributes</th></tr>
<tr><td>the grid root</td><td>role="grid", aria-label="Data Sheet", tabindex="0", aria-rowcount, aria-colcount, and aria-multiselectable="true" in multi or checkbox selection mode</td></tr>
<tr><td>the header row</td><td>role="row"</td></tr>
<tr><td>a header cell</td><td>role="columnheader" with aria-sort set to none, ascending or descending</td></tr>
<tr><td>the scrolling area</td><td>role="rowgroup"</td></tr>
<tr><td>a row</td><td>role="row" with aria-rowindex</td></tr>
<tr><td>a cell</td><td>role="gridcell"</td></tr>
</tbody>
</table>

`aria-rowcount` reports every row the current filter keeps, even though only the visible rows exist in the page - see [Large Data Sets](Large_Data_Sets).

The grid also adds a "Skip to data" link at the top. A keyboard user can jump past the header with it. `tabindex="0"` on the root means the user can Tab into the grid and then use the keys in [Keyboard Shortcuts](Keyboard_and_Clipboard#keyboard_shortcuts).

**One part does not work yet.** The grid creates an ARIA live region. That is a hidden element: when its text changes, a screen reader reads the new text out loud. The region is "polite", which means that the screen reader waits until it has finished the current sentence. In this release nothing writes text into that region, so a screen reader does not announce a sort or a filter change. If you need those announcements, write them into a live region of your own from the `sort` and `filter` [events](Events).

This page has no sample, because it is about attributes and a sample shows pixels. Open the browser inspector on the [Quick Start](Overview#quick_start) grid and look at the root element to see them.
