{:index 16}
# What Is Not Supported

If you come here from a chart page, read this page first. It saves time.

**No `title()`, `legend()`, `tooltip()`, `credits()`, `animation()` or `background()`.** They are left out on purpose. The Data Sheet is built on `anychart.core.VisualBaseWithBounds`, not on the common chart class. Use a plain HTML heading above the container instead of `title()`. Use a panel of your own, or a DOM tooltip, instead of `tooltip()`. Use CSS instead of `background()`.

**No series, no axes, no scales, no data labels and no chart palette.** The general Interactivity, Labels and Tooltip articles do not apply to this type. Do not follow those cross-links from other pages - they do not help you with this type.

**`anychart.data.Set` and `anychart.data.View` do not work yet.** Pass a plain array - see [Data](Data).

**Tree rows cannot be closed** in this release, and the arrows do nothing - see [Tree Data](Data#tree_data). Groups open and close normally.

**Detail rows do not work.** The `detailRow()` methods are in the API, but the grid never removes the elements it creates for a detail row. More and more of them stay in the page. Do not use them yet.

**`cellPadding()` and `cellBorder()` have no effect,** and neither do the group header color and the tree indent. Use CSS - see [CSS Classes](Appearance#css_classes).

**A column cannot be hidden or removed.** There is no `removeColumn()`, and a column has no `visible()` setting, so the set of columns only grows. To show a different set of columns, build a new Data Sheet - see [Defining Columns](Columns#defining_columns).

**A cell holds plain text only.** There is no cell renderer, so a badge, a link, a button or an icon inside a cell is not possible. A format function also sees the cell value alone, never the whole row - see [Data Types and Formats](Columns#data_types_and_formats).

**There is no date filter.** Filtering handles text, numbers and booleans only - see [Filtering](Filtering_and_Search).

**An edit can only be started by the user.** `startEdit()` and `moveToNextCell()` are in the API, but they need a cell element that no selector can find - see [Cell Editing](Cell_Editing).

**`print({includeFiltered: true})` does nothing.** The API reference lists it as a way to print every row and ignore the current filter, but the option is lost when the library is compiled. Printing always follows the current sorting and filtering. Clear the filter before you print.

**Tab does not walk between editable cells.** It accepts the value and closes the editor - see [Cell Editing](Cell_Editing).

**JSON has a limit.** {api:anychart.charts.DataSheet#toJson}toJson(){api} saves the settings, and `anychart.fromJson()` accepts the `'data-sheet'` type. But the data and the column setup are not part of that JSON. A grid built only from a configuration has no columns and no rows. Set those in code.

Sizing does work. `container()`, `width()`, `height()` and `bounds()` work as they do everywhere else in AnyChart - see [Appearance](Appearance).
