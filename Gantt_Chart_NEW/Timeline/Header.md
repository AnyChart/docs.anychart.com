{:index 4}
# Header

## Overview

* {api:anychart.core.gantt.TimeLineHeader}anychart.core.gantt.TimeLineHeader{api}
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper}anychart.core.gantt.TimeLineHeader.LevelWrapper{api}
* [All Levels](#all_levels), [Individual Levels](#individual_levels)
* [Appearance](#appearance)
* [Text Format](#text_format)
* [Project Gantt](../Project_Chart)
* [Resource Gantt](../Resource_Chart)

## Levels

* [Scale](Scale)

### All Levels

* {api:anychart.core.gantt.TimeLineHeader}anychart.core.gantt.TimeLineHeader{api}
* to acces the header: {api:anychart.core.ui.Timeline#header}header(){api}
* {api:anychart.core.gantt.TimeLineHeader#enabled}enabled(){api} to enable or disable the header
* {api:anychart.core.gantt.TimeLineHeader#background}background(){api}, {api:anychart.core.gantt.TimeLineHeader#fill}fill(){api} and {api:anychart.core.gantt.TimeLineHeader#stroke}stroke(){api} to configure the [appearance](#appearance)
* {api:anychart.core.gantt.TimeLineHeader#fontColor}fontColor(){api}, {api:anychart.core.gantt.TimeLineHeader#fontWeight}fontWeight(){api},
{api:anychart.core.gantt.TimeLineHeader#fontSize}fontSize(){api}, {api:anychart.core.gantt.TimeLineHeader#fontFamily}fontFamily(){api}, etc. to configure the font [appearance](#appearance)
* {api:anychart.core.gantt.TimeLineHeader#format}format(){api} to set the [text format](#text_format)
* {api:anychart.core.gantt.TimeLineHeader#levelHeight}levelHeight(){api} and {api:anychart.core.gantt.TimeLineHeader#level}level(){api} to set the level height and configure [individual levels](#individual_levels)


```

```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_01{sample}

### Individual Levels

* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper}anychart.core.gantt.TimeLineHeader.LevelWrapper{api}
* to access a level: {api:anychart.core.gantt.TimeLineHeader#level}level(){api}
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#enabled}enabled(){api} to enable or disable a level
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#background}background(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fill}fill(){api}, and {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#stroke}stroke{api} to configure the [appearance](#appearance)
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontColor}fontColor(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontWeight}fontWeight(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontSize}fontSize(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontFamily}fontFamily(){api}, etc. to configure the font [appearance](#appearance)
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#format}format(){api} to set the [text format](#text_format)


```

```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_02{sample}

## Appearance

* [appearance settings](../../Appearance_Settings) 

**all levels**:

* {api:anychart.core.gantt.TimeLineHeader#background}background(){api}, {api:anychart.core.gantt.TimeLineHeader#fill}fill(){api} and {api:anychart.core.gantt.TimeLineHeader#stroke}stroke(){api} to set the background, fill, and stroke
* {api:anychart.core.gantt.TimeLineHeader#fontColor}fontColor(){api}, {api:anychart.core.gantt.TimeLineHeader#fontWeight}fontWeight(){api},
{api:anychart.core.gantt.TimeLineHeader#fontSize}fontSize(){api}, {api:anychart.core.gantt.TimeLineHeader#fontFamily}fontFamily(){api}, etc. to configure the font


```

```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_03{sample}

**individual levels**

* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#background}background(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fill}fill(){api}, and {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#stroke}stroke{api} to set the background, fill, and stroke
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontColor}fontColor(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontWeight}fontWeight(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontSize}fontSize(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontFamily}fontFamily(){api}, etc. to configure the font


```

```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_04{sample}

## Text Format

* [tokens](../../Common_Settings/Text_Formatters#string_tokens)
* [formatting functions](../../Common_Settings/Text_Formatters#formatting_functions)
* all levels: {api:anychart.core.gantt.TimeLineHeader}format(){api}
* individual levels: {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#format}format(){api}

### Tokens

tokens:

* `{%value}` – имя элемента
* `{%endValue}` – имя следующего элемента
* `{%tickValue}` – дата начальной точки
* `{%end}` – дата конечной точки


**all levels**:

```

```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_05{sample}

**individual levels**:

```

```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_06{sample}

### Formatting Functions

fields:

* `value` – имя элемента
* `endValue` – имя следующего элемента
* `tickValue` – дата начальной точки
* `end` – дата конечной точки

**all levels**:

```

```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_07{sample}

**individual levels**:

```

```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_08{sample}

## Height

* {api:anychart.core.gantt.TimeLineHeader#levelHeight}levelHeight(){api} 
* [Basic Settings: Header and Row Height](../Basic_Settings#header_and_row_height)