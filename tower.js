'use strict';

function isLegal(move, structure) {
  // move = ['A', 'B']
  if (structure[move[0]].length !== 0) {
    if (structure[move[1]].length === 0 || structure[move[1]][0] > structure[move[0]][0]) {
      return true;
    }
  }

  return false;
}

function solveTower(structure, numDisks) {
  let solution = [];
  const numRods = structure.length;
  const possibleMoves = [
    ['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'A'], ['C', 'A'], ['C', 'B']
  ];

  if (structure.C.length === numDisks) {
    return solution;
  }

  possibleMoves.forEach(move => {
    if (isLegal(move, structure)) {
      const sourceArr = structure[move[0]];
      const destArr = structure[move[1]];
      
      destArr.unshift(sourceArr.shift());
      

      return solveTower()
    }
  });

}

const testTower = {
  A: [1, 2, 3],
  B: [],
  C: []
};

console.log(solveTower(testTower, 3));