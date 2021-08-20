// 기본 점수
const baseScore = {
  jump: 10,
  spin: 20,
  step: 15,
};

const baseAssignment = {
  jump: 3,
  spin: 3,
  step: 1,
};

// write your codes

function solution(inputArray) {
  //실격되지 않은 선수들의 배열
  return inputArray.filter(i=>i.goe.jump.length >= 3 && i.goe.spin.length >= 3)
    .map(player => {
      return { name : player.name, score : calculateSum(player.goe, player.pcs, player.penalty) };
  });

  // //내림차순해주는 함수
  // const descendScore =(a, b)=> b - a;
  // //실격되지 않은 선수들의 jump와 spin 점수를 내림차순으로 정렬시키기
  // const scoreSortedPlayers = qualifiedPlayers.map(p => {
  //   p.goe.jump.sort(descendScore)
  //   p.goe.spin.sort(descendScore)
  //   return p
  //   }                         
  // );
  // //선수들의 jump,spin,step항목들을 모두 기본점수를 곱해놓고 jump,spin은 3번째 요소까지만 남기고 삭제
  // for(let i = 0; i < scoreSortedPlayers.length; i++){
  //   scoreSortedPlayers[i].goe.step[0] =
  //   scoreSortedPlayers[i].goe.step[0] * baseScore.step;
  //   for(let j = 0; j < 3; j++){
  //     scoreSortedPlayers[i].goe.jump[j] =
  //     scoreSortedPlayers[i].goe.jump[j] * baseScore.jump;
  //     scoreSortedPlayers[i].goe.spin[j] =
  //     scoreSortedPlayers[i].goe.spin[j] * baseScore.spin;
  //   }
  //   scoreSortedPlayers[i].goe.jump.splice(3,scoreSortedPlayers[i].goe.jump.length - 3)
  //   scoreSortedPlayers[i].goe.spin.splice(3,scoreSortedPlayers[i].goe.spin.length - 3)
  // }
  // // 선수별 최종 점수 구하기
  // const totalScore = scoreSortedPlayers.map(p => {
  //   const totalJump = p.goe.jump.reduce((acc,curr)=>acc+curr,0);
  //   const totalSpin = p.goe.spin.reduce((acc,curr)=>acc+curr,0);
  //   const sum = totalJump + totalSpin + p.goe.step[0] +p.pcs - p.penalty;
  //   const resultObject = {name:p.name,score:sum};
  //   return resultObject;
  // })
  // return totalScore
}

function calculateSum(goe, pcs, penalty) {
  const jumpScore = goe.jump.sort((a, b) => b - a)
  .filter((j, idx) => idx < baseAssignment.jump)
  .reduce((a,b) => a + b * baseScore.jump, 0);

  const spinScore = goe.spin.sort((a, b) => b - a)
  .filter((j, idx) => idx < baseAssignment.spin)
  .reduce((a,b) => a + b  * baseScore.spin, 0);

  const stepScore = goe.step[0] * baseScore.step;

  return jumpScore + spinScore + stepScore + pcs - penalty;
}

exports.solution = solution;
