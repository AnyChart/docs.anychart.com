{:index 12}
# Custom Drawing

## Overview

misc:

* [Graphics](../Graphics)
* [Basic Charts: Custom_Drawing](../Basic_Charts/Custom_Drawing) (примеры как это работает)
* [AnyGantt Gallery: Custom Drawing](https://www.anychart.com/products/anygantt/gallery/Gantt_General_Features/Custom_Drawing.php) (an advanced sample)

## Project Chart

methods:

* {api:anychart.core.gantt.rendering.Settings}anychart.core.gantt.rendering.Settings{api}
* **rendering()** – for example, tasks: {api:anychart.core.gantt.elements.TasksElement#rendering}rendering(){api}
* {api:anychart.core.gantt.rendering.Settings#drawer}drawer(){api}
* {api:anychart.core.gantt.rendering.Settings#shapes}shapes(){api}

misc:

* [Project Chart](Project_Chart)
* [Elements: Project Chart](Elements/Project_Chart)
* [Elements: All Elements](Elements/All_Elements)


{sample :height 360}GANTT\_NEW\_Custom\_Drawing\_01{sample}

```
// set the row and header height
chart.defaultRowHeight(35);
chart.headerHeight(105);

// set the height of timeline elements
chart.getTimeline().elements().height(20);

// access tasks and baselines
var tasks = chart.getTimeline().tasks();
var baselines = chart.getTimeline().baselines();

// disable the default stroke of tasks and baselines
tasks.stroke(null);
baselines.stroke(null);

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


{sample :height 220}GANTT\_NEW\_Custom\_Drawing\_02{sample}

```

```