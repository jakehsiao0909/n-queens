/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n});
// top row loop
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      solution.togglePiece(i, j);
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(i, j);
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  if (n === 0) {
    return 1; 
  }

  solutionCount = n * countNRooksSolutions(n - 1);
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// window.findSolution = function(row, n, board) {
//   var currentRow = board.rows()[row];

//   if (n === row) {
//     return board;
//   }

//   for (var i = 0; i < currentRow.length; i++) {
//     board.togglePiece(row, i);

//     if (board.hasAnyQueensConflicts()) {
//       board.togglePiece(row, i);
//     }

//     this.findSolution(row + 1, n, board);
//   }

//   console.log(JSON.stringify(board.rows()));

//   return board;
// };

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({'n': n});

  // var rows = solution.rows();
  // console.log(rows);

  // this.findSolution(0, n,board);
  // iterate rows



  var recursive = function (row, col) {
    row = row || 0;
    col = col || 0;
    if (row !== n) {
      for (var k = col; k < n; k++) {
        board.togglePiece(row, k);

        if (board.hasAnyQueensConflicts()) {
          board.togglePiece(row, k);         
        }
      }
      recursive(row + 1, col);
    } else {
      var queens = 0;
      var possibleSolution = board.rows();

      for (var i = 0; i < possibleSolution.length; i++) {
        for (var j = 0; j < possibleSolution[i].length; j++) {
          queens += possibleSolution[i][j];
        }
      }
      if (queens === n) {
        return board.rows();
      } else if (queens < n) {
        recursive(row, col + 1);
      }
    }
  };

  recursive(0, 0);
  console.log(JSON.stringify(board.rows()));
  // var solution = board;
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(board));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
