const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
	let current1 = l1
    let current2 = l2
    let sorted_ll = new ListNode(0)
    let temp = sorted_ll
    while(current1 && current2 ){
    	if(current1.val <= current2.val){
        	temp.next = current1
            temp = temp.next
            current1 = current1.next
        }
        else{
        	temp.next = current2
            temp = temp.next
            current2 = current2.next
        }
    }
    
	while(current1){
    	temp.next = current1
        temp = temp.next
        current1 = current1.next
    }
    
    while(current2){
    	temp.next = current2
        temp = temp.next
        current2 = current2.next
    }
    
    sorted_ll = sorted_ll.next
	return sorted_ll
};

