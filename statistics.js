function getStats(numbers) {
  let max = numbers[0];
  let min = numbers[0];
  let total = 0;

  for (const number of numbers) {
    if (number > max) {
      max = number;
    }

    if (number < min) {
      min = number;
    }

    total += number;
  }

  const average = total / numbers.length;

  return {
    max: max,
    min: min,
    average: average
  };
}

console.log(getStats([10, 5, 20, 15, 8]));