{:index 14}
Map Labels
======================

* [Overview](#overview)
* [Common Settings](#common_settings)
* [Source Data Access](#source_data_access)
* [Overlap](#overlap)
* [Positioning](#positioning)
 * [Inside](#inside)
 * [Out of region labels](#out_of_region_labels)
* [Callout](#callout)

## Overview 

Labels in Maps are somewhat similar to the usual labels you can find and configure for any other chart type, with the common differences of keywords and the fact that some data is provided by the map source itself.

To learn about Labels editing and formatting in general please visit [Text Settings](../Appearance_Settings/Text_Settings) and [Text Formatters](..\Common_Settings/Text_Formatters).

To learn about creating maps visit [Quick Start](Quick_Start) article.

## Common Settings

In AnyMaps, we can use labels the same as in our charts: add and format them for images, create text labels related to series or not, attach actions and so on. Let's demonstrate here all these abilities of our labels. 

To make points show labels, use {api:anychart.core.map.series.Choropleth#labels}labels(){api}. There are a lot of different methods which are to customize your chart, like {api:anychart.core.ui.LabelsFactory#fontColor}fontColor(){api} to set the color of the label text, {api:anychart.core.ui.LabelsFactory#fontSize}fontSize(){api} to define the text size, {api:anychart.core.ui.LabelsFactory#offsetX}offsetX(){api} and {api:anychart.core.ui.LabelsFactory#offsetY}offsetY(){api} to move the label and else. You can find more in the [Common Labels](../Common_Settings/Labels) article.

Let's take a simple choropleth map of Australia as a basic map for our samples.

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

In the sample above we have used a lot of settings for custom graphic elements and a listener, which monitors resizing of a stage and recalculates the coordinates of the image. Visit the [Common Labels](../Common_Settings/Labels) and [Text Settings](../Appearance_Settings/Text_Settings) articles to know more about those appearance settings used, and the [Event Listener](../Common_Settings/Event_Listeners) article will help you to consider the listeners.


## Source Data Access

Labels are not only used to show the names of the regions or any other information that is defined in the data set. It's possible to adjust labels to make them show some properties that are defined only in the data source. In AnyMap there is a {api:anychart.core.ChoroplethPoint#getFeatureProp}getFeatureProp(){api} method, that allows to get any information from the geoJson data. Look at the next sample and explore it in the playground to understand how it works.

That's how properties look in geoJSON:

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

There are some properties that are not mentioned in the data set, but still we can get those values and show them in labels. Let's get the longitude and latitude using {api:anychart.core.ChoroplethPoint#getFeatureProp}getFeatureProp(){api} method:

```
// get some values from geoJSON
map.listen("pointMouseOver", function (e) {
  // Gets point properties.
  var properties = e.point.getFeatureProp();
  //labels.text(text);
  labels.textFormatter("Name: " + properties.name + "\nLongitude: " + properties.longitude + "\nLatitude: " + properties.latitude)
});

map.listen("pointMouseOut", function (e) {
  // Gets point properties.
  var properties = e.point.getFeatureProp();
  labels.textFormatter("Name" + properties.name);
});
```

{sample}Maps\_Labels\_03{sample}

You can find the geoJSON map on our [cdn](http://cdn.anychart.com/geodata/1.2.0/countries/australia/australia.json).


## Overlap

Sometimes there are a lot of tiny regions on maps, and their labels are not able to suit the sizes of their regions. In these cases it's just necessary to have an opportunity to disable and enable some of them.

### Map

In AnyMap, the {api:anychart.charts.Map#overlapMode}overlapMode(){api} method stands for hiding and showing this kind of labels. It supports two types of arguments: boolean and string. If use booleans, "true" allows labels to overlap each other, "false" disables them. If use enums, "anychart.enums.LabelsOverlapMode.NO_OVERLAP" will disable overlapping labels and "anychart.enums.LabelsOverlapMode.ALLOW_OVERLAP" will allow it. Look at the next sample.

```
map.overlapMode(false);
```

```
map.overlapMode(anychart.enums.LabelsOverlapMode.NO_OVERLAP);
```

Both code samples do the same: disable labels that overlap each other.

{sample}Maps\_Labels\_04{sample}


### Series

In the previous paragraph we considered working with labels of the whole map. AnyMap allows to change the settings to the determined series if necessary. To set the overlapping mode we use the {api:anychart.core.map.series.Choropleth#overlapMode}overlapMode(){api} method with the series, and remember that series setting have a higher priority than the map overlap settings. It means that it's possible to disable all labels that overlap each other on a map but enable those for determined series.

The {api:anychart.core.map.series.Choropleth#overlapMode}overlapMode(){api} method supports the same methods as the same method for maps; moreover, if we set "null", the overlapping mode of the series inherits the behaviour from the map.

```
// set the overlapping mode for the map
map.overlapMode(false);
// enable overlapping for series
series_confederate.overlapMode("allowOverlap");
series_union_terr_ps.overlapMode(true);
```

{sample}Maps\_Labels\_05{sample}

Note that this setting isn't being changed if the map is zoomed, but during the zooming process itself you can see some labels overlapping each other. This is made on purpose to make the process of zooming more graphic.

If there are several labels in a series overlapping each other, set the "labelrank" property to those regions. The label of a region with a higher labelrank will be shown, while other overlapping labels will be disabled. It helps to show as many labels as possible. If there are two labels belong to different series with the same "labelrank" value, set the "index" parameter to the series.

Those properties can be set through the geoJSON code or through the data set.

```

var dataSet_union = anychart.data.set([
    {id: 'US.CA', name: "California", "labelrank": 5},
    {id: 'US.NV', name: "Nevada", "labelrank": 3},
    {id: 'US.WI', name: "Wisconsin", "labelrank": 5},
    {id: 'US.NY', name: "New York"},
    {id: 'US.PA', name: "Pennsylvania"},
    {id: 'US.ME', name: "Maine"},
    {id: 'US.MI', name: "Michigan", "labelrank": 3}
]);

var dataSet_confederate = anychart.data.set([
    {id: 'US.VA', name: "Virginia", "labelrank": 0},
    {id: 'US.DE', name: "Delaware", "labelrank": 1},
    {id: 'US.DC', name: "District of Columbia"},
    {id: 'US.MD', name: "Maryland", "labelrank": 5},
    {id: 'US.NJ', name: "New Jersey"}
]);

var dataSet_union_border_states = anychart.data.set([
    {id: 'US.KY', name: "Kentucky"},
    {id: 'US.WV', name: "West Virginia", "labelrank": 5}
]);
```

Note that the map's or series' overlapping mode set through the {api:anychart.core.map.series.Choropleth#overlapMode}overlapMode(){api} method has the highest priority, so even if some of the labels have the highest labelrank, but overlapping is forbidden for their series or the whole map, those labels will not be displayed. The similar situation is for the opposite case: if your series has overlapping allowed, setting labelranks will have no sense as all labels will be displayed anyway.

{sample}Maps\_Labels\_06{sample}

You can see that the label of Virginia is still displayed despite we have set the lower labelrank for it than West Virginia has. It is easily explained by the fact that the overlappping mode is turned off for the Border States series, which West Virginia belongs to. Also, you could have noticed that Wisconsin state label is now displayed while the label of Michigan became hidden. The labels of Maryland and Delaware are both shown despite they've got different labelranks - it means that the overlapping is allowed for the series those states belong to. That's how the labelranks work.


## Positioning

It's quite important where to place labels in the map. They are displayed in the center of a region by default, but sometimes it might be necessary to set the different placement for some of the labels. For example, if one of the sides of region is longer than the opposite one, it may lead to a situation when only a part of a label is displayed inside a region, and the other part is shown on the other region's territory or outside of a map.

We can adjust positioning of the labels inside the regions or outside, depends on regions' sizes and our preferences. Also positioning can be a great help when it's necessary to avoid allowing overlap, but to show as many labels as possible.

### Inside

To set the custom position of the labels inside the regions, set "middle-x" and "middle-y" properties through the geo data or data set of a map.

Another property is responsible for positioning around the "middle-x" and "middle-y" coordinates: set "middleXYmode" as relative or absolute. When the "middleXYmode" property is "relative", the default middle-x and middle-y values will be considered as 0.5, so keep it in mind while setting the "middle-x" and "middle-y" properties.

```
var dataSet_union = anychart.data.set([
    {id: 'US.MN', name: "Minnesota"},
    {id: 'US.CA', name: "California", "labelrank": 5},
    {id: 'US.NV', name: "Nevada", "labelrank": 3, "middle-x": 0.5, "middle-y": 0.3, middleXYMode: "relative"},
    {id: 'US.OR', name: "Oregon"},
    {id: 'US.IA', name: "Iowa"},
    {id: 'US.KS', name: "Kansas"},
    {id: 'US.CT', name: "Connecticut"},
    {id: 'US.MA', name: "Massachusetts"},
    {id: 'US.NH', name: "New Hampshire"},
    {id: 'US.RI', name: "Rhode Island"},
    {id: 'US.VT', name: "Vermont"},
    {id: 'US.IL', name: "Illinois", "middle-y": 0.25, middleXYMode: "relative"},
    {id: 'US.IN', name: "Indiana"},
    {id: 'US.OH', name: "Ohio"},
    {id: 'US.WI', name: "Wisconsin", "labelrank": 5},
    {id: 'US.NY', name: "New York"},
    {id: 'US.PA', name: "Pennsylvania"},
    {id: 'US.ME', name: "Maine"},
    {id: 'US.MI', name: "Michigan", "labelrank": 3, "middle-x": 0.5, "middle-y": 0.3, middleXYMode: "relative"}
]);

var dataSet_confederate = anychart.data.set([
    {id: 'US.AR', name: "Arkansas"},
    {id: 'US.FL', name: "Florida", "middle-x": 0.7, "middle-y": 0.3, middleXYMode: "relative"},
    {id: 'US.GA', name: "Georgia"}
]);
```

{sample}Maps\_Labels\_07{sample}

These properties can be set through the geoJSON code:

```
"properties": {
	"labelrank": 0, 
	"code_hasc": "US.MI", 
	"name": "Michigan", 
	"admin": "United States of America", 
	"type_en": "State", 
	"region": "Midwest", 
	"woe_id": 2347581, 
	"woe_name": "Michigan", 
	"longitude": -84, 
	"woe_label": "Michigan, US, United States", 
	"fips": "US26", 
	"iso_a2": "US", 
	"latitude": 43, 
	"objectid_1": 3202, 
	"postal": "MI", 
	"type": "State", 
	"id": "US.MI"
}},
```
{sample}Maps\_Labels\_08{sample}

The following sample demonstrates several region labels set with "absolute" positioning through the data set:

```
var dataSet_union = anychart.data.set([
    {id: 'US.MN', name: "Minnesota"},
    {id: 'US.CA', name: "California", "labelrank": 5},
    {id: 'US.NV', name: "Nevada", "labelrank": 3, "middle-x": -117.2, "middle-y": 40.06, middleXYMode: "absolute"},
    {id: 'US.OR', name: "Oregon"},
    {id: 'US.IA', name: "Iowa"},
    {id: 'US.KS', name: "Kansas"},
    {id: 'US.CT', name: "Connecticut"},
    {id: 'US.MA', name: "Massachusetts"},
    {id: 'US.NH', name: "New Hampshire"},
    {id: 'US.RI', name: "Rhode Island"},
    {id: 'US.VT', name: "Vermont"},
    {id: 'US.IL', name: "Illinois", "middle-x": -89.5, "middle-y": 40.2, middleXYMode: "absolute"},
    {id: 'US.IN', name: "Indiana"},
    {id: 'US.OH', name: "Ohio"},
    {id: 'US.WI', name: "Wisconsin", "labelrank": 5},
    {id: 'US.NY', name: "New York"},
    {id: 'US.PA', name: "Pennsylvania", "middle-x": -80.3, "middle-y": 41.9, middleXYMode: "absolute"},
    {id: 'US.ME', name: "Maine"},
    {id: 'US.MI', name: "Michigan", "labelrank": 3, "middle-x": -86.5, "middle-y": 46.4, "middleXYMode": "absolute"}
]);
```
{sample}Maps\_Labels\_09{sample}

Note that if the middleXYMode property is absolute, it's necessary to set both middle-x and middle-y. Middle-x stands for longitude and middle-y represents latitude for the label.


### Out of region labels

If it's necessary to show the labels for those tiny regions, it's possible to display labels outside of the them. In this case set the X and Y coordinates of a label through the geo data or data set of your map. Set the "positionMode" property (through the data set or the geoJSON) to set the correct positioning of the label according to the coordinates set. There are three position modes: relative, absolute and offset. Setting positionMode as "offset" will lead to considering the "x" coordinate as angle (in grades) and y as the connector length. Note that in this mode the distance between the middle point of the region and its labels will not change even when map is being zoomed.

In the sample below there are some regions with labels set as inside (with middle- coordinates) and others are set as outside in different modes.

```
var dataSet_union = anychart.data.set([
    {id: 'US.MN', name: "Minnesota"},
    {id: 'US.CA', name: "California", "labelrank": 5},
    {id: 'US.NV', name: "Nevada", "labelrank": 3, "middle-x": -117.2, "middle-y": 40.06, "middleXYMode": "absolute"},
    {id: 'US.OR', name: "Oregon"},
    {id: 'US.IA', name: "Iowa"},
    {id: 'US.KS', name: "Kansas"},
    {id: 'US.CT', name: "Connecticut", label: {x: -70.6, y: 39.5, positionMode: "absolute"}},
    {id: 'US.MA', name: "Massachusetts", label: {x: 60, y: 50, positionMode: "offset"}},
    {id: 'US.NH', name: "New Hampshire", label: {x: 345, y: 40, positionMode: "offset"}},
    {id: 'US.RI', name: "Rhode Island", label: {x: -70.5, y: 41.2, positionMode: "absolute"}},
    {id: 'US.VT', name: "Vermont"},
    {id: 'US.IL', name: "Illinois", "middle-x": -89.5, "middle-y": 40.2, "middleXYMode": "absolute"},
    {id: 'US.IN', name: "Indiana"},
    {id: 'US.OH', name: "Ohio"},
    {id: 'US.WI', name: "Wisconsin", "labelrank": 5},
    {id: 'US.NY', name: "New York"},
    {id: 'US.PA', name: "Pennsylvania", label: {x: 0.25, y: -0.35, positionMode: "relative"}},
    {id: 'US.ME', name: "Maine"},
    {id: 'US.MI', name: "Michigan", "labelrank": 3, "middle-x": -86.5, "middle-y": 46.4, "middleXYMode": "absolute"}
]);
```

{sample}Maps\_Labels\_10{sample}

Also there is a connector created specially for the labels outside of regions. The {api:}connectorStroke(){api} method will help you to adjust its appearance. Also the connector color can be set through the data set. Setting the connector stroke color in "null" will disable the connector.

```
var dataSet_union = anychart.data.set([
    {id: 'US.CT', name: "Connecticut", label: {x: -70.6, y: 39.5, positionMode: "absolute"}, connectorStroke: "red"},
    {id: 'US.MA', name: "Massachusetts", label: {x: 60, y: 50, positionMode: "offset"}, connectorStroke: null}
]);

// set the connector stroke color
series_union.labels().connectorStroke("gold");
```

{sample}Maps\_Labels\_11{sample}


## Callout

In AnyMaps, it's possible not to connect labels to their regions and demonstrate them in a line, on a side of the map.