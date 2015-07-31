{:index 2}
# Color Range

* [Overview](#overview)
* [Types](#types)
 * [Ordinal Color Range](#ordinal_color_range)
 * [Linear Color Range](#linear_color_range) 
* [Palette](#palette)
 * [Single Hue](#single_hue)
 * [Bi-polar](#bi-polar) 
 * [Blended color progression](#blended_color_progression)
 * [Value progression](#value_progression) 
 * [Coming soon](#single_hue)
  * [Partial spectral color progression](#partial_color_progression) 
  * [Full-spectral color progression](#full-spectral_color_progression)
* [Settings](#settings)
 * [Orientation](#orientation)
 * [Position](#position) 
 * [Size](#size)
 
 
## Overview
 
Color Range is a tool that is necessary when we need to identify the value that each point on a map presents. It looks like a range bar, colored as gradient 
or like a number of colored boxes, each presenting a range of values.
 
To create a color range, use the **.colorRange()** function. There are a lot of parameters might be adjusted, such as orientation 
(to change it use the **.orientation()** function), size of the color box (use **.colorLineSize()**) or alignment ( **.align()** in this case). 

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
 
## Types
 
There are two types of ColorScale: Ordinal and Linear (Quantitative). The type of a ColorRange that will be used for your map will be automatically chosen and it depends on a scale type: it will be ordinal if the scale on your Map is ordinal; in any other case you'll get a Quantitative ColorRange.
 
### Ordinal Color Scale
 
This type of ColorScale looks like a number of boxes with different colors. Colors of these boxes depend on the palette chosen according to the type of map and its data, but they also may be defined independent from any of color progressions using the following method.
<br><br>
<img src = "http://static.anychart.com/images/ord_colorrange.jpg">

```
	// set the colors and ranges for the scale
	series.colorScale(anychart.scales.ordinalColor([{less:200,color:'red'},{from:200, to:250, color:'green'},{greater:250, color:'white'}]));
```

{sample}Maps\_ColorRange\_02{sample}

No parameters are necessary here, but it's possible to use this method to define the ranges and its colors. However, it can be done later. In case no colors are defined, the default first-series color will be applied. If you haven't set the ranges, the map will show only the borders (both inner and outer) of the chosen territory.
Although, if you decide to set the colors or ranges later, you may use the **{api}.colors(){api}** and **{api:anychart.core.map.scale.OrdinalColor#ranges}.ranges(){api}** accordingly.
The following code does the same as the code above.

```
	// set the colors and the ranges
	series.colorScale().ranges([{less:200},{from:200, to:250},{greater:250}]);
	series.colorScale().colors(['red', 'green', 'white']);
```

### Linear Color Range
 
This type of ColorScale looks like a single bar colored with a gradient, where it colors depend on a chosen palette. 
<br><br>
<img src = "http://static.anychart.com/images/quant_colorrange.jpg">

```
series.colorScale(anychart.scales.linearColor('#FFEBD6', '#C40A0A'));
```

{sample}Maps\_ColorRange\_03{sample}
 
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
function. You may not define the colors - in this case the shades will de genereated for the default color. 

{sample}Maps\_ColorRange\_02{sample}

### Value progression

Value progression maps are monochromatic. Using the shades of grey between black and white makes it easy to print the map and is quite clear to understand.
This type of ColorRange is one of the best ways to portray a magnitude message to the map audience. 

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
 
### Bi-polar 
 
Bi-polar progression is a fade from the first chosen color to the second one with white in the middle. This is normally used when you need to show the change from
positive to negative values, or to show the mean value.
Complementary hue progressions are a type of bi-polar progression. This can be done with any of the complementary colors and will fade from each 
of the darker end point hues into a gray shade representing the middle. An example would be using blue and yellow as the two end points.

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

{sample}Maps\_ColorRange\_03{sample}

That's how the same map would look like with an ordinal Scale.

{sample}Maps\_ColorRange\_04{sample}
 
### Blended color progression

This type of color progression is typically used to show elevation changes. 
It's more like a single hue type, but the difference between color are less sharp. This progression uses related hues to blend together the two end point hues. 
For example from yellow through orange to brown.

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

anychart.color#blendedHueProgression
 
### Partial color progression
 
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


### Full-spectral color progression

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






