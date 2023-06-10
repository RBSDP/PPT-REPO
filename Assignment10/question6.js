function towerOfHanoi(n, source, destination, auxiliary) {
    if (n === 1) {
      console.log(`Move disk 1 from rod ${source} to rod ${destination}`);
      return 1;
    }
  
    let moves = 0;
  
    moves += towerOfHanoi(n - 1, source, auxiliary, destination);
  
    console.log(`Move disk ${n} from rod ${source} to rod ${destination}`);
    moves++;
  
    moves += towerOfHanoi(n - 1, auxiliary, destination, source);
  
    return moves;
  }
  