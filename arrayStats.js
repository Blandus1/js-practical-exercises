const arrayStats =(arr) =>{

let sum= arr.reduce((a,b)=> a+b);
let average= Math.round((sum / arr.length) * 100) / 100
let min=Math.min(...arr);
let max= Math.max(...arr);
const obj = arr.reduce((acc) => {
  acc['sum']= sum;
  acc['average']= average;
  acc['min']=min;
  acc['max']=max;
  return acc;
}, {});
 return obj;
}

console.log(arrayStats([1,2,3,4,5]))


// const arrayStats = (arr) => {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     return null; // or throw an error if you prefer
//   }

//   const sum = arr.reduce((a, b) => a + b, 0);
//   const average = sum / arr.length;
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   return {
//     sum,
//     average: Number(average.toFixed(2)), // Ensures it's a number, not string
//     min,
//     max
//   };
// };
