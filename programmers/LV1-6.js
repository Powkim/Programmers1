function solution(n) {
  const answer = [];
  const str=String(n)
const result =str.split("").reverse()

  return result.map((el)=>{return Number(el)})
}