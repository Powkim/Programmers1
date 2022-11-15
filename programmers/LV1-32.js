function solution(s) {
  const spl = s.split(" ");
  let answer = [];
  // 1. for문으로 각 데이터들을 순회, 2. 조건문 이용해서 i가 홀수이면 s[i] 대문자로 변경
  for (let i = 0; i < spl.length; i++) {
    let pus = spl[i]
      .split("")
      .map((a, idx) => {
        if (idx % 2 === 0) {
          return a.toUpperCase();
        } else {
          return a.toLowerCase();
        }
      })
      .join("");
    answer.push(pus);
  }
  return answer.join(" ");
}
