'use strict';

var Node = require('./Node.js');

module.exports = class LinkedList extends Node{
	constructor (value) {
		super(value);
		this._head = this;
		this._tail = this;
	}
	set head(headNode) {
		this._head = headNode;
	}
	get head() { 
		return this._head;
	}
	set tail(headNode) {
		this._tail = headNode;
	}
	get tail() {
		return this._tail;
	}
	add(val) {
		if (this.head === null) {
			this.head = new LinkedList(val);
			this.tail = this._head;
			return this
		} else {
			this.tail.next = new LinkedList(val);
			this.tail = this.tail.next;
		}
	}
	getNode(number) {
		var pointer = this;
		var i = 0;

		while(i < number && pointer.next !== null) {
			pointer = pointer.next;
			i++;
		}
		if (i === number) {
			return pointer;
		}
		return false;
	}
	remove(number) {
		var toRemove = this.getNode(number);
		var previous = this.getNode(number - 1);
		if (toRemove === false) {
			return false;
		} else if (previous === false) {
			if (toRemove.next === null) {
				this.head = null;
				this.tail = null;
			} else {
				if(toRemove.next.next) {
					this.head = toRemove.next;
					toRemove = null;
				} else {
					this.head = toRemove.next;
					this.tail = toRemove.next;
					toRemove = null;
				}
			}
		} else {
			if (toRemove.next !== null) {
				previous.next = toRemove.next
			} else {
				toRemove = null;
				this.tail = previous;
			}
		}
	}
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
		var currentNode = this.head;
		var stringafiedNode = '';
		while (currentNode){
			stringafiedNode += currentNode.value + ' next: ';
			currentNode = currentNode.next;
		}
		stringafiedNode += 'null';
		return stringafiedNode;
	}
};