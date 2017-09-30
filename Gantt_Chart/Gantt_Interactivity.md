# Gantt Interactivity
 
## Overview

AnyGantt offers you a wide variety of options that allow to make your gantt charts really interactive.

You can control appearance of elements depending on user action - use states styles for that. You can define a set of actions that should be performed when user clicks some element on the chart. Action can open the certain web page, call an external function (JavaScript, for example). AnyGantt dispatches events that can be handled.

### Tooltips

When you need a tooltip that will show more or less than it does by default, you always can use the format method to change the information shown. 

{sample :width 825 :height 200 }GANTT\_Interactivity\_01{sample}

As you can see, tooltips of this gantt are the same in both datagrid and timeline parts. We have only changed the timeline part tooltip using simple {api:anychart.core.ui.Tooltip#format}format(){api} method:

```
chart.getTimeline().tooltip().format(function (e) {
  var item = e['item'];
  return item.get('name') + '<br>' + 'Start time: ' + anychart.utils.defaultDateFormatter(item.meta('minPeriodDate')) + '<br>'
      + 'End time: ' + anychart.utils.defaultDateFormatter(item.meta('maxPeriodDate'));
});
```

You can find more about text formatters in [Text Formatters](../../Common_Settings/Text_Formatters). 

### Hover

You can change hover colors using {api:anychart.core.ui.Timeline#rowHoverFill}getTimeline().rowHoverFill(){api} and {api:anychart.core.ui.DataGrid#rowHoverFill}rowHoverFill(){api} accordingly:

```
chart.dataGrid().rowHoverFill('#DEFFE3')
chart.getTimeline().rowHoverFill('#DEFFE3')
```

{sample :width 825 :height 200 }GANTT\_Interactivity\_02{sample}

### Select

To change the selected item color use the {api:anychart.core.ui.Timeline#selectedElementFill}getTimeline().selectedElementFill(){api} method and for the selected row there is the {api:anychart.charts.Gantt#rowSelectedFill}rowSelectedFill(){api} method. 

{sample :width 825 :height 200 }GANTT\_Interactivity\_03{sample}

## Handling chart events

You can listen to some events happening on a chart to collect some data and make your Gantt react somehow. For example, to delete the selected row:

```
chart.listen('rowSelect', function(e) {
    e.item.remove();
});
```

{sample :width 825 :height 200 }GANTT\_Interactivity\_04{sample}

You may use listeners for adjusting the gantt view or editing the data as well. There's a lot of information about Event Listeners you can find in [Event Listeners](../Common_Settings/Event_Listeners) article.

## Editing mode

You can edit Gantt Charts in the "live" mode. To enable live editing do the following:

```
// to make a Gantt chart editable
chart.editing(true);
```

{sample :width 825 :height 300 }GANTT\_Interactivity\_05{sample}

Learn more in [Editing mode in AnyGantt](Live_Edit_UI_and_API) article.
