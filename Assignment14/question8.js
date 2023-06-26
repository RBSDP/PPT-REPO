
var removeZeroSumSublists = function(head) {
    var dummy = new ListNode(0); 
    dummy.next = head;
    
    var prefixSum = 0;
    var sumMap = new Map();
    sumMap.set(0, dummy); 
    
    while (head) {
      prefixSum += head.val;
      
      if (sumMap.has(prefixSum)) {
        var prev = sumMap.get(prefixSum).next;
        var tempSum = prefixSum + prev.val;
        
        while (prev !== head) {
          sumMap.delete(tempSum); 
          prev = prev.next;
          tempSum += prev.val;
        }
        
        sumMap.get(prefixSum).next = head.next;
      } else {
        sumMap.set(prefixSum, head); 
      }
      
      head = head.next;
    }
    
    return dummy.next;
  };
  