# Font                                                                             

* [Overview](#overview)
* [Basic Settings](#basic_settings)
* [International Symbols](#international_symbols)
* [HTML](#html)
  * [Supported tags](#supported_tags)
* [Text Rotation](#text_rotation)

## Overview

You can control font of every text object in AnyChart. Working with fonts is the same for any method and in this tutorial all settings are explained.

The texts have [built-in formatting settings](#basic_settings) (like <b>bold</b>, <i>italic</i>, <u>underline</u>, <font size="+1">size</font>, <font color="red">color</font> or <font face="Times New Roman, Times, serif">font family</font>). These settings are applied to all characters within a text element, use [HTML formatting](#html) if you need a complex formatting.

## Basic Settings

Following methods control appearance of the text: {api:anychart.graphics.vector.Text#fontFamily}**fontFamily()**{api}, {api:anychart.graphics.vector.Text#fontSize}**.fontSize()**{api}, {api:anychart.graphics.vector.Text#fontWeight}**.fontWeight()**{api}, {api:anychart.graphics.vector.Text#fontStyle}**.fontStyle()**{api}, {api:anychart.graphics.vector.Text#htmlText}**.useHtml()**{api}.

```
    .fontColor('Red')
    .fontFamyle('Tahoma')
    .fontSize(12)
    .fontStyle('normal')
    .useHtml(false)
```

These settings are applied to the given all text within text field, if you want to do more complex formatting (only part of the text is bold, for example) - consider using HTML formatting.

Simple text formatting is shown in International Symbols Support Sample below.

## International Symbols

Only a few words (and a sample) about using International Symbols in AnyChart - AnyChart is totally international.

This is sample chart with labels, tooltips and legend in English, French, Portuguese, Spanish, Russian, Chinese and Norwegian.

{sample}GAS\_Fonts\_01{sample}

## HTML

If you want to do a complex formatting of the text - consider using HTML formatting. To enable it you have to set {api:anychart.graphics.vector.Text#htmlText}**.useHtml(true)**{api}:

```
  series.labels().useHtml(true).textFormatter(function(){
    return '<b>Name: </b>' + this.x ;
  })
```

### Supported tags

<table class="dtTABLE" width="700">
<tbody>
<tr>
<th width="101">Tag</th>
<th width="587">Description</th>		
</tr>
<tr>
<td width="101">Bold tag </td>
<td width="587"> The <strong>&lt;b&gt;</strong> tag renders text as bold. A bold typeface must be available for the font used.</td>		
</tr>
<tr>
<td>Break tag</td>
<td>The <b>&lt;br&gt;</b> tag creates a line break in the text field. You must set the text field to be a multi line text field to use this tag.</td>
</tr>
<tr>
<td>Font tag	</td>
<td>The <b>&lt;font&gt;</b> tag specifies a font or list of fonts to display the text.The font tag supports the following attributes:
<ul>
<li><b>color</b> - All AnyChart Color values are supported. </li>
<li><b>face</b> - Specifies the name of the font to use.</li>
<li><b>size</b> - Specifies the size of the font. You can use absolute pixel sizes, such as 16 or 18, or relative point sizes, such as +2 or -4. </li>
</ul></td>
</tr>
<tr>
<td>Italic tag</td>
<td>The <b>&lt;i&gt;</b> tag displays the tagged text in italics. An italic typeface must be available for the font used.</td>
</tr>
<tr>
<td>Paragraph tag</td>
<td>The <b>&lt;p&gt;</b> tag creates a new paragraph. You must set the text field to be a multi line text field to use this tag. The <b>&lt;p&gt;</b> tag supports the following attributes:
<ul>
<li> <strong>align</strong> - Specifies alignment of text within the paragraph; valid values are <b>left</b>, <b>right</b>, <b>justify</b>, and <b>center</b>. </li>
</ul></td>
</tr>
<tr>
<td>Underline tag</td>
<td>The <b>&lt;u&gt;</b> tag underlines the tagged text.</td>
</tr>
</tbody>
</table>

The sample Pie chart below demonstrates all available tags in slice labels formatting:

{sample}GAS\_Fonts\_02{sample}

## Text Rotation

All text elements, except of legend items and tooltips can be rotated, rotation is set using {api:anychart.core.axisMarkers.Text#rotation}**.rotation()**{api} attribute, for example, to rotate x axis Labels you have to set:

```
  chart.xAxis().labels().rotation(90);
```
