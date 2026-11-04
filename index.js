class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = Array(16);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    let isMatched = false;

    if (this.buckets[index] === undefined) {
      this.buckets[index] = [];
    }

    for (const entry of this.buckets[index]) {
      if (entry[0] === key) {
        entry[1] = value;
        isMatched = true;
        break;
      }
    }

    if (!isMatched) {
      this.buckets[index].push([key, value]);
    }
  }

  get(key) {
    const index = this.hash(key);

    if (this.buckets[index] === undefined) {
      return;
    }

    for (const entry of this.buckets[index]) {
      if (entry[0] === key) {
        return entry[1];
      }
    }

    return;
  }

  has(key) {
    const index = this.hash(key);

    if (this.buckets[index] === undefined) {
      return false;
    }

    for (const entry of this.buckets[index]) {
      if (entry[0] === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);

    if (this.buckets[index] === undefined) {
      return false;
    }

    for (const entry of this.buckets[index].entries()) {
      if (entry[1][0] === key) {
        this.buckets[index].splice(entry[0], 1);
        return true;
      }
    }

    return false;
  }

  length() {
    let total = 0;

    for (let index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index] !== undefined) {
        total += this.buckets[index].length;
      }
    }

    return total;
  }

  clear() {
    this.buckets = Array(this.capacity);
  }

  keys() {
    const allKeys = [];

    for (let index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index] !== undefined) {
        for (const entry of this.buckets[index]) {
          allKeys.push(entry[0]);
        }
      }
    }

    return allKeys;
  }

  values() {
    const allValues = [];

    for (let index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index] !== undefined) {
        for (const entry of this.buckets[index]) {
          allValues.push(entry[1]);
        }
      }
    }

    return allValues;
  }

  entries() {
    const allEntries = [];

    for (let index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index] !== undefined) {
        for (const entry of this.buckets[index]) {
          allEntries.push([...entry]);
        }
      }
    }

    return allEntries;
  }
}

class HashSet {
  constructor() {
    this.map = new HashMap();
  }

  hash(key) {
    return this.map.hash(key);
  }

  add(key) {
    this.map.set(key, true);
  }
  
  has(key) {
    return this.map.has(key);
  }

  remove(key) {
    return this.map.remove(key);
  }
  
  length() {
    return this.map.length();
  }
}

export { HashMap };
