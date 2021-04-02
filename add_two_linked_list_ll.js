const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below
// Time Complexity => O(Max(m, n))
// Space Complexity => O(Max(m, n))
var addTwoNumbers = function (l1, l2) {
    let current_l1 = l1
    let current_l2 = l2
    let l1_array = []
    let l2_array = []
    while(current_l1){
    	l1_array.push(current_l1.val)
        current_l1 = current_l1.next
    }
  	while(current_l2){
    	l2_array.push(current_l2.val)
        current_l2 = current_l2.next
    }
	let string1 = BigInt(l1_array.reverse().join(""))
    let string2 = BigInt(l2_array.reverse().join(""))
	//console.log(string1, string2)
    let answer = (string1 + string2).toString()
	//console.log(answer)
    let head = new ListNode(Number(answer[answer.length - 1]))
    let current = head
    for(var i = answer.length - 2; i >= 0; i--){
      	let node = new ListNode(Number(answer[i]))
    	current.next = node
        current = current.next
    }
  
  	return head
};

