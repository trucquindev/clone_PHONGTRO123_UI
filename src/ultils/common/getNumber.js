export const getNumbers = (string) =>
  string
    .split(" ")
    .map((item) => +item.match(/\d+/))
    .filter((item) => item !== 0);
