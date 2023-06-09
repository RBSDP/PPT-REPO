
var generatePermutations = function(S) {
    var result = [];
    var charArray = S.split('');
    
    permute(charArray, 0, charArray.length - 1, result);
    
    return result;
  };
  

  function permute(charArray, left, right, result) {
    if (left === right) {
      result.push(charArray.join(''));
    } else {
      for (var i = left; i <= right; i++) {
        swap(charArray, left, i);
        permute(charArray, left + 1, right, result);
        swap(charArray, left, i); 
      }
    }
  }
  

  function swap(charArray, i, j) {
    var temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
  }
  