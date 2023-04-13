import { strMatchBy2char } from "src";
import { describe, expect, it } from "vitest";

const proposedTests = [
  { value: ["yytaazz", "yyjaaz"], expexted: 3 },
  { value: ["edabit", "ed"], expexted: 1 },
  { value: ["", ""], expexted: 0 },
];

describe("strMatchBy2char", () => {
  proposedTests.forEach(({ value, expexted }) => {
    it(`should return ${expexted} when passing ${value}`, () => {
      expect(strMatchBy2char.apply(null, value)).toBe(expexted);
    });
  });
});
