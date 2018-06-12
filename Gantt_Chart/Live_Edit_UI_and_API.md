# Live Edit UI
 
## Overview
The Live Edit mode allows you to edit any part of your Gantt chart without touching the code. All you need to do is to use the mouse to change the duration, position or connections.

In the following sample you can disable or enable editing mode and try to change whatever you like:

{sample :height 300}GANTT\_Interactivity\_05{sample}

## Defaults

There are several pointer cursors a user can see while working with AnyGantt. They are used to edit intervals and Gantt charts' data tree structure, and those changes are displayed by the Gantt diagram.

All controls' appearance can be edited by using special methods, which are described below, or by choosing the theme you prefer. 

<table width="700" border="1" class="dtTABLE">
<tbody><tr>
<th>Action</th>
<th>Interaction</th>
<th>Effect</th>
<th>Pointers</th>
</tr>
<tr>
<td>Creating connectors</td>
<td>Position the pointer over the connector thumb of an interval or a milestone, press the button and move the mouse. If you haven't pointed the interval you want to connect with, there is a preview line drawn to help the user not to get lost; the timeline and data grid both will be scrolled while dragging the connector line inside the scale total range. If you hover the bar you want to connect with, there's a final connector preview shows up: depending on where the bar is hovered (left or right part), the connector will stick to the appropriate side. Release the mouse button. If you hover the interval bar, watch the final connector preview and then release the mouse, there will be the "beforeCreateConnector" event dispatched by the Gantt diagram (or by its timeline, if it was created in the standalone mode) unless it was prevented. Then the connector will be created and the intervals will become logically connected. If the "beforeCreateConnector" event was prevented, no connector will be created.
<br>
You can find more about events in [Event Listeners](../Common_Settings/Event_Listeners) article.
</td>
<td>One interval becomes connected to another and the connector is shown.</td>
<td>
<img src ="https://static.anychart.com/images/connector_creater.png" alt="Connector creater" />
<br>
A pointer that is shown when a connector thumb is hovered
<br><br>
<img src ="https://static.anychart.com/images/connector_thumb.png" alt="Connector thumb" />
<br>
The connector thumb shown when the interval is hovered
<br><br>
<img src ="https://static.anychart.com/images/dashed_connector.jpg" alt="Dashed connector" />
<br>
The unconnected connector line
<br><br>
<img src ="https://static.anychart.com/images/final_connector.png" alt="Final connector" />
<br>
That's how the final connector looks like
</td>
</tr>

<tr>
<td>Deleting connectors</td>
<td>Hover the connector and select it. The cursor will become of a pointer type, the connector will become of an orange color. To remove the connector, press "Delete" in Windows or "cmd+Backspace" in Mac. The connector will be removed.</td>
<td>The connector will be destroyed.</td>
<td>

<img src ="https://static.anychart.com/images/cursor_pointer.png" width="32" height="32" alt="Progress slider" />
<br>
The pointer cursor which is shown when the connector is hovered and selected
<br>

</td>
</tr>

<tr>
<td>Changing duration</td>
<td>Hover the duration changing thumb, press the left mouse button and drag the cursor. You will see the preview contour - a preview of the interval duration. You can drag it to any date you need, the scale range will be automatically lengthened if necessary. When you release the button, the "update" event will be dispatched by the Gantt tree. Find more information about those events downwards.</td>
<td>The actual time or the baseline interval becomes longer of shorter</td>
<td>

<img src ="https://static.anychart.com/images/horizontal_resizer.png" alt="Horizontal resizer" />
<br>
The horizontal resizer
<br>

</td>
</tr>
<tr>
<td>Drag&drop</td>
<td>Hover the interval or a milestone, press the button when the pointer is of dragging type, drag it to the place where you need to put it (scale range will change automatically). The instance of the {api:anychart.data.Tree}anychart.data.Tree{api} class will dispatch the "update" event immediately. Read about Gantt events in the following.</td>
<td>Drags the interval through the time without lengthening or shortening it.</td>
<td>

<img src ="https://static.anychart.com/images/dragger.png" alt="Dragger" />
<br>
The dragger
<br>

