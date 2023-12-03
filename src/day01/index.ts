import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines = input.split("\n");

  let wholeSum = 0;

  lines.forEach((line) => {
    let lineSum = "";
    let firstDigit = "";
    let lastDigit = "";
    for (const char of line) {
      if (!isNaN(parseInt(char))) {
        firstDigit = char;
        break;
      }
    }
    for (let i = line.length - 1; i > -1; i--) {
      if (!isNaN(parseInt(line[i]))) {
        lastDigit = line[i];
        break;
      }
    }

    lineSum = firstDigit + lastDigit;
    wholeSum += parseInt(lineSum);
  });

  return wholeSum;
};

const part2 = (rawInput: string) => {
  //const input = parseInput(rawInput);
  const input =
    "two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen";

  const newInput = replaceTextNumbersWithDigits(input);

  console.log(newInput);

  return;
};

function replaceTextNumbersWithDigits(inputString: string): string {
  const numberWords: { [key: string]: string } = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    // Add more as needed
  };

  // Use a regular expression to match each number word and replace it
  Object.keys(numberWords).forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi"); // 'gi' for case-insensitive global search
    inputString = inputString.replace(regex, numberWords[word]);
  });

  return inputString;
}

// Example usage:

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
