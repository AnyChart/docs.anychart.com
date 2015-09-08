#Gantt Interactivity

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
 * [DataGrid and Timeline adjusting](#datagrid_and_timeline_adjusting)
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

{sample}GANTT\_Interactivity\_01{sample}

{sample}GANTT\_Interactivity\_02{sample}

As you can notice, the Resource Gantt tooltips show the main duration of the process when this process name is hovered in Data Grid, and the duration of a some piece of process when this particular piece is hovered in the Timeline part. In the project Gantt Chart tooltips don't change.

## Hover

Hovering behaves similar to the same feature of basic charts. When a cursor moves over an item, it becomes highlighted, so its only function is to keep your attention. Look through the next paragraph to know how to change hovering preference.

## Select

Selecting is quite a useful feature in Gantts. It gets some information about the selected item and can tranmit it to the user. By default, the selection feature gets all the information that datagrid contain: 

{sample}GANTT\_Interactivity\_03{sample}

There is a list of events are dispatched before select itself, when you select a row or an item. Some of them transmit the item data and some don't: mouseDown, mouseUp, rowClick and finally rowSelect. First two of those dispatch nothing, and the second pair are point-oriented events, so they dispatch the row data; in case you select a particular item, rowClick and rowSelect will dispatch the item data.
Note that if you select the row or item that is already selected, the rowSelect event will not happen.
When selected, the whole row and the items get filled with default selecting colors, but they can be changed. Look through the next paragraph.



    //set DataGrid and TimeLine visual settings
    chart.dataGrid().rowOddFill('#fff');
    chart.dataGrid().rowEvenFill('#fff');
    chart.getTimeline().rowOddFill('#fff');
    chart.getTimeline().rowEvenFill('#fff');
	

# Altering Interactivity

## Tooltips

When you need a tooltip that will show more or less than it does by default, you always can use the textFormatter method to change the information shown. Look at the following sample and pay your attention at the tooltip behaviour.

{sample}GANTT\_Interactivity\_04{sample}

As you can see, tooltips of this gantt are the same in both dataGrid and timeline parts. We have only changed the timeline part tooltip using simple {api}**.contentFormatter()**{api} method:

```
	chart.getTimeline().tooltip().contentFormatter(function (e) {
        var item = e['item'];
        return item.get('name') + '<br>' + 'Start time: ' + anychart.utils.defaultDateFormatter(item.meta('minPeriodDate')) + '<br>'
            + 'End time: ' + anychart.utils.defaultDateFormatter(item.meta('maxPeriodDate'));
    });
```

You can fins more about text formatters [here](../../Common_Settings/Text_Formatters). 

## Hover

All default colors might be changed according to your needs and preferences. By default, there is the one hovering color for both timeline and datagrid parts. 
You can change them using {api:anychart.core.gantt.Timeline#rowHoverFill}**.getTimeline().rowHoverFill()**{api} and {api:anychart.core.ui.DataGrid#rowHoverFill}**.dataGrid().rowHoverFill()**{api}
 - chart.dataGrid().rowHoverFill('red')
 - chart.getTimeline().rowHoverFill('green')

{sample}GANTT\_Interactivity\_05{sample}

## Select

There are some default colors that might not fit your needs, so they can be changed. 
For changing the selected item color use {api:anychart.core.gantt.Timeline#selectedElementFill}**.getTimeline().selectedElementFill()**{api} method and for the selected row there is a {api:anychart.charts.Gantt#rowSelectedFill}**.rowSelectedFill()**{api} method. 
In the following sample we have changed the default selecting color using those methods.

{sample}GANTT\_Interactivity\_06{sample}


## DataGrid and Timeline adjusting

# Handling chart events

You can listen to some events happening on a chart to collect some data. 

chart.listen('rowSelect', function(e){
var item = e['item'];
item.set('name', item.get('name') + 'q');
});

например дописываем имя, а так надо придумать более адекватный способ использования

There's a lot of information about Event Listeners you can find in [this](../../Common_Settings/Event_Listeners) article.

# Editing mode

Еще не готов

Our Gantts are so interactive that provide the opportunity to edit them in "live" mode, without even touching the code. All you need to do is to press the "Editing" button and start working on it. It's possible to edit connectors, duration length and start/end time.

Может тут сделать картинками, а не пример? оО


В Gantt нужно добавить статью Interactivity, где расписать
(еще посмотреть на http://6.anychart.com/products/anygantt/docs/users-guide/interactivity.html?fromtree)
1) Что гантты у нах пиздец какие интерактивные и позволяют невесть что
2) Что есть дефолтная интерактивность: тултипы, хавер колор, row hover и тп
3) Что можно изменить тултипа, хавер колор, row hover целиком или отдельноя для датагрида и таймлайна
4) что есть события которыми можно много что делать - ссылку на статью про события
5) Что есть режим edit, который позволяет [перечисление того что позволяет] и отправка на статью Live Edit UI and API
