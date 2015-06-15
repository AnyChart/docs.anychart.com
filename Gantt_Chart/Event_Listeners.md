#Event Listeners

* [Overview](#overview)
* [Event Types](#event_types)
* [Default Events](#default_events)
* [Prevent Defaults](#prevent_defaults)

##Overview

AnyChart supports the possibility to handle Gantt Chart events. In this tutorial we will list all available events, 
explain when they are dispatched and what data is available in them. There is also some useful information about how to create an
event handler and how to use the data coming from AnyGantt. First, you need to create a listener to handle the specific event. [Here](Common_Settings/Event_Listeners#listener_types) 
you can find more information about creating these simply JavaScript functions.

## Event Types

It is important to keep in mind that Resource Gantt Chart and Project Gantt Chart are almost identical in terms of data hierarchy. 
So the information presented below applies to both chart types, except some details.
These are events available for Gantt Chart:

<br><table>
<tbody>
<tr>
<td>Event</td>
<td>Description</td>
</tr>
<tr>
<td>rowClick</td>
<td>Dispatched when mouse click event happened. Event returns all available data about an active row.</td>
</tr>
<tr>
<td>rowDBlclick</td>
<td>Dispatched when mouse double click event happened. Event returns all available data about an active row.</td>
</tr>
<tr>
<td>rowMouseMove</td>
<td>Dispatched when mouse move event happened. Event returns all available data about an active row.</td>
</tr>
<tr>
<td>rowMouseOver</td>
<td>Dispatched when mouse over event happened. Event returns all available data about an active row.</td>
</tr>
<tr>
<td>rowMouseOut</td>
<td>Dispatched when mouse out event happened. Event returns all available data about an active row.</td>
</tr>
<tr>
<td>rowMouseDown</td>
<td>Dispatched when mouse down event happened. Event returns all available data about an active row.</td>
</tr>
<tr>
<td>rowMouseUp</td>
<td>Dispatched when mouse up event happened. Event returns all available data about an active row.</td>
</tr>
<tr>
<td>rowSelect</td>
<td>Dispatched when some row is selected. Event returns all available data about an active row.</td>
</tr>
</tbody>
</table>

<br>As far as you need to listen an event you should use this code to handle it:

```
//choose an event type from table above:
chart.listen(anychart.enums.EventType.ROW_CLICK, function(event) {
    var msg = event['item'].get('name');
    if (event['period']) msg += '\nPeriod: ' + event['period']['id'];
    return msg;
  });
```

<br>As you can see from the code above, it is possible to get any information about the item from the event - it contains some useful fields. Here is a list of supported types of information:

<br><table>
<tbody>
<tr>
<td>Event Field</td>
<td>Description</td>
</tr>
<tr>
<td>event['item']</td>
<td>It is a (Data Item)[Working_with_Data/Using_Data_Tree_Model] that displays the active row.</td>
</tr>
<tr>
<td>event['hoveredIndex']</td>
<td>Contains an index of active row.</td>
</tr>
<tr>
<td>event['period']</td>
<td>Contains an active period.</td>
</tr>
<tr>
<td>event['periodIndex']</td>
<td>Contains an index of active period.</td>
</tr>
<tr>
</tbody>
</table>

<br>In some cases you may have no need to handle different information. Here is the demonstration of this feature in the Resource Gantt Chart:

{sample}GANTT\_Events\_01{sample}

## Default Events

<br>When you click on a row or move the mouse over the row, there are some default actions take place. 

Those events dispatch in the following order on every click:
<p>1) rowMouseDown</p>
<p>2) rowMouseUp </p>
<p>3) rowClick (which is the same as rowMouseDown + rowMouseUp) </p>
<p>4) rowSelect </p>

<br>
<table>
<tbody>

<tr>
<td>Event Type</td>
<td>Default Behaviour</td>
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
<td>Сollapse/expand items.</td>
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

<br>To prevent from these events dispatching you can use the special method {api}**.preventDefault()**.{api}

```
event.preventDefault();
```

<br>In this case these events won't be reported by the chart. Let's disable the default behaviour for the clicks. The sample below illustrates this idea.

{sample}GANTT\_Events\_02{sample}
```
chart.listen(anychart.enums.EventType.ROW_CLICK, function(e) {
                e.preventDefault();
            });
```


