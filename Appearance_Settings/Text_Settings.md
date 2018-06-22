# Text Settings

## Overview

You can control the font settings of every text object in AnyChart js charts. Working with fonts is the same for all methods. This tutorial will explain all possible settings.

There are [built-in font formatting settings](#basic_settings) (like <b>bold</b>, <i>italic</i>, <u>underline</u>, <font size="+1">size</font>, <font color="red">color</font> or <font face="Times New Roman, Times, serif">font family</font>). 
These settings are applied to all characters within a text element; use [HTML formatting](#html) in case you need a complex formatting.

## Basic Settings

Most of the time the following methods are used to tune the appearance of a text: {api:anychart.graphics.vector.Text#fontFamily}fontFamily(){api}, {api:anychart.graphics.vector.Text#fontSize}fontSize(){api}, {api:anychart.graphics.vector.Text#fontWeight}fontWeight(){api}, {api:anychart.graphics.vector.Text#fontStyle}fontStyle(){api}, {api:anychart.graphics.vector.Text#htmlText}useHtml(){api}. Full list of methods can be found in [Text Formatting](#text_formatting) section or in {api:anychart.graphics.vector.Text}API{api}.

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

There's no problem with using AnyChart if your language is not English - AnyChart is totally international.

There are labels, tooltips and legend in English, French, Portuguese, Spanish, Russian, Chinese and Norwegian on the chart below.

{sample}AS\_Fonts\_01{sample}

## HTML

If you want to do a complex formatting of the text - consider using HTML formatting. To enable it set the {api:anychart.graphics.vector.Text#htmlText}useHtml(){api} method to `true`:

```
series.labels().useHtml(true).format(function (){
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
<td width="587"> The <b>&lt;b&gt;</b> tag renders text as bold. A bold typeface must be available for the font used.</td>
</tr>
<tr>
<td>Break tag</td>
<td>The <b>&lt;br&gt;</b> tag creates a line break in the text field. You must set the multi line text field to use this tag.</td>
</tr>
<tr>
<td>Span tag</td>
<td>The <b>&lt;span&gt;</b> tag is used to group elements in the text.</td>
</tr>
<tr>
<td>Italic tag</td>
<td>The <b>&lt;i&gt;</b> tag displays the tagged text in italics. An italic typeface must be available for the font used.</td>
</tr>
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

The sample Pie chart below demonstrates all available tags on slice labels:

{sample}AS\_Fonts\_02{sample}

### HTML Tooltips

**Note:** In the case of tooltips, passing `true` to the {api:anychart.core.ui.Tooltip#useHtml}useHtml(){api} method turns them into fully functional HTML tooltips, making all possible HTML setting available (not only the tags listed above). Read more: [Tooltip: HTML](../Common_Settings/Tooltip#html).

## Text Formatting

Here is a table with all possible methods for controlling the text view.

<table class="dtTABLE" width="700">
<tbody>
<tr>
<th width="101">Parameter</th>
<th width="587">Description</th>
</tr>
<tr>
<td>{api:anychart.core.Text#textDirection}textDirection(){api}</td>
<td>defines text direction.</td>
</tr>
<tr>
<td>{api:anychart.core.Text#fontDecoration}fontDecoration(){api}</td>
<td>defines the decoration line, that can be added to the text.</td>
</tr>
<tr>
<td>{api:anychart.core.Text#fontDecoration}fontVariant(){api}</td>
<td>reverses upper and low cases.</td>
</tr>
<tr>
<td>{api:anychart.core.Text#fontWeight}fontWeight(){api}</td>
<td>defines the weight of the text.</td>
</tr>
<tr>
<td>{api:anychart.core.Text#hAlign}hAlign(){api}</td>
<td>defines text position in a horizontal plane.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.Text#height}height(){api}</td>
<td>defines the height of text plot.</td>
</tr>
<tr>
<td>{api:anychart.core.Text#letterSpacing}letterSpacing(){api}</td>
<td>defines the space between each letter in the text.</td>
</tr>
<tr>
<td>{api:anychart.core.Text#lineHeight}lineHeight(){api}</td>
<td>defines the height of each line of the text.</td>
</tr>
<tr>
<td>{api:anychart.core.Text#fontOpacity}fontOpacity(){api}</td>
<td>defines transparency of the text.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.Text#rotate}rotate(){api}</td>
<td>defines the angle of text rotation.</td>
</tr>
<tr>
<td>{api:anychart.core.Text#selectable}selectable(){api}</td>
<td>defines the possibility of selecting text.</td>
</tr>
<tr>
<td>{api:anychart.core.Text#textIndent}textIndent(){api}</td>
<td>defines space at the beginning of the first line of each text paragraph.</td>
</tr>
<tr>
<td>{api:anychart.core.Text#textOverflow}textOverflow(){api}</td>
<td>defines rules for clipping overflowing text.</td>
</tr>
<tr>
<td>{api:anychart.core.Text#wordWrap}wordWrap(){api}</td>
<td>sets the word-wrap mode. Defines the rules for breaking lines. Find more information in the [Text Wrapping](../Graphics/Text_and_Fonts#wrap) article.</td>
</tr>
<tr>
<td>{api:anychart.core.Text#wordBreak}wordBreak(){api}</td>
<td>sets the word-break mode. Defines the rules for breaking lines.</td>
</tr>
<tr>
<td>{api:anychart.core.Text#vAlign}vAlign(){api}</td>
<td>defines the text plot position in a vertical plane.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.Text#width}width(){api}</td>
<td>defines the text plot width.</td>
</tr>
</tbody>
</table>

And here is a sample demonstrating the usage of these parameters:

{sample :width 690 :height 680}AS\_Fonts\_03{sample}