</td>
</tr>
<tr>
<td>Changing the progress</td>
<td>Hover the bar, look for the slider and press the button. Drag it and drop where needed. At this moment the Gantt tree dispatches the "update" event. Read more about events below.</td>
<td>Lengthens or shortens the progress part of the task.</td>
<td>

<img src ="https://static.anychart.com/images/progress_slider.png" alt="Progress slider" />
<br>
Progress slider 
<br>

</td>
</tr>

<tr>
<th colspan=4>Data Grid part</td>
</tr>
<tr>
<td>Changing the Gantt chart tree structure</td>
<td>Hover the row (item), press the button and drag it to wherever you need. When you release the button, the tree will dispatch the "move" event. Note that there are some situations when you cannot change the structure: it's not possible to make the item a child of itself and a milestone is not able to have children.</td>
<td>Changes the Gantt chart tree structure visually and logically.</td>
<td>
</td>
</tr>
</tbody></table>


## Customizing Controls

The controls above are shown in their default state. AnyChart provides anyone an opportunity to become unique and remarkable, so it is not hard to customize colors and shapes of all chart details - even so small as Live Edit Chart Controls.

When an interval on a Live Edit Chart is hovered, its controls appear. It is possible to drag the interval, make it longer or shorter, drag the scroller or connect this interval to another one. To make the connectors' controls of another type, size or color, just use the {api:anychart.core.gantt.edit.ElementEdit#start}start(){api} and {api:anychart.core.gantt.edit.ElementEdit#end}end(){api} methods - those are responsible for the editing thumb controls via {api:anychart.core.gantt.edit.SideControl#thumb}thumb(){api} methid, for example you can switch the marker type, which you can choose from the {api:anychart.enums.MarkerType}Marker Type List{api}. Same goes for marker size, offset and other settings:

```
// link to timeline 
timeline = chart.getTimeline();

// links to start and end marker settings
startMarker = timeline.elements().edit().start().connectorThumb();
endMarker =  timeline.elements().edit().end().connectorThumb();

// set the connector control marker type
startMarker.type("arrowLeft");
endMarker.type("arrowRight");

// connectors controls marker type
startMarker.size(30);
endMarker.size(30);

// offsets of the connectors controls
startMarker.horizontalOffset(10);
endMarker.horizontalOffset(-10);

startMarker.verticalOffset(-7);
endMarker.verticalOffset(7);
```

There are other settings you can set for thumbs, see the {api:anychart.core.gantt.edit.Thumb}anychart.core.gantt.edit.Thumb{api} class and a sample below:

{sample}GANTT\_Interactivity\_09{sample}

## Events

Changes made in Live Edit mode lead to data changes. Events can be used to track and handle the changes.

### Data Tree Events

#### Move

The data tree dispatches the **treeItemMove** event when the Gantt chart tree structure is changed. Gantt chart dispatches this when it catches the live mode changes in Gantt charts' data structure made by user. It has several fields: 

- "type": the event type ("treeItemMove"),
- "source", the data item where item is moved from,
- "sourceIndex": the "source" item index,
- "target": the data item where item is moved to,
- "targetIndex": the target item index,
- "item": the item moved (dragged and dropped).

For example: the parent item "Part 1" is moved inside another parent item, "Part 3", making the Gantt tree arborize. Then the **treeItemMove** event will be dispatched with these parameters:

- type: "treeItemMove"
- source: null
- sourceIndex: null
- target: "Part 3"
- targetIndex: 2
- item: "Part 1"

```
var tree = anychart.data.tree(getData(), "as-table");
tree.listen("treeItemMove", function(e){
	chart.title.text("The " + e.itemIndex + " item was moved");
});
```

#### Update

The **treeItemUpdate** event will be dispatched by the data tree when anything is changed. For example, if you move an actual time bar of any task or process, there will be the **treeItemUpdate** event dispatched by the Gantt chart data tree because of changing the fields' values.

Our "update" event includes the following fields:

- "type": the event type ("treeItemUpdate")
- "item": a DataItem object
- "path": path to the field with changed value, always in array format
- "field": the field which value was changed
- "value": the new value for the field

```
var tree = anychart.data.tree(getData(), "as-table");
tree.listen("treeItemUpdate", function(e){
	chart.title.text("The " + e.itemIndex + " item was updated");
});
```

