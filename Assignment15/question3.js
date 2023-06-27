class Stack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }
 
    push(x) {
 
        
        this.q2.push(x);
       
        while (this.q1.length != 0) {
            this.q2.push(this.q1[0]);
            this.q1.shift();
 
        }
 
       
        this.q = this.q1;
        this.q1 = this.q2;
        this.q2 = this.q;
    }
 
    pop() {
        
        if (this.q1.length == 0)
            return;
        this.q1.shift();
    }
 
    top() {
        if (this.q1.length == 0)
            return -1;
        return this.q1[0];
    }
 
    size() {
        console.log(this.q1.length);
    }
 
    isEmpty() {
        
        return this.q1.length == 0;
    }
 
    front() {
        return this.q1[0];
    }
}