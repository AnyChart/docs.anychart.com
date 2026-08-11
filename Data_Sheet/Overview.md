{:index 1}
# Data Sheet

## Overview

A Data Sheet is an interactive table. It shows your data in rows and columns. The user can sort the rows, filter them, search them and edit the cells. The user can also group the rows, and resize, reorder or pin the columns. Pinning keeps a column at the edge of the table while the other columns scroll. You can also do all of this from code.

The Data Sheet draws HTML elements. It does not draw SVG. It is the only AnyChart type that works this way. This one fact explains all the other differences in this section. Cells are `<div>` elements with CSS classes. So you can style them in your own stylesheet, and find them with `querySelector()`.

Because it is not an SVG chart, it is not built on the common chart class. It has no `title()`, no `legend()`, no `tooltip()`, no `credits()`, no `animation()` and no `background()`. You build those around the grid instead: an HTML heading above the container for a title, a panel of your own for a tooltip, and CSS for the background.

It also does one thing no chart can do. A screen reader can read it as a real table, because a Data Sheet is built from real HTML with ARIA roles. ARIA roles are extra HTML attributes that tell a screen reader what each element is. See [Accessibility](Accessibility).

This section calls the table on your page **the grid**. That is only a short name for the Data Sheet.

Use a Data Sheet to show the numbers behind a chart, or as a table on its own.

Do not confuse it with the [Gantt data grid](../Gantt_Chart/Data_Grid/Overview). That one is a component inside a Gantt chart and has a different API.

