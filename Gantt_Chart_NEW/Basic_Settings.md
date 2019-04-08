{:index 8}
# Basic Settings

## Overview

...

## Appearance

This section explains how to configure the [appearance settings](../Appearance_Settings) of the Gantt chart and its components.

### Background

To configure the [background](../Appearance_Settings/Background) of the chart, call the {api:anychart.charts.Gantt#background}background(){api} method.

**Note:** You can apply different background settings to the data grid and timeline – see [Data Grid: Appearance](Data_Grid/Appearance) and [Timeline: Appearance](Timeline/Appearance).

This is how the background is adjusted:

```
// configure the background of the chart
chart.background("#64b5f6 0.2");
```

{sample :height 220}GANTT\_NEW\_Basic\_Settings\_01{sample}

### Rows and Columns

To configure the appearance of rows and columns, use these methods:

* {api:anychart.charts.Gantt#rowHoverFill}rowHoverFill(){api} to set the fill of rows when they are being hovered over
* {api:anychart.charts.Gantt#rowSelectedFill}rowSelectedFill(){api} to set the fill of rows when they are being selected
* {api:anychart.charts.Gantt#rowStroke}rowStroke(){api} to set the stroke of rows
* {api:anychart.charts.Gantt#columnStroke}columnStroke(){api} to set the stroke of columns

**Note:** These settings (except for the row stroke) can be applied separately to the data grid and timeline, as shown in the [Data Grid: Appearance](Data_Grid/Appearance) and [Timeline: Appearance](Timeline/Appearance) sections. Also, there you can find some other appearance settings available for rows.

Here is a Gantt chart with the appearance of rows and columns configured:

```
// configure the visual settings of rows and columns
chart.rowHoverFill("#ffd54f 0.3");
chart.rowSelectedFill("#ffd54f 0.3");
chart.rowStroke("0.5 #64b5f6");
chart.columnStroke("0.5 #64b5f6");
```

{sample :height 220}GANTT\_NEW\_Basic\_Settings\_02{sample}

### Data Grid

A data grid is a part of the Gantt chart where names of its elements are displayed. You can configure its background as well as the appearance of rows, columns, header, and buttons – see [Data Grid: Appearance](Data_Grid/Appearance) and [Data Grid: Buttons](Data_Grid/Buttons).

### Timeline

(?) A timeline is a part of the Gantt chart where its elements (time intervals) are displayed.  You can configure its background as well as the appearance of rows, columns, and header  – see [Timeline: Appearance](Timeline/Appearance) and [Timeline: Header](Timeline/Header#appearance).

### Elements

(?) Timeline elements are parts of the Gantt chart that are shown on the timeline and represent time intervals as well information related to them.

For different types of elements, different appearance (and other) settings are available. Read articles in the [Elements](Elements) section to learn more.

### Custom Drawing

The [Custom Drawing](Custom_Drawing) article explains how to replace default timeline elements with custom drawings.

## Title

With the help of the {api:anychart.charts.Gantt#title}title(){api} method, the [title](../Common_Settings/Title) of the Gantt chart is adjusted:

```
// enable and configure the chart title
var title = chart.title();
title.enabled(true);
title.text("Gantt Chart: Title");
title.fontColor("#64b5f6");
title.fontSize(18);
title.fontWeight(600);
title.padding(5);
```

{sample :height 255}GANTT\_NEW\_Basic\_Settings\_03{sample}

## Header and Row Height

To set the height of rows and the header, use {api:anychart.charts.Gantt#defaultRowHeight}defaultRowHeight(){api} and {api:anychart.charts.Gantt#headerHeight}headerHeight(){api}.

**Note 1:** The `rowHeight` data field allows setting the height of an indvidual row. Levels of the header can be also adjusted individually, as explained in [Header: Level Height](Timeline/Header#level_height).

**Note 2:** Timeline elements automatically adjust to the row height. However, you can set their heights manually – see articles about different types of elements in the [Elements](Elements) section.

In the sample below, there is a Gantt chart with the row and header height configured:

```
// set the row height
chart.defaultRowHeight(35);
// set the header height
chart.headerHeight(105);
```

{sample :height 360}GANTT\_NEW\_Basic\_Settings\_04{sample}

## Splitter

To set the default position of the splitter between the [data grid](Data_Grid) and the [timeline](Timeline), call the {api:anychart.charts.Gantt#splitterPosition}splitterPosition(){api} method.

**Note:** The width of the timeline automatically adjusts to the area outlined by the splitter. The width of the data grid is not affected – it is defined only by the sum of its [columns' widths](Data_Grid/Columns#width).

In the following sample, there is a Gantt chart with the splitter position configured:

```
// set the position of the splitter
chart.splitterPosition("50%");
```

{sample :height 220}GANTT\_NEW\_Basic\_Settings\_05{sample}

## Navigation

This section explains how to draw a Gantt chart with certain navigation settings – with items expanded or collapsed, timeline scrolled, etc.

**Please note that all the methods listed here work only after the chart is drawn.**

### Expand / Collapse

If there are hierarchical relationships between data items, parent [tasks](Project_Chart#tasks_\(actual\)) or [resources](Resource_Chart#periods_and_resources) as well as their labels on the data grid can be expanded or collapsed with the help of data grid buttons or special methods. By default, Gantt charts are drawn with all elements expanded. 

**Note:** See the [Data Grid: Buttons](Data_Grid/Buttons) section to learn how to configure buttons.

Use the following methods to expand or collapse elements:

* {api:anychart.charts.Gantt#collapseAll}collapseAll(){api} to collapse all tasks
* {api:anychart.charts.Gantt#expandAll}expandAll(){api} to expand all tasks
* {api:anychart.charts.Gantt#collapseTask}collapseTask(){api} to collapse a task with a given id
* {api:anychart.charts.Gantt#expandTask}expandTask(){api} to expand a task with a given id

```
// expand all tasks
chart.expandAll();  
```

```
// collapse the given task
chart.collapseTask("2");  
```

{sample :height 320}GANTT\_NEW\_Basic\_Settings\_06{sample}

In addition to the {api:anychart.charts.Gantt#collapseTask}collapseTask(){api} and {api:anychart.charts.Gantt#expandTask}expandTask(){api} methods, you can collapse or expand an individual element by specifying the `true` / `false` value in the `collapsed` data field:

In the following sample, the second root task (*PR Campaign*) is collapsed by default:

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2018-01-25",
    actualEnd: "2018-03-10",
    children: [
      {
        id: "1_2",
        name: "Analysis",
        actualStart: "2018-01-25",
        actualEnd: "2018-02-08"
      },
      {
        id: "1_3",
        name: "Design",
        actualStart: "2018-02-04",
        actualEnd: "2018-02-14"
      },
      {
        id: "1_4",
        name: "Meeting",
        actualStart: "2018-02-15",
        actualEnd: "2018-02-15"
      },
      {
        id: "1_5",
        name: "Implementation",
        actualStart: "2018-02-15",
        actualEnd: "2018-02-27"
      },
      {
        id: "1_6",
        name: "Testing",
        actualStart: "2018-02-28",
        actualEnd: "2018-03-10"
      }
  ]},
  { 
    id: "2",
    name: "PR Campaign",
    actualStart: "2018-02-15",
    actualEnd: "2018-03-22",
    collapsed: true,
    children: [
      {
        id: "2_1",
        name: "Planning",
        actualStart: "2018-02-15",
        actualEnd: "2018-03-10"
      },
      {
        id: "2_2",
        name: "Promoting",
        actualStart: "2018-03-11",
        actualEnd: "2018-03-22"
      }
  ]}
];
    
// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
chart = anychart.ganttProject();

// set the data
chart.data(treeData);
```

{sample :height 280}GANTT\_NEW\_Basic\_Settings\_07{sample}

### Fit to Width

* {api:anychart.charts.Gantt#fitAll}fitAll(){api} – all [elements](Elements)
* {api:anychart.charts.Gantt#fitToTask}fitToTask(){api} – a particular element
* что fitToTask() не работает на маилстоунах, никак не комментировать
* (?) fitToTask() не работает у Resource


```
// fit elements to the width of the timeline
chart.fitAll();
```

```
// fit the given task to the width of the timeline
chart.fitToTask("1_2");
}
```

{sample :height 260}GANTT\_NEW\_Basic\_Settings\_08{sample}

### Zoom

misc:

* {api:anychart.charts.Gantt#zoomIn}zoomIn(){api}
* {api:anychart.charts.Gantt#zoomOut}zoomOut(){api}
* {api:anychart.charts.Gantt#zoomTo}zoomTo(){api}

zoomTo():
* range of dates / range of time units
* range of units --> three parameters: unit, count, anchor

units:

* {api:anychart.enums.Interval}anychart.enums.Interval{api}
* `"millisecond"`
* `"second"`
* `"minute"`
* `"hour"`
* `"day"`
* `"week"`
* `"third-of-month"`
* `"month"`
* `"quarter"`
* `"semester"`
* `"year"`

anchors:

* {api:anychart.enums.GanttRangeAnchor}anychart.enums.GanttRangeAnchor{api}
* `"first-date"`
* `"first-visible-date"`
* `"last-date"`
* `"last-visible-date"`


```
// zoom the timeline in
chart.zoomIn(2);
```

```
// zoom the timeline to the given dates
chart.zoomTo(Date.UTC(2018, 1, 3), Date.UTC(2018, 1, 6));
```

```
// zoom the timeline to the given units
chart.zoomTo("week", 2, "first-date");
```

{sample :height 325}GANTT\_NEW\_Basic\_Settings\_09{sample}

### Scroll

* {api:anychart.charts.Gantt#scrollTo}scrollTo(){api}
* {api:anychart.charts.Gantt#scrollToRow}scrollToRow(){api}
* {api:anychart.charts.Gantt#scrollToEnd}scrollToEnd(){api} – упомянуть, но не описывать


```
// scroll the chart to the given row
chart.scrollToRow(6);
```

```
// scroll the chart to the given value
chart.scrollTo(110);
```

{sample :height 255}GANTT\_NEW\_Basic\_Settings\_10{sample}