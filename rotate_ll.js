const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
    let count = 0
    while(count < k){
    	let current = head
        let prev;
        while(current.next){
        	prev = current
        	current = current.next
        }
        current.next = head
        head = current
        prev.next = null
    	count++
    }
    return head
};

