import test from "node:test";
import assert from "node:assert";
import { kmToMeters } from "./distanceUtils.js";

test("kmToMeters converts kilometers to meters", () => {
    assert.strictEqual(kmToMeters(1), 1000);
    assert.strictEqual(kmToMeters(0.5), 500);
    assert.strictEqual(kmToMeters(2.5), 2500);
});

test("kmToMeters throws TypeError for non-number input", () => {
    assert.throws(() => kmToMeters("1"), TypeError);
    assert.throws(() => kmToMeters(null), TypeError);
    assert.throws(() => kmToMeters(undefined), TypeError);
});

test("kmToMeters throws RangeError for non-positive input", () => {
    assert.throws(() => kmToMeters(0), RangeError);
    assert.throws(() => kmToMeters(-1), RangeError);
    assert.throws(() => kmToMeters(-0.5), RangeError);
});

test("kmToMeters handles large numbers", () => {
    assert.strictEqual(kmToMeters(1000000), 1000000000);
    assert.strictEqual(kmToMeters(123456.789), 123456789);
});