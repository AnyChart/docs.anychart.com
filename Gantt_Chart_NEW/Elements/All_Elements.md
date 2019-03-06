{:index 4}
# All Elements

You can access almost all elements of a **Project chart** at once: [tasks](Project_Chart#tasks_\(actual\)) of all types, [baselines](Project_Chart#baselines_\(planned\)), and [progress bars](Project_Chart#progress_bars) (but not [connectors](Project_Chart#connectors) and [markers](Markers)). They are defined as instances of the {api:anychart.core.gantt.elements.TimelineElement}anychart.core.gantt.elements.TimelineElement{api} class.

The same is true for the **Resource chart**, but it makes little difference since only one element type is supported – the [period](Resource_Chart#periods).

To configure elements, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} and {api:anychart.core.ui.Timeline#elements}elements(){api} with the following methods:

* {api:anychart.core.gantt.elements.TimelineElement#anchor}anchor(){api}, {api:anychart.core.gantt.elements.TimelineElement#offset}offset(){api}, and {api:anychart.core.gantt.elements.TimelineElement#position}position(){api} to set the anchor, offset, and position
* {api:anychart.core.gantt.elements.TimelineElement#fill}fill(){api}, {api:anychart.core.gantt.elements.TimelineElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.TimelineElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.TimelineElement#normal}normal(){api} and {api:anychart.core.gantt.elements.TimelineElement#selected}selected(){api} to access [states](../../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.TimelineElement#labels}labels(){api} to access [labels](Labels)
* {api:anychart.core.gantt.elements.TimelineElement#edit}edit(){api} to access the [Live Edit](../Live_Edit_UI) settings
* {api:anychart.core.gantt.elements.TimelineElement#rendering}rendering(){api} to access the [rendering](../Custom_Drawing) settings

In the sample below, the {api:anychart.core.ui.Timeline#elements}elements(){api} method is used to access elements of a Project chart. The {api:anychart.core.gantt.elements.TimelineElement#normal}normal(){api} and {api:anychart.core.gantt.elements.TimelineElement#selected}selected(){api} methods are combined with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} to configure the  [appearance settings](../vAppearance_Settings) in two [states](../../Common_Settings/Interactivity/States): **normal** and **selected**.

```
// configure timeline elements
var elements = chart.getTimeline().elements();
elements.normal().fill("#455a64 0.5");
elements.selected().fill("#dd2c00");
elements.normal().stroke("#455a64");
elements.selected().stroke("#dd2c00");
```

{sample :height 260}GANTT\_NEW\_Elements\_All{sample}