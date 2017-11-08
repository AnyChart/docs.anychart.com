# Labels 

* [Overview](#overview)
* [Text Labels](#text_labels)
* [Image Labels](#image_labels)
* [Attaching Actions](#attaching_actions)


## Overview

Custom labels are text or image elements that can be placed anywhere on your chart or map to add descriptions or comments. Labels also can have actions attached.

## Text Labels

The sample below demonstrates a {api:anychart.ui.Label}label{api} placed in the right top corner, containing some information about the chart data.

{sample}AS\_Labels\_01{sample}

## Image Labels

If you want to use image as a label and you don't need any text on this image, use {api:anychart.graphics.vector.Stage}**.stage()**{api} and define the image and its appearance settings using the {api:anychart.graphics.vector.Stage#image}**.image()**{api} method of the stage. 

The sample below shows a revenue chart with AnyChart logo in the left top corner of data plot. The code should be similar to this one:

```
  // create stage
  var stage = anychart.graphics.create('container');
  
  // define chart type and set data
  var chart = anychart.pieChart([
    {x: "Product A", value: "9000"},
    {x: "Product B", value: "5000"},
    {x: "Product C", value: "1400"},
    {x: "Product D", value: "590"},
    {x: "Product E", value: "8813"}
  ]);
  
  // create image label
  var image = stage.image();
  image.src("https://static.anychart.com/images/logo_anychart.gif"); // set image source
  image.y(15);                                                      // set spacing from the top
  image.x(25);                                                      // set spacing from the left
  image.width(50);                                                  // set width of the image
  image.height(50);                                                 // set height of the image
  image.zIndex(chart.zIndex() + 1);                                 // manage overlapping
```

These settings will allow you to display chart the following way:

{sample}AS\_Labels\_02{sample}

## Attaching Actions

You can attach actions to labels and turn them into controls that can change an appearance of a chart or invoke some external function.

Sample below will demonstrate you calling external function on image labels click.

Note: In the previous sample we've used {api:anychart.ui.Label}**.label()**{api} without text but with an image as a background. For such cases you can use **{api:anychart.graphics.vector.Stage#image}.image(){api}** method.

```
  var image = stage.image();
  image.src('https://static.anychart.com/images/column.png')  // source of the image
  image.width(25)                                            // set width of the image
  image.height(25)                                           // set height of the image
  image.y(20)                                                // set spacing from the top
  image.zIndex(2)                                            // manage overlapping
  image.x(35);                                               // set spacing from the left
```

To attach an action to the image you have to set **{api:anychart.graphics.vector.Image#listen}listen(){api}** method for the **{api:anychart.graphics.vector.Stage#image}.image(){api}**.

```
  var myImage = stage.image();
  myImage.src('https://static.anychart.com/images/column.png');
  myImage.align('topleft');
  
  myImage.listen(
    'click',                              // event type
    function() {/*custom function code*/} // your function
  )
```

Here is a sample with three custom images. Click on any of them invokes function of redrawing chart using same data but different chart type.

{sample}AS\_Labels\_03{sample}