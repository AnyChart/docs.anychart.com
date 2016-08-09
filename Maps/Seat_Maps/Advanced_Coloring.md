{:index 2}
Advanced Coloring
===========

* [Overview](#overview)
* [Colors](#colors)
 * [Elements coloring](#elements_coloring)
 * [Attributes coloring](#attributes_coloring)
 * [Unbound Regions](#unbound_regions)


## Overview

Seat Maps are not Geographical Maps, seat map or seating chart, is a diagram of the seat layout inside a building, passenger aircraft or else. They are often published by airlines for informational purposes, and are of use to passengers for selection of their seat at booking or check-in. AnyMap technology allows to create any kind of seat maps, schemes or interactive layouts.

## Colors

You can see that the colors of the picture in the sample are different from the defined. To return the colors that we've used in the SVG-picture and change the interactivity colors, we need to use some methods that are considered below.

### Elements coloring

You can see that the colors of the picture in the sample are different from the defined. To return the colors that we've used in the SVG-picture, we need to use the {api:anychart.ui.Background#fill}.fill(){api} and {api:anychart.ui.Background#stroke}.stroke(){api} methods. Though, we need to remember that we work with the series from an SVG-document. Not all of elements in our SVG have the "fill" attribute. We need to check if the element has the "fill" field, and if so, we set the fill original fill color to this element. This will look like the following:


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

To change the interactivity colors (colors of the groups in a hovered or selected states) we can use the same methods as before or use {api:anychart.core.map.series.Choropleth#hoverFill}.hoverFill(){api}, {api:anychart.core.map.series.Choropleth#hoverStroke}.hoverStroke(){api}, {api:anychart.core.map.series.Choropleth#selectFill}.selectFill(){api} and {api:anychart.core.map.series.Choropleth#selectStroke}.selectStroke(){api}

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
            case 'inner_elements' :
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