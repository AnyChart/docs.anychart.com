{:index 14}
# Live Edit

## Overview

misc:

* {api:anychart.core.gantt.edit.StructureEdit}anychart.core.gantt.edit.StructureEdit{api}: chart, timeline, data grid
* {api:anychart.core.gantt.edit.ElementEdit}anychart.core.gantt.edit.ElementEdit{api}: elements (except for connectors)
* data grid text: настроек нет
* поле `id` необходимо для корректной работы этого режима и ганттов в целом

## Enabling / Disabling

misc:

* chart: structure edit + element edit + data grid text
* timeline: structure edit + element edit	
* elements: element edit
* data grid: structure edit + data grid text

## Default Behavior

misc:

* упоминать события
* сослаться на Events


## Events

* отсылочный раздел: Events

## Settings

### Appearance

misc:

* StructureEdit: fill(), stroke(), placementStroke()
* ElementEdit:  fill(), stroke()
* ConnectorElement: previewStroke()
* ссылка на Controls

### Controls (Thumbs)

* ElementEdit:  thumbs(), connectorThumbs()
* ElementEdit -> start() & end() + thumb() & connectorThumb()