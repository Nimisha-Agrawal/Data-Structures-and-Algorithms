const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position){ 
  	if(position == 0){
    	const to_insert = new LinkedListNode(data)
       	to_insert.next = head
        head = to_insert
        return head
    }
    let count = 1
    let current = head
    while(count < position){
    	count++
        current = current.next
	}
    const to_insert = new LinkedListNode(data)
    to_insert.next = current.next
    current.next = to_insert
    
    current = head
    let result = ""
    while(current){
    	result += `${current.data} `
    	current = current.next
    }
    
    return head
}

