---
sidebar_position: 4
---
# All Elements

You can access almost all elements of a **Project chart** at once: [tasks](project-chart#tasks-actual)) of all types, [baselines](project-chart#baselines-planned)), and [progress bars](project-chart#progress-bars) (but not [connectors](project-chart#connectors) and [markers](markers)). They are defined as instances of the {api:anychart.core.gantt.elements.TimelineElement}anychart.core.gantt.elements.TimelineElement{api} class.

The same is true for the **Resource chart**, but it makes little difference since only two types of elements are supported - [periods](resource-chart#periods) and [connectors](resource-chart#connectors).

To configure elements, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} and {api:anychart.core.ui.Timeline#elements}elements(){api} with the following methods:

* {api:anychart.core.gantt.elements.TimelineElement#fill}fill(){api}, {api:anychart.core.gantt.elements.TimelineElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.TimelineElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.TimelineElement#anchor}anchor(){api}, {api:anychart.core.gantt.elements.TimelineElement#offset}offset(){api}, and {api:anychart.core.gantt.elements.TimelineElement#position}position(){api} to set the anchor, offset, and position
* {api:anychart.core.gantt.elements.TimelineElement#labels}labels(){api} to access [labels](labels)
* {api:anychart.core.gantt.elements.TimelineElement#normal}normal(){api} and {api:anychart.core.gantt.elements.TimelineElement#selected}selected(){api} to access [states](../../common-settings/interactivity/states)
* {api:anychart.core.gantt.elements.TimelineElement#edit}edit(){api} to access the [Live Edit](../live-edit) settings
* {api:anychart.core.gantt.elements.TimelineElement#rendering}rendering(){api} to access the [rendering](../custom-drawing) settings

In the sample below, the {api:anychart.core.ui.Timeline#elements}elements(){api} method is used to access elements of a Project chart. The {api:anychart.core.gantt.elements.TimelineElement#normal}normal(){api} and {api:anychart.core.gantt.elements.TimelineElement#selected}selected(){api} methods are combined with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} to configure the  [appearance settings](../../appearance-settings) in two [states](../../common-settings/interactivity/states): **normal** and **selected**.

```
// configure timeline elements
var elements = chart.getTimeline().elements();
elements.normal().fill("#455a64 0.5");
elements.selected().fill("#dd2c00");
elements.normal().stroke("#455a64");
elements.selected().stroke("#dd2c00");
```

{sample :height 260}GANTT\_Elements\_All{sample}