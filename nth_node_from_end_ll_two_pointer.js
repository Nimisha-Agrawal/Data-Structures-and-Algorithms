const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    let current = head
    let backup = head
    let i = 1
    while(current.next){
      	current = current.next
        if(i >= n){
        	backup = backup.next
        }
    	i++
    }
  	return backup.data
}
