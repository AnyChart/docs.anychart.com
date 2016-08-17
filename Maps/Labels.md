{:index 14}
Map Labels
======================

* [Overview](#overview)
* [Common Settings](#common_settings)
* [Source Data Access](#source_data_access)
* [Overlap](#overlap)
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

Coming soon

## Overlap

Sometimes there are a lot of tiny regions on maps, and their labels are not able to suit the sizes of their regions. In these cases it's just necessary to have an opportunity to disable and enable some of them.

### Map

In AnyMap, the {api:anychart.charts.Map#overlapMode}overlapMode(){api} method stands for hiding and showing this kind of labels. It supports two types of arguments: boolean and string. If use booleans, "true" allows labels to overlap each other, "false" disables them. If use enums, "anychart.enums.LabelsOverlapMode.NO_OVERLAP" will disable overlapping labels and "anychart.enums.LabelsOverlapMode.ALLOW_OVERLAP" will allow it. Look at the next sample.

```
chart = anychart.map();
chart.overlapMode(false);
```

```
chart = anychart.map();
chart.overlapMode(anychart.enums.LabelsOverlapMode.NO_OVERLAP);
```

Both code samples do the same: disable labels that overlap each other.

{sample}Maps\_Labels\_03{sample}


### Series

In the previous paragraph we considered working with labels of the whole map. AnyMap allows to change the settings to the determined series if necessary. To set the overlapping mode we use the {api:anychart.charts.Map#overlapMode}overlapMode(){api} method with the series, and remember that series setting are more 


Coming soon

## Out of region labels

Coming soon

## Callout

Coming soon
