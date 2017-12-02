# Timeline

## Overview

Timeline is generally a part (usually the right one) of a Gantt diagram of both types. It shows processes durations (time periods), events with no duration (milestones) and connector between them, of which a whole task consists. Also there are a couple of elements that help you to navigate through the timeline.
Timeline of a Project Chart is rather different from a timeline of a Resoure Gantt due to their different purpose. Later in this article we will look at both of them and consider that difference.

### Resource Gantt Chart
This illustration highlights almost all major resource timeline elements, and this tutorial will describe how each element is configured:

<img width="700" src ="https://static.anychart.com/images/resource_timeline.jpg" />

You can look up the [Resource Chart](Resource_Chart) article to know more about managing Gantt Charts of this type.

### Project Gantt Chart
This illustration highlights almost all major project timeline elements, and this tutorial will describe how each element is configured:

<img width="700" src ="https://static.anychart.com/images/project_timeline.jpg" />

You can look up the [Project Chart](Project_Chart) article to know more about managing Gantt Charts of this type.

Look at the samples or pictures of both Gantt diagram types. You can notice vertical borders on both types. These borders in the Data Grid part and the one that separates Data Grid and Timeline parts are splitters. They can be dragged: when you hover those splitters, you will how a mouse cursor will become of a typical kind for dragging.

## Markers

There are three marker types we've got in Gantt Charts:

* lineMarker - puts a vertical line at the defined date and marks this point
* textMarker - to mark a point on a Gantt diagram with a text label
* rangeMarker - to highlight some parts of a Gantt Chart

Let's make a couple of samples with these markers.

First of all, let's create 2 line markers: one showing the current date and second one - the date when the ongoing process should become finished.

```
// create linemarkers
var tl = chart.getTimeline();
tl.lineMarker(0).value("current");
tl.lineMarker(1).value(now + 5*day);
```

{sample :width 825 :height 230 }GANTT\_Timeline\_01{sample}

