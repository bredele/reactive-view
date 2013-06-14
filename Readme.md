
# reactive-view

  

## Installation

    $ component install bredele/reactive-view

## API

```js
var View = require('reactive-view');

var view = new View();

//you can add bindings before rendering your view
stack.bind('do', function(){
  //do something
});

view.render("<span data-text='name < firstname lastname'></span>", {
  firstname : "Katty",
  lastname : "Perry"
})

//reactive your view and place into the DOM
stack.place(document.querySelector('#anchor'), "beforebegin")
```


### View#bind(name, fn)

  Create a binding before (or after:TODO) rendering

### View#place(dom, location)

  Append/Insert your view into the DOM

### View#render(template, model)

  Render your template with an optional model.

### View#alive(dom)

  Create View from DOM.

## License

  MIT
