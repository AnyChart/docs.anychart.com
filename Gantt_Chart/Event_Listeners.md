# Event Listeners

## Overview

AnyChart charting library supports the possibility to handle Gantt Chart events. In this tutorial we will list all available events, 
explain when they are dispatched and what data is available in them. There is also some useful information about how to create an event handler and how to use the data coming from AnyGantt.

First, you need to create a listener to handle the specific event. In general [Event Listeners Article](../Common_Settings/Event_Listeners) you can find more information about creating these JavaScript functions.

## Event Types

It is important to keep in mind that JavaScript Resource Gantt Chart and JavaScript Project Gantt Chart are almost identical in terms of data hierarchy. 

So the information presented below applies to both chart types, except some details.
These are events available for Gantt Chart:

<table>
<tbody>
<tr>
<th>Event</th>
<th>Description</th>
</tr>
<tr>
<td>rowClick</td>
<td>Dispatched when mouse click event happened. </td>
</tr>
<tr>
<td>rowDblClick</td>
<td>Dispatched when mouse double click event happened.</td>
</tr>
<tr>
<td>rowMouseMove</td>
<td>Dispatched when mouse move event happened.</td>
</tr>
<tr>
<td>rowMouseOver</td>
<td>Dispatched when mouse over event happened.</td>
</tr>
<tr>
<td>rowMouseOut</td>
<td>Dispatched when mouse out event happened.</td>
</tr>
<tr>
<td>rowMouseDown</td>
<td>Dispatched when mouse down event happened.</td>
</tr>
<tr>
<td>rowMouseUp</td>
<td>Dispatched when mouse up event happened.</td>
</tr>
<tr>
<td>rowSelect</td>
<td>Dispatched when some row is selected.</td>
</tr>
<tr>
<td>rowCollapseExpand</td>
<td>Dispatched when an item that contains other items expands or collapses.</td>
</tbody>
</table>

All events return all available data about an active row.

To listen an event use the code below:

```
//choose an event type from table above:
chart.listen("rowClick", function(event) {
    var msg = event['item'].get('name');
    if (event['period']) msg += '\nPeriod: ' + event['period']['id'];
    return msg;
});
```

As you can see from the code above, it is possible to get any information about the item from the event - it contains some useful fields. Here is the list of supported types of information:

<table>
<tbody>
<tr>
<th>Event Field</th>
<th>Description</th>
</tr>
<tr>
<td>item</td>
<td>It is a [Data Item](../Working_with_Data/Tree_Data_Model) that displays the active row.</td>
</tr>
<tr>
<td>hoveredIndex</td>
<td>Contains an index of active row.</td>
</tr>
<tr>
<td>period</td>
<td>Contains an active period.</td>
</tr>
<tr>
<td>periodIndex</td>
<td>Contains an index of active period.</td>
</tr>
<tr>
</tbody>
</table>

This sample with Project Gantt Chart demonstrates the usage of this feature. Click on a row to change the Chart title:

{sample :width 700 :height 300 }GANTT\_Events\_01{sample}

## Default Events

When you click on a row or move the mouse over the row, there are some default actions take place. 

Events are dispatched in the following order on every click:

1. rowMouseDown
2. rowMouseUp
3. rowClick (which is the same as rowMouseDown + rowMouseUp)
4. rowSelect

<table>
<tbody>

<tr>
<th>Event Type</th>
<th>Default Behaviour</th>
</tr>

<tr>
<td>rowMouseUp</td>
<td>Makes the row selected.</td>
</tr>

<tr>
<td>rowClick</td>
<td>Makes the row selected (contains rowMouseUp).</td>
</tr>

<tr>
<td>rowDBlclick</td>
<td>Collapse/expand items.</td>
</tr>

<tr>
<td>rowMouseMove</td>
<td>Reports the hovered point state.</td>
</tr>

<tr>
<td>rowMouseOver</td>
<td>Makes the row hovered.</td>
</tr>

<tr>
<td>rowMouseOut</td>
<td>Unhovers the row.</td>
</tr>

</tbody>
</table>

## Prevent Defaults

To prevent these events dispatching you can use the special method **.preventDefault()**.

```
event.preventDefault();
```

In this case these events won't be reported by the chart. Let's disable the default behaviour for the clicks. The sample below illustrates this idea.

```
chart.listen("rowClick", function(e) {
    e.preventDefault();
});
```

{sample :width 700 :height 300 }GANTT\_Events\_02{sample}