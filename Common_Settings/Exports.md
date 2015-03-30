{:index 3}
Exports
======================
AnyChart allows to save charts in different formats: {api:anychart.graphics.vector.Stage#saveAsSVG}**SVG**{api}, {api:anychart.graphics.vector.Stage#saveAsPNG}**PNG**{api}, {api:anychart.graphics.vector.Stage#saveAsJPG}**JPG**{api} and {api:anychart.graphics.vector.Stage#saveAsPDF}**PDF**{api}.

To launch the export you need to use these methods as shown:
```
  chart.saveAsSVG(); // this method will save the chart in SVG format
  chart.saveAsPNG(); // this method will save the chart in PNG format
  chart.saveAsJPG(); // this method will save the chart in JPG format
  chart.saveAsPDF(); // this method will save the chart in PDF format
```

And here is a sample where you can see all methods in action:

{sample}Exports\_01{sample}
