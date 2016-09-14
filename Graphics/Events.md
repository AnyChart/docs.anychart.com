{:index 4}
# GraphicsJS Events

* [Overview](#overview)
* [Listening](#listening)
* [Unlistening](#unlistening)
* [Propagation](#propagation)

## Overview

Any object, stage or layer in GraphicsJS can listen events. The list of events that can be handled for any element is available at: {api:anychart.graphics.events}API: events{api}

## Listening

To set listening function use {api:anychart.graphics.events#listen}{api} or {api:anychart.graphics.events#listenOnce}listenOnce(){api} methods. Here is a sample code of listening of "click" event for a layer and a text object on it:

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

{sample}GFX\_Events\_1{sample}

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

{sample}GFX\_Events\_2{sample}

# Propagation

To work prevent propagation use {api:anychart.graphics.events.BrowserEvent#preventDefault}preventDefault(){api}, {api:anychart.graphics.events.BrowserEvent#stopPropagation(){api}, and {api:anychart.graphics.events.BrowserEvent#stopWrapperPropagation()}stopWrapperPropagation(){api} methods.

The next sample is the modification of the first sample again, now the propgation is stopped and layer doesn't get a "click" event when text is clicked, however, if you click anywhere else, the event is catched and color of the text changes. Notice that is you resume clicking the text, counter increases but the color remains the same.

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

{sample}GFX\_Events\_3{sample}


