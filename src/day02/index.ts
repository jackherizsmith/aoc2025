import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const ranges = input.split(",");
  const incorrectIds = [];
  for (const range of ranges) {
    const [min, max] = range.split("-").map(Number);
    let id = min;
    while (id <= max) {
      const idString = id.toString();
      if (idString.length % 2 === 0) {
        if (
          idString.slice(0, idString.length / 2) ===
          idString.slice(-idString.length / 2)
        ) {
          incorrectIds.push(id);
        }
      }
      id++;
    }
  }
  return incorrectIds.reduce((a, b) => a + b, 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const ranges = input.split(",");
  const incorrectIds = [];
  for (const range of ranges) {
    const [min, max] = range.split("-").map(Number);
    let id = min;
    while (id <= max) {
      const idString = id.toString();
      const maxRepSize = idString.length / 2;
      let rep = 1;
      while (rep <= maxRepSize) {
        if (idString.length % rep === 0) {
          const segments = idString
            .split("")
            .reduce((segs: number[], char, i, arr) => {
              if (i % rep === 0) {
                let idSeg = "";
                for (let j = i; j < i + rep; j++) {
                  idSeg += arr[j];
                }
                segs.push(Number(idSeg));
              }
              return segs;
            }, []);
          if (segments.every((s) => s === segments[0])) {
            incorrectIds.push(id);
            break;
          }
        }
        rep++;
      }
      id++;
    }
  }
  return incorrectIds.reduce((a, b) => a + b, 0);
};

run({
  part1: {
    tests: [
      {
        input: `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`,
        expected: 1227775554,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`,
        expected: 4174379265,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
