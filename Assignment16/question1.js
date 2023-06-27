class Pair
{
    constructor(data,freq)
    {
        this.data = data;
            this.freq = freq;
    }
}
 
let mystack = [];
let  mymap = new Map();
 

function NGF(arr,res)
{
    let n = arr.length;
          
     
        for(let i = 0;i<n;i++) {
            if(mymap.has(arr[i]))
                mymap.set(arr[i], mymap.get(arr[i]) + 1);
            else
                mymap.set(arr[i], 1);
        }
          
       
        let curr_freq = mymap.get(arr[n-1]);
    
        mystack.push(new Pair(arr[n-1],curr_freq));
         
        
        res[n-1] = -1;
          
       
        for(let i = n - 2; i >= 0; i--)
        {
            curr_freq = mymap.get(arr[i]);
              
            
            while(mystack.length!=0  &&  curr_freq >= mystack[mystack.length-1].freq)
                mystack.pop();
              
            
            res[i] = (mystack.length==0) ? -1 : mystack[mystack.length-1].data;
              
            
            mystack.push(new Pair(arr[i],mymap.get(arr[i])));
        }
}

