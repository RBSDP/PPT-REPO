class Stack {
    constructor() {
      this.items = [];
    }
  

    push(element) {
      this.items.push(element);
    }
  
   
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  

    isEmpty() {
      return this.items.length === 0;
    }
  }
  

  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log(stack.pop());
  console.log(stack.isEmpty()); 
  console.log(stack.pop());
  console.log(stack.pop()); 
  console.log(stack.isEmpty());
  console.log(stack.pop()); 
  