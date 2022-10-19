function solution(absolutes, signs) {
  let answer = 0;
for(i=0;i<absolutes.length;i++){
   if(signs[i]===true){
        answer = answer + absolutes[i];
   }
   else {
       answer= answer-absolutes[i]
   }
}
  return answer;
}