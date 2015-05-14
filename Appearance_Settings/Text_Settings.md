# Text Settings

* [Overview](#overview)
* [Basic Settings](#basic_settings)
* [International Symbols](#international_symbols)
* [HTML](#html)
  * [Supported tags](#supported_tags)
* [Text Formatting](#text_formatting)

## Overview

You can control font of every text object in AnyChart. Working with fonts is the same for any method and in this tutorial all settings are explained.

The texts have [built-in formatting settings](#basic_settings) (like <b>bold</b>, <i>italic</i>, <u>underline</u>, <font size="+1">size</font>, <font color="red">color</font> or <font face="Times New Roman, Times, serif">font family</font>). These settings are applied to all characters within a text element, use [HTML formatting](#html) if you need a complex formatting.

## Basic Settings

Most of the time the following methods are used to tune the appearance of a text: {api:anychart.graphics.vector.Text#fontFamily}**fontFamily()**{api}, {api:anychart.graphics.vector.Text#fontSize}**.fontSize()**{api}, {api:anychart.graphics.vector.Text#fontWeight}**.fontWeight()**{api}, {api:anychart.graphics.vector.Text#fontStyle}**.fontStyle()**{api}, {api:anychart.graphics.vector.Text#htmlText}**.useHtml()**{api}. Full list of methods can be found in [Text Formatting](#text_formatting) section or in {api:anychart.graphics.vector.Text}API{api}.

```
  .fontColor('Red')
  .fontFamily('Tahoma')
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
<td>Span tag</td>
<td>The <b>&lt;span&gt;</b> tag is used to group elements in the text.</td>
</tr>
<tr>
<td>Italic tag</td>
<td>The <b>&lt;i&gt;</b> tag displays the tagged text in italics. An italic typeface must be available for the font used.</td>
</tr>
<!--<tr>
<td>Paragraph tag</td>
<td>The <b>&lt;p&gt;</b> tag creates a new paragraph. You must set the text field to be a multi line text field to use this tag. The <b>&lt;p&gt;</b> tag supports the following attributes:
<ul>
<li> <strong>align</strong> - Specifies alignment of text within the paragraph; valid values are <b>left</b>, <b>right</b>, <b>justify</b>, and <b>center</b>. </li>
</ul></td>
</tr>-->
<tr>
<td>Underline tag</td>
<td>The <b>&lt;u&gt;</b> tag underlines the tagged text.</td>
</tr>
<tr>
<td>Strong tag</td>
<td>The <b>&lt;strong&gt;</b> tag defines important text.</td>
</tr>
<tr>
<td>Emphasize tag</td>
<td>The <b>&lt;em&gt;</b> tag renders as emphasized text.</td>
</tr>
</tbody>
</table>

The sample Pie chart below demonstrates all available tags in slice labels formatting:

{sample}GAS\_Fonts\_02{sample}

## Text Formatting

Here is a table with all possible methods for controlling text.

<table class="dtTABLE" width="700">
<tbody>
<tr>
<th width="101">Parameter</th>
<th width="587">Description</th>
</tr>
<tr>
<td>**{api:anychart.core.Text#textDirection}textDirection(){api}**</td>
<td>direction method of the text defines text writing direction.</td>
</tr>
<tr>
<td>**{api:anychart.core.Text#fontDecoration}fontDecoration(){api}**</td>
<td>decoration method defines a line, that can be added to the text.</td>
</tr>
<tr>
<td>**{api:anychart.core.Text#fontDecoration}fontVariant(){api}**</td>
<td>fontVariant method reverses upper and low cases.</td>
</tr>
<tr>
<td>**{api:anychart.core.Text#fontWeight}fontWeight(){api}**</td>
<td>fontWeight method defines the boldness of the text.</td>
</tr>
<tr>
<td>**{api:anychart.core.Text#hAlign}hAlign(){api}**</td>
<td>hAlign method defines text position in a horizontal plane.</td>
</tr>
<tr>
<td>**{api:anychart.graphics.vector.Text#height}height(){api}**</td>
<td>height method defines height of text plot.</td>
</tr>
<tr>
<td>**{api:anychart.core.Text#letterSpacing}letterSpacing(){api}**</td>
<td>letterSpacing method defines between each letter in the text.</td>
</tr>
<tr>
<td>**{api:anychart.core.Text#lineHeight}lineHeight(){api}**</td>
<td>lineHeight method defines height of each line of the text.</td>
</tr>
<tr>
<td>**{api:anychart.core.Text#fontOpacity}fontOpacity(){api}**</td>
<td>opacity method defines transparency of the text.</td>
</tr>
<tr>
<td>**{api:anychart.graphics.vector.Text#rotation}rotation(){api}**</td>
<td>rotation method defines the angle of text rotation.</td>
</tr>
<tr>
<td>**{api:anychart.core.Text#selectable}selectable(){api}**</td>
<td>selectable method defines the possibility of selecting text.</td>
</tr>
<tr>
<td>**{api:anychart.core.Text#textIndent}textIndent(){api}**</td>
<td>textIndent method defines space at the beginning of the first line of the text.</td>
</tr>
<tr>
<td>**{api:anychart.core.Text#textOverflow}textOverflow(){api}**</td>
<td>textOverflow method defines rules for clipping overflowing text.</td>
</tr>
<tr>
<td>**{api:anychart.core.Text#textWrap}textWrap(){api}**</td>
<td>textWrap method defines rules for braking lines in the text.</td>
</tr>
<tr>
<td>**{api:anychart.core.Text#vAlign}vAlign(){api}**</td>
<td>vAlign method defines text position in a vertical plane.</td>
</tr>
<tr>
<td>**{api:anychart.graphics.vector.Text#width}width(){api}**</td>
<td>width method defines width of text plot.</td>
</tr>
</tbody>
</table>

And here is a sample for demonstration using of these parameters:

{sample :width 690 :height 680}GAS\_Fonts\_03{sample}