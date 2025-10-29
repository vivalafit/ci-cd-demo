function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("nums only");
  }
  console.log("test log");
  return a + b;
}

module.exports = { sum };
