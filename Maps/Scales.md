{:index 11}
# Map Scales

## Overview

There are a few ways to color the map. One of them and the most useful is using the ColorScale. This tool is a good help when you need to color your regions accordingly to the values they represent.  Read this article to be aware of how to use colorScales properly and how to color them with a palette.

There are two types of ColorScale: Ordinal and Linear (Quantitative). The type of a ColorRange that will be used for your map will be automatically chosen and it depends on a scale type: it will be ordinal if the scale on your Map is ordinal; in any other case you'll get a Quantitative ColorRange.
 
## Ordinal ColorScale
 
This type of ColorScale looks like a number of boxes with different colors. Colors of these boxes depend on the palette chosen according to the type of map and its data, but they also may be defined independent from any of color progressions using the following method.

<img src = "https://static.anychart.com/images/ord_colorrange.jpg">

```
// set the colors and ranges for the scale
series.colorScale(anychart.scales.ordinalColor([{less:200,color:'#EC6E07'},{from:200, to:250, color:'#A1958A'},{greater:250, color:'#64B5F6'}]));
```

{sample}Maps\_Scales\_01{sample}

No parameters are necessary here, but it's possible to use this method to define the ranges and its colors. However, it can be done later. In case no colors are defined, the default first-series color will be applied. If you haven't set the ranges, the map will show only the borders (both inner and outer) of the chosen territory.
Although, if you decide to set the colors or ranges later, you may use the {api:anychart.scales.OrdinalColor#colors}colors(){api} and {api:anychart.scales.OrdinalColor#ranges}ranges(){api} accordingly.
The following code does the same as the code above.

```
// set the colors and the ranges
series.colorScale().ranges([{less:200},{from:200, to:250},{greater:250}]);
series.colorScale().colors(['#EC6E07', '#A1958A', '#64B5F6']);
```

## Linear ColorScale
 
This type of ColorScale looks like a single bar colored with a gradient, where it colors depend on a chosen palette. 

<img src = "https://static.anychart.com/images/quant_colorrange.jpg">

Using the Linear type of coloring, there are three ways of coloring the map:
1) we may define no colors - in this case the coloring will be based on the default palette;
2) we may define only one color - in this case the coloring gradient will be built from very light grey to the only defined color;
3) the more colors we define here, the more colors will the gradient contain. 

```
series.colorScale(anychart.scales.linearColor('#EC6E07', '#64B5F6'));
```

{sample}Maps\_Scales\_02{sample}

## Palette
 
The palette used for the map forms its view and the quality of visualization, so it's rather important which colors will be used. 
There are a plenty of color progression types, at the moment we've got four of them: Single-hue, Bi-polar, Blended color progression and a Monochrome one (as an uncolored Single-hue one). Each color progression might be performed automatically.
Read the following information properly to chose the most suitable palette for your map.
 
### Single Hue
 
Single Hue progression is a fade from a light shade of a chosen color to its dark shade. Usually, the darker the shade is, the higher value it represents. 
This palette type is usually used to show the difference in values of something common between some regions or in time.

<table>
<tbody>
<tr>
<th>Ordinal</th>
<th>Linear</th>
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

To make a single-hue progression use the {api:anychart.color#singleHueProgression}anychart.color.singleHueProgression(){api} function. You may not define the colors - in this case the shades will be generated for the default color. 

{sample}Maps\_Scales\_03{sample}

### Value progression

Value progression maps are monochromatic. Using the shades of grey between black and white makes it easy to print the map and is quite clear to understand.
This type of ColorRange is one of the best ways to portray a magnitude message to the map audience. 

Technically this progression is a simple single-hue progression for a shade of grey. So you should use the same method as above, but with monochromatic colors.

<table>
<tbody>
<tr>
<th>Ordinal</th>
<th>Linear</th>
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

This progression is more likely as single hue one, but the colors all are monochromatic. Just set the monochromatic shades (or even white and black) as colors for the single hue progression. In this sample the linear scale is enabled.

{sample}Maps\_Scales\_04{sample}
 
### Bi-polar 
 
Bi-polar progression is a fade from the first chosen color to the second one with white in the middle. This is normally used when you need to show the change from
positive to negative values, or to show the mean value.
Complementary hue progressions are a type of bi-polar progression. This can be done with any of the complementary colors and will fade from each 
of the darker end point hues into a gray shade representing the middle. An example would be using blue and orange as the two end points.

<table>
<tbody>
<tr>
<th>Ordinal</th>
<th>Linear</th>
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

To make a bi-hue progression use the {api:anychart.color#bipolarHueProgression}anychart.color.bipolarHueProgression(){api}
function. You may not define the colors - in this case the shades will be generated for the default color. 

{sample}Maps\_Scales\_05{sample}

That's how the same map would look like with an ordinal Scale.

{sample}Maps\_Scales\_06{sample}
 
### Blended color progression

This type of color progression is typically used to show elevation changes. 
It's more like a single hue type, but the difference between shades is less sharp. This progression uses related hues to blend together the two end point hues. 
For example, from yellow through orange to brown or from light-green to deep-emerald green.

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th>Ordinal</th>
<th>Linear</th>
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

Use the {api:anychart.color#bipolarHueProgression}anychart.color.bipolarHueProgression(){api} to make a progression between two similar hues.

In case you haven't defined any of the colors, they will be generated automatically (of the default color). 

{sample}Maps\_Scales\_07{sample}

That's how the same map would look like with an ordinal scale.

{sample}Maps\_Scales\_08{sample}
