function solution(n) {
   let answer = 0;
   const sqn=[Math.sqrt(n)]
   const str=String(sqn)
   if(str.includes('.')){
        answer=-1
      }
   else{
     answer=(Math.sqrt(n)+1)*(Math.sqrt(n)+1)
   }
   return answer;
}
