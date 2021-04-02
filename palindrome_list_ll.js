const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
  	let current = head
    let string = []
    while(current){
      	string.push(current.data)
    	current = current.next
    }
  	if(string.join("") == string.reverse().join("")){
    	return true
    }
  	return false
};
