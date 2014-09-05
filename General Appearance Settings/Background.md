# Background                                                                                 
                                                                                    
* [Overview](#overview)                                      
* [Stroke Settings](#stroke)                                 
* [Fill Settings](#fill)
  * [Solid Fill](#solid-fill)         
  * [Gradient Fill](#gradient-fill)                  
  * [Image Fill](#image-fill)                           
* [Corners Settings](#corners)                                
* [Inside Margins Settings](#margins)                          
                                                           
<a name="overview"/>
## Overview
In this tutorial we will explain in details how to configure background in AnyChart.

Background consists of fill, stroke and border corners. These element are configured using **.fill()**, **.border()** and **.corners()** attributes.

Background is used in chart titles, labels, tooltips, chart background, data plot, and many more, but they are configured the same way.

Below you will find the reference of most important attributes of the mentioned nodes and see the demonstration of theirs settings.

<a name="stroke"/>
## Stroke Settings

Border is configured using **.stroke()** attributes. Border can be of **"Solid"**, **"Dashed"** and **"Gradient"** type. If type is **"Solid"**, then color is specified using color attribute; to configure **"Gradient"** you have to use gradient keys. Dashed orders have to be set with special keys too.

Typical solid stroke settings look like:

```
  chart.background().stroke('5 red');
```
Typical gradient stroke settings look like:
```
  chart.background().stroke({
    keys: ['.1 red', '.5 yellow', '.9 blue'],
    angle: 45,
    thickness: 5
  });
```
Typical dashed stroke settings look like:
```
    chart.background().stroke({color: 'red', dash: '5 2 5', thickness: 5});
```

On the chart below you may see 3 different stroke types and dashboard without stroke.

{sample}GAS\_Background\_01{sample}

<a name="fill"/>
## Fill Settings

With AnyChart it is possible to color background with a solid color, with a gradient transition or fill it with an image. Fill is configured in the **.fill()** attribute and depending on the type it has different settings.

<a name="solid-fill"/>
### Solid Fill

When fill type is set to "Solid", background is filled with one color and you can control this color opacity.<!-- Colors can be defined with any of the methods described in [Linl in need]]Color management tutorial[/link].--> Typical solid fill settings are:

```
    chart.background().fill('gold');
```

In the sample below chart, data plot and chart title backgrounds are colored with a solid fill:

{sample}GAS\_Background\_02{sample}

<a name="gradient-fill"/>
### Gradient Fill

AnyChart allows to create Gradient fills for any background. To create gradient fill you need to set type="Gradient" and configure gradient settings in <gradient> sub-node.

There are two types of gradient fills - "Linear" and "Radial"

Typical gradient border settings look like:

``` 
    chart.background().fill({
        keys: ['.1 lightblue', '.7 blue', '.9 darkblue'],
        angle: -130,
    });
```
The sample below demonstrates how gradient fill can be used to create really attractive area chart, if you will take a closer look at this chart configuration XML you will see that sometimes color is defined as "DarkColor(#1D8BD1)" or "DarkColor(%Color)" - these are color transformation functions and color parameters, to understand what they are and how they can be used please refer to Color management tutorial.

Live Sample:  Background Linear Gradient Fill Sample

The same sample, but with radial gradient fill:

Live Sample:  Background Radial Gradient Fill Sample

to top

Image Fill

Image fill allows you to set an image as a background, an image can be stretched, tiled or fit by proportions. Supported image formats are JPEG, GIF, PNG.

Typical image background settings are:

XML Syntax
XML Code
Plain code
01
<fill enabled="True" type="Image" image_url="sample.jpg" image_mode="Tile" />
In the sample below chart background is filled with a JPEG image:

Live Sample:  Background Image Fill Sample

to top

Resources Path

By the way: you can configure path for loading external resources - like images. In the sample above we've set:

XML Syntax
XML Code
Plain code
01
<?xml version="1.0" encoding="UTF-8"?>
02
<anychart>
03
  <settings>
04
    <resources path="../img/" path_type="relativeToSWF" />
05
  </settings>
06
</anychart>
This way we've told AnyChart where it should look for images and were able to set only: image_url="image_fill.jpg" in image fill settings. Path type can be: "RelativeToHTML", "RelativeToSWF", "Absolute".

to top

Hatch-Fill Settings

Hatch fill covers background with the given repeating pattern of the defined size, these fills are extremely useful for black and white printing and for those who are color-blind.

XML Syntax
XML Code
Plain code
01
<hatch_fill enabled="True" type="Confetti" pattern_size="5" color="Black" thickness="1" />
In the sample below chart and data plot backgrounds are filled with the different hatch fills:

Live Sample:  Background Hatch-Fill Sample

to top

Corners Settings

You can adjust the shape of borders corners, there are 4 types for corners: "Square", "Rounded", "Cut" and "RoundedInner". Appearance of these types is shown on the image below:



For "Rounded", "Cut" and "RoundedInner" types you can control not only a shape, but also a radius of "rounding" or "cutting" for all corners, or given corners.

Typical settings for "rounding" all corners are:

XML Syntax
XML Code
Plain code
01
<corners type="Rounded" all="10" />
To set only left top corner shape to "Cut" type settings like this should be used:

XML Syntax
XML Code
Plain code
01
<corners type="Cut" all="0" left_top="10" />
The dashboard below demonstrates all possible corners types:

Live Sample:  Background Corners Sample

to top

Inside margins

If you want to increase or decrease the spaces between border and background content (texts, chart, etc.) you can do that setting inside margins. Margins are measured in pixels. Every side margin can be set individually, "all" attribute is used to set them all together. Note that every individual settings override "all" value.

Typical settings for inside margins are:

XML Syntax
XML Code
Plain code
01
<inside_margin left="5" top="5" right="5" bottom="5" all="10" />
In the sample below we will adjust margins for chart title and for chart itself.

Live Sample:  Background Margins Sample

to top

Using Effects

You can apply one or several effects to background, to that you should specify <effects> node and add required effects sub-nodes. To learn more about effects, please refer to Using Effects Tutorial .

Typical effects settings are:

XML Syntax
XML Code
Plain code
01
<effects>
02
  <glow enabled="true" color="Red" blur_x="20" blur_y="20" opacity="0.5" />
03
  <drop_shadow enabled="true" />
04
</effects>
Below you can see a sample of glow effect application to chart background.

Live Sample:  Background Effects Sample

to top

Current Page Online URL: Background Configuration Tut