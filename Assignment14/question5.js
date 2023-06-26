
var oddEvenList = function(head) {
    if (!head || !head.next) {
      
      return head;
    }
    
    var odd = head;
    var even = head.next;
    var evenHead = even;
    
    while (even && even.next) {
      
      odd.next = even.next;
      odd = odd.next;
      
    
      even.next = odd.next;
      even = even.next;
    }
    
    
    odd.next = evenHead;
    
    return head;
  };
  