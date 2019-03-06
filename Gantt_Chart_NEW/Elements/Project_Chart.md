{:index 2}
# Project Chart

## Tasks (Actual)

A **task** is the main element of the Project chart. It shows the **actual duration** of a task, while the planned duration is represented by the [baseline](#baselines_\(planned\)).

The sections below explain how to adjust the three task types available: [regular tasks](#regular_tasks), [parent tasks](#parent_tasks), and [milestones](#milestones). In the last section, there is a [sample](#sample) showing how their settings look like.

To learn more about the difference between the types and data fields used to set them, see [Project Chart: Tasks](../Project_Chart#tasks_\(actual\)).

### Regular Tasks

**Regular tasks** are tasks that do not have child elements. They are defined as instances of the {api:anychart.core.gantt.elements.TasksElement}anychart.core.gantt.elements.TasksElement{api} class. 

To configure regular tasks, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} and {api:anychart.core.ui.Timeline#tasks}tasks(){api} with the following methods:

* {api:anychart.core.gantt.elements.TasksElement#anchor}anchor(){api}, {api:anychart.core.gantt.elements.TasksElement#offset}offset(){api}, and {api:anychart.core.gantt.elements.TasksElement#position}position(){api} to set the anchor, offset, and position
* {api:anychart.core.gantt.elements.TasksElement#fill}fill(){api}, {api:anychart.core.gantt.elements.TasksElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.TasksElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.TasksElement#normal}normal(){api} and {api:anychart.core.gantt.elements.TasksElement#selected}selected(){api} to access [states](../../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.TasksElement#labels}labels(){api} to access [labels](Labels)
* {api:anychart.core.gantt.elements.TasksElement#progress}progress(){api} to access [progress bars](#progress_bars)
* {api:anychart.core.gantt.elements.TasksElement#edit}edit(){api} to access the [Live Edit](../Live_Edit_UI) settings
* {api:anychart.core.gantt.elements.TasksElement#rendering}rendering(){api} to access the [rendering](../Custom_Drawing) settings


```
// configure the height of tasks
chart.getTimeline().tasks().height(15);
```

### Parent Tasks

**Parent tasks** are tasks that have child elements. They are defined as instances of the {api:anychart.core.gantt.elements.GroupingTasksElement}anychart.core.gantt.elements.GroupingTasksElement{api} class. 

To configure parent tasks, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} and {api:anychart.core.ui.Timeline#groupingTasks}groupingTasks(){api} with the following methods:

* {api:anychart.core.gantt.elements.GroupingTasksElement#anchor}anchor(){api}, {api:anychart.core.gantt.elements.GroupingTasksElement#offset}offset(){api}, and {api:anychart.core.gantt.elements.GroupingTasksElement#position}position(){api} to set the anchor, offset, and position
* {api:anychart.core.gantt.elements.GroupingTasksElement#fill}fill(){api}, {api:anychart.core.gantt.elements.GroupingTasksElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.GroupingTasksElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.GroupingTasksElement#normal}normal(){api} and {api:anychart.core.gantt.elements.GroupingTasksElement#selected}selected(){api} to access [states](../../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.GroupingTasksElement#labels}labels(){api} to access [labels](Labels)
* {api:anychart.core.gantt.elements.GroupingTasksElement#progress}progress(){api} to access [progress bars](#progress_bars)
* {api:anychart.core.gantt.elements.GroupingTasksElement#edit}edit(){api} to access the [Live Edit](../Live_Edit_UI) settings
* {api:anychart.core.gantt.elements.GroupingTasksElement#rendering}rendering(){api} to access the [rendering](../Custom_Drawing) settings


```
// configure the height of parent tasks
chart.getTimeline().groupingTasks().height(15);
```

Also, parent tasks can be [expanded or collapsed](../Basic_Settings#navigation).

### Milestones

**Milestones** are tasks with zero duration, representing events. They are defined as instances of the {api:anychart.core.gantt.elements.MilestonesElement}anychart.core.gantt.elements.MilestonesElement{api} class. 

To configure milestones, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} and {api:anychart.core.ui.Timeline#milestones}milestones(){api} with the following methods:

* {api:anychart.core.gantt.elements.MilestonesElement#anchor}anchor(){api} to set the anchor
* {api:anychart.core.gantt.elements.MilestonesElement#fill}fill(){api}, {api:anychart.core.gantt.elements.MilestonesElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.MilestonesElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.MilestonesElement#normal}normal(){api} and {api:anychart.core.gantt.elements.MilestonesElement#selected}selected(){api} to access [states](../../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.MilestonesElement#labels}labels(){api} to access [labels](Labels)
* {api:anychart.core.gantt.elements.MilestonesElement#edit}edit(){api} to access the [Live Edit](../Live_Edit_UI) settings
* {api:anychart.core.gantt.elements.MilestonesElement#rendering}rendering(){api} to access the [rendering](../Custom_Drawing) settings


```
// configure the height of milestones
chart.getTimeline().milestones().height(15);
```

If you need to create multiple milestones in one row, use an alternative way to visualize events – add [markers](Markers).

### Sample

In the sample below, the {api:anychart.core.ui.Timeline#tasks}tasks(){api}, {api:anychart.core.ui.Timeline#groupingTasks}groupingTasks(){api}, and {api:anychart.core.ui.Timeline#milestones}milestones(){api} methods of the timeline are used to access [regular tasks](#regular_tasks), [parent tasks](#parent_tasks), and [milestones](#milestones).

The **normal()** and **selected()** methods of each task type are combined with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} to configure the  [appearance settings](../../Appearance_Settings) in two [states](../../Common_Settings/Interactivity/States): **normal** and **selected**.

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

{sample :height 260}GANTT\_NEW\_Elements\_Project\_01{sample}

## Baselines (Planned)

**Baselines** are elements showing the **planned duration** of regular and parent [tasks](#tasks_\(actual\)). They are defined as instances of the {api:anychart.core.gantt.elements.BaselinesElement}anychart.core.gantt.elements.BaselinesElement{api} class. 

To configure baselines, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} and {api:anychart.core.ui.Timeline#baselines}baselines(){api} with the following methods:

* {api:anychart.core.gantt.elements.BaselinesElement#above}above(){api} to place baselines above tasks
* {api:anychart.core.gantt.elements.BaselinesElement#anchor}anchor(){api}, {api:anychart.core.gantt.elements.BaselinesElement#offset}offset(){api}, and {api:anychart.core.gantt.elements.BaselinesElement#position}position(){api} to set the anchor, offset, and position
* {api:anychart.core.gantt.elements.BaselinesElement#fill}fill(){api}, {api:anychart.core.gantt.elements.BaselinesElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.BaselinesElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.BaselinesElement#normal}normal(){api} and {api:anychart.core.gantt.elements.BaselinesElement#selected}selected(){api} to access [states](../../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.BaselinesElement#labels}labels(){api} to access [labels](Labels)
* {api:anychart.core.gantt.elements.BaselinesElement#edit}edit(){api} to access the [Live Edit](../Live_Edit_UI) settings
* {api:anychart.core.gantt.elements.BaselinesElement#rendering}rendering(){api} to access the [rendering](../Custom_Drawing) settings

Please note: by default, baselines are shown under tasks, but can be placed above them with the help of the {api:anychart.core.gantt.elements.BaselinesElement#above}above(){api} method.

To learn about data fields used to set baselines, see [Progress Chart: Baselines](../Project_Chart#baselines_\(planned\)).

In the sample below, the {api:anychart.core.ui.Timeline#baselines}baselines(){api} method is used to access baselines. The {api:anychart.core.gantt.elements.BaselinesElement#normal}normal(){api} and {api:anychart.core.gantt.elements.BaselinesElement#selected}selected(){api} methods are combined with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} to configure the  [appearance settings](../../Appearance_Settings) in two [states](../../Common_Settings/Interactivity/States): **normal** and **selected**. Finally, the {api:anychart.core.gantt.elements.BaselinesElement#above}above(){api} method places baselines above tasks.


```
// configure baselines
baselines = chart.getTimeline().baselines();
baselines.normal().fill("#dd2c00 0.3");
baselines.normal().stroke(null);
baselines.selected().fill("#ef6c00 0.3");
baselines.selected().stroke(null);
baselines.above(true);
```

{sample :height 260}GANTT\_NEW\_Elements\_Project\_02{sample}

## Progress Bars

**Progress bars** are elements showing the progress of regular and parent [tasks](#tasks_\(actual\)). They are defined as instances of the {api:anychart.core.gantt.elements.ProgressElement}anychart.core.gantt.elements.ProgressElement{api} class. 

To access progress bars, first access [regular](#regular_tasks) or [parent](#parent_tasks) tasks by combining {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} with {api:anychart.core.ui.Timeline#tasks}tasks(){api} or {api:anychart.core.ui.Timeline#groupingTasks}groupingTasks(){api}. Then call {api:?entry=progress}progress(){api}.

 To configure progress bars, use the following methods:

* {api:anychart.core.gantt.elements.ProgressElement#anchor}anchor(){api}, {api:anychart.core.gantt.elements.ProgressElement#offset}offset(){api}, and {api:anychart.core.gantt.elements.ProgressElement#position}position(){api} to set the anchor, offset, and position
* {api:anychart.core.gantt.elements.ProgressElement#fill}fill(){api}, {api:anychart.core.gantt.elements.ProgressElement#stroke}stroke(){api}, and {api:anychart.core.gantt.elements.ProgressElement#height}height(){api} to set the fill, stroke, and height
* {api:anychart.core.gantt.elements.ProgressElement#normal}normal(){api} and {api:anychart.core.gantt.elements.ProgressElement#selected}selected(){api} to access [states](../../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.ProgressElement#labels}labels(){api} to access [labels](Labels)
* {api:anychart.core.gantt.elements.ProgressElement#edit}edit(){api} to access the [Live Edit](../Live_Edit_UI) settings
* {api:anychart.core.gantt.elements.ProgressElement#rendering}rendering(){api} to access the [rendering](Custom_Drawing) settings

Please note: by default, progress is shown in [labels](Labels) of tasks. However, progress bars have their own labels. You can enable them and use to show progress or any other information.

To learn about data fields used to set progress bars, see [Project Chart: Progress Bars](../Project_Chart#progress_bars).

In the sample below, the {api:?entry=progress}progress(){api} method is used to access progress bars of both regular and parent tasks. The {api:anychart.core.gantt.elements.ProgressElement#normal}normal(){api} and {api:anychart.core.gantt.elements.ProgressElement#selected}selected(){api} methods are combined with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} to configure the  [appearance settings](../../Appearance_Settings) in two [states](../../Common_Settings/Interactivity/States): **normal** and **selected**.

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

{sample :height 220}GANTT\_NEW\_Elements\_Project\_03{sample}

## Connectors

**Connectors** are elements showing the dependencies between all [task](#tasks_\(actual\)) types. They are defined as instances of the {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api} class. 

To configure connectors, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} and {api:anychart.core.ui.Timeline#connectors}connectors(){api} with the following methods:

* {api:anychart.core.gantt.elements.ConnectorElement#fill}fill(){api} and {api:anychart.core.gantt.elements.ConnectorElement#stroke}stroke(){api} to set the fill and stroke
* {api:anychart.core.gantt.elements.ConnectorElement#normal}normal(){api} and {api:anychart.core.gantt.elements.ConnectorElement#selected}selected(){api} to access [states](../../Common_Settings/Interactivity/States)
* {api:anychart.core.gantt.elements.ConnectorElement#previewStroke}previewStroke(){api} to set the preview stroke in the [Live Edit](../Live_Edit_UI) mode

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

{sample :height 220}GANTT\_NEW\_Elements\_Project\_04{sample}