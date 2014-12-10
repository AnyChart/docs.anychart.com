{:index 3}
Exports
======================
AnyChart allows to save charts in different formats. It may be an image or pdf file. This article is fully devoted to all possible means of saving and even printing AnyChart.

##Supported output Formats

AnyChart supports tree image-file formats: **SVG**, **PNG**, **JPG** and document-file format format: **PDF**. Any chart can be exported into each of these formats. All methods for all of this export formats are represented below:

```
  chart.saveAsSVG(); // this method will save the chart in SVG format
  chart.saveAsPNG(); // this method will save the chart in PNG format
  chart.saveAsJPG(); // this method will save the chart in JPG format
  chart.saveAsPDF(); // this method will save the chart in PDF format
```

Here is a sample with buttons which represent each of methods mentioned above.

{sample}Exports\_01{sample}

##Chart Printing

As a way of chart exporting AnyChart allows to print chart at any time using method **.print()**.

```
  chart.print();  // this method will print your chart
```

Sample below demonstrates chart printing after click on a button

{sample}Exports\_02{sample}