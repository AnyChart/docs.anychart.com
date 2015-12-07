#Timeline


* [Overview](#overview)
* [Resource Gantt Chart](#resource_gantt_chart)
* [Project Gantt Chart](#project_gantt_chart)
* [Markers](#markers)
 * [Special Features](#special_features)
* [Visualisation](#visualisation)
 * [Hover](#altering_hover)
 * [Select](#altering_select)

## Overview

Timeline is generally a part (usually the right one) of a Gantt diagram of both types. It shows processes durations (time periods), events with no duration (milestones) and connector between them, of which a whole task consists. Also there are a couple of decorative elements that help you to navigate through the timeline.
Timeline of a Project Chart is rather different from a timeline of a Resoure Gantt due to their different purpose. Later in this article we will look at both of them and consider that difference.

## Resource Gantt Chart
This illustration highlights almost all major resource timeline elements, and this tutorial will describe how each element is configured:

/картинка/



## Project Gantt Chart
This illustration highlights almost all major resource timeline elements, and this tutorial will describe how each element is configured:

/картинка/


## Markers

There are three marker types we've got in Gantt Charts:

* lineMarker - puts a vertical line at the defined date and marks this poo
* textMarker - to mark a point on a Gantt diagram with a word
* rangeMarker - to highlight some parts of a Gantt Chart

We can

### Special Features

Due to unique organization of a Gantt diagram, there are some special features that should be mentioned.

* Any type of Gantt diagram will return "false" for {api}**.isHorizontal()**{api} method, because markers in Gantts can be only vertical.
* Methods {api}**.scale**{api} and {api}**.layout**{api} return links to the API reference and transmit message to the console with a warning telling that they are not able to work. The point is that these methods can have no other values but "dateTime" scale and "vertical" layout.
* There are three special values for setting to the text markers' {api}**.value()**{api} method: "start" and "end" to the range markers' {api}**.from()**{api} and {api}**.to()**{api}. The "value" returns the current date, "start" - the start date of the gantt chart timeline and "end" returns the end date of the whole Gantt diagram.

## Visualisation

Despite being quite different in usage and purposes, 

### Hover
### Select