For example: the second period of a tree data item "Act 1" is made longer. The start date was 02/27, end date 03/03. The end date is changed to 08/03. So, there will be one field edited - "actualEnd" of the second period. Then the **treeItemUpdate** event will have these parameters:

- "type": "treeItemUpdate"
- "item": "Act 1"
- "path": ["periods", 1, "end"]
- "field": "periods"
- "value": 1425772800000

#### Create

The **treeItemCreate** event is dispatched when a new tree data item is created. It has the following fields:
- "type": the event type ("treeItemCreate"),
- "target": the name of the target where the new object is put in,
- "targetIndex": the index of a target,
- "item": a DataItem object.

```
var tree = anychart.data.tree(getData(), "as-table");
tree.listen("treeItemCreate", function(e){
 	chart.title.text("The " + e.itemIndex + " item was created");
});
```

#### Remove

When an object is removed, the Gantt tree dispatches the **treeItemRemove** event. Its fields are similar to those the "create" event has:

- "type": the event type ("treeItemRemove"),
- "source": the name of the target where the object is removed from,
- "sourceIndex": the index of a source,
- "item": a DataItem object.

```
var tree = anychart.data.tree(getData(), "as-table");
tree.listen("treeItemRemove", function(e){
	chart.title.text("The " + e.targetIndex + " item was removed");
});
```

### Grid Events

#### beforeCreateConnector

The **beforeCreateConnector** event is similar to **treeItemCreate**, but this is dispatched by the Gantt diagram opposite to Gantt tree in other events situations and it is dispatched before the action itself, so it will not have any information about the source. To get this information one has to listen to the "update" event. The fields of the **beforeCreateConnector** event are:

- "type": the event type (e.g., "beforeCreateConnector"),
- "source": which data item the connector starts from,
- "target": which data item the connector ends at (is connected to),
- "connectorType": the connector type.

### Connector Events

There is a list of events connectors dispatch: 

<table>
<tr>
<th>Event</th>
<th>Description</th>
<tr>
<tr>
<td>connectorselect</td>
<td>Dispatched when connector is selected</td>
<tr>
<tr>
<td>connectorclick</td>
<td>Dispatched when connector is clicked</td>
<tr>
<tr>
<td>connectordblclick</td>
<td>Dispatched when connector is doubleclicked</td>
<tr>
<tr>
<td>connectormouseover</td>
<td>Dispatched when the mouse cursor is over a connector</td>
<tr>
<tr>
<td>connectormouseout</td>
<td>Dispatched when the mouse cursor leaves the connector area</td>
<tr>
<tr>
<td>connectormousemove</td>
<td>Dispatched when the mouse cursor moves over a connector</td>
<tr>
<tr>
<td>connectormousedown</td>
<td>Dispatched when the mouse button is pushed down and the mouse cursor is over the connector</td>
<tr>
<tr>
<td>connectormouseup</td>
<td>Dispatched when the mouse button is released and the mouse cursor is over the connector</td>
<tr>
</table>

These events have several standard fields (such as type, clientX, clientY, etc.), and also some information about the active connector. The table below describes those special fields.

<table>
<tr>
<td>Field</td>
<td>Description</td>
</tr>
<tr>
<td>fromItemIndex</td>
<td>The index of a data item, which connector starts from</td>
</tr>
<tr>
<td>toItemIndex</td>
<td>The index of a data item, which is the final point for the connector</td>
</tr>
<tr>
<td>connType</td>
<td>The connector type</td>
</tr>
<tr>
<td>fromItem</td>
<td>The item which connector starts from</td>
</tr>
<tr>
<td>toItem</td>
<td>The item which is the final point for the connector</td>
</tr>
<tr>
<td>path</td>
<td>The path of a connector polyline. Optional</td>
</tr>
<tr>
<td>arrow</td>
<td>The path of a connector arrow polyline. Optional</td>
</tr>
<tr>
<td>fromPeriodIndex</td>
<td>The index of a period in the fromItem, which connector starts with. Optional</td>
</tr>
<tr>
<td>toPeriodIndex</td>
<td>The index of a period in the fromItem, which connector starts with. Optional</td>
</tr>
</table>

