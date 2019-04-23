{:index 12}
# Custom Drawing

## Overview

The GraphicsJS library allows replacing the default shapes of timeline [elements](Elements) with custom drawings.

To learn more, see:

* [Graphics](../Graphics) – GraphicsJS documentation
* [Basic Charts: Custom_Drawing](../Basic_Charts/Custom_Drawing) – basic samples
* [AnyGantt Gallery: Custom Drawing](https://www.anychart.com/products/anygantt/gallery/Gantt_General_Features/Custom_Drawing.php) – an advanced sample

## Project Chart

This section explains how to modify the shape of elements on a [Project Chart](Project_Chart).

You can access a particular element type available for the Project chart or all elements at once, as shown in the following articles:

* [Elements: Project Chart](Elements/Project_Chart)
* [Elements: All Elements](Elements/All_Elements)

Then call the **rendering()** method of the element type – for example, the {api:anychart.core.gantt.elements.TasksElement#rendering}rendering(){api} method of [tasks](Elements/Project_Chart#regular_tasks).

Combine it with methods of the {api:anychart.core.gantt.rendering.Settings}anychart.core.gantt.rendering.Settings{api} class:

* {api:anychart.core.gantt.rendering.Settings#drawer}drawer(){api} – to create custom drawings
* {api:anychart.core.gantt.rendering.Settings#shapes}shapes(){api} – to create custom shapes

In the sample below, the {api:anychart.core.gantt.rendering.Settings#drawer}drawer(){api} method is used to draw custom tasks and baselines:

{sample :height 360}GANTT\_NEW\_Custom\_Drawing\_01{sample}

```
// a function for drawing custom elements
var drawingFunction = function () {

  // get the shapes of the element
  var shapes = this["shapes"];
  // get the shape to be modified
  var path = shapes["path"];
  // get the bounds of the element
  var bounds = this["predictedBounds"];

  var h = bounds.height;
  var t = bounds.top;
  var l = bounds.left;
  var r = bounds.left + bounds.width;
  var h1 = bounds.top + bounds.height;    
  var h4 = h / 4;
  var h2 = h / 2;

  // draw a rounded rectangle
  path.moveTo(l + h4, h1 - h4)
  path.arcTo(h4, h4, -270, 180)
  path.lineTo(r - h4, t + h4)
  path.arcTo(h4, h4, -90, 180)
  path.lineTo(l + h2, h1 - h4)
  path.close(); 

}
```

```
// set the row and header height
chart.defaultRowHeight(35);
chart.headerHeight(105);

// set the height of timeline elements
chart.getTimeline().elements().height(20);

// access tasks and baselines
var tasks = chart.getTimeline().tasks();
var baselines = chart.getTimeline().baselines();

// draw custom tasks and baselines
tasks.rendering().drawer(drawingFunction);
baselines.rendering().drawer(drawingFunction);
```

## Resource Chart

* {api:anychart.core.gantt.rendering.Settings}anychart.core.gantt.rendering.Settings{api}
* periods: {api:anychart.core.gantt.elements.PeriodsElement#rendering}rendering(){api}
* {api:anychart.core.gantt.rendering.Settings#drawer}drawer(){api}
* {api:anychart.core.gantt.rendering.Settings#shapes}shapes(){api}

misc:

* [Resource Chart](Resource_Chart)
* [Elements: Resource Chart](Elements/Resource_Chart)


{sample :height 250}GANTT\_NEW\_Custom\_Drawing\_02{sample}

```
// a function for drawing custom elements
var drawingFunction = function () {

  // get the shapes of the element
  var shapes = this["shapes"];
  // get the shape to be modified
  var path = shapes["path"];
  // get the bounds of the element
  var bounds = this["predictedBounds"];

  var h = bounds.height;
  var t = bounds.top;
  var l = bounds.left;
  var r = bounds.left + bounds.width;
  var h1 = bounds.top + bounds.height;    
  var h4 = h / 4;
  var h2 = h / 2;

  // draw a rounded rectangle
  path.moveTo(l + h4, h1 - h4)
  path.arcTo(h4, h4, -270, 180)
  path.lineTo(r - h4, t + h4)
  path.arcTo(h4, h4, -90, 180)
  path.lineTo(l + h2, h1 - h4)
  path.close(); 

}
```

```
// set the row and header height
chart.defaultRowHeight(35);
chart.headerHeight(105);

// access periods
var periods = chart.getTimeline().periods();

// set the height of periods
periods.height(40);

// draw custom periods
periods.rendering().drawer(drawingFunction);
```