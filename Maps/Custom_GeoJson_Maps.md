# Custom GeoJson Maps

* [Overview](#overview)
* [Creating Maps For AnyChart](#creating_maps_for_anychart)

## Overview

Custom Map is a map made by users of our component for some special purposes. In this article we will talk about creating those maps from data in the most popular mapping formats. So, if you are going to draw your own map or create it from SVG, this article will help you.
<br>
First of all, visit our [AnyChart Maps Collection](../Maps_List.md) and download the map in one of available formats.
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
Don't forget to match the box with "Save only selected features" - unless you do it, you'll get the file with the whole map. To see the selected terrototy separately, uncheck the layer in the list of layers.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_06.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_06.jpg"></a>
<br><br>
4. Now, we're ready for working further. Let's change the projection now.
<br>
Projection is just a type of view that shows how we look at the map. There are loads of projections, made by different geographers in different times for different purposes, so not all of them suite the world map.
<br>
As can be seen in the right-down corner, the default projection type is EPSG 4326. If you click on it, you'll open the "Project Properties" window.
<br>
In the top of the window there is a checkbox "Enable 'on the fly' CRS transformation". When checked, it automatically transforms added map files into a projection that is set in the whole project as default. Though, if the default projection is a non-global one, newly added map files can be not recognized by the default type of projection.
<br>
Now, let's change the projection of our map part. For that check the "Enable 'on the fly' CRS transformation" box and use "Filter" field to find the appropriate projection.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_09.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_07.jpg"></a>
<br>
As you can see above, we've got several projections for the "usa" search tag. Let's choose the first one, USA_Contiguous_Albers_Equal_Area_Conic (it's got 102003 EPSG code). Apply the projection.
<a href="http://static.anychart.com/images/creating\_maps\_08.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_08.jpg"></a>
<br><br>
5. Now, let's simplify the geometry. The less details are in a map, the faster AnyChart works, and the faster your page loads. 
The simplest way to do this is to go to the the Vector menu -> Geometry Tools -> Simplify Geometries. Set a tolerance of 1 (it will be automatically rewritten as 1,0000), tick the "Add result to canvas" box and select a result new file to save the result to. 
<br>
In the end of the process, you'll get a small information window, where the difference between the original map file and transformed one is quite clear.
<br>
When everything's over, you'll get a new layer with simplified geometry.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_09.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_09.jpg"></a>
<br><br>
6. Let's look through the properties of the map - it worth inspecting them before exporting. Go to the contents table, right-click the layer and select "Open Attribute Table". You'll see a list of attributes that will be included in the .geojson file. As AnyChart was created quite flexible in working with data, it is able to work with used-defined maps, also, there are no special requirements for its metadata. 
<a href="http://static.anychart.com/images/creating\_maps\_10.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_10.jpg"></a>
<br>
<a href="http://static.anychart.com/images/creating\_maps\_11.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_11.jpg"></a>
<br><br>
7. If you are finally satisfied with your map, you shall export it to GeoJSON format to use with AnyChart. For that right-click the layer you want to export in the "Layers" table and select "Save As". Make sure you've selected to save the layer in GeoJSON format. The result file is appropriate for using directly with AnyChart. 
<br>You may notice that QGIS includes a large amount of decimals in the GeoJSON coordinates by default. You may strip it using a Regex or similar for optimization.
<br>
<a href="http://static.anychart.com/images/creating\_maps\_12.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_12.jpg"></a>
<br>
<a href="http://static.anychart.com/images/creating\_maps\_13.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_13.jpg"></a>
<br>
Don't forget to choose the CRS that you've used in the project, as the default one might be automatially set.
<br>
<br>
8. For testing your map, paste your GeoJSON into our [playground](http://playground.anychart.com). Your result would look something like this:
<br>
<a href="http://static.anychart.com/images/creating\_maps\_14.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/creating\_maps\_14.jpg"></a>
<br>
Now you know how to use GeoJSON maps in AnyChart. Enjoy!
