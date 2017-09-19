{:index 3}

# Printing

## Overview

Although AnyChart is intended for creation interactive charts for web we provide an opportunity to print any of our charts.

## Chart Printing

You can print any chart at any time using {api:anychart.core.Chart#print}print(){api} method.

```
// this method will print your chart
chart.print();
```

You can play with this sample try to change printing layout or paper size along with the margins. The chart is quit flexible and fit nicely into remaining space.

{sample}Exports\_02{sample}

## Stage Printing

It is not a problem to print several charts or the whole dashboard using AnyChart Charting Framework. You can do it by placing every object for printing on the same stage and call {api:anychart.graphics.vector.Stage#print}print(){api} method for stage instead of a single chart.

```
// stage to print
var stage = anychart.graphics.create("container");

// place charts on stage
column.container(stage);
pie.container(stage);

// print the whole stage
stage.print()
```

Here is the sample of stage printing:

{sample}Exports\_03{sample}

## Parameters

In case you need to set paper size manually AnyChart provides an opportunity to use two parameters for printing. The first one defines the paper size and the second one page layout: whether it should be portrait or landscape (**true** stands for the landscape layout and **false** for the portrait).

```
chart.print(
  // set "a2" paper format
  "a2",
  // enable landscape mode
  true
);
```

Here is the list of possible paper formats:

* **usletter** paper size 215.9mm by 279.4mm
* **A0** paper size 841mm by 1189mm
* **A1** paper size 594mm by 841mm
* **A2** paper size 420mm by 594mm
* **A3** paper size 297mm by 420mm
* **A4** paper size 210mm by 297mm
* **A5** paper size 148mm by 210mm
* **A6** paper size 105mm by 148mm

Here is a sample for printing chart on paper of **A2** format with **landscape** layout:

{sample}Exports\_04{sample}