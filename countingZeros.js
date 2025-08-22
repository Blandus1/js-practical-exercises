
const countingZeros =(n)=>{
   let count =0;
   for (let i=1; i<=n; i++){
    let ntoString= i.toString()
        for (let char of ntoString){
          if(char === '0'){
           count ++;
                   }
              }
  }


   return count;
}
console.log(countingZeros(1000))