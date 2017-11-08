{:index 2}
# Color Range

* [Overview](#overview)
* [Types](#types)
 * [Ordinal Color Range](#ordinal_color_range)
 * [Quantitative Color Range](#quantitative_color_range) 
* [Palette](#palette)
 * [Single Hue](#single_hue)
 * [Bi-polar](#bi-polar) 
 * [Blended color progression](#blended_color_progression)
 * [Partial spectral color progression](#partial_color_progression) 
 * [Full-spectral color progression](#full-spectral_color_progression)
 * [Value progression](#value_progression) 
 
## Overview
 
Color Range is a tool that is necessary when we need to identify the value that each point on a map presents. It looks like a range bar, colored as gradient 
or like a number of colored boxes, each presenting a range of values.
 
To create a color range, use the **.colorRange()** function with the name of the map this ColorRange is needed for. There are a lot of parameters might be adjusted, such as orientation 
(to change it use the **.orientation()** function), size of the color box (use **.colorLineSize()**) or alignment ( **.align()** in this case). Look up for other parameters [here]().
 
## Types
 
There are two types of ColorRange: Ordinal and Quantitative. The type of a ColorRange that will be used for your map will be automatically chosen and it 
depends on a scale type: it will be ordinal if the scale on your Map is ordinal; in any other case you'll get a Quantitative ColorRange.
 
### Ordinal Color Range
 
This type of ColorRange looks like a number of boxes with different colors. Colors of these boxes depend on the palette chosen according to the type of map and its data.
<br><br>
<img src = "https://static.anychart.com/images/ord_colorrange.jpg">
 
### Quantitative Color Range
 
This type of ColorRange looks like a single bar colored with a gradient, where it colors depend on a chosen palette. 
<br><br>
<img src = "https://static.anychart.com/images/quant_colorrange.jpg">
 
## Palette
 
The palette used for the map forms its view and the quality of visualization, so it's rather important which colors will be used. 
Use method {api:anychart.palettes.RangeColors#colors}**.colors**{api} and define colors as an array.
Read the following information properly to chose the most suitable palette for your map.
 
### Single Hue
 
Single Hue progression is a fade from a light shade of a chosen color to its dark shade. Usually, the darker the shade is, the higher value it represents. 
This palette type is usually used to show the difference in values of something common between some regions or in time.

<br><br>

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th><b>Ordinal</b></th>
<th><b>Quantitative</b></th>
</tr>
<tr>
<td>
<img src = "https://static.anychart.com/images/single\_hue\_ord.png">
</td>
<td>
<img src = "https://static.anychart.com/images/single\_hue\_quant.png">
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
<th><b>Quantitative</b></th>
</tr>
<tr>
<td>
<img src = "https://static.anychart.com/images/bi\_polar\_ord.png">
</td>
<td>
<img src = "https://static.anychart.com/images/bi\_polar\_quant.png">
</td>
</tr>
</tbody>
</table>
 
### Blended color progression

This type of color progression is typically used to show elevation changes. 
It's more like a single hue type, but the difference between color are less sharp. This progression uses related hues to blend together the two end point hues. 
For example from yellow through orange to brown.

<br><br>

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th><b>Ordinal</b></th>
<th><b>Quantitative</b></th>
</tr>
<tr>
<td>
<img src = "https://static.anychart.com/images/blended\_c\_progr\_ord.png">
</td>
<td>
<img src = "https://static.anychart.com/images/blended\_c\_progr\_quant.png">
</td>
</tr>
</tbody>
</table>
 
### Partial color progression
 
Partial spectral hue progressions are used to map mixtures of two distinct sets of data. 
This ColorRange type looks like a gradient between two adjacent opponent hues and shows the magnitude of the mixing data classes.

<br><br>

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th><b>Ordinal</b></th>
<th><b>Quantitative</b></th>
</tr>
<tr>
<td>
<img src = "https://static.anychart.com/images/partial\_c\_progr\_ord.png">
</td>
<td>
<img src = "https://static.anychart.com/images/partial\_c\_progr\_quant.png">
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
<th><b>Quantitative</b></th>
</tr>
<tr>
<td>
<img src = "https://static.anychart.com/images/full\_c\_ord.png">
</td>
<td>
<img src = "https://static.anychart.com/images/full\_c\_quant.png">
</td>
</tr>
</tbody>
</table>


### Value progression

Value progression maps are monochromatic. Using the shades of grey between black and white makes it easy to print the map and is quite clear to understand.
This type of ColorRange is one of the best ways to portray a magnitude message to the map audience. 

<br><br>

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th><b>Ordinal</b></th>
<th><b>Quantitative</b></th>
</tr>
<tr>
<td>
<img src = "https://static.anychart.com/images/value\_progr\_ord.png">
</td>
<td>
<img src = "https://static.anychart.com/images/value\_progr\_quant.png">
</td>
</tr>
</tbody>
</table>





