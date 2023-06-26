class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function removeLoop(head) {
    let slowPtr = head;
    let fastPtr = head;
  

    while (fastPtr !== null && fastPtr.next !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
      if (slowPtr === fastPtr) {
        break;
      }
    }
  

    if (fastPtr === null || fastPtr.next === null) {
      return head;
    }
  

    slowPtr = head;
    while (slowPtr.next !== fastPtr.next) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next;
    }
  

    fastPtr.next = null;
  
    return head;
  }
  

  const N = 3;
  const values = [1, 3, 4];
  const X = 2;
  
  const head = new ListNode(values[0]);
  let currentNode = head;
  let loopNode = null;
  
  for (let i = 1; i < N; i++) {
    const newNode = new ListNode(values[i]);
    currentNode.next = newNode;
    currentNode = newNode;
  
    if (i === X - 1) {
      loopNode = newNode;
    }
  }
  
 
  currentNode.next = loopNode;
  

  const result = removeLoop(head);
  

  let node = result;
  let output = '';
  while (node !== null) {
    output += node.val + ' -> ';
    node = node.next;
  }
  
  console.log(output + 'null');
  
  