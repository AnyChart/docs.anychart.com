#Live Edit UI

* [Overview](#overview)
* [Defaults](#defaults)
 * [Controls](#controls) 
 * [Data Grid](#data_grid)
 * [TimeLine](#timeline)
 
# Overview
The Live Edit mode allows you to edit any part of your Gannt without touching the code. All you need to do is to use the mouse to change the duration, position or connectons.

In this article we will consider the "editing mode" of AnyGantt. For simplifying the material, there are two paragraphs for Timeline and Data Grid. 

# Defaults

## Controls

There are several pointer cursors you will see while working with AnyGantt. They are used to edit intervals and Gantts' structure.

All connectors' appearance might be edited by using usual methods such as {api**}.stroke()**{api}, {api}**.fill()**{api} or by choosing the theme you prefer. 
<table width="700" border="1" class="dtTABLE">
<tbody><tr>
<th width="175"><b>Compound action</b></th>
<th width="175"><b>Interaction</b></th>
<th width="175"><b>Typical effect</b></th>
<th width="175"><b>Pointers</b></th>
</tr>
<tr>
<td>Connectors creating</td>
<td>Position the pointer over the connector thumb of an interval or a milestone, press the button and move the mouse. If you haven't pointed the interval you want to connect with, there is a dashed line drawn to help the user not to get lost; it is possible to scroll the timeline while dragging the connector line inside the scale total range. If you hover the bar you want to connect with, there's a final connector preview shows up. Release the mouse button. If you are hovering the interval bar and watching the final connector preview, there will be the {api}**.beforeCreateConnector()**{api} event dispatched by the chart diagram (or by its timeline, depends on the way the chart was built) unless it was prevented. Then, if you release the mouse, the connector will be created and the intervals will become logically connected. If the {api}**.beforeCreateConnector()**{api} event was prevented, no connector will be created.
<br>
You can find more about events [here](../Common_Settings/Event_Listeners.md).
</td>
<td>One interval becomes connected to another and we see the connector.</td>
<td>
<img src ="http://static.anychart.com/images/connector_creater.png" alt="Connector creater" />
<br>
A pointer that is shown when a connector thumb is hovered
<br>
<img src ="http://static.anychart.com/images/connector_thumb.png" alt="Connector thumb" />
<br>
The connector thumb shown when the interval is hovered
<br>
<img src ="http://static.anychart.com/images/dashed_connector.png" alt="Connector dashes" />
<br>
The unconnected connector line
<br>
<img src ="http://static.anychart.com/images/final_connector.png" alt="Final connector" />
<br>
That's how the final connector looks like
</td>
</tr>
<tr>
<td>Resizing</td>
<td>Hover the resizing thumb, press the left mouse button and drag the cursor. You will see the dashed contour - a preview of the interval duration. You can drag it to any date you need, the scale range will be automatically lengthened if necessary. When you release the button, the "update" event will be dispathed by the gantt tree. Find more information about tree events [here](../Working_with_Data/Data_Tree_Model).</td>
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
<td>Hover the interval or a milestone, press the button when the pointer is of dragging type, drag it to the place where you need to put it (scale range will change automatically)</td>
<td>Drags the interval through the time <!-->and space<--> without lengthening or shortening it.</td>
<td>

<img src ="http://static.anychart.com/images/dragger.png" alt="Dragger" />
<br>
The dragger
<br>

</td>
</tr>
<tr>
<td>Progress resizing</td>
<td>Hover the border of the progress part and the rest of the actual time and press the button when the pointer is of progress resizing type.</td>
<td>Lengthens or shortens the .</td>
<td>

<img src ="http://static.anychart.com/images/progress_slider.png" alt="Progress_slider" />
<br>
Progress slider shows the progress of an action
<br>

</td>
</tr>
</tbody></table>

## Data Grid

There is a couple of wonderful features we've applied to our DataGrid.
At first, you can change the structure of the Gantt by simply dragging any element to wherever you need. Look at the picture below.

<img>

However, it's not possible to make a parent item its own child, while you can put that parent item with all its children inside another gantt root.

Then, our parental items can be expanded and collapsed. Just click once on the "+"/"-" sign or double-click the row with the item (this might be prevented with the usage of [Event Listeners](../Common_Settings/Event_Listeners)).

## Timeline

Stretch the length

You can change the duration of the interval, its start and end time. Hover right or left thumbs, watch if the control is of this <img> type and drag it. 


Drag&Drop

Also you can change the start and end date without changing the duration of the interval - you can simply drag the actual time bar to wherever you want. Hover the element, wait for this <img> control and drag the interval.


Change the connectors

If you need to add the connections of some elements, you can do it also by simply dragging the connector thumb of an actual time bar. Again, hover the side of an actual time bar, catch the connector thumb and drag it to the element you need.

Note that it's not possible to drop connectors into a baseline, as they cannot have ones.


Progress

Another difference between the behaviour of the actual time bar and its baseline is in having progress.
You may notice that some of the actual time bars are colored differently and the progress part is of dark color. Those are the intervals of parent items, so when you change their progress, you change the progress for the whole group.


Baseline changing

As we have already noticed, the baseline bar looks and behaves almost like an actual time bar, with the dufference of not having any progress and connectors, as it shows the planned time. We can change its  position in time and whole its duration using the same controls as actual time bars have.


Milestones

You cannot change the duration of a milestone as they have no duration, but you still can drag it to another position. They have no progress and connectors as well, because they represent moments in time.


##Scrolling

When you set the connectors, make an end date later or a start date earlier than a gantt screen displays, it will start scrolling automatically. Also, in live mode the Gantt scales can automatically grow when we overcome the min amd max scale values while scrolling.


Может тут сделать картинками, а не пример? оО
