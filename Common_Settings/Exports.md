{:index 3}
Exports
======================
AnyChart allows to save charts in different formats: {api:anychart.graphics.vector.Stage#saveAsSvg}**SVG**{api}, {api:anychart.graphics.vector.Stage#saveAsPng}**PNG**{api}, {api:anychart.graphics.vector.Stage#saveAsJpg}**JPG**{api} and {api:anychart.graphics.vector.Stage#saveAsPdf}**PDF**{api}.

To launch the export you need to use these methods as shown:
```
  chart.saveAsSvg(); // this method will save the chart in SVG format
  chart.saveAsPng(); // this method will save the chart in PNG format
  chart.saveAsJpg(); // this method will save the chart in JPG format
  chart.saveAsPdf(); // this method will save the chart in PDF format
```

And here is a sample where you can see all methods in action:

{sample}Exports\_01{sample}
