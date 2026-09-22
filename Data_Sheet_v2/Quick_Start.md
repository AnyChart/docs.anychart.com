{:index 2}
# Quick Start: Data Sheet

## Overview

This article walks through the steps that build a {api:anychart.charts.DataSheet}Data Sheet{api} from scratch: the files to load, the element it draws into, the shape of the data, and the three calls that put a working grid on the page.

## Modules

The Data Sheet is drawn by `anychart-data-sheet.min.js`, loaded after the core module. Its own stylesheet `data-sheet.css` lays the grid out, and `anychart-font.min.css` supplies the glyphs of the context menu.

Place the links in the `<head>` section of your page.

```
<head>
  <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
  <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-data-sheet.min.js"></script>
  <link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/data-sheet.css" />
  <link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/anychart-ui.min.css" />
  <link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/fonts/css/anychart-font.min.css" />
</head>
```

## Container

To give the grid a place to draw, add a block element with an `id` and size it with CSS. The rule below sizes the element to the browser window, so the grid fills the viewport.

```
<style>
  html, body, #container { width: 100%; height: 100%; margin: 0; padding: 0; }
</style>
<div id="container"></div>
```

## Data

The {api:anychart.charts.DataSheet#data}data(){api} is an array of row objects. The keys of the first row become the columns, and each column takes its title from its key, capitalized.

```
  // create data
  var data = [
    {product: "Laptop", category: "Tech", price: 1200, units: 34, inStock: true},
    {product: "Chair", category: "Office", price: 150, units: 120, inStock: true},
    {product: "Monitor", category: "Tech", price: 300, units: 58, inStock: true},
    {product: "Desk", category: "Office", price: 450, units: 12, inStock: false},
    {product: "Keyboard", category: "Tech", price: 80, units: 240, inStock: true}
  ];
```

## Chart

To build the grid, pass the data to `anychart.dataSheet()`, name the container, and draw.

```
  // create a data sheet
  var chart = anychart.dataSheet(data);
  // set the container id
  chart.container("container");
  // initiate drawing the data sheet
  chart.draw();
```

## Sample

The sample below is the result of the steps above: one column per key of a row, titled from the keys. Like any other sample, it can be launched and modified in AnyChart Playground.

{sample}DSV2\_Data\_Sheet\_02{sample}

## Source Code

The page is an ordinary HTML document: the files in the head, the container in the body, and one script block.

```
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<div id="container"></div>
</body>
</html>
```

The script block holds the data and the three calls, inside `anychart.onDocumentReady()`.

```
<script>
anychart.onDocumentReady(function () {
  var chart = anychart.dataSheet(data);
  chart.container("container");
  chart.draw();
});
</script>
```

The full listing is the source of the sample above; copy it to a file on your computer and open it with a browser to see the grid. From here, [Data](Data) covers the shapes your rows can take and [Columns](Columns) how to choose and format them.
