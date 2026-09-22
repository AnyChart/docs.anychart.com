{:index 1}
# Data Sheet

## Overview

The Data Sheet is the data grid that belongs beside your charts: the list your users sort, search, group and edit. It reads the same row objects you already hand to a chart, and it ships with the same library and the same license. Its cells are ordinary HTML elements rather than an SVG stage, so they follow the page's styles.

A grid is created with {api:anychart#dataSheet}anychart.dataSheet(){api} from an array of row objects. In the sample below a products grid is drawn that way: a header click sorts it, rows light up under the pointer, and a right-click opens the built-in menu.

{sample}DSV2\_Data\_Sheet\_01{sample}

## Capabilities

The [Quick Start](Quick_Start) builds the first grid step by step; each capability below has its own page.

<table border="1" class="seriesTABLE">
<tr><th>Capability</th><th>What you get</th><th>API</th></tr>
<tr><td>[Data](Data)</td><td>Rows come as an array of objects, an array of arrays, an <code>anychart.data.Set</code> or <code>View</code>, CSV text, or a <code>{header, rows}</code> object.</td><td>{api:anychart.charts.DataSheet#data}data(){api}</td></tr>
<tr><td>[Tree data](Data)</td><td>A row whose <code>children</code> field holds an array of rows renders as a tree the reader opens and closes.</td><td>{api:anychart.charts.DataSheet#hierarchy}hierarchy(){api}</td></tr>
<tr><td>[Columns](Columns)</td><td>Declare columns to set titles, widths, value types, formats, pinning and order.</td><td>{api:anychart.charts.DataSheet#column}column(){api}</td></tr>
<tr><td>[Sorting](Sorting_and_Filtering)</td><td>A header click sorts the grid; sortBy() and addSort() set the order from code.</td><td>{api:anychart.charts.DataSheet#sorting}sorting(){api}</td></tr>
<tr><td>[Filtering](Sorting_and_Filtering)</td><td>Text and number filters run over every row of a flat grid and combine with each other.</td><td>{api:anychart.charts.DataSheet#filter}filter(){api}</td></tr>
<tr><td>[Search](Sorting_and_Filtering)</td><td>Ctrl+F opens a bar that scans every filtered row, with next, previous and highlighted matches.</td><td>{api:anychart.charts.DataSheet#search}search(){api}</td></tr>
<tr><td>[Grouping](Sorting_and_Filtering)</td><td>Group by one field or several, with aggregates, a group zone and groups that expand and collapse.</td><td>{api:anychart.charts.DataSheet#groupBy}groupBy(){api}</td></tr>
<tr><td>[Selection](Editing_and_Selection)</td><td>Single, multiple and checkbox selection, from the mouse, the keyboard or code, reported by events.</td><td>{api:anychart.charts.DataSheet#selection}selection(){api}</td></tr>
<tr><td>[Editing](Editing_and_Selection)</td><td>Editable columns open an inline editor, with Tab and Enter navigation.</td><td>{api:anychart.charts.DataSheet#cellEditor}cellEditor(){api}</td></tr>
<tr><td>[Undo](Editing_and_Selection)</td><td>Ctrl+Z and undo() take back the last accepted change.</td><td>{api:anychart.core.dataSheet.CellEditor#undo}undo(){api}</td></tr>
<tr><td>[Clipboard](Editing_and_Selection)</td><td>Ctrl+C, Ctrl+X and Ctrl+V over the selected rows, with TSV and Excel XML available.</td><td>{api:anychart.charts.DataSheet#clipboard}clipboard(){api}</td></tr>
<tr><td>Context menu</td><td>A right-click offers the built-in entries and takes entries of your own.</td><td>{api:anychart.charts.DataSheet#contextMenu}contextMenu(){api}</td></tr>
</table>
