# Custom GeoJson Maps

* [Overview](#overview)
* [Creating Maps For AnyChart](#creating_maps_for_anychart)

## Overview

Custom Map is a map made by users of our component for some special purposes. In this article we will talk about creating those maps from data in the most popular mapping formats. So, if you are going to draw your own map or create it from SVG, this article will help you.
<br>
First of all, visit our (AnyChart Maps Collection)[../Maps_List.md] and download the map in one of available formats.
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
<a href="http://static.anychart.com/images/creating\_maps\_01.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_01.jpg"></a>
<br> 
Define the path to the catalogue with the files of the map.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_02.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_02.jpg"></a>
<br>
That's how the world map will look like when imported:
<br>
<a href="http://static.anychart.com/images/creating\_maps\_03.jpg" target=_blank><img width = "700"src = "http://static.anychart.com/images/creating\_maps\_03.jpg"></a>
<br><br>
3. So, as we have imported the map, we need to select the territory we will be working with and extract it from the whole map. For that we need a selection tool (of box type by default, to change the type click on the arrow to the right from the tool). Here we have used a Freehand Selection Tool.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_04.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_04.jpg"></a>
<br>
We need to get rid of the rest now - for that go the menu, click on the "Layer" button and choose to "Save As...".
<br>
<a href="http://static.anychart.com/images/creating\_maps\_05.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_05.jpg"></a>
<br>
Don't forget to match the box with "Save only selected features" - unless you do it, you'll get the file with the whole map.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_06.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_06.jpg"></a>
<br><br>




4. Now, we're ready for working further. Let's change the projection now.
<br>
Projection is just a type of view that shows how we look at the map. There are loads of projections, made by different geographers in different times for different purposes, so not all of them suite the world map.
<br>
As can be seen in the right-down corner, the default projection type is EPSG 4326. If you click on it, you'll open the "Project Properties" window.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_07.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_07.jpg"></a>
<br>
In the top of the window there is a checkbox "Enable 'on the fly' CRS transformation". When checked, it automatically transforms added map files into a projection that is set in the whole project as default. Though, if the default projection is a non-global one, newly added map files can be not recognized by the default type of projection.
<br>
Now, let's change the projection of the world map. For that go to the Layer -> Set CRS of Layer(s). Note that a layer which projection you want to change has to be highlighted.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_09.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_09.jpg"></a>
<br>
<a href="http://static.anychart.com/images/creating\_maps\_10.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_10.jpg"></a>
<br>
One of the rather famous map projections in QGIS is "Egypt 1907 / Purple Belt". Now, look at the sample below:
<br>
<a href="http://static.anychart.com/images/creating\_maps\_11.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_11.jpg"></a>
<br>
That's how the world map looks like in the "Egypt 1907 / Purple Belt" projection.
<br>
5. Now, let's simplify the geometry. The less details are in a map, the faster AnyChart works, and the faster your page loads. 
The simplest way to do this is to go to the the Vector menu -> Geometry Tools -> Simplify Geometries. Set a tolerance of about 1000, tick the "Add result to canvas" box and select a result new file to save the result to. 
<br>
In the end of the process, you'll get a small information window, where the difference between the original map file and transformed one is quite clear.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_13.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_13.jpg"></a>
<br>
When everything's over, you'll get a new layer with simplified geometry.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_12.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_12.jpg"></a>



6. Let's look through the properties of the map. Before exporting, we might want to inspect and modify the properties of our map. To do this, right click the layer in the table of contents and select "Open Attribute Table". These attributes will be included in the GeoJSON when we export our map. Highmaps was designed to be used with user defined maps, and is very flexible in the way that it handles map data. There are therefore no special requirements for metadata in the maps. 

<br>
Then we should give the name to our new shape file.
<br> To make any changes in the file, we use "Toggle Editing" tool:
<br>
<br>
When this button is clicked, some other tools become available. We will need an "Add Feature" tool to draw a new polygone.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_14.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_14.jpg"></a>
<br>
<a href="http://static.anychart.com/images/creating\_maps\_15.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_15.jpg"></a>
<br>
7. Draw a polygone by clicking in those places where you want its vertexes to be, and right-click to finish. Then define the id for the new-made polygone.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_16.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_16.jpg"></a>
<br>
If you want to move a shape, use the "Move Feature" tool (next to "Add Feature"). To save the shape that you've just made click on the "Toggle Editing" button again.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_17.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_17.jpg"></a>
<br>
You may change the layers order, for that just drag the layer in the list of layers and put it where you want it to be (e.g., like it's done in Adobe Photoshop).
<br>
<a href="http://static.anychart.com/images/creating\_maps\_18.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_18.jpg"></a>
<br><br>
8. Now let's cling the layers together. Go to the Vector->C.. Tools->Clip. This feature clips an existing shape file to everything outside its bounds.
Unfortunately, you can't do that with more than one shape file at once.
<br>
An "Input Vector layer" is the "base" layer that you want the created one to clip to, and the "Clip layer" is always the one that we've created. Then you'll have to name your new shapefile.
<br> Don't forget to uncheck boxes "Use only selected features" if you want to clip the whole layers without selecting them, or the new layer will be empty.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_19.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_19.jpg"></a>
<br><br>
<a href="http://static.anychart.com/images/creating\_maps\_20.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_20.jpg"></a>
<br>
Here we've done a new shapefile that is named New_Africa and contains the shape we've created.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_21.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_21.jpg"></a>
<br>
Let's turn off those layers except the newest one (New_Africa). That's what we've got after clipping the layers.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_22.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_22.jpg"></a>
<br>
9. For more advanced edits use the Toolbox Panel (View->Panels->Toolbox).
<br>
<a href="http://static.anychart.com/images/creating\_maps\_08.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_08.jpg"></a>









