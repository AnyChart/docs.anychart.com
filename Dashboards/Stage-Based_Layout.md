# Stage-based Layout

* [Overview](#overview)
* [Enabling the stage](#enabling_the_stage)
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

All elements of our charts are drawn using graphics. So, the stage is a graphics tool, which helps to position a number of charts on one page. 
It manages visual appearance and logic structure of data.


##Enabling the stage

To enable the stage we only need to define stage as a container:

```
var stage = anychart.graphics.create('container');
```

This will make the stage with the width and height of the main container by default. To change the default values of those parameters, write them after the name of the container in brackets. 
For example, to define the new stage of 800px in width and 600px in height, write the following:

```
var stage = anychart.graphics.create('container', 800, 600);
```

On a stage, you can position a lot of elements: not only the charts but figures such as rectangles, circles, lines, etc. Note that the center of the scale is in the left top corner of the monitor.
Let's make a simple picture using stage instruments like circle and lines:

```

```
{sample}DB\_Stage\_01{sample}

Note that there's almost no figures besides rectangles and circles, but there are those elements of drawing like lines and arcs that allow you to draw anything you need. 
Here we used zIndex to position one element over another, but it's possible to do the same using layers:

```

```
{sample}DB\_Stage\_02{sample}


