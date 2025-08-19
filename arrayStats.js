const arrayStats =(arr) =>{

let sum= arr.reduce((a,b)=> a+b);
let average= (sum/arr.length).toFixed(2);
let min=Math.min(...arr);
let max= Math.max(...arr);
const obj = arr.reduce((acc) => {
  acc['sum']= sum;
  acc['average']= Math.round(average * 100) / 100;
  acc['min']=min;
  acc['max']=max;
  return acc;
}, {});
 return obj;
}

console.log(arrayStats([1,2,3,4,5]))