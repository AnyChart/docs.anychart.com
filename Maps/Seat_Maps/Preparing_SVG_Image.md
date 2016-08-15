{:index 1}
Preparing SVG Image
===========

* [Overview](#overview)
* [Creating a picture](#creating_a_picture)
* [Grouping](#grouping)
* [Setting ID](#setting_id)
 * [Adobe Illustrator](#adobe_ilustrator)
 * [SVG-code](#svg_code)


## Overview

In this article you will find a process of creating an SVG-picture suitable for using in AnyChart Seat Maps. We have used Adobe Illustrator for drawing a picture, but it's possible to use any other SVG-supporting program.


## Creating a picture

We create a picture as a usual project in Illustrator, using its basic components and tools. Let's draw a simple house plan. For drawing, we'll need a "figures" tool and a "feather" for creating squares, circles, polygons and curves. 

Create the image file: "File" -> "New":

![[http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic01\_new\_doc.png|width=600]]


Let's first define the perimeter and form of our house. We'll need drawing tools and use a "Rectangle Tool" to draw a rectangle. If the window with tools is not visible, click "Windows" in the main menu and choose "Tools". 

[[http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic02\_open\_tools\_panel.png|width=600]]

![](http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic03_rectangle.png =400x600){: width=600px}

Now, we can draw the walls and partitions inside, forming the rooms. We can use several tools: Line Segment or Arc Tool (they both are under the same pic of Line Segment Tool, to show other variations of Segment tools click the Line Segment Tool and hold the mouse button for a couple of seconds), Rectangle Tool and its variations, Pen Tool, and the Slice Tool might be quite useful for planning. Let's use Line Segments to draw the walls.

Note: to draw a straight line or curve at an angle, multiple of 45* or 90*, hold the Shift key on your keyboard while drawing.

![](http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic04_preplan.png =400x600)

After the walls are drawn, we need to draw the doors. Let's mark them as two short lines on a wall.

![](http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic05_preplan_with_doors.png =400x600)

Now, let's get rid of the extra elements like paths and parts of figures that we don't need anymore.

Adobe Illustrator has a panel of tools, which are very useful in some cases about shapes and figures. For example, in our situation, we need to get a complicated shape of the house perimeter: the main entrance is not on the same line as surrounding rooms, and the hall has got a full-height window in a shape of arc. We can subtract the small rectangle out of the big one that we have drawn at the beginning. Press "Windows" in the main menu and find the "Pathfinder" tool, or simply press Shift+Ctrl+F9.

![](http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic06_pathfinder.png =400x600)


Select those two shapes that you need to subtract one from other: the first one to select should be that one that should be subtracted. Hold the Shift key while selecting the shapes. Then choose the "Minus front" button from the Shape Modes on the Pathfinder tab.

![](http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic07_minus_front.png =400x600)

The picture below demonstrates the situation you may get into: the new shape comes to the front layer and covers almost everything. 

![](http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic08_after_minus_front.png =400x600)

Right-click on this shape and choose "Arrange" -> "Send to back".

![](http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic09_arrange_sent_to_back.png =400x600)

Now, the layout of the house is visible again. Let's add some "furniture" into our plan.

![](http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic10_fixed_perimeter.png =400x600)

In the picture above, we've used the Rectangle, Line and Arc Tools. This picture is unfinished yet. Using all of the tools mentioned before, we created a basis for the working SVG-file. Now we need to work with grouping to have each room as a group, which will help to make the map interactive.


## Grouping

To make the image suitable for using in AnyChart Seat Maps, we need to group elements in a way we'd like to work with them. So, we need to outline each room as a separate path. 

To group several elements, select all of them, right-click and select "Group". Don't forget to join the paths if you used lines/arcs for drawing, otherwise you won't have any opportunity to fill the objects with color.

![](http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic11_group.png =400x600)

Do the same with the walls to form the rooms as groups. 

When each room is a separate group and all groups are ready for the further transformations, we can go to the next step - set the IDs.

## Setting ID

Now we should give an ID for each group. These groups will later become the Map points. 

There are two options: you can set the ID in Adobe Illustrator or through the code. 

### Adobe Illustrator

In the previous picture you can see a new window with Layers. To enable it, click on the "Windows" in the menu and choose "Layers".

After all room in your picture have become groups, the window with Layers will show the groups and their components.

![](http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic12_layers.png =400x600)


You can see that there are blue indicators in front of objects' names. They show the chosen (highlighted) element. Note that there is a group with no name and several paths inside. They represent our sofa. To give this group a name we need to click twice on the "<Group>" and enter the preferred name. Let it be "sofa".

![](http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic13_layers_sofa.png =400x600)


Now, let's do the same with the rooms.

![](http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic14_layers_rooms.png =400x600)


It's a good idea to group doors and furniture and put them inside the groups of those rooms they belong to. That's what the Layers window will show after the 

Save the picture in .SVG format. 

![](http://docs.anychart.stg/static/DVF-2340-Seat-Map/pic15_svg_image.png =400x600)


Another way to set the names for groups is to do it through the SVG-code of the file.

### SVG-code

Open this file in any editor that supports svg-files. Look through the code. All "g" tags mean "groups" - those groups that we've created in the picture before. Add the "id" field to each group you need to be highlighted (rooms in our case). Remember that id's have to be unique.

```
<g id="kitсhen">
	<polygon fill="#DDD1B3" stroke="#000000" stroke-miterlimit="10" points="252.5,535 252.5,406 252,405.5 322,405.5 322.5,405 
		322.5,266 323,265.5 112,265.5 111.5,266 111.5,536 111,535.5 251,535.5"/>
	<text transform="matrix(1 0 0 1 142.2422 345.1572)"><tspan x="0" y="0" fill="#996633" font-family="'ArialMT'" font-size="15.9953">Kitchen &amp; Dining room</tspan><tspan x="31.264" y="19.194" fill="#996633" font-family="'ArialMT'" font-size="15.9953">13&apos; 0&quot; x 16&apos; 0&quot;</tspan></text>
</g>
```

Inline groups might have its own id's due to some reasons. Elements inside of the groups might have classes; set classes to each element you need to react on hovering or selecting. All elements that belong to the same class will have the same interactive settings, so be careful with setting them. We've set the classes to the texts.

```
<text class="info" transform="matrix(1 0 0 1 172.5244 131.3237)"><tspan x="0" y="0" fill="#996633" font-family="'ArialMT'" font-size="16.6934">Room 1</tspan><tspan x="-21.189" y="20.032" fill="#996633" font-family="'ArialMT'" font-size="16.6934">11&apos; 0&quot; x 13&apos; 0&quot;</tspan></text>
```

If there are lines demonstrating some extra elements you don't need anymore, find these lines in the code of the svg-image and simply delete them. This will simplify your work with the file.

Now, our SVG-image is ready for the further work and transformations. For the further info & tutorial, open the [Seat Map](Seat_Map) article.

If you want to explore the SVG-file we've used in this article, you can <a href="http://static.anychart.com/images/docs/house.svg">download it</a>.