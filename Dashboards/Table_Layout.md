{:index 3}
# Table Layout

 * [Overview](#overview)
 * [Visualization](#visualization)
  * [Fill](#fill)
  * [Border](#border)
 
##Overview

Table layout

## Visualization

### Fill

With AnyChart it is possible to color background of any cell with a solid color, with a gradient transition or fill it with an image. It can be achieved with **.fill()** parameter.
  
  
This section contains information on colorizing the whole table and each of the cells seperatly.

#### Table

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

Here is the sample with "rgb(233, 234, 237)" background color for all cells in even row and "rgb(102, 143, 169)" color for all  cells in odd row.

{sample}Table\_Layout\_06{sample}

#### Cell

Style for a certain cell controls with parameter **.fill()**. by this parameter should be applied to the cell itself.

```
  var cell = table.getCell(2,4);  // get cell in third column and in fifth row
  cell.fill('gold');              // set gold color as a background for the cell 
```

{sample}Table\_Layout\_06{sample}

### Border

Border is a part of a table. It visually divides whole table into separate cells as well as wraps these cells. As any part of chart it can be configured and all settings can be adjusted. In this section there are just several demonstration samples. Full information on borders and lines settings can be found in [Strokes and Lines](../General_Appearance_Settings/Strokes_and_Lines) tutorial.
  
  
In this section revealed all methods of controlling borders in a table. 
Parameter **.cellBorder()** provides an opportunity to set desirably configured border for all cells in a table.
Sample below demonstrates the configuration for red dashed line with 3px thickness. Dashes have length of 5 pixels and length for gaps is 2 pixels.

```
  table.cellBorder('red', 8, '5 2');
```

{sample}Table\_Layout\_07{sample}

As far as content for each cell can be absolutely different, style for each of the cells can be set individually as well. 
  
  
Let's get dataset from the previous sample and adjust style for the first cell in the second row.

```
  var cell = table.getCell(0,1);
  cell.border(['red', 'blue', 'green'], 5);
```

{sample}Table\_Layout\_08{sample}

**Note:** As far as any cell has 4 borders, there is a way to controle style for each of them. Parameters **.topBorder()**, **.leftBorder()**, **.bottomBorder()** and **.rightBorder()** controles style for each of 4 cell's border. 
  
  
Moreover, there are 4 parameters to controle each of the border for every cell in a table. **.cellTopBorder()**, **.cellLeftBorder()**, **.cellBottomBorder()** and **.cellRightBorder()** adjust style of a border for each cell in table.
