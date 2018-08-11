{:index 7}
# Hover Cursor

To adjust the hover cursor of the legend, combine the **legend()** method of the chart with {api:anychart.core.ui.Legend#hoverCursor}hoverCursor(){api} and one of the parameters listed in {api:anychart.enums.Cursor}anychart.enums.Cursor{api}.

By default, the cursor type is `"pointer"`, and in the following sample it is set to `"help"`:

```
// customize the hover cursor of the legend
chart.legend().hoverCursor("help");
```

{sample}CS\_Legend\_Hover\_Cursor{sample}