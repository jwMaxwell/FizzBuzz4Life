// Unsigned right shift by 0 (cast to unsigned int),
// cast to binary then to a string, then split it and make them all numbers
const toBitArray = (x) => (x >>> 0).toString(2).split("").map(Number);

// This can be determined by comparing the sum of odd binary digits (mod 3)
// with the sum of even binary digits (mod 3). If these values are equal,
// then the number is divisible by 3.
const rduce = (input) => {
  while (input >= 3) input -= 3;
  return input;
};

const fizz = (x) => {
  let mask1 = 1;
  let mask2 = 2;
  let oddSum = 0;
  let evenSum = 0;

  // This compares the odd bits and even bits
  for (let i = 0; i < toBitArray(x).length / 2; ++i) {
    if (x & mask1) oddSum++;
    if (x & mask2) evenSum++;
    mask1 <<= 2;
    mask2 <<= 2;
  }

  return rduce(oddSum) === rduce(evenSum);
};

// Image of the finite automata:
// https://qph.cf2.quoracdn.net/main-qimg-48672e616bd512bf7e3631dc0a2ccf75-lq
//
// This is probably not the best way to create a finite automata, however,
// this makes it short and sweet. If you understand the tree, you can
// figure out the code pretty easy (I think).
const numStateEval = (x, state = 0) => {
  const t = x.shift();
  if (isNaN(t)) return state;

  stateMap = [
    [0, 0, 0],
    [0, 1, 1],
    [1, 0, 2],
    [1, 1, 3],
    [2, 0, 4],
    [2, 1, 0],
    [3, 0, 1],
    [3, 1, 2],
    [4, 0, 3],
    [4, 1, 4],
  ];

  return numStateEval(x, stateMap[2 * state + t][2]);
};

const buzz = (x) => numStateEval(toBitArray(x)) === 0;

const fizzbuzz = (x) =>
  fizz(x) && buzz(x) ? "FizzBuzz" : fizz(x) ? "Fizz" : buzz(x) ? "Buzz" : x;

// range(1, 101).map(...)
[...Array(100).keys()].map((t) => ++t).map((t) => console.log(fizzbuzz(t)));
