function solution(x) {
  const answer = String(x)
const spl=answer.split("")
let sum=0
for(let i=0; i<spl.length;i++){
 sum=sum+Number(spl[i])
}
  return x%sum===0;
}