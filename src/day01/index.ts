import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const START = 50;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const directions = input.split("\n");
  let currentPosition = START;
  let zerosCount = 0;
  for (const direction of directions) {
    const dir = direction.slice(0, 1);
    const isForwards = dir === "R";
    const distance = Number(direction.slice(1));
    const travelled = distance * (isForwards ? 1 : -1);
    currentPosition = currentPosition + travelled;

    if (currentPosition % 100 === 0) {
      zerosCount++;
    }
  }
  return zerosCount;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const directions = input.split("\n");
  let currentPosition = START;
  let zerosCount = 0;
  for (const direction of directions) {
    const dir = direction.slice(0, 1);
    const isForwards = dir === "R";
    const distance = Number(direction.slice(1));
    const travelled = distance * (isForwards ? 1 : -1);
    currentPosition = currentPosition + travelled;

    if (currentPosition >= 100) {
      zerosCount++;
      currentPosition -= 100;
      while (currentPosition >= 100) {
        zerosCount++;
        currentPosition -= 100;
      }
    } else if (currentPosition < 0) {
      zerosCount++;
      currentPosition += 100;
      while (currentPosition < 0) {
        zerosCount++;
        currentPosition += 100;
      }
    }
  }
  return zerosCount;
};

run({
  part1: {
    tests: [
      {
        input: `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`,
        expected: 3,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`,
        expected: 6,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
