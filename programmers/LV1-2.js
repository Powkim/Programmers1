function solution (n){
    let anwser=0
    for(let i=1;i<=n;i++){
        if(n%i===0){
          anwser=anwser+i
            }
    }
    return anwser
    }