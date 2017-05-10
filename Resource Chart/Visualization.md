{:index 1}
#Working with Data

* [Overview](#overview)
* [Resource parameters list](#resource_parameters_list)
* [Activity parameters list](#activity_parameters_list)

## Overview

Due to specifics of the elements used by this chart, there are some methods untypical for basic charts

## Resource parameters list

There is a list of paramters that a resource has or can have. 

<table colspan=2>
<tr colspan=2><b>Image settings</b></tr>
<tr>
<td>image size</td>
<td>{api:anychart.core.resource.resourceList.ImageSettings#size}size(){api}</td>
</tr>
<tr>
<td>image border radius</td>
<td>{api:anychart.core.resource.resourceList.ImageSettings#borderRadius}borderRadius(){api}</td>
</tr>
<tr>
<td>image opacity</td>
<td>{api:anychart.core.resource.resourceList.ImageSettings#opacity}opacity(){api}</td>
</tr>
<tr>
<td>image align</td>
<td>{api:anychart.core.resource.resourceList.ImageSettings#align}align(){api}</td>
</tr>
<tr>
<td>image fitting mode</td>
<td>{api:anychart.core.resource.resourceList.ImageSettings#fittingMode}fittingMode(){api}</td>
</tr>
<tr>
<td>image margin</td>
<td>{api:anychart.core.resource.resourceList.ImageSettings#margin}margin(){api}</td>
</tr>
<tr colspan=2><b>Tags settings</b></tr>
<tr>
<td>tags padding</td>
<td>{api:anychart.core.resource.resourceList.TagsSettings#padding}padding(){api}</td>
</tr>
<tr>
<td>tags background</td>
<td>{api:anychart.core.resource.resourceList.TagsSettings#background}background(){api}</td>
</tr>

<tr colspan=2><b>Text settings</b></tr>
<tr>
<td>All text Settings</td>
<td><a href="anychart.core.resource.resourceList.TextSettings">can be found here</a></td>
</tr>

</table>



The height of a resource depends on a maximum number of activities this resource has during a day on the chart timeline. This can be performed if the [TimeTracking mode](TimeTracking_Mode) is ON.


## Activity parameters list

 - fill, hoverFill, selectFill
 - stroke, hoverStroke, selectStroke
 - hatchFill, hoverHatchFill, selectHatchFill
 - label, hoverLabel, selectLabel

### Split Activity Feature

There is one more feature about Activities in AnyChart Resource Charts. When one Activity consists of several tasks, it is possible to split this huge activity into these small tasks, avoiding them to become separate activities. All tasks the acitivity consists of will behave as one complicated object, e.g. when a cursor is put over one of those subtasks, all of them will be hovered; if one of them is clicked, the whole activity will be selected.