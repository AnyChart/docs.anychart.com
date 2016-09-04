{:index 2}
Advanced Coloring
===========

* [Overview](#overview)
* [Using SVG Image Colors](#using_svg_image_colors)
* [Selective Coloring](#selective_coloring)
* [Palette](#palette)
* [Color Scale and Color Range](#color_scale_and_color_range)


## Overview

There are several ways to color a set map. First option is to use the data set to set all the colors, as usual: read about it in the [Seat Map](Seat_Map) article. The second way is to use standard methods like {api:anychart.ui.Background#fill}fill(){api} and {api:anychart.ui.Background#stroke}stroke(){api}; the third way is to use classes of elements that are set in the tags in the SVG code; also, you may use AnyChart palette to set the necessary colors (this method is only reliable when there are several series on a Map) and use Color Scale and Color Range - all these options are described in this tutorial.

The SVG image in the sample below is the same file as in some samples from the from the [Seat Map](Seat_Map) and [Preparing SVG Image](Preparing_SVG_Image) articles as the basis for the samples below. That's how an SVG image looks like with the default AnyChart color palette:

{sample}Maps\_Seat\_Advanced\_Coloring\_00{sample}


## Using SVG Image Colors

The colors of the picture in the sample are different from the defined (you can find the original SVG picture <a href="http://static.anychart.com/images/docs/house.svg">[here](../../images/house.svg)). Using original colors used on the picture in considered in this paragraph, as well as using these colors as a basis of hovering and selecting colors. 

To set the colors of the original SVG image, or to set new custom colors use the {api:anychart.ui.Background#fill}fill(){api} and {api:anychart.ui.Background#stroke}stroke(){api} methods. Though, it's important to remember that not all of the elements in the SVG file have the "fill" attribute. Before setting the value to the "fill" field it's necessary to check if the element has it, and if so, set the fill color to this element. Setting colors through this method will look like the following:


```
// sets fill series
series.fill(function () {
    var attrs = this.attributes;
    if (attrs) return attrs.fill;
});

// sets stroke series
series.stroke(function () {
    var attrs = this.attributes;
    // if the stroke attribute exists in the SVG file then color it with a color set in the document
    return attrs ? attrs.stroke : this.sourceColor;
});
```

{sample}Maps\_Seat\_Advanced\_Coloring\_01{sample}

To change the interactivity colors (colors of the groups in a hovered or selected states) use the following methods: {api:anychart.core.map.series.Choropleth#hoverFill}hoverFill(){api}, {api:anychart.core.map.series.Choropleth#hoverStroke}hoverStroke(){api}, {api:anychart.core.map.series.Choropleth#selectFill}selectFill(){api} and {api:anychart.core.map.series.Choropleth#selectStroke}selectStroke(){api}

```
// set the hoverFill color 
series.hoverFill(function(){
    var attrs = this.attributes;
    return attrs ? anychart.color.lighten(attrs.fill, 0.5) : this.sourceColor;
});

// set the selectFill color
series.selectFill(function(){
    var attrs = this.attributes;
    return attrs ? anychart.color.darken(attrs.fill, 0.2) : this.sourceColor;
});

// sets stroke series
series.hoverStroke(function () {
    var attrs = this.attributes;
    return attrs ? attrs.stroke : this.sourceColor;
});

// sets stroke series
series.selectStroke(function () {
    var attrs = this.attributes;
    return attrs ? attrs.stroke : this.sourceColor;
});
```

{sample}Maps\_Seat\_Advanced\_Coloring\_02{sample}


## Selective Coloring

It's also possible to change the colors of separate elements, of parts of a group, if there are any. Though, it's necessary to know the group's structure and the classes set to those elements. In case no classes are set, it's necessary to set them, as the classes help to define the elements.
и здесь написать что - можно раскрашивать отдельно, но для этого нужно знать какая структура у групп и если не заданы классы их нужно задать и это выглядит вот так (а не "let's set classes")

It's also possible to change the colors of the parts of a group, if there are any. Let's set classes for those elements and put several elements into the plan and repaint them on being hovered.

```
<g id="hotplate">
    <rect x="156.531" y="503.167" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="40" height="33"/>
    <circle class="inner_elements"  fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="167.627" cy="513.097" r="4.929"/>
    <circle class="inner_elements"  fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="186.149" cy="513.097" r="4.929"/>
    <circle class="inner_elements"  fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="167.627" cy="527.477" r="4.929"/>
    <circle class="inner_elements"  fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="186.149" cy="527.477" r="4.929"/>
</g>
```

```
// set the hoverFill color 
series.hoverFill(function(){
    var attrs = this.attributes;
    if (attrs) {
        console.log(attrs);
        // get the class
        var clas = attrs.class;
        switch (clas) {
            case "inner_elements" :
                return "red";
            default:
                return anychart.color.lighten(attrs.fill, 0.5);
        }
    } else {
        return this.sourceColor;
    }
});
```

{sample}Maps\_Seat\_Advanced\_Coloring\_03{sample}


## Palette

Palette is a color scheme which is being used to set the colors to the series of a chart. Using the {api:anychart.charts.Map#palette}palette(){api} method, it's possible to set the default palette or to define custom colors. Note that this method is effective when the SVG image contains several series.

The following sample has no grouping, but it's reasonable to form several series out of seats due to their costs. Each seat has its own ID. 

```
// setting custom colors to the chart palette
chart.palette(["#ff0000", "#990000", "#ffcc33", "#996633"]);
```

{sample}Maps\_Seat\_Advanced\_Coloring\_04{sample}

## Color Scale and Color Range

It's possible to add Color Range and use Color Scale in AnyChart Seat Maps. Color Range looks like a range bar, colored as gradient or like a number of colored boxes, each presenting a range of values. It is rather useful in identifying the value that each point on a map presents.

To enable Color Range, set "true" as an argument to the {api:anychart.charts.Map#Color Range}Color Range(){api} method. To make it work properly set the colors and the type of the Color Scale. You can find information about Color Scale adjusting in the [Color Range article](../Color Range).

```
// set the ranges for the scale
currentColor Scale = anychart.scales.ordinalColor();
currentColor Scale.ranges([
        {from: 0, to: 3.5},
        {from: 4, to: 5.5},
        {from: 6, to: 7.5},
        {from: 8, to: 12}
    ]);

//set the color progression
var colors = anychart.color.singleHueProgression("#336666");

// define the colors 
currentColor Scale.colors(colors);
series.Color Scale(currentColor Scale);

// create and enable the Color Range
var Color Range = chart.Color Range();
Color Range.enabled(true);
```

{sample}Maps\_Seat\_Advanced\_Coloring\_05{sample}