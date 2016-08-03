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

<a href="//images.vfl.ru/ii/1470026777/650fa0ad/13576192\_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470026777/650fa0ad/13576192\_m.png" alt="pic\_01\_new\_doc" title="pic\_01\_new\_doc" border="0" width=828></a>

Let's first define the perimeter and form of our house. We'll need drawing tools and use a "Rectangle Tool" to draw a rectangle. If the window with tools is not visible, click "Windows" in the main menu and choose "Tools". 

<a href="//images.vfl.ru/ii/1470032353/b76bc8a5/13576852\_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470032353/b76bc8a5/13576852\_m.png" alt="pic\_02\_open\_tools\_panel" title="pic\_02\_open\_tools\_panel" border="0" width=828></a>

<a href="//images.vfl.ru/ii/1470032505/72cc5c50/13576871\_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470032505/72cc5c50/13576871\_m.png" alt="pic\_03\_rectangle" title="pic\_03\_rectangle" border="0" width=828></a>

Now, we can "put" the walls and partitions inside, forming the rooms. We can use several tools: Line Segment or Arc Tool (they both are under the same pic of Line Segment Tool, to show other variations of Segment tools click the Line Segment Tool and hold the mouse button for a couple of seconds), Rectangle Tool and its variations, Pen Tool, and the Slice Tool might be quite useful for planning. Let's use Line Segments to draw the walls.

Note: to draw a straight line or curve at an angle, multiple of 45* or 90*, hold the Shift key on your keyboard while drawing.

<a href="//images.vfl.ru/ii/1470037570/2d0646f4/13577685\_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470037570/2d0646f4/13577685\_m.png" alt="pic\_04\_preplan" title="pic\_04\_preplan" border="0" width=828></a>

After the walls are drawn, we need to draw the doors and add some text. 

<a href="//images.vfl.ru/ii/1470203928/29af4585/13601584\_m.png"><img src="//images.vfl.ru/ii/1470203928/29af4585/13601584\_m.png" alt="pic05\_preplan\_with\_doors" title="pic05\_preplan\_with\_doors" border="0"></a>

You can notice that we've put no door in the Kitchen: this wall will help us to border the rooms, but in the final version there will be no partition between the hall and the kitchen.

Now, let's get rid of the extra elements like paths and parts of figures that we don't need anymore.

Adobe Illustrator has a panel of tools, which are very useful in some cases about shapes and figures. For example, in our situation, we need to get a complicated shape of the house perimeter: the main entrance is not on the same line as surrounding rooms, and the hall has got a full-height window in a shape of arc. We can subtract the small rectangle out of the big one that we have drawn at the beginning. Press "Windows" in the main menu and find the "Pathfinder" tool, or simply press Shift+Ctrl+F9.

<a href="//images.vfl.ru/ii/1470049436/ceea6d63/13580016\_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470049436/ceea6d63/13580016\_m.png" alt="pic\_06\_pathfinder" title="pic\_06\_pathfinder" border="0" width=828></a>

Select those two shapes that you need to subtract one from other, the first should be that one that should be subtracted. Hold the Shift key while selecting the shapes. Then choose the "Minus front" button from the Shape Modes on the Pathfinder tab.

<a href="//images.vfl.ru/ii/1470050377/1d9d8c05/13580120_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470050377/1d9d8c05/13580120\_m.png" alt="pic\_07\_minus\_front" title="pic\_07\_minus\_front" border="0" width=828></a>

The picture below demonstrates the situation you may get into: the new shape comes to the front layer and covers almost everything. 

<a href="//images.vfl.ru/ii/1470050583/947debf9/13580150_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470050583/947debf9/13580150\_m.png" alt="pic\_08\_after\_minus\_front" title="pic\_08\_after\_minus\_front" border="0" width=828></a>

Right-click on this shape and choose "Arrange" -> "Send to back".

<a href="//images.vfl.ru/ii/1470050715/8112d1f3/13580170_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470050715/8112d1f3/13580170\_m.png" alt="pic\_09\_arrange\_sent\_to\_back" title="pic\_09\_arrange\_sent\_to\_back" border="0" width=828></a>

Now, all walls are visible again. 

