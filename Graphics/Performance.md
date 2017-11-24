{:index 9.1}
# GraphicsJS Performance Tips

## Overview

This section is supposed to give our users some additional information about AnyChart GraphicsJS, how to make using and managing it easier and faster. 

## Suspend and Resume

There are two special methods of our stage that allow to use [virtual DOM](Virtual_DOM) instead of redrawing any time a new object appears. The stage method {api:anychart.graphics.vector.Stage#suspend}suspend(){api} stops the stage from redrawing and rerendering. However, all changes are being written down in the virtual DOM instead of real DOM. Without {api:anychart.graphics.vector.Stage#suspend}suspend(){api}, it takes far much longer time to demonstrate all changes on stage than in case when we first suspend the stage from drawing and then put all DOM-elements on it at once. 

The {api:anychart.graphics.vector.Stage#resume}resume(){api} method is necessary to finally put all DOM-elements on a stage.

Two examples below show how much time it takes to draw 5000 small rects in an area of 300 x 300 px. In the 

```
stage.suspend();
for (var i = 0; i < 5000; i++) {
    var left = Math.random() * 300;
    var qwer = Math.random() * 300;    
    var rect = stage.rect(left, qwer, rectSide, rectSide);
    rect.fill('green');
}

stage.resume();
```
{sample}GFX\_Performance\_01{sample}

The following sample is almost the same, the diffrence is in using {api:anychart.graphics.vector.Stage#suspend}suspend(){api} and {api:anychart.graphics.vector.Stage#resume}resume(){api} methods. Below you can see that the rendering time is several times longer than in the first sample.

{sample}GFX\_Performance\_02{sample}

As you can see, the {api:anychart.graphics.vector.Stage#suspend}suspend(){api} and {api:anychart.graphics.vector.Stage#resume}resume(){api} methods are quite useful for operations with a big amount of data. However, there still will be no profit in using them when your stage contains a couple of simple shapes. 


## Reuse of elements

There is another useful feature of AnyChart GraphicsJS. If there is an element of a stage that is not necessary anymore, but a similar one is necessary, you do not have to create a new object. It is enough to reuse the exsiting one. Due to not creating new objects, GraphicsJS works faster. 

You can easily watch the difference between the next sample, where a special layer is added and is being cleaned each time you click the button, generating small squares, and two previous ones. The rendering time in this case does not grow depending on how many times you generate new squares, opposite to the previous samples.

```
// a layer for green squares to be reused each new generation
var rectLayer = stage.layer();

// this is to be performed on a click
labelBg.listen("click", function (){
rectLayer.removeChildren();
```

{sample}GFX\_Performance\_03{sample}