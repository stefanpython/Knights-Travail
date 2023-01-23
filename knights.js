function knightTravails(start, end) {
  // define all possible moves a knight can make on a chessboard
  const possibleMoves = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [2, -1],
    [-1, -2],
    [-2, -1],
  ];

  // initialize a queue with the starting position and 0 moves and path
  let queue = [{ pos: start, moves: 0, path: [start] }];

  // initialize a set to keep track of visited squares
  let visited = new Set();

  // initialize variable to store the minimum number of moves
  let minMoves = Infinity;

  // while there are elements in the queue
  while (queue.length) {
    // destructuring assignment to unpack the current position, moves and path
    let { pos, moves, path } = queue.shift();
    let [x, y] = pos;

    // if current position is the end position
    if (x === end[0] && y === end[1]) {
      // if the number of moves is less than the current minimum
      if (moves < minMoves) {
        minMoves = moves;
        console.log(`You made it in ${minMoves} moves! Here's your path:`);
        console.log(path);
      }
      // go to the next iteration
      continue;
    }

    // iterate over all possible moves
    for (let i = 0; i < possibleMoves.length; i++) {
      // calculate the new x and y positions
      let newX = x + possibleMoves[i][0];
      let newY = y + possibleMoves[i][1];

      // check if the new positions are valid (within the chessboard)
      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        let newPos = [newX, newY];
        // check if the new positions have not been visited yet
        if (!visited.has(`${newX},${newY}`)) {
          visited.add(`${newX},${newY}`);
          // add new position to the queue with the updated moves and path
          queue.push({
            pos: newPos,
            moves: moves + 1,
            path: [...path, newPos],
          });
        }
      }
    }
  }
  if (minMoves === Infinity) return "No solution";
}

console.log(knightTravails([2, 1], [7, 2]));
