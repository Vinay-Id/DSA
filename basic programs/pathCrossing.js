var isPathCrossing = function (path) {
  const visited = new Set();
  let x = 0,
    y = 0;
  visited.add("0,0");
  for (const direction of path) {
    switch (direction) {
      case "N":
        y++;
        break;
      case "S":
        y--;
        break;
      case "E":
        x++;
        break;
      case "W":
        x--;
        break;
    }
    const currentPos = `${x},${y}`;
    if (visited.has(currentPos)) {
      return true;
    }
    visited.add(currentPos);
  }
  return false;
};
