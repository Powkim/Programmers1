function solution(n, m) {
  let num = Math.min(n, m);
  let a = 0;
  let b = 0;

  for (let i = 1; i <= num; i++) {
    if (n % i == 0 && m % i == 0) {
      a = i;
    }
  }
  let answer = [];
  b = (n * m) / a;
  answer.push(a, b);
  return answer;
}
