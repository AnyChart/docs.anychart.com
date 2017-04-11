{:index 3}
PERT Chart
===========

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Labels](#labels)
  * [Tooltips](#tooltips)



## Overview

The PERT Chart (also known as PERT Diagram) is a chart type realizes the Project Evaluation and Review Technique technology. It is applied mostly in large-scale projects where time is the major factor and allows to schedule a project without knowing precisely the details and durations of all activities. Find more information about PERT technology and using it in [PERT Overview](Overview).

This article explains how to create a basic Pert Chart as well as configure settings that are specific to the type. 

Pert Chart Data should be an array of arrays or as array of objects, where ID's of the tasks are necessary to be created. Extra data can be added if necessary. Read more about setting and managing the data in the [PERT Data](Data) article.

See also: <a href="http://www.anychart.com/chartopedia/chart-types/pert-chart/" target="_blank">Chartopedia: PERT Chart</a>

## Quick Start

To create a new Pert Chart, use the {api:anychart#pert}anychart.pert(){api} chart constructor. You can set the data directly from this chart constructor or separately.

The following sample demonstrates how a basic Pert Chart is created:

```
// create a data set
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

In AnyChart there are many settings that are configured in the same way for all chart types, including the Pert Chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

There are two basic classes of elements in PERT: milestones and tasks. Also there is a critical path consists of both tasks and milestones. All of them have visual settings, which can be found in the [Pert Settings Article](Settings).

Learn more about colors and visual appearance of the chart from the [Appearance Settings](../Appearance_Settings) section.

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available. There are some special settings for the PERT Chart labels, which can be found in the [PERT Labels Settings](Settings#labels) article.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.