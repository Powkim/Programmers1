function solution(s) {
  const answer = true;
  if (s.length !== 4 && s.length !== 6) {
    answer = false;
  } else {
    const arr = s.split("");
    arr.forEach((el) => {
      isNaN(el) ? (answer = false) : null;
    });
  }
  return answer;
}
