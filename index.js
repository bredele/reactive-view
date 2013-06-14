var reactive = require("reactive"),
    domify = require('domify');


/**
 * Expose 'Delegate Binding'
 */

module.exports = View;


/**
 * Initialize a View
 *
 * @param {Object} object optional model
 */

function View(obj) {
  this.bindings = {};
  this.obj = obj;
  this.model = null;
  this.reactive = null;
  this.el = null;
  this.template = null;
  this.isRendered = false;
}


/**
 * Create View binding
 *
 * @param {String} name binding's name
 * @param {Function} fn binding's callback
 * @api public
 */

View.prototype.bind = function(name, fn) {
  this.bindings[name] = fn;
};


/**
 * Render a view.
 * Useful to create binding before placing in DOM document.
 * 
 * @param {String} name binding's name
 * @param {Function} fn binding's callback
 * @api public
 */

View.prototype.render = function(template, model) {
  //test template and model
  this.template = template || this.template;
  this.model = model || this.model;
  //for now we can only render once
  if(this.template && !this.isRendered) {
    this.el = domify(this.template);
    this.isRendered = true;
  }
};


/**
 * Place a View in DOM document.
 *
 * @param {HTMLElement} dom HTML node
 * @param {String} location
 * @api public
 */

View.prototype.place = function(dom, location){
  //state machine?
  if(!this.isRendered) {
    this.render();
  }
  this.alive(this.el);
  dom.insertAdjacentElement(location || 'beforeend', this.el);
};


/**
 * Apply bindings.
 *
 * @api private
 */

View.prototype.applyBindings = function(){
  for(var name in this.bindings) {
    this.reactive.bind(name, this.bindings[name]);
  }
};


/**
 * Make it reactive.
 *
 * @param {HTMLElement} el optionale DOM element 
 * @api public
 */

View.prototype.alive = function(el) {
  this.reactive = reactive(el, this.model, this.obj);
  this.applyBindings();
};