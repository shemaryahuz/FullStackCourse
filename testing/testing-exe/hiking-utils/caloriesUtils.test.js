import test from "node:test";
import assert from "node:assert";
import { caloriesBurned } from "./caloriesUtils.js";


test("caloriesBurned return caloriesBurned by weight and distance", () => {
        assert.strictEqual(caloriesBurned(50, 3), 155.4);
        assert.strictEqual(caloriesBurned(62.5, 5), 323.75);
        assert.strictEqual(caloriesBurned(70, 8.3), 601.916);
});

test("caloriesBurned throws TypeError for non-number weight", () => {
    assert.throws(() => caloriesBurned("1", 5), TypeError);
    assert.throws(() => caloriesBurned(null, 4.5), TypeError);
    assert.throws(() => caloriesBurned(undefined, 3), TypeError);
});

test("caloriesBurned throws TypeError for non-number distance", () => {
    assert.throws(() => caloriesBurned(5, "1"), TypeError);
    assert.throws(() => caloriesBurned(4.5, null), TypeError);
    assert.throws(() => caloriesBurned(3, undefined), TypeError);
});

test("caloriesBurned throws RangeError for non-positive weight", () => {
    assert.throws(() => caloriesBurned(-50, 3), RangeError);
    assert.throws(() => caloriesBurned(-45.5, 7), RangeError);
    assert.throws(() => caloriesBurned(0, 2), RangeError);
});

test("caloriesBurned throws RangeError for non-positive distance", () => {
    assert.throws(() => caloriesBurned(3, -50), RangeError);
    assert.throws(() => caloriesBurned(7, -45.5), RangeError);
    assert.throws(() => caloriesBurned(2, 0), RangeError);
});