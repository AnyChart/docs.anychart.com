{:index 4}
# Header

misc:

* {api:anychart.core.gantt.TimeLineHeader}anychart.core.gantt.TimeLineHeader{api}
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper}anychart.core.gantt.TimeLineHeader.LevelWrapper{api}
* [Scale](Scale)
* [Basic Settings: Header and Row Height](../Basic_Settings#header_and_row_height)
* [tokens](../../Common_Settings/Text_Formatters#string_tokens), [formatting functions](../../Common_Settings/Text_Formatters#formatting_functions)
* [Project Gantt](../Project_Chart)
* [Resource Gantt](../Resource_Chart)

methods:

* header: {api:anychart.core.ui.Timeline#header}header(){api}
* {api:anychart.core.gantt.TimeLineHeader#enabled}enabled(){api} + `true` / `false`
* {api:anychart.core.gantt.TimeLineHeader#fill}fill(){api} and {api:anychart.core.gantt.TimeLineHeader#stroke}stroke(){api}
* {api:anychart.core.gantt.TimeLineHeader#fontColor}fontColor(){api}, {api:anychart.core.gantt.TimeLineHeader#fontFamily}fontFamily(){api}, {api:anychart.core.gantt.TimeLineHeader#fontSize}fontSize(){api}, {api:anychart.core.gantt.TimeLineHeader#fontWeight}fontWeight(){api}, and other font settings
* {api:anychart.core.gantt.TimeLineHeader#format}format(){api}
* {api:anychart.core.gantt.TimeLineHeader#level}level(){api} and {api:anychart.core.gantt.TimeLineHeader#levelHeight}levelHeight(){api} 

methods (levels):

* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#enabled}enabled(){api} + `true` / `false`
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fill}fill(){api} and {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#stroke}stroke{api}
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontColor}fontColor(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontFamily}fontFamily(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontSize}fontSize(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontWeight}fontWeight(){api}, and other font settings
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#format}format(){api}

tokens:

* ``
* ``
* ``
* ``

fields:

* ``
* ``
* ``
* ``


```
// configure the timeline header
var header = chart.getTimeline().header();
header.fill("#64b5f6 0.2");
header.stroke("#64b5f6");
header.fontColor("#64b5f6");
header.fontWeight(600);
header.format(function() {
  if (this.value == "March") {
    return "(!) " + this.value;
  } else {
    return this.value;
  }
});
```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_01{sample}

```
// configure the first level of the timeline header
var header = chart.getTimeline().header();
header.level(0).fill("#64b5f6 0.2");
header.level(0).stroke("#64b5f6");
header.level(0).fontColor("#64b5f6");
header.level(0).fontWeight(600);
header.level(0).format(function() {
  if (this.value == "March") {
    return "(!) " + this.value;
  } else {
    return this.value;
  }
});
 ```

{sample :height 220}GANTT\_NEW\_Timeline\_Header\_02{sample}