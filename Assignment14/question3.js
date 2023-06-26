class ListNode {
    constructor(val) {
      this.data = val;
      this.next = null;
      this.bottom = null;
    }
  }
  
  function mergeLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
  
    let result = null;
  
    if (list1.data <= list2.data) {
      result = list1;
      result.bottom = mergeLists(list1.bottom, list2);
    } else {
      result = list2;
      result.bottom = mergeLists(list1, list2.bottom);
    }
  
    return result;
  }
  
  function flattenLinkedList(head) {
    if (!head || !head.next) return head;
  
    // Merge the current list with the flattened list of the rest
    head.next = flattenLinkedList(head.next);
  
    // Merge the current list with the bottom list
    head = mergeLists(head, head.next);
  
    return head;
  }
  
  // Create the linked list based on the input values
  const list1 = new ListNode(5);
  list1.bottom = new ListNode(7);
  list1.bottom.bottom = new ListNode(8);
  list1.bottom.bottom.bottom = new ListNode(30);
  
  const list2 = new ListNode(10);
  list2.bottom = new ListNode(20);
  
  const list3 = new ListNode(19);
  list3.bottom = new ListNode(22);
  list3.bottom.bottom = new ListNode(50);
  
  const list4 = new ListNode(28);
  list4.bottom = new ListNode(35);
  list4.bottom.bottom = new ListNode(40);
  list4.bottom.bottom.bottom = new ListNode(45);
  
  // Set the next pointers
  list1.next = list2;
  list2.next = list3;
  list3.next = list4;
  
  // Flatten the linked list
  const flattenedList = flattenLinkedList(list1);
  
  // Print the flattened list using the bottom pointers
  let node = flattenedList;
  let output = '';
  
  while (node) {
    output += node.data + ' -> ';
    node = node.bottom;
  }
  
  console.log(output + 'null');
  