{:index 8}
# GraphicsJS Text and Fonts

* [Overview](#overview)
* [Basic methods](#basic_methods)
 * [Set the text](#set_the_text)
* [Getting the text size](#getting_the_text_size)
* [Outer scripts](#outer_scripts)
* [Multiline](#multiline)

http://www.graphicsjs.org/

a) базовые методы
б) получение размера текста
в) использование внешних скриптов
г) мультилайн

## Basic Methods
 
There are several methods adjusting custom text on a stage. You can find all of them in our <a href="http://api.anychart.stg/develop/anychart.graphics.vector.Text">text API</a>. This article describes some basic methods which allow to set that the and adjust several parameters.

### Set the text

Use the {api:anychart.graphics#text}text(){api} method to set your custom text. This method accepts X and Y coordinates of the top-left corner of the text element, the string of the text and the style object. Style object is not necessary. In the following sample we add some text with no special style to the point (20, 20).

```
// set the text
stage.text(20, 20, "This is my custom text");
```
{sample}GFX\_Basic\_Text\_01{sample}

Let's now consider some basic styling methods. The {api:}fontSize(){api} method changes your font size, to change the font itself use {api:}fontFamily(){api}, the {api:}color(){api} method stands for setting the text color. Let's adjust the text from above with those methods:

```
// create the text style 
text.fontFamily("Georgia");
text.fontSize("15px");
text.color("green");
```
{sample}GFX\_Basic\_Text\_02{sample}

Now, let's now create the style formatting object and put it as the forth parameter to the {api:anychart.graphics#text}text(){api} method.

```
// create the text style object
textStyle = {fontFamily: "Georgia", fontSize: "15px", color: "green"};

// set the text
stage.text(20,20,"This is my custom text", textStyle);
```
{sample}GFX\_Basic\_Text\_03{sample}

## Getting the text size