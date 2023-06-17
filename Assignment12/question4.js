
 
 
   
    var head;
    var left;
 
     class Node {
            constructor(val) {
                this.data = val;
                this.next = null;
            }
        }
 
    function isPalindromeUtil( right) {
        left = head;
 
       
        if (right == null)
            return true;
 
       
        var isp = isPalindromeUtil(right.next);
        if (isp == false)
            return false;
 
        
        var isp1 = (right.data == left.data);
 
        left = left.next;
 
        
        return isp1;
    }
 
    
    function isPalindrome( head) {
        var result = isPalindromeUtil(head);
        return result;
    }
 
  
    function push( new_data) {
 
        
        var new_node = new Node(new_data);
 
       
        new_node.next = head;
 
       
        head = new_node;
    }
 
   
    function printList( ptr) {
        while (ptr != null) {
            document.write(ptr.data + "->");
            ptr = ptr.next;
        }
        document.write("Null ");
        document.write("<br>");
 
    }
 
    