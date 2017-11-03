{:index 3}

# ASYNC Rendering

## Overview

AnyChart charts can be rendered both synchronously and asynchronously. Rendering charts asynchronously may boost your web application (page) responsiveness and improve better user experience but you always need to understand what asynchronous execution implies and code your application accordingly.

When you execute something synchronously, you wait for it to finish before moving on to another task. When you execute something asynchronously, you can move on to another task before it finishes.

Synchronous program execution is somewhat similar to this: your program is executed line by line, one line of code at a time. Each time a function is called, code execution waits until that function does everything it needs and makes a return before continuing to the next line.
 
Synchronous execution can have undesirable consequences when a function called starts a time-consuming process.  With synchronous execution, your program is "stuck" waiting for the process to end, with no way out while asynchronous execution avoids this bottleneck. 

When we speak of charting in JavaScript the most lengthy process is rendering: we have to create SVG or VML image, add it to DOM and so on. When this process is executed synchronous web page doesn't react to anything and waits until chart appears. This may be okay if your page is small and contains only a chart or two but in the case of large dashboard, such behavior may become undesirable.

AnyChart lets you decide if you want to go with synchronous or asynchronous rendering, you can set this by providing a boolean parameter to {api:anychart.core.Chart#draw}draw(){api} method:

```
var chart_1 = anychart.pie([1, 2, 3]);
// set rendering mode to asynchronous
chart_1.draw(true);

var chart_2 = anychart.column([1, 1, 1]);
// set rendering mode to synchronous
chart_2.draw(false);  

var chart_3 = anychart.bar([3, 2, 1]);
// providing no parameter means default: synchronous
chart_3.draw();  
```

## Asynchronous Execution

To understand better what kind of ramification of asynchronous rendering could be, please take a look at the sample code below. 

First, we create *isAsync* variable and assign *false* to it. Then we create [a stage](../Dashboards/Stage-Based_Layout) and a [Pie Chart](../Basic_Charts/Pie_Chart). Then we create an [event listener](Event_Listeners) which is fired when the stage is rendered. When the stage renders we check the value of *isAsync* and change the title of the chart. If we were in synchronous mode - the variable value would be *false*, but as we are rendering asynchronously - the variable will be **true**, although it is set to this value after {api:anychart.core.Chart#draw}draw(){api} method is called.

```
isAsync = false;

stage = anychart.graphics.create("container");

chart = anychart.pie([15, 16, 30]);

stage.listenOnce('stagerendered', function (){
    if (isAsync) chart.title("Is Async");
});

chart.container(stage);
chart.draw();

// In async mode, your code will be executed before chart draw.
isAsync = true;
```

You can take a look at this sample in Playground and change rendering mode to see how this affects code execution:

{sample}CMN\_Async\_01{sample}

## Rendering Multiple Charts

To illustrate how rendering mode can affect user experience we created this sample of the rendering of 80 pie charts on a single stage. Click buttons to launch chart rendering and you will see charts appearing one by one in the case of asynchronous execution and experience a slight delay before all charts appear at once in case of synchronous rendering.

**NOTE:** it may look almost the same if your PC performance is very high.

{sample}CMN\_Async\_02{sample}