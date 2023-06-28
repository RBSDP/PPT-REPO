
var firstUniqChar = function(s) {
    const charFreq = new Map();
  
    
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charFreq.set(char, (charFreq.get(char) || 0) + 1);
    }
  
    
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charFreq.get(char) === 1) {
        return i;
      }
    }
  
    return -1; 
  };
  
