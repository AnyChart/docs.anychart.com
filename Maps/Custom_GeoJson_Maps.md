# Custom GeoJson Maps

* [Overview](#overview)
* [Creating Maps For AnyChart](#creating_maps_for_anychart)

## Overview

Custom Map is a map made by users of our component for some special purposes. In this article we will talk about creating those maps from data in most popular mapping formats. So, if you are going to draw your own map or create it from SVG, this article will help you.
<br>
We have noticed that a lot of users have maps in \*.shp or other similar formats, which can be easily converted for AnyChart Maps through GeoJSON format, as GeoJSON is one of three native formats for AnyChart.
This conversion can be made through most of GIS-editors. You can use QGIS as it is a free editor that supports .shp, .kml and a plenty of formats also. 
<br>
The AnyChart Maps are supplied in GeoJSON, which makes them flexible in working and editing. Don't forget that different coordinate systems are used in different formats. Our map collection is also supplied as .js files, which are almost identical to the .geojson, except for the code size.

## Creating Maps For AnyChart

Now let's walk through the process of creating a custom map using AnyChart source files. Note that there are many ways of working with QGIS, so some commands or interface might be different due to version of the program or the platform used. An only one way of using QGIS is consideres here, so look up their documentation if you need any extra information.

1. Get the QGIS from [here](http://qgis.org/en/site/forusers/download.html). 

2. When you have installed the QGIS, the first step is importing your data. 
Let's take the world map as a source and select Africa for demonstration. 
Select the "Add Vector Layer" in the "Layer" menu.
<br>
<img width = "700" src = "http://static.anychart.com/images/creating\_maps\_01.jpg">
<br> 
Define the path to the catalogue with the files of the map.
<br>
<img width = "700" src = "http://static.anychart.com/images/creating\_maps\_02.jpg">
<br>
That's how the world map will look like when imported:
<br>
<img width = "700"src = "http://static.anychart.com/images/creating\_maps\_03.jpg">
<br>
3. So, as we have imported the map, we need to select the territory we will be working with and extract it from the whole map. For that we need a selection tool (of box type by default, to change the type click on the arrow to the right from the tool). Here we have used a Freehand Selection Tool.
<br>
<img width = "700" src = "http://static.anychart.com/images/creating\_maps\_04.jpg">
<br>
We need to get rid of the rest now - for that go the menu, click on the "Layer" button and choose to "Save As...".
<br>
<img width = "700" src = "http://static.anychart.com/images/creating\_maps\_05.jpg">
<br>
Don't forget to match the box with "Save only selected features" - unless you do it, you'll get the file with the whole map.
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_06.jpg">
<br>
4. Now, we're ready for working further. You may start a new project (click on "Project" -> New -> Import) or simply go on working with the existing one. The result of importing the new created file or saving a selection will look tike that:
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_07.jpg">
<br>
In case of us going on working with the project we already have, we may delete the lowest layer or uncheck it to make it invisible, as we won't need it anymore.
<br>
While this looks nice, we want our map to have a different look. The simplest thing we can do is to change the color of the map. Click twice on the name of the layer to open the layer settings. Changing color is rather simple. Look through the pics below.
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_09.jpg">
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_10.jpg">
<br>
5. Now, let's add a new layer and draw a polygone on it. We need a drawing tool for that - "New Shapefile Layer...". Look at the picture below.
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_11.jpg">
<br>
It's very important not to forget about two moments here:
<br> 1) check the "Polygone" - in different case you will not be able to make a closed shape;
<br> 2) choose the right CRS-file - it might be automatically chosen in default or other CRS-file which doesn't match the one those files you have uploaded are using.
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_12.jpg">
<br>
Then we should give the name to our new shape file.
<br> To make any changes in the file, we use "Toggle Editing" tool:
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_13.jpg">
<br>
When this button is clicked, some other tools become available. We will need an "Add Feature" tool to draw a new polygone.
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_14.jpg">
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_15.jpg">
<br>
Draw a polygone by clicking in those places where you want its vertexes to be, and right-click to finish. Then define the id for the new-made polygone.
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_16.jpg">
<br>
If you want to move a shape, use the "Move Feature" tool (next to "Add Feature"). To save the shape that you've just made click on the "Toggle Editing" button again.
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_17.jpg">
<br>
You may change the layers order, for that just drag the layer in the list of layers and put it where you want it to be (e.g., like it's done in Adobe Photoshop).
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_18.jpg">
<br>
6. Now let's cling the layers together. Go to the Vector->C.. Tools->Clip. This feature clips an existing shape file to everything outside its bounds.
Unfortunately, you can't do that with more than one shape file at once.
<br>
An "Input Vector layer" is the "base" layer that you want the created one to clip to, and the "Clip layer" is always the one that we've created. Then you'll have to name your new shapefile.
<br> Don't forget to uncheck boxes "Use only selected features" if you want to clip the whole layers without selecting them, or the new layer will be empty.
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_19.jpg">
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_20.jpg">
<br>
Here we've done a new shapefile that is named New_Africa and contains the shape we've created.
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_21.jpg">
<br>
Let's turn off those layers except the newest one (New_Africa). That's what we've got after clipping the layers.
<br>
<img src = "http://static.anychart.com/images/creating\_maps\_22.jpg">
<br>
As you can see, this area doesn't cover both shapes, only the common territories. To make the region that will contain both African territory and the shape that was created we should repeat the previous operation, using the new layer.




7. For more advanced edits use the Toolbox Panel (View->Panels->Toolbox).
<br>
<img width = "700" src = "http://static.anychart.com/images/creating\_maps\_08.jpg">









