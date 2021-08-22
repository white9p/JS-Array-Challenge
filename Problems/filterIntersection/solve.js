function solution(inputArray1, inputArray2) {
  const newArray = [];
  for (let i = 0; i < inputArray1.length; i++) {
    if (!newArray.includes(inputArray1[i])) {
      newArray.push(inputArray1[i]);
    }
  }

  const resultArray = []
  for (let i = 0; i < newArray.length; i++) {
    if (newArray.includes(inputArray2[i])) {
      resultArray.push(inputArray2[i]);
    }
  }
  return resultArray;
}

exports.solution = solution;
