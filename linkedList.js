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
				tail = newNode;
			} else {
				tail.next = newNode;
				tail = newNode;
			}
			return tail;
		},

		get: function(number) {
			

		},

		remove: function(number) {
			return this.value;
		},

		insert: function(value, number) {
			return this.value;
		}
	};
};