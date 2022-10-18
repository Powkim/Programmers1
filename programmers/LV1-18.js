function solution(arr) {
  const min=arr.reduce((a,b)=>Math.min(a,b))
  const answer = arr.filter((result)=>result!==min);
  if(arr.length<=1){
      return [-1]
  }
 
  return answer;
}