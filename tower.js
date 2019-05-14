'use strict';



function solveTower(numDisks, A, B, C) {
  
  if (numDisks === 1) {
    return [[A, C]];
  }

  let intermediateSol = solveTower(numDisks - 1, A, C, B);
  intermediateSol.push([A, C]);
  return intermediateSol.concat(solveTower(numDisks - 1, B, A, C));
}

console.log(solveTower(4, 'A', 'B', 'C'));