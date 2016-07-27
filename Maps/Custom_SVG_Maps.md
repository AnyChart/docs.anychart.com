{:index 5}

# Custom SVG Maps

* [Overview](#overview)
* [Loading SVG](#loading_svg)
* [SVG Structure](#svg_structure)
* [Sample](#sample)

## Overview

AnyChart supports Geo Data in [GeoJSON](Custom_GeoJson_Maps) and [TopoJSON](Custom_TopoJson_Maps) and SVG formats.

All maps in [AnyChart Map Collection](https://cdn.anychart.com/#map-collection) have GeoJSON, TopoJSON and versions, you can use whichever you like most.

## Loading SVG

SVG image can be loaded in the map in several ways. You can simply pass SVG string:

```
var chart = anychart.map();
chart.geoData('<path d="M 0 0 L 72.5 0 72.5 17 0 17 0 0 Z"/>');
chart.container("container").draw();
```

You can dynamically load SVG image somehow, for example using jQuery:

```
var stage, chart;
$(document).ready(function() {
  stage = anychart.graphics.create('container');
  $.ajax({
    type: 'GET',
    url: 'sample.svg',
    success: function(data) {
      chart = anychart.map();      
      chart.geoData(data);
      chart.container(stage).draw();
    }
  });
});
```

Or even get SVG element from DOM:

```
chart = anychart.map();      
chart.geoData(document.getElementById('SomeSVGElement'));
chart.container("container").draw();
```

## SVG Structure

To make SVG image readable by AnyMap engine and to make it compatible with series you need to assign `id` attributes to the logical elements of the image. 

A single element with `id` looks like this:

```
<rect id="2" x="161.141" y="144.445" width="164" height="64"/>
```

Or it can be set in `<desc>` node as a content of `<id>` node:

```
<rect x="161.141" y="144.445" width="164" height="64">
       <desc>
                <id>2</id>
       </desc>
</rect>
```

Same rules apply to groups (`<g></g>`) elements. You can set `id` in attribute:

```
<g id="1">
	<rect class='main' x="51.141" y="36.445" width="185" height="156"/>
        <g>
	         <rect class='pin1' x="61.141" y="44.445" width="164" height="64"/>
	         <rect class='innerFrame' x="61.141" y="121.445"width="164" height="62"/>
        </g>
	<text transform="matrix(1 0 0 1 130.1406 85.4448)" font-size="12">Pin 1</text>
</g>
```

or

```
<g>
   <desc>
            <id>1</id>
   </desc>	
	<rect class='main' x="51.141" y="36.445" width="185" height="156"/>
        <g>
	         <rect class='pin1' x="61.141" y="44.445" width="164" height="64"/>
	         <rect class='innerFrame' x="61.141" y="121.445"width="164" height="62"/>
        </g>
	<text transform="matrix(1 0 0 1 130.1406 85.4448)" font-size="12">Pin 1</text>
</g>
```

**NOTE:**

## Sample

{sample}Maps\_SVG\_01{sample}

