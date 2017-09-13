# Chart Labels 

## Overview

Custom labels are text or image elements that can be placed anywhere on your chart or map to add descriptions or comments. Labels also can have actions attached.

Do not confuse Chart Labels with [Series Labels](../Common_Settings/Labels).

## Basics

The sample below demonstrates a {api:anychart.core.SeparateChart#label}label(){api} containing some information about the chart placed in the right top corner.

```
var label = chart.label();
label.text("The chart shows different\nice cream cones (with a\ndelicious crispy  taste) sales\nvolume.");
```

{sample}CS\_Chart\_Labels\_01{sample}

## Attaching Actions

You can attach actions to labels and turn them into controls that can change an appearance of a chart or invoke any function.

To attach an action to the image you have to use `listen()` method. Read more about event listeners in [Event Listeners article](Event_Listeners) and [Graphics JS Events](../Graphics/Events).

```
label = chart.label();
label.listen(
  // event type
  "click",
  // your function
  function() {/*custom function code*/}
);
```

Here is a js column chart with a custom label. Clicking on it invokes a function that cycles through points and  selects them one by one. 

{sample}CS\_Chart\_Labels\_02{sample}