<a href="//images.vfl.ru/ii/1470113522/102dc886/13587624\_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470113522/102dc886/13587624\_m.png" alt="pic10\_fixed\_perimeter" title="pic10\_fixed\_perimeter" border="0" width=828></a>


In the picture above, we've used the Rectangle, Line and Arc Tools. This picture is unfinished yet. Using all of the tools mentioned before, we created a basis for the working SVG-file. Now we need to work with grouping to have each room as a group, which will help to make the map interactive.


## Grouping

To make the image suitable for using in AnyChart Seat Maps, we need to group elements in a way we'd like to work with them. So, we need to outline each room as a separate path and group it with doors leading inward and outward and with the according text if there is any. 

Let's first pay some attention on our doors. It's not typical when the part of the "wall" under the "door" is visible. So, let's create a shape out of each door by adding a line and join paths to make a shape:

<a href="//images.vfl.ru/ii/1470127304/61f559a9/13590050\_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470127304/61f559a9/13590050\_m.png" alt="pic11\_join" title="pic11\_join" border="0" width=828></a>

We'll make them as a group of two figures laying one over another: first (lower) one with contour and the upper one is colored in the same color as the background. Double this shape, fill and stroke it with white and move a litle bit. To fill the forms with color we use the Fill Tool. Group both shapes: select them, then select "Group" from the right-click menu.

<a href="//images.vfl.ru/ii/1470127766/1a2228f1/13590176\_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470127766/1a2228f1/13590176\_m.png" alt="pic12\_group" title="pic12\_group" border="0" width=828></a>

To group several elements, select all of them, right-click on them and select "Group". Don't forget to join the paths if you used lines/arcs for drawing, unless you won't have any opportunity to fill the rooms with color.

<a href="//images.vfl.ru/ii/1470127156/f59e2409/13590006\_m.png" target="_blank"><img src="//images.vfl.ru/ii/1470127156/f59e2409/13590006\_m.png" alt="pic13\_group\_room" title="pic13\_group\_room" border="0" width=828></a>

When each room is a separate group and all groups are ready for the further transformations, we can go to the next step - set the IDs.

## ID setting

Now we should give an ID for each group. These groups will later become the Map points.

Save the picture in .SVG format. 

<a href="//images.vfl.ru/ii/1470135989/e84f6bbf/13591866\_m.png"><img src="//images.vfl.ru/ii/1470135989/e84f6bbf/13591866\_m.png" alt="pic15\_svg\_image" title="pic15\_svg\_image" border="0"></a>

Open this file in any editor that supports svg-files. Look through the code. All "g" tags mean "groups" - those groups that we've created in the picture before. Add the "id" field to each group you need to be highlighted (rooms in our case). Remember that id's have to be unique.

```
<g id="kithcen">
	<polygon fill="#DDD1B3" stroke="#000000" stroke-miterlimit="10" points="252.5,535 252.5,406 252,405.5 322,405.5 322.5,405 
		322.5,266 323,265.5 112,265.5 111.5,266 111.5,536 111,535.5 251,535.5 	"/>
	<text transform="matrix(1 0 0 1 142.2422 345.1572)"><tspan x="0" y="0" fill="#996633" font-family="'ArialMT'" font-size="15.9953">Kitchen &amp; Dining room</tspan><tspan x="31.264" y="19.194" fill="#996633" font-family="'ArialMT'" font-size="15.9953">13&apos; 0&quot; x 16&apos; 0&quot;</tspan></text>
</g>
```

Inline groups might have its own id's due to some reasons. Elements inside of the groups might have classes; set classes to each element you need to react on hovering or selecting. All elements that belong to the same class will have the same interactive settings, so be careful with setting them. We've set the classes to the texts.

```
<text class="info" transform="matrix(1 0 0 1 172.5244 131.3237)"><tspan x="0" y="0" fill="#996633" font-family="'ArialMT'" font-size="16.6934">Room 1</tspan><tspan x="-21.189" y="20.032" fill="#996633" font-family="'ArialMT'" font-size="16.6934">11&apos; 0&quot; x 13&apos; 0&quot;</tspan></text>
```

If there are lines demonstrating some extra elements you don't need anymore, find these lines in the code of the svg-image and simply delete them. This will simplify your work with the file.

Now, our SVG-image is ready for the further work and transformations. For the further info & tutorial, open the [Seat Map](Seat_Map) article.

