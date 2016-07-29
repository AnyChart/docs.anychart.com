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

Let's first define the perimeter and form of our house. We'll use a "figure" tool and draw a rectangle.

<>pic 1

Now, we can "put" the walls and partitions inside, forming the rooms.

blabla

<>pic M



Using all of the tools mentioned before, we drew a basis for the working SVG-file.



## Grouping

To make the image suitable for using in AnyChart Seat Maps, we need to group elements in a way we'd like to work with them. So, we need to outline each room as a separate rectangle of a path and group it with doors leading inward and outward and with the according text if there is any. 


To group several elements, select all of them, right-click on them and select "Group".

<>pic N


## ID setting

Now we should give an ID for each group. These groups will later become the Map points.