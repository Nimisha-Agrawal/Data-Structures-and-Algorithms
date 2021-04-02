const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
   if(position == 0 && head.next == null){
   		return null
   }
   else if(position == 0){
   		head = head.next
        return head
   }
   let current = head
   let count = 0
   while(count < position - 1){
   		count++
        current = current.next
   }
  current.next = current.next.next
  
  return head
}

