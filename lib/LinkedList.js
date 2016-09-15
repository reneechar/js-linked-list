'use strict';

var Node = require('./Node.js');

module.exports = class LinkedList extends Node{
	constructor (value) {
		super(value);
		this._head = false;
		this._tail = false;
	}
	set head(bool) {
		this._head = bool;
	}
	get head() { 
		return this._head;
	}
	set tail(bool) {
		this._tail = bool;
	}
	get tail() {
		return this._tail;
	}
	add(val) {
		this.next = new LinkedList(val);
		this.tail = false;
		this.next.tail = true;
		return this.next;
	}
	//can only be called on head
	getNode(number) {
		var pointer = this;
		var i = 0;

		while(i < number && pointer.next !== null) {
			pointer = pointer.next;
			i++
		}
		if (i === number) {
			return pointer;
		}
		return false;
	}
	//can only be called on head
	remove(number) {
		var toRemove = this.getNode(number);
		var previous = this.getNode(number - 1);
		if (toRemove === false) {
			return false;
		} else if (previous === false) {
			if (toRemove.next === null) {
				toRemove = null;
			} else {
				toRemove = null;
				toRemove.next.head = true;
			}
		} else {
			if (toRemove.next !== null) {
				previous.next = toRemove.next
			} else {
				toRemove = null;
				tail = previous;
			}
		}
	}
	//can only be called on head
	insert(val, number) {
		var insertHere = this.getNode(number);
		var previous = this.getNode(number -1);
		var newNode = new LinkedList(val);
		if (insertHere === false) {
			return false;
		} else if (previous === false) {
			new LinkedList(val)
			newNode.next = insertHere;
			newNode.head = true;
			insertHere.head = false;
		} else {
			newNode.next = insertHere;
			previous.next = newNode;
		}
	}
	nodeToString() {
		var currentNode = this;
		var stringafiedNode = '';
		while (currentNode !== undefined){
			stringafiedNode += currentNode.value;
			currentNode = currentNode.next;
		}
		return stringafiedNode;
	}
};