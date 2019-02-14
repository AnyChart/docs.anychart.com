{:index 11}
# Elements

## Overview

Misc:

* elements are shown on the [Timeline](Timeline)
* the [Project](Project_Chart) and [Resource](Resource_Chart) charts: different element types are available, see the [Project Chart](#project_chart) and [Resource Chart](#resource_chart) sections
* all elements of one type: [tasks](#tasks_\(actual\)), [baselines](#baselines_\(planned\)), [progress bars](#progress_bars), [connectors](#connectors), [periods](#periods)
* [all elements](#all_elements) at once
* [individual elements](#individual_elements)
* [markers](#markers)
* {api:anychart.charts.Gantt#getTimeline}getTimeline(){api}
* methods of the {api:anychart.core.ui.Timeline}anychart.core.ui.Timeline{api} allowing to access elements
* (?) [appearance settings](../Appearance_Settings)
* (?) [states](../Common_Settings/Interactivity/States): **normal** and **selected**
* (?)

Classes:

* basic tasks – {api:anychart.core.gantt.elements.TasksElement}anychart.core.gantt.elements.TasksElement{api}
* parent tasks – {api:anychart.core.gantt.elements.GroupingTasksElement}anychart.core.gantt.elements.GroupingTasksElement{api}
* milestones – {api:anychart.core.gantt.elements.MilestonesElement}anychart.core.gantt.elements.MilestonesElement{api}
* baselines – {api:anychart.core.gantt.elements.BaselinesElement}anychart.core.gantt.elements.BaselinesElement{api}
* progress bars – {api:anychart.core.gantt.elements.ProgressElement}anychart.core.gantt.elements.ProgressElement{api}
* connectors – {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api}
* periods – {api:anychart.core.gantt.elements.PeriodsElement}anychart.core.gantt.elements.PeriodsElement{api}
* all elements – {api:anychart.core.gantt.elements.TimelineElement}anychart.core.gantt.elements.TimelineElement{api}

## Project Chart

### Tasks (Actual)

A **task** is the main element of the Project chart. It shows the **actual duration** of a task, while the planned duration is represented by the [baseline](#baselines_\(planned\)).

The sections below explain how to adjust the three task types available: [regular tasks](#regular_tasks), [parent tasks](#parent_tasks), and [milestones](#milestones). In the last section, there is a [sample](#sample) showing how their settings look like.

To learn more about the difference between the types and data fields used to set them, see [Project Chart: Tasks](Project_Chart#tasks_\(actual\)).

#### Regular Tasks

**Regular tasks** are [tasks](Project_Chart#tasks_\(actual\)) that do not have child elements. They are defined as instances of the {api:anychart.core.gantt.elements.TasksElement}anychart.core.gantt.elements.TasksElement{api} class. 

To configure regular tasks, combine the {api:anychart.core.ui.Timeline#tasks}tasks(){api} method of the timeline with the following methods:

* {api:anychart.core.gantt.elements.TasksElement#anchor}anchor(){api}, {api:anychart.core.gantt.elements.TasksElement#offset}offset(){api}, and {api:anychart.core.gantt.elements.TasksElement#position}position(){api} to set the anchor, offset, and position
* {api:anychart.core.gantt.elements.TasksElement#fill}fill(){api}, {api:anychart.core.gantt.elements.TasksElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.TasksElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.TasksElement#normal}normal(){api} and {api:anychart.core.gantt.elements.TasksElement#selected}selected(){api} to access [states](../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.TasksElement#labels}labels(){api} to access [labels](#labels)
* {api:anychart.core.gantt.elements.TasksElement#progress}progress(){api} to access [progress bars](#progress_bars)
* {api:anychart.core.gantt.elements.TasksElement#edit}edit(){api} to access the [Live Edit](Live_Edit_UI) settings
* {api:anychart.core.gantt.elements.TasksElement#rendering}rendering(){api} to access the [rendering](Custom_Drawing) settings


```
// configure the height of tasks
chart.getTimeline().tasks().height(15);
```

#### Parent Tasks

**Parent tasks** are [tasks](Project_Chart#tasks_\(actual\)) that have child elements. They are defined as instances of the {api:anychart.core.gantt.elements.GroupingTasksElement}anychart.core.gantt.elements.GroupingTasksElement{api} class. 

To configure parent tasks, combine the {api:anychart.core.ui.Timeline#groupingTasks}groupingTasks(){api} method of the timeline with the following methods:

* {api:anychart.core.gantt.elements.GroupingTasksElement#anchor}anchor(){api}, {api:anychart.core.gantt.elements.GroupingTasksElement#offset}offset(){api}, and {api:anychart.core.gantt.elements.GroupingTasksElement#position}position(){api} to set the anchor, offset, and position
* {api:anychart.core.gantt.elements.GroupingTasksElement#fill}fill(){api}, {api:anychart.core.gantt.elements.GroupingTasksElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.GroupingTasksElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.GroupingTasksElement#normal}normal(){api} and {api:anychart.core.gantt.elements.GroupingTasksElement#selected}selected(){api} to access [states](../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.GroupingTasksElement#labels}labels(){api} to access [labels](#labels)
* {api:anychart.core.gantt.elements.GroupingTasksElement#progress}progress(){api} to access [progress bars](#progress_bars)
* {api:anychart.core.gantt.elements.GroupingTasksElement#edit}edit(){api} to access the [Live Edit](Live_Edit_UI) settings
* {api:anychart.core.gantt.elements.GroupingTasksElement#rendering}rendering(){api} to access the [rendering](Custom_Drawing) settings


```
// configure the height of parent tasks
chart.getTimeline().groupingTasks().height(15);
```

(?) Also, parent tasks can be [expanded or collapsed](Basic_Settings#navigation).

#### Milestones

**Milestones** are [tasks](Project_Chart#tasks_\(actual\)) with zero duration, representing events. They are defined as instances of the {api:anychart.core.gantt.elements.MilestonesElement}anychart.core.gantt.elements.MilestonesElement{api} class. 

To configure milestones, combine the {api:anychart.core.ui.Timeline#milestones}milestones(){api} method of the timeline with the following methods:

* {api:anychart.core.gantt.elements.MilestonesElement#anchor}anchor(){api} to set the anchor
* {api:anychart.core.gantt.elements.MilestonesElement#fill}fill(){api}, {api:anychart.core.gantt.elements.MilestonesElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.MilestonesElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.MilestonesElement#normal}normal(){api} and {api:anychart.core.gantt.elements.MilestonesElement#selected}selected(){api} to access [states](../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.MilestonesElement#labels}labels(){api} to access [labels](#labels)
* {api:anychart.core.gantt.elements.MilestonesElement#edit}edit(){api} to access the [Live Edit](Live_Edit_UI) settings
* {api:anychart.core.gantt.elements.MilestonesElement#rendering}rendering(){api} to access the [rendering](Custom_Drawing) settings


```
// configure the height of milestones
chart.getTimeline().milestones().height(15);
```

If you need to create multiple milestones in one row, use an alternative way to visualize events – add [markers](#markers).

#### Sample

In the sample below, the {api:anychart.core.ui.Timeline#tasks}tasks(){api}, {api:anychart.core.ui.Timeline#groupingTasks}groupingTasks(){api}, and {api:anychart.core.ui.Timeline#milestones}milestones(){api} methods of the timeline are used to access [regular tasks](#regular_tasks), [parent tasks](#parent_tasks), and [milestones](#milestones).

The **normal()** and **selected()** methods of each task type are combined with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} to configure the  [appearance settings](../Appearance_Settings) in two [states](../Common_Settings/Interactivity/States): **normal** and **selected**.

```
// configure tasks
var tasks = chart.getTimeline().tasks();
tasks.normal().fill("#455a64 0.5");
tasks.selected().fill("#dd2c00");
tasks.normal().stroke("#455a64");
tasks.selected().stroke("#dd2c00");

// configure parent tasks
var parentTasks = chart.getTimeline().groupingTasks();
parentTasks.normal().fill("#00838f");
parentTasks.selected().fill("#dd2c00");
parentTasks.normal().stroke("#00838f");
parentTasks.selected().stroke("#dd2c00");

// configure milestones
var milestones = chart.getTimeline().milestones();
milestones.normal().fill("#dd2c00 0.5");
milestones.selected().fill("#dd2c00");
milestones.normal().stroke("#dd2c00");
milestones.selected().stroke("#dd2c00");
```

{sample :height 260}GANTT\_NEW\_Elements\_01{sample}

### Baselines (Planned)

**Baselines** are elements showing the **planned duration** of regular and parent [tasks](#tasks_\(actual\)). They are defined as instances of the {api:anychart.core.gantt.elements.BaselinesElement}anychart.core.gantt.elements.BaselinesElement{api} class. 

To configure baselines, combine the {api:anychart.core.ui.Timeline#baselines}baselines(){api} method of the timeline with the following methods:

* {api:anychart.core.gantt.elements.BaselinesElement#above}above(){api} to place baselines above tasks
* {api:anychart.core.gantt.elements.BaselinesElement#anchor}anchor(){api}, {api:anychart.core.gantt.elements.BaselinesElement#offset}offset(){api}, and {api:anychart.core.gantt.elements.BaselinesElement#position}position(){api} to set the anchor, offset, and position
* {api:anychart.core.gantt.elements.BaselinesElement#fill}fill(){api}, {api:anychart.core.gantt.elements.BaselinesElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.BaselinesElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.BaselinesElement#normal}normal(){api} and {api:anychart.core.gantt.elements.BaselinesElement#selected}selected(){api} to access [states](../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.BaselinesElement#labels}labels(){api} to access [labels](#labels)
* {api:anychart.core.gantt.elements.BaselinesElement#edit}edit(){api} to access the [Live Edit](Live_Edit_UI) settings
* (?) {api:anychart.core.gantt.elements.BaselinesElement#removeAllListeners}removeAllListeners(){api} to remove all [event listeners](Events)
* {api:anychart.core.gantt.elements.BaselinesElement#rendering}rendering(){api} to access the [rendering](Custom_Drawing) settings

Please note: by default, baselines are shown under tasks, but can be placed above them with the help of the {api:anychart.core.gantt.elements.BaselinesElement#above}above(){api} method.

To learn about data fields used to set baselines, see [Progress Chart: Baselines](Project_Chart#baselines_\(planned\)).

In the sample below, the {api:anychart.core.ui.Timeline#baselines}baselines(){api} method is used to access baselines. The {api:anychart.core.gantt.elements.BaselinesElement#normal}normal(){api} and {api:anychart.core.gantt.elements.BaselinesElement#selected}selected(){api} methods are combined with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} to configure the  [appearance settings](../Appearance_Settings) in two [states](../Common_Settings/Interactivity/States): **normal** and **selected**. Finally, the {api:anychart.core.gantt.elements.BaselinesElement#above}above(){api} method places baselines above tasks.


```
// configure baselines
baselines = chart.getTimeline().baselines();
baselines.normal().fill("#dd2c00 0.3");
baselines.normal().stroke(null);
baselines.selected().fill("#ef6c00 0.3");
baselines.selected().stroke(null);
baselines.above(true);
```

{sample :height 260}GANTT\_NEW\_Elements\_02{sample}

### Progress Bars

**Progress bars** are elements showing the progress of regular and parent [tasks](#tasks_\(actual\)). They are defined as instances of the {api:anychart.core.gantt.elements.ProgressElement}anychart.core.gantt.elements.ProgressElement{api} class. 

To access progress bars, first access [regular](#regular_tasks) or [parent](#parent_tasks) tasks by calling {api:anychart.core.ui.Timeline#tasks}tasks(){api} or {api:anychart.core.ui.Timeline#groupingTasks}groupingTasks(){api}. Then call {api:?entry=progress}progress(){api} (?).

 To configure progress bars, use the following methods:

* {api:anychart.core.gantt.elements.ProgressElement#anchor}anchor(){api}, {api:anychart.core.gantt.elements.ProgressElement#offset}offset(){api}, and {api:anychart.core.gantt.elements.ProgressElement#position}position(){api} to set the anchor, offset, and position
* {api:anychart.core.gantt.elements.ProgressElement#fill}fill(){api}, {api:anychart.core.gantt.elements.ProgressElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.ProgressElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.ProgressElement#normal}normal(){api} and {api:anychart.core.gantt.elements.ProgressElement#selected}selected(){api} to access [states](../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.ProgressElement#labels}labels(){api} to access [labels](#labels)
* {api:anychart.core.gantt.elements.ProgressElement#edit}edit(){api} to access the [Live Edit](Live_Edit_UI) settings
* {api:anychart.core.gantt.elements.ProgressElement#rendering}rendering(){api} to access the [rendering](Custom_Drawing) settings

Please note: by default, progress is shown in [labels](#labels) of tasks. However, progress bars have their own labels. You can enable them and use to show progress or any other information.

To learn about data fields used to set progress bars, see [Project Chart: Progress Bars](Project_Chart#progress_bars).

In the sample below, the {api:?entry=progress}progress(){api} method (?) is used to access progress bars of both regular and parent tasks. The {api:anychart.core.gantt.elements.ProgressElement#normal}normal(){api} and {api:anychart.core.gantt.elements.ProgressElement#selected}selected(){api} methods are combined with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} to configure the  [appearance settings](../Appearance_Settings) in two [states](../Common_Settings/Interactivity/States): **normal** and **selected**.

```
// configure progress bars of regular tasks
var tasks = chart.getTimeline().tasks();
tasks.progress().normal().fill("#dd2c00");
tasks.progress().selected().fill("#455a64 0.5");
tasks.progress().selected().stroke("#455a64");

// configure progress bars of parent tasks
var parentTasks = chart.getTimeline().groupingTasks();
parentTasks.progress().normal().fill(null);
parentTasks.progress().selected().fill(null);
parentTasks.progress().selected().stroke(null);
```

{sample :height 220}GANTT\_NEW\_Elements\_03{sample}

### Connectors

**Connectors** are elements showing the dependencies between all [task](#tasks_\(actual\)) types. They are defined as instances of the {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api} class. 

To configure connectors, combine the {api:anychart.core.ui.Timeline#connectors}connectors(){api} method of the timeline with the following methods:

* {api:anychart.core.gantt.elements.ConnectorElement#fill}fill(){api} and {api:anychart.core.gantt.elements.ConnectorElement#stroke}stroke(){api} to set the fill and stroke
* {api:anychart.core.gantt.elements.ConnectorElement#normal}normal(){api} and {api:anychart.core.gantt.elements.ConnectorElement#selected}selected(){api} to access [states](../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.ConnectorElement#previewStroke}previewStroke(){api} to set the preview stroke in the [Live Edit](Live_Edit_UI) mode

To learn about the available types of connectors and the data fields used to set them, see [Progress Chart: Connectors](Project_Chart#connectors).

In the sample below, the {api:anychart.core.ui.Timeline#connectors}connectors(){api} method is used to access connectors. The {api:anychart.core.gantt.elements.ConnectorElement#normal}normal(){api} and {api:anychart.core.gantt.elements.ConnectorElement#selected}selected(){api} methods are combined with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} to configure the  [appearance settings](../Appearance_Settings) in two [states](../Common_Settings/Interactivity/States): **normal** and **selected**.

```
// configure connectors
var connectors = chart.getTimeline().connectors();
connectors.normal().fill("#ffa000");
connectors.selected().fill("#ef6c00");
connectors.normal().stroke("2 #ffa000");
connectors.selected().stroke("2 #ef6c00");
```

{sample :height 220}GANTT\_NEW\_Elements\_04{sample}

## Resource Chart

### Periods

(?) **Periods** are visual elements representing time intervals related to resources. They are defined as instances of the {api:anychart.core.gantt.elements.PeriodsElement}anychart.core.gantt.elements.PeriodsElement{api} class. 

To configure periods, combine the {api:anychart.core.ui.Timeline#periods}periods(){api} method of the timeline with the following methods:

* {api:anychart.core.gantt.elements.PeriodsElement#anchor}anchor(){api}, {api:anychart.core.gantt.elements.PeriodsElement#offset}offset(){api}, and {api:anychart.core.gantt.elements.PeriodsElement#position}position(){api} to set the anchor, offset, and position
* {api:anychart.core.gantt.elements.PeriodsElement#fill}fill(){api}, {api:anychart.core.gantt.elements.PeriodsElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.PeriodsElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.PeriodsElement#normal}normal(){api} and {api:anychart.core.gantt.elements.PeriodsElement#selected}selected(){api} to access [states](../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.PeriodsElement#labels}labels(){api} to access [labels](#labels)
* {api:anychart.core.gantt.elements.PeriodsElement#edit}edit(){api} to access the [Live Edit](Live_Edit_UI) settings
* {api:anychart.core.gantt.elements.PeriodsElement#rendering}rendering(){api} to access the [rendering](Custom_Drawing) settings

To learn about data fields used to set periods, see [Resource Chart: Periods and Resources](Resource_Chart#periods_and_resources).

In the sample below, the {api:anychart.core.ui.Timeline#periods}periods(){api} method is used to access periods. The {api:anychart.core.gantt.elements.PeriodsElement#normal}normal(){api} and {api:anychart.core.gantt.elements.PeriodsElement#selected}selected(){api} methods are combined with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} to configure the  [appearance settings](../Appearance_Settings) in two [states](../Common_Settings/Interactivity/States): **normal** and **selected**.

```
// configure periods
var periods = chart.getTimeline().periods();
periods.normal().fill("#455a64 0.5");
periods.selected().fill("#dd2c00");
periods.normal().stroke("#455a64");
periods.selected().stroke("#dd2c00");
```

{sample :height 160}GANTT\_NEW\_Elements\_05{sample}

## All Elements

You can access almost all elements of a **Project** chart chart at once: [tasks](#tasks_\(actual\)) of all types, [baselines](#baselines_\(planned\)), and [progress bars](#progress_bars) (but not [connectors](#connectors)). They are defined as instances of the {api:anychart.core.gantt.elements.TimelineElement}anychart.core.gantt.elements.TimelineElement{api} class.

The same is true for the **Resource** chart, but it makes little difference since only one element type is supported – the [period](#periods).

To configure elements, combine the {api:anychart.core.ui.Timeline#elements}elements(){api} method of the timeline with the following methods:

* {api:anychart.core.gantt.elements.TimelineElement#anchor}anchor(){api}, {api:anychart.core.gantt.elements.TimelineElement#offset}offset(){api}, and {api:anychart.core.gantt.elements.TimelineElement#position}position(){api} to set the anchor, offset, and position
* {api:anychart.core.gantt.elements.TimelineElement#fill}fill(){api}, {api:anychart.core.gantt.elements.TimelineElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.TimelineElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.TimelineElement#normal}normal(){api} and {api:anychart.core.gantt.elements.TimelineElement#selected}selected(){api} to access [states](../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.TimelineElement#labels}labels(){api} to access [labels](#labels)
* {api:anychart.core.gantt.elements.TimelineElement#edit}edit(){api} to access the [Live Edit](Live_Edit_UI) settings
* {api:anychart.core.gantt.elements.TimelineElement#rendering}rendering(){api} to access the [rendering](Custom_Drawing) settings

In the sample below, the {api:anychart.core.ui.Timeline#elements}elements(){api} method is used to access elements of a Project chart. The {api:anychart.core.gantt.elements.TimelineElement#normal}normal(){api} and {api:anychart.core.gantt.elements.TimelineElement#selected}selected(){api} methods are combined with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} to configure the  [appearance settings](../Appearance_Settings) in two [states](../Common_Settings/Interactivity/States): **normal** and **selected**.

```
// configure timeline elements
var elements = chart.getTimeline().elements();
elements.normal().fill("#455a64 0.5");
elements.selected().fill("#dd2c00");
elements.normal().stroke("#455a64");
elements.selected().stroke("#dd2c00");
```

{sample :height 260}GANTT\_NEW\_Elements\_06{sample}

## Individual Elements

To adjust individual elements of a **Project** chart, use the following data fields:

* `"actual"` to configure all [task](#tasks_\(actual\)) types
* `"baseline"` to configure [baselines](#baselines_\(planned\))
* `"progress"` to configure [progress bars](#progress_bars)
* `"connector"` to configure [connectors](#connectors)

Combine them with fields corresponding to the methods of elements, for example `fill` and `stroke`:

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    baselineStart: "2018-01-25",
    baselineEnd: "2018-04-07",
    actualStart: "2018-01-25",
    actualEnd: "2018-04-20",
    children: [
      {
        id: "1_1",
        name: "Analysis",
        baselineStart: "2018-01-25",
        baselineEnd: "2018-02-08",
        baseline: {fill: "#dd2c00 0.3", stroke: "0.5 #dd2c00"}
        actualStart: "2018-01-27",
        actualEnd: "2018-02-08",
        actual: {fill: "#dd2c00", stroke: "0.5 #dd2c00"},
        progressValue: "75%",
        progress: {fill: "#455a64 0.5", stroke: "0.5 #dd2c00"}
        connectTo: "1_2",
        connectorType: "finish-finish",
        connector: {fill: "#dd2c00", stroke: "2 #dd2c00"}
      },
      {
        id: "1_2",
        name: "Design",
        baselineStart: "2018-02-04",
        baselineEnd: "2018-02-24",
        actualStart: "2018-02-04",
        actualEnd: "2018-03-02",
        progressValue: "100%",
        connectTo: "1_4",
        connectorType: "start-start"
      },
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "2018-03-02",
        actualEnd: "2018-03-02"
      },
      {
        id: "1_4",
        name: "Implementation",
        baselineStart: "2018-02-25",
        baselineEnd: "2018-03-14",
        actualStart: "2018-03-02",
        actualEnd: "2018-03-24",
        progressValue: "60%"
      },
      {
        id: "1_5",
        name: "Testing",
        baselineStart: "2018-03-15",
        baselineEnd: "2018-04-07",
        actualStart: "2018-03-25",
        actualEnd: "2018-04-20"
      }
  ]}
];
 
// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);   
```

{sample :height 220}GANTT\_NEW\_Elements\_07{sample}

To adjust an individual [period](#periods) of a **Resource** chart, you need to add extra data fields to the object specifying this period (?). Use fields corresponding to the methods of periods, for example `fill` and `stroke`:

```
// create data
var data = [
  {
    id: "1",
    name: "Resource 1",
    periods: [
      {id:"1_1", start: "2018-01-02", end: "2018-01-25",
       fill: "#dd2c00", stroke: "#dd2c00"},
      {id:"1_2", start: "2018-01-28", end: "2018-02-22"},
      {id:"1_3", start: "2018-03-03", end: "2018-03-25"}
  ]},
  {
    id: "2",
    name: "Resource 2",
    periods: [
      {id: "2_1", start: "2018-01-05", end: "2018-02-15"},
      {id: "2_2", start: "2018-02-26", end: "2018-03-20"}
  ]},
  {
    id: "3",
    name: "Resource 3",
    periods: [
      {id: "3_1", start: "2018-01-04", end: "2018-03-25"}
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttResource(); 

// set the data
chart.data(treeData);   
```

{sample :height 160}GANTT\_NEW\_Elements\_08{sample}

## Labels

Some elements have [labels](../../Common_Settings/Labels) – text or image components, which are defined as instances of the {api:anychart.core.ui.LabelsFactory}anychart.core.ui.LabelsFactory{api} class.

Labels are supported by the following elements of the **Project** chart:

* [regular tasks](#regular_tasks)
* [parent tasks](#parent_tasks)
* [milestones](#milestones)
* [progress bars](#progress_bars)

Also, labels are supported by the only element of the **Resource** chart – [period](#periods).

To access labels, call the **labels()** method of a particular element type or of [all elements](#all_elements) (of course, only the elements that can have labels are affected):

```
// access labels of tasks
var labels = chart.getTimeline().tasks().labels();
```

```
// access labels of elements
var labels = chart.getTimeline().elements().labels();
```

To enable or disable labels, pass `true` or `false` either directly to **labels()** or to the {api:anychart.core.ui.LabelsFactory#enabled}enabled(){api} method of labels:

```
// enable labels of tasks
var chart.getTimeline().tasks().labels(true);
```

```
// enable labels of tasks
chart.getTimeline().tasks().labels().enabled(true);
```

To configure labels, use other methods of {api:anychart.core.ui.LabelsFactory}anychart.core.ui.LabelsFactory{api}. For example, you can set the text format by combining the {api:anychart.core.ui.LabelsFactory#format}format(){api} method with either [tokens](../../Common_Settings/Text_Formatters#string_tokens) or [formatting functions](../Common_Settings/Text_Formatters#formatting_functions). Read the sections below to learn more.

### Tokens

To format the text of labels, combine the {api:anychart.core.ui.LabelsFactory#format}format(){api} method with [tokens](../../Common_Settings/Text_Formatters#string_tokens).

Please keep in mind that in addition to default tokens you can always use a custom token corresponding to a custom field in your data.

For the **Project** chart, the following tokens are available:

* `{%id}`
* `{%name}`
* `{%actualStart}`
* `{%actualEnd}`
* `{%baselineStart}`
* `{%baselineEnd}`
* `{%progress}`

In the sample below, labels of different elements have the same font settings but different text format, which is configured with the help of tokens, including a custom one:

```
var timeline = chart.getTimeline();

// configure labels of elements
timeline.elements().labels().fontColor("red");
timeline.elements().labels().fontWeight(600);

// configure labels of tasks
timeline.tasks().labels().format("{%name}: {%progress}");

// configure labels of parent task
timeline.groupingTasks().labels().format("{%name}");

// configure labels of milestones
timeline.milestones().labels().format(
    "{%custom_field} {%actualStart}{dateTimeFormat:dd MMM}"
);
```

{sample :height 240}GANTT\_NEW\_Elements\_09{sample}

The **Resource** chart supports these tokens:

* `{%id}`
* `{%name}`
* `{%start}`
* `{%end}`

In the following sample, tokens, including a custom one, are used to format the text of period labels. Also, text font is adjusted.

```
// configure labels of periods
var periodLabels = chart.getTimeline().periods().labels();
periodLabels.enabled(true);
periodLabels.fontColor("#990000");
periodLabels.fontWeight(600);
periodLabels.format(
  "{%custom_field} start: {%start}{dateTimeFormat:dd MMM}"
);
```

{sample :height 160}GANTT\_NEW\_Elements\_10{sample}

### Formatting Functions

You can configure the text of labels by combining the {api:anychart.core.ui.LabelsFactory#format}format(){api} method with [formatting functions](../Common_Settings/Text_Formatters#formatting_functions).

Please keep in mind: the {api:anychart.format.Context#getData}getData(){api} method allows you to refer to a custom field in your data. (?) Also, in functions you can use methods of the [tree data model](../Working_with_Data/Tree_Data_Model) to perform operations on data.

For the **Project** chart, the following default fields are available in formatting functions:

* `id`
* `name`
* `actualStart`
* `actualEnd`
* `baselineStart`
* `baselineEnd`
* `progress`

In the sample below, labels of different elements have the same font weight but different text format, which is configured with the help of formatting functions.

The label text of regular tasks depends on their progress. The label of the parent task displays its duration. Finally, labels of milestones refer to other tasks, which are linked in a custom data field.

```
var timeline = chart.getTimeline();

// configure labels of elements
timeline.elements().labels().fontWeight(600);

// configure labels of tasks
timeline.tasks().labels().useHtml(true);
timeline.tasks().labels().format(function() {
  if (this.progress == 1) {
    return "<span style='color:red'>" + this.name + ": COMPLETE</span>";
  } else {
    return this.name + ": " + this.progress * 100 + "%";
  }
});

// configure labels of parent tasks
timeline.groupingTasks().labels().format(function() {
  var duration = (this.actualEnd - this.actualStart) / 1000 / 3600 / 24;
  return this.name + ": " + duration + " days";
});

// configure labels of milestones
timeline.milestones().labels().format(function() {
  var relatedTaskId = this.getData("custom_field");
  var relatedTaskItem = treeData.search("id", relatedTaskId);
  var relatedTaskName = relatedTaskItem.get("name");
  return relatedTaskName + " Review";
});
```

{sample :height 240}GANTT\_NEW\_Elements\_11{sample}

Here are the fields supported by the **Resource** chart:

* `id`
* `name`
* `start`
* `end`

In this sample a formatting function is used to calculate and display the duration of each period as well as the value of a custom field:

```
// configure labels of periods
var periodLabels = chart.getTimeline().periods().labels();
periodLabels.enabled(true);
periodLabels.useHtml(true);
periodLabels.fontColor("black");
periodLabels.fontWeight(600);
periodLabels.format(function() {
  var duration = (this.end - this.start) / 1000 / 3600 / 24;
  if (duration > 30) {
    return "<span style='color:#990000'>" + this.getData("custom_field") +
           " " + duration + " days</span>"
  } else {  
    return this.getData("custom_field") + " " + duration + " days";
  }
});
```

{sample :height 160}GANTT\_NEW\_Elements\_12{sample}

## Markers

* могут быть добавлены к заданию любого типа
* [Milestones](#milestones)
* {api:anychart.core.ui.Timeline#markers}markers(){api}
* (?) {api:anychart.core.ui.MarkersFactory}anychart.core.ui.MarkersFactory{api}


```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2018-01-25",
    actualEnd: "2018-04-07",
    markers: [
      {value: "2018-01-29", type: "cross"},
      {value: "2018-02-20", type: "circle"},
      {value: "2018-02-25", type: "diamond", fill: "#ffa000"},
      {value: "2018-03-20", type: "diagonal-cross"},
      {value: "2018-03-26", type: "diagonal-cross"}
    ],
    children: [
      {
        id: "1_1",
        name: "Analysis",
        actualStart: "2018-01-25",
        actualEnd: "2018-02-08"
      },
      {
        id: "1_2",
        name: "Design",
        actualStart: "2018-02-04",
        actualEnd: "2018-02-24",
        markers: [
          {value: "2018-01-29", type: "cross"}
      ]},
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "2018-02-25",
        actualEnd: "2018-02-25",
        markers: [
          {value: "2018-02-20", type: "circle"},
      ]},
      {
        id: "1_4",
        name: "Implementation",
        actualStart: "2018-02-25",
        actualEnd: "2018-03-14"
      },
      {
        id: "1_5",
        name: "Testing",
        actualStart: "2018-03-15",
        actualEnd: "2018-04-07",
        markers: [
          {value: "2018-03-20", type: "diagonal-cross"},
          {value: "2018-03-26", type: "diagonal-cross"}
      ]}
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);

// configure markers
chart.getTimeline().markers().fill("#dd2c00");
chart.getTimeline().markers().stroke("black");
```

{sample :height 220}GANTT\_NEW\_Elements\_13{sample}

```
// create data
var data = [
  {
    id: "A",
    name: "Location A",
    markers: [
      {value: "2018-01-10", type: "diagonal-cross"},
      {value: "2018-01-17", type: "cross"},
      {value: "2018-03-15", type: "diamond", fill: "#ffa000"}
    ],
    children: [
      {
        id: "1",
        name: "Server 1",
        periods: [
          {id: "1_1", start: "2018-01-02", end: "2018-01-25"},
          {id: "1_2", start: "2018-01-28", end: "2018-02-22"},
          {id: "1_3", start: "2018-03-03", end: "2018-03-25"}
      ]},
      {
        id: "2",
        name: "Server 2",
        periods: [
          {id: "2_1", start: "2018-01-05", end: "2018-02-15"},
          {id: "2_2", start: "2018-02-26", end: "2018-03-20"},
        ],
        markers: [
          {value: "2018-01-10", type: "diagonal-cross"},
          {value: "2018-01-17", type: "cross"},
          {value: "2018-03-15", type: "diamond", fill: "#ffa000"}
      ]}
  ]},
  {
    id: "B",
    name: "Location B",
    children: [
      {
        id: "3",
        name: "Server 3",
        periods: [
          {id: "3_1", start: "2018-01-04", end: "2018-03-25"}
    ]}
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttResource(); 

// set the data
chart.data(treeData);  

// configure markers
chart.getTimeline().markers().fill("#dd2c00");
chart.getTimeline().markers().stroke("black");
```

{sample :height 200}GANTT\_NEW\_Elements\_14{sample}