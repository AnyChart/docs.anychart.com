{:index 2}
# Configuration API

All methods and class editor works with can be found in the {api:anychart.editor}anychart.editor{api} namespace.

## Create

To create an instance of [AnyChart Chart Editor](Overview) use the {api:anychart#editor}anychart.editor(){api} method, it creates an instance of the {api:anychart.editor.Editor}anychart.editor.Editor{api} class:

```
// create a chart editor
var editor = anychart.editor();
```

## Render

The basic way to render a chart editor is the {api:anychart.editor.Editor#render}render(){api} method:

```
// create a chart editor
var editor = anychart.editor();
// render into some div or other element
editor.render(document.getElementById('editor-container'));
```

You can also use {api:anychart.editor.Editor#decorate}decorate(){api} if it is required.

### Modal

If you wish to render a chart editor as a modal window use the {api:anychart.editor.Editor#dialogRender}dialogRender(){api} method along with the {api:anychart.editor.Editor#dialogVisible}dialogVisible(){api} method:

```
var editor = anychart.editor();
 
// Set the class name for the dialog element.
editor.dialogRender('custom-editor-dialog');
// display modal chart editor
editor.dialogVisible(true);
```

## Show and Hide

Use the {api:anychart.editor.Editor#show}show(){api} method and the {api:anychart.editor.Editor#hide}hide(){api} method to show or hide a chart editor.

## Steps

Chart editor have several steps identified by their names defined by {api:anychart.enums.EditorSteps}anychart.enums.EditorSteps{api} enum. You can disable any step if you don't want to see it:

```
var editor = anychart.editor();
 
// Get a step by the 'export' name.
var step = editor.step('export');
// disable a step
step.enabled(false);
```

### Tabs

Steps contain tabs which are identified by their named defined by {api:anychart.enums.EditorTabs}anychart.enums.EditorTabs{api} enum. Tabs within steps can also be disabled:

```
var editor = anychart.editor();
var step = editor.step('chart');
 
// Disable the 'legend' tab in the step with 'chart' name.
step.tab('legend', false);
```