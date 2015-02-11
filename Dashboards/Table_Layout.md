# Table Layout

* [Overview](#overview)
* [Acceptable Content](#acceptable_content)
* [Visual Settings](#visual_settings)
  * [Cells Width and Height](#cells_width_and_height)
  * [Fill](#fill)
  * [Border](#border)
  * [Text Settings and Padding](#text_settings_and_padding)
  * [Span](#span)
* [Using Table](#using_table)
  * [Title](#title)
  * [Header Row](#header_row)
  * [Common Elements](#common_elements)

## Overview

Table layout is a kind of a dashboard tools, which provides clear and effective way of positioning data on plot. Dashboard is an easy to read, often single page, real-time user interface, showing a graphical presentation of the current status (snapshot) and historical trends of an organization’s key performance indicators to enable instantaneous and informed decisions to be made at a glance.

Table Layout helps to manage several elements within the limits of one chart container. Table may help to control visual appearance and logic structure of data.

## Acceptable Content

A cell in table layout dashboard may contain: 
 * String with simple text or a number
 * Any visual element of AnyChart (Legend, LegendItem, Label, Title, etc)
 * Any type of a chart (pie, cartesian, etc)
 * Any data series (for instance, anychart.cartesian.series.Line)

## Visual Settings

Visual settings control:
 * Columns width and rows height
 * Cell padding & text settings
 * Fill
 * Border
 * Cols and rows span

### Cells Width and Height

Table layout consist of multiple cells and each of them may contain different type of information. In most cases same kind of data placed in one row or one column. Anychart provides {api:anychart.core.ui.Table#rowHeight}**.rowHeight()**{api} parameter for adjusting height of a row and {api:anychart.core.ui.Table#colWidth}**.colWidth()**{api} parameter for controlling width of a column.
  
  
Sample below demonstrates height controlling of the first row and width of the first column.

```
  table.rowHeight(0, 40);   // Get first row and set height 40px
  table.colWidth(0, 70);    // Get first column and set width 70 px
```

{sample :width 690 :height 200}Table\_Layout\_01{sample}

### Fill

With AnyChart it is possible to color background of any cell with a solid color, with a gradient transition or fill it with an image. It can be achieved with {api:anychart.graphics.vector.Fill}**.fill()**{api} parameter.
  
  
This section contains information on colorizing the whole table and each of the cells separately. To find out all possible ways of controlling background color of an element, please see [background controlling](../Appearance_Settings/Background) tutorial

#### Table fill

Background for all the table can be configured with {api:anychart.core.ui.Table#cellFill}**.cellFill()**{api} parameter.

```
  table.cellFill('#B8B8B8');
```

{sample :width 690 :height 200}Table\_Layout\_02{sample}

#### Even and Odd Rows

As a more advanced way of controlling table's background color there are parameters to adjust colors of even and/or odd row in the table. Parameter {api:anychart.core.ui.Table#cellEvenFill}**.cellEvenFill()**{api} is responsible for the background color of even rows and {api:anychart.core.ui.Table#cellOddFill}**.cellOddFill()**{api} is responsible for the background color of all odd rows.

```
  table.cellOddFill('#F5F5F5');  // color for odd rows
  table.cellEvenFill('#FFFFFF'); // color for even rows
```

Here is the sample with "#FFFFFF" background color for all cells in even rows and "#F5F5F5" color for all cells in odd rows.

{sample :width 690 :height 200}Table\_Layout\_03{sample}

#### Cell Fill

For emphasizing attention on one of the cells, it can be colorized in unique way. Background color of a certain cell is controlled by parameter {api:anychart.graphics.vector.Fill}**.fill()**{api}. and it should be applied to the cell itself.

```
  var cell = table.getCell(0,1);  // Get first row in second column
  cell.fill('#E0E43A');           // Set gold color as a background for the cell
```

### Border

Border is a part of a table. It visually divides whole table into separate cells as well as wraps these cells. As any
 part of chart it can be configured and all settings can be adjusted. In this section there are just several
 demonstration samples. Full information on borders and lines settings can be found in [Strokes and Lines](../Appearance_Settings/Strokes_and_Lines) tutorial.
  
  
In this section revealed all methods of controlling borders in a table. 
Parameter {api:anychart.core.ui.Table#cellBorder}**.cellBorder()**{api} provides an opportunity to set desirably configured border for all cells in a table. As far as content for each cell can be absolutely different, style for each of the cells can be set individually as well.
  
  
Sample below demonstrates setting gray stroke for the whole chart, set thickness equal to 1 px and makes it dashed, with 5 px dashes and 2 pixel gaps. Moreover, to cells have red stroke, which emphasize them.

```
  //set style
  table.cellBorder(
    '#B8B8B8',  // Color
    1,          // Thickness
    '5 2'       // Dash and gap length
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

{sample :width 690 :height 200}Table\_Layout\_04{sample}

**Note:** As far as any cell has 4 borders, there is a way to control style for each of them. Parameters {api:anychart.core.ui.Table.Cell#topBorder}**.topBorder()**{api}, {api:anychart.core.ui.Table.Cell#leftBorder}**.leftBorder()**{api}, {api:anychart.core.ui.Table.Cell#bottomBorder}**.bottomBorder()**{api} and {api:anychart.core.ui.Table.Cell#rightBorder}**.rightBorder()**{api} controls style for each of 4 cell's border.
  
  
Moreover, there are 4 parameters to control each of the border for every cell in a table. {api:anychart.core.ui.Table#cellTopBorder}**.cellTopBorder()**{api}, {api:anychart.core.ui.Table#cellLeftBorder}**.cellLeftBorder()**{api}, {api:anychart.core.ui.Table#cellBottomBorder}**.cellBottomBorder()**{api} and {api:anychart.core.ui.Table#cellRightBorder}**.cellRightBorder()**{api} adjust style of a border for each cell in table.

### Text Settings and Padding

Table layout may contain simple text in several cells. For avoiding setting same parameters for several cells it is 
more convenient to apply these parameters to the whole table with {api:anychart.core.ui.Table#cellTextFactory}**.cellTextFactory()**{api} parameter.
  
  
Cells are not limited in content type and amount of data, which may lead to a problem of content sticking to the 
cell's borders. For preventing such situations there is {api:anychart.core.ui.Table.Cell#padding}**.padding()**{api} parameter for controlling content position.
  

Sample below demonstrates controlling text settings and using padding  

```
  table.cellTextFactory()
    .padding(10)          // set 10px padding from each border of every cell
    .vAlign('center')     // set vertical align of the text
    .hAlign('right')      // set horizontal align of the text
    .fontWeight(600)      // set text font weight
    .fontSize(12)         // set text font size
    .fontColor('red');    // set text font color
```

{sample :width 690 :height 200}Table\_Layout\_05{sample}

### Span

In some cases it is desirable to enlarge a cell by uniting it with one or several cells from near by. 
There are two parameters for spanning several cells into one. Parameter {api:anychart.core.ui.Table.Cell#rowSpan}**.rowSpan()**{api} unites the cell with cells below in the column and parameter {api:anychart.core.ui.Table.Cell#colSpan}**.colSpan()**{api} unites cells in the row on the right side from the cell.

```
  // span cells
  table.getCell(1,0).rowSpan(2);  // span two cells into one row
  table.getCell(3,0).rowSpan(3);  // span tree cells into one row
  table.getCell(0,0).colSpan(2);  // span 2 cells 

  table.getCell(1,1).colSpan(2);  // span 2 cells in the row
  table.getCell(0, 0).rowSpan(3); // span 3 cells in the column
```

Sample below demonstrates connection of two cells in first row into one and connection of cells in first column according to season.

{sample :width 690 :height 200}Table\_Layout\_06{sample}


## Using Table

### Title

As far as title on a dashboard contains the main idea of a dashboard, it is vital to configure it's visual appearance. Here is a sample with simple title at the top of the dashboard and table layout dashboard below.

{sample :width 690 :height 300}Table\_Layout\_07{sample}


### Header Row

Title may represent information for the whole dashboard, but for parts of dashboard it may require to format several 
titles. One of the most convenient way of configuring titles is setting desirable configuration for the first row of 
the table layout. 
  
  
Here is a sample with text settings, applied only for the first (head) row of a table layout dashboard.

{sample :width 690 :height 300}Table\_Layout\_08{sample}

### Common Elements

Table layout dashboard may contain several charts. For visualization sake different chart may use common elements. 
One of the most popular common elements is scale. As far as scale calculates values, 
common scale may be used in comparative purposes.
  
  
Here is a sample of table layout dashboard with all bullet charts using same scale and custom axis uses the scale as well.

{sample :width 690 :height 325}Table\_Layout\_09{sample}
