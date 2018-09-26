{:index 4}

# Custom GeoJSON Maps

## Overview

AnyChart is doing its best to create a [collection of maps](./Maps_List) to help you with most of the cases, but it is always possible that you need a custom map. In this article we will tell you how to create a custom map from data in the most popular mapping formats.

GeoJSON, [TopoJSON](Custom_TopoJSON), [SVG](Custom_SVG_Maps) formats are formats of Geo Data AnyChart directly supports.

\*.SHP is a de facto standart for geo data and although you can't load SHP map directly into AnyChart, any SHP map can be easily used for AnyChart Maps through GeoJSON format.

This conversion can be made through most of GIS-editors. You can use QGIS as it is a free editor that supports .shp, .kml and a plenty of other formats. 

The AnyChart Maps are supplied in [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON), which makes them flexible in working and editing. Don't forget that different coordinate systems are used in different formats.

## Creating Maps For AnyChart

Now let's walk through the process of creating a custom map. Note that there are many ways of working with QGIS, so some commands or interface might be different due to version of the program or the platform used. Only one way of using QGIS is considered here, so look up their documentation if you need any extra information.

1) Get the QGIS from [https://qgis.org/en/site/forusers/download.html](https://qgis.org/en/site/forusers/download.html).

2) When you have installed the QGIS, the first step is importing your data.  Let's take the World Map as a source and select North America for demonstration. Select the "Add Vector Layer" in the "Layer" menu.

<a href="https://static.anychart.com/images/creating\_maps\_01.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/creating\_maps\_01.jpg"></a>

Define the path to the catalogue with the files of the map.

<a href="https://static.anychart.com/images/creating\_maps\_02.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/creating\_maps\_02.jpg"></a>

That's how the world map will look like when imported:

<a href="https://static.anychart.com/images/creating\_maps\_03.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/creating\_maps\_03.jpg"></a>

3) So, as we have imported the map, we need to select the territory we will be working with and extract it from the whole map. For that we need a selection tool (of box type by default, to change the type click on the arrow to the right from the tool). Here we have used a Freehand Selection Tool.

<a href="https://static.anychart.com/images/creating\_maps\_04.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/creating\_maps\_04.jpg"></a>

We need to get rid of the rest now - for that go the menu, click on the "Layer" button and choose to "Save As...".

<a href="https://static.anychart.com/images/creating\_maps\_05.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/creating\_maps\_05.jpg"></a>

Don't forget to match the box with "Save only selected features" - unless you do it, you'll get the file with the whole map. To see the selected territory separately, uncheck the layer in the list of layers.

<a href="https://static.anychart.com/images/creating\_maps\_06.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/creating\_maps\_06.jpg"></a>

4) Now, we're ready to go on. Let's change the projection now.

Projection is just a type of view that shows how we look at the map. There are loads of projections, made by different geographers in different times for different purposes, not all of them suite the world map. 

**Note:** you can [change projection later when you use the map in AnyMap](Map_Projections).

As can be seen in the right-down corner, the default projection type is EPSG 4326. If you click on it, you'll open the "Project Properties" window.

In the top of the window there is a checkbox "Enable 'on the fly' CRS transformation". When checked, it automatically transforms added map files into a projection that is set in the whole project as default. Though, if the default projection is a non-global one, newly added map files can be not recognized by the default type of projection.

Now, let's change the projection of our map part. For that check the "Enable 'on the fly' CRS transformation" box and use "Filter" field to find the appropriate projection.

<a href="https://static.anychart.com/images/creating\_maps\_09.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/creating\_maps\_07.jpg"></a>

As you can see above, we've got several projections for the "usa" search tag. Let's choose the first one, USA\_Contiguous\_Albers\_Equal\_Area\_Conic (102003 EPSG code). Apply the projection.

<a href="https://static.anychart.com/images/creating\_maps\_08.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/creating\_maps\_08.jpg"></a>

5) Now, let's simplify the geometry. The less details are in a map, the faster AnyChart works, and the faster your page loads. 

The simplest way to do this is to go to the the Vector menu > Geometry Tools > Simplify Geometries. Set a tolerance of 1 (it will be automatically changed to 1,0000), tick the "Add result to canvas" box and select a result new file to save the result to. 

In the end of the process, you'll get a small information window, where the difference between the original map file and transformed one is quite clear.

When everything's over, you'll get a new layer with simplified geometry.

<a href="https://static.anychart.com/images/creating\_maps\_10.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/creating\_maps\_10.jpg"></a>

6) Let's look through the properties of the map - it worth inspecting them before exporting. Go to the contents table, right-click the layer and select "Open Attribute Table". You'll see the list of attributes that will be included in the .geojson file. As AnyChart was created quite flexible in working with data, it is able to work with used-defined maps, also, there are no special requirements for its metadata. 

<a href="https://static.anychart.com/images/creating\_maps\_11.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/creating\_maps\_11.jpg"></a>

7) If you are finally satisfied with your map, you must export it to GeoJSON format to use with AnyChart. For that right-click the layer you want to export in the "Layers" table and select "Save As". Make sure you've selected to save the layer in GeoJSON format. The result file is appropriate for using directly with AnyChart. 

You may notice that QGIS includes a large amount of decimals in the GeoJSON coordinates by default. You may strip it using a Regex or similar for optimization.

<a href="https://static.anychart.com/images/creating\_maps\_12.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/creating\_maps\_12.jpg"></a>

<a href="https://static.anychart.com/images/creating\_maps\_13.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/creating\_maps\_13.jpg"></a>

Don't forget to choose the CRS that you've used in the project, as the default one might be automatically set.

8) Try your GeoJSON map by pasting the code into the text area:

{sample}Maps\_Custom\_GeoJson\_01{sample}

Now you know how to use GeoJSON maps in AnyChart. Enjoy!