This section shows how to make a Data Sheet and how to set its options. The table below is a quick overview:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Data Sheet](../Quick_Start/Modules#data_sheet)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.DataSheet}anychart.charts.DataSheet{api}</td></tr>
<tr><td>Constructor</td><td>{api:anychart#dataSheet}anychart.dataSheet(){api}</td></tr>
<tr><td>Chart Type</td><td>"data-sheet"</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Format</td><td>Array of row objects</td></tr>
<tr><td>Column Binding</td><td>[field](Columns#defining_columns)</td></tr>
<tr><td>Tree Data</td><td>[children, or id / parent](Data#tree_data) - always fully open</td></tr>
<tr><th colspan=2>RENDERING</th></tr>
<tr><td>Output</td><td>HTML DOM (not SVG)</td></tr>
<tr><td>Stylesheet</td><td>Required - see [Modules and Styles](#modules_and_styles)</td></tr>
<tr><td>Accessibility</td><td>[ARIA grid roles](Accessibility)</td></tr>
<tr><th colspan=2>FEATURES</th></tr>
<tr><td>Sorting</td><td>[sorting()](Sorting)</td></tr>
<tr><td>Filtering</td><td>[filter()](Filtering_and_Search)</td></tr>
<tr><td>Search</td><td>[search()](Filtering_and_Search#search)</td></tr>
<tr><td>Selection</td><td>[selection()](Selection)</td></tr>
<tr><td>Cell Editing</td><td>[cellEditor()](Cell_Editing)</td></tr>
<tr><td>Grouping</td><td>[groupBy()](Grouping)</td></tr>
<tr><td>Large Data Sets</td><td>[virtualScroll()](Large_Data_Sets)</td></tr>
<tr><td>Copy and Paste</td><td>[clipboard()](Keyboard_and_Clipboard#copy_and_paste)</td></tr>
<tr><td>Export</td><td>[export()](Export_and_Print)</td></tr>
<tr><td>Saved Layout</td><td>[state()](Export_and_Print#saved_layout)</td></tr>
<tr><th colspan=2>DIFFERENCES FROM CHARTS</th></tr>
<tr><td>Title, Legend, Tooltip</td><td>Build them around the grid in your own HTML</td></tr>
<tr><td>Credits, Animation, Background</td><td>Style the grid with CSS - see [CSS Classes](Appearance#css_classes)</td></tr>
<tr><td>Cell Content</td><td>Plain text - see [Data Types and Formats](Columns#data_types_and_formats)</td></tr>
<tr><td>Column Set</td><td>Fixed once declared - see [Defining Columns](Columns#defining_columns)</td></tr>
<tr><td>Filter Types</td><td>Text, number and boolean - see [Filtering](Filtering_and_Search)</td></tr>
<tr><td>Tree Rows</td><td>Always open; groups do close - see [Tree Data](Data#tree_data)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Working with Data](../Working_with_Data/Overview)</td></tr>
<tr><td></td><td>[Gantt Data Grid](../Gantt_Chart/Data_Grid/Overview)</td></tr>
</table>

## Modules and Styles

The Data Sheet is a separate module. Load the [Core](../Quick_Start/Modules#core) module first, then the [Data Sheet](../Quick_Start/Modules#data_sheet) module:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-data-sheet.min.js"></script>
```

The big all-in-one bundle `anychart-bundle.min.js` is **not** enough on its own. It holds only a small placeholder for this type. If you call `anychart.dataSheet()` with the bundle alone, that placeholder throws an error and tells you to load the module. If you already use the bundle, add `anychart-data-sheet.min.js` after it. The module then replaces the placeholder and everything works.

The Data Sheet also needs three stylesheets:

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/anychart-ui.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/data-sheet.css" />
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/fonts/css/anychart-font.min.css" />
```

The second file, `data-sheet.css`, is **required**. It holds every `anychart-ds-*` rule - the header, the row heights, the cell padding, the cell borders, the hover and selection colors, the group indent. Every other AnyChart type draws SVG and needs no stylesheet at all, but this one draws `<div>` elements, so it needs real CSS for its layout: the file puts the cells of a row side by side and sets the column widths. Without it the grid still draws, but every cell drops onto its own line and the table becomes unreadable. This file is not part of `anychart-ui.min.css`, so you always add it yourself.

The first file is the AnyChart UI stylesheet, which the [context menu](Keyboard_and_Clipboard#context_menu) needs. The third file holds the AnyChart icon font, which draws the small icons inside that menu - the menu that opens when you right-click. Without the font, every menu row shows an empty space instead of its icon.

The grid also needs a container element with a height greater than zero:

```
<style>
    html, body, #container { width: 100%; height: 100%; margin: 0; padding: 0; }
</style>

<div id="container"></div>
```

Every live sample in this section uses exactly these two script tags, these three link tags and this container. There is no sample here, because a sample cannot show you its own `<head>`.

Put together, a minimal page looks like this. You can copy it into a file and open it in a browser:

```
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
    <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-data-sheet.min.js"></script>

    <link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/anychart-ui.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/data-sheet.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/fonts/css/anychart-font.min.css" />

    <style>
        html, body, #container { width: 100%; height: 100%; margin: 0; padding: 0; }
    </style>
</head>
<body>
    <div id="container"></div>
    <script>
        anychart.onDocumentReady(function () {
            var data = [
                {id: 1, product: "Laptop", category: "Tech", price: 1200, stock: 34, status: "In stock"},
                {id: 2, product: "Chair", category: "Office", price: 150, stock: 120, status: "In stock"},
                {id: 3, product: "Monitor", category: "Tech", price: 300, stock: 58, status: "In stock"},
                {id: 4, product: "Desk", category: "Office", price: 450, stock: 12, status: "Low"}
            ];

            var chart = anychart.dataSheet(data);
            chart.container("container");
            chart.draw();
        });
    </script>
</body>
</html>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Data Sheet, use the {api:anychart#dataSheet}anychart.dataSheet(){api} constructor. Pass a plain array of row objects. Then set the container with `container()` and draw the grid with {api:anychart.charts.DataSheet#draw}draw(){api}:

```
// create data
var data = [
  {id: 1, product: "Laptop", category: "Tech", price: 1200, stock: 34, status: "In stock"},
  {id: 2, product: "Chair", category: "Office", price: 150, stock: 120, status: "In stock"},
  {id: 3, product: "Monitor", category: "Tech", price: 300, stock: 58, status: "In stock"},
  {id: 4, product: "Desk", category: "Office", price: 450, stock: 12, status: "Low"}
];

// create a data sheet
var chart = anychart.dataSheet(data);

// set the container id
chart.container("container");

// initiate drawing the data sheet
chart.draw();
```

You do not have to declare the columns. With no setup the grid makes one column for each key of the first row object. Six keys give six columns, and {api:anychart.charts.DataSheet#columnCount}columnCount(){api} returns 6. The grid also builds the titles from the keys: `id` becomes `Id`, `product` becomes `Product`. Every column is 150 px wide by default.

An automatic column also gets an automatic data type. That is why `1200` appears as `1,200` in the sample below. This is **not** true once you declare the columns yourself - see [Data Types and Formats](Columns#data_types_and_formats).

The grid is interactive from the start. Click a header to sort. Drag the right edge of a header cell to resize the column. Hover a row to highlight it. Right-click a cell to open the context menu.

Three rules apply to every Data Sheet in this section:

* **Give the container a real height.** The grid fills its container. If the parent element has a height of zero, the scrolling area also gets no height. The grid then builds only a few rows, inside a box that is almost invisible. A container with `height: 100%` inside a page that has a height is fine.
* **Settings need a redraw.** A setting you apply after the first `draw()` does nothing until you call `draw()` again. For example, `sortBy()` on its own leaves the rows untouched. This rule comes back in [Sorting](Sorting), [Filtering](Filtering_and_Search), [Search](Filtering_and_Search#search) and [Grouping](Grouping). Two groups of settings do not follow the rule, and a `draw()` does not help them: the [Header](Header) settings and the two [Large Data Sets](Large_Data_Sets) settings. Set those before the first `draw()`.
* **Only the rows on screen exist in the page HTML.** 5,000 rows of data produce only a few dozen row elements. See [Large Data Sets](Large_Data_Sets).

{sample}DS\_Data\_Sheet\_01{sample}
