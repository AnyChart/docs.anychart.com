{:index 2}
# Configuration API

All methods and classes [AnyChart Chart Editor](Overview) works with can be found in the {api:anychart.editor}anychart.editor{api} namespace.

## Create

To create a chart editor, which is defined as an instance of the {api:anychart.editor.Editor}anychart.editor.Editor{api} class, use the {api:anychart#editor}anychart.editor(){api} method:

```
// create a chart editor
var editor = anychart.editor();
```

## Render

A basic way to render a chart editor is the {api:anychart.editor.Editor#render}render(){api} method:

```
// create a chart editor
var editor = anychart.editor();

// render the chart editor in a div or other element
editor.render(document.getElementById("editor-container"));
```

You can also use {api:anychart.editor.Editor#decorate}decorate(){api} if it is required.

### Modal

If you wish to render a chart editor as a modal window, use the {api:anychart.editor.Editor#dialogRender}dialogRender(){api} method along with the {api:anychart.editor.Editor#dialogVisible}dialogVisible(){api} method:

```
// create a chart editor
var editor = anychart.editor();
 
// set a class name for the dialog element.
editor.dialogRender("custom-editor-dialog");
// display the modal chart editor
editor.dialogVisible(true);
```

## Show and Hide

Use the {api:anychart.editor.Editor#show}show(){api} method and the {api:anychart.editor.Editor#hide}hide(){api} method to show or hide the chart editor.

## Steps

Chart Editor has several steps identified by their names. The names of the steps are listed in the {api:anychart.enums.EditorSteps}anychart.enums.EditorSteps{api} enum. You can disable any step if you don't want to see it:

```
var editor = anychart.editor();
 
// get a step by the "export" name.
var step = editor.step("export");
// disable the step
step.enabled(false);
```

### Tabs

Steps contain tabs which are identified by their names. The names of the tabs are listed in the {api:anychart.enums.EditorTabs}anychart.enums.EditorTabs{api} enum. Tabs within steps can also be disabled:

```
var editor = anychart.editor();
var step = editor.step('chart');
 
// Disable the 'legend' tab in the step with 'chart' name.
step.tab('legend', false);
```
