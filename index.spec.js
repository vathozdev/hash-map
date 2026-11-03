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

// test has method
assert.equal(test.has("apple"), true);
assert.equal(test.has("banana"), true);
assert.equal(test.has("pineapple"), false);

// test overwriting an existing key
test.set("apple", "green");
assert.equal(test.get("apple"), "green");

// test that overwriting doesn't create a duplicate
assert.equal(test.has("apple"), true);

// test collision handling
const collisionTest = new HashMap();

let firstKey = "key1";
let secondKey = "key2";

while (collisionTest.hash(firstKey) !== collisionTest.hash(secondKey)) {
  secondKey += "x";
}

collisionTest.set(firstKey, "value1");
collisionTest.set(secondKey, "value2");

// both values should be retrievable
assert.equal(collisionTest.get(firstKey), "value1");
assert.equal(collisionTest.get(secondKey), "value2");

console.log("Collision handling tests passed!");
console.log("All current HashMap tests passed!");
