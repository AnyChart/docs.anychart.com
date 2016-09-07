{:index 2}
Advanced Coloring
===========

* [Overview](#overview)
* [Using SVG Image Colors](#using_svg_image_colors)
* [Selective Coloring](#selective_coloring)
* [Palette](#palette)
* [Color Scale and Color Range](#color_scale_and_color_range)


## Overview

There are several ways to color a seat map. The first option is to set the colors [through the data set](Seat_Map#coloring). The second way is to set custom or original colors [through the coloring methods](#using_svg_image_colors) like {api:anychart.core.map.series.Choropleth#fill}fill(){api} and {api:anychart.core.map.series.Choropleth#stroke}stroke(){api} - in this case it's possible to color each element of a group differently, depending on those elements' classes set in the SVG code. One more option is to [use AnyChart palette](#palette) to set the necessary colors and use Color Scale and Color Range (reliable for a Map with several series).

The SVG image in the sample below is the same file as in some samples from the [Seat Map](Seat_Map) and [Preparing SVG Image](Preparing_SVG_Image) articles as the basis for the samples below. That is how an SVG image looks like with the default AnyChart color palette:

{sample}Maps\_Seat\_Advanced\_Coloring\_00{sample}


## Using SVG Image Colors

The colors in the sample picture are different from the defined (check out the seat map <a href="http://static.anychart.com/images/docs/house.svg">source SVG image</a> to see the original colors). Using original colors used in the picture is considered in this section, as well as using these colors as a basis for hovering and selecting colors. 

To set the colors of the original SVG image, or to set new custom colors use the {api:anychart.core.map.series.Choropleth#fill}fill(){api} and {api:anychart.core.map.series.Choropleth#Stroke}stroke(){api} methods. Though, it is important to remember that not all of the elements in the SVG file have the "fill" attribute. Before setting the value to the "fill" field it is necessary to check if the element has it, and if so, set the fill color to this element. Setting colors through this method looks like the following:

```
// sets series fill 
series.fill(function () {
    var attrs = this.attributes;
    if (attrs) return attrs.fill;
});

// sets series stroke
series.stroke(function () {
    var attrs = this.attributes;
    // if the stroke attribute exists in the SVG file then color it with a color set in the document
    return attrs ? attrs.stroke : this.sourceColor;
});
```

{sample}Maps\_Seat\_Advanced\_Coloring\_01{sample}

To change the interactivity colors (colors of elements or groups on hover and on select) use the following methods: {api:anychart.core.map.series.Choropleth#hoverFill}hoverFill(){api}, {api:anychart.core.map.series.Choropleth#hoverStroke}hoverStroke(){api}, {api:anychart.core.map.series.Choropleth#selectFill}selectFill(){api} and {api:anychart.core.map.series.Choropleth#selectStroke}selectStroke(){api}

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

It is also possible to change the colors of separate elements, or parts of a group, if there are any. Though, it is necessary to know the group's structure and the classes set to those elements. In case no classes are set, it is necessary to set them, as the classes help to define the elements.

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

Palette is a color scheme which is being used to set the colors to the series of a chart. Using the {api:anychart.charts.Map#palette}palette(){api} method, it is possible to set the default palette or to define custom colors. Note that this method is effective when the SVG image contains several series.

The following sample has no grouping, but it is reasonable to form several series out of seats due to the rows. Each seat has its own ID. The palette is being formed out of two different hues, which are considered as the original and the resulting colors of the 8-step gradient.

```
palette = anychart.palettes.rangeColors();
palette.items(["#F44336", "#FCEF86"]);
palette.count(8);

// setting custom colors to the chart palette
chart.palette(palette);
```

{sample}Maps\_Seat\_Advanced\_Coloring\_04{sample}

## Color Scale and Color Range

It is possible to add Color Range and use Color Scale in AnyChart Seat Maps. Color Range looks like a range bar, colored as gradient or like a number of colored boxes, each presenting a range of values. It is rather useful in identifying the value that each point on a map presents.

To make it work properly set the colors and the type of the Color Scale. You can find information about Color Scale adjusting in the [Color Scale](../Scales) & [Color Range article](../ColorRange).

Now, look at the next sample. The ranges are set as an array. Each range has its own color defined through the data set. 

```
// set the ranges for the scale and corresponding colors
colorScale = anychart.scales.ordinalColor();
colorScale.ranges([
    {from: 0, to: 3.5, color: "#FCEF86"},
    {from: 4, to: 5.5, color: "#EC8A00"},
    {from: 6, to: 7.5, color: "#1368C4"},
    {from: 8, to: 12, color: "#9F0856"}
]);
```

After being created, a Color Scale should be bound to a series:

```
// set color scale to a series 
series.colorScale(colorScale);
```

So, each series on a map is able to have its own Color Scale, which can be quite useful in some situations.

Color Scale and Color Range are different objects. Creating and enabling the Color Scale doesn't mean that the Color Range automatically appears in a chart. To add a Color Range use {api:anychart.charts.Map#colorRange}colorrange(){api} or {api:anychart.core.ui.ColorRange#enabled}enabled(){api} property of a Color Range entity.

```
// create and enable the colorRange
chart.colorRange(true); 
```

{sample}Maps\_Seat\_Advanced\_Coloring\_05{sample}


There are some other ways to set colors for a Color Scale; for example, it is possible to set a gradient mode, which you can find more about in the [Color Range article](../Color_Range). Setting colors for diggerent ranges as a gradient of a hue (or several hues) can make the chart more illustrative. Also, it makes unnecessary to set a distinct color for each value range.
In the sample below the ranges are set without colors for each of the ranges, but the colors of the Color Scale are defined as a progression of the hue through the {api:anychart.color#singleHueProgression}singleHueProgression(){api} function. 

```
// set the ranges for the scale
currentColorScale = anychart.scales.ordinalColor();
currentColorScale.ranges([
        {from: 0, to: 3.5},
        {from: 4, to: 5.5},
        {from: 6, to: 7.5},
        {from: 8, to: 12}
    ]);

//set the color progression
var colors = anychart.color.singleHueProgression("#336666");

// define the colors 
currentColorScale.colors(colors);
series.ColorScale(currentColorScale);

// create and enable the Color Range
var colorrange = chart.colorrange();
colorrange.enabled(true);
```

{sample}Maps\_Seat\_Advanced\_Coloring\_06{sample}