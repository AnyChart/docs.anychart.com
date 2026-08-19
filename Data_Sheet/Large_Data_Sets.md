{:index 11}
# Large Data Sets

Virtual scrolling is on by default. Only the rows in the visible part of the grid exist in the page HTML. The grid also keeps a few extra rows above and below them. Those extra rows are called the buffer. So a grid of 5,000 rows keeps only a few dozen row elements, and more if you raise the buffer. That is why the grid stays fast: the first `draw()` of 5,000 rows takes a few tens of milliseconds. The sample below uses a buffer of 25 and prints the live count, so you can watch the number yourself.

Remember this in your own code. A CSS rule, a `querySelectorAll()` count or a UI test may look for every row. All of them get the wrong result.

{api:anychart.charts.DataSheet#virtualScroll}virtualScroll(){api} returns the controller:

* {api:anychart.core.dataSheet.VirtualScroll#bufferSize}bufferSize(){api} - the number of extra rows kept on each side, 10 by default. A bigger buffer makes fast scrolling smoother and keeps more rows in the page
* {api:anychart.core.dataSheet.VirtualScroll#enabled}enabled(false){api} - renders every row at once. Use it only for small grids, or when you need the whole table in the page for printing or testing

```
// build 5,000 rows
var names = ["Laptop", "Chair", "Monitor", "Desk", "Keyboard", "Lamp", "Headset", "Cabinet", "Shelf", "Webcam"];
var categories = ["Tech", "Office", "Storage"];
var rows = [];
for (var i = 1; i <= 5000; i++) {
  rows.push({
    id: i,
    product: names[i % names.length] + " #" + i,
    category: categories[i % categories.length],
    price: 20 + ((i * 37) % 1500),
    stock: (i * 13) % 500
  });
}

// virtual scrolling is on by default: keep 25 extra rows above and below the visible rows
// set this before the first draw()
chart.virtualScroll().bufferSize(25);
```

**Set these two options before the first `draw()`.** The controller does not tell the grid that something changed, so a `draw()` on its own after the change does nothing at all. The new value is picked up by the next redraw that something else triggers - a data change, a filter, a sort or a scroll. So it is hard to predict when the change takes effect.

Virtual scrolling needs a container with a real height. With a zero-height container the grid builds only the buffer rows - see the size rule in [Quick Start](Overview#quick_start).

The `aria-rowcount` attribute on the grid reports every row the current filter keeps, not the number of rows in the page. With no filter that is the whole data set, so for the sample below it reads 5000.

In the sample below, the line above the grid compares the 5,000 rows in the data with the row elements that really exist in the page.

{sample}DS\_Data\_Sheet\_16{sample}
