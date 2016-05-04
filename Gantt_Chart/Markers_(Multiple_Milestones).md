#Markers (Multiple Milestones)

* [Overview](#overview)
* [Adding markers](#adding_markers)
* [Tuning appearance](#tuning_appearance)

##Overview

Markers feature allows you to add Milestone-like elements to your [Project](Project_Chart) or [Resource](Resource_Chart) Charts. Markers should not be confused with milestones, which are [elements in Project charts with only one date](Project_Chart#tasks_types).

Markers are a set of visual elements of marker type which can be attached to any task or resource and placed on the timeline on given dates.

##Adding markers

To add markers you need to attach an array of markers to a data item, in a Resource chart to a resource:

```
  // defining markers for a resource in resource chart
  data = [{
    'id': 0,
    'project_number': 675023,
    'name': 'Oceanic Airlines Navigation System',
    'periods': [{'id': 200, 'start': Date.UTC(2005, 1, 1), 'end': Date.UTC(2007, 1, 1)}],
    'markers': [
      {'value': Date.UTC(2005, 2, 1), 'type': "diagonalCross", 'fill': "#0288d1 0.7", 'stroke': 'none'},
      {'value': Date.UTC(2005, 3, 1), 'type': "star4", 'fill': "#0d47a1 0.7", 'stroke': 'none'}
    ]
  }];
```

Which works like this:

{sample :width 690 :height 180}GANTT\_Multiple\_Milestones\_01{sample}

In a Project chart you add markers to a task:

```
  // defining markers for a resource in resource chart
  data = [{
    'id': 0,
    'project_number': 675023,
    'name': 'Oceanic Airlines Navigation System',
    'periods': [{'id': 200, 'start': Date.UTC(2005, 1, 1), 'end': Date.UTC(2007, 1, 1)}],
    'markers': [
      {'value': Date.UTC(2005, 2, 1), 'type': "diagonalCross", 'fill': "#0288d1 0.7", 'stroke': 'none'},
      {'value': Date.UTC(2005, 3, 1), 'type': "star4", 'fill': "#0d47a1 0.7", 'stroke': 'none'}
    ]
  }];
```

Which looks like this:

{sample :width 690 :height 180}GANTT\_Multiple\_Milestones\_02{sample}

##Tuning appearance

The marker's appearance Markers can be tuned using several properties of the marker's object. The {api:anychart.enums.MarkerType}type{api} property defines the shape of the marker. The inner color of a marker can be set using {api:anychart.graphics.vector.Fill}color{api} property and a border of a marker is controlled by {api:anychart.ui.MarkersFactory#stroke}stroke{api} property.

```
// chart type
chart = anychart.ganttProject();
```

text

{sample :width 690 :height 180}GANTT\_Multiple\_Milestones\_03{sample}
