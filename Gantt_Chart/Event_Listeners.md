#Event Listeners

* [Overview](#overview)
* [Default Events](#default_events)
* [Event Types](#event_types)

##Overview

AnyChart supports the possibility to handle Gantt Chart events. In this tutorial we will list all available events, explain when they are dispatched and what data is avaialble in them. There are also several samples showing how to create event handler and how to use data coming from AnyGantt. First, you need to create listener to handle the specific event. [Here](Common_Settings/Event_Listeners#listener_types) you can find more information about how to create these simply JavaScript functions.

## Default Events

<br>It is necessary to say a few words about the default behaviour.

<br>текст, посвященный дефолтным событиям (виды, порядок) и тому, как их отключать.

## Event Types

It is important to keep in mind that Resource Gantt Chart and Project Gantt Chart are almost identical in terms of data hierarchy. So the information presented below applies to both chart types, except some details.
These are events available for Gantt Chart:

<table>
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
<td>rowMouesDown</td>
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

<br>Let's consider the example below. бла-бла

<br>{sample}один-два сэмпла с парой/всеми событиями, инфу вынести наружу, чтобы понятно было, что будет происходить{sample}

<br>As mentioned earlier, our Gantt Chart allows to handle the information about an active row.

<br>{sample}один-два сэмпла на тему разных выдираний из чарта{sample}