
var diStringMatch = function(S) {
    let low = 0;  
    let high = S.length;  
    const result = [];
  
    for (let i = 0; i < S.length; i++) {
      if (S[i] === 'I') {
        result.push(low++);
      } else {
        result.push(high--);
      }
    }
  
    result.push(low);  
  
    return result;
  };
  