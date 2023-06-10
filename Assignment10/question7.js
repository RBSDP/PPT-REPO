function printPermutations(str) {
    const result = []; 
  

    const arr = str.split('');

    function generatePermutations(index) {
      if (index === arr.length - 1) {

        result.push(arr.join('')); 
        return;
      }
  
      for (let i = index; i < arr.length; i++) {
     
        [arr[index], arr[i]] = [arr[i], arr[index]];
  
        
        generatePermutations(index + 1);
  
      
        [arr[index], arr[i]] = [arr[i], arr[index]];
      }
    }

    generatePermutations(0);

    for (const permutation of result) {
      console.log(permutation);
    }
  }
  