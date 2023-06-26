

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
        this.random = null;
    }
    }
    
    function cloneLinkedList(head) {
    if (head === null) {
        return null;
    }
    
   
    let curr = head;
    while (curr !== null) {
        const newNode = new Node(curr.data);
        newNode.next = curr.next;
        curr.next = newNode;
        curr = newNode.next;
    }
    
  
    curr = head;
    while (curr !== null) {
        if (curr.random !== null) {
        curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }
    
    
    curr = head;
    const clonedHead = head.next;
    let clonedCurr = clonedHead;
    while (clonedCurr.next !== null) {
        curr.next = curr.next.next;
        clonedCurr.next = clonedCurr.next.next;
        curr = curr.next;
        clonedCurr = clonedCurr.next;
    }
    curr.next = null;
    clonedCurr.next = null;
    
    return clonedHead;
    }
    
   
    function printList(head) {
    process.stdout.write(head.data + "(" + (head.random.data + ")"));
    head = head.next;
    while (head !== null) {
        process.stdout.write(" -> " + head.data + "(" + (head.random.data + ")"));
        head = head.next;
    }
    console.log();
    }
    
   