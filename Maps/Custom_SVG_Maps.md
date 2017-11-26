{:index 5}

# Custom SVG Maps

## Overview

AnyChart supports Geo Data in [GeoJSON](Custom_GeoJson_Maps) and [TopoJSON](Custom_TopoJSON) and SVG formats.

All maps in [AnyChart Map Collection](https://cdn.anychart.com/) have GeoJSON, TopoJSON and versions, you can use whichever you like most.

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
$(document).ready(function () {
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

or in `<desc>` node as a content of `<id>` node:

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

**NOTE:** if some parent element has an `id` and its child element has it too: parent element will be considered by AnyMap.

If you want to assign any other text data to an element, like you do in GeoJSON or SHP you can do that in `<desc>` as well - all this data can be accessed by AnyMap when it comes to formatting tooltips and labels:

```
<rect x="161.141" y="144.445" width="164" height="64">
	<desc>
		<labelrank>2</labelrank>
		<code_hasc>AU.JB</code_hasc>
		<name>Jervis Bay Territory</name>
		<admin>Australia</admin>
		<type_en>Territory</type_en>
		<woe_id>1102841</woe_id>
		<longitude>150</longitude>
		<woe_name>Jervis Bay</woe_name>
		<latitude>-35</latitude>
		<iso_a2>AU</iso_a2>
		<postal>JB</postal>
		<type>Territory</type>
		<id>AU.JB</id>
	</desc>
</rect>
```

## Sample SVG String

Here is a very basic sample of SVG image loaded into AnyMap and used with [Choropleth Map Series](Choropleth_Map):

{sample}Maps\_SVG\_01{sample}

## Sample SVG Map

Here is a sample of SVG map from [AnyMap Map Collection](Maps_List) and used with [Choropleth Map Series](Choropleth_Map):

{sample}Maps\_SVG\_02{sample}

You can find more samples of using SVG images to create [Seat Maps](Seat_Maps) in [AnyMap: Seat Maps Gallery](https://www.anychart.com/products/anymap/gallery/Seat_Maps/).

