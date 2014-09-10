# Strokes and Lines                                                                              

* [Overview](#overview)
* [Basic Font Settings](#settings)
* [International Symbols Support](#international)
* [Using HTML formatting](#html-texts)
  * [Supported HTML tags](#supported-tags)
* [Text Rotation](#rotation)

<a name="overview"/>
## Overview
You can control font of every text object in AnyChart using appropriate attributes. Working with fonts is the same for any node and in this tutorial all settings are explained.

The texts have [built-in formatting settings](#settings) (like <b>bold</b>, <i>italic</i>, <u>underline</u>, <font si="" size="+1">size</font>, <span class="style1">color</span> or <font face="Times New Roman, Times, serif">font family</font>). All this setting can be controlled through a certain node. These settings are applied to the given all text within text field, or you can use [HTML formatting](##html-texts).

All text elements, except of legend items and tooltips can be rotated, there are some special things you should know about text rotation - they are covered below in Text Rotation section.

<a name="settings"/>
## Basic Fonts Settings

Following attributes controls appearance of the text: **fontFamily()**, **.fontSize()**, **.fontWeight()**, **.fontStyle()**, underline, color and render_as_html. Typical font settings:

```
    .fontColor('rbg(34,34,34)')
    .fontFamyle('Tahoma')
    .fontSize(12)
    .fontStyle('normal')
    .useHTML(false)
```

These settings are applied to the given all text within text field, if you want to do more complex formatting (only part of the text is bold, for example) - consider using HTML formatting.

Simple text formatting is shown in International Symbols Support Sample below.

<a name="international"/>
## International Symbols Support

Only few words (and a sample) about using International Symbols in AnyChart - AnyChart supports a total Internationalization.

This is sample chart with labels, tooltips and legend in English, French, Portuguese, Spanish, Russian, Chinese and Norwegian.

Live Sample:  Font Sample International Symbols

{sample}GAS\_Background\_01{sample}

<a name="html-texts"/>
## Using HTML formatting

If you want to do a complex formatting of the text - consider using HTML formatting. To enable it you have to set **.useHTML(true)**:

```
  series.labels().useHtml(true).textFormatter(funtuion(){
    return '<b>Name: </b>' + this.x ;
  })
```

<a name="supported-tags"/>
### Supported HTML tags


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
<td> Break tag</td>
<td>The <b>&lt;br&gt;</b> tag creates a line break in the text field. You must set the text field to be a multi line text field to use this tag.</td>
</tr>
<tr>
<td> Font tag	</td>
<td> The <b>&lt;font&gt;</b> tag specifies a font or list of fonts to display the text.The font tag supports the following attributes:
<ul>
<li> <b>color</b> - All AnyChart Color values are supported. </li>
<li> <b>face</b> - Specifies the name of the font to use.</li>
<li> <b>size</b> - Specifies the size of the font. You can use absolute pixel sizes, such as 16 or 18, or relative point sizes, such as +2 or -4. </li>
</ul></td>
</tr>
<tr>
<td> Italic tag</td>
<td> The <b>&lt;i&gt;</b> tag displays the tagged text in italics. An italic typeface must be available for the font used.</td>
</tr>
<tr>
<td> Paragraph tag</td>
<td> The <b>&lt;p&gt;</b> tag creates a new paragraph. You must set the text field to be a multi line text field to use this tag. The <b>&lt;p&gt;</b> tag supports the following attributes:
<ul>
<li> <strong>align</strong> - Specifies alignment of text within the paragraph; valid values are <b>left</b>, <b>right</b>, <b>justify</b>, and <b>center</b>. </li>
</ul></td>
</tr>
<tr>
<td> Underline tag</td>
<td> The <b>&lt;u&gt;</b> tag underlines the tagged text.</td>
</tr>
</tbody>
</table>

The sample Pie chart below demonstrates all available tags in slice labels formatting:

{sample}GAS\_Background\_01{sample}

<a name="supported-tags"/>
## Text Rotation

All text elements, except of legend items and tooltips can be rotated, rotation is set using **.rotation()** attribute, for example to rotate x axis Labels you have to set:

```
  chart.xAxis().labels().rotation(90);
```
**Important note:** AnyChart recommends you to use rotation angles divisible by 90 - when these angles are used you will always get a required label properly displayed - no matter what font family or character set is used.
