import Stack from "./datastructures/stack.js";

function visitedCell(grid, start, goal) {
  const rute = new Stack();
  const backTrack = new Stack();
  rute.push(start);

  while (!rute.isEmpty()) {
    const cell = rute.peek();
    const { row, col } = cell;
    const currentCell = grid.get(row, col);
    let moved = false;

    if (!currentCell.isVisited) {
      currentCell.isVisited = true;
      console.log(rute);
      console.log("backTrack stack", backTrack);

      if (row === goal.row && col === goal.col) {
        console.log("Path found");

        return rute;
      }

      if (
        !currentCell.north &&
        grid.north(row, col) &&
        !grid.north(row, col).isVisited
      ) {
        rute.push({ row: row - 1, col: col }); // row - 1 = north
        moved = true;
      } else if (
        !currentCell.east &&
        grid.east(row, col) &&
        !grid.east(row, col).isVisited
      ) {
        rute.push({ row: row, col: col + 1 }); // col + 1 = east
        moved = true;
      } else if (
        !currentCell.south &&
        grid.south(row, col) &&
        !grid.south(row, col).isVisited
      ) {
        rute.push({ row: row + 1, col: col }); // row + 1 = south
        moved = true;
      } else if (
        !currentCell.west &&
        grid.west(row, col) &&
        !grid.west(row, col).isVisited
      ) {
        rute.push({ row: row, col: col - 1 }); // col - 1 = west
        moved = true;
      }

      if (!moved) {
        rute.pop();
        backTrack.push(currentCell);
      }
    } else {
      if (
        !currentCell.north &&
        grid.north(row, col) &&
        !grid.north(row, col).isVisited
      ) {
        rute.push({ row: row - 1, col: col });
        moved = true;
      } else if (
        !currentCell.east &&
        grid.east(row, col) &&
        !grid.east(row, col).isVisited
      ) {
        rute.push({ row: row, col: col + 1 });
        moved = true;
      } else if (
        !currentCell.south &&
        grid.south(row, col) &&
        !grid.south(row, col).isVisited
      ) {
        rute.push({ row: row + 1, col: col });
        moved = true;
      } else if (
        !currentCell.west &&
        grid.west(row, col) &&
        !grid.west(row, col).isVisited
      ) {
        rute.push({ row: row, col: col - 1 });
        moved = true;
      }
    }
  }

  return rute;
}

export { visitedCell };
