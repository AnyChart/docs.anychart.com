{:index 8}
# Basic Settings

## Overview

## Appearance

* [appearance settings](../Appearance_Settings)
* [states](../Common_Settings/Interactivity/States): **normal** and **selected**

### Background

* background()

{sample :height 220}GANTT\_NEW\_Basic\_Settings\_01{sample}

### Rows and Columns

* rowHoverFill()
* rowSelectedFill()
* rowStroke()
* columnStroke()

{sample :height 220}GANTT\_NEW\_Basic\_Settings\_02{sample}

### Data Grid
### Timeline
### Elements
### Custom Drawing

## Title

* title()

{sample :height 255}GANTT\_NEW\_Basic\_Settings\_03{sample}

## Header and Row Height

* headerHeight()
* defaultRowHeight() + (?) примеч про индивид таск: поле rowHeight - примера не надо

{sample :height 360}GANTT\_NEW\_Basic\_Settings\_04{sample}

## Splitter

* splitterPosition()
* the width of the timeline automatically adjusts to the area outlined by the splitter

{sample :height 220}GANTT\_NEW\_Basic\_Settings\_05{sample}

## Navigation

* методы в этом разделе работают только после рисования чарта
* [Columns: Buttons](Data_Grid/Columns#buttons)
* [Buttons](Data_Grid/Buttons) 

### Expand / Collapse

* collapseAll(), collapseTask(), expandAll(), expandTask() – на маилстоуны не действует
* `collapsed`

{sample :height 320}GANTT\_NEW\_Basic\_Settings\_06{sample}

{sample :height 280}GANTT\_NEW\_Basic\_Settings\_07{sample}

### Fit to Width

* fitAll(), fitToTask() – первое у всех, второе только у Project
* что fitToTask() не работает на маилстоунах, никак не комментировать

{sample :height 260}GANTT\_NEW\_Basic\_Settings\_08{sample}

### Zoom

* zoomIn(), zoomOut(), zoomTo()

{sample :height 260}GANTT\_NEW\_Basic\_Settings\_09{sample}

### Scroll

* scrollTo(), scrollToEnd(), scrollToRow()
* scrollTo() упомянуть, но не описыват

{sample :height 175}GANTT\_NEW\_Basic\_Settings\_10{sample}