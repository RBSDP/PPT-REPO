function isStrobogrammatic(num) {
    const map = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6'
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      if (!(num[left] in map) || map[num[left]] !== num[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }
  
  