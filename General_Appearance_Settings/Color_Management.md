# Color Management
                                                   
* [Overview](#overview)
* [Color Formats](#color_formats)
  * [Hexadecimal](#hexadecimal)
  * [RGB Macro](#rgb_macro)
  * [Web-Colors](#web_colors)
* [Color Transformation](#color_transformation)
  *[Light Color](#light)
  *[Dark Color](#dark)
  *[Blend](#blend)
<a name="overview"/>
## Overview
AnyChart allows you to set color of any element of the chart, and moreover - it provides a very user/designer/developer friendly mechanism of color setting. Web-developers usually work with Hexadecimal or Web-Colors, desktop developer use RGB or HSB notation. AnyChart supports all this formats and gives user the way for built-in color transformation.

<a name="color_formats"/>
## Color Formats

As it was said above AnyChart supports the following color setting notation, which means - you can use any of them when setting a value of **.color()**, **.fill()**, etc attribute in any node:

* Hexadecimal (html-like)
* Red Green Blue
* Hue Saturation Brightness
* Web-Color Constants

<a name="hexadecimal"/>
### Hexadecimal

Hexadecimal notation is widely used in HTML. A hex triplet is a six-digit, three-byte hexadecimal number used in HTML and CSS, and other computing applications, to represent colors. The bytes represent the red, green and blue components of the color. One byte represents a number in the range 00 to FF (in hexadecimal notation). This represents the least (0) to the most (255) intensity of each of the color components. The hex triplet is formed by concatenating three bytes in hexadecimal notation, in the following order: red value; green value; blue value.

When setting color using Hexadecimal notation you should use "#" before hex constant itself, for example, to set font color to blue you should specify:

```
    .fontColor('#0000FF');
```

<a name="rgb_macro"/>
### RGB Macro

This format, just as Hexadecimal, sets color using three components: red, green and blue, but uses decimal, not hexadecimal values, for example: RGB(255,255,0) stands for absolutely Yellow. The syntax: RGB(red,green,blue), where red, green and blue – decimal values, that vary from 0 to 255.
```
    .fontColor('rgb(0,0,255)');
```

<a name="web_colors"/>
### Web-Colors

Also you can use Web-Color constants. For example: "Red", "Gold", "RoyalBlue", etc. Table with full list of color constants, along with their hexadecimal, RGB and HSB you can find on [Web-Color Constants Table](Colors_table).

```
    .fontColor('Blue);
```

<a name="color_transformation"/>
## Color Transformation

To make design easier - AnyChart Provides several color transformation functions, below you will find their reference and a sample of their usage in creation of you own style for Column charts.

<table class="dtTABLE">
<tbody>
<tr>
<th width="411">Function</th>
<th width="277">Description</th>		
</tr>
<tr>
<td>LightColor(Color)</td>
<td>Returns Lighter color than given </td>
</tr>
<tr>
<td>DarkColor(Color)</td>
<td>Returns Darker color than given </td>
</tr>
<tr>
<td>Blend(Color1, Color2, Ratio)</td>
<td>Blend two colors with a given Ratio</td>
</tr>
</tbody>
</table>

<a name="light"/>
### LightColor

LightColor function is used to return for sure a color that is lighter than a given, for example, if input color is Black - we will get some non-black color, that can be used for highlighting element. Input color can be specified in any of the specified above.
<br/>
Common LghtColor sample:
```
    anychart.color.lighten('#FF0000', 0.2)
```
<br/><br/>
<table width="700" class="dtTABLE">
<tbody>
<tr>
<th colspan="2"><b>Input color</b></th>
<th colspan="2">LightColor</th>		
</tr>
<tr>
<td width="66">#FF0000</td>
<td width="270" bgcolor="#FF0000">&nbsp;</td>
<td width="66">#FF5959</td>		
<td width="270" bgcolor="#FF5959">&nbsp;</td>		
</tr>
</tbody>
</table>

{sample}GAS\_Color\_Management\_01{sample}

<a name="dark"/>
### DarkColor

(Red) = a50000

DarkColor function is used to return for sure a color that is darker than a given, for example, if input color is White - we will get some non-white color, that can be used for outlining an element. Input color can be specified in any of the specified above.
<br/><br/>
Common DarkColor sample:
```
    anychart.color.darken('#FF0000', 0.2)
```
<br/><br/>
<table width="700" class="dtTABLE">
<tbody>
<tr>
<th colspan="2">Input color</th>
<th colspan="2">DarkColor</th>		
</tr>
<tr>
<td width="66">#FF0000</td>
<td width="270" bgcolor="#FF0000">&nbsp;</td>
<td width="66">#A50000</td>		
<td width="270" bgcolor="#A50000">&nbsp;</td>		
</tr>
</tbody>
</table>

{sample}GAS\_Color\_Management\_02{sample}

<a name="blend"/>
### Blend

Blend function allows you to mix two colors with a given ratio, it gives even wider control over getting a right tone.
<br/><br/>
Common blend sample:
```
var color1 = [255, 0, 0];
var color2 = [0, 0, 255];

function colorizer(){
    var mixColor1 = anychart.color.blend(color1, color2, 0.2);
    return 'rgb(' + mixColor1.join(',') + ')';
}
```
<br/><br/>
<table width="700" class="dtTABLE">
<tbody><tr>
<th colspan="2">Input color</th>
<th colspan="2">Blend color</th>		
<th>Ratio</th>				
<th colspan="2">Result Color</th>		
</tr>
<tr>
<td width="100">#FF0000</td>
<td width="100" bgcolor="#FF0000">&nbsp;</td>
<td width="100">#008000</td>		
<td width="100" bgcolor="#008000">&nbsp;</td>		
<td width="100">0 (full mixture) </td>		
<td width="100">#008000</td>		
<td width="100" bgcolor="#008000">&nbsp;</td>		
</tr>
<tr>
<td>#FF0000</td>
<td bgcolor="#FF0000">&nbsp;</td>
<td>#008000</td>
<td bgcolor="#008000">&nbsp;</td>
<td>0.5 </td>
<td>#7F4000</td>
<td bgcolor="#7F4000">&nbsp;</td>
</tr>
<tr>
<td>#FF0000</td>
<td bgcolor="#FF0000">&nbsp;</td>
<td>#008000</td>
<td bgcolor="#008000">&nbsp;</td>
<td>1 (no mixture) </td>
<td>#FF0000</td>
<td bgcolor="#FF0000">&nbsp;</td>
</tr>
</tbody></table>		
	 
In the sample below a function pluses 0.2 to a blend ration for each column:
{sample}GAS\_Color\_Management\_03{sample}