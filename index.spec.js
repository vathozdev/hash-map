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

collisionTest.set("apple", "red");
collisionTest.set("applet", "green");

assert.equal(
  collisionTest.hash("apple"),
  collisionTest.hash("applet"),
);

assert.equal(collisionTest.get("apple"), "red");
assert.equal(collisionTest.get("applet"), "green");

// both values should be retrievable
assert.equal(collisionTest.get("apple"), "red");
assert.equal(collisionTest.get("applet"), "green");

console.log("Collision handling tests passed!");
console.log("All current HashMap tests passed!");
