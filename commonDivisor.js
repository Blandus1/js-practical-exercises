//Create a function that returns the largest common divisor of the two numbers
const commonDivisor =(n1,n2)=> {
    let divisor=[]
    let arr =[n1,n2]
for( let i=1; i<= arr[1]; i++){
    if(arr[0] % i=== 0 && arr[1] % i=== 0){
        
        divisor.push(i)
    }
}
return divisor.sort((a,b)=> b-a)[0];
   }




console.log(commonDivisor(8,12))