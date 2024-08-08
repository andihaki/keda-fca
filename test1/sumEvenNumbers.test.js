import { describe, expect, test } from "vitest";
import { sumEvenNumbers } from "./sumEvenNumbers.js";

const cases = [
  [
    {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    },
    6,
  ],
  [
    {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    },
    12,
  ],
];

describe("'sum recursive nested object for even numbers'", () => {
  test.each(cases)(
    "given %p as arguments, returns %r",
    (firstArg, expectedResult) => {
      const result = sumEvenNumbers(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
