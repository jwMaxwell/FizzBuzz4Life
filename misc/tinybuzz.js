console.log(
  [...new Array(100).keys()]
    .map((t) => t + 1)
    .map((n) => (n % 3 ? "" : "fizz") + (n % 5 ? "" : "buzz") || n)
);
