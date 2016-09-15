'use strict';

module.exports = class Node {
	constructor (value) {
		this._value = value;
		this._next = null;
	}
	get value() {
		return this._value;
	}
	set value(val) {
		this._value = val;
	}
	get next() {
		return this._next;
	}
	set next(nextNode) {
		this._next = nextNode;
	}
};
