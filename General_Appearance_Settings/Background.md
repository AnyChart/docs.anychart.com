# Background                                                                                 

* [Overview](#overview)
* [Stroke Settings](#stroke)
* [Fill Settings](#fill)
  * [Solid Fill](#solid-fill)
  * [Gradient Fill](#gradient-fill)
  * [Image Fill](#image-fill)
* [Corners Settings](#corners)                         
                                                           
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
The sample below demonstrates how gradient fill can be used to create really attractive area chart.

{sample}GAS\_Background\_03{sample}

The same sample, but with radial gradient fill:

{sample}GAS\_Background\_04{sample}

<a name="image-fill"/>
### Image Fill

Image fill allows you to set an image as a background, an image can be **stretched**, **tiled** or fit by **proportions**. Supported image formats are JPEG, GIF, PNG.

Typical image background settings are:

```
    chart.background().fill({
        src: 'http://static.anychart.com/underwater.jpg',
        mode: acgraph.vector.ImageFillMode.FILL
    });
```

{sample}GAS\_Background\_05{sample}

<a name="corners"/>
## Corners Settings

You can adjust the shape of borders corners, there are 4 types for corners: **"Square"**(none), **"Rounded"**, **"Cut"** and **"RoundedInner"**. Appearance of these types is shown on the image below:

![](http://anychart.com/products/anychart/docs/users-guide/img/corners_table.png)

For "Rounded", "Cut" and "RoundedInner" types you can control not only a shape, but also a radius of "rounding" or "cutting" for all corners, or given corners.

Typical settings for "rounding" all corners are:

```
    chart.background().stroke('3 red')
        .cornerType('round')
        .corners(10);
```
Also, it is possible to choose radius of any corner. Just set four number for every corner in this order: top-left, top-right, bottom-left, bottom-right corner. If a radius set to 0, no effect would be applied. Setting for bottom-right and bottom-left corners adjusting:
```
    chart.background().stroke('black')
        .cornerType('cut')
        .corners(0, 0, 5, 5);
```

The dashboard below demonstrates all possible corners types:

{sample}GAS\_Background\_06{sample}
