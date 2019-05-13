{:index 3}
# Resource Chart

## Periods

**Periods** are visual elements representing time intervals related to resources. They are defined as instances of the {api:anychart.core.gantt.elements.PeriodsElement}anychart.core.gantt.elements.PeriodsElement{api} class. 

To configure periods, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} and {api:anychart.core.ui.Timeline#periods}periods(){api} with the following methods:

* {api:anychart.core.gantt.elements.PeriodsElement#anchor}anchor(){api}, {api:anychart.core.gantt.elements.PeriodsElement#offset}offset(){api}, and {api:anychart.core.gantt.elements.PeriodsElement#position}position(){api} to set the anchor, offset, and position
* {api:anychart.core.gantt.elements.PeriodsElement#fill}fill(){api}, {api:anychart.core.gantt.elements.PeriodsElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.PeriodsElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.PeriodsElement#normal}normal(){api} and {api:anychart.core.gantt.elements.PeriodsElement#selected}selected(){api} to access [states](../../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.PeriodsElement#labels}labels(){api} to access [labels](Labels)
* {api:anychart.core.gantt.elements.PeriodsElement#edit}edit(){api} to access the [Live Edit](../Live_Edit) settings
* {api:anychart.core.gantt.elements.PeriodsElement#rendering}rendering(){api} to access the [rendering](../Custom_Drawing) settings

To learn about data fields used to set periods, see [Resource Chart: Periods and Resources](../Resource_Chart#periods_and_resources).

In the sample below, the {api:anychart.core.ui.Timeline#periods}periods(){api} method is used to access periods. The {api:anychart.core.gantt.elements.PeriodsElement#normal}normal(){api} and {api:anychart.core.gantt.elements.PeriodsElement#selected}selected(){api} methods are combined with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} to configure the  [appearance settings](../../Appearance_Settings) in two [states](../../Common_Settings/Interactivity/States): **normal** and **selected**.

```
// configure periods
var periods = chart.getTimeline().periods();
periods.normal().fill("#455a64 0.5");
periods.selected().fill("#dd2c00");
periods.normal().stroke("#455a64");
periods.selected().stroke("#dd2c00");
```

{sample :height 160}GANTT\_NEW\_Elements\_Resource\_01{sample}

## Connectors

**Connectors** are elements showing the dependencies between all [task types](#tasks_\(actual\)). They are defined as instances of the {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api} class. 

To configure connectors, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} and {api:anychart.core.ui.Timeline#connectors}connectors(){api} with the following methods:

* {api:anychart.core.gantt.elements.ConnectorElement#fill}fill(){api} and {api:anychart.core.gantt.elements.ConnectorElement#stroke}stroke(){api} to set the fill and stroke
* {api:anychart.core.gantt.elements.ConnectorElement#normal}normal(){api} and {api:anychart.core.gantt.elements.ConnectorElement#selected}selected(){api} to access [states](../../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.ConnectorElement#previewStroke}previewStroke(){api} to set the preview stroke in the [Live Edit](../Live_Edit) mode

To learn about the available types of connectors and the data fields used to set them, see [Progress Chart: Connectors](../Project_Chart#connectors).

In the sample below, the {api:anychart.core.ui.Timeline#connectors}connectors(){api} method is used to access connectors. The {api:anychart.core.gantt.elements.ConnectorElement#normal}normal(){api} and {api:anychart.core.gantt.elements.ConnectorElement#selected}selected(){api} methods are combined with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} to configure the  [appearance settings](../../Appearance_Settings) in two [states](../../Common_Settings/Interactivity/States): **normal** and **selected**.

```
// configure connectors
var connectors = chart.getTimeline().connectors();
connectors.normal().fill("#ffa000");
connectors.selected().fill("#ef6c00");
connectors.normal().stroke("2 #ffa000");
connectors.selected().stroke("2 #ef6c00");
```
{sample :height 160}GANTT\_NEW\_Elements\_Resource\_01{sample}