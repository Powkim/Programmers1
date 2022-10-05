function solution(s){

  const lower=s.toLowerCase().split('')
  let pNum=0
  let yNum=0
for(let i=0; i<lower.length;i++){
   if(lower[i]==='p'){
       pNum= pNum+1 }
       else if(lower[i]==='y'){
             yNum= yNum+1
       }
       }
       
           return yNum===pNum
}