
	
	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}

	
	function rotate(k) {
		if (k == 0)
			return;

		
		var current = head;

		
		var count = 1;
		while (count < k && current != null) {
			current = current.next;
			count++;
		}

		
		if (current == null)
			return;

		
		var kthNode = current;

		
		while (current.next != null)
			current = current.next;

		

		current.next = head;

		
		head = kthNode.next;

		
		kthNode.next = null;
	}

	
	function push(new_data) {
		
var new_node = new Node(new_data);

		
		new_node.next = head;

		
		head = new_node;
	}

	function printList() {
var temp = head;
		while (temp != null) {
			document.write(temp.data + " ");
			temp = temp.next;
		}
		document.write("<br/>");
	}

	
		for (i = 60; i >= 10; i -= 10)
			push(i);

		document.write("Given list<br/>");
		printList();

		rotate(4);

		document.write("Rotated Linked List<br/>");
		printList();

