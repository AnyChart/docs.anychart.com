Gantt Interactivity

* [Overview](#overview)
* [Default Interactivity](#default_interactivity)
 * [Tooltips](#hover)
 * [Hover](#hover)
 * [Select](#select)
 * [Other features](#other_features)
* [Altering Interactivity](#altering_interactivity)
 * [Tooltips](#hover)
 * [Hover](#hover)
 * [Select](#select)
 * [DataGrid and Timeline adjusting] (#datagrid_and_timeline_adjusting)
* [Handling chart events](#handling_chart_events)
* [Editing mode](#editing_mode)
 
 
# Overview

AnyGantt offers you a wide variety of options that allow to make your gantt charts really interactive.

You can control appearance of elements depending on user action - use style states for that (described in "Appearance and Styles" section).
You can define a set of actions that should be performed when user clicks some element on the chart. Action can open the certain web page, call an external function (JavaScript, for example).
AnyGantt dispatches events that can be handled in an external environment (JavaScript, for example).
External environment can call AnyGantt Functions to load data to the gantt chart or change task or periods details.

# Default Interactivity

## Tooltips

As in the basic charts, Gantt tooltips are designed to show the main information about the item in short. However, Gantt tooltips are special because of the Gantt diagrams itself. Simple charts' tooltips usually show the namve of the item and its value (if it exists), but in Gantts, the basic tooltip, besides the name of the item (which is usually also written in the Data Grid section), will show the start and end date/time and the duration of the hovered item (process). Note that there is a difference between Project Gantts and Resource Gantts tooltips: 

{sample}Gantt\_Interactivity\_01{sample}

{sample}Gantt\_Interactivity\_02{sample}

As you can notice, the Resource Gantt tooltips show the main duration of the process when this process name is hovered in Data Grid, and the duration of a some piece of process when this particular piece is hovered in the Timeline part. In the project Gantt Chart tooltips don't change.

## Hover

Hovering behaves similar to the same feature of basic charts. When a cursor moves over an item, it becomes highlighted, so its only function is to keep your attention.

## Select

Selecting is quite a useful feature in Gantts. It gets some information about the 


No selection for the second time 









# Altering Interactivity

## Tooltips


## Hover

All default colors might be changed according to your needs and preferences. By default, there is the one hovering color for both timeline and datagrid parts. You can change them using {api:anychart.core.gantt.Timeline#rowHoverFill}**.getTimeline().rowHoverFill()**{api} and {api:anychart.core.ui.DataGrid#rowHoverFill}**.dataGrid().rowHoverFill()**{api}
 - chart.dataGrid().rowHoverFill('red')
 - chart.getTimeline().rowHoverFill('green')

## Select




 - chart.getTimeline().selectedElementFill('blue')
 - chart.rowSelectedFill('yellow')


# Handling chart events


# Editing mode





В Gantt нужно добавить статью Interactivity, где расписать
(еще посмотреть на http://6.anychart.com/products/anygantt/docs/users-guide/interactivity.html?fromtree)
1) Что гантты у нах пиздец какие интерактивные и позволяют невесть что
2) Что есть дефолтная интерактивность: тултипы, хавер колор, row hover и тп
3) Что можно изменить тултипа, хавер колор, row hover целиком или отдельноя для датагрида и таймлайна
4) что есть события которыми можно много что делать - ссылку на статью про события
5) Что есть режим edit, который позволяет [перечисление того что позволяет] и отправка на статью Live Edit UI and API