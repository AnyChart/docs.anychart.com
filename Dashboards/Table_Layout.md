{:index 3}
# Table Layout

 * [Overview](#overview)
 * [Border](#border)
 
##Overview

Table layout

## Borders

Border is a part of a table. It visually divides whole table into separate cells as well as wraps these cells. As any 
part of chart it can be configured and all settings can be adjusted. In this section there are just several 
demonstration samples. Full information on borders and lines settings can be found in [Strokes and Lines](../General_Appearance_Settings/Strokes_and_Lines) tutorial.
  
  
In this section revealed all methods of controlling borders in a table. 
Parameter **.cellBorder()** provides an opportunity to set desirably configured border for all cells in a table. 
Sample below demonstrates the configuration for red dashed line with 3px thickness. Dashes have length of 5 pixels 
and length for gaps is 2 pixels.

```
  table.cellBorder('red', 8, '5 2');
```

{sample}Table\_Layout\_03{sample}

As far as content for each cell can be absolutely different, style for each of the cells can be set individually as 
well. 
  
  
Let's get dataset from the previous sample and adjust style for the first cell in the second row.

```
  var cell = table.getCell(0,1);
  cell.border(['red', 'blue', 'green'], 5);
```

{sample}Table\_Layout\_04{sample}

**Note:** As far as any cell has 4 borders, there is a way to controle style for each of them. Parameters **.topBorder()**, **.leftBorder()**, **.bottomBorder()** and **.rightBorder()** controles style for each of 4 cell's border. 
  
  
Moreover, there are 4 parameters to controle each of the border for every cell in a table. **.cellTopBorder()**, **.cellLeftBorder()**, **.cellBottomBorder()** and **.cellRightBorder()** adjust style of a border for each cell in table.
