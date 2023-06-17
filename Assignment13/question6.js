class Node
{
    constructor(d)
    {
        this.data=d;
        this.next = null;
    }
}
 
class LinkedList
{
 
constructor()
{
    this.head=null;
}
 
 
addToTheLast(node)
{
    if (this.head == null)
    {
        this.head = node;
    }
    else
    {
        let temp = this.head;
        while (temp.next != null)
            temp = temp.next;
        temp.next = node;
    }
}
 
printList()
{
    let temp = this.head;
    while (temp != null)
    {
        document.write(temp.data + " ");
        temp = temp.next;
    }
    document.write("<br>");
}
}
 
function sortedMerge(headA,headB)
{
    
    let dummyNode = new Node(0);
      
  
    let tail = dummyNode;
    while(true)
    {
          
       
        if(headA == null)
        {
            tail.next = headB;
            break;
        }
        if(headB == null)
        {
            tail.next = headA;
            break;
        }
          
 
        if(headA.data <= headB.data)
        {
            tail.next = headA;
            headA = headA.next;
        }
        else
        {
            tail.next = headB;
            headB = headB.next;
        }
       
        tail = tail.next;
    }
    return dummyNode.next;
}