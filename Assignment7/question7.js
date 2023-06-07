function backspaceCompare(S, T) {
    const processedS = processString(S);
    const processedT = processString(T);
  
    return processedS === processedT;
  }
  
  function processString(str) {
    const stack = [];
  
    for (let char of str) {
      if (char === '#') {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  
    return stack.join('');
  }
  
