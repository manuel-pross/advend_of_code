import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines = input.split("\n");

  const values = lines.map((line) => {
    const first = line.split("").find((v) => !Number.isNaN(Number(v)));
    const last = line
      .split("")
      .reverse()
      .find((v) => !Number.isNaN(Number(v)));
    return Number(first + last);
  });

  return values.reduce((s, v) => s + v);
};

const part2 = (rawInput: string) => {
  let input =
    "two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen";

  const numbersMap = new Map([
    ["eight", "8"],
    ["three", "3"],
    ["seven", "7"],
    ["four", "4"],
    ["five", "5"],
    ["nine", "9"],
    ["six", "6"],
    ["two", "2"],
    ["one", "1"],
  ]);

  for (let [key, value] of numbersMap) {
    input = input.replaceAll(key, value);
  }
  console.log(input);

  const lines = input.split("\n");

  const values = lines.map((line) => {
    const first = line.split("").find((v) => !Number.isNaN(Number(v)));
    const last = line
      .split("")
      .reverse()
      .find((v) => !Number.isNaN(Number(v)));
    console.log(Number(first + last));
    return Number(first + last);
  });

  return values.reduce((s, v) => s + v);
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
