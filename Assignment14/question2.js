class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function addOne(head) {
    
    let curr = reverseLinkedList(head);
  
  
    let carry = 1;
    let prev = null;
  
    while (curr !== null) {
      const sum = curr.val + carry;
      carry = Math.floor(sum / 10);
      curr.val = sum % 10;
      prev = curr;
      curr = curr.next;
    }
  
   
    if (carry > 0) {
      prev.next = new ListNode(carry);
    }
  

    return reverseLinkedList(head);
  }
  
  function reverseLinkedList(head) {
    let prev = null;
    let curr = head;
    let next = null;
  
    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  
    return prev;
  }
  

  const values = [4, 5, 6];
  
  const head = new ListNode(values[0]);
  let currentNode = head;
  
  for (let i = 1; i < values.length; i++) {
    const newNode = new ListNode(values[i]);
    currentNode.next = newNode;
    currentNode = newNode;
  }
  
 
  const result = addOne(head);
  
 
  let number = 0;
  let node = result;
  
  while (node !== null) {
    number = number * 10 + node.val;
    node = node.next;
  }
  
  console.log(number); 
  