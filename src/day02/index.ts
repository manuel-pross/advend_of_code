import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

type Game = {
  id: number;
  gameparts: GamePart[];
  isValid: boolean;
};

type GamePart = {
  blue: number;
  red: number;
  green: number;
};

const threshold = {
  blue: 14,
  red: 12,
  green: 13,
};

const testInput =
  "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";

const part1 = (rawInput: string) => {
  //const input = parseInput(rawInput);
  const input = testInput;
  const lines = input.split("\n");

  const games = generateGames(lines);

  return;
};

function generateGames(input: string[]): void {
  return;
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
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