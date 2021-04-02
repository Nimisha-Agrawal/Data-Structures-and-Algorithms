const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    let current = head
    let length = 1
    while(current.next){
    	current = current.next
        length ++
    }
    
    var mid_index = Math.ceil((length -1)/ 2)
    current = head
    let index = 0
    while(index < mid_index){
    	current = current.next
        index++
    }
    return current.data
};

