#Live Edit UI
 
## Overview
The Live Edit mode allows you to edit any part of your Gantt chart without touching the code. All you need to do is to use the mouse to change the duration, position or connections.

In this article we will look at the "editing mode" of AnyGantt. In the following sample you can disable or enable editing mode and try to change whatever you like:

{sample :width 690 :height 300 }GANTT\_Interactivity\_08{sample}

## Controls

There are several pointer cursors you will see while working with AnyGantt. They are used to edit intervals and Gantt charts' data tree structure, and those changes are displayed by the Gantt diagram.

All controls' appearance can be edited by using special methods, which are described below, or by choosing the theme you prefer. 

<table width="700" border="1" class="dtTABLE">
<tbody><tr>
<th width="175"><b>Compound action</b></th>
<th width="175"><b>Interaction</b></th>
<th width="175"><b>Typical effect</b></th>
<th width="175"><b>Pointers</b></th>
</tr>
<tr>
<th colspan=4><b>Timeline part</b></th>
</tr>
<tr>
<td>Connectors creating</td>
<td>Position the pointer over the connector thumb of an interval or a milestone, press the button and move the mouse. If you haven't pointed the interval you want to connect with, there is a preview line drawn to help the user not to get lost; the timeline and data grid both will be scrolled while dragging the connector line inside the scale total range. If you hover the bar you want to connect with, there's a final connector preview shows up: depending on where we hovered the bar (left or right part), the connector will stick to the appropriate side. Release the mouse button. If you hover the interval bar, watch the final connector preview and then release the mouse, there will be the "beforeCreateConnector" event dispatched by the Gantt diagram (or by its timeline, if it was created in the standalone mode) unless it was prevented. Then the connector will be created and the intervals will become logically connected. If the "beforeCreateConnector" event was prevented, no connector will be created.
<br>
You can find more about events [here](../Common_Settings/Event_Listeners).
</td>
<td>One interval becomes connected to another and we see the connector.</td>
<td>
<img src ="http://static.anychart.com/images/connector_creater.png" alt="Connector creater" />
<br>
A pointer that is shown when a connector thumb is hovered
<br><br>
<img src ="http://static.anychart.com/images/connector_thumb.png" alt="Connector thumb" />
<br>
The connector thumb shown when the interval is hovered
<br><br>
<img src ="http://static.anychart.com/images/dashed_connector.jpg" alt="Dashed connector" />
<br>
The unconnected connector line
<br><br>
<img src ="http://static.anychart.com/images/final_connector.png" alt="Final connector" />
<br>
That's how the final connector looks like
</td>
</tr>
<tr>
<td>Duration changing</td>
<td>Hover the duration changing thumb, press the left mouse button and drag the cursor. You will see the preview contour - a preview of the interval duration. You can drag it to any date you need, the scale range will be automatically lengthened if necessary. When you release the button, the "update" event will be dispatched by the Gantt tree. Find more information about those events downwards.</td>
<td>The actual time or the baseline interval becomes longer of shorter</td>
<td>

<img src ="http://static.anychart.com/images/horizontal_resizer.png" alt="Horizontal resizer" />
<br>
The horizontal resizer
<br>

</td>
</tr>
<tr>
<td>Drag&drop</td>
<td>Hover the interval or a milestone, press the button when the pointer is of dragging type, drag it to the place where you need to put it (scale range will change automatically). The data [tree](../Working_with_Data/Using_Data_Tree_Model) will dispatch the "update" event immediately. Read about Gantt events in the following.</td>
<td>Drags the interval through the time <!--and space--> without lengthening or shortening it.</td>
<td>

<img src ="http://static.anychart.com/images/dragger.png" alt="Dragger" />
<br>
The dragger
<br>

</td>
</tr>
<tr>
<td>Changing the duration of progress </td>
<td>Hover the bar, look for the slider and press the button. Drag it and drop where needed. At this moment the Gantt tree dispatches the "update" event. Read more about events below.</td>
<td>Lengthens or shortens the progress part of the task.</td>
<td>

<img src ="http://static.anychart.com/images/progress_slider.png" alt="Progress slider" />
<br>
Progress slider 
<br>

</td>
</tr>
<tr>
<th colspan=4><b>Data Grid part</b></td>
</tr>
<tr>
<td>Changing the Gantt chart tree structure</td>
<td>Hover the row (item), press the button and drag it to wherever you need. When you release the button, the tree will dispatch the "move" event. Note that there are some situations when you cannot change the structure: it's not possible to make the item a child of itself and a milestone is not able to have children.</td>
<td>Changes the Gantt chart tree structure visually and logically.</td>
<td>
<!--
<img src ="http://static.anychart.com/images/progress_slider.png" alt="Hovering and choosing cursor" />
<br>
The cursor becomes of this type when we hover and press the button on the item.
<br>