As you see, we can define some parameters of each linemarker such as color, dashes or thickness using {api:anychart.core.axisMarkers.Line#stroke}stroke(){api} method.
It is used absolutely the same way as any other line settings with the
{api:anychart.core.axisMarkers.Line#stroke}stroke(){api} method.

Now, look at the sample with a textMarker showing the planned finish date and a rangeMarker showing the remaining time.

```
// creating a text marker
tl.textMarker(0).value("current");
// creating range markers
tl.rangeMarker(0).from(Date.UTC(2016, 0, 1)).to("end");
tl.rangeMarker(1).from(now - 7*day).to("current");
```

{sample :width 825 :height 300 }GANTT\_Timeline\_02{sample}

You might have noticed, that we used values of enumerated type in those samples above as a point in time. There is a list of enums that we can use to place the markers. Let's look at them.

### Enums

The following strings can be used to make timeline configuration easier:

<table class="dtTABLE">
<tbody>
<tr>
<th><b>String value</b></th>
<th><b>Value returned</b></th>
</tr>
<tr>
<td>"start"</td>
<td>The first time point in the Gantt diagram timeline.</td>
</tr>
<tr>
<td>"current"</td>
<td>The current time point in the Gantt diagram timeline.</td>
</tr>
<tr>
<td>"end"</td>
<td>The last time point in the Gantt diagram timeline.</td>
</tr>
</tbody>
</table>

### Special Features

There are three special values for setting to the text markers' {api:anychart.core.axisMarkers.GanttText#value}value(){api} method: `"start"` and `"end"` to the range markers' {api:anychart.core.axisMarkers.GanttRange#from}from(){api} and {api:anychart.core.axisMarkers.GanttRange#to}to(){api}. The `value` returns the current date, `start` - the start date of the gantt chart timeline and `end` return the end date of the whole Gantt diagram.

## Visualisation

Despite being quite different in usage and purposes, markers behave identically when it comes to coloring, positioning and shaping them. We use {api:anychart.core.axisMarkers.GanttRange#fill}fill(){api} method to color a range markers, {api:anychart.core.axisMarkers.GanttLine#stroke}stroke(){api} to color the line markers; for text markers we use standard markers as well. 

We should format the objects passed to these methods as usual. 

Let's create a sample with adjusted marker colors and text using those methods mentioned above:

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
{sample :width 825 :height 300 }GANTT\_Timeline\_03{sample}

There are some methods inherent to the timeline only. You can see a table below with all timeline methods which can be used to change the color scheme of your Gantt diagram.

<table width="700" class="dtTABLE">
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
<td>{api:anychart.core.ui.Timeline#rowEvenFill}rowEvenFill(){api}</td>
<td>Colors even rows in the timeline</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#rowOddFill}rowOddFill(){api}</td>
<td>Colors odd rows in the timeline</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#rowHoverFill}rowHoverFill(){api}</td>
<td>Colors hovered rows in the timeline</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#rowSelectedFill}rowSelectedFill(){api}</td>
<td>Colors selected rows in the timeline</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#columnStroke}columnStroke(){api}</td>
<td>Colors ticks of the timeline</td>
</tr>
<tr>
<td rowspan="3">2</td>
<td rowspan="3">Timeline baseline</td>
<td>{api:anychart.core.ui.Timeline#baselineAbove}baselineAbove(){api}</td>
<td>Colors the baseline
</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#baselineFill}baselineFill(){api}</td>
<td>Fills timeline baselines with a defined color</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#baselineStroke}baselineStroke(){api}</td>
<td>Strokes timeline baselines with a defined color</td>
</tr>
<tr>
<td rowspan="2">3</td>
<td rowspan="2">Base coloring</td>
<td>{api:anychart.core.ui.Timeline#baseStroke}baseStroke(){api}</td>
<td>Colors the stroke of the base elements</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#baseFill}baseFill(){api}</td>
<td>Fills base elements with a defined color</td>
</tr>
<tr>
<td rowspan="2">4</td>
<td rowspan="2">Milestones</td>
<td>{api:anychart.core.ui.Timeline#milestoneFill}milestoneFill(){api}</td>
<td>Sets the filling color of a milestone</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#milestoneStroke}milestoneStroke(){api}</td>
<td>Sets the color for the milestone stroke</td>
</tr>
<tr>
<td rowspan="2">5</td>
<td rowspan="2">Parent Elements</td>
<td>{api:anychart.core.ui.Timeline#parentFill}parentFill(){api}</td>
<td>Defines the filling for parent elements in the timeline</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#parentStroke}parentStroke(){api}</td>
<td>Defines the stroke for parent elements in the timeline</td>
</tr>
<tr>
<td rowspan="2">6</td>
<td rowspan="2">Progress Bar</td>
<td>{api:anychart.core.ui.Timeline#progressFill}progressFill(){api}</td>
<td>Sets the progress bar filling</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#progressStroke}progressStroke(){api}</td>
<td>Sets the stroke for the progress bar</td>
</tr>
<tr>
<td rowspan="2">7</td>
<td rowspan="2">Connectors</td>
<td>{api:anychart.core.ui.Timeline#progressFill}connectorFill(){api}</td>
<td>Sets the connectors fillings</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#progressStroke}connectorStroke(){api}</td>
<td>Sets the stroke for the connectors</td>
</tr>
<tr>
<td rowspan="2">8</td>
<td rowspan="2">Periods</td>
<td>{api:anychart.core.ui.Timeline#selectedElementFill}selectedElementFill(){api}</td>
<td>Sets the filling of the selected elements</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#selectedElementStroke}selectedElementStroke(){api}</td>
<td>Sets the stroke of the selected elements</td>
</tr>
</tbody>
</table>

There are two ways of defining colors and other visualization parameters: through those methods as usual or through the data while setting it. Using dataset to define some visualization settings gives you more flexibility as you can affect each data point separately, while methods act on all elements of each type together; also, we can affect only data points when we use the dataset. Let's try to create a couple of samples using both these ways.

Below you can find a sample of a Resource Gantt Chart where we set the rows' colors using {api:anychart.core.ui.Timeline#rowEvenFill}rowEvenFill(){api}, {api:anychart.core.ui.Timeline#rowOddFill}rowOddFill(){api}, {api:anychart.core.ui.Timeline#rowHoverFill}rowHoverFill(){api}, {api:anychart.core.ui.Timeline#rowSelectedFill}rowSelectedFill(){api} methods, the selected elements' colors using {api:anychart.core.ui.Timeline#selectedElementFill}selectedElementFill(){api} and {api:anychart.core.ui.Timeline#selectedElementStroke}selectedElementStroke(){api} and change some data points' colors through the dataset.

```
// set colors to the rows in the timeline section
tl.rowEvenFill("#FFF3E0 0.5");
tl.rowOddFill("#E0F7FA 0.5");
tl.rowHoverFill("#eee");
tl.rowSelectedFill("#FFAB91");

// set colors for selected elements
tl.selectedElementFill("#FFAB00");
tl.selectedElementStroke("#B8AA96");

function getData() {
    return [
    {
    "id": "1",
    "name": "Alex Exler",
    "periods": [
    {"id": "1_1", "start": now - 10*day, "end": now + 4*day, "stroke": "#B8AA96", "fill": {"angle": 90, "keys": [{"color": "#CFC0A9", "position": 0}, {"color": "#E6D5BC", "position": 0.38}, {"color": "#E8D9C3", "position": 1}]}},
    {"id": "1_2", "start": now + 20*day, "end": now + 28*day, "stroke": "#B8AA96", "fill": {"angle": 90, "keys": [{"color": "#CFC0A9", "position": 0}, {"color": #E6D5BC", "position": 0.38}, {"color": "#E8D9C3", "position": 1}]}}]
}
```

{sample :width 825 :height 230 }GANTT\_Timeline\_04{sample}

Now, let's look at the Project Gantt Chart with parameters adjusted the same way. Here we made the milestones using {api:anychart.core.ui.Timeline#milestoneFill}milestoneFill(){api}, {api:anychart.core.ui.Timeline#milestoneStroke}milestoneStroke(){api} and connnectors (with {api:anychart.core.ui.Timeline#progressFill}connectorFill(){api} and {api:anychart.core.ui.Timeline#progressStroke}connectorStroke(){api} methods) of the custom colors, as well as some of the data points, using the dataset.

```
// set colors for milestones
tl.milestoneFill("#4A148C");
tl.milestoneStroke("#1A237E");

// set colors for the connectors
tl.connectorFill("#0D47A1");
tl.connectorStroke("#90CAF9");

function getData() {
    var now = (new Date()).getTime();
    var sec = 1000;
    var min = 60 * sec;
    var hour = 60 * min;
    var day = 24 * hour;
    return [
    {
        "id": "8",
        "name": "Interview owners of similar businesses",
        parent: "6",
        "progressValue": "60%",
        "actualStart": (now + 5 * day),
        "actualEnd": (now + 15 * day),
        "connectTo": "9",
        "actual": {
            "fill": "red"
        },
        "progress": {
            "fill": {
                "color": "black",
                "opacity": 0.3
            }  
        },
        "connectorType": "finish-start"
    }}
```

{sample :width 825 :height 300 }GANTT\_Timeline\_05{sample}