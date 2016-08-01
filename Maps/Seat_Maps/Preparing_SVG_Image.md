{:index 8}
Preparing SVG Image
===========

* [Overview](#overview)
* [Creating a picture](#creating_a_picture)
* [Grouping](grouping)
* [ID setting](#id_setting)


## Overview

In this article you will find a process of creating an SVG-picture suitable for using in AnyChart Seat Maps. We have used Adobe Illustrator for drawing a picture, but it's possible to use any other SVG-supporting program.


## Creating a picture

We create a picture as a usual project in Illustrator, using its basic components and tools. Let's draw a simple house plan. For drawing, we'll need a "figures" tool and a "feather" for creating squares, circles, polygons and curves. 

Create the image file: "File" -> "New":

<a href="//images.vfl.ru/ii/1470026777/650fa0ad/13576192_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470026777/650fa0ad/13576192_m.png" alt="pic_01_new_doc" title="pic_01_new_doc" border="0" width=600></a>

Let's first define the perimeter and form of our house. We'll need drawing tools and use a "Rectangle Tool" to draw a rectangle. If the window with tools is not visible, click "Windows" in the main menu and choose "Tools". 

<a href="//images.vfl.ru/ii/1470032353/b76bc8a5/13576852_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470032353/b76bc8a5/13576852_m.png" alt="pic_02_open_tools_panel" title="pic_02_open_tools_panel" border="0" width=600></a>

<a href="//images.vfl.ru/ii/1470032505/72cc5c50/13576871_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470032505/72cc5c50/13576871_m.png" alt="pic_03_rectangle" title="pic_03_rectangle" border="0" width=600></a>

Now, we can "put" the walls and partitions inside, forming the rooms. We can use several tools: Line Segment or Arc Tool (they both are under the same pic of Line Segment Tool, to show other variations of Segment tools click the Line Segment Tool and hold the mouse button for a couple of seconds), Rectangle Tool and its variations, Pen Tool, and the Slice Tool might be quite useful for planning. Let's use Line Segments to draw the walls.

Note: to draw a straight line or curve at an angle, multiple of 45* or 90*, hold the Shift key on your keyboard while drawing.

<a href="//images.vfl.ru/ii/1470037570/2d0646f4/13577685_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470037570/2d0646f4/13577685_m.png" alt="pic_04_preplan" title="pic_04_preplan" border="0" width=600></a>

After the walls are drawn, we need to draw the doors and add some text. 

<a href="//images.vfl.ru/ii/1470044464/8e80bd55/13579067_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470044464/8e80bd55/13579067_m.png" alt="pic_05_preplan_with_doors_and_text" title="pic_05_preplan_with_doors_and_text" border="0" width=600></a>

You can notice that we've put no door in the Kitchen: this wall will help us to border the rooms, but in the final version there will be no partition between the hall and the kitchen.

Now, let's get rid of the extra elements like paths and parts of figures that we don't need anymore.

Adobe Illustrator has a panel of tools, which are very useful in some cases about shapes and figures. For example, in our situation, we need to get a complicated shape of the house perimeter: the main entrance is not on the same line as surrounding rooms, and the hall has got a full-height window in a shape of arc. We can subtract the small rectangle out of the big one that we have drawn at the beginning. Press "Windows" in the main menu and find the "Pathfinder" tool, or simply press Shift+Ctrl+F9.

<a href="//images.vfl.ru/ii/1470049436/ceea6d63/13580016_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470049436/ceea6d63/13580016_m.png" alt="pic_06_pathfinder" title="pic_06_pathfinder" border="0" width=600></a>

Select those two shapes that you need to subtract one from other, the first should be that one that should be subtracted. Hold the Shift key while selecting the shapes. Then choose the "Minus front" button from the Shape Modes on the Pathfinder tab.

<a href="//images.vfl.ru/ii/1470050377/1d9d8c05/13580120_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470050377/1d9d8c05/13580120_m.png" alt="pic_07_minus_front" title="pic_07_minus_front" border="0" width=600></a>

The picture below demonstrates the situation you may get into: the new shape comes to the front layer and covers almost everything. 

<a href="//images.vfl.ru/ii/1470050583/947debf9/13580150_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470050583/947debf9/13580150_m.png" alt="pic_08_after_minus_front" title="pic_08_after_minus_front" border="0" width=600></a>

Right-click on this shape and choose "Arrange" -> "Send to back".

<a href="//images.vfl.ru/ii/1470050715/8112d1f3/13580170_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470050715/8112d1f3/13580170_m.png" alt="pic_09_arrange_sent_to_back" title="pic_09_arrange_sent_to_back" border="0" width=600></a>

Now, all walls are visible again.


In the picture above, we've used the Line and Arc Tools. This picture is unfinished yet. Using all of the tools mentioned before, we created a basis for the working SVG-file. Now we need to work with grouping to have each room as a group, which will help to make the map interactive.



## Grouping

To make the image suitable for using in AnyChart Seat Maps, we need to group elements in a way we'd like to work with them. So, we need to outline each room as a separate rectangle of a path and group it with doors leading inward and outward and with the according text if there is any. 


We'll make them as a group of two figures laying one over another: first (lower) one with contour and the upper one is colored in the same color as the background. To fill figures with color we use the Fill Tool.

To group several elements, select all of them, right-click on them and select "Group".

<>pic N


## ID setting

Now we should give an ID for each group. These groups will later become the Map points.