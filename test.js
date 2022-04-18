function test(x) {
  if (x % 3 === 0 && x % 5 === 0) {
    return "Sphinx Software";
  }
  if (x % 3 === 0) {
    return "Sphinx";
  }
  if (x % 5 === 0) {
    return "Software";
  }
  return x;
}
for (let index = 1; index <= 100; index++) {
  console.log(test(index));
}
console.log("SPHINX SOFTWARE".toLowerCase());
