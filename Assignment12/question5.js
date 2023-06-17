
 
class Node
{
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}
 

function detectAndRemoveLoop(node)
{
    var slow = node, fast = node;
    while (slow != null &&
           fast != null &&
           fast.next != null)
    {
        slow = slow.next;
        fast = fast.next.next;
 
       
        if (slow == fast)
        {
            removeLoop(slow, node);
            return 1;
        }
    }
    return 0;
}
 

function removeLoop(loop, head)
{
    var ptr1 = loop;
    var ptr2 = loop;
 
   
    var k = 1, i;
     
    while (ptr1.next != ptr2)
    {
        ptr1 = ptr1.next;
        k++;
    }
 
  
    ptr1 = head;
 
   
    ptr2 = head;
    for(i = 0; i < k; i++)
    {
        ptr2 = ptr2.next;
    }
 
    
    while (ptr2 != ptr1)
    {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
 
   
    while (ptr2.next != ptr1)
    {
        ptr2 = ptr2.next;
    }
 
   
    ptr2.next = null;
}
 

function printList(node)
{
    while (node != null)
    {
        document.write(node.data + " ");
        node = node.next;
    }
}
 