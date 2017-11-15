{:index 8}
# GraphicsJS Text and Fonts

* [Overview](#overview)
* [Basic methods](#basic_methods)
 * [Set the text](#set_the_text)
* [Getting the text size](#getting_the_text_size)
* [External fonts](#external_fonts)
* [Multiline](#multiline)
* [Wrap](#wrap)
 * [By Word](#wrap_by_word)
 * [By Letter](#wrap_by_letter)

## Basic Methods
 
There are several methods adjusting custom text on a stage. You can find all of them in our <a href="https://api.anychart.com/latest/anychart.graphics.vector.Text">text API</a>. This article describes some basic methods which allow to set text and adjust its parameters.

### Set the text

Use the {api:anychart.graphics#text}text(){api} method to create text objects. This method accepts X and Y coordinates of the top-left corner of the text element, the string of the text and the style object. Style object is not necessary. In the following sample we add some text with no special style to the point (20, 20).

```
// set the text
stage.text(20, 20, "This is my custom text");
```

{sample :width 832 :height 120}GFX\_Basic\_Text\_01{sample}

Let's now consider some basic styling methods. The {api:}fontSize(){api} method changes your font size, to change the font itself use {api:}fontFamily(){api}, the {api:}color(){api} method stands for setting the text color. Let's adjust the text from above with those methods:

```
// create the text style 
text.fontFamily("Georgia");
text.fontSize("15px");
text.color("green");
```
{sample :width 832 :height 120}GFX\_Basic\_Text\_02{sample}

Now, let's now create the style formatting object and put it as the forth parameter to the {api:anychart.graphics#text}text(){api} method.

```
// create the text style object
textStyle = {fontFamily: "Georgia", fontSize: "15px", color: "green"};

// set the text
stage.text(20,20,"This is my custom text", textStyle);
```

{sample :width 832 :height 120}GFX\_Basic\_Text\_03{sample}


## Getting the text size

In case you need to get the size of the text element before it is being demonstrated on a chart, you can use one of the several special methods: 
 - {api:anychart.graphics.vector.Text#getAbsoluteBounds}getAbsoluteBounds(){api} - Gets the bounds of the text element in absolute coordinates of the root element coordinate system
 - {api:anychart.graphics.vector.Text#getAbsoluteHeight}getAbsoluteHeight(){api} - Returns height of the text element within root bounds
 - {api:anychart.graphics.vector.Text#getAbsoluteWidth}getAbsoluteWidth(){api} - Returns the width of the text element within root bounds
 - {api:anychart.graphics.vector.Text#getAbsoluteX}getAbsoluteX(){api} - Returns an absolute X (root element coordinate system)
 - {api:anychart.graphics.vector.Text#getAbsoluteY}getAbsoluteY(){api} - Returns an absolute Y (root element coordinate system)
 - {api:anychart.graphics.vector.Text#getBounds}getBounds(){api} -	Returns the bounds of the text element
 - {api:anychart.graphics.vector.Text#getHeight}getHeight(){api} - Returns the height of the text element
 - {api:anychart.graphics.vector.Text#getWidth}getWidth(){api} - Returns the width of the text element
 - {api:anychart.graphics.vector.Text#getX}getX(){api} - Returns X in the coordinate system of the parent
 - {api:anychart.graphics.vector.Text#getY}getY(){api} - Returns Y in the coordinate system of the parent

Let's create a rectangle of the text element size and draw it prior to this element.

```
// create the text element
text = acgraph.text(20, 20, "This is my custom text", textStyle);

// get the text element bounds and create the rect
rect = stage.rect(text.getX(), text.getY(), text.getWidth(), text.getHeight());
rect.fill("gold");

// set the stage as a parent of your text
text.parent(stage);
```

{sample :width 832 :height 120}GFX\_Basic\_Text\_04{sample}

Creating the text element as a child of acgraph instead of the stage allows to put the golden rect on it prior to the text element, while the rect has the cooridinates and bounds of this text element.

## External fonts

If you need to customize your chart, it is a good idea to use some unusual fonts. Though, it might be quite complicated to install fonts in a chart, as there are a lot of things to manage with using extra files. 

AnyChart provides an opportinity to use external fonts without unnecessary obstacles.

### Text Fonts

If you want to use a custom font in your chart, use one of the services providing those fonts - for example, Google Fonts. Put a link to the css file of the font you want to use and don't forget to define the necessary font in the code of your chart:

```
<link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet"> 
```

and then:

```
font-family: 'Dancing Script', cursive;
```

{sample :width 832 :height 120}GFX\_Basic\_Text\_06{sample}