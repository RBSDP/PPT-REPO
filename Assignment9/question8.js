
var productOfArrayElements = function(arr) {
    var product = 1;
    
    for (var i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    
    return product;
  };
  