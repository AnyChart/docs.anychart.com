{:index 9}
# Grouping

{api:anychart.charts.DataSheet#groupBy}groupBy(field){api} puts the rows into groups by one field. `groupBy([field1, field2])` makes groups inside groups, in the order you give. `groupBy(null)` removes the grouping.

The optional second argument holds the summaries. You must put them inside an `aggregates` key:

```
// group the rows by category and summarize each group
chart.groupBy("category", {aggregates: {price: "sum", stock: "avg"}});

// open every group
chart.hierarchy().expandAll();
chart.draw();

// close every group
chart.hierarchy().collapseAll();
chart.draw();
```

A summary can be `count`, `sum`, `avg`, `min`, `max`, `median`, `first` or `last`. You can also pass a function of your own. It receives the array of values in the group.

The summaries do not line up under their columns. The grid adds each one to the group row, after the group name and the row count, as `field: value`. It uses the raw field name, not the column title. The grid does not format these values: in the sample below, the summed price of the Tech group reads `price: 1720`, not `1,720`. The grid does use a `format` function from the column for a summary, but it ignores a `format` string. Use the `anychart-ds-aggregate` class in your stylesheet to place them, or a format function on the column to format them.

`groupBy()` switches the group zone on by itself. That is the strip above the header. It shows one small tag - a chip - for each grouped field, and each chip has a cross that removes it. The user can drag a column header into the strip to group by that field, and drag the chips to reorder the grouping. Call `groupZone(true)` to show the zone without grouping anything yourself, and let the user do the grouping. `groupBy(null)` does **not** switch the zone off again - call {api:anychart.charts.DataSheet#groupZone}groupZone(false){api} for that.

The zone adds one more row above the header. The grid does not make its own height smaller for that row. So give the container a little more height. If you do not, the last rows are cut off.

The {api:anychart.charts.DataSheet#hierarchy}hierarchy(){api} controller opens and closes the groups: {api:anychart.core.dataSheet.Hierarchy#expandAll}expandAll(){api} and {api:anychart.core.dataSheet.Hierarchy#collapseAll}collapseAll(){api} for all of them, and {api:anychart.core.dataSheet.Hierarchy#expand}expand(key){api}, {api:anychart.core.dataSheet.Hierarchy#collapse}collapse(key){api} and {api:anychart.core.dataSheet.Hierarchy#toggle}toggle(key){api} for one group at a time. {api:anychart.core.dataSheet.Hierarchy#isExpanded}isExpanded(key){api} reports the state of one group.

A group key joins the grouped field names down to that level with `/`, then adds `=` and the value. Grouping by `category` alone gives `'category=Tech'`. Grouping by `category` and then `supplier` gives `'category=Tech'` for the outer group and `'category/supplier=Contoso'` for the inner one. {api:anychart.core.dataSheet.Hierarchy#getGroupFields}getGroupFields(){api} returns the fields you grouped by. These methods work for groups. They do not work for [tree data](Data#tree_data).

Grouping follows the redraw rule, and it fires a `groupchange` event.

**Do not set a sort in a grouped grid.** As [Sorting](Sorting) says, the row order comes from the groups, and the sort is ignored.

{sample}DS\_Data\_Sheet\_14{sample}
