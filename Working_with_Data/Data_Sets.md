{:index 2}
# Data Sets

## Overview

## Classes

Here is the list of classes allowing you to work with data sets in AnyChart:

* data set – {api:anychart.data.Set}anychart.data.Set{api}
* data view – {api:anychart.data.View}anychart.data.View{api}
* iterator – {api:anychart.data.Iterator}anychart.data.Iterator{api}

## Setting Data

* {api:anychart.data.Set}anychart.data.Set{api}
* {api:anychart.data#set}anychart.data.set(){api}

### Array of Arrays

```

```

{sample}WD\_Data\_Sets\_01{sample}

### Array of Objects

```

```

{sample}WD\_Data\_Sets\_02{sample}

### CSV String

```

```

{sample}WD\_Data\_Sets\_03{sample}

### Mapping

* {api:anychart.data.Set#mapAs}mapAs(){api}
* здесь про view не писать
* в других разделах использовать mapAs() для доступа к view, не линкуя его


```

```

{sample}WD\_Data\_Sets\_01{sample}

## Accessing Rows

* {api:anychart.data.Set}anychart.data.Set{api}
* {api:anychart.data.View}anychart.data.View{api}
* у ряда нет своего класса, но есть классы dataset и view
* они позволяют работать с рядами и конкретными полями: dataset - ряд, view - поле + через view можно делать итерацию и поиск

## Data Manipulation

### Reading

* строка: row() (dataset), getRowsCount() (dataset)
* отдельное поле: get() (view)


```

```

{sample}WD\_Data\_Sets\_01{sample}

### Adding

* append() (dataset)
* insert() (dataset)


```

```

{sample}WD\_Data\_Sets\_01{sample}

### Updating

* строка: row() (dataset)
* отдельное поле: set() (view)


```

```

{sample}WD\_Data\_Sets\_01{sample}

### Removing

* remove() (dataset)


```

```

{sample}WD\_Data\_Sets\_01{sample}

### Searching

* filter() (view)
* find() (view)


```

```

{sample}WD\_Data\_Sets\_01{sample}

### Iterating

* getIterator() (view)
* методы итератора


```

```

{sample}WD\_Data\_Sets\_01{sample}

## Events

(?)