The following sample demonstrates how these fields can be used to get information about a connector.

```
// listen to the connectorclick event and change the title 
chart.listen('connectorclick', function(e){
  chart.title(e.fromItem.get('name') + ' to ' + e.toItem.get('name') + ': ' + e.connType);
});
```

{sample}GANTT\_Interactivity\_10{sample}

## Data Grid

You can change the structure of the Gantt chart data by simply dragging any element to wherever you need in the DataGrid.

The parent items can be expanded and collapsed. Click "+"/"-" sign or double-click the row with the item (this might be prevented with the usage of [Event Listeners](../Common_Settings/Event_Listeners)).

You can make Data Grid cells editable and handle both editing state display and validate input values before adding them to the data (or aborting the changes):

```
// enable chart editing
chart.editing(true);

// work on input and decide what to do
dataGrid.onEditStart(function () {
    // forbid editing the first column
    if (this.columnIndex < 1) return {cancelEdit: true};
    // show values as they are for names
    if (this.columnIndex == 1) 
         { return {value: this.value}; }  
    else {
    // parse dates and show them in another format
        var parsed = anychart.format.parseDateTime(this.value);
        return {value: anychart.format.dateTime(parsed, 'yyyy/MM/dd')};
    }
});

// work on setting put into
dataGrid.onEditEnd(function () {
    if (this.columnIndex == 1) {
        returnVal = {itemMap: {name: this.value}};
    }
    else { 
        var date = anychart.format.dateTime(anychart.format.parseDateTime(this.value, 'yyyy/MM/dd'));

        if (this.columnIndex == 2)
            returnVal = {itemMap: {actualStart: date}};
        else if (this.columnIndex == 3)
            returnVal = {itemMap: {actualEnd: date}};

    }
  
  return returnVal;
});
```

Here is a live sample of editable data grid:

{sample}GANTT\_Interactivity\_11{sample}

## Timeline

### Change the duration

You can change the duration of the interval, its start and end time. Hover right or left thumbs, see if the control is of this type and drag it. 

### Drag&Drop

Also you can change the start and end date without changing the duration of the interval - you can simply drag the actual time bar to wherever you want. Hover the element, wait for this control and drag the interval.

### Change the connectors

If you need to add the connections of some elements, you can do it also by simply dragging the connector thumb of an actual time bar. Again, hover the side of an actual time bar, catch the connector thumb and drag it to the element you need.

Note that it's not possible to drop connectors into a baseline, as they cannot have ones.

### Progress

Another difference between the behavior of the actual time bar and its baseline is in having progress.
You may notice that some of the actual time bars are colored differently and the progress part is of dark color. Those are the intervals of parent items, so when you change their progress, you change the progress for the whole group.

### Changing baseline

As it has been noted, the baseline bar looks and behaves almost like an actual time bar, with the difference of not having any progress and connectors, as it shows the planned time. The position in time and the duration can be changed using the same controls.

### Milestones

You cannot change the duration of a milestone as they have no duration, but you still can drag it to another position. They have no progress as well, because they represent instantaneous events in time.

### Scrolling

When you change the length of the time bars or move them or milestones later or earlier than the screen with Gantt chart displays, the display will start scrolling automatically. Also, in live mode the Gantt chart's scales' ranges can automatically expand when the minimum and maximum range values are hit while scrolling.

### Coloring

Besides basic Gantt chart elements, there are some more elements which show up in the Live Edit mode. You can alter the view of these elements using special methods described below. 

Connectors have only stroke and thumbs (no fill), use the {api:anychart.core.gantt.elements.ConnectorElement#previewStroke}previewStroke(){api} method to change the stroke color:

To change the thumbs' fill and stroke use the proper methods of the {api:anychart.core.gantt.edit.ElementEdit}anychart.core.gantt.edit.ElementEdit{api} class:

```
// link to timeline
var timeline = chart.getTimeline();

// changing the color of the connector preview to red
timeline.connectors().previewStroke("red", 1, "5 2");
// sets edit interval thumb fill
timeline.elements().edit().thumbs().fill("red");
```

{sample}GANTT\_Interactivity\_12{sample}