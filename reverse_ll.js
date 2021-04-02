const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    let current = head
    let previous = null
    let next;
    while(current){
    	next = {...current}
        current.next = previous
        previous = current
        current = next.next
    }
    head = previous
      
    return head
}

