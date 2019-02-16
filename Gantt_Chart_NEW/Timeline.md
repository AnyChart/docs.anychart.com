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
* [header](#header)
* уровни нужно задавать в порядке от самого мелкого к самому крупному

{sample :height 220}GANTT\_NEW\_Timeline\_02{sample}

{sample :height 220}GANTT\_NEW\_Timeline\_03{sample}

## Header

* {api:anychart.core.gantt.TimeLineHeader}anychart.core.gantt.TimeLineHeader{api}
* [scale](#scale)
* [tokens](../../Common_Settings/Text_Formatters#string_tokens)
* [formatting functions](../Common_Settings/Text_Formatters#formatting_functions)
* [Project Gantt](Project_Chart)
* [Resource Gantt](Resource_Chart)

{sample :height 220}GANTT\_NEW\_Timeline\_04{sample}

{sample :height 220}GANTT\_NEW\_Timeline\_05{sample}

{sample :height 220}GANTT\_NEW\_Timeline\_06{sample}

## Timeline Markers

### Line

* {api:anychart.core.axisMarkers.GanttLine}anychart.core.axisMarkers.GanttLine{api}
* {api:anychart.enums.GanttDateTimeMarkers}anychart.enums.GanttDateTimeMarkers{api}

{sample :height 220}GANTT\_NEW\_Timeline\_07{sample}

### Range

* {api:anychart.core.axisMarkers.GanttRange}anychart.core.axisMarkers.GanttRange{api}


{sample :height 220}GANTT\_NEW\_Timeline\_08{sample}

### Text

{api:anychart.core.axisMarkers.GanttText}anychart.core.axisMarkers.GanttText{api}


{sample :height 220}GANTT\_NEW\_Timeline\_09{sample}

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

{sample :height 220}GANTT\_NEW\_Timeline\_10{sample}

{sample :height 220}GANTT\_NEW\_Timeline\_11{sample}

### Formatting Functions

{sample :height 220}GANTT\_NEW\_Timeline\_12{sample}

{sample :height 220}GANTT\_NEW\_Timeline\_13{sample}