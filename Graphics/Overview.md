{:index 1}
# GraphicsJS JavaScript Drawing Library

## Overview

[GraphicsJS](http://www.graphicsjs.org/) is a JavaScript graphics library that allows you to draw absolutely anything, including any sort of interactive and animated graphics with any visual effects.

You can think of GraphicsJS as a paintbox with a brush, GraphicsJS may be used for data visualization, charting, game design or else. [AnyChart charting libraries](https://www.anychart.com/) rendering is based fully on it.

You can find some specific samples at [http://www.graphicsjs.org/](http://www.graphicsjs.org/), along with source code: [galaxy](https://playground.anychart.com/gallery/{{branch-name}}/Graphics/Galaxy-plain), [rain](https://playground.anychart.com/gallery/{{branch-name}}/Graphics/Rain-plain), [bonfire](https://playground.anychart.com/{{branch-name}}/{{branch-name}}/Graphics/Bonfire-plain), [Bender](https://playground.anychart.com/gallery/{{branch-name}}/Graphics/Bender-plain), and a [playable 15-puzzle](https://playground.anychart.com/gallery/{{branch-name}}/Graphics/Puzzle_15-plain). All of these were created with GraphicsJS only.

GraphicsJS allows to visualize complicated mathematical algorithms very conveniently and easily, e.g. the [galaxy](https://playground.anychart.com/gallery/{{branch-name}}/Graphics/Galaxy-plain) demo is based on [Archimedean spiral](https://en.wikipedia.org/wiki/Archimedean_spiral).

GraphicsJS has one the most powerful [line drawing features](Paths) among SVG/VML based graphics libraries that provide only Bezier curves out of the box. But GraphicsJS is great at working with mathematical functions. As a result, GraphicsJS allows you to draw not only Bezier curves out of the box, but literally anything; for example, you can draw some arc very quickly, whereas other graphics libraries will make you arrange it through numerous different curves. And surely there are [basic shapes available](Shapes)

GraphicsJS has the richest [text features](Text_and_Fonts), for example, SVG/VML technologies do not provide this out of the box, as well as most of other JavaScript drawing libraries. GraphicsJS supports multiline texts and also offers text measurement, including width, height, as well as wrap, overflow, indent, spacing, align, etc.

GraphicsJS has implements the [Virtual DOM](Virtual_DOM) which makes drawing more robust and manageable.

GraphicsJS uses smart layering system for elements and [layers](Layers).

GraphicsJS supports z-index. Typically, if you ever decided to change the overlapping order, you would have to erase everything and draw the whole picture again, from scratch. With GraphicsJS, you are given the power to arrange this dynamically, which is extremely helpful when you are creating some big graphical thing and it is important for you to specify which elements must be seen at one moment or another.

GraphicsJS provides a convenient [Transformations](Transformations) API that allows to move, scale, rotate and shear both elements and groups of elements. Transformations, in good hands, when used along with [flexible Event Model](Events) and [Virtual DOM](Virtual_DOM), is a very powerfull tool.

GraphicsJS [supports legacy browsers including IE6+](Browser_Support). 

GraphicsJS API is very convenient to use. Our [API](https://api.anychart.com/{{branch-name}}/anychart.graphics) is very concise and provides chaining support, which makes it possible to use a dozen lines of code where other libraries require a hundred.

GraphicsJS is built on a very reliable technology, Google Closure, just like Google Mail, Google Calendar, Google Drive, and so on.

## Documentation

We recommend everyone to start with:

* [GraphicsJS Quick Start](Quick_Start)

If you it is your first experience with JavaScript drawing libraries, we suggest the following reading order:

* [Basics](Basics) article lays out a general idea of the library and explains how things work.
* [Paths](Paths), [Shapes](Shapes), [Text and Fonts](Text_and_Fonts) are the articles on drawing primitives, of which everything consists of.
* [Layers](Layers) article explains how the basic elements may be grouped and arranged.
* [Transformations](Transformations) article explains how you can change elements and groups.
* [Events](Events) article describes GraphicsJS event model.

If you are done with articles listed above, or you are an experienced user of [AnyChart 7](https://www.anychart.com/), or  a person with the rich JavaScript-coding background, you may jump right into:

* [GraphicsJS API](https://api.anychart.com/{{branch-name}}/anychart.graphics)
* [GraphicsJS Samples](http://www.graphicsjs.org/)
* and [Virtual DOM](Virtual_DOM) and [Performance](Performance) articles.
