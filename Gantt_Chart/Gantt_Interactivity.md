# Gantt Interactivity
 
## Overview

AnyGantt offers you a wide variety of options that allow to make your gantt charts really interactive.

You can control appearance of elements depending on user action - use style states for that (described in "Appearance and Styles" section).
You can define a set of actions that should be performed when user clicks some element on the chart. Action can open the certain web page, call an external function (JavaScript, for example).
AnyGantt dispatches events that can be handled in an external environment (JavaScript, for example).
External environment can call AnyGantt Functions to load data to the gantt chart or change task or periods details.

## Default Interactivity

### Tooltips

As in the basic charts, Gantt tooltips are designed to show the main information about the item in short. However, Gantt tooltips are special because of the Gantt diagrams itself. Simple charts' tooltips usually show the name of the item and its value (if it exists), but in Gantts, the basic tooltip, besides the name of the item (which is usually also written in the Data Grid section), will show the start and end date/time and the duration of the hovered item (process). Note that there is a difference between Project Gantts {api:anychart.standalones.ProjectTimeline#tooltip}tooltip(){api} and Resource Gantts {api:anychart.standalones.ResourceTimeline#tooltip}tooltip(){api}:

{sample :width 825 :height 300 }GANTT\_Interactivity\_01{sample}

{sample :width 825 :height 200 }GANTT\_Interactivity\_02{sample}

As you can notice, the Resource Gantt tooltips show the main duration of the process when this process name is hovered in Data Grid, and the duration of a some piece of process when this particular piece is hovered in the Timeline part. In the project Gantt Chart tooltips don't change.

### Hover

Hovering behaves similar to the same feature of basic charts. When a cursor moves over an item, it becomes highlighted, so its only function is to keep your attention. Look through the next paragraph to know how to change hovering preference.

### Select

Selecting is quite a useful feature in Gantts. It gets some information about the selected item and can tranmit it to the user. By default, the selection feature gets the main information about the selected item: 

There is a list of events are dispatched before select itself, when you select a row or an item. Some of them transmit the item data and some don't: mouseDown, mouseUp, rowClick and finally rowSelect. First two of those dispatch nothing, and the second pair are point-oriented events, so they dispatch the row (item) data; in case you select a particular period, rowClick and rowSelect will dispatch the period data.
Note that if you select the row or item that is already selected, the rowSelect event will not happen.
When selected, the whole row and the items get filled with default selecting colors, but they can be changed. Look through the next paragraph.

## Altering Interactivity

### Tooltips

When you need a tooltip that will show more or less than it does by default, you always can use the format method to change the information shown. Look at the following sample and pay your attention at the tooltip behaviour.

{sample :width 825 :height 200 }GANTT\_Interactivity\_04{sample}

As you can see, tooltips of this gantt are the same in both datagrid and timeline parts. We have only changed the timeline part tooltip using simple {api:anychart.core.ui.Tooltip#format}format(){api} method:

```
chart.getTimeline().tooltip().format(function (e) {
      var item = e['item'];
      return item.get('name') + '<br>' + 'Start time: ' + anychart.utils.defaultDateFormatter(item.meta('minPeriodDate')) + '<br>'
          + 'End time: ' + anychart.utils.defaultDateFormatter(item.meta('maxPeriodDate'));
  });
```

You can find more about text formatters [here](../../Common_Settings/Text_Formatters). 
### Hover

All default colors might be changed according to your needs and preferences. By default, there is one hovering color for both timeline and datagrid parts. 
You can change them using {api:anychart.core.ui.Timeline#rowHoverFill}getTimeline().rowHoverFill(){api} and {api:anychart.core.ui.DataGrid#rowHoverFill}rowHoverFill(){api} accordingly:

```
  chart.dataGrid().rowHoverFill('#DEFFE3')
  chart.getTimeline().rowHoverFill('#DEFFE3')
```

{sample :width 825 :height 200 }GANTT\_Interactivity\_05{sample}

### Select

There are some default colors that might not fit your needs or the color scheme, so they can be changed. 
For changing the selected item color use {api:anychart.core.ui.Timeline#selectedElementFill}getTimeline().selectedElementFill(){api} method and for the selected row there is a {api:anychart.charts.Gantt#rowSelectedFill}rowSelectedFill(){api} method. 
In the following sample we have changed the default selecting color using those methods.

{sample :width 825 :height 200 }GANTT\_Interactivity\_06{sample}

### DataGrid and Timeline adjusting

You can adjust the dimensions of both gantt parts with simply dragging its borders. You may change the datagrid columns' width and the width of the whole timeline. Also, the Gantt can be scrolled in all directions with a mouse or a touchPad. Try to do it using any of Gantt samples.

## Handling chart events

You can listen to some events happening on a chart to collect some data and make your Gantt react somehow. For example, let's delete the selected row:

```
chart.listen('rowSelect', function(e) {
    e.item.remove();
});
```

{sample :width 825 :height 200 }GANTT\_Interactivity\_07{sample}

You may use listeners for adjusting the gantt view or editing the data as well. There's a lot of information about Event Listeners you can find in [this](../Common_Settings/Event_Listeners) article.

## Editing mode

Our Gantts are so interactive that we can edit them in "live" mode, without even touching the code. All you need to do is to press the "Enable Live Edit" button on the chart toolbar and start working on Gantt chart. It's possible to edit connectors, duration length and start/end time.

```
// to make a Gantt chart editable
chart.editing(true);
```

{sample :width 825 :height 300 }GANTT\_Interactivity\_08{sample}

Find more about editing mode in Gantts [here](Live_Edit_UI_and_API).
