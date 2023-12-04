{:index 2}

# Table Layout

## Overview

The table layout is a kind of dashboard tools, which provides a clear and effective way of positioning chart. A dashboard is easy to read, often single page, real-time user interface, showing a graphical presentation of the current status (snapshot) and historical trends of an organization's key performance indicators to enable instantaneous and informed decisions to be made at a glance.

Table Layout helps to manage several elements within the limits of one chart container. The table may help to control visual appearance and logic structure of data.

## Modules

The table layout requires adding the [Table UI](../Quick_Start/Modules#table_ui) module:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-table.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).


## Acceptable Content

A cell in table layout dashboard may contain: 
- String with simple text or a number
- Any visual element of AnyChart (Legend, LegendItem, Label, Title, etc)
- Any type of a chart (pie, cartesian, etc)

## Visual Settings

Visual settings control:
- Cell padding & text settings
- Fill
- Border
- Columns and rows span

### Fill

With AnyChart html5 charting framework it is possible to color background of any cell with a solid color, with a gradient transition or fill it with an image. It can be achieved with {api:anychart.standalones.Table#cellFill}cellFill(){api} method.
 
This section contains information on colorizing the whole table and each of the cells separately. To find out all possible ways of controlling background color, please see [Fill tutorial](../Graphics/Fill_Settings).

#### Table fill

Background for all the table can be configured with {api:anychart.core.ui.Table#cellFill}cellFill(){api} parameter.

```
table.cellFill('#E1E1E1');
```

{sample :width 690 :height 200}Table\_Layout\_01{sample}

#### Even and Odd Rows

As a more advanced way of controlling table's background color there are parameters to adjust colors of even and/or odd row in the table. Parameter {api:anychart.standalones.Table#rowEvenFill}rowEvenFill(){api} is responsible for the background color of even rows and {api:anychart.standalones.Table#rowOddFill}rowOddFill(){api} is responsible for the background color of all odd rows.

```
table.rowOddFill('#F5F5F5');  // color for odd rows
table.rowEvenFill('#FFFFFF'); // color for even rows
```

Here is the sample with "#FFFFFF" background color for all cells in even rows and "#F5F5F5" color for all cells in odd rows.

{sample :width 690 :height 200}Table\_Layout\_02{sample}

#### Cell Fill

For emphasizing attention on one of the cells, it can be colorized in a unique way. Background color of a certain cell is controlled by parameter {api:anychart.graphics.vector.Fill}fill(){api} and it should be applied to the cell itself.

```
var cell = table.getCell(0,1);  // Get a cell from the first row in second column
cell.fill('#E0E43A');           // Set gold color as a background for the cell
```

### Row Settings

In most cases, it is required to adjust settings for all cells in a row. For instance, each cell of the first row can contain some explanations for every column of the table. Use {api:anychart.standalones.Table#getRow}getRow(){api} method to tune visual appearance of the whole row.

```
// get the first row
var headerRow = table.getRow(0);
  
// set style for the first row
headerRow.height(40).cellFill('#F5F5F5').fontWeight(900);
```

These settings make the color of first row slightly darker and bold all the text in the row.

{sample :width 690 :height 200}Table\_Layout\_03{sample}

#### Height

Default height of the table is the height of the table's container. Fixed height of the table can be set using {api:anychart.core.ui.Table#height}height(){api} parameter. If you want to have flexible table consider using {api:anychart.core.ui.Table#minHeight}minHeight(){api} and {api:anychart.core.ui.Table#maxHeight}maxHeight(){api} methods. Moreover, {api:anychart.core.ui.table.Row#height}height(){api}, {api:anychart.core.ui.table.Row#minHeight}minHeight(){api} and {api:anychart.core.ui.table.Row#maxHeight}maxHeight(){api} methods can be set for each row of a table.

### Column Settings

You can adjust settings for a particular column as easy as you do it for a row. Use {api:anychart.standalones.Table#getCol}getCol(){api} method to tune all the cells in the column.

```
table.getCol(0)         // settings for the first column
  .width(70)            // set width of the column
  .cellFill('#F5F5F5')  // set background color for all cells in the column
  .fontWeight(900);     // bold text in every cell of the column
```

We use such settings to set fixed width for the first column, make this column a bit darker and bold all the text in the column.

{sample :width 690 :height 200}Table\_Layout\_04{sample}

#### Width

Default width of the table is the width of the container. Fixed width of the table can be set using {api:anychart.standalones.Table#width}width(){api} parameter. If you want to have flexible table consider using {api:anychart.standalones.Table#minWidth}minWidth(){api} and {api:anychart.standalones.Table#maxWidth}maxWidth(){api} methods. Moreover, {api:anychart.core.ui.table.Column#width}width(){api}, {api:anychart.core.ui.table.Column#minWidth}minWidth(){api} and {api:anychart.core.ui.table.Column#maxWidth}maxWidth(){api} methods can be set for any column of a table.

### Border

The border is a part of a table. It visually divides a table into separate cells as well as wraps these cells. As any part of a chart, it can be configured and all settings can be adjusted. Full information on borders and lines settings can be found in [Strokes and Lines](../Graphics/Stroke_Settings) tutorial.

In this section revealed all methods of controlling borders in a table. 
Parameter {api:anychart.core.ui.Table#cellBorder}cellBorder(){api} provides an opportunity to set desirably configured border for all cells in a table. As far as content for each cell can be absolutely different, style for each of the cells can be set individually as well.

The sample below demonstrates setting gray stroke for the table, set thickness equal to 1 px and makes it dashed, with 5 px dashes and 2 pixel gaps. Two cells have a red stroke, which emphasizes them.

```
//set style
table.cellBorder(
  '#B8B8B8',          // Color
  1,                  // Thickness
  '5 2'               // Dash and gap length
);
  
// get cell from the second column and second row
table.getCell(1,1).border({
  keys: ['#86cf38'],  // Set leaner color
  thickness: 3        // Set thickness
});
  
//get cell from second column and fourth row
table.getCell(3, 1).border({
  keys: ['#86cf38'],  // Set leaner color
  thickness: 3        // Set thickness
  });
```

{sample :width 690 :height 200}Table\_Layout\_05{sample}

**Note:** As far as any cell has 4 borders, there is a way to control style for each of them. Parameters {api:anychart.core.ui.table.Border#top}top(){api}, {api:anychart.core.ui.table.Border#left}left(){api}, {api:anychart.core.ui.table.Border#bottom}bottom(){api} and {api:anychart.core.ui.table.Border#right}right(){api} of the {api:anychart.standalones.Table#getCell}getCell(){api} method controls style for each of 4 cell's borders.

Moreover, there are 4 methods to control each of the border for every cell in the table. {api:anychart.core.ui.table.Border#top}top(){api}, {api:anychart.core.ui.table.Border#left}left(){api}, {api:anychart.core.ui.table.Border#bottom}bottom(){api} and {api:anychart.core.ui.table.Border#right}right(){api} of {api:anychart.standalones.Table#cellBorder}cellBorder(){api} adjust style of a border for each cell in table. Also, these four methods can be applied to {api:anychart.standalones.Table#border}border(){api} of the table for tuning any border of the table.

### Text Settings and Padding

Table layout may contain simple text in several cells. Text settings can be applied to the cell of the table or to the whole table. 

Cells are not limited in content type and the amount of data, which may lead to a problem of content sticking to the cell's borders. To prevent such situations there is the {api:anychart.standalones.Table#cellPadding}cellPadding(){api} method.

The sample below demonstrates controlling text settings and using padding for the whole table.

```
table
  .cellPadding(10)      // set 10px padding from each border of every cell
  .vAlign('center')      // set vertical align of the text
  .hAlign('right')        // set horizontal align of the text
  .fontWeight(600)   // set text font weight
  .fontSize(12)           // set text font size
  .fontColor('#86cf38');  // set text font color
```

{sample :width 690 :height 200}Table\_Layout\_06{sample}

### Span

In some cases it is desirable to enlarge a cell by uniting it with one or several cells. There are two methods for joining several cells into one. The {api:anychart.core.ui.table.Cell#rowSpan}rowSpan(){api} method unites the cell with cells below in the column and the {api:anychart.core.ui.table.Cell#colSpan}colSpan(){api} method unites cells in the row on the right side from the cell.

```
// span cells
table.getCell(1,0).rowSpan(2);  // span two cells into one row
table.getCell(3,0).rowSpan(3);  // span tree cells into one row
table.getCell(0,0).colSpan(2);  // span 2 cells 
table.getCell(1,1).colSpan(2);  // span 2 cells in the row
table.getCell(0,0).rowSpan(3);  // span 3 cells in the column
```

The sample below demonstrates joining of two cells in the first row into one and connection of cells in the first column according to the season.

{sample :width 690 :height 200}Table\_Layout\_07{sample}

## Using Table

### Title

As far as the title on a dashboard contains the main idea of a dashboard, it is vital to configure its visual appearance. Here is a sample with the simple title at the top of the dashboard and table layout dashboard below.

{sample :width 690 :height 300}Table\_Layout\_08{sample}

### Header Row

The title may represent information for the whole dashboard, but for parts of the dashboard, it may be required to format several titles. One of the most convenient ways of configuring titles is setting desirable configuration for [the first row](#row_settings) of the table layout. 

Here is a sample with text settings, applied only to the first (head) row of a table layout dashboard.

{sample :width 690 :height 300}Table\_Layout\_09{sample}

### Common Elements

Table layout dashboard may contain several charts. Different charts may use common elements. 
One of the most popular common elements is a scale. As far as scales calculate values, 
the common scale may be used for comparative purposes.

Here is a sample of table layout dashboard with all bullet charts using the same scale and custom axis uses the scale as well.

{sample :width 690 :height 325}Table\_Layout\_10{sample}
