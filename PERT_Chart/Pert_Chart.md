{:index 3}
# PERT Chart

## Overview

A PERT Chart (also known as a PERT Diagram) is a chart type realizes the Project Evaluation and Review Technique technology. It is applied mostly in large-scale projects where time is the major factor and allows to schedule a project without knowing precisely the details and durations of all activities. Find more information about PERT technology and using it in [PERT Overview](Overview).

This article explains how to create a basic Pert Chart as well as configure settings that are specific to the type. 

Pert Chart Data should be arranged as array of objects, where ID's of the tasks are necessary to be created. Extra data can be added if necessary. Read more about setting and managing the data in the [PERT Data](Data) article.

See also: <a href="https://www.anychart.com/chartopedia/chart-types/pert-chart/" target="_blank">Chartopedia: PERT Chart</a>

## Quick Start

To create a new Pert Chart, use the {api:anychart#pert}anychart.pert(){api} chart constructor. You can set the data directly from this chart constructor or separately.

The following sample demonstrates how a basic Pert Chart is created:

```
// create data
var data = [
  {id: "1", duration: 1, name: "Task A"},
  {id: "2", duration: 3, name: "Task B"},
  {id: "3", duration: 3, name: "Task C"},
  {id: "4", duration: 1, name: "Task D"},
  {id: "5", duration: 2, name: "Task AD", dependsOn: ["1", "4"]},
  {id: "6", duration: 2, name: "Task BC", dependsOn: ["2", "3"]}
];

// create a chart
var chart = anychart.pert();

// set chart data
chart.data(data, "asTable");

// set the title of the chart
chart.title("PERT Chart");

// set the container id for the chart
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}Pert\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Pert Chart (for example, some interactivity settings).

Read the overview of general settings: [General Settings](../Basic_Charts/General_Settings).

## Special Settings

### Interactivity

Besides interactivity settings common for all charts, there is something special about PERT Charts events. The **pointsSelect** event returns such fields as `selectedMilestones` and `selectedTasks`, both fields contain all information about the milestones and tasks selected. 

The following sample uses this event. Select milestones or tasks and watch the chart title.

```
chart.listen("pointsselect", function(e){
        for (var i = 0; i < e.selectedMilestones.length; i++){
            if (e.selectedMilestones[i].isCritical === true) {
                chart.title("This milestone belongs to the critical path");
            }
            else {
                chart.title("This milestone does not belong to the critical path");
            }
        }
        for (var i = 0; i < e.selectedTasks.length; i++){
            if (e.selectedTasks[i].isCritical === true) {
                chart.title("This task belongs to the critical path");
            }
            else {
                chart.title("This task does not belong to the critical path");
            }
        }
        }
    );
```

{sample}Pert\_Chart\_02{sample}

### Appearance

There are two basic classes of elements in PERT: milestones and tasks. Also there is a critical path consists of both tasks and milestones.

Learn more about colors and visual appearance of the chart from the [Appearance Settings](../Appearance_Settings) section.

### Tasks 

Tasks are controlled using the {api:anychart.charts.Pert#tasks}tasks(){api} method, spacing between tasks by the {api:anychart.charts.Pert#horizontalSpacing}horizontalSpacing(){api} and the {api:anychart.charts.Pert#verticalSpacing}verticalSpacing(){api} methods.

Here is a full list of methods used to configure coloring settings of the tasks in Pert Charts:

* {api:anychart.core.pert.Tasks#color}color(){api}, {api:anychart.core.pert.Tasks#fill}fill(){api}, {api:anychart.core.pert.Tasks#stroke}stroke(){api} set the color, fill and stroke

* {api:anychart.core.pert.Tasks#hoverFill}hoverFill(){api}, {api:anychart.core.pert.Tasks#hoverStroke}hoverStroke(){api} configure the visual settings on hover

* {api:anychart.core.pert.Tasks#selectFill}selectFill(){api}, {api:anychart.core.pert.Tasks#selectStroke}selectStroke(){api} configure tasks' visual settings on select

In the sample below, there is a Pert Chart with some of the appearance settings configured:


```
// set vertical spacing between tasks
chart.verticalSpacing("20%");
// set tasks colors
tasks.stroke("#519790");
tasks.fill("#519790");
tasks.hoverStroke("#519790", 0.7);
tasks.hoverFill("#519790", 0.7);
tasks.selectStroke("#519790", 2);
tasks.selectFill("#519790", 2);
```

{sample}Pert\_Settings\_01{sample}

### Duration calculation

When the data is arranged, it is possible to set the exact duration for each task and the whole path. However, it is quite hard to evaluate time bounds of activities. To make an approximate calculation of the path duration, it is better to use three values: optimistic time (the shortest term which is necessary for an activity to be accomplished), pessimistic time (the longest term which is necessary for an activity to be accomplished) and the most likely time for the activity completion. There is a default formula used for the calculation, which you can find in the [Terminology article](Terminology/#expected_time). To rearrange the formula, use the {api:anychart.charts.Pert#expectedTimeCalculator}expectedTimeCalculator(){api} method.

```
// Set expected time
chart.expectedTimeCalculator(function () {
  return (this.pessimistic + this.optimistic + this.mostLikely)/3;
});
```

This method calculates the duration for each task separately, and the {api:anychart.charts.Pert#getStat}getStat(){api} method should be used to get the duration of the whole critical path.

```
// get project duration
var duration = chart.getStat("pertChartProjectDuration");

// set the chart title to show the duration
chart.title("The duration equals " + duration);
```

{sample}Pert\_Settings\_01\_1{sample}

### Dummy Tasks

Dummy tasks are visual representations of dependencies between real tasks. Dummy task does not exist as a real task, does not affect the project duration (the duration of a dummy task equals 0) and connects milestones of real tasks for better visualization.

Dummy tasks have their own methods for appearance configuration: {api:anychart.core.pert.Tasks#dummyFill}dummyFill(){api} and {api:anychart.core.pert.Tasks#dummyStroke}dummyStroke(){api}. There are no methods for dummy tasks in hover and selected states as they are not interactive. 

```
// set dummy tasks colors
tasks.dummyFill("#888");
tasks.dummyStroke("#000", 0.5, "5 2");
```

{sample}Pert\_Settings\_02{sample}

### Earliest and latest

Earliest and latest start and finish values are automatically calculated from the optimistic, pessimistic and most likely values or from duration value. These values are a good help in planning, as they show the most favorable and the worst time frames so they can be noticed in time and changed if critical.

The following sample shows how to demonstrate those values to watch them:

```
// set labels with earliest and latest values
tasks.upperLabels().format("ES: {%earliestStart}, LS: {%latestStart}");
tasks.lowerLabels().format("EF: {%earliestFinish}, LF: {%latestFinish}");
```

{sample}Pert\_Settings\_03{sample}

### Slacks

There is a parameter all tasks named *slack*. Slack is a time period, which is actually wasted due to some reasons. For example, when a task can start only after another several tasks finish, the difference between the shortest task-predecessor and others are slacks. When slacks are detected, the best decision that can be made is to redistribute the resources from the task with shorter duration to the task with longer one.

The following example demonstrates the efficiency of the resources distribution due to the slacks existence.

```
// set the slacks to the tasks labels
chart.tasks().lowerLabels().format(function(e){
    return "Slack: " + e.slack;
});
```

{sample}Pert\_Settings\_04{sample}

### Milestones 

Here is a full list of methods used to configure visual coloring settings for the milestones of a Pert Chart:

* {api:anychart.core.pert.Milestones#color}color(){api}, {api:anychart.core.pert.Milestones#fill}fill(){api}, {api:anychart.core.pert.Milestones#stroke}stroke(){api} set the color, fill and stroke

* {api:anychart.core.pert.Milestones#hoverFill}hoverFill(){api}, {api:anychart.core.pert.Milestones#hoverStroke}hoverStroke(){api} configure the visual settings on hover

* {api:anychart.core.pert.Milestones#selectFill}selectFill(){api}, {api:anychart.core.pert.Milestones#selectStroke}selectStroke(){api} configure milestones' visual settings on select

In the sample below, there is a Pert Chart with some of the appearance settings configured:

```
// set colors for milestones
milestones = chart.milestones();
milestones.fill("#00acc1", 0.7);
milestones.hoverFill("#80cbc4");
milestones.selectFill("#00acc1");
milestones.stroke("#90caf9", 1);
milestones.hoverStroke("#90caf9", 2);
milestones.selectStroke("#90caf9", 4);
```

{sample}Pert\_Settings\_05{sample}

### Critical Path 

Critical Path consists of milestones and tasks. If nothing special is set for the critical path, the visual settings of those elements will be taken from defaults. If you prefer to emphasize the critical path by changing the visual settings for its components, use the {api:anychart.charts.Pert#criticalPath}criticalPath(){api} method.

```
// set critical path milestones colors
milestones = chart.criticalPath().milestones();
milestones.fill("#ffab91");
milestones.hoverFill("#ff6e40");
milestones.selectFill("#ff6e40");
milestones.labels().fontColor("#86614e");
// set critical tasks stroke
tasks = chart.criticalPath().tasks();
tasks.stroke("#ffab91");
```

{sample}Pert\_Settings\_06{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

Though, besides the colors and spacing, there are some special settings for the tasks' labels. Due to a specific shape, tasks have upper and lower labels, and it is possible to adjust both. Use the {api:anychart.core.pert.Tasks#upperLabels}upperLabels(){api} and {api:anychart.core.pert.Tasks#lowerLabels}lowerLabels(){api} methods for it.

```
// set upper labels padding and font size
chart.tasks().upperLabels().padding(5);
chart.tasks().upperLabels().fontSize(20);
```

{sample}Pert\_Settings\_07{sample}

It is possible to format the labels content using the {api:anychart.core.ui.LabelsFactory#format}format(){api} method. The following sample demonstrates formatting the milestones' labels.

```
chart.milestones().labels().format(function (){
    if (this.creator) {
        var result ="";
        var comma, i;
            
        for (i = 0; i < this.predecessors.length; i++){
            comma = i == this.predecessors.length - 1 ? "" : ",";
            result += this.predecessors[i].get("name") + comma;
        }
        result += " → ";
        
        for (i = 0; i < this.successors.length; i++){
            comma = i == this.successors.length - 1 ? "" : ",";
            result += this.successors[i].get("name") + comma;
        }
        return result;
        
    } else {
        return this.isStart ? "S" : "F";
    }
});
```

{sample}Pert\_Settings\_08{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Statistics

There are two statistic values can be got from the Pert Chart: standard deviation and the critical path duration. Use {api:anychart.charts.Pert#getStat}getStat(){api} method for both.

```
// get both statistic values when rendered
chart.listen("chartdraw", function (){
    deviation = chart.getStat("pertChartCriticalPathStandardDeviation");
    duration = chart.getStat("pertChartProjectDuration");
    chart.title("The critical path duration makes " + duration.toFixed(2) + 
    " units \n Standard deviation for this project is " + deviation.toFixed(2) + " units");
});
```
{sample}Pert\_Settings\_09{sample}