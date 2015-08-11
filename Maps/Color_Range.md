{:index 2}
# Color Range

* [Overview](#overview)
* [Scale Types](#scale_types)
 * [Ordinal Color Scale](#ordinal_color_scale)
 * [Linear Color Scale](#linear_color_scale) 
* [Enabling the ColorRange](#enabling_the_colorrange)
* [Palette](#palette)
 * [Single Hue](#single_hue)
 * [Bi-polar](#bi-polar) 
 * [Blended color progression](#blended_color_progression)
 * [Value progression](#value_progression) 
 * [Coming soon](#single_hue)
  * [Partial spectral color progression](#partial_color_progression) 
  * [Full-spectral color progression](#full-spectral_color_progression)
* [Visual Settings](#visual_settings)
 * [Orientation](#orientation)
 * [Position](#position) 
 * [Size](#size)
 * [Stroke](#stroke)
 
 
## Overview
 
Color Range is a tool that is necessary when we need to identify the value that each point on a map presents. It looks like a range bar, colored as gradient 
or like a number of colored boxes, each presenting a range of values.
 
To create a color range, use the {api:anychart.charts.Map#colorRange}**.colorRange()**{api} function. There are a lot of parameters might be adjusted, such as orientation 
(to change it use the {api:anychart.core.axes.Linear#orientation}**.orientation()**{api} function), size of the color box (use {api:}**.colorLineSize()**{api}) or alignment ({api:anychart.graphics.vector.Image#align}**.align()**{api} in this case). 

However, first of all we need to adjust the map colors and its colorScale, because the colorRange type and appearance depend on those settings.

The first step of adjusting the colors is to set the series and data correctly. Let's make an example with a Choropleth Series Map. Look at the code below.

```
	// set the data
	var dataSet = anychart.data.set([
      {'id': 'AU.WA', 'value': 300},  // Western Australia
      {'id': 'AU.JB'},                // Jervis Bay Territory
      {'id': 'AU.NS', 'value': 240},  // New South Wales
      {'id': 'AU.VI', 'value': 75},   // Victoria
      {'id': 'AU.NT', 'value': 130},  // Northern Territory
      {'id': 'AU.TS', 'value': 190},  // Tasmania
      {'id': 'AU.CT', labels: false}, // Australian Capital Territory
      {'id': 'AU.SA'},                // South Australia
      {'id': 'AU.QL'}                 // Queensland
    ]);
	
    // set the map
    var map = anychart.map();
	
	// set the geoData 
    map.geoData(anychart.maps.australia);
	
	// set the series
    var series = map.choropleth(dataSet);
	
	// tell the series which field should tie the colorRange and the colorScale together
    series.geoIdField('code_hasc');
```

Here we took an Australia map for the example. You may notice that some regions don't have values, which makes them "unBound", but still all the regions are painted with the default color. That's because we haven't defined the color scale yet. If the ColorScale is defined, the unbound regions will become transparent (like in the Ordinal Scale sample).

{sample}Maps\_ColorRange\_01{sample}

Note that a colorRange can only be connected to the first axis (with the '0' index), while it's possible to make a map with several series.
 
## Scale Types
 
There are two types of ColorScale: Ordinal and Linear (Quantitative). The type of a ColorRange that will be used for your map will be automatically chosen and it depends on a scale type: it will be ordinal if the scale on your Map is ordinal; in any other case you'll get a Quantitative ColorRange.
 
### Ordinal Color Scale
 
This type of ColorScale looks like a number of boxes with different colors. Colors of these boxes depend on the palette chosen according to the type of map and its data, but they also may be defined independent from any of color progressions using the following method.
<br><br>
<img src = "http://static.anychart.com/images/ord_colorrange.jpg">

```
	// set the colors and ranges for the scale
	series.colorScale(anychart.scales.ordinalColor([{less:200,color:'#EC6E07'},{from:200, to:250, color:'#A1958A'},{greater:250, color:'#64B5F6'}]));
```

{sample}Maps\_ColorRange\_02{sample}

No parameters are necessary here, but it's possible to use this method to define the ranges and its colors. However, it can be done later. In case no colors are defined, the default first-series color will be applied. If you haven't set the ranges, the map will show only the borders (both inner and outer) of the chosen territory.
Although, if you decide to set the colors or ranges later, you may use the **{api:anychart.core.map.scale.OrdinalColor#colors}.colors(){api}** and **{api:anychart.core.map.scale.OrdinalColor#ranges}.ranges(){api}** accordingly.
The following code does the same as the code above.

```
	// set the colors and the ranges
	series.colorScale().ranges([{less:200},{from:200, to:250},{greater:250}]);
	series.colorScale().colors(['#EC6E07', '#A1958A', '#64B5F6']);
```

### Linear Color Scale
 
This type of ColorScale looks like a single bar colored with a gradient, where it colors depend on a chosen palette. 
<br><br>
<img src = "http://static.anychart.com/images/quant_colorrange.jpg">

Using the Linear type of coloring, there are three ways of coloring the map:
<br>1) we may define no colors - in this case the coloring will de based on the default palette;
<br>2) we may define only one color - in this case the coloring gradient will be built from very light grey to the only defined color;
<br>3) the more colors we define here, the more colors will the gradient contain. 

```
series.colorScale(anychart.scales.linearColor('#EC6E07', '#64B5F6'));
```

{sample}Maps\_ColorRange\_03{sample}
 
## Enabling the ColorRange

To enable the colorRange, there's a simple method **{api: anychart.charts.Map#colorRange}.colorRange(){api}**. 

```
// create and enable the colorRange
	var cr = map.colorRange(true);
```
	
Look at the samples below: we have added the colorRange to the both previous samples. In the first sample the colorRange looks like a number of different-colored rectangles because of ordinal Scale. The number of rectangles depends on the number of ranges defined above.

{sample}Maps\_ColorRange\_04{sample}

Here is the second case with the linear colorScale. The colorRange here looks like a line colored with a gradient.

{sample}Maps\_ColorRange\_05{sample}

You may notice that there is a marker on the colorRange that helps to find the value on the colorRange.
 
## Palette
 
The palette used for the map forms its view and the quality of visualization, so it's rather important which colors will be used. 
There are a plenty of color progression types, at the moment we've got four of them: Single-hue, Bi-polar, Blended color progression and a Monochrome one (as an uncolored Single-hue one). Each color progression might be performed automatically.
Read the following information properly to chose the most suitable palette for your map.
 
### Single Hue
 
Single Hue progression is a fade from a light shade of a chosen color to its dark shade. Usually, the darker the shade is, the higher value it represents. 
This palette type is usually used to show the difference in values of something common between some regions or in time.

<br><br>

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th><b>Ordinal</b></th>
<th><b>Linear</b></th>
</tr>
<tr>
<td>
<img src = "http://static.anychart.com/images/single\_hue\_ord.png">
</td>
<td>
<img src = "http://static.anychart.com/images/single\_hue\_quant.png">
</td>
</tr>
</tbody>
</table>

To make a single-hue progression use the **{api:anychart.color#singleHueProgression}anychart.color.singleHueProgression(){api}**
function. You may not define the colors - in this case the shades will de generated for the default color. 

{sample}Maps\_ColorRange\_06{sample}

### Value progression

Value progression maps are monochromatic. Using the shades of grey between black and white makes it easy to print the map and is quite clear to understand.
This type of ColorRange is one of the best ways to portray a magnitude message to the map audience. 

Technically this progression is a simple single-hue progression for a shade of grey. So you should write the same 

<br><br>

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th><b>Ordinal</b></th>
<th><b>Linear</b></th>
</tr>
<tr>
<td>
<img src = "http://static.anychart.com/images/value\_progr\_ord.png">
</td>
<td>
<img src = "http://static.anychart.com/images/value\_progr\_quant.png">
</td>
</tr>
</tbody>
</table>

This progression is more likely as single hue one, but the colors all are monochromatic. Just set the monochromatic shades (or even white and black) as colors for the single hue progression. In this sample the linear scale is enabled.

{sample}Maps\_ColorRange\_07{sample}
 
### Bi-polar 
 
Bi-polar progression is a fade from the first chosen color to the second one with white in the middle. This is normally used when you need to show the change from
positive to negative values, or to show the mean value.
Complementary hue progressions are a type of bi-polar progression. This can be done with any of the complementary colors and will fade from each 
of the darker end point hues into a gray shade representing the middle. An example would be using blue and orange as the two end points.

<br><br>

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th><b>Ordinal</b></th>
<th><b>Linear</b></th>
</tr>
<tr>
<td>
<img src = "http://static.anychart.com/images/bi\_polar\_ord.png">
</td>
<td>
<img src = "http://static.anychart.com/images/bi\_polar\_quant.png">
</td>
</tr>
</tbody>
</table>

To make a bi-hue progression use the **{api:anychart.color#biHueProgression}anychart.color.biHueProgression(){api}**
function. You may not define the colors - in this case the shades will de generated for the default color. 

{sample}Maps\_ColorRange\_08{sample}

That's how the same map would look like with an ordinal Scale.

{sample}Maps\_ColorRange\_09{sample}
 
### Blended color progression

This type of color progression is typically used to show elevation changes. 
It's more like a single hue type, but the difference between shades is less sharp. This progression uses related hues to blend together the two end point hues. 
For example, from yellow through orange to brown or from light-green to deep-emerald green.

<br><br>

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th><b>Ordinal</b></th>
<th><b>Linear</b></th>
</tr>
<tr>
<td>
<img src = "http://static.anychart.com/images/blended\_c\_progr\_ord.png">
</td>
<td>
<img src = "http://static.anychart.com/images/blended\_c\_progr\_quant.png">
</td>
</tr>
</tbody>
</table>

Use the **{api:anychart.color#biHueProgression}anychart.color.biHueProgression(){api}** to make a progression between two similar hues.
In case you haven\t defined any of the colors, they will de generated automatically (of the default color). 

{sample}Maps\_ColorRange\_10{sample}

That's how the same map would look like with an ordinal Scale.

{sample}Maps\_ColorRange\_11{sample}

### Coming soon
 
#### Partial color progression
 
Partial spectral hue progressions are used to map mixtures of two distinct sets of data. 
This ColorRange type looks like a gradient between two adjacent opponent hues and shows the magnitude of the mixing data classes.

<br><br>

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th><b>Ordinal</b></th>
<th><b>Linear</b></th>
</tr>
<tr>
<td>
<img src = "http://static.anychart.com/images/partial\_c\_progr\_ord.png">
</td>
<td>
<img src = "http://static.anychart.com/images/partial\_c\_progr\_quant.png">
</td>
</tr>
</tbody>
</table>


#### Full-spectral color progression

Full spectral progression contains all rainbow colors, from blue to red. This ColorRange type is usually used on relief maps and modern weather maps. 
This progression is not recommended under other circumstances because some connections between a color and its meaning can seem confusing for users.

<br><br>

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th><b>Ordinal</b></th>
<th><b>Linear</b></th>
</tr>
<tr>
<td>
<img src = "http://static.anychart.com/images/full\_c\_ord.png">
</td>
<td>
<img src = "http://static.anychart.com/images/full\_c\_quant.png">
</td>
</tr>
</tbody>
</table>



## Visual Settings

There are some visual preferences of a ColorRange that might be set different from the default if needed - such as position, length and other. Look through this paragraph to know more about them.

### Orientation

A simple function {api:}**.orientation()**{api} is used for the changing the position. An argument should be a string with one of the following values: 'right', 'left', 'bottom' or 'top'.

```
	// put the colorRange to the right from the map
	cr.orientation('right');
```

{sample}Maps\_ColorRange\_15{sample}

### Length

The colorRange length adjusting is quite usual: as for any other components, just add the **.length()** method to the colorRange.

```
	// set the colorRange length
	cr.length(100);
```

{sample}Maps\_ColorRange\_16{sample}

### Size and position

When you need to change the distance between the colorRange and the map itself or between the colorRange and the map field borders, use the {api:anychart.charts.Map#padding}**.padding()**{api} method. 
You may define and only argument or all four (if you want them different) for all sides. Look at the following sample:

```
	// set the colorRange padding 
	cr.padding(100);
```

In case you set the only value, this value will be interpreted as the same padding to each of the map field sides.

{sample}Maps\_ColorRange\_17{sample}

And if you define all four padding values, you'll be able to change the distance between the colorrange and both map and its field borders. Note that 

```
	// set the colorRange padding 
	cr.padding(0, 100, 0, -100);
```

{sample}Maps\_ColorRange\_18{sample}

As you can see, the usage of this method with colorRange is the same as in simple HTML.

### Stroke 

To stroke the colorRange, use the **.stroke()** method. We have already done it before - in the sample with a Bi-polar progression (Ordinal Scale). 

```
	// create, enable and stroke the colorRange
	var cr = map.colorRange();
	cr.enabled(true).stroke('#BBB');
```

{sample}Maps\_ColorRange\_09{sample}


