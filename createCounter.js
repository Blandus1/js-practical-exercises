

const createCounter = ()=>{
 let count=0;
    return function counterFn(){
   return count ++;
}
    }
    
const func= createCounter()

console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())