
var nextLargerNodes = function(head) {
    var result = [];
    var stack = [];
    
    var index = 0;
    while (head) {
      result[index] = 0; 
      
      while (stack.length > 0 && head.val > stack[stack.length - 1].val) {
       
        result[stack.pop().index] = head.val;
      }
      
     
      stack.push({ val: head.val, index: index });
      
      index++;
      head = head.next;
    }
    
    return result;
  };
  