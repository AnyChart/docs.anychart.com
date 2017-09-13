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
 
There are several methods adjusting custom text on a stage. You can find all of them in our <a href="https://api.anychart.com/{{branch-name}}/anychart.graphics.vector.Text">text API</a>. This article describes some basic methods which allow to set text and adjust its parameters.

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

## Multiline

Usually, in SVG it is not possible to create a multiline text element but with Graphics JS you can do that. There are several methods that allow to manage multiline text, like setting {api:anychart.graphics.vector.Text#width}width(){api}, {api:anychart.graphics.vector.Text#height}height(){api}, {api:anychart.graphics.vector.Text#letterSpacing}letterSpacing(){api}, {api:anychart.graphics.vector.Text#wordWrap}wordWrap(){api}, {api:anychart.graphics.vector.Text#wordBreak}wordBreak(){api} and {api:anychart.graphics.vector.Text#lineHeight}lineHeight(){api} can format the text in the necessary way. Also it is possible to set the text as an HTML object using the {api:anychart.graphics.vector.Text#htmlText}htmlText(){api} method.

```
// create the text style object
textStyle = {fontFamily: "Georgia", fontSize: "15px", color: "green"};

// create a text element as HTML
text1  = stage.text().htmlText("<p fontFace='Dancing Script'>This is my custom text,<br>which has several lines, separated<br>with the &lt;br&gt; tags.</p>");

// create the second text 
text2 = stage.text(20, 50, "This is my second custom text element, which is made multiline with the help of AnyChart Graphics methods", textStyle);

// text settings
text2.width(150);
text2.height(150);
text2.wordWrap("break-all");
text2.wordBreak("break-word");
text2.textOverflow(true);
text2.letterSpacing(3);
text2.lineHeight(20);
```

{sample :width 832 :height 255}GFX\_Basic\_Text\_07{sample}

## Wrap

There are two modes of the {api:anychart.core.Text#wordWrap}wordWrap(){api} method: 
- "break-word" allows to break the word in any point if there are no acceptable points in the text line to break the text in there;
- "normal" allows to break at normal word break points only. 

There are three modes of the {api:anychart.core.Text#wordbreak}wordBreak(){api} method:
- "break-all" means that the text can is allowed to be broken in any point of the text, even between the characters of one word;
- "keep-all" means that the text will be broken in any place, except for the CJK texts;
- "normal" means that words would be broken according to their usual rules.

### Wrap by Word

In the following sample, there are two pieces of the same text with different settings of wrapping and breaking. The sample shoes the difference:

```
// first text settings
text1.wordWrap("break-word");
text1.wordBreak("break-all");

// second text settings
text2.wordWrap("break-word");
text2.wordBreak("normal");
```

{sample :width 832 :height 255}GFX\_Basic\_Text\_08{sample}

### Wrap by Letter

This sample shows two similar texts with two extremely long words, being wrapped and broken in different modes. 

```
// first text settings
text1.wordWrap("break-word");
text1.wordBreak("break-all");

// second text settings
text2.wordWrap("normal");
text2.wordBreak("keep-all");
```

{sample :width 832 :height 255}GFX\_Basic\_Text\_09{sample}