function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("nums only");
  }
  return a + b;
}

module.exports = { sum };
