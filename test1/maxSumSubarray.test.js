import { describe, expect, test } from "vitest";
import { maxSumSubarray } from "./maxSumSubarray.js";

const cases = [
  [[100, 200, 300, 400], 2, 700],
  [[1, 4, 2, 10, 23, 3, 1, 0, 20], 4, 39],
  [[-3, 4, 0, -2, 6, -1], 2, 5],
];

describe("'sum of sub array'", () => {
  test.each(cases)(
    "given %p and %q as arguments, returns %r",
    (firstArg, secondArg, expectedResult) => {
      const result = maxSumSubarray(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
