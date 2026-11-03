import { HashMap } from "./index.js";
import assert from "node:assert/strict";

const test = new HashMap();

// test set method
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");

// test get method
assert.equal(test.get("apple"), "red");
assert.equal(test.get("banana"), "yellow");
assert.equal(test.get("carrot"), "orange");

// test get with non-existing key
assert.equal(test.get("pineapple"), undefined);