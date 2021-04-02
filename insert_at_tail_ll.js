const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
	const to_insert = new LinkedListNode(data)
    if(!head){
    	head = to_insert
        return head
    }
   	
    let current = head
    while(current.next){
    	current = current.next
    }
    current.next = to_insert
    return head
    
}

