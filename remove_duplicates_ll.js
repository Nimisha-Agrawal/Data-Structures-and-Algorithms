const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

var deleteDuplicates = function(head) {
    let current = head
    let next;
  
  	while(current && current.next){
      	next = current.next
    	while(next && current.data == next.data){
        	current.next = next.next
            next = next.next
        }
      	current = current.next
    }
  	return head
};

