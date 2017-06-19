{:index 5}
# Visualization

* [Overview](#overview)
* [Logo](#logo)
* [Resource List parameters](#resource_list_parameters)
* [Timeline](#timeline)
* [Grid](#grid)
* [Activity parameters list](#activity_parameters_list)
 * [Split activity feature](#split_activity_feature)
* [Conflict parameters](#conflict_parameters)
* [Scrollers](#scrollers)
* [Appearance settings from Data](#appearance_settings_from_data)

## Overview

Due to specifics of the elements used by this chart, there are some methods untypical for basic charts used for adjusting the chart's appearance. This article considers those methods and gives examples with the result.

## Logo

There are three special methods for setting the logo appearance. It is possible to affect the corners with the {api:anychart.core.resource.Logo#cornerType}cornerType(){api} and {api:anychart.core.resource.Logo#corners}corners(){api} methods. The first one is responsible for the corner type and the second one is used for adjusting the corner radius. The {api:anychart.core.resource.Logo#overlay}overlay(){api} method is responsible for the logo overlaying other elements (in case when logo width and height are set more than it fits the table).

```
// chart logo 
chart.logo().fill("#D1DBFA");
chart.logo().overlay(true);
```

{sample}Resource\_Visualization\_01{sample}


## Resource List parameters

There is a list of parameters that a Resource List can have. 

- {api:anychart.core.resource.ResourceList#images}images(){api} method is responsible for images settings

- {api:anychart.core.resource.resourceList.ImageSettings#size}size(){api}, {api:anychart.core.resource.resourceList.ImageSettings#borderRadius}borderRadius(){api}, {api:anychart.core.resource.resourceList.ImageSettings#opacity}opacity(){api}, {api:anychart.core.resource.resourceList.ImageSettings#align}align(){api}, {api:anychart.core.resource.resourceList.ImageSettings#fittingMode}fittingMode(){api}, {api:anychart.core.resource.resourceList.ImageSettings#margin}margin(){api} methods are used for adjusting the picture settings.

- {api:anychart.core.resource.ResourceList#tags}tags(){api} method is responsible for tags' settings 

- {api:anychart.core.resource.resourceList.TagsSettings#padding}padding(){api} and {api:anychart.core.resource.resourceList.TagsSettings#background}background(){api} methods are used for tags adjusting

- {api:anychart.core.resource.ResourceList#names}names(){api} method is responsible for the resources' names' settings
- {api:anychart.core.resource.ResourceList#types}types(){api} method is responsible for the resources' types' settings

- {api:anychart.core.resource.resourceList.TextSettings#fontColor}fontColor(){api}, {api:anychart.core.resource.resourceList.TextSettings#fontFamily}fontFamily(){api}, {api:anychart.core.resource.resourceList.TextSettings#fontSize}fontSize(){api} and other text settings are the same for all text elements in AnyChart, as well as name, tags, type, descriptions in Resource Charts. Find more about text editing in the [Text Settings](../Appearance_Settings/Text_Settings) article.

Let's create a sample with resources visual appearance adjusted. In this sample, let's adjust the font color and the position for the names of the resources, add images and fix them, and set the resource list width:

```
// resource list setting
resourceList = chart.resourceList();
    
// Get images
images = resourceList.images();
// Get names
names = resourceList.names();

// images settings
images.size(50);
images.opacity("70%");
images.margin().top("30");
images.margin().left("10");
images.fittingMode("slice");
images.borderRadius(0);

// set resource list width
chart.resourceListWidth(150);

// names settings
names.margin(5,0,0,-50);
names.fontColor("#01579B");
```

{sample}Resource\_Visualization\_02{sample}

There are several methods for Resource List adjusting. 

Note that the images for resource icons should be defined through the data set:

```
{
    "name": "Gym 1",
    "defaultMinutesPerDay": 720,
    "image": "http://static.anychart.com/images/docs/resourceGym.png",
    "activities": []
}
```

The height of a resource depends on a maximum number of activities this resource has during a day on the chart timeline. This can be performed if the [TimeTracking mode](TimeTracking_Mode) is enabled.


## Timeline

Timeline is a part of the header of the resource table which demonstrates the dates. {api:anychart.core.resource.TimeLine}Timeline{api} has several methods responsible for its adjusting. 

Use the following methods to adjust the timeline appearance:

- {api:anychart.core.resource.TimeLine#drawBottomLine}drawBottomLine(){api}, {api:anychart.core.resource.TimeLine#drawLeftLine}drawLeftLine(){api}, {api:anychart.core.resource.TimeLine#drawRightLine}drawRightLine(){api}, {api:anychart.core.resource.TimeLine#drawTopLine}drawTopLine(){api} for the header borders settings

- {api:anychart.core.resource.TimeLine#format}format(){api}, {api:anychart.core.resource.TimeLine#holidays}holidays(){api, {api:anychart.core.resource.TimeLine#overlay}overlay(){api}, {api:anychart.core.resource.TimeLine#maxFontSize}maxFontSize(){api} and {api:anychart.core.resource.TimeLine#minFontSize}minFontSize(){api} methods are responsible for the header content adjusting

- {api:anychart.core.resource.TimeLine#background}{api}, {api:anychart.core.resource.TimeLine#fill}{api} and {api:anychart.core.resource.TimeLine#stroke}{api} methods help to adjust the colors of the timeline.

TimeLine also has all [text settings](../Appearance_Settings/Text_Settings) as well as a Resource List as there are text elements (dates).

Let's create a sample with a timeline adjusted:

```
// Get timeLine
timeLine = chart.timeLine();

// timeLine settings
timeLine.fill("#D1DBFA");
timeLine.fontColor("#01579B");
timeLine.holidays().fill("#aaa");
timeLine.holidays().fontColor("#000");
timeLine.drawBottomLine("false");
timeLine.stroke("#fff");
```

{sample}Resource\_Visualization\_03{sample}


## Grid

Grid in Resource Charts is the table body. Grid can be adjusted with the following methods:

- {api:anychart.core.resource.Grid#drawBottomLine}drawBottomLine(){api}, {api:anychart.core.resource.Grid#drawLeftLine}drawLeftLine(){api}, {api:anychart.core.resource.Grid#drawRightLine}drawRightLine(){api}, {api:anychart.core.resource.Grid#drawTopLine}drawTopLine(){api} for the table borders settings

- {api:anychart.core.resource.Grid#background}background(){api}, {api:anychart.core.resource.Grid#overlay}overlay(){api}, 

- {api:anychart.core.resource.Grid#evenFill}evenFill(){api}, {api:anychart.core.resource.Grid#evenHatchFill}evenHatchFill(){api}, {api:anychart.core.resource.Grid#evenHolidayFill}evenHolidayFill(){api}, {api:anychart.core.resource.Grid#evenHolidayHatchFill}evenHolidayHatchFill(){api} are used when it is neessary to adjust even rows of the table

- {api:anychart.core.resource.Grid#oddFill}oddFill(){api}, {api:anychart.core.resource.Grid#oddHatchFill}oddHatchFill(){api}, {api:anychart.core.resource.Grid#oddHolidayFill}oddHolidayFill(){api}, {api:anychart.core.resource.Grid#oddHolidayHatchFill}oddHolidayHatchFill(){api} are used when it is necessary to adjust odd rows of the table

- {api:anychart.core.resource.Grid#horizontalStroke}horizontalStroke(){api} and {api:anychart.core.resource.Grid#verticalStroke}verticalStroke(){api} are used for stroke adjusting

- {api:anychart.scales.DateTimeWithCalendar#unitPixSize}unitPixSize(){api} method will set the width of the grid columns.

```
// Get grid
grid = chart.grid();
// grid settings
grid.evenFill("#E7ECF0");
grid.oddFill("#F3F7FA");
grid.evenHolidayHatchFill("forwardDiagonal");
grid.oddHolidayHatchFill("forwardDiagonal");
// set columns width
chart.xScale().unitPixSize(140);
```

{sample}Resource\_Visualization\_04{sample}


## Activity parameters list

- {api:anychart.core.resource.Activities#fill}fill(){api}, {api:anychart.core.resource.Activities#hatchFill}hatchFill(){api}, {api:anychart.core.resource.Activities#stroke}stroke(){api}, {api:anychart.core.resource.Activities#labels}labels(){api} set the color, fill, hatch fill, and stroke

- {api:anychart.core.resource.Activities#hoverFill}hoverFill(){api}, {api:anychart.core.resource.Activities#hatchHoverFill}hatchHoverFill(){api}, {api:anychart.core.resource.Activities#hoverStroke}hoverStroke(){api}, {api:anychart.core.resource.Activities#hoverLabels}hoverLabels(){api} configure the visual settings on hover

- {api:anychart.core.resource.Activities#selectFill}selectFill(){api}, {api:anychart.core.resource.Activities#hatchSelectFill}hatchSelectFill(){api}, {api:anychart.core.resource.Activities#hatchSelectFill}hatchSelectFill(){api}, {api:anychart.core.resource.Activities#selectStroke}selectStroke(){api} configure the visual settings on select

Let's configure our sample's activities and try to make them more emphatic.

```    
// Get activities
activities = chart.activities();

// activities fills
activities.fill("#c7b299");
activities.hoverFill("#ffcc80");
activities.selectFill("#86614e");

// activities labels settings
labels = activities.labels();
selectLabels = activities.selectLabels();
labels.fontFamily("Georgia");
labels.fontColor("#000");
selectLabels.fontColor("#fff");
```

{sample}Resource\_Visualization\_05{sample}


### Split Activity Feature

There is one more feature about Activities in AnyChart Resource Charts. When one Activity consists of several tasks, it is possible to split this huge activity into these small tasks, avoiding them to become separate activities. All tasks the activity consists of will behave as one complicated object, e.g. when a cursor is put over one of those subtasks, all of them will be hovered; if one of them is clicked, the whole activity will be selected. Another interpretation of a split activity is a repeating activity, which has several time periods set.

The sample we are working with has a couple of activities of this type:

```
{
	"name": " ",
    "group": "individual lessons time",
    "intervals": [{"start":"2016-06-10", "end": "2016-06-10", "minutesPerDay": 120}, {"start": "2016-06-12", "end": "2016-06-12", "minutesPerDay": 120}]
},
{
	"name": " ",
    "group": "individual lessons time",
    "intervals": [{"start":"2016-06-11", "end": "2016-06-11", "minutesPerDay": 120}, {"start": "2016-06-13", "end": "2016-06-13", "minutesPerDay": 120}, {"start": "2016-06-15", "end": "2016-06-15", "minutesPerDay": 120}]
}
```

Note there are no special methods for split activities, so the only way to adjust any visual settings for those is to use the dataset:

```
{
    "name": "individual lessons time",
    "intervals": [{"start":"2016-06-11", "end": "2016-06-11", "minutesPerDay": 120}, {"start": "2016-06-13", "end": "2016-06-13", "minutesPerDay": 120}, {"start": "2016-06-15", "end": "2016-06-15", "minutesPerDay": 120}],
    "fill": "#e6ecff",
    "hoverFill": "#e6ecff",
    "selectFill": "#ccd8ff",
    "hatchFill": "forwardDiagonal",
    "hoverHatchFill": "backwardDiagonal",
    "selectHatchFill": "diagonalCross",         
    "label": {
        "fontColor": "#000055",
        "textWrap": "byWord",
        "hAlign": "center"
    }
},
```

{sample}Resource\_Visualization\_06{sample}


## Conflict parameters

Conflict is a feature that creates itself in case there are two or more activities set for one resource at the same time. It looks like a red line above an activity/those activities which form more hours than available during the day.

Note that the maximum working hours a day is set to 24 by default. To change this parameter, use [Calendar](Calendar).

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

```
// Conflicts settings
conflicts.fill("#911B58");
conflicts.hatchFill("diagonalCross");
conflicts.stroke("#000");
```

{sample}Resource\_Visualization\_07{sample}


## Scrollers

Scrollers in Resource Charts are usual scrollers which can be found almost on any page. Use them to scroll the grid with activities and resources. There can be both vertical and horizontal scrollers, depending on the number of resources and on the time period the calendar covers.

To edit the view of the vertical scroller, use the {api:anychart.charts.Resource#verticalScrollBar}verticalScrollBar(){api} method, for the horizontal one use {api:anychart.charts.Resource#horizontalScrollBar}horizontalScrollBar(){api}. 

Let's add thumbs to both scrollers and fill them with another color:

```
// horizontal scroller
horizontalScrollBar = chart.horizontalScrollBar();
horizontalScrollBar.thumbs(true);
horizontalScrollBar.fill("#B2D7FF");

// vertical scroller
verticalScrollBar = chart.verticalScrollBar();
verticalScrollBar.thumbs(true);
verticalScrollBar.fill("#B2D7FF");
```

{sample}Resource\_Visualization\_08{sample}


## Appearance settings from Data

Most of the settings described above can be defined through the data. The following sample demonstrates how to adjust the visual appearance for some elements of a Resource Chart using the dataset.

```
{
    "name": "Aqua Zone",
    "defaultMinutesPerDay": 240,
    "activities": [
        {
            "name": "WATER AEROBICS",
            "fill": "#00CCCC",
            "hoverFill": "#C9FFFF",
            "selectFill": "#007474",
            "label": {"fontColor": "#000055","textWrap": "byWord", "hAlign": "center"},
            "start": "2016-06-10",
            "end": "2016-06-10",
            "minutesPerDay": 120
        }
    ]
}
```

One of the advantages of this way of adjusting the colors and other visual settings is an opportunity to adjust elements separately from similar ones and make them unique for some reasons.

{sample}Resource\_Visualization\_09{sample}