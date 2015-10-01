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

Тут будет про контролы с картинками

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
