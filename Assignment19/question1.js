function mergeKLists(lists) {
    if (lists.length === 0) {
      return null;
    }
  
    while (lists.length > 1) {
      const mergedLists = [];
      for (let i = 0; i < lists.length; i += 2) {
        const list1 = lists[i];
        const list2 = lists[i + 1];
        const merged = mergeTwoLists(list1, list2);
        mergedLists.push(merged);
      }
      lists = mergedLists;
    }
  
    return lists[0];
  }
  
  function mergeTwoLists(l1, l2) {
    if (!l1) {
      return l2;
    }
    if (!l2) {
      return l1;
    }
  
    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  }
  
  // Example usage
  const list1 = createLinkedList([1, 4, 5]);
  const list2 = createLinkedList([1, 3, 4]);
  const list3 = createLinkedList([2, 6]);
  const merged = mergeKLists([list1, list2, list3]);
  printLinkedList(merged);
  
 
  function createLinkedList(nums) {
    if (nums.length === 0) {
      return null;
    }
  
    const head = { val: nums[0], next: null };
    let current = head;
  
    for (let i = 1; i < nums.length; i++) {
      const node = { val: nums[i], next: null };
      current.next = node;
      current = node;
    }
  
    return head;
  }
  
 
  function printLinkedList(head) {
    const values = [];
    let current = head;
  
    while (current) {
      values.push(current.val);
      current = current.next;
    }
  
    console.log(values.join(" -> "));
  }
  