{:index 10}
# Timeline

## Overview

* {api:anychart.core.ui.Timeline}anychart.core.ui.Timeline{api}
* [Project Gantt](Project_Chart)
* [Resource Gantt](Resource_Chart)
* (?)

## Appearance

* Basic Settings: Rows and Columns

{sample :height 220}GANTT\_NEW\_Timeline\_01{sample}

## Scale

* {api:anychart.scales.GanttDateTime}anychart.scales.GanttDateTime{api}
* {api:anychart.scales.GanttDateTime.ZoomLevelsSettings}anychart.scales.GanttDateTime.ZoomLevelsSettings{api}
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper}anychart.core.gantt.TimeLineHeader.LevelWrapper{api}
* [header](#header)
* уровни нужно задавать в порядке от самого мелкого к самому крупному

{sample :height 220}GANTT\_NEW\_Timeline\_02{sample}

{sample :height 220}GANTT\_NEW\_Timeline\_03{sample}

## Header

methods:

* {api:anychart.core.gantt.TimeLineHeader}anychart.core.gantt.TimeLineHeader{api}
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper}anychart.core.gantt.TimeLineHeader.LevelWrapper{api}
* [scale](#scale)
* [Basic Settings: Header and Row Height](Basic_Settings#header_and_row_height)
* [tokens](../../Common_Settings/Text_Formatters#string_tokens)
* [formatting functions](../Common_Settings/Text_Formatters#formatting_functions)
* [Project Gantt](Project_Chart)
* [Resource Gantt](Resource_Chart)

methods:

* enabled()
* fill(), stroke()
* fontColor(), fontDecoration(), fontFamily(), fontOpacity(), fontSize(), fontStyle(), fontVariant(), fontWeight()
* format()
* levelHeight(), level()

{sample :height 220}GANTT\_NEW\_Timeline\_04{sample}

{sample :height 220}GANTT\_NEW\_Timeline\_05{sample}

## Timeline Markers

### Line

* {api:anychart.core.axisMarkers.GanttLine}anychart.core.axisMarkers.GanttLine{api}
* {api:anychart.enums.GanttDateTimeMarkers}anychart.enums.GanttDateTimeMarkers{api}
* можно задать как объект

{sample :height 220}GANTT\_NEW\_Timeline\_06{sample}

### Range

* {api:anychart.core.axisMarkers.GanttRange}anychart.core.axisMarkers.GanttRange{api}
* {api:anychart.enums.GanttDateTimeMarkers}anychart.enums.GanttDateTimeMarkers{api}
* можно задать как объект

{sample :height 220}GANTT\_NEW\_Timeline\_07{sample}

### Text

{api:anychart.core.axisMarkers.GanttText}anychart.core.axisMarkers.GanttText{api}
* {api:anychart.enums.GanttDateTimeMarkers}anychart.enums.GanttDateTimeMarkers{api}
* можно задать как объект

{sample :height 220}GANTT\_NEW\_Timeline\_08{sample}

## Labels

* [Elements: Labels](Elements#labels)

## Tooltips

* {api:anychart.core.ui.Tooltip}anychart.core.ui.Tooltip{api}
* [tokens](../../Common_Settings/Text_Formatters#string_tokens)
* [formatting functions](../Common_Settings/Text_Formatters#formatting_functions)
* [Project Gantt](Project_Chart)
* [Resource Gantt](Resource_Chart)

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed a timeline or data grid row is hovered over.

To learn how to adjust data grid tooltips, see [Data Grid: Tooltips](Data_Grid#tooltips).

### Tokens

{sample :height 220}GANTT\_NEW\_Timeline\_09{sample}

{sample :height 160}GANTT\_NEW\_Timeline\_10{sample}

### Formatting Functions

{sample :height 220}GANTT\_NEW\_Timeline\_11{sample}

{sample :height 160}GANTT\_NEW\_Timeline\_12{sample}