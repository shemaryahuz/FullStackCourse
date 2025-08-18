import assert from "node:assert";
import test from "node:test";
import { findObjectByValue } from "./findObj.js";

test("findObjectByValue testing", () => {
    assert.strictEqual(findObjectByValue([], "alice"), "not found");
    assert.strictEqual(findObjectByValue([{ name: "alice" }, { name: "bobe" }], "alice"), { name: "alice" });
});