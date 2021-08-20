function solution(inputArray) {
  const isEven = (current) => current % 2 === 0;
  const result = inputArray.every(isEven);
  return result;
}

exports.solution = solution;
