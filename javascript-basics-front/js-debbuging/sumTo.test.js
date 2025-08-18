import assert from "node:assert";
import test from "node:test";
import { sumTo } from "./sumTo.js";

test("sumTo testing", () => {
    assert.strictEqual(sumTo(0), 0);
    assert.strictEqual(sumTo(-1), 0);
    assert.strictEqual(sumTo(4), 10);
});