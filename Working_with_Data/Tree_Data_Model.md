{:index 5}
# Tree Data Model

## Overview

* [Gantt](../Gantt_Chart/Quick_Start), [Treemap](../Basic_Charts/Treemap_Chart)
* деревья представляются экземплярами (instances) класса anychart.data.Tree
* элементы деревьев - экземплярами anychart.data.Tree.DataItem

## Structure

* строчку про maxDepth не выводить при цитировании кода

### Tree

```

```

{sample :height 450}WD\_Data\_Tree\_01{sample}

### Table

```

```

{sample :height 450}WD\_Data\_Tree\_02{sample}

## Data Manipulation

* список операций с данными - переименовать так, чтобы согласовалось с оглавлением
* [Data Manipulation](Data_Manipulation)

### Reading

* getChildAt(), getChildren(), numChildren()
* indexOfChild() ?
* эти методы возвращают instances of anychart.data.Tree.DataItem
* ссылки на этот раздел из других разделов!

```

```

{sample}WD\_Data\_Tree\_03{sample}

### Adding

* пример: прямое обращение к элементам через такие-то методы, ссылка на read
* примечание: также к элементам можно обращаться с помощью методов, описанных в разделе searching

```

```

{sample}WD\_Data\_Tree\_04{sample}

* примечание: addData добавляет новые корневые элементы --> в тримапах данные будут обновляться, но новые данные не будут отображаться, т.к. всегда отображается только 1 корневой элемент

```

```

{sample :width 500 :height 500}WD\_Data\_Tree\_05{sample}

### Updating

* метод set() класса anychart.data.Tree.DataItem

```

```

{sample}WD\_Data\_Tree\_06{sample}

### Removing

* упомянуть три разных метода remove

```

```

{sample}WD\_Data\_Tree\_07{sample}

### Searching

```

```

{sample}WD\_Data\_Tree\_08{sample}


```

```

{sample}WD\_Data\_Tree\_09{sample}

### Traversing

```

```

{sample :height 450}WD\_Data\_Tree\_10{sample}

```

```

{sample}WD\_Data\_Tree\_11{sample}