{:index 3}
Exports
======================
AnyChart allows to save charts in different formats: {api:anychart.graphics.vector.Stage#saveAsSvg}**SVG**{api}, {api:anychart.graphics.vector.Stage#saveAsPng}**PNG**{api}, {api:anychart.graphics.vector.Stage#saveAsJpg}**JPG**{api} and {api:anychart.graphics.vector.Stage#saveAsPdf}**PDF**{api}.

To launch the export you need to use these methods as shown:

```
  // this method will save the chart in SVG format
  chart.saveAsSvg();
  // this method will save the chart in PNG format
  chart.saveAsPng();
  // this method will save the chart in JPG format
  chart.saveAsJpg();
  // this method will save the chart in PDF format
  chart.saveAsPdf();
```

And here is a sample where you can see all methods in action:

{sample}Exports\_01{sample}
