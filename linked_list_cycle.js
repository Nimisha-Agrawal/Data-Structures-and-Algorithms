const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    let faster = head
    let slower = head
    while(faster.next && faster.next.next){
		faster = faster.next.next
        slower = slower.next
          //console.log("slower", slower)
          //console.log("faster", faster)
        if(faster.data == slower.data && faster.next == slower.next){
          	//console.log(faster.data , slower.data)
            //console.log(faster.next, faster.next)
        	return true
        }
    }
    return false  	
};

