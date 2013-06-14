
# reactive-view

  

## Installation

    $ component install bredele/reactive-view

## API

```js
var View = require('reactive-view');

var view = new Stack();

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


### Stack#bind(name, fn)

  Create a binding before (or after:TODO) rendering

### Stack#place(dom, location)

  Append/Insert your view into the DOM

### Stack#render(template, model)

  Render your template with an optional model.

### Stack#alive(dom)

  Create View from DOM.

## License

  MIT
