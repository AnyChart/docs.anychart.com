# Stage-based Layout

* [Overview](#overview)
* [Getting started with the stage](#getting_started_with_the_stage)
  * [Enabling the stage](#enabling_the_stage)
  * [Chart placement](#chart_placement)
* [Layers](#layers)
  * [Add](#add)
  * [Remove](#remove)
  * [Adapt](#adapt)
* [Custom elements](#custom_elements)
* [Print](#print)

  
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


In case you need to place more than one chart, you can use bounds adapt the dimensions of the charts to fit them on a web page or wherever you need.

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

When using stage, there's another way to place a number of charts next to each other. Using layers makes it easier to edit the dimensions of the charts and their location.

##Layers

Using layers makes it easier to operate with groups of elements. It's possible to transform, remove or add a plenty of elements with the only line. A workflow with AnyChart layers is organized quite similar to the same working process in Adobe Photoshop. You may edit a single layer with no changes made with other layers. This feature is rather helpful while creating dashboards.
Look at the next sample. Here we've done the same as in the sample above, but using layers.

```
	// set layers
    var layer_1 = stage.layer();
    var layer_2 = stage.layer();
	
```
{sample}DB\_Stage\_03{sample}

Note that we can move charts using not only bounds but layer functions, such as {api:anychart.graphics.vector.Layer#translate}**.translate()**{api}, {api:anychart.graphics.vector.Layer#setPosition}**.setPosition()**{api}, etc. Look for the whole list in our Layer **{api:anychart.graphics.vector.Layer}API{api}**.

###Add

There are several options how to add a layer. You can see the first one in the sample above. The second way is to use the {api:anychart.graphics.vector.Stage#addChild}**.addChild()**{api} method to add an element to a stage or layer by its name if you have already created it using the AnyChart constructor. The similar method {api:anychart.graphics.vector.Stage#addChildAt}**.addChildAt()**{api} will allow you to put the new element between the existing layers or behind them by defining not only the name but the index for this element.

```
	//first way of adding a layer
	var layer_1 = anychart.graphics.layer();
    stage.addChild(layer_1); //for the first chart
	
	//second way of adding a layer
    var layer_2 = stage.layer(); //for the second chart
	
```
Try to edit any sample with layers in this way.

###Remove

We can simply get rid of layers - use {api:anychart.graphics.vector.Element.remove()}**.remove()**{api} for this.
For example, let's remove the lowest layer from our last sample:

```
	// remove the first layer
    layer_1.remove();
	
```
{sample}DB\_Stage\_04{sample}

###Adapt

As it was mentioned before, layers might be transformed. For example, we use {api:anychart.graphics.vector.Element#translate}**.translate()**{api}
 to change the layers' position, {api:anychart.graphics.vector.Element#rotate}**.rotate()**{api} 
for rotating them and {api:anychart.graphics.vector.Element#scale}**.scale()**{api},
 if we need to scale it some way.
 
 Let's now make a more complicated example to show those features. Explore the sample in the playground to see the code.
 
{sample}DB\_Stage\_05{sample}

Note that the center of the stage coordinate system is in the left top corner of the monitor and the vertical scale of the stage is directed to the bottom of the screen.

Here we used 3 different layers to build each chart.




