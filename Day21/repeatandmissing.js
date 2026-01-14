/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
  let n = grid.length;
  let seen = new Set();
  let repeat = 0,missing=0;

  for(let i = 0;i<n;i++){
      for(let val of grid[i]){
          if(seen.has(val)){
              repeated = val;
          }
          else{
              seen.add(val);
          }
      }
  }

  for(let i = 1 ;i<=n*n;i++){
      if(!seen.has(i)){
          missing = i;
      }
  }
  return [repeated,missing]
};