# Table Layout

* [Overview](#overview)
* [Content](#content)
* [Visual settings](#visual_settings)
  * [Cells width and height](#cells_width_and_height)
  * [Fill](#fill)
  * [Border](#border)
  * [Text settings and padding](#text_settings_and_padding)
  * [Cols and rows span](#cols_and_rows_span)
* [Using table](#using_table)
  * [Title](#title)
  * [Advanced Title](#advanced_title)
  * [Header row](#header_row)
  * [Common Elements](#common_element)
 
## Overview

Table layout is a kind of a dashboard tools, which provides clear and effective way of positioning data on plot.
Dashboard is "an easy to read, often single page, real-time user interface, showing a graphical presentation of
the current status (snapshot) and historical trends of an organization’s key performance indicators to enable
instantaneous and informed decisions to be made at a glance.

Table Layout helps to manage several elements within the limits of one chart container. Table may help to control 
visual appearance and logic structure of data.
  
## Content

A cell in table layout dashboard may contain: 
 * String with simple text or a number
 * Any visual element of AnyChart (Legend, LegendItem, Label, Title, etc)
 * Any type of a chart (pie, cartesian, etc)
 * Any data series (for instance, anychart.cartesian.series.Area)
  
  
Let's create a simple table with two chart. Each of them represent annual income of the same company in different years.
First row contains only labels and second one only pie charts

{sample}Table\_Layout\_01{sample}

## Visual settings

Visual settings control:
 * Columns width and rows height
 * Cell padding & text settings
 * Fill
 * Border
 * Cols and rows span

### Cells width and height

Table layout consist of multiple cells and each of them may contain different type of information. In most cases same
 kind of data placed in one row or one column. Anychart provides **.rowHeight()** parameter for adjusting height of a 
row and **.colWidth()** parameter for controlling width of a column.
  
  
Sample below demonstrates controlling the height of the first row.

```
  table.rowHeight(1, 40);
```

{sample}Table\_Layout\_02{sample}

Controlling width of a concrete column is performed in a similar way, which is represented below:

```
  table.colWidth(1, 300)
```

{sample}Table\_Layout\_03{sample}

### Fill

With AnyChart it is possible to color background of any cell with a solid color, with a gradient transition or fill 
it with an image. It can be achieved with **.fill()** parameter.
  
  
This section contains information on colorizing the whole table and each of the cells separately. To find out all 
possible ways of controlling background color of an element, please see [background controlling](#../General_Appearance_Settings/Background)
 tutorial

#### Table fill

Background for all the table can be configurated with **.cellFill()** parameter.

```
  table.cellFill('lightgreen');
```

{sample}Table\_Layout\_05{sample}

#### Even and Odd Rows

As a more advanced way of controlling table's background color there are parameters to adjust colors of even and/or 
odd row in the table. Parameter **.cellEvenFill()** is responsible for the background color of even rows and **.cellOddFill**
is responsible for the background color of all odd rows.

```
  table.cellEvenFill('darkgreen');
  table.cellOddFill('lightgreen');
```

Here is the sample with "rgb(233, 234, 237)" background color for all cells in even row and "rgb(102, 143, 169)" color for all cells in odd row.

{sample}Table\_Layout\_06{sample}

#### Cell fill

For emphasizing attention on one of the cells, it can be colorized in unique way. Background color of a certain cell is controlled by parameter **.fill()**. and it should be applied to the cell itself.

```
  var cell = table.getCell(0,1);  // get first row in second column
  cell.fill('gold');              // set gold color as a background for the cell
```

{sample}Table\_Layout\_07{sample}

### Border

Border is a part of a table. It visually divides whole table into separate cells as well as wraps these cells. As any
 part of chart it can be configured and all settings can be adjusted. In this section there are just several
 demonstration samples. Full information on borders and lines settings can be found in [Strokes and Lines](../General_Appearance_Settings/Strokes_and_Lines) tutorial.
  
  
In this section revealed all methods of controlling borders in a table. 
Parameter **.cellBorder()** provides an opportunity to set desirably configured border for all cells in a table.
Sample below demonstrates the configuration for red dashed line with 3px thickness. Dashes have length of 5 pixels and length for gaps is 2 pixels.

```
  table.cellBorder('red', 3, '5 2');
```

{sample}Table\_Layout\_08{sample}

As far as content for each cell can be absolutely different, style for each of the cells can be set individually as well. 
  
  
Let's get dataset from the previous sample and adjust style for the first cell in the second row.

```
  var cell = table.getCell(0,1);
  cell.border(['red', 'blue', 'green'], 5);
```

{sample}Table\_Layout\_09{sample}

**Note:** As far as any cell has 4 borders, there is a way to control style for each of them. Parameters **.topBorder()**, **.leftBorder()**, **.bottomBorder()** and **.rightBorder()** controls style for each of 4 cell's border. 
  
  
Moreover, there are 4 parameters to control each of the border for every cell in a table. **.cellTopBorder()**, **.cellLeftBorder()**, **.cellBottomBorder()** and **.cellRightBorder()** adjust style of a border for each cell in table.

### Text Settings and padding

Table layout may contain simple text in several cells. For avoiding setting same parameters for several cells it is 
more convenient to apply these parameters to the whole table with **.cellTextFactory()** parameter. 

```
  var textSettings = anychart.elements.labelsFactory();
  textSettings.vAlign('center')
  textSettings.hAlign('center')
  textSettings.fontSize(20);
  textSettings.fontWeight(900);
  textSettings.fontColor('red');
  table.cellTextFactory(textSettings);
```

{sample}Table\_Layout\_11{sample}

### Span

In some cases it is desirable to enlarge a cell by uniting it with one or several cells from near by. 
There are two parameters for spanning several cells into one. **.rowSpan()** below from the cell in a column and **
.colSpan()** unites cells in the row on the right side from the cell.

```
  cell.colSpan(3);  // unites 3 cells in one row into one
  cell.rowSpan(2);  // unites 2 cells in one column into one
```

Sample below demonstrates connection of two columns and five rows into one cell.

{sample}Table\_Layout\_10{sample}


## Using table

### Title

As far as title on a dashboard contains the main idea of a dashboard, it is vital to configure it's visual appearance. Here is a sample with simple title at the top of the dashboard and table layout dashboard below.

{sample}Table\_Layout\_13{sample}

### Advanced Title

Title represents the main idea of a Dashboard. But in some cases simple text can't provide desirable instruments for representing data. Here is a sample of advanced title configuration.

{sample}Table\_Layout\_14{sample}


### Header row

Title may represent information for the whole dashboard, but for parts of dashboard it may require to format several 
titles. One of the most convenient way of configuring titles is setting desirable configuration for the first row of 
the table layout. 
  
  
Here is a sample with text settings, applied only for the first (head) row of a table layout dashboard.

{sample}Table\_Layout\_15{sample}

### Common Elements

Table layout dashboard may contain several charts. For visualization sake different chart may use common elements. 
One of the most popular common elements is scale. As far as scale calculates values, 
common scale may be used in comparative purposes.
  
  
Here is a sample of table layout dashboard with two charts using common custom y scale. 

{sample}Table\_Layout\_12{sample}