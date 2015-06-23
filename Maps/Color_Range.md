# Color Range

* [Overview](#overview)
* [Types](#types)
 * [Ordinal Color Range](#ordinal_color_range)
 * [Quantitative Color Range](#quantitative_color_range) 
* [Palette](#Palette)
 * [Single Hue](#single_hue)
 * [Bi-polar](#bi_polar) 
 * [Blended color progression](#blended_color_progression)
 * [Partial spectral color progression](#partial_spectral_color_progression) 
 - Single hue
 - Bi-polar
 - Blended hue color progression
 - Partial spectral color progression
 - Full-spectrum color progression
 - Value progression
 
 
 ## Overview
 
 Color Range is a tool that is necessary when we need to identify the value that each point on a map presents. It looks like a range bar, colored as gradient 
 or like a number of colored boxes, each presenting a range of values.
 
 To create a color range, use the **.colorRange()** function with the name of the map this ColorRange is needed for. There are a lot of parameters might be adjusted, such as orientation 
 (to change it use the **.orientation()** function), size of the color box (use **.colorLineSize()**) or alignment ( **.align()** in this case).
 
 ## Types
 
 There are two types of ColorRange: Ordinal and Quantitative. The type of a ColorRange that will be used for your map depends on a scale type: it will be automatically chosen of Ordinal type
  if the scale on your Map is ordinal; in any other case you'll get a Quantitative ColorRange.
 
 ### Ordinal Color Range
 
 This type of ColorRange looks like a number of boxes with different colors. Colors of these boxes depend on the palette chosen according to the type of map and its data.
 
 
  ### Quantitative Color Range
 
 This type of ColorRange looks like a single bar colored with a gradient, where it colors depends on a chosen palette. 
 
 ## Palette
 
 
 
 ### Single Hue
 
 Single Hue progression is a fade from a light shade of a chosen color to its dark shade. Usually, the darker the shade is, the higher value it represents.
 
 To make the Palette of this type for a ColorRange, use **блаблабла**
 
 ### Bi-polar 
 
 Bi-polar progression is a fade from the first chosen color to the second one with white in the middle.
 