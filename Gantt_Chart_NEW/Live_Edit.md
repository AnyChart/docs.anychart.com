{:index 14}
# Live Edit

## Overview

misc:

* {api:anychart.core.gantt.edit.StructureEdit}anychart.core.gantt.edit.StructureEdit{api}: chart, timeline, data grid
* {api:anychart.core.gantt.edit.ElementEdit}anychart.core.gantt.edit.ElementEdit{api}: elements (except for connectors)
* data grid text: настроек нет
* поле `id` необходимо для корректной работы этого режима и ганттов в целом
* список классов?

## Enabling / Disabling

misc:

* chart: structure edit + element edit + data grid text
* timeline: structure edit + element edit	
* elements: element edit
* data grid: structure edit + data grid text

примеры:

* пример 1: включение на всем чарте
* пример 2: боксы с галочками - data grid, timeline, какой-нибудь элемент

```

```

{sample :height 220}GANTT\_NEW\_Live\_Edit\_01{sample}

```

```

{sample :height 260}GANTT\_NEW\_Live\_Edit\_02{sample}

## Default Behavior

misc:

* упоминать события
* сослаться на Events

```

```

{sample :height 220}GANTT\_NEW\_Live\_Edit\_03{sample}

## Events

* отсылочный раздел: Events

## Settings

### Appearance

misc:

* StructureEdit: fill(), stroke(), placementStroke()
* ElementEdit:  fill(), stroke()
* ConnectorElement: previewStroke()
* ссылка на Controls
* ползунок прогресс баров: внешний вид настраивается через edit() --> fill() и stroke()

примеры:

* показать structure edit и element edit, возможно разбить на два примера

```

```

{sample :height 220}GANTT\_NEW\_Live\_Edit\_04{sample}

```

```

{sample :height 220}GANTT\_NEW\_Live\_Edit\_05{sample}

### Controls (Thumbs)

* ElementEdit:  thumbs(), connectorThumbs()
* ElementEdit -> start() & end() + thumb() & connectorThumb()
* метод thumbs(): проверить у каких классов он на самом деле работает

```

```

{sample :height 220}GANTT\_NEW\_Live\_Edit\_06{sample}