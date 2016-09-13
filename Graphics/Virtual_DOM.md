{:index 3}
# Virtual DOM

* [Overview](#overview)
* [Methods](#methods)

## Overview

GraphicsJS implements Virtual_DOM) which makes drawing more robust and manageable.

DOM stands for Document Object Model and it is an abstraction of a structured text. For example, for web developers, this text is an HTML code, and the DOM is simply called HTML DOM. Elements of HTML are nodes in the DOM.

While HTML is a text, the Document Object Model is a representation of this text in memory.

The HTML DOM provides an interface to traverse and modify its elements, ut contains methods like getElementById or removeChild. Whenever the content of the web page is dynamically changed, the DOM is modified:

```
var item = document.getElementById("div");
item.parentNode.removeChild(item);
```

Document is an abstraction of the root node, while getElementById, parentNode and removeChild are methods from HTML DOM API.

The HTML DOM is always tree-structured, and it is the nature of the structure of any HTML document. Tree-like structures can be traversed easily. But, unfortunately, easily doesn’t always mean quickly. Libraries like React provide a Virtual DOM for working with HTML DOM.

The Virtual DOM is an abstraction of the HTML DOM, it is lightweight and it is detached from the browser-specific implementation details. It is worth noticing that since the DOM itself is an abstraction, the virtual DOM is an abstraction of an abstraction.

SVG or VML images, which are the way GraphicsJS renders drawings on the page, are tree-like as well, but GraphicsJS don't make you worry about working with them in a tree-like way or thinking when you work with VML and when with SVG, you can change any element of the image displayed using GraphicsJS and tell the library when and how to show these elements, in other words: GraphicsJS implements the Virtual DOM.

## Methods

GraphicsJS provides all methods you need to handle the DOM:

* {api:anychart.graphics.vector.Layer#addChild}addChild(){api}
* {api:anychart.graphics.vector.Layer#addChildAt}addChildAt(){api}
* {api:anychart.graphics.vector.Layer#forEachChild}forEachChild(){api}
* {api:anychart.graphics.vector.Layer#getChildAt}getChildAt(){api}
* {api:anychart.graphics.vector.Layer#hasChild}hasChild(){api}
* {api:anychart.graphics.vector.Layer#indexOfChild}indexOfChild(){api}
* {api:anychart.graphics.vector.Layer#numChildren}numChildren(){api}
* {api:anychart.graphics.vector.Layer#parent}parent(){api}
* {api:anychart.graphics.vector.Layer#removeChild}removeChild(){api}
* {api:anychart.graphics.vector.Layer#removeChildAt}removeChildAt(){api}
* {api:anychart.graphics.vector.Layer#removeChildren}removeChildren(){api}
* {api:anychart.graphics.vector.Layer#swapChildren}swapChildren(){api}
* {api:anychart.graphics.vector.Layer#swapChildrenAt}swapChildrenAt(){api}

And the following methods allow you to suspend and resume rendering at any time, as well as track in which state the stage is at any given moment:

* {api:anychart.graphics.vector.Stage#suspend}suspend(){api}
* {api:anychart.graphics.vector.Stage#isSuspended}isSuspended(){api}
* {api:anychart.graphics.vector.Stage#render}render(){api}
* {api:anychart.graphics.vector.Stage#isRendering}isRendering{api}