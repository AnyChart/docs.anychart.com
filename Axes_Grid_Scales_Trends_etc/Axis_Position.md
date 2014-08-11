# Axes Basics

              
* [Overview](#overview)
* [Column Mode](#vertical)

<a name="overview"/>
## Overview
   
Positioning depends on plot type and inversion of axes, below you will find all possible Axes Positioning and Inverting XML Settings with demonstration preview.

Though these settings are demonstrated using Bar/Column charts - they work for all other chart types.

<a name="vertical"/>
## Column Mode

<table width="700" border="1" class="dtTABLE">
<tbody><tr>
<th width="420"><b>Preview</b></th>
<th width="280"><b>JS Settings</b></th>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_01{sample}
</td>
<td>
```
chart.xAxis().ticks().enabled(false);
chart.yAxis().minorTicks().enabled(false);
chart.yAxis().ticks().enabled(false);
```

</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_02{sample}
</td>
<td>
```
chart.xAxis().ticks().enabled(false);
chart.yAxis().minorTicks().enabled(false);
chart.yAxis().ticks().enabled(false);
chart.xScale().inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_03{sample}
</td>
<td>
```
chart.xAxis().orientation('top');
chart.xAxis().ticks().enabled(false);
chart.yAxis().minorTicks().enabled(false);
chart.yAxis().ticks().enabled(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_04{sample}
</td>
<td>
```
   chart.xAxis().orientation('top');
   chart.xScale().inverted(true);
   chart.xAxis().ticks().enabled(false);
   chart.yAxis().minorTicks().enabled(false);
   chart.yAxis().ticks().enabled(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_05{sample}
</td>
<td>
```
   chart.yScale().inverted(true);
   chart.xAxis().ticks().enabled(false);
   chart.yAxis().minorTicks().enabled(false);
   chart.yAxis().ticks().enabled(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_06{sample}
</td>
<td>
```
chart.yScale().inverted(true);
chart.xScale().inverted(true);
chart.xAxis().ticks().enabled(false);
chart.yAxis().minorTicks().enabled(false);
chart.yAxis().ticks().enabled(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_07{sample}
</td>
<td>
```
chart.yScale().inverted(true);
chart.xAxis().orientation('top');
chart.xAxis().ticks().enabled(false);
chart.yAxis().minorTicks().enabled(false);
chart.yAxis().ticks().enabled(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_08{sample}
</td>
<td>
```
chart.yScale().inverted(true);
chart.xScale().inverted(true);
chart.xAxis().orientation('top');
chart.xAxis().ticks().enabled(false);
chart.yAxis().minorTicks().enabled(false);
chart.yAxis().ticks().enabled(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_09{sample}
</td>
<td>
```
chart.yAxis().orientation('right');
chart.xAxis().ticks().enabled(false);
chart.yAxis().minorTicks().enabled(false);
chart.yAxis().ticks().enabled(false);
```
</td>
</tr>
<tr>
<td><img src="img/vert_axes_pos_10.gif" width="413" height="203"></td>
<td>
<div class="xmlSpoiler" rel="9">
<div class="title clicked"><div>XML Syntax</div></div>
<div class="spoilerContent tabs ui-tabs ui-widget ui-widget-content ui-corner-all"><ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">
<li class="ui-state-default ui-corner-top ui-tabs-selected ui-state-active"><a href="#xml-code-9">XML Code</a></li>
</ul>
<div class="code-menu">
<a href="#"><img alt="Plain code" src="./img/view-plain.png" onmouseover="this.src='./img/view-plain_hover.png'" onmouseout="this.src='./img/view-plain.png'"></a> 
</div>
<div id="xml-code-9"><div class="syntaxhighlighter">
<div class="bar"></div>
<div class="lines"><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>01</code></td>
<td class="content"><code class="plain">&lt;</code><code class="keyword">axes</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>02</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">y_axis</code> <code class="color1">position</code><code class="plain">=</code><code class="string">"Opposite"</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>03</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">scale</code> <code class="color1">inverted</code><code class="plain">=</code><code class="string">"False"</code><code class="plain"> /&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>04</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;/</code><code class="keyword">y_axis</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>05</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">x_axis</code> <code class="color1">position</code><code class="plain">=</code><code class="string">"Normal"</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>06</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">scale</code> <code class="color1">inverted</code><code class="plain">=</code><code class="string">"True"</code><code class="plain"> /&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>07</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;/</code><code class="keyword">x_axis</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>08</code></td>
<td class="content"><code class="plain">&lt;/</code><code class="keyword">axes</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div></div></div></div>
<div id="xml-code-plain-9" style="display:none"><textarea spellcheck="false">&lt;axes&gt;
&lt;y_axis position="Opposite"&gt;
&lt;scale inverted="False" /&gt;
&lt;/y_axis&gt;
&lt;x_axis position="Normal"&gt;
&lt;scale inverted="True" /&gt;
&lt;/x_axis&gt;
&lt;/axes&gt;</textarea></div>
</div>
</div>
</td>
</tr>
<tr>
<td><img src="img/vert_axes_pos_11.gif" width="413" height="203"></td>
<td>
<div class="xmlSpoiler" rel="10">
<div class="title clicked"><div>XML Syntax</div></div>
<div class="spoilerContent tabs ui-tabs ui-widget ui-widget-content ui-corner-all"><ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">
<li class="ui-state-default ui-corner-top ui-tabs-selected ui-state-active"><a href="#xml-code-10">XML Code</a></li>
</ul>
<div class="code-menu">
<a href="#"><img alt="Plain code" src="./img/view-plain.png" onmouseover="this.src='./img/view-plain_hover.png'" onmouseout="this.src='./img/view-plain.png'"></a> 
</div>
<div id="xml-code-10"><div class="syntaxhighlighter">
<div class="bar"></div>
<div class="lines"><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>01</code></td>
<td class="content"><code class="plain">&lt;</code><code class="keyword">axes</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>02</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">y_axis</code> <code class="color1">position</code><code class="plain">=</code><code class="string">"Opposite"</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>03</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">scale</code> <code class="color1">inverted</code><code class="plain">=</code><code class="string">"False"</code><code class="plain"> /&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>04</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;/</code><code class="keyword">y_axis</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>05</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">x_axis</code> <code class="color1">position</code><code class="plain">=</code><code class="string">"Opposite"</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>06</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">scale</code> <code class="color1">inverted</code><code class="plain">=</code><code class="string">"False"</code><code class="plain"> /&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>07</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;/</code><code class="keyword">x_axis</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>08</code></td>
<td class="content"><code class="plain">&lt;/</code><code class="keyword">axes</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div></div></div></div>
<div id="xml-code-plain-10" style="display:none"><textarea spellcheck="false">&lt;axes&gt;
&lt;y_axis position="Opposite"&gt;
&lt;scale inverted="False" /&gt;
&lt;/y_axis&gt;
&lt;x_axis position="Opposite"&gt;
&lt;scale inverted="False" /&gt;
&lt;/x_axis&gt;
&lt;/axes&gt;</textarea></div>
</div>
</div>
</td>
</tr>
<tr>
<td><img src="img/vert_axes_pos_12.gif" width="413" height="203"></td>
<td>
<div class="xmlSpoiler" rel="11">
<div class="title clicked"><div>XML Syntax</div></div>
<div class="spoilerContent tabs ui-tabs ui-widget ui-widget-content ui-corner-all"><ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">
<li class="ui-state-default ui-corner-top ui-tabs-selected ui-state-active"><a href="#xml-code-11">XML Code</a></li>
</ul>
<div class="code-menu">
<a href="#"><img alt="Plain code" src="./img/view-plain.png" onmouseover="this.src='./img/view-plain_hover.png'" onmouseout="this.src='./img/view-plain.png'"></a> 
</div>
<div id="xml-code-11"><div class="syntaxhighlighter">
<div class="bar"></div>
<div class="lines"><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>01</code></td>
<td class="content"><code class="plain">&lt;</code><code class="keyword">axes</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>02</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">y_axis</code> <code class="color1">position</code><code class="plain">=</code><code class="string">"Opposite"</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>03</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">scale</code> <code class="color1">inverted</code><code class="plain">=</code><code class="string">"False"</code><code class="plain"> /&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>04</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;/</code><code class="keyword">y_axis</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>05</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">x_axis</code> <code class="color1">position</code><code class="plain">=</code><code class="string">"Opposite"</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>06</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">scale</code> <code class="color1">inverted</code><code class="plain">=</code><code class="string">"True"</code><code class="plain"> /&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>07</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;/</code><code class="keyword">x_axis</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>08</code></td>
<td class="content"><code class="plain">&lt;/</code><code class="keyword">axes</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div></div></div></div>
<div id="xml-code-plain-11" style="display:none"><textarea spellcheck="false">&lt;axes&gt;
&lt;y_axis position="Opposite"&gt;
&lt;scale inverted="False" /&gt;
&lt;/y_axis&gt;
&lt;x_axis position="Opposite"&gt;
&lt;scale inverted="True" /&gt;
&lt;/x_axis&gt;
&lt;/axes&gt;</textarea></div>
</div>
</div>
</td>
</tr>
<tr>
<td><img src="img/vert_axes_pos_13.gif" width="413" height="203"></td>
<td>
<div class="xmlSpoiler" rel="12">
<div class="title clicked"><div>XML Syntax</div></div>
<div class="spoilerContent tabs ui-tabs ui-widget ui-widget-content ui-corner-all"><ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">
<li class="ui-state-default ui-corner-top ui-tabs-selected ui-state-active"><a href="#xml-code-12">XML Code</a></li>
</ul>
<div class="code-menu">
<a href="#"><img alt="Plain code" src="./img/view-plain.png" onmouseover="this.src='./img/view-plain_hover.png'" onmouseout="this.src='./img/view-plain.png'"></a> 
</div>
<div id="xml-code-12"><div class="syntaxhighlighter">
<div class="bar"></div>
<div class="lines"><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>01</code></td>
<td class="content"><code class="plain">&lt;</code><code class="keyword">axes</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>02</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">y_axis</code> <code class="color1">position</code><code class="plain">=</code><code class="string">"Opposite"</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>03</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">scale</code> <code class="color1">inverted</code><code class="plain">=</code><code class="string">"True"</code><code class="plain"> /&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>04</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;/</code><code class="keyword">y_axis</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>05</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">x_axis</code> <code class="color1">position</code><code class="plain">=</code><code class="string">"Normal"</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>06</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">scale</code> <code class="color1">inverted</code><code class="plain">=</code><code class="string">"False"</code><code class="plain"> /&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>07</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;/</code><code class="keyword">x_axis</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>08</code></td>
<td class="content"><code class="plain">&lt;/</code><code class="keyword">axes</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div></div></div></div>
<div id="xml-code-plain-12" style="display:none"><textarea spellcheck="false">&lt;axes&gt;
&lt;y_axis position="Opposite"&gt;
&lt;scale inverted="True" /&gt;
&lt;/y_axis&gt;
&lt;x_axis position="Normal"&gt;
&lt;scale inverted="False" /&gt;
&lt;/x_axis&gt;
&lt;/axes&gt;</textarea></div>
</div>
</div>
</td>
</tr>
<tr>
<td><img src="img/vert_axes_pos_14.gif" width="413" height="203"></td>
<td>
<div class="xmlSpoiler" rel="13">
<div class="title clicked"><div>XML Syntax</div></div>
<div class="spoilerContent tabs ui-tabs ui-widget ui-widget-content ui-corner-all"><ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">
<li class="ui-state-default ui-corner-top ui-tabs-selected ui-state-active"><a href="#xml-code-13">XML Code</a></li>
</ul>
<div class="code-menu">
<a href="#"><img alt="Plain code" src="./img/view-plain.png" onmouseover="this.src='./img/view-plain_hover.png'" onmouseout="this.src='./img/view-plain.png'"></a> 
</div>
<div id="xml-code-13"><div class="syntaxhighlighter">
<div class="bar"></div>
<div class="lines"><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>01</code></td>
<td class="content"><code class="plain">&lt;</code><code class="keyword">axes</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>02</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">y_axis</code> <code class="color1">position</code><code class="plain">=</code><code class="string">"Opposite"</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>03</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">scale</code> <code class="color1">inverted</code><code class="plain">=</code><code class="string">"True"</code><code class="plain"> /&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>04</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;/</code><code class="keyword">y_axis</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>05</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">x_axis</code> <code class="color1">position</code><code class="plain">=</code><code class="string">"Normal"</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>06</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">scale</code> <code class="color1">inverted</code><code class="plain">=</code><code class="string">"True"</code><code class="plain"> /&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>07</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;/</code><code class="keyword">x_axis</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>08</code></td>
<td class="content"><code class="plain">&lt;/</code><code class="keyword">axes</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div></div></div></div>
<div id="xml-code-plain-13" style="display:none"><textarea spellcheck="false">&lt;axes&gt;
&lt;y_axis position="Opposite"&gt;
&lt;scale inverted="True" /&gt;
&lt;/y_axis&gt;
&lt;x_axis position="Normal"&gt;
&lt;scale inverted="True" /&gt;
&lt;/x_axis&gt;
&lt;/axes&gt;</textarea></div>
</div>
</div>
</td>
</tr>
<tr>
<td><img src="img/vert_axes_pos_15.gif" width="413" height="203"></td>
<td>
<div class="xmlSpoiler" rel="14">
<div class="title clicked"><div>XML Syntax</div></div>
<div class="spoilerContent tabs ui-tabs ui-widget ui-widget-content ui-corner-all"><ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">
<li class="ui-state-default ui-corner-top ui-tabs-selected ui-state-active"><a href="#xml-code-14">XML Code</a></li>
</ul>
<div class="code-menu">
<a href="#"><img alt="Plain code" src="./img/view-plain.png" onmouseover="this.src='./img/view-plain_hover.png'" onmouseout="this.src='./img/view-plain.png'"></a> 
</div>
<div id="xml-code-14"><div class="syntaxhighlighter">
<div class="bar"></div>
<div class="lines"><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>01</code></td>
<td class="content"><code class="plain">&lt;</code><code class="keyword">axes</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>02</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">y_axis</code> <code class="color1">position</code><code class="plain">=</code><code class="string">"Opposite"</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>03</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">scale</code> <code class="color1">inverted</code><code class="plain">=</code><code class="string">"True"</code><code class="plain"> /&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>04</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;/</code><code class="keyword">y_axis</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>05</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">x_axis</code> <code class="color1">position</code><code class="plain">=</code><code class="string">"Opposite"</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>06</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">scale</code> <code class="color1">inverted</code><code class="plain">=</code><code class="string">"False"</code><code class="plain"> /&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>07</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;/</code><code class="keyword">x_axis</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>08</code></td>
<td class="content"><code class="plain">&lt;/</code><code class="keyword">axes</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div></div></div></div>
<div id="xml-code-plain-14" style="display:none"><textarea spellcheck="false">&lt;axes&gt;
&lt;y_axis position="Opposite"&gt;
&lt;scale inverted="True" /&gt;
&lt;/y_axis&gt;
&lt;x_axis position="Opposite"&gt;
&lt;scale inverted="False" /&gt;
&lt;/x_axis&gt;
&lt;/axes&gt;</textarea></div>
</div>
</div>
</td>
</tr>
<tr>
<td><img src="img/vert_axes_pos_16.gif" width="413" height="203"></td>
<td>
<div class="xmlSpoiler" rel="15">
<div class="title clicked"><div>XML Syntax</div></div>
<div class="spoilerContent tabs ui-tabs ui-widget ui-widget-content ui-corner-all"><ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">
<li class="ui-state-default ui-corner-top ui-tabs-selected ui-state-active"><a href="#xml-code-15">XML Code</a></li>
</ul>
<div class="code-menu">
<a href="#"><img alt="Plain code" src="./img/view-plain.png" onmouseover="this.src='./img/view-plain_hover.png'" onmouseout="this.src='./img/view-plain.png'"></a> 
</div>
<div id="xml-code-15"><div class="syntaxhighlighter">
<div class="bar"></div>
<div class="lines"><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>01</code></td>
<td class="content"><code class="plain">&lt;</code><code class="keyword">axes</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>02</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">y_axis</code> <code class="color1">position</code><code class="plain">=</code><code class="string">"Opposite"</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>03</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">scale</code> <code class="color1">inverted</code><code class="plain">=</code><code class="string">"True"</code><code class="plain"> /&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>04</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;/</code><code class="keyword">y_axis</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>05</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">x_axis</code> <code class="color1">position</code><code class="plain">=</code><code class="string">"Opposite"</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>06</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">&lt;</code><code class="keyword">scale</code> <code class="color1">inverted</code><code class="plain">=</code><code class="string">"True"</code><code class="plain"> /&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt2">
<table>
<tbody><tr>
<td class="number"><code>07</code></td>
<td class="content"><code class="spaces">&nbsp;&nbsp;</code><code class="plain">&lt;/</code><code class="keyword">x_axis</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div><div class="line alt1">
<table>
<tbody><tr>
<td class="number"><code>08</code></td>
<td class="content"><code class="plain">&lt;/</code><code class="keyword">axes</code><code class="plain">&gt;</code></td>
</tr>
</tbody></table></div></div></div></div>
<div id="xml-code-plain-15" style="display:none"><textarea spellcheck="false">&lt;axes&gt;
&lt;y_axis position="Opposite"&gt;
&lt;scale inverted="True" /&gt;
&lt;/y_axis&gt;
&lt;x_axis position="Opposite"&gt;
&lt;scale inverted="True" /&gt;
&lt;/x_axis&gt;
&lt;/axes&gt;</textarea></div>
</div>
</div>
</td>
</tr>
</tbody>
</table>