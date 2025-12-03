import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const banks = input.split("\n").map((b) => b.split("").map(Number));
  const joltages: number[] = [];
  for (const bank of banks) {
    const bestBatteries = bank.reduce(
      (running, battery, i, arr) => {
        if (battery > running[0] && i < arr.length - 1) {
          return [battery, 0];
        } else if (battery > running[1]) {
          return [running[0], battery];
        }
        return running;
      },
      [0, 0],
    );
    joltages.push(
      bestBatteries.reduce((joltage, battery, i, arr) => {
        return (joltage += battery * Math.pow(10, arr.length - i - 1));
      }, 0),
    );
  }
  return joltages.reduce((a, b) => a + b, 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const banks = input.split("\n").map((b) => b.split("").map(Number));
  const joltages: number[] = [];
  for (const bank of banks) {
    const bestBatteries = bank.reduce(
      (running, battery, i, arr) => {
        if (battery > running[0] && i < arr.length - 11) {
          return [battery, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        } else if (battery > running[1] && i < arr.length - 10) {
          return [running[0], battery, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        } else if (battery > running[2] && i < arr.length - 9) {
          return [running[0], running[1], battery, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        } else if (battery > running[3] && i < arr.length - 8) {
          return [
            running[0],
            running[1],
            running[2],
            battery,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
          ];
        } else if (battery > running[4] && i < arr.length - 7) {
          return [
            running[0],
            running[1],
            running[2],
            running[3],
            battery,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
          ];
        } else if (battery > running[5] && i < arr.length - 6) {
          return [
            running[0],
            running[1],
            running[2],
            running[3],
            running[4],
            battery,
            0,
            0,
            0,
            0,
            0,
            0,
          ];
        } else if (battery > running[6] && i < arr.length - 5) {
          return [
            running[0],
            running[1],
            running[2],
            running[3],
            running[4],
            running[5],
            battery,
            0,
            0,
            0,
            0,
            0,
          ];
        } else if (battery > running[7] && i < arr.length - 4) {
          return [
            running[0],
            running[1],
            running[2],
            running[3],
            running[4],
            running[5],
            running[6],
            battery,
            0,
            0,
            0,
            0,
          ];
        } else if (battery > running[8] && i < arr.length - 3) {
          return [
            running[0],
            running[1],
            running[2],
            running[3],
            running[4],
            running[5],
            running[6],
            running[7],
            battery,
            0,
            0,
            0,
          ];
        } else if (battery > running[9] && i < arr.length - 2) {
          return [
            running[0],
            running[1],
            running[2],
            running[3],
            running[4],
            running[5],
            running[6],
            running[7],
            running[8],
            battery,
            0,
            0,
          ];
        } else if (battery > running[10] && i < arr.length - 1) {
          return [
            running[0],
            running[1],
            running[2],
            running[3],
            running[4],
            running[5],
            running[6],
            running[7],
            running[8],
            running[9],
            battery,
            0,
          ];
        } else if (battery > running[11]) {
          return [
            running[0],
            running[1],
            running[2],
            running[3],
            running[4],
            running[5],
            running[6],
            running[7],
            running[8],
            running[9],
            running[10],
            battery,
          ];
        }
        return running;
      },
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    );
    joltages.push(
      bestBatteries.reduce((joltage, battery, i, arr) => {
        return (joltage += battery * Math.pow(10, arr.length - i - 1));
      }, 0),
    );
  }
  return joltages.reduce((a, b) => a + b, 0);
};

run({
  part1: {
    tests: [
      {
        input: `987654321111111
811111111111119
234234234234278
818181911112111`,
        expected: 357,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `987654321111111
811111111111119
234234234234278
818181911112111`,
        expected: 3121910778619,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
