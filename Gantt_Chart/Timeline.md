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


## Visualisation

Despite being quite different in usage and purposes, markers behave identically when it comes to coloring, positioning and shaping them. We use {api}**.fill()**{api} method to fill a rangeMarker with a color, {api}**.stroke()**{api} for stroking the markers, for text markers we use standard markers as well. 

We should format the objects transmitted to these methods as usual. 

Let's create a sample with adjusted marker colors and text using those methods menthioned above:

```
        // creating and coloring a line marker
        tl.lineMarker(0).value(Date.UTC(2007, 1, 29));
        tl.lineMarker(0).stroke('2 #FFE4C4');
        // creating and adjusting a text marker
        tl.textMarker(0).value(Date.UTC(2007, 1, 29));
        // changing the text setting
        tl.textMarker(0).text('Text Marker').fontSize(15).fontColor('blue').fontWeight('bold').fontOpacity(0.5);
        // creating and coloring a range marker
        tl.rangeMarker(0).from(Date.UTC(2007, 0, 20)).to(Date.UTC(2007, 0, 25));
        tl.rangeMarker(0).fill('#FFE4C4 0.5');
```
{sample}GANTT\_Timeline\_03{sample}

There are some methods inherent to the timeline only. You can see a table below with all timeline methods which can be used to change the color scheme of your Gantt diagram.

<table width="700" border="1" class="dtTABLE">
<tbody>
<tr>
<th width="50"><b>#</b></th>
<th width="130"><b>Part of the timeline</b></th>
<th width="130"><b>Method</b></th>
<th width="130"><b>What for</b></th>
</tr>
<tr>
<td rowspan="5">1</td>
<td rowspan="5">Whole timeline</td>
<td>{api:anychart.core.ui.Timeline#rowEvenFill}**.rowEvenFill()**{api}</td>
<td>Colors all even rows in the timeline</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#rowOddFill}**.rowOddFill()**{api}</td>
<td>Colors all odd rows in the timeline</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#rowHoverFill}**.rowHoverFill()**{api}</td>
<td>Colors all hovered rows in the timeline</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#rowSelectedFill}**.rowSelectedFill()**{api}</td>
<td>Colors all selected rows in the timeline</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#columnStroke}**.columnStroke()**{api}</td>
<td>Colors ticks of the timeline</td>
</tr>
<tr>
<td rowspan="3">2</td>
<td rowspan="3">Timeline baseline</td>
<td>{api:anychart.core.ui.Timeline#baselineAbove}**.baselineAbove()**{api}</td>
<td>Colors the baseline
</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#baselineFill}**.baselineFill()**{api}</td>
<td>Fills all timeline baselines with a defined color</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#baselineStroke}**.baselineStroke()**{api}</td>
<td>Strokes all timeline baselines with a defined color</td>
</tr>
<tr>
<td rowspan="2">3</td>
<td rowspan="2">Base coloring</td>
<td>{api:anychart.core.ui.Timeline#baseStroke}**.baseStroke()**{api}</td>
<td>Colors the stroke of the base elements</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#baseFill}**.baseFill()**{api}</td>
<td>Fills base elements with a defined color</td>
</tr>
<tr>
<td rowspan="2">4</td>
<td rowspan="2">Milestones</td>
<td>{api:anychart.core.ui.Timeline#milestoneFill}**.milestoneFill()**{api}</td>
<td>Sets the filling color of a milestone</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#milestoneStroke}**.milestoneStroke()**{api}</td>
<td>Sets the color for the milestone stroke</td>
</tr>
<tr>
<td rowspan="2">5</td>
<td rowspan="2">Parent Elements</td>
<td>{api:anychart.core.ui.Timeline#parentFill}**.parentFill()**{api}</td>
<td>Defines the filling for all parent elements in the timeline</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#parentStroke}**.parentStroke()**{api}</td>
<td>Defines the stroke for all parent elements in the timeline</td>
</tr>
<tr>
<td rowspan="2">6</td>
<td rowspan="2">Progress Bar</td>
<td>{api:anychart.core.ui.Timeline#progressFill}**.progressFill()**{api}</td>
<td>Sets the progress bar filling</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#progressStroke}**.progressStroke()**{api}</td>
<td>Sets the stroke for the progress bar</td>
</tr>
<tr>
<td rowspan="2">7</td>
<td rowspan="2">Connectors</td>
<td>{api:anychart.core.ui.Timeline#progressFill}**.connectorFill()**{api}</td>
<td>Sets the connectors fillings</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#progressStroke}**.connectorStroke()**{api}</td>
<td>Sets the stroke for the connectors</td>
</tr>
<tr>
<td rowspan="2">8</td>
<td rowspan="2">Periods</td>
<td>{api:anychart.core.ui.Timeline#selectedElementFill}**.selectedElementFill()**{api}</td>
<td>Sets the filling of all selected elements</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#selectedElementStroke}**.selectedElementStroke()**{api}</td>
<td>Sets the stroke of all selected elements</td>
</tr>
</tbody>
</table>

