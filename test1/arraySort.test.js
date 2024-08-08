import { expect, test } from "vitest";
import { arraySort } from "./arraySort.js";

test("array sorted descending", () => {
  expect(arraySort([1, 2, 4, 3, 5, 3, 2, 1])).toStrictEqual([
    5, 4, 3, 3, 2, 2, 1, 1,
  ]);
});
