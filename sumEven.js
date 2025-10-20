let array= [[1,2,3,4,5],[5,6,7,8,9],[10,11,12,13,14]]
const arr= (array)=>{
 
  let last=array[2].filter(num=> num % 2===0).sort((a,b)=> a-b)[0]
  let middle=array[1].filter(num=> num % 2===0).sort((a,b)=> a-b)[0]
  let first=array[0].filter(num=> num % 2===0).sort((a,b)=> a-b)[0]
let combine=[first,middle,last]
let sumOfEven= combine.reduce((a,b)=> a + b)
return sumOfEven;

}
console.log(arr(array))