<img src ="http://static.anychart.com/images/progress_slider.png" alt="Forbid the operation" />
<br>
We see this symbol when we hover the item we cannot drop the dragged one into.
<br>

<img src ="http://static.anychart.com/images/progress_slider.png" alt="A between stroke and cursor" />
<br>
The cursor becomes of this type when we hover and press the button on the item.
<br>
-->
</td>
</tr>
</tbody></table>



## Events

Changes made in Live Edit mode lead to data changes. In this case we use events to inform user about those changes.

### move

The data tree will dispatch the "move" event when we change the Gantt chart tree structure. Gantt chart dispatch this when it catches the live mode changes in Gantt charts' data structure made by user. It has several fields: 

 - "type": the event type (anychart.enums.EventType.TREE\_ITEM\_MOVE)
 - "source", the data item where we move our item from
 - "sourceIndex": the "source" item index
 - "target": the data item where we move our item into
 - "targetIndex": the target item index
 - "item": finally, this is the item we have moved (dragged and dropped).


 For example: we moved the parent item "Part 1" inside another parent item, "Part 3", making the Gantt tree arborize. Then the "move" event will be dispatched with these parameters:

  - type: anychart.enums.EventType.TREE\_ITEM\_MOVE
  - source: null
  - sourceIndex: null
  - target: "Part 3"
  - targetIndex: 2
  - item: "Part 1"

 ```
 	var tree = anychart.data.tree(getData(), anychart.enums.TreeFillingMethod.AS_TABLE);
 	tree.listen(anychart.enums.EventType.TREE_ITEM_MOVE, function(e){
 		chart.title.text("The "+e.itemIndex+" item was moved");
 	});
 ```

### update

"Update" event will be dispatched by the data tree when we change anything about our data items. For example, if you move an actual time bar of any task or process, there will be "update" event dispatched by the Gantt chart data tree because of changing the fields' values.

Our "update" event includes the following fields:

- "type": the event type (anychart.enums.EventType.TREE\_ITEM\_UPDATE)
- "item": a DataItem object
- "path": path to the field with changed value, always in array format
- "field": the field which value was changed
- "value": the new value for the field

 ```
 	var tree = anychart.data.tree(getData(), anychart.enums.TreeFillingMethod.AS_TABLE);
 	tree.listen(anychart.enums.EventType.TREE_ITEM_UPDATE, function(e){
 		chart.title.text("The "+e.itemIndex+" item was updated");
 	});
 ```

For example: we lengthen the second period of a tree data item "Act 1". The start date was 02/27, end date 03/03. We change the end date to 08/03. So, there will be one field edited - "actualEnd" of the second period. Then the "update" event will have those parameters:


- "type": anychart.enums.EventType.TREE\_ITEM\_UPDATE
- "item": "Act 1"
- "path": ["periods", 1, "end"]
- "field": "periods"
- "value": 1425772800000

### create

The "create" event will be dispatched when we create a new tree data item. It will have these fields:
- "type": the event type (anychart.enums.EventType.TREE\_ITEM\_CREATE)
- "target": the name of the target where we're putting the new object in
- "targetIndex": the index of our target
- "item": a DataItem object


 ```
 	var tree = anychart.data.tree(getData(), anychart.enums.TreeFillingMethod.AS_TABLE);
 	tree.listen(anychart.enums.EventType.TREE_ITEM_CREATE, function(e){
 		chart.title.text("The "+e.itemIndex+" item was created");
 	});
 ```

### remove

When we remove an object, the Gantt tree dispatches the "remove" event. Its fields are similar to ones that the "create" event has:

- "type": the event type (anychart.enums.EventType.TREE\_ITEM\_REMOVE)
- "source": the name of the target where we're removing the object from
- "sourceIndex": the index of our source
- "item": a DataItem object


 ```
 	var tree = anychart.data.tree(getData(), anychart.enums.TreeFillingMethod.AS_TABLE);
 	tree.listen(anychart.enums.EventType.REMOVE, function(e){
 		chart.title.text("The "+e.itemIndex+" item was removed");
 	});
 ```

### beforeCreateConnector

The "beforeCreateConnector" event is similar to the "create", but this is dispatched by the Gantt diagram opposite to Gantt tree in other events situations and, as it can be seen from its name, it is dispatched before the action itself, so it will not have any information about the source. To get this information we need to listen to the "update" event. The fields of the "beforeCreateConnector" event are:

- "type": the event type (e.g. anychart.enums.EventType.BEFORE\_CREATE\_CONNECTOR);
- "source": which data item the connector starts from
- "target": which data item the connector ends at (is connected to)
- "connectorType": the connector type.

That was a description of the Project Gantt charts, and when we deal with the Resource Gantt chart there are more fields about periods (period objects and those indexes).


Also it's possible to prevent the default event behavior, using **.preventDefault()** method. In this case, when the event happens, there will be no default reaction.

## Data Grid

There is a couple of wonderful features we've applied to our DataGrid.
At first, you can change the structure of the Gantt chart data by simply dragging any element to wherever you need. Look at the picture below.

<img>

However, it's not possible to make a parent item its own child, while you can put that parent item with all its children inside another data item (root or child).


Then, our parental items can be expanded and collapsed. Just click once on the "+"/"-" sign or double-click the row with the item (this might be prevented with the usage of [Event Listeners](../Common_Settings/Event_Listeners)).

## Timeline

### Change the duration

You can change the duration of the interval, its start and end time. Hover right or left thumbs, watch if the control is of this <img> type and drag it. 


### Drag&Drop

Also you can change the start and end date without changing the duration of the interval - you can simply drag the actual time bar to wherever you want. Hover the element, wait for this <img> control and drag the interval.


### Change the connectors

If you need to add the connections of some elements, you can do it also by simply dragging the connector thumb of an actual time bar. Again, hover the side of an actual time bar, catch the connector thumb and drag it to the element you need.

Note that it's not possible to drop connectors into a baseline, as they cannot have ones.


### Progress

Another difference between the behavior of the actual time bar and its baseline is in having progress.
You may notice that some of the actual time bars are colored differently and the progress part is of dark color. Those are the intervals of parent items, so when you change their progress, you change the progress for the whole group.


### Baseline changing

As we have already noticed, the baseline bar looks and behaves almost like an actual time bar, with the difference of not having any progress and connectors, as it shows the planned time. We can change its position in time and whole its duration using the same controls as actual time bars have.


### Milestones

You cannot change the duration of a milestone as they have no duration, but you still can drag it to another position. They have no progress as well, because they represent instantaneous events in time.


### Scrolling

When you change the length of the time bars or move them or milestones later or earlier than the screen with Gantt chart displays, the display will start scrolling automatically. Also, in live mode the Gantt chart's scales' ranges can automatically lengthen when we overcome the min and max range values while scrolling.



## Coloring

Besides basic Gantt chart elements, there are some more elements which show up in the Live Edit mode. You can alter the view of these elements using special methods described below. 

Connectors have only stroke and thumbs (no fill), so we've got the {api:anychart.core.ui.Timeline#connectorPreviewStroke}**.connectorPreviewStroke()**{api} method to change the stroke color. The code line will look like the following:

```
	var timeline = chart.getTimeline();

	// changing the color of the connector preview to red
	timeline.connectorPreviewStroke("red", 1, "5 2");

```

We should define the color, then we can define its thickness and dash pattern, line join and line cap styles.

To change the thumbs' fill and stroke we use {api:anychart.core.ui.Timeline#editConnectorThumbFill}**.editConnectorThumbFill()**{api} and {api:anychart.core.ui.Timeline#editConnectorThumbStroke}**.editConnectorThumbStroke()**{api} methods.

We have said in the paragraph above that when we edit the length or move the time interval bars, we can see our changes preview. To change its default view, we've got the following methods:

 - {api:anychart.core.ui.Timeline#editPreviewFill}**.editPreviewFill()**{api} - for changing the fill color of the preview bar (transparent by default)
 - {api:anychart.core.ui.Timeline#editPreviewStroke}**.editPreviewStroke()**{api} - for changing the stroke color of the preview bar
 - {api:anychart.core.ui.Timeline#editProgressFill}**.editProgressFill()**{api} - for changing the fill color of the progress part of the time interval bar
 - {api:anychart.core.ui.Timeline#editProgressStroke}**.editProgressStroke()**{api} - for changing the stroke color of progress


Also we can change the thumbs fill color and stroke. We use the {api:anychart.core.ui.Timeline#editIntervalThumbFill}**.editIntervalThumbFill()**{api} and {api:anychart.core.ui.Timeline#editIntervalThumbStroke}**.editIntervalThumbStroke()**{api} methods accordingly. In the code this will look like below:


```
	var timeline = chart.getTimeline();

    // sets edit interval thumb fill
    timeline.editIntervalThumbFill("red");

```

You can define colors as objects as well. The following piece of code would do the same as the previous one:

```
  var timeline = chart.getTimeline();

    // sets edit interval thumb fill
    timeline.editIntervalThumbFill({
        color: "red"
    });

```



