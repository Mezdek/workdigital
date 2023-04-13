import { secondLargest } from "src";
import { describe, expect, it } from "vitest";

const proposedTests = [
  { value: [10, 40, 30, 20, 50], expexted: 40 },
  { value: [25, 143, 89, 13, 105], expexted: 105 },
  { value: [54, 23, 11, 17, 10], expexted: 23 },
];

describe("secondLargest", () => {
  proposedTests.forEach(({ value, expexted }) => {
    it(`should return ${expexted} when passing ${value}`, () => {
      expect(secondLargest(value)).toBe(expexted);
    });
  });
});
