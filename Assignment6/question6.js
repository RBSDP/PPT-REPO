function findOriginalArray(doubled) {
    if (doubled.length % 2 !== 0) {
      return [];
    }
  
    doubled.sort((a, b) => a - b); 
  
    const original = [];
    const frequency = new Map();
  
    for (const num of doubled) {
      frequency.set(num, (frequency.get(num) || 0) + 1);
    }
  
    for (const num of doubled) {
      if (frequency.get(num) === 0) {
       
        continue;
      }
  
      const half = num / 2;
  
      if (frequency.get(half) > 0) {
        original.push(half);
        frequency.set(half, frequency.get(half) - 1);
        frequency.set(num, frequency.get(num) - 1);
      }
    }
  
  
    for (const count of frequency.values()) {
      if (count !== 0) {
        return [];
      }
    }
  
    return original;
  }