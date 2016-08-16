{:index 2}
Advanced Coloring
===========

* [Overview](#overview)
* [Colors](#colors)
 * [Elements coloring](#elements_coloring)
 * [Attributes coloring](#attributes_coloring)
 * [Palette](#palette)
 * [ColorScale and ColorRange](#colorscale_and_colorrange)


## Overview

There are several ways to color your set map. You can use data set to set all the colors, as usual: read about it in the [Seat Map](Seat_Map) article. The second way is to use standard methods like {api:anychart.ui.Background#fill}fill(){api} and {api:anychart.ui.Background#stroke}stroke(){api}; the third way is to use classes of elements, set in the tags in the SVG code; also, you may use AnyChart palette to set the necessary colors (this method is only reliable when there are several series on a Map) and use ColorScale and ColorRange - all these options are described in this tutorial.

We have taken the SVG image from the [Seat Map](Seat_Map) and [Preparing SVG Image](Preparing_SVG_Image) articles as the basis for our samples below. That's how an SVG image looks like with the default color palette:

{sample}Maps\_Seat\_01{sample}


## Colors

You can see that the colors of the picture in the sample are different from the defined (you can find the original SVG picture <a href="http://static.anychart.com/images/docs/house.svg">[here](../../images/house.svg)). To return the colors that we've used in the SVG picture and change the interactivity colors, we need to use some methods that are considered below.

### Elements coloring

You can see that the colors of the picture in the sample are different from the defined. To return the colors that we've used in the SVG picture, we need to use the {api:anychart.ui.Background#fill}fill(){api} and {api:anychart.ui.Background#stroke}stroke(){api} methods. Though, we need to remember that we work with the series from an SVG document. Not all of elements in our SVG have the "fill" attribute. We need to check if the element has the "fill" field, and if so, we set the fill original fill color to this element. This will look like the following:


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

To change the interactivity colors (colors of the groups in a hovered or selected states) we can use the same methods as before or use {api:anychart.core.map.series.Choropleth#hoverFill}hoverFill(){api}, {api:anychart.core.map.series.Choropleth#hoverStroke}hoverStroke(){api}, {api:anychart.core.map.series.Choropleth#selectFill}selectFill(){api} and {api:anychart.core.map.series.Choropleth#selectStroke}selectStroke(){api}

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


### Attributes coloring

It's also possible to change the colors of the parts of a group, if there are any. We need to set classes for those elements. Let's put several elements into the plan and repaint them on being hovered. Let's set the "inner_elements" class to them.

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

Palette is a color scheme which is being used to set the colors to the series of a chart. Using the {api:anychart.charts.Map#palette}palette(){api} method, we can change the default palette and define custom colors. Note that this method is effective when your SVG image contains several series.

The following sample has no grouping, but we have formed several series out of seats, where each seat has its own ID. 

```
// setting custom colors to the chart palette
chart.palette(["#ff0000", "#990000", "#ffcc33", "#996633"]);
```

{sample}Maps\_Seat\_Advanced\_Coloring\_04{sample}

## ColorScale and ColorRange

It's possible to add ColorRange and use ColorScale in AnyChart Seat Maps. ColorRange looks like a range bar, colored as gradient or like a number of colored boxes, each presenting a range of values. It is rather useful when we need to identify the value that each point on a map presents.

To enable ColorRange, we need to set "true" as an argument to the {api:anychart.charts.Map#colorRange}colorRange(){api} method. To make it work properly we need to set the colors and the type of the ColorScale. You can find information about colorScale adjusting in the [ColorRange article](../ColorRange).

```
// set the colors and ranges for the scale
series.colorScale(anychart.scales.linearColor());

//set the single hue progression
var colors = anychart.color.singleHueProgression("#006633");
        
// define the colors 
series.colorScale().colors(colors);

// create and enable the colorRange
var colorRange = chart.colorRange();
colorRange.enabled(true);
```

{sample}Maps\_Seat\_Advanced\_Coloring\_05{sample}