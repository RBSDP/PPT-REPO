const findAnagrams = function(s, p) {
    const result = [];
    const targetFreq = new Array(26).fill(0);
    const windowFreq = new Array(26).fill(0);
  
  
    const isEqual = (arr1, arr2) => {
      for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    };
  
    
    for (let char of p) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      targetFreq[index]++;
    }
  
    let left = 0;
    let right = 0;
  
    while (right < s.length) {
      const char = s[right];
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      windowFreq[index]++;
  
     
      if (right - left + 1 > p.length) {
        const leftChar = s[left];
        const leftIndex = leftChar.charCodeAt(0) - 'a'.charCodeAt(0);
        windowFreq[leftIndex]--;
        left++;
      }
  
     
      if (right - left + 1 === p.length && isEqual(targetFreq, windowFreq)) {
        result.push(left);
      }
  
      right++;
    }
  
    return result;
  };