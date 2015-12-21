#Timeline


* [Overview](#overview)
 * [Resource Gantt Chart](#resource_gantt_chart)
 * [Project Gantt Chart](#project_gantt_chart)
* [Markers](#markers)
 * [Special Features](#special_features)
* [Visualisation](#visualisation)

## Overview

Timeline is generally a part (usually the right one) of a Gantt diagram of both types. It shows processes durations (time periods), events with no duration (milestones) and connector between them, of which a whole task consists. Also there are a couple of decorative elements that help you to navigate through the timeline.
Timeline of a Project Chart is rather different from a timeline of a Resoure Gantt due to their different purpose. Later in this article we will look at both of them and consider that difference.

### Resource Gantt Chart
This illustration highlights almost all major resource timeline elements, and this tutorial will describe how each element is configured:

<img width="700" src ="http://static.anychart.com/images/resource_timeline.jpg" />

You can look up the [Resource Chart](Resource_Chart) article to know more about managing Gantt Charts of this type.


### Project Gantt Chart
This illustration highlights almost all major project timeline elements, and this tutorial will describe how each element is configured:

<img width="700" src ="http://static.anychart.com/images/project_timeline.jpg" />

You can look up the [Project Chart](Project_Chart) article to know more about managing Gantt Charts of this type.

Look at the samples or pictures of both Gantt diagram types. You can notice vertical borders on both types. These borders in the Data Grid part and the one that separates Data Grid and Timeline parts are splitters. They can be dragged: when you hover those splitters, you will how a mouse cursor will become of a typical kind for dragging. However, borders inside the Timetable are static, we cannot change its width.

## Markers

There are three marker types we've got in Gantt Charts:

* lineMarker - puts a vertical line at the defined date and marks this point
* textMarker - to mark a point on a Gantt diagram with a word
* rangeMarker - to highlight some parts of a Gantt Chart

Let's make a couple of samples with these markers.

First of all, let's create 2 line markers: one showing the current date and second one - the date when the ongoing process should become finished.

```
	// create linemarkers
	var tl = chart.getTimeline();
	tl.lineMarker(0).value(anychart.enums.GanttDateTimeMarkers.CURRENT);
	tl.lineMarker(1).value(now + 5*day);
```
{sample}GANTT\_Timeline\_01{sample}

As you see, we can define some parameters of each linemarker such as color, dashes or thickness using {api}**.stroke()**{api} method. Its usage is absolutely usual: parameters sent to this method should be formatted completely the same as for any ohter Line Chart {api}**.stroke()**{api} method.

Now, look at the sample with a textMarker showing the planned finish date and a rangeMarker showing the remaining time.

```
	// creating a text marker
	tl.textMarker(0).value(anychart.enums.GanttDateTimeMarkers.CURRENT);
	// creating a range marker
	tl.rangeMarker(0).from(Date.UTC(2016, 0, 1)).to(anychart.enums.GanttDateTimeMarkers.END);
	tl.rangeMarker(1).from(now - 7*day).to(anychart.enums.GanttDateTimeMarkers.CURRENT);
```
{sample}GANTT\_Timeline\_02{sample}


### Special Features

Due to unique organization of a Gantt diagram, there are some special features that should be mentioned.

* Any type of Gantt diagram will return "false" for {api}**.isHorizontal()**{api} method, because markers in Gantts can be only vertical.
* Methods {api}**.scale**{api} and {api}**.layout**{api} return links to the API reference and transmit message to the console with a warning telling that they are not able to work. The point is that these methods can have no other values but "dateTime" scale and "vertical" layout.
* There are three special values for setting to the text markers' {api}**.value()**{api} method: "start" and "end" to the range markers' {api}**.from()**{api} and {api}**.to()**{api}. The "value" returns the current date, "start" - the start date of the gantt chart timeline and "end" returns the end date of the whole Gantt diagram.
