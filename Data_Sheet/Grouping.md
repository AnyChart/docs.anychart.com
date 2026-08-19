{:index 9}
# Grouping

A group collects the rows that share a value in one field and puts a group row above them. The group row carries the group name, the number of rows in it, and any summaries you asked for. Each group opens and closes, so a long flat table becomes a short list of group rows, and the reader opens one at a time.

Group the rows when the reader wants the totals first and the single rows second: products by category, sales by region, tickets by owner. This article shows how to group by one field or by several, how to summarize each group, how to let the user group the rows from the group zone, and how to open and close the groups from code.

## Grouping the Rows

To group the rows by one field, pass the field name to {api:anychart.charts.DataSheet#groupBy}groupBy(field){api}. `groupBy([field1, field2])` makes groups inside groups, in the order you give. `groupBy(null)` removes the grouping:

```
// group the rows by category and summarize each group
chart.groupBy("category", {aggregates: {price: "sum", stock: "avg"}});
```

The grid regroups the rows on the next `draw()`, as the redraw rule from [Rules for Every Grid](Overview#rules_for_every_grid) requires. A change of the grouping fires a `groupchange` event - see [Events](Events).

## Group Summaries

The second argument of `groupBy()` is optional. It holds the summaries, and you must put them inside an `aggregates` key, as the call above does.

A summary can be `count`, `sum`, `avg`, `min`, `max`, `median`, `first` or `last`. You can also pass a function of your own. It receives the array of values in the group.

The summaries do not line up under their columns. The grid adds each one to the group row, after the group name and the row count, as `field: value`. It uses the raw field name, not the column title. The grid does not format these values: in the sample at the end of this article, the summed price of the Tech group reads `price: 1720`, not `1,720`. The grid does use a `format` function from the column for a summary, but it ignores a `format` string. Use the `anychart-ds-aggregate` class in your stylesheet to place them, or a format function on the column to format them.

## The Group Zone

`groupBy()` switches the group zone on by itself. That is the strip above the header. It shows one small tag - a chip - for each grouped field, and each chip has a cross that removes it. The user can drag a column header into the strip to group by that field, and drag the chips to reorder the grouping.

To show the zone without grouping anything yourself, call `groupZone(true)` and let the user do the grouping. `groupBy(null)` does **not** switch the zone off again - call {api:anychart.charts.DataSheet#groupZone}groupZone(false){api} for that.

The zone adds one more row above the header. The grid does not make its own height smaller for that row. So give the container a little more height. If you do not, the last rows are cut off.

## Grouping and Sorting

**Do not set a sort in a grouped grid.** As [Sorting](Sorting) says, the row order comes from the groups, and the sort is ignored.

## Opening and Closing Groups

The {api:anychart.charts.DataSheet#hierarchy}hierarchy(){api} controller opens and closes the groups: {api:anychart.core.dataSheet.Hierarchy#expandAll}expandAll(){api} and {api:anychart.core.dataSheet.Hierarchy#collapseAll}collapseAll(){api} for all of them, and {api:anychart.core.dataSheet.Hierarchy#expand}expand(key){api}, {api:anychart.core.dataSheet.Hierarchy#collapse}collapse(key){api} and {api:anychart.core.dataSheet.Hierarchy#toggle}toggle(key){api} for one group at a time. {api:anychart.core.dataSheet.Hierarchy#isExpanded}isExpanded(key){api} reports the state of one group:

```
// open every group
chart.hierarchy().expandAll();
chart.draw();

// close every group
chart.hierarchy().collapseAll();
chart.draw();
```

A group key joins the grouped field names down to that level with `/`, then adds `=` and the value. Grouping by `category` alone gives `'category=Tech'`. Grouping by `category` and then `supplier` gives `'category=Tech'` for the outer group and `'category/supplier=Contoso'` for the inner one. {api:anychart.core.dataSheet.Hierarchy#getGroupFields}getGroupFields(){api} returns the fields you grouped by. These methods work for groups. They do not work for [tree data](Data#tree_data).

Use the buttons in the sample below to open and close the three category groups, each of which carries a summed price and an average stock.

{sample}DS\_Data\_Sheet\_14{sample}
