{:index 9}
# Event Listeners in Maps

* [Overview](#overview)
* [Action types](#action_types)
* [Listener Types](#listener_types)
 
## Overview

Listeners help to catch the users actions in order to add or change some information or change something in the performance of maps as a reaction on those actions. Listeners are the way to track what happens with charts and maps in AnyChart, and this article will explain how to use them.

## Action Types

There are two types of actions: point-oriented and mouse-oriented. All available listeners are listed in [Event listeners](../Common_Settings/Event_Listeners) article. Any of those can be used with maps.

## Listener Types

There are five basic listener methods in AnyMaps:

 - {api:anychart.charts.Map#listen}listen{api}
 - {api:anychart.charts.Map#listenOnce}listenOnce{api}
 - {api:anychart.charts.Map#removeAllListeners}removeAllListeners{api}
 - {api:anychart.charts.Map#unlisten}unlisten{api}
 - {api:anychart.charts.Map#unlistenByKey}unlistenByKey{api}
 
You can use first two of them to start listening the actions and rest are being used when we want to stop listening for the actions. 

You can find everything about listeners in [Event Listeners](../Common_Settings/Event_Listeners) article. Look through the next couple of samples and explore them in the Playground to see that it works with maps the same as with charts.
 
{sample}Maps\_Events\_01{sample}

```
	// create a function to listen and then unlisten
    var func_listen = function(e){
        window.open('https://www.google.com/search?q=Australia');
    };
  
    //add a listener
    var listener = australiaMap.listen('dblclick', func_listen);
```
 
Here we added a listener that opens a Google Search with "Australia" search when it catches a double-click on a map. 

The following sample shows a listener and unlistener working on one map: we listen to the mouseOver action and change colors depending on where the cursor is, but when we click on a map, we stop listening. 

```
	// create a function what to listen and then unlisten
    var func_listen = function(e){
        pi = e.pointIndex;
        if (pi) {
            series.fill('#FFC9A8');
        } else{
            series.fill('#ADEB85')
        }
    };
  
    // add a listener
    var listener = australiaMap.listen('mouseOver', func_listen);
    
    australiaMap.listenOnce('click',function(){
        //adding an unlistener 
        australiaMap.unlisten('mouseOver', func_listen);
    });

```

{sample}Maps\_Events\_02{sample}

This sample can be modified: you can add an extra field to the map data which would contain a specific URL, so each region will redirect to different pages when double-clicked.

Look the main [Event Listener article](../Common_Settings/Event_Listeners) to learn more about the listeners.

