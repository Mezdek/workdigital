import { letterAtPosition } from "src";
import { describe, expect, it } from "vitest";

const proposedTests = [
  { value: 1, expexted: "a" },
  { value: 26.0, expexted: "z" },
  { value: 0, expexted: "invalid" },
  { value: 4.5, expexted: "invalid" },
];

describe("letterAtPosition", () => {
  proposedTests.forEach(({ value, expexted }) => {
    it(`should return ${expexted} when passing ${value}`, () => {
      expect(letterAtPosition(value)).toBe(expexted);
    });
  });
});
