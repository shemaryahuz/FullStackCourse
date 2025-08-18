import assert from "node:assert";
import test from "node:test";
import { maxOrNull } from "./maxNumber.js";

test("maxOrNull testing", () => {
  assert.strictEqual(maxOrNull([1, 2, 3]), 3);
  assert.strictEqual(maxOrNull([]), null);
  assert.strictEqual(maxOrNull([1, -4, 2]), 2);
  assert.strictEqual(maxOrNull([-5, -2]), -2);
});
