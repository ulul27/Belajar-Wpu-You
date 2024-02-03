function volumeKubus(a, b) {
  let volumeA = a * a * a;
  let volumeB = b * b * b;

  let total = volumeA + volumeB;

  return total
}

console.log(volumeKubus(1, 2));