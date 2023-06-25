class Queue {
    constructor() {
      this.items = [];
    }
  
   
    enqueue(element) {
      this.items.push(element);
    }
  
    
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    
    isEmpty() {
      return this.items.length === 0;
    }
  }
  

  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.dequeue()); 
  console.log(queue.isEmpty()); 
  console.log(queue.dequeue()); 
  console.log(queue.dequeue()); 
  console.log(queue.isEmpty()); 
  console.log(queue.dequeue()); 
  