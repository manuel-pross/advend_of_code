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
  const input = parseInput(rawInput);
  const lines = input.split("\n");

  const games = generateGames(lines);

  let acc = 0;

  games.forEach((game) => {
    if (game.isValid) {
      acc += game.id;
    }
  });

  return acc;
};

function generateGames(input: string[]): Game[] {
  const games: Game[] = new Array(input.length);

  input.forEach((line, index) => {
    games[index] = {
      id: 0,
      gameparts: [],
      isValid: true,
    };
    games[index].id = index + 1;

    const gameparts = line.slice(line.indexOf(":") + 2);
    const gamepartsSeparatedBySemi = gameparts.split(";");

    gamepartsSeparatedBySemi.forEach((gamepart, indexGamepart) => {
      games[index].gameparts.push({
        blue: 0,
        red: 0,
        green: 0,
      });
      const separatedByComma = gamepart.split(",");

      for (const color of separatedByComma) {
        if (color.includes("blue")) {
          games[index].gameparts[indexGamepart].blue = +color.match(/\d+/)[0];
        } else if (color.includes("red")) {
          games[index].gameparts[indexGamepart].red = +color.match(/\d+/)[0];
        } else if (color.includes("green")) {
          games[index].gameparts[indexGamepart].green = +color.match(/\d+/)[0];
        }

        if (
          games[index].gameparts[indexGamepart].blue > threshold.blue ||
          games[index].gameparts[indexGamepart].red > threshold.red ||
          games[index].gameparts[indexGamepart].green > threshold.green
        ) {
          games[index].isValid = false;
          break;
        }
      }
    });
  });

  //console.log(JSON.stringify(games));

  return games;
}

const part2 = (rawInput: string) => {
  //const input = parseInput(rawInput);
  const input = testInput;
  const lines = input.split("\n");

  const games = generateGames(lines);
  console.log(games);

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
