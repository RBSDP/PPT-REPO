function construct2DArray(original, m, n) {
    const totalElements = m * n;
  
    
    if (original.length !== totalElements) {
      return [];
    }
  
    const result = [];
    let index = 0;
  
    
    for (let i = 0; i < m; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(original[index++]);
      }
      result.push(row);
    }
  
    return result;
  }