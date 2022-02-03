// const counter = function (counterValue = 0) {
//     this._value = counterValue;
//     this._step = 1;
//     this._refs = this._getRefs();
//     this._bindEvents;
//     this._updateSpanValue;
// }
// counter.prototype._getRefs = function () { 
//     const refs = {};
//     refs.container = document.querySelector('#counter');
//     refs.decrementButton = refs.container.querySelector('[data-action="decrement"]');
//     refs.value = refs.container.querySelector('#value');
//     refs.incrementButton = refs.container.querySelector('[data-action="increment"]');
//     return refs;
// };
// counter.prototype._bindEvents = function () { 
//     this._refs.incrementButton.addEventListener('click', () => {
//         this.increment();
//         this._updateSpanValue();
//     })
//     this._refs.decrementButton.addEventListener('click', () => {
//         this.decrement();
//         this._updateSpanValue();
//     })
// };
// counter.prototype._updateSpanValue = function () { 
//     this._refs.value.textContent = this._value;
// };
// counter.prototype.increment = function () { 
//     this._value += this._step;
// };
// counter.prototype.decrement = function () { 
//     this._value -= this._step;
// };
// new counter(0);

const CounterPlugin = function (counterValue = 0) {
  this._counterValue = counterValue;
  this._step = 1;
  this._refs = this._getRefs();
  this._bindEvents();
  this.updateValueUI();
};

CounterPlugin.prototype._getRefs = function () {
  const refs = {};
  refs.container = document.querySelector('#counter');
  refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
  refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
  refs.counterValue = refs.container.querySelector('#value');

  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    this.increment();
    this.updateValueUI();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    this.decrement();
    this.updateValueUI();
  });
};

CounterPlugin.prototype.updateValueUI = function () {
  this._refs.counterValue.textContent = this._counterValue;
};

CounterPlugin.prototype.increment = function () {
  this._counterValue += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._counterValue -= this._step;
};

new CounterPlugin(15);

/*
const btnDec = document.querySelector('[data-action="increment"]');
const btnInc = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');
console.log(value);
let counterValue = 0;
const mouseClickDec = event => {
  value.textContent = counterValue -=1;  
};
const mouseClickInc = event => {
  value.textContent = counterValue +=1;  
};
btnDec.addEventListener('click', mouseClickDec);
btnInc.addEventListener('click', mouseClickInc);
*/