class Stack
{
    size;
    top;
    a = [];
  
    
    isEmpty()
    {
        return(this.top < 0);
    }
     
    constructor(n)
    {
        this.top = -1;
        this.size = n;
        this.a = new Array(this.size);
    }
  
    
    push(x)
    {
        if (this.top >= this.size)
        {
            document.write("Stack Overflow<br>");
            return false;
        }
        else
        {
            this.a[++this.top] = x;
            return true;
        }
    }
  
  
    pop()
    {
        if (this.top < 0)
        {
            document.write("Stack Underflow<br>");
            return 0;
        }
        else
        {
            let x = this.a[this.top--];
            return x;
        }
    }
}
 

function reverse(str)
{
     
    
    let n = str.length;
    let obj = new Stack(n);
      
    
    let i;
    for(i = 0; i < n; i++)
        obj.push(str[i]);
  
   
    for(i = 0; i < n; i++)
    {
        let ch = obj.pop();
        str[i] = ch;
    }
}