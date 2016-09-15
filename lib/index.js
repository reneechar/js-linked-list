var LinkedList = require('./LinkedList.js');

//create the first node. set the head and tail to the first node.
var theList = new LinkedList('Time to start the party');

//add() - create another node and set pointer of tail node to new node
theList.add('Just joining the party');
theList.add('This party is bumpin');

theList.add('Really tired now');
theList.add('I should have left 2 hours ago');

console.log('the list is this: ',theList.nodeToString());
//remove(2)

//console.log('get the node at pos3',theList.getNode(3));
theList.remove(2);
console.log('removed the node at pos2');
console.log('new linked list has this ',theList.nodeToString());
theList.insert('Where is the DJ?', 2);
console.log('inserted a newNode at pos2');
console.log('new linked list is ',theList.nodeToString());
