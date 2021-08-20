function solution(inputArray) {
  const resultArray = inputArray.filter(i => i*i%3===1);
  const result = resultArray.reduce((acc,curr)=>acc+curr*curr,0)
  return result;
}

exports.solution = solution;
