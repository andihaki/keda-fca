function sumEvenNumbers(obj) {
  // Initialize sum to 0
  let sum = 0;

  // Iterate over each key in the object
  for (const key in obj) {
    // If the value is an object, recursively sum its even numbers
    if (typeof obj[key] === "object") {
      sum += sumEvenNumbers(obj[key]);
    }
    // If the value is an even number, add it to the sum
    else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  // Return the accumulated sum
  return sum;
}

const input = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
};
const result = sumEvenNumbers(input);

// console.log(result);
