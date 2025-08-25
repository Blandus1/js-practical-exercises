
const calculateExpression =(exp)=>{
try{
 const expression = new Function(` return ${exp}`)
    return expression ()
}catch(error){
       console.error("Error evaluating expression:", error);
    return NaN; 
}
   
    }

console.log(calculateExpression("( 2 + 3 ) * ( 4 - 1 )"))