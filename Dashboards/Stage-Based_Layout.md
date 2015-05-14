# Stage-based Layout

* [Overview](#overview)
* [Getting started with the stage](#getting_started_with_the_stage)
  * [Enabling the stage](#enabling_the_stage)
  * [Chart placement](#chart_placement)
  
## Overview

Rendering capability of AnyChart components is based on anychart.graphics library, which is in charge of visual display. This display is the stage, which is a graphics tool, which helps with positioning a number of charts and other elements on one page. 
It manages visual appearance and logic structure of data.

###Enabling the stage

When we start working with any graphic elements of AnyChart, the stage is created and enabled automatically, but in case this action was not defined directly, there's not much can be done with it.
To get an access to some useful settings of the stage we should do a custom creation of the stage:

```
	var stage = anychart.graphics.create('container');
```
Here we have defined the container for the stage simultaneously with enabling the stage. The following piece of code means the same:
```
	var stage = anychart.graphics.create;
	stage.container('container');
```

This will make the stage with the width and height of the main container by default. To change the default values of those parameters, write them after the name of the container in brackets. 
For example, to define the new stage of 800px in width and 600px in height, write the following:

```
var stage = anychart.graphics.create('container', 800, 600);
```

###Chart placement

On a stage, you can position a lot of charts and other elements. Dashboard means it, and there are several ways of positioning elements on a stage. 
One of them is [Table Layout](Table_Layout). The second option is to use stage as a dashboard basis.
Let's place a Column Chart sample on a stage. The only difference in this case is that we should set the stage and later define it as a container for drawing.

```
    // set stage
    stage = anychart.graphics.create('container');
	
	// draw
    chart.container(stage).draw();
```
{sample}DB\_Stage\_01{sample}


In case you need to place more than one chart, you can use bounds to adapt the dimensions of the charts to fit them on a web page or wherever you need.

```
    // set stage
    stage = anychart.graphics.create('container');
	
	// set chart_1
    var chart_1 = anychart.column(data_1);
	
	// chart size and position
	chart_1.bounds(0, 0, '50%', '70%');
	
	// set chart_2
    var chart_2 = anychart.column(data_2);
	
	// chart size and position
	chart_2.bounds('50%', 0, '50%', '70%');
  
	// draw
	chart_2.container(stage).draw();
```
{sample}DB\_Stage\_02{sample}

There are two ways of using bounds. If you define them in percents, your charts will resize each time the container is resized. If you define bounds in pixels, the charts will not change their dimensions along with the resized container. Let's see what we'll get if we define bounds in pixels:

{sample}DB\_Stage\_02-1{sample}

Explore the code in the playground to understand the difference.
