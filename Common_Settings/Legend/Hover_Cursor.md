{:index 7}
# Hover Cursor

(?) {api:anychart.charts.Cartesian#legend}legend(){api}

To adjust the hover cursor of the legend, use the {api:anychart.core.ui.Legend#hoverCursor}hoverCursor(){api} method with one of the parameters listed in {api:anychart.enums.Cursor}anychart.enums.Cursor{api}.

By default, the cursor type is `"pointer"`, and in the following sample it is set to `"help"`:

```
// customize the hover cursor of the legend
chart.legend().hoverCursor("help");
```

{sample}CS\_Legend\_Hover\_Cursor{sample}