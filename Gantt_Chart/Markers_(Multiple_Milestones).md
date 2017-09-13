# Markers (Multiple Milestones)

## Overview

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
    {'value': Date.UTC(2005, 2, 1), 'type': "diagonalCross"},
    {'value': Date.UTC(2005, 3, 1)}
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
  'name': 'Phase 1 - Strategic Plan',
  'periods': [{"id": "1_1", "start": Date.UTC(2007, 1, 13), "end": Date.UTC(2007, 2, 1)}],
  'markers': [
    {'value': Date.UTC(2007, 1, 14), 'type': "diagonalCross"},
    {'value': Date.UTC(2007, 1, 20)}
  ]
}];
```

Which looks like this:

{sample :width 690 :height 180}GANTT\_Multiple\_Milestones\_02{sample}

**Note**: the only mandatory property for a marker is **value**. Other properties can be omitted.

##Tuning appearance

The marker's appearance Markers can be tuned using several properties of the marker's object. The {api:anychart.enums.MarkerType}type{api} property defines the shape of the marker. The inner color of a marker can be set using {api:anychart.core.ui.MarkersFactory.Marker#fill}fill{api} property and a border of a marker is controlled by {api:anychart.core.ui.MarkersFactory.Marker#stroke}stroke{api} property.

```
// defining markers for a resource in resource chart
data = [{
  'id': 0,
  'project_number': 675023,
  'name': 'Phase 1 - Strategic Plan',
  'periods': [{"id": "1_1", "start": Date.UTC(2007, 1, 13), "end": Date.UTC(2007, 2, 1)}],
  'markers': [
    {'value': Date.UTC(2007, 1, 14), 'type': "diagonalCross", 'fill': "#CF3E3E 0.7", 'stroke': 'none'},
    {'value': Date.UTC(2007, 1, 20), 'type': "star4", 'fill': "gold", 'stroke': 'darkorange'}
  ]
}];
```
The string value of the **fill** and the **stroke** is a simplified way of defining these properties. The advanced settings can be applied using object value. The {api:anychart.graphics.vector.Fill}fill{api} property may be used to set {api:anychart.graphics.vector.SolidFill}solid color{api}, {api:anychart.graphics.vector.LinearGradientFill}liner gradient color{api} and {api:anychart.graphics.vector.RadialGradientFill}radial gradient color{api}. The {api:anychart.graphics.vector.Stroke}stroke{api} property can be used to define {api:anychart.graphics.vector.SolidStroke}solid border{api}, {api:anychart.graphics.vector.LinearGradientStroke}liner gradient border{api} and {api:anychart.graphics.vector.RadialGradientStroke}radial gradient border{api}.

```
{
  "id": "4",
  "name": "Identify available skills, information and support",
  "periods": [
    {"id": "4_1", "start": Date.UTC(2007, 3, 15), "end": Date.UTC(2007, 4, 1)}],
  'markers': [
    {'value': Date.UTC(2007, 3, 20), 'type': "diagonalCross",
      'fill': {
        angle: 90,
        keys: ["#CFC0A9", "#E6D5BC", "#E8D9C3"]
      }, 'stroke': {
        keys: ["#AFA4A4", "#C2B6B6", "#C8BDBD"],
        thickness: 2
      }}
  ]
},
```

{sample :width 690 :height 180}GANTT\_Multiple\_Milestones\_03{sample}
