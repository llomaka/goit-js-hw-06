const counter = function (counterValue = 0) {
    this._value = counterValue;
    this._step = 1;
    this._refs = this._getRefs();
}

counter.prototype._getRefs = function () { 
    const refs = {};
    refs.container = document.querySelector('#counter');
    refs.decrementButton = refs.container.querySelector('[data-action="decrement"]');
    refs.value = refs.container.querySelector('#value');
    refs.incrementButton = refs.container.querySelector('[data-action="increment"]');
    return refs;
};

counter.prototype._bindEvents = function () { 
    this._refs.incrementButton.addEventListener('click', () => {
        this.increment();
        this._updateSpanValue();
    })
    this._refs.decrementButton.addEventListener('click', () => {
        this.decrement();
        this._updateSpanValue();
    })
};

counter.prototype._updateSpanValue = function () { 
    this._refs.value.textContent = this._value;
};

counter.prototype.increment = function () { 
    this._value += this._step;
};

counter.prototype.decrement = function () { 
    this._value -= this._step;
};

new counter();
