{:index 2}
# Visualization

* [Overview](#overview)
* [Logo](#logo)
* [Resource parameters list](#resource_parameters_list)
* [Timeline](#timeline)
* [Grid](#grid)
* [Activity parameters list](#activity_parameters_list)
* [Scrollers](#scrollers)
 * [Vertical](#vertical)
 * [Horizontal](#horizontal)
* [Overlay](#overlay)
* [Appearance settings from Data](#appearance_settings_from_data)

## Overview

Due to specifics of the elements used by this chart, there are some methods untypical for basic charts used for adjusting the chart's appearance. This article considers those methods and gives examples with the result.

## Logo

There are three special methods for setting the logo appearance. It is possible to affect the corners with the {api:anychart.core.resource.Logo#cornerType}cornerType(){api} and {api:anychart.core.resource.Logo#corners}corners(){api} methods. The first one is responsible for the corner type and the second is used for adjusting the corner radius. The {api:anychart.core.resource.Logo#overlay}overlay(){api} method is responsible for the logo overlaying other elements.

```
chart.logo().fill("red");
chart.logo().cornerType("roundInner");
chart.logo().corners(20, 20, 20, 20);
chart.logo().overlay(true);
```

{sample}Resource\_Visualization\_01{sample}


## Resource parameters list

There is a list of paramters that a resource has or can have. 

- {api:anychart.core.resource.resourceList.ImageSettings#size}size(){api}, {api:anychart.core.resource.resourceList.ImageSettings#borderRadius}borderRadius(){api}, api:anychart.core.resource.resourceList.ImageSettings#opacity}opacity(){api}, {api:anychart.core.resource.resourceList.ImageSettings#align}align(){api}, {api:anychart.core.resource.resourceList.ImageSettings#fittingMode}fittingMode(){api}, {api:anychart.core.resource.resourceList.ImageSettings#margin}margin(){api} methods are used for adjusting the picture settings.

- {api:anychart.core.resource.resourceList.TagsSettings#padding}padding(){api} and {api:anychart.core.resource.resourceList.TagsSettings#background}background(){api} methods are used for tags adjusting

- {api:anychart.core.resource.resourceList.TextSettings#fontColor}fontColor(){api}, {api:anychart.core.resource.resourceList.TextSettings#fontFamily}fontFamily(){api}, {api:anychart.core.resource.resourceList.TextSettings#fontSize}fontSize(){api} and other text settings are the same for all text elements in AnyChart, as well as name, tags, type, descriptions in Resource Charts. Find more about text editing in the [Text Settings](../Appearance_Settings/Text_Settings) article.


The height of a resource depends on a maximum number of activities this resource has during a day on the chart timeline. This can be performed if the [TimeTracking mode](TimeTracking_Mode) is ON.


## Activity parameters list

- {api:anychart.core.resource.Activities#fill}fill(){api}, {api:anychart.core.resource.Activities#hatchFill}hatchFill(){api}, {api:anychart.core.resource.Activities#stroke}stroke(){api}, {api:anychart.core.resource.Activities#labels}labels(){api} set the color, fill, hatch fill, and stroke

- {api:anychart.core.resource.Activities#hoverFill}hoverFill(){api}, {api:anychart.core.resource.Activities#hatchHoverFill}hatchHoverFill(){api}, {api:anychart.core.resource.Activities#hoverStroke}hoverStroke(){api}, {api:anychart.core.resource.Activities#hoverLabels}hoverLabels(){api} configure the visual settings on hover

- {api:anychart.core.resource.Activities#selectFill}selectFill(){api}, {api:anychart.core.resource.Activities#hatchSelectFill}hatchSelectFill(){api}, {api:anychart.core.resource.Activities#hatchSelectFill}hatchSelectFill(){api}, {api:anychart.core.resource.Activities#selectStroke}selectStroke(){api} configure the visual settings on select


### Split Activity Feature

There is one more feature about Activities in AnyChart Resource Charts. When one Activity consists of several tasks, it is possible to split this huge activity into these small tasks, avoiding them to become separate activities. All tasks the acitivity consists of will behave as one complicated object, e.g. when a cursor is put over one of those subtasks, all of them will be hovered; if one of them is clicked, the whole activity will be selected.

## Conflict parameters

<table>
<tr>
<td>Fill</td><td>{api:anychart.core.resource.Conflicts#fill}fill(){api}</td>
</tr>
<tr>
<td>HatchFill</td><td>{api:anychart.core.resource.Conflicts#hatchFill}hatchFill(){api}</td>
</tr>
<tr>
<td>Stroke</td><td>{api:anychart.core.resource.Conflicts#stroke}stroke(){api}</td>
</tr>
<tr>
<td>Labels</td><td>{api:anychart.core.resource.Conflicts#labels}labels(){api}</td>
</tr>
</table>

