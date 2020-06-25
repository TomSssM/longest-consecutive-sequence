function longestConsecutiveLength(array) {
  const step = 1;
  const set = new Set();
  let longestSequence = 0;

  array.forEach((val) => {
    let sequence = 1;
    let current;

    set.add(val);

    current = val;

    while (set.has(current + step)) {
      current += step;
      sequence += 1;
    }

    current = val;

    while (set.has(current - step)) {
      sequence += 1;
      current -= step;
    }

    if (sequence > longestSequence) {
      longestSequence = sequence;
    }
  });

  return longestSequence;
}

module.exports = longestConsecutiveLength;
