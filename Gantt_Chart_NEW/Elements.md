{:index 11}
# Elements

## Overview

* elements are shown on the [Timeline](Timeline)
* the [Project](#project_chart) and [Resource](#resource_chart) charts: different types of elements are available
* all elements of one type: [tasks](#tasks_\(actual\)), [baselines](#baselines_\(planned\)), [progress bars](#progress_bars), [connectors](#connectors), [periods](#periods)
* [all elements](#all_elements) at once
* [individual elements](#individual_elements)
* [markers](#markers)
* [sample](#sample)

## Project Chart

* [Project Chart](Project_Chart)

### Tasks (Actual)

#### Regular Tasks

* {api:anychart.core.gantt.elements.TasksElement}anychart.core.gantt.elements.TasksElement{api}
* [Project Chart: Tasks](Project_Chart#tasks_\(actual\))
* [Progress Bars](#progress_bars)
* [sample](#sample)

#### Parent Tasks

* {api:anychart.core.gantt.elements.GroupingTasksElement}anychart.core.gantt.elements.GroupingTasksElement{api}
* [Project Chart: Tasks](Project_Chart#tasks_\(actual\))
* [Progress Bars](#progress_bars)
* [sample](#sample)

#### Milestones

* {api:anychart.core.gantt.elements.MilestonesElement}anychart.core.gantt.elements.MilestonesElement{api}
* [Project Chart: Tasks](Project_Chart#tasks_\(actual\))
* [Markers](#markers)
* [sample](#sample)

#### Sample

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

* {api:anychart.core.gantt.elements.BaselinesElement}anychart.core.gantt.elements.BaselinesElement{api}
* [Progress Chart: Baselines](Project_Chart#baselines_\(planned\))


```
// configure baselines
baselines = chart.getTimeline().baselines();
baselines.normal().fill("#dd2c00 0.3");
baselines.normal().stroke(null);
baselines.selected().fill("#ef6c00 0.3");
baselines.selected().stroke(null);
```

{sample :height 260}GANTT\_NEW\_Elements\_02{sample}

### Progress Bars

* {api:anychart.core.gantt.elements.ProgressElement}anychart.core.gantt.elements.ProgressElement{api}
* два метода progress() - [basic](#basic_tasks) and [parent](#parent_tasks) tasks
* [Progress Chart: Progress Bars](Project_Chart#progress_bars)
* [Regular Tasks](#regular_tasks)
* [Parent Tasks](#parent_tasks)


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

* {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api}
* [Progress Chart: Connectors](Project_Chart#connectors)


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

* [Resource Chart](Resource_Chart)

### Periods

* {api:anychart.core.gantt.elements.PeriodsElement}anychart.core.gantt.elements.PeriodsElement{api}
* [Resource Chart: Periods](Resource_Chart#periods)


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

* {api:anychart.core.gantt.elements.TimelineElement}anychart.core.gantt.elements.TimelineElement{api}
* [Project Chart](#project_chart): everything except for [connectors](#connectors)
* [Resource Chart](#resource_chart): [Periods](#periods)


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

* `"actual"`
* `"baseline"`
* `"progress"`
* `"connector"`
* + объяснить, как настраивать отдельные периоды


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

* {api:anychart.core.ui.LabelsFactory}anychart.core.ui.LabelsFactory{api}
* метод labels() таймлайна
* три метода labels() для трех типов тасков
* ресурс: все равно, использовать метод таймлайна или периодов


### Tokens

Project:

* `{%actualStart}`
* `{%actualEnd}`
* `{%baselineStart}`
* `{%baselineEnd}`
* (?) `{%connectorType}`
* `{%id}`
* `{%name}`
* `{%progress}`
* (?) `{%progressValue}`

Resource:

* `{%id}`
* `{%name}`
* `{%start}`
* `{%end}`


```
var timeline = chart.getTimeline();

// configure timeline labels
timeline.labels().fontColor("red");
timeline.labels().fontWeight(600);

// configure task labels
timeline.tasks().labels().format("{%name}: {%progress}");

// configure parent task labels
timeline.groupingTasks().labels().format("{%name}");

// configure milestone labels
timeline.milestones().labels().format(
    "{%custom_field} {%actualStart}{dateTimeFormat:dd MMM}"
);
```

{sample :height 240}GANTT\_NEW\_Elements\_09{sample}

```
// configure period labels
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

* метод getData() или поле `item` + метод get()?


```
var timeline = chart.getTimeline();

// configure timeline labels
timeline.labels().fontWeight(600);

// configure task labels
timeline.tasks().labels().useHtml(true);
timeline.tasks().labels().format(function() {
  if (this.progress == 1) {
    return "<span style='color:red'>" + this.name + ": COMPLETE</span>";
  } else {
    return this.name + ": " + this.progress * 100 + "%";
  }
});

// configure parent task labels
timeline.groupingTasks().labels().format(function() {
  var duration = (this.actualEnd - this.actualStart) / 1000 / 3600 / 24;
  return this.name + ": " + duration + " days";
});

// configure milestone labels
timeline.milestones().labels().format(function() {
  var relatedTaskId = this.getData("custom_field");
  var relatedTaskItem = treeData.search("id", relatedTaskId);
  var relatedTaskName = relatedTaskItem.get("name");
  return relatedTaskName + " Review";
});
```

{sample :height 240}GANTT\_NEW\_Elements\_11{sample}

```
// configure period labels
var periodLabels = chart.getTimeline().periods().labels();
periodLabels.enabled(true);
periodLabels.fontColor("#990000");
periodLabels.fontWeight(600);
periodLabels.format(function() {
  var duration = (this.end - this.start) / 1000 / 3600 / 24;
  return this.getData("custom_field") + " " + duration + " days";
});
```

{sample :height 160}GANTT\_NEW\_Elements\_12{sample}

## Markers

* могут быть добавлены к заданию любого типа
* {api:anychart.core.ui.Timeline#markers}markers(){api}
* сослаться куда-то, где приведены все настройки
* [Milestones](#milestones)


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
chart.getTimeline().markers().fill("red");
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
chart.getTimeline().markers().fill("red");
chart.getTimeline().markers().stroke("black");
```

{sample :height 200}GANTT\_NEW\_Elements\_14{sample}