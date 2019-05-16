const CorrectPath = str => {
  const qmarkPositions = [];

  str.split('').forEach((value, index) => {
    if (value === '?') {
      qmarkPositions.push(index);
    }
  });

  // Total permutations is 4 ^ blanks. 4 because their are 4 possibilities (u,
  // d, l, r) for each blank.
  const totalPermutations = Math.pow(4, qmarkPositions.length);

  for (let i = 0; i < totalPermutations; i++) {
    // This generates a number with leading 0's. It'll be base 4.
    const permID = (totalPermutations + i).toString(4).slice(1);
    const currentPath = createPath(str, qmarkPositions, permID);
    if (isGoodPath(currentPath)) {
      return currentPath;
    }
  }
};

const createPath = (str, qmarkPositions, permID) => {
  const moveDirections = ['d', 'r', 'u', 'l'];
  const splitStr = str.split('');

  // Replace each ? in the given string with a movement direction.
  qmarkPositions.forEach((value, index) => {
    // Each char of the base 4 permID will be used to select which movement
    // direction will be generated for the ? position in the corresponding index
    // of qmarkPositions.
    splitStr.splice(value, 1, moveDirections[permID[index]]);
  });
  return splitStr.join('');
};

const isGoodPath = path => {
  // make the empty 5x5 grid
  let grid = [];
  for (let i = 0; i < 5; i++) {
    grid.push([0, 0, 0, 0, 0]);
  }

  const len = path.length;
  let currentLoc = [0, 0];

  for (let i = 0; i < len; i++) {
    // grid square > 1 means it's been visited
    // Mark the starting point as visited (y=0, x=0) = 1
    grid[currentLoc[0]][currentLoc[1]] = 1;

    const newLoc = currentLoc.slice(0);
    switch (path[i]) {
      case 'u':
        newLoc[0]--;
        break;
      case 'd':
        newLoc[0]++;
        break;
      case 'r':
        newLoc[1]++;
        break;
      case 'l':
        newLoc[1]--;
        break;
    }

    // quit if we're off the board
    if (newLoc.includes(-1) || newLoc.includes(5)) {
      return false;
    }

    // quit if we're on a previously visited square
    if (grid[newLoc[0]][newLoc[1]] === 1) {
      return false;
    }

    // return true if we're at the target square on the last iteration
    if (newLoc[0] === 4 && newLoc[1] === 4 && i === len - 1) {
      return true;
    }

    // update currentLoc
    currentLoc = newLoc;
  }
  return false;
};

export default CorrectPath;
