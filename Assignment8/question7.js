const decodeString = function(s) {
    const stack = []; 
    let currentNum = 0; 
    let currentStr = ''; 
  
    for (let char of s) {
      if (char === '[') {
        stack.push(currentStr); 
        stack.push(currentNum); 
        currentStr = ''; 
        currentNum = 0; 
      } else if (char === ']') {
        const prevNum = stack.pop(); 
        const prevStr = stack.pop(); 
  
        currentStr = prevStr + currentStr.repeat(prevNum); 
      } else if (isNaN(char)) {
        currentStr += char; 
      } else {
        currentNum = currentNum * 10 + parseInt(char);  
      }
    }
  
    return currentStr; 
  };
  