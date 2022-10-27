function solution(s) {
  let answer = '';
  let center=s.length/2
  if(s.length%2===0){
      answer=s[center-1]+s[center]
  }
  else{
      answer=s[Math.floor(center)]
  }
  return answer;
}