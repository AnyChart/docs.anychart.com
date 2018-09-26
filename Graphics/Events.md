{:index 4}
# GraphicsJS Events

## Overview

Any object, stage or layer in GraphicsJS can listen events. The list of events that can be handled for any element is available at: {api:anychart.graphics.events}API: events{api}

## Listening

To set listening function use {api:anychart.graphics.events#listen}listen(){api} or {api:anychart.graphics.events#listenOnce}listenOnce(){api} methods. Here is a sample code of listening of "click" event for a layer and a text object on it:

```
stage = anychart.graphics.create("container");

layer = stage.layer();

var textObject = layer.text(70, 55, "Click on this TEXT");
textObject.style({fontSize: "18px"});

var counter = 0;

// Adds an event listener to a text
textObject.listen("click", function(e) {
    counter++;
    textObject.text("You clicked " + counter + " times. " + "Click again.");
});

// Adds an event listener to a layer
layer.listen("click", function(e) {
    // change text color
    textObject.color(getRandomColor());
});
```

Try this sample to see how it works:

{sample}GFX\_Events\_01{sample}

Notice that click can be "heard" both by the text and the layer, see [Propagation](#propagation) section to learn how to avoid it.

## Unlistening

To stop listening use {api:anychart.graphics.events#unlisten}unlisten(){api}, {api:anychart.graphics.events#unlistenByKey}unlistenByKey(){api}, and {api:anychart.graphics.events#removeAll}removeAll(){api} methods. The next sample is a modification of the previous one, where layer will catch a "click" event and remove text object listener:

```
// Adds an event listener to a text
eventKey = textObject.listen("click", function(e) {
    counter++;
    textObject.text("You clicked " + counter + " times. ");
});

// Adds an event listener to a layer
layer.listenOnce("click", function(e) {
    textObject.text(textObject.text() + "No more listening.");
    // unlisten click for the text
    textObject.unlistenByKey(eventKey);
});
```

Try this sample to see how it works:

{sample}GFX\_Events\_02{sample}

## Propagation

To work prevent propagation use {api:anychart.graphics.events.BrowserEvent#preventDefault}preventDefault(){api}, {api:anychart.graphics.events.BrowserEvent#stopPropagation()}stopPropagation(){api}, and {api:anychart.graphics.events.BrowserEvent#stopWrapperPropagation()}stopWrapperPropagation(){api} methods.

The next sample is the modification of the first sample again, now the propgation is stopped and layer doesn't get a "click" event when text is clicked on, however, if you click anywhere else, the event is catched and color of the text changes. Notice that is you resume clicking the text, counter increases but the color remains the same.

```
// Adds an event listener to a text
textObject.listen("click", function(e) {
    counter++;
    textObject.text("You clicked " + counter + " times. Click again.");
    e.stopPropagation();
});

// Adds an event listener to a layer
layer.listen("click", function(e) {
    // change text color
    textObject.color(getRandomColor());
});
```

Try the sample and explore it in the Playground:

{sample}GFX\_Events\_03{sample}

## Stage

Besides all mentioned, there are also {api:anychart.graphics.vector.Stage.EventType}events{api} managed by stage. There are four of them: 
- STAGE_RESIZE (stageresize) - listen to this event when you need some changes or actions done on a stage while it is being resized
- STAGE_RENDERED (stagerendered) - listen to this event when you need some changes or actions done on a stage when it is rendered, i.e. when all images have been loaded to a stage
- RENDER_START (renderstart) - listen to this event when you need some changes or actions done on a stage when the stage rendering process has started
- RENDER_FINISH (renderfinish) - listen to this event when you need some changes or actions done on a stage when the stage rendering process has finished

In the following sample there is a text element of some width and height. Each time the stage is resized, width and height of this element is recounted

```
stage.listen("stageresize", function() {
    var w = stage.width()-300;
    textObject.width(w);
    var h = textObject.height();
    if ((h<=100) && (w<600)) textObject.height(600/w);
    if (w>600) textObject.height(100)
});
```

{sample}GFX\_Events\_04{sample}

The following samples demonstrates the time between rendering start and finish. The "renderstart" and "renderfinish" methods are listened to:

```
stage.listen("renderstart", function() {
    start = (new Date()).getTime();
});

stage.listenOnce("renderfinish", function() {
    finish = (new Date()).getTime();
    var labelBg = stage.rect();
    label = stage.text(130,130);
    label.text((finish - start) + "ms");
    var labelBounds = label.getBounds();
    labelBg
        .setX((labelBounds.left)-20)
        .setY((labelBounds.top)+20)
        .setWidth(labelBounds.width+40)
        .setHeight(labelBounds.height-40)
        .fill("#fff");
    label.zIndex(1000000);
});
```

Please note that the "renderfinish" event is listened only once as the result of rendering speed is demonstrated when the rendering has finished. So when the result is being drawn, the stage needs to rerender. That is why it is necessary to stop listening to the "renderfinish" event.

{sample}GFX\_Events\_05{sample}

