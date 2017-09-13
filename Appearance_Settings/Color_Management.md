# Color Management

## Overview

AnyChart html5 charting library allows you to set color of any element of the chart, and moreover - it provides a very user/designer/developer friendly mechanism of color setting. Web-developers usually work with Hexadecimal or Web-Colors, desktop developer use RGB or HSB notation. AnyChart supports all these formats and gives user the way for built-in color transformation.

## Color Formats

As it is said above AnyChart supports the following color setting notation, which means you can use any of them when setting a value of {api:anychart.color}color(){api}, {api:anychart.graphics.vector.Fill}fill(){api}, and other attributes in any method:

* Hexadecimal (html-like)
* Red Green Blue
* Web-Color Constants

### Hexadecimal

Hexadecimal notation is widely used in HTML. A hex triplet is a six-digit, three-byte hexadecimal number used in HTML and CSS, and other computing applications, to represent colors. The bytes represent the red, green and blue components of the color. One byte represents a number in the range 00 to FF (in hexadecimal notation). This represents the least (0) to the most (255) intensity of each of the color components. The hex triplet is formed by concatenating three bytes in hexadecimal notation, in the following order: red value; green value; blue value.

When setting color using Hexadecimal notation you should use "#" before hex constant itself, for example, to set font color to blue you should specify:

```
.fontColor("#0000FF");
```

### RGB Macro

This format, just as Hexadecimal, sets color using three components: red, green and blue, but uses decimal, not hexadecimal values, for example: RGB(255,255,0) stands for absolutely Yellow. The syntax: RGB(red,green,blue), where red, green and blue – decimal values, that vary from 0 to 255.

```
.fontColor("rgb(0,0,255)");
```

### Web Colors

Also you can use Web Color constants. For example: "Red", "Gold", "RoyalBlue", etc. Table with full list of color constants, along with their hexadecimal, RGB and HSB you can find on [Web Color Constants Table](Colors_Table).

```
.fontColor("blue");
```

## Color Transformation

To make design easier - AnyChart Provides several color transformation functions. See descriptions below:

<table class="dtTABLE">
<tbody>
<tr>
<th width="411">Function</th>
<th width="277">Description</th>
</tr>
<tr>
<td>lighten(Color)</td>
<td>Returns Lighter color than given </td>
</tr>
<tr>
<td>darken(Color)</td>
<td>Returns Darker color than given </td>
</tr>
<tr>
<td>blend(Color1, Color2, Ratio)</td>
<td>Blend two colors with a given Ratio</td>
</tr>
</tbody>
</table>

### Light Color

{api:anychart.color#lighten}lighten(){api} function is used to return for sure a color that is lighter than a given, for example, if input color is Black - we will get some non-black color, that can be used to highlight an element. 

```
anychart.color.lighten("#FF0000", 0.2)
```

<table width="700" class="dtTABLE">
<tbody>
<tr>
<th colspan="2"><b>Input color</b></th>
<th colspan="2">Light Color</th>
</tr>
<tr>
<td width="66">#FF0000</td>
<td width="270" bgcolor="#FF0000">&nbsp;</td>
<td width="66">#FF5959</td>
<td width="270" bgcolor="#FF5959">&nbsp;</td>
</tr>
</tbody>
</table>

{sample}AS\_Color\_Management\_01{sample}

### Dark Color

{api:anychart.color#darken}darken(){api} function is used to return for sure a color that is darker than a given, for example, if input color is White - we will get some non-white color, that can be used to outline an element.

```
anychart.color.darken("#FF0000", 0.2)
```

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

{sample}AS\_Color\_Management\_02{sample}

### Blend

{api:anychart.color#blend}blend(){api} function allows you to mix two colors with a given ratio.

```
var color1 = [255, 0, 0];
var color2 = [0, 0, 255];

var mixColor1 = anychart.color.blend(color1, color2, 0.2);
```

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