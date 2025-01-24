function knightMoves(start, end) {
  let queue = [];
  let visited = new Set();

  queue.push([start, [start]]);
  visited.add(`${start[0]},${start[1]}`);

  while (queue.length !== 0) {
    let currentSquare = queue.shift();
    if (currentSquare[0][0] === end[0] && currentSquare[0][1] === end[1]) {
      if (currentSquare[1].length - 1 >= 2) {
        console.log(`You made it in ${currentSquare[1].length - 1} moves!`);
      } else {
        console.log("You made it in 1 move!");
      }

      let message = ``;
      for (let i = 0; i < currentSquare[1].length; i++) {
        message += `[${currentSquare[1][i]}]\n`;
      }

      console.log(message);
      return;
    }

    let validMoves = getKnightMoves(currentSquare[0]);

    for (let move of validMoves) {
      let moveKey = `${move[0]}, ${move[1]}`;
      if (!visited.has(moveKey)) {
        queue.push([move, [...currentSquare[1], move]]);
        visited.add(moveKey);
      }
    }
  }
}

function getKnightMoves(position) {
  let validMoves = [];
  const x = position[0];
  const y = position[1];

  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  for (let move of moves) {
    let newX = x + move[0];
    let newY = y + move[1];

    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      validMoves.push([newX, newY]);
    }
  }

  return validMoves;
}

knightMoves([0, 0], [5, 7]);
