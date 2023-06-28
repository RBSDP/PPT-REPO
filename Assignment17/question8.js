class DataStream {
    constructor(value, k) {
      this.stream = [];
      this.value = value;
      this.k = k;
    }
  
    consec(num) {
      this.stream.push(num);
      
      if (this.stream.length < this.k) {
        return false;
      }
      
      const lastKIntegers = this.stream.slice(-this.k);
      return lastKIntegers.every((integer) => integer === this.value);
    }
  }
  
 
  