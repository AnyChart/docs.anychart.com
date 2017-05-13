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

Due to specifics of the elements used by this chart, there are some methods untypical for basic charts

## Resource parameters list

There is a list of paramters that a resource has or can have. 

<table colspan=2>
<tr colspan=2><td><b>Image settings</b></td><td></td></tr>
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
<tr colspan=2><td><b>Tags settings</b></td><td></td></tr>
<tr>
<td>tags padding</td>
<td>{api:anychart.core.resource.resourceList.TagsSettings#padding}padding(){api}</td>
</tr>
<tr>
<td>tags background</td>
<td>{api:anychart.core.resource.resourceList.TagsSettings#background}background(){api}</td>
</tr>

<tr colspan=2><td><b>All text Settings, which can be applied to the whole resource chart or to one of the following elements: name, tags, type, description</b></td><td></td></tr>
<tr><td>Font Color</td><td>{api:anychart.core.resource.resourceList.TextSettings#fontColor}fontColor(){api}</td></tr>
<tr><td>Font Decoration</td><td>{api:anychart.core.resource.resourceList.TextSettings#fontDecoration}fontDecoration(){api}</td></tr>
<tr><td>Font Family</td><td>{api:anychart.core.resource.resourceList.TextSettings#fontFamily}fontFamily(){api}</td></tr>
<tr><td>Font Opacity</td><td>{api:anychart.core.resource.resourceList.TextSettings#fontOpacity}fontOpacity(){api}</td></tr>
<tr><td>Font Size</td><td>{api:anychart.core.resource.resourceList.TextSettings#fontSize}fontSize(){api}</td></tr>
<tr><td>Font Style</td><td>{api:anychart.core.resource.resourceList.TextSettings#fontStyle}fontStyle(){api}</td></tr>
<tr><td>Font Variant</td><td>{api:anychart.core.resource.resourceList.TextSettings#fontVariant}fontVariant(){api}</td></tr>
<tr><td>Font Weight</td><td>{api:anychart.core.resource.resourceList.TextSettings#fontWeight}fontWeight(){api}</td></tr>
<tr><td>Horizontal Align</td><td>{api:anychart.core.resource.resourceList.TextSettings#hAlign}hAlign(){api}</td></tr>
<tr><td>Letter Spacing</td><td>{api:anychart.core.resource.resourceList.TextSettings#letterSpacing}letterSpacing(){api}</td></tr>
<tr><td>Line Height</td><td>{api:anychart.core.resource.resourceList.TextSettings#lineHeight}lineHeight(){api}</td></tr>
<tr><td>Selectable</td><td>{api:anychart.core.resource.resourceList.TextSettings#selectable}selectable(){api}</td></tr>
<tr><td>Text Direction</td><td>{api:anychart.core.resource.resourceList.TextSettings#textDirection}textDirection(){api}</td></tr>
<tr><td>Text Indent</td><td>{api:anychart.core.resource.resourceList.TextSettings#textIndent}textIndent(){api}</td></tr>
<tr><td>Text Overflow</td><td>{api:anychart.core.resource.resourceList.TextSettings#textOverflow}textOverflow(){api}</td></tr>
<tr><td>Text Wrap</td><td>{api:anychart.core.resource.resourceList.TextSettings#textWrap}textWrap(){api}</td></tr>
<tr><td>Use HTML</td><td>{api:anychart.core.resource.resourceList.TextSettings#useHtml}useHtml(){api}</td></tr>
<tr><td>Vertical Align</td><td>{api:anychart.core.resource.resourceList.TextSettings#vAlign}vAlign(){api}</td></tr>
</table>



The height of a resource depends on a maximum number of activities this resource has during a day on the chart timeline. This can be performed if the [TimeTracking mode](TimeTracking_Mode) is ON.


## Activity parameters list

<table>
<tr>
<td>Filling settings</td>
<td>{api:anychart.core.resource.Activities#fill}fill(){api}<br>{api:anychart.core.resource.Activities#hoverFill}hoverFill(){api}<br>{api:anychart.core.resource.Activities#selectFill}selectFill(){api}</td>
</tr>
<tr>
<td>Hatch filling settings</td>
<td>{api:anychart.core.resource.Activities#hatchFill}hatchFill(){api}<br>{api:anychart.core.resource.Activities#hatchHoverFill}hatchHoverFill(){api}<br>{api:anychart.core.resource.Activities#hatchSelectFill}hatchSelectFill(){api}</td>
</tr>
<tr>
<td>Stroking settings</td>
<td>{api:anychart.core.resource.Activities#stroke}stroke(){api}<br>{api:anychart.core.resource.Activities#hoverStroke}hoverStroke(){api}<br>{api:anychart.core.resource.Activities#selectStroke}selectStroke(){api}</td>
</tr>
<tr>
<td>Label settings</td>
<td>{api:anychart.core.resource.Activities#labels}labels(){api}<br>{api:anychart.core.resource.Activities#hoverLabels}hoverLabels(){api}<br>{api:anychart.core.resource.Activities#selectStroke}selectStroke(){api}</td>
</tr>
</table>


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

