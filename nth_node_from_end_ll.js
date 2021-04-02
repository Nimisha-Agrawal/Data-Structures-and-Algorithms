const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
	let current = head
    let length = 1
    while(current.next){
    	length ++
    	current = current.next
    }
    const nth_from_start = length - n
    current = head
    let index = 0
    while(index < nth_from_start){
    	index++
        current = current.next
    }
    return current.data
    
}
