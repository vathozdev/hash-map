
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

// test length method
assert.equal(test.length(), 3);

// test keys method
assert.deepEqual(
  new Set(test.keys()),
  new Set(["apple", "banana", "carrot"]),
);

// test values method
assert.deepEqual(
  new Set(test.values()),
  new Set(["green", "yellow", "orange"]),
);

// test entries method
const allEntries = test.entries();

assert.equal(allEntries.length, 3);

assert.ok(
  allEntries.some(([key, value]) => key === "apple" && value === "green"),
);
assert.ok(
  allEntries.some(([key, value]) => key === "banana" && value === "yellow"),
);
assert.ok(
  allEntries.some(([key, value]) => key === "carrot" && value === "orange"),
);

// test that entries returns copies of key-value pairs
const copiedEntry = allEntries[0];
const originalValue = test.get(copiedEntry[0]);

copiedEntry[1] = "modified";

assert.equal(test.get(copiedEntry[0]), originalValue);

// test remove method
assert.equal(test.remove("banana"), true);
assert.equal(test.has("banana"), false);
assert.equal(test.get("banana"), undefined);

// test removing a non-existing key
assert.equal(test.remove("pineapple"), false);

// test length after removal
assert.equal(test.length(), 2);

// test clear method
test.clear();

assert.equal(test.length(), 0);
assert.equal(test.has("apple"), false);
assert.equal(test.get("apple"), undefined);

// test that keys, values and entries return empty arrays after clear
assert.deepEqual(test.keys(), []);
assert.deepEqual(test.values(), []);
assert.deepEqual(test.entries(), []);

console.log("All current HashMap tests passed!");
