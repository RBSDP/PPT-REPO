function reverseStack(stack) {
    if (stack.length <= 1) {
      return stack;
    } else {
      const topElement = stack.pop();
      reverseStack(stack);
      insertAtBottom(stack, topElement);
      return stack;
    }
  }
  
  function insertAtBottom(stack, element) {
    if (stack.length === 0) {
      stack.push(element);
    } else {
      const top = stack.pop();
      insertAtBottom(stack, element);
      stack.push(top);
    }
  }
  

 
  