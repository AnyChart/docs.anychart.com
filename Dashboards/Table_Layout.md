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
 