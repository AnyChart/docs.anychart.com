# Strokes and Lines                                                                              

* [Overview](#overview)
* [Basic Font Settings](#settings)
* [International Symbols Support](#international)
* [Using HTML formatting](#html-texts)
  * [Supported HTML tags](#supported-tags)
* [Text Rotation](#rotation)
* [Text Effects](#effects)

<a name="overview"/>
## Overview
You can control font of every text object in AnyChart using appropriate attributes. Working with fonts is the same for any node and in this tutorial all settings are explained.

The texts have [built-in formatting settings](#settings) (like <b>bold</b>, <i>italic</i>, <u>underline</u>, <font si="" size="+1">size</font>, <span class="style1">color</span> or <font face="Times New Roman, Times, serif">font family</font>). All this setting can be controlled through a certain node. These settings are applied to the given all text within text field, or you can use [HTML formatting](##html-texts).

All text elements, except of legend items and tooltips can be rotated, there are some special things you should know about text rotation - they are covered below in Text Rotation section.

<a name="overview"/>
## Basic Fonts Settings

Following attributes controls appearance of the text: **fontFamily()**, **.fontSize()**, **.fontWeight()**, **.fontStyle()**, underline, color and render_as_html. Typical font settings:

```
    .fontColor('rbg(34,34,34)')
    .fontFamyle('Tahoma')
    .fontSize(12)
    .fontStyle('normal')
    .useHTML(false)
```

<font family="Tahoma" color="Black" size="12" bold="True" italic="False" underline="False" render_as_html="False" />
These settings are applied to the given all text within text field, if you want to do more complex formatting (only part of the text is bold, for example) - consider using HTML formatting.

Simple text formatting is shown in International Symbols Support Sample below.

to top

International Symbols Support

Only few words (and a sample) about using International Symbols in AnyChart - AnyChart supports a total Internationalization.

All you need to do to use non-latin symbols in titles, labels, tooltips, legend or else - just use them in <format> or <text> nodes and make sure that you XML files are UTF-8 encoded.

This is sample chart with labels, tooltips and legend in English, French, Portuguese, Spanish, Russian, Chinese and Norwegian.

Live Sample:  Font Sample International Symbols

 

to top

Using HTML formatting

If you want to do a complex formatting of the text - consider using HTML formatting. To enable it you have to set render_as_html = "True" in <font> node. Then you need to use CDATA section with HTML tags within <format> or <text> nodes:

XML Syntax
XML Code
Plain code
01
<label_settings>
02
  <font render_as_html="True" />
03
  <format><![CDATA[%cbegin <b>Name:</b> {%Name} %cend]]></format>
04
</label_settings>
to top

Supported HTML tags

 

Tag	Description
Bold tag	 The <b> tag renders text as bold. A bold typeface must be available for the font used.
Break tag	The <br> tag creates a line break in the text field. You must set the text field to be a multi line text field to use this tag.
Font tag	 The <font> tag specifies a font or list of fonts to display the text.The font tag supports the following attributes:
color - All AnyChart Color values are supported.
face - Specifies the name of the font to use.
size - Specifies the size of the font. You can use absolute pixel sizes, such as 16 or 18, or relative point sizes, such as +2 or -4.
Italic tag	 The <i> tag displays the tagged text in italics. An italic typeface must be available for the font used.
Paragraph tag	 The <p> tag creates a new paragraph. You must set the text field to be a multi line text field to use this tag. The <p> tag supports the following attributes:
align - Specifies alignment of text within the paragraph; valid values are left, right, justify, and center.
Underline tag	 The <u> tag underlines the tagged text.
to top

The sample Pie chart below demonstrates all available tags in slice labels formatting:

Live Sample:  Html labels text formattin sample

 

to top

Text Rotation

All text elements, except of legend items and tooltips can be rotated, rotation is set using rotation attribute of an appropriate node, for example to rotate X-Axis Labels you have to set:

XML Syntax
XML Code
Plain code
01
<axes>
02
  <x_axis>
03
    <labels rotation="90" />
04
  </x_axis>
05
</axes>
Important note: AnyChart recommends you to use rotation angles divisible by 90 - when these angles are used you will always get a required label properly displayed - no matter what font family or character set is used.

to top

Text Effects

You can apply the effects to Text. Effects are described in Effects tutorial. Typical effects settings are:

XML Syntax
XML Code
Plain code
01
<font>
02
  <effects enabled="True">
03
    <drop_shadow enabled="True" />
04
  </effects>
05
</font>
Here is a sample of Aqua styled pie chat with labels on slices. Labels text drops shadow on the slices:

Live Sample:  Font effects sample Pie chart

 

to top

Current Page Online URL: Fonts Tutorial