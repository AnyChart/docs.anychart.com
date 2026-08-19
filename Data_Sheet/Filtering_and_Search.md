{:index 6}
# Filtering and Search

A filter hides the rows that do not match your conditions. A search keeps every row on screen and highlights the cells that contain your text. Both cut a large grid down to what the user is after, and the two are easy to confuse, so pick the one that matches the job: fewer rows, or a way to find a value among the rows that are already there.

You need them once the grid holds more rows than a user can scan, or once a control on your page - a category dropdown, a price range, a search box - has to drive the grid from code. This article shows the three filter types and their limits, how to clear filters and read them back, how to get the row counts and the matching rows, and how to open and drive the search bar.

## Filtering

To show only the rows that match your conditions, use the {api:anychart.charts.DataSheet#filter}filter(){api} controller. {api:anychart.core.dataSheet.Filter#filterBy}filterBy(field, config){api} sets one filter per field. A second filter on the same field replaces the first. A row is shown only if it passes **every** active filter.

A filter reads the raw data value, not the text in the cell. If a column has a `format`, write the filter for the raw value, not for the text that the format produces. See [Data Types and Formats](Columns#data_types_and_formats).

Filters follow the redraw rule as well: a filter you set takes effect on the next `draw()`.

### Filter Types

There are three kinds of filter configuration:

* **Text** - `{type: 'text', mode: 'contains' | 'startsWith' | 'exact', value: '...'}`. The match is not case sensitive. `mode` defaults to `contains`. An empty value matches every row
* **Number** - `{type: 'number', min: 100, max: 500}`. Both ends are included, and both are optional. A value that is not a number never passes
* **Boolean** - `{type: 'boolean', value: true}`. The grid compares with `==`, so any value that JavaScript treats as true counts as true

**These three are the only types.** There is no date filter. Any other `type`, and any other `mode` in a text filter, lets every row through. You get no error, and the `filter` event still reports that the grid removed no rows. To filter a date column, put a number in your data next to the date and use a number filter.

To combine two conditions, call `filterBy()` once per field:

```
// a text filter: keep the rows of the Tech category
chart.filter().filterBy('category', {type: 'text', mode: 'exact', value: 'Tech'});

// a number filter: keep the rows with a price from 100 to 500
// both bounds are included, and a row must pass every filter
chart.filter().filterBy('price', {type: 'number', min: 100, max: 500});
```

### Reading and Clearing Filters

{api:anychart.core.dataSheet.Filter#clearFilter}clearFilter(field){api} removes one filter and {api:anychart.core.dataSheet.Filter#clearFilters}clearFilters(){api} removes all of them. {api:anychart.core.dataSheet.Filter#getFilter}getFilter(field){api} and {api:anychart.core.dataSheet.Filter#getFilters}getFilters(){api} read the configuration back. {api:anychart.core.dataSheet.Filter#enabled}enabled(false){api} lets every row through but keeps your configurations, so switching it back on restores them.

```
// clearFilters() removes every filter at once
chart.filter().clearFilters();
chart.draw();
```

### Row Counts

The `filter` event carries `filteredCount` and `totalCount`, so a listener can report how many rows survived:

```
// the filter event reports how many rows are left
chart.listen('filter', function (e) {
  state.innerHTML = e.filteredCount + ' of ' + e.totalCount + ' rows shown';
});
```

Use the `Clear filters` button in the sample below to drop both filters at once, and watch the row count in the line above the grid.

{sample}DS\_Data\_Sheet\_10{sample}

### Filtered Rows

To get the rows themselves, and not only the count, call {api:anychart.core.dataSheet.Filter#applyFilters}applyFilters(data){api}. It runs the active filters over an array and returns the indices of the rows that pass, so you can build your own total from them:

```
// the indices of the rows that pass every active filter
var rows = chart.data();
var indices = chart.filter().applyFilters(rows);

var total = 0;
for (var i = 0; i < indices.length; i++) {
  total += rows[indices[i]].price;
}
```

With filtering switched off, or with no filter set, it returns every index.

## Search

Search finds text anywhere in the grid and highlights it. It does not hide the other rows - that is what [Filtering](#filtering) is for. The two are easy to confuse.

### Search Controls

The {api:anychart.charts.DataSheet#search}search(){api} controller works with the search bar inside the grid:

* {api:anychart.core.dataSheet.Search#show}show(){api} opens the bar. {api:anychart.core.dataSheet.Search#close}close(){api} hides it, clears the query and removes the highlighting. Esc does the same as `close()`
* {api:anychart.core.dataSheet.Search#query}query(text){api} runs a search. It matches any part of a value and is not case sensitive
* {api:anychart.core.dataSheet.Search#matchCount}matchCount(){api} returns the number of matching cells
* {api:anychart.core.dataSheet.Search#next}next(){api} and {api:anychart.core.dataSheet.Search#prev}prev(){api} step through the matches and scroll each one into view. After the last match they go back to the first one
* {api:anychart.core.dataSheet.Search#isVisible}isVisible(){api} reports whether the bar is open, and {api:anychart.core.dataSheet.Search#enabled}enabled(false){api} stops it opening at all

A `search` event carries `query` and `matchCount`.

### Call Order

**The order of the calls matters.** The grid builds the search bar during `draw()`, and `query()` searches the rows that a `draw()` prepared. So draw the grid first, then call `show()` and `query()`, then draw again:

```
// the search event reports the query and how many cells matched
chart.listen('search', function (e) {
  state.innerHTML = '"' + e.query + '" - ' + e.matchCount + ' matching cells';
});

chart.container('container');
chart.draw();

// open the search bar and run a query
// both steps need a redraw: the bar is built during draw(),
// and query() searches the rows that the first draw() prepared
chart.search().show();
chart.search().query('Tech');
chart.draw();

// step through the matches - each one is scrolled into view
// after the last match, next() goes back to the first one
chart.search().next();
chart.search().prev();
```

Ctrl+F (Cmd+F on macOS) opens the bar too, but the bar itself appears only on the next redraw. See [Keyboard Shortcuts](Keyboard_and_Clipboard#keyboard_shortcuts).

### The Input Box and the Counter

A query you run from code does not fill the input box of the bar. No later call fills it either. The box stays empty until the user types in it. The highlighting and `matchCount()` are still correct. The counter beside the box is also empty at first: when `query()` runs, the bar does not exist yet. `next()` or `prev()` then fills the counter in. That is why the sample below prints the count in a line of its own.

### Search Scope

Search looks at every row that the current filter keeps, including rows you have scrolled past. It looks only at the fields that have a column. If you declare columns, the values in the other fields are never found. See [Defining Columns](Columns#defining_columns). It also matches the raw data value, not the text in the cell: on a formatted number, `1,200` finds nothing and `1200` finds the row.

Use the buttons in the sample below to step through the matches of the `Tech` query and to close the search bar.

{sample}DS\_Data\_Sheet\_11{sample}
