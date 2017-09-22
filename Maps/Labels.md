{:index 14}
# Map Labels

## Overview 

Labels in Maps are somewhat similar to the usual labels you can find and configure for any other chart type, with the common differences of keywords and the fact that some data is provided by the map source itself.

To learn about Labels editing and formatting in general please visit [Text Settings](../Appearance_Settings/Text_Settings) and [Text Formatters](../Common_Settings/Text_Formatters).

To learn about creating maps visit [Quick Start](Quick_Start) article.

## Common Settings

In AnyMaps, labels are being used the same as in the charts: you can add and format them, create text labels related to series or not, attach actions, use images as labels and so on. All these abilities are demonstrated below.

To make points show labels, use {api:anychart.core.map.series.Choropleth#labels}labels(){api}. There are a lot of different methods which are to customize your chart, like {api:anychart.core.ui.LabelsFactory#fontColor}fontColor(){api} to set the color of the label text, {api:anychart.core.ui.LabelsFactory#fontSize}fontSize(){api} to define the text size, {api:anychart.core.ui.LabelsFactory#offsetX}offsetX(){api} and {api:anychart.core.ui.LabelsFactory#offsetY}offsetY(){api} to move the label and else. You can find more in the [Common Labels](../Common_Settings/Labels) article.

A simple choropleth map of Australia is used as a basis for the following samples.

```
// enable labels
series.labels(true);
labels = series.labels();
    
// labels setting
labels.fontColor('black');
labels.fontSize("10px");
labels.offsetY(30);
```

{sample}Maps\_Labels\_01{sample}

Let's now create labels not related to the series points: add some descriptive text and an image. To add an image use {api:anychart.graphics#image}image(){api} method, to add text to a custom label use {api:anychart.graphics#text}text(){api}, and don't forget to use "stage" as a container - it is necessary to work with images and other custom elements.

```
// custom text label
custom_label = map.label();
custom_label.text("Australia's sons let us rejoice, \nFor we are young and free;\nWe've golden soil and wealth for toil,\nOur home is girt by sea;\nOur land abounds in Nature's gifts\nOf beauty rich and rare;\nIn hist'ry's page, let ev'ry stage\nAdvance Australia fair.\nIn joyful strains then let us sing,\nAdvance Australia fair.");  
custom_label.position("rightcenter");
custom_label.anchor("rightcenter");
custom_label.offsetX(30);
custom_label.width(210);
custom_label.fontSize(10);
custom_label.fontColor("black");
  
// custom image label
image = stage.image("//static.anychart.com/images/australia.png");
image.width(150);
image.height(150);
image.x(stage.width()-225);
image.y(stage.height()/2-75);
stage.listen("stageresize", function(){
    image.x(stage.width()-200);
    image.y(stage.height()/2-50);
});
image.opacity("0.3");
image.zIndex(map.zIndex()+1);
```

{sample}Maps\_Labels\_02{sample}

In the sample above there are many settings for custom graphic elements and a listener used, which monitors resizing of a stage and recalculates the coordinates of the image. Visit the [Common Labels](../Common_Settings/Labels) and [Text Settings](../Appearance_Settings/Text_Settings) articles to know more about those appearance settings. The [Event Listener](../Common_Settings/Event_Listeners) article will help you to understand the listeners.

## Source Data Access

Labels can get information to show not only from data sets, it is possible to obtain any property defined in the GeoJSON map source file. Look at the next sample and explore it in the playground to understand how it works.

Labels are not only used to show the names of the regions or any other information that is defined in the data set. It is possible to adjust labels to make them show some properties that are defined only in the data source. 

That is how properties are set in GeoJSON:

```
"properties": {
    "labelrank": 2, 
    "code_hasc": "AU.NT", 
    "name": "Northern Territory", 
    "admin": "Australia", 
    "type_en": "Territory", 
    "region": "", 
    "woe_id": 2344701, 
    "longitude": 133, 
    "woe_name": "Northern Territory", 
    "fips": "AS03", 
    "woe_label": "Northern Territory, AU, Australia", 
    "latitude": -20, 
    "iso_a2": "AU", 
    "postal": "NT", 
    "type": "Territory", 
    "id": "AU.NT"
}
```

Use the **regionProperties** property of the text formatter context to get any information from the GeoJson data. Look at the next sample and explore it in the playground to understand how it works:

```
// format labels text
labels.format(function () {
    // Gets point source region properties.
    var properties = this.regionProperties;
    return properties["postal"] + " (" + properties["type"] + ")";
});
```

{sample}Maps\_Labels\_03{sample}

You can find the map of Australia in GeoJSON map on [AnyChart CDN](https://cdn.anychart.com/geodata/1.2.0/countries/australia/australia.json).

## Overlap

Some maps contain tiny regions, so it is just necessary to have an opportunity to control labels overlap. In these cases it is just necessary to have an opportunity to disable and enable some of them.

### Map

In AnyMap, the {api:anychart.charts.Map#overlapMode}overlapMode(){api} method stands for hiding and showing this kind of labels. It supports two types of arguments: boolean and string. If use booleans, "true" allows labels to overlap each other, "false" disables those which overlap. If use enums, "no-overlap" will disable overlapping labels and "allow-overlap" will allow it. Look at the next sample.

```
map.overlapMode(false);
```

or

```
map.overlapMode("no-overlap");
```

Both code samples do the same: disable labels that overlap each other.

{sample}Maps\_Labels\_04{sample}

### Series

In the previous paragraph we have considered working with labels of the whole map. AnyMap allows to change the settings of the determined series if necessary. To set the overlapping mode use the {api:anychart.core.map.series.Choropleth#overlapMode}overlapMode(){api} method with the series, and remember that the series overlapping mode has a higher priority than the map overlapping mode. It means that it is possible to disable all labels that overlap each other on the whole map but enable those for determined series.

The {api:anychart.core.map.series.Choropleth#overlapMode}overlapMode(){api} method supports the same arguments as the same method for maps; moreover, if set "null", the overlapping mode of the series inherits the behaviour from the map.

```
// set the overlapping mode for the map
map.overlapMode(false);
// enable overlapping for the series
series_obama.overlapMode("allow-overlap");
```

{sample}Maps\_Labels\_05{sample}

Note that this setting isn't being changed if the map is zoomed, but during the zooming process itself you can see some labels overlapping each other even if it is restricted. This is made on purpose to make the process of zooming more graphic.

It is also possible to manage each region's label separately. If there are several labels in a series overlapping each other, set the "labelrank" property to those regions. The label of a region with a higher labelrank will be shown, while other overlapping labels will be disabled. It helps to show as many labels as possible. If there are two labels belong to different series with the same "labelrank" value, the "index" parameter set to the series will solve the problem.

Those properties can be set through the GeoJSON code or through the data set.

```
{id: 'US.WA', name: "Washington", value: 12},
{id: 'US.CA', name: "California", value: 55, "labelrank": 5},
{id: 'US.NV', name: "Nevada", value: 6, "labelrank": 3},
{id: 'US.OR', name: "Oregon", value: 7},
{id: 'US.CO', name: "Colorado", value: 9},
{id: 'US.NM', name: "New Mexico", value: 5},
{id: 'US.WI', name: "Wisconsin", value: 10, "labelrank": 5},
```

Note that the map's or series' overlapping mode set through the {api:anychart.core.map.series.Choropleth#overlapMode}overlapMode(){api} method has the highest priority, so even if some of the labels have the highest labelrank, but overlapping is forbidden for this series or the whole map, those labels will not be displayed. The similar situation is for the opposite case: if your series has overlapping allowed, setting labelranks will have no sense as all labels will be displayed anyway.

{sample}Maps\_Labels\_06{sample}

You can see that the label of Virginia is still displayed despite it has the lower labelrank set than West Virginia has. It is easily explained by the fact that the overlappping mode is turned off for the Border States series, which West Virginia belongs to. Also, you could have noticed that Wisconsin state label is now displayed while the label of Michigan became hidden. The labels of Maryland and Delaware are both shown despite they've got different labelranks - it means that the overlapping is allowed for the series those states belong to. That is how the labelranks work.

## Positioning

It is quite important where to place labels in the map. They are displayed in the center of a region by default, but sometimes it might be necessary to set the different placement for some of the labels. For example, if one of the sides of region is longer than the opposite one, it may lead to a situation when only a part of a label is displayed inside a region, and the other part is shown on the other region's territory or outside of a map.

It is possible to adjust positioning of the labels inside the regions or outside, depends on regions' sizes and our preferences. Also positioning can be a great help when it is necessary to avoid allowing overlap, but to show as many labels as possible.

### Inside

To set the custom position of the labels inside the regions, set "middle-x" and "middle-y" properties through the geo data or data set of a map.

Another property is responsible for positioning around the "middle-x" and "middle-y" coordinates: set "middleXYmode" as relative or absolute. When the "middleXYmode" property is "relative", the default middle-x and middle-y values will be considered as 0.5, so keep it in mind while setting the "middle-x" and "middle-y" properties.

```
// data sets for series
var dataSet_1 = [
    {'id': 'AU.JB', 'value': 1.5, "labelrank": 0, "middle-x": 0.5, "middle-y": 0.3, "middleXYMode": "relative"},
    {'id': 'AU.NT', 'value': 2, "middle-y": 0.5, "middleXYMode": "relative"},
    {'id': 'AU.WA', 'value': 3.2},
    {'id': 'AU.NS', 'value': 2.7}
];

var dataSet_2 = [
    {'id': 'AU.CT', 'value': 1.12, "labelrank": 9},
    {'id': 'AU.SA', 'value': 2.9, "labelrank": 5, "middle-x": 0.5, "middle-y": 0.3, "middleXYMode": "relative"},
    {'id': 'AU.VI', 'value': 3.86, "middle-x": 0.4, "middle-y": 0.6, "middleXYMode": "relative"},
    {'id': 'AU.QL', 'value': 1.1, "middle-x": 0.4, "middle-y": 0.6, "middleXYMode": "relative"},
    {'id': 'AU.TS', 'value': 1.6}
];
```

{sample}Maps\_Labels\_07{sample}

These properties can be set through the GeoJSON code:

```
"properties": {
    "labelrank": 5, 
    "middle-x": 0.5, 
    "middle-y": 0.3, 
    "middleXYMode": 
    "relative", 
    "code_hasc": "AU.SA", 
    "name": "South Australia", 
    "admin": "Australia", 
    "type_en": "State", 
    "region": "", 
    "woe_id": 2344703, 
    "longitude": 135, 
    "woe_name": "South Australia", 
    "fips": "AS05", 
    "woe_label": "South Australia, AU, Australia", 
    "latitude": -29, 
    "iso_a2": "AU", 
    "postal": "SA", 
    "type": "State", 
    "id": "AU.SA"
},
```

Put the GeoJSON code with edits as a function into the JS file and link the last:

```
<script src="https://static.anychart.com/data/maps/docs/australia_with_settings.js"></script>
```

Then load the data from the JS file:

```
map.geoData(getData());
```

{sample}Maps\_Labels\_08{sample}

The following sample demonstrates several region labels set with "absolute" positioning through the data set:

```
var dataSet_1 = [
    {'id': 'AU.JB', 'value': 1.5, "labelrank": 5, "middle-y": -36.085, "middle-x": 154.34, "middleXYMode": "absolute"}, 
    {'id': 'AU.NT', 'value': 2, "middle-y": -20.159, "middle-x": 133.66, "middleXYMode": "absolute"},
    {'id': 'AU.WA', 'value': 3.2},
    {'id': 'AU.NS', 'value': 2.7}
];

var dataSet_2 = [
    {'id': 'AU.CT', 'value': 1.12, "labelrank": 9, "middle-y": -35.355, "middle-x": 148.94, "middleXYMode": "absolute"}, 
    {'id': 'AU.SA', 'value': 2.9, "labelrank": 5, "middle-y": -28.86, "middle-x": 134.678, "middleXYMode": "absolute"},
    {'id': 'AU.VI', 'value': 3.86, "middle-y": -37.68, "middle-x": 143.77, "middleXYMode": "absolute"},
    {'id': 'AU.QL', 'value': 1.1, "middle-y": -23.335, "middle-x": 143.71, "middleXYMode": "absolute"},
    {'id': 'AU.TS', 'value': 1.6}
];
```

{sample}Maps\_Labels\_09{sample}

Note that if the *middleXYMode* property is absolute, it is necessary to set both middle-x and middle-y. Middle-x stands for longitude and middle-y represents latitude for the label.

### Out of region labels

If it is necessary to show the labels for those tiny regions, it is possible to display labels outside of the them. In this case set the X and Y coordinates of a label through the geo data or data set of your map. Set the "positionMode" property (through the data set or the GeoJSON) to set the correct positioning of the label according to the coordinates set. There are three position modes: relative, absolute and offset. Setting positionMode as "offset" will lead to considering the "x" coordinate as angle (in grades) and y as the connector length. Note that in this mode the distance between the middle point of the region and its labels will not change even when map is being zoomed.

In the sample below there are some regions with labels set as inside (with middle-coordinates) and others are set as outside in different modes.

```  
{'id': 'AU.JB', 'value': 0, label: {x: 153, y: -33, positionMode: "absolute"}},
{'id': 'AU.NT', 'value': 1},
{'id': 'AU.WA', 'value': 2},
{'id': 'AU.CT', 'value': 3, label: {x: 7, y: 5, positionMode: "relative"}},
{'id': 'AU.NS', 'value': 4}
```

{sample}Maps\_Labels\_10{sample}

On the previous sample you can see a connector between each outside label and its region - it is created specially for this kind of labels. The {api:anychart.core.ui.LabelsFactory#connectorStroke}connectorStroke(){api} method helps to adjust its appearance. Also the connector color can be set through the data set. Setting the connector stroke color in "null" will disable the connector.

```
var dataSet_1 = [
    {'id': 'AU.JB', 'value': 0, label: {x: 153, y: -33, positionMode: "absolute"}, connectorStroke: "red"}
];

// set the connector stroke color
series_2.labels().connectorStroke("green", 2, "3 3");
```

{sample}Maps\_Labels\_11{sample}

## Callout

In AnyMaps, it is possible not to connect labels to their regions and display them in a row or column, on a side of the map. To create an array of this type use the {api:anychart.charts.Map#callout}callout(){api} method. This will create an entity similar to axis on charts. The callout entity is not being zoomed or moved when map is moved or zoomed.

The code sample below demonstrates creating of two callouts, to the left and to the right of the maps:

```
// create callouts
calloutLeft = map.callout(0);
calloutRight = map.callout(1);
```

After creating the elements it is necessary to fill in the arrays with regions' IDs that will be demonstrated in those callout elements through the {api:anychart.core.ui.Callout#items}items(){api} method.

```
// set regions
calloutBottom.items(["AU.CT"]);
calloutRight.items(["AU.JB"]);
```

The {api:anychart.core.ui.Callout#align}align(){api} method helps to set the position of the label text inside of the callout. The position of the whole callout is being set through the {api:anychart.core.ui.Callout#orientation}orientation(){api} method:

```
// set callout positions
calloutBottom.orientation("bottom");
calloutRight.orientation("right");
  
// set label text position
calloutBottom.align("center");
calloutRight.align("center");  
```

To change the size of callout labels, use {api:anychart.core.ui.Callout#width}width(){api} method. By default, callout labels have a form of a square, so it is necessary to set only one measure. Though, if it is necessary to make the labels rectangular instead of a square, set the length to the whole callout element through the {api:anychart.core.ui.Callout#length}length(){api} element.

```  
// set width and length
calloutBottom.width(50);
calloutBottom.length(300);
calloutRight.width(70);
calloutRight.length(100);
```

{sample}Maps\_Labels\_12{sample}

The text that labels represent can be formatted as the usual labels text, but remember that formatting labels of the whole series will lead to changes in all labels of this series, so if you need to format only those labels that are shown in the callout element, use data set. It is possible to change the size of the label text through the {api:anychart.core.ui.LabelsFactory.Label#fontSize}fontSize(){api} method and {api:anychart.core.ui.LabelsFactory#connectorStroke}connnectorStroke(){api} method to set the color of the connector. The {api:anychart.core.ui.LabelsFactory.Label#format}format(){api} method allows to change the text displayed by the labels.

```
{'id': 'AU.JB', 'value': 0, label:{format: "Jervis \nBay \nTerritory", fontColor: "white"}},
{'id': 'AU.CT', 'value': 3, label:{fontColor: "white"}}
```

{sample}Maps\_Labels\_13{sample}