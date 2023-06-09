
var findMaximum = function(arr, start, end) {
    if (start === end) {
      return arr[start];
    }
    
    var mid = Math.floor((start + end) / 2);
    var leftMax = findMaximum(arr, start, mid);
    var rightMax = findMaximum(arr, mid + 1, end);
    
    return Math.max(leftMax, rightMax);
  };
  

  var findMaxElement = function(arr) {
    return findMaximum(arr, 0, arr.length - 1);
  };
  