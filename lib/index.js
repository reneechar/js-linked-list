var LinkedList = require('./LinkedList.js');

//create the first node. set the head and tail to the first node.
var top = new LinkedList('Time to start the party');
top.head = true;
top.tail = true;

//add() - create another node and set pointer of tail node to new node
var pos1 = top.add('Just joining the party');
var pos2 = pos1.add('This party is bumpin');

var pos3 = pos2.add('Really tired now');
var bottom = pos3.add('I should have left 2 hours ago');

//console.log('top ',top,'pos1 ',pos1,'pos2 ',pos2,'pos3 ',pos3,'bottom',bottom);
//remove(2)

console.log('get the node at pos3',top.getNode(3));
console.log('remove the node at pos2',top.remove(2));
console.log('new linked list has this ',top.nodeToString());
console.log('insert a newNode at pos2',top.insert('Where is the DJ?', 2));
console.log('new linked list has ',top.nodeToString());