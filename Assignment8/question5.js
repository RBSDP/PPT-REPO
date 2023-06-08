const compress = function(chars) {
    let anchor = 0; 
    let write = 0; 
  
    for (let read = 0; read < chars.length; read++) {
   
      if (read + 1 === chars.length || chars[read] !== chars[read + 1]) {
        chars[write++] = chars[anchor]; 
  
      
        if (read > anchor) {
          const count = (read - anchor + 1).toString();
          for (let i = 0; i < count.length; i++) {
            chars[write++] = count[i];
          }
        }
  
        anchor = read + 1; 
      }
    }
  
    return write; 
  };
