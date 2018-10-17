{:index 2}
# Data Sets

## Overview

## Classes

## Setting Data

### Array of Arrays

```

```

{sample}WD\_Data\_Sets\_01{sample}

### Array of Objects

```

```

{sample}WD\_Data\_Sets\_01{sample}

### CSV String

```

```

{sample}WD\_Data\_Sets\_01{sample}

### Mapping

* здесь про view не писать
* в других разделах использовать mapAs() для доступа к view, не линкуя его


```

```

{sample}WD\_Data\_Sets\_01{sample}

## Accessing Rows

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