class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
  
    function removeDuplicates(head) {
    
       var to_free;
 
    
        if (head == null)
            return null;
 
        if (head.next != null) {
 
           
            if (head.data == head.next.data) {
              
                to_free = head.next;
                head.next = head.next.next;
                removeDuplicates(head);
            }
 
           
            else {
                removeDuplicates(head.next);
            }
        }
        return head;
    }
 
 
    function push(head_ref , new_data) {
       
var new_node = new Node();
 
       
        new_node.data = new_data;
 
        
        new_node.next = (head_ref);
 
        
        (head_ref) = new_node;
        return head_ref;
    }
 
    function printList(node) {
        while (node != null) {
            document.write(" " + node.data);
            node = node.next;
        }
    }