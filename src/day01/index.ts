import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const START = 50;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const turns = input.split("\n");
  let currentPosition = START;
  let zerosCount = 0;

  for (const turn of turns) {
    const direction = turn.slice(0, 1);
    const isForwards = direction === "R";
    const distance = Number(turn.slice(1));
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
  const turns = input.split("\n");
  let currentPosition = START;
  let zerosCount = 0;

  for (const turn of turns) {
    const direction = turn.slice(0, 1);
    const isForwards = direction === "R";
    const distance = Number(turn.slice(1));
    const travelled = distance * (isForwards ? 1 : -1);
    const newPosition = currentPosition + travelled;

    const start = Math.min(currentPosition, newPosition);
    const end = Math.max(currentPosition, newPosition);
    const first = Math.ceil(start / 100);
    const last = Math.floor(end / 100);

    zerosCount += Math.max(0, last - first + 1);
    if (currentPosition % 100 === 0) {
      zerosCount -= 1;
    }
    currentPosition = newPosition;
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
        input: `
        R41
        L40
        R4`,
        expected: 0,
      },
      {
        input: `
        L50
        R140`,
        expected: 2,
      },
      {
        input: `
        R50
        L40`,
        expected: 1,
      },
      {
        input: `
        R60
        L40`,
        expected: 2,
      },
      {
        input: `
        R160
        L120`,
        expected: 4,
      },
      {
        input: `
        R160
        L1
        L1
        L1
        L40`,
        expected: 3,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
