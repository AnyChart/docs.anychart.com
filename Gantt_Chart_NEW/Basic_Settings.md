{:index 8}
# Basic Settings

## Overview

## Appearance

* [appearance settings](../Appearance_Settings)

### Background

* [background](../Appearance_Settings/Background)
* {api:anychart.charts.Gantt#background}background(){api}


```
// configure the background of the chart
chart.background("#64b5f6 0.2");
```

{sample :height 220}GANTT\_NEW\_Basic\_Settings\_01{sample}

### Rows and Columns

* {api:anychart.charts.Gantt#rowHoverFill}rowHoverFill(){api}
* {api:anychart.charts.Gantt#rowSelectedFill}rowSelectedFill(){api}
* {api:anychart.charts.Gantt#rowStroke}rowStroke(){api}
* {api:anychart.charts.Gantt#columnStroke}columnStroke(){api}
* [Data Grid: Appearance](Data_Grid/Appearance)
* [Timeline: Appearance](Timeline/Appearance)


```
// configure the visual settings of rows and columns
chart.rowHoverFill("#ffd54f 0.3");
chart.rowSelectedFill("#ffd54f 0.3");
chart.rowStroke("0.5 #64b5f6");
chart.columnStroke("0.5 #64b5f6");
```

{sample :height 220}GANTT\_NEW\_Basic\_Settings\_02{sample}

### Data Grid

The data grid is the part of the Gantt chart where names of its elements are displayed...

* [Data Grid: Appearance](Data_Grid/Appearance)

### Timeline

(?) The timeline is the part of the Gantt chart where its elements are displayed...

* [Timeline: Appearance](Timeline/Appearance)

### Elements

(?) Timeline elements are the parts of the Gantt chart that are shown on the timeline.

On the Project Gantt chart and Resource Gantt chart, different types of elements are displayed, and for each element type slightly different settings are available.

You can configure the appearance (along with other settings) of...

misc:
* [Elements](Elements)
* [all elements](Elements/All_Elements)
* [inividual elements](Elements/Individual_Elements)

Project Chart:

* [tasks](Elements/Project_Chart#tasks_\(actual\))
* [baselines](Elements/Project_Chart#baselines)
* [progress bars](Elements/Project_Chart#progress_bars)
* [connectors](Elements/Project_Chart#connectors)

Resource Chart:

* [periods](Elements/Resource_Chart#periods)

### Custom Drawing

* [Custom Drawing](Custom_Drawing)

## Title

* [title](../Common_Settings/Title)
* {api:anychart.charts.Gantt#title}title(){api}


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

* {api:anychart.charts.Gantt#headerHeight}headerHeight(){api}
* {api:anychart.charts.Gantt#defaultRowHeight}defaultRowHeight(){api}
* [Header: Level Height](Timeline/Header#level_height)
* (?) примеч про индивид таск: поле rowHeight


```
// set the row height
chart.defaultRowHeight(35);
// set the header height
chart.headerHeight(105);
```

{sample :height 360}GANTT\_NEW\_Basic\_Settings\_04{sample}

## Splitter

* {api:anychart.charts.Gantt#splitterPosition}splitterPosition(){api}
* the width of the [timeline](Timeline) automatically adjusts to the area outlined by the splitter
* ...allows showing more or less of the [data grid](Data_Grid)
* Please note that the width of the data grid is defined by the sum of its [columns' widths](Data_Grid/Columns#width).


```
// set the position of the splitter
chart.splitterPosition("50%");
```

{sample :height 220}GANTT\_NEW\_Basic\_Settings\_05{sample}

## Navigation

* методы в этом разделе работают только после рисования чарта

### Expand / Collapse

If there are hierarchical relationships between data items...

...expand or collapse parent [tasks](Project_Chart#tasks_\(actual\)) or [resources](Resource_Chart#periods_and_resources) as well as their labels on the data grid...

By default, the chart is drawn with all elements expanded...

misc:

* [Columns: Buttons](Data_Grid/Columns#buttons)
* [Buttons](Data_Grid/Buttons) 

methods:

* By default, the chart is drawn with all elements expanded...
* {api:anychart.charts.Gantt#collapseAll}collapseAll(){api}
* {api:anychart.charts.Gantt#expandAll}expandAll(){api}
* {api:anychart.charts.Gantt#collapseTask}collapseTask(){api}
* {api:anychart.charts.Gantt#expandTask}expandTask(){api}


```
// expand all tasks
chart.expandAll();  
```

{sample :height 320}GANTT\_NEW\_Basic\_Settings\_06{sample}

* `collapsed`


```
// collapse the given task
chart.collapseTask("2");  
```

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
* `"year"`
* `"semester"`
* `"quarter"`
* `"month"`
* `"third-of-month"`
* `"week"`
* `"day"`
* `"hour"`
* `"minute"`
* `"second"`
* `"millisecond"`

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