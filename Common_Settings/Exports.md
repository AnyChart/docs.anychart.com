{:index 3}
Exports
======================
AnyChart allows to save charts in different formats. It may be an image or pdf file.

AnyChart supports tree image-file formats: {api:anychart.graphics.vector.Stage#saveAsSVG}**SVG**{api}, {api:anychart.graphics.vector.Stage#saveAsPNG}**PNG**{api}, {api:anychart.graphics.vector.Stage#saveAsJPG}**JPG**{api} and document-file format format: {api:anychart.graphics.vector.Stage#saveAsPDF}**PDF**{api}. Any chart can be exported into each of these formats. All methods for all of this export formats are represented below:

```
  chart.saveAsSVG(); // this method will save the chart in SVG format
  chart.saveAsPNG(); // this method will save the chart in PNG format
  chart.saveAsJPG(); // this method will save the chart in JPG format
  chart.saveAsPDF(); // this method will save the chart in PDF format
```

Here is a sample with buttons which represent each of methods mentioned above.

{sample}Exports\_01{sample}