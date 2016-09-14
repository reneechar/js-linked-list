/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
	var head = null;
	var tail = null;

	return {
		getHead: function() {
			return head;
		},
		
		getTail: function () {
			return tail;
		},
	
		add: function(Value) {
			var newNode = {value: Value, next: null};
			if (head === null) {
				head= newNode;
			} else {
				tail.next = newNode;
			}
			tail = newNode;

			return tail;
		},

		get: function(number) {
			var pointer = head;
			var i = 0;

			while(i < number && pointer.next !== null) {
				pointer = pointer.next;
				i++;
			}
			if (i === number) {
				return pointer;
			}
			return false;
		},

		remove: function(number) {
			var toRemove = this.get(number);
			var previous = this.get(number - 1);
			if (toRemove === false) {
				return false;
			} else if (previous === false) {
				if (toRemove.next === null) {
					head = null;
					tail = null;
				} else {
					head = toRemove.next;
				}
			} else {
				if (toRemove.next !== null) {
					previous.next = toRemove.next
				} else {
					previous.next = null;
					tail = previous;
				}
			}

		},

		insert: function(Value, number) {
			var insertHere = this.get(number);
			var previous = this.get(number -1);
			var newNode = {value: Value, next: null};
			if (insertHere === false) {
				return false;
			} else if (previous === false) {
				newNode.next = insertHere;
				head = newNode;
			} else if (head === null) {
				add(Value);
			} else {
				newNode.next = insertHere;
				previous.next = newNode;
			}
		}
	};
};