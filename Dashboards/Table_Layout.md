# Table Layout

 * [Overview](#overview)
 * [Chart](#chart)
 * [Content](#content)
 * [Row Height](#row_hight)
 * [Column Width](#column_width)
 * [Padding](#padding)
 * [Fill](#fill)
  * [Table](#table)
  * [Even and Odd Rows](#even_and_odd_rows)
  * [Cell](#cell)
 * [Border](#border)
 * [Span](#span)
 * [Text Settings](#text_settings)
 * [Common Elements](#common_element)
 * [Title](#title)
 
## Overview

Table layout is a kind of a dashboard, which provides clear and effective way of positioning data on plot. Dashboard is "an easy to read, often single page, real-time user interface, showing a graphical presentation of the current status (snapshot) and historical trends of an organization’s key performance indicators to enable instantaneous and informed decisions to be made at a glance.

## Chart

Table Layout helps to manage several elements within the limits of one chart container. Table may help to control 
visual appearance and logic structure of data.
  
## Content

Table layout may contain simple text in a format of a label as well as any visual element of AnyChart. 
  
  
Let's create a simple table with two chart. Each of them represent annual income of the same company in different years.
First row contains only labels and second one only pie charts

```
  //create table
  var table = anychart.elements.table();
  
  //set table content
  table.contents([
      [
          // Create first lable
          anychart.elements.label()
          //text setter
          .text(          
              income2003.title().text()   //get text from the chart
          )
          //adhust position and visual settings
          .position('center')
          .anchor('center')
          .fontSize(20)
          , 
          
          // Create second lable
          anychart.elements.label()
          //text setter
          .text(
              income2004.title().text()   //text getter from chart.
          )
          //adhust position and visual settings
          .position('center')
          .anchor('center')
          .fontSize(20)
      ],
      [income2003, income2004]
  ]);
```

{sample}Table\_Layout\_01{sample}

## Row Height

AnyChart provides a special **.rowHieght()** parameter for controlling height of exact row in the table.

```
    table.rowHeight(1, 300);
```

{sample}Table\_Layout\_02{sample}

## Column Width

For controlling width of the whple column, **.colWidth()** parameter is perfect match. below is a sample of 
this parameter usage.

```
    table.colWidth(0, 70)
```

{sample}Table\_Layout\_03{sample}

## Padding

Table Layout provides several parameters to adjust Table Layout visual appearance. For preventing content sticking to 
the cell's edges. Here is a sample with 10 px padding from every border for the whole table.

```
    table.cellPadding('20%');
```

{sample}Table\_Layout\_04{sample}

## Fill

With AnyChart it is possible to color background of any cell with a solid color, with a gradient transition or fill 
it with an image. It can be achieved with **.fill()** parameter.
  
  
This section contains information on colorizing the whole table and each of the cells separately. To find out all 
possible ways of controlling background color of an element, please see [background controlling](#../General_Appearance_Settings/Background)
 tutorial

### Table

Background for all the table can be configurated with **.cellFill()** parameter.

```
  table.cellFill('lightgreen');
```

{sample}Table\_Layout\_05{sample}

### Even and Odd Rows

As a more advanced way of controlling table's background color there are parameters to adjust colors of even and/or 
odd row in the table. Parameter **.cellEvenFill()** is responsible for the background color of even rows and **.cellOddFill**
is responsible for the background color of all odd rows.

```
  table.cellEvenFill('darkgreen');
  table.cellOddFill('lightgreen');
```

Here is the sample with "rgb(233, 234, 237)" background color for all cells in even row and "rgb(102, 143, 169)" color for all cells in odd row.

{sample}Table\_Layout\_06{sample}

### Cell

Style for a certain cell controls with parameter **.fill()**. by this parameter should be applied to the cell itself.

```
  var cell = table.getCell(3,1);  // get cell in fourth row and in second column
  cell.fill('gold');              // set gold color as a background for the cell

```

{sample}Table\_Layout\_07{sample}

## Border

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

## Span

In some cases it is desirable to enlarge a cell by uniting it with one or several cells from near by. 
There are two parameters for spanning several cells into one. **.rowSpan()** below from the cell in a column and **
.colSpan()** unites cells in the row on the right side from the cell.

```
  cell.colSpan(3);  // unites 3 cells in one row into one
  cell.rowSpan(2);  // unites 2 cells in one column into one
```

Sample below demonstrates connection of two columns and five rows into one cell.

{sample}Table\_Layout\_10{sample}

## Text Settings

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

## Common Elements

Table layout dashboard may contain several charts. For visualization sake different chart may use common elements. 
One of the most popular common elements is scale. As far as scale calculates values, 
common scale may be used in comparative purposes.
  
  
Here is a sample of table layout dashboard with two charts using common custom y scale. 

{sample}Table\_Layout\_12{sample}

## Title

As far as title on a dashboard contains the main idea of a dashboard, it is vital to configure it's visual appearance
. Here is a sample with simple title at the top of the dashboard and table layout dashboard below.

