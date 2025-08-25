
const calculateExpression =(exp)=>{

    const expression = new Function(` return ${exp}`)
    return expression ()
    }

console.log(calculateExpression("( 2 + 3 ) * ( 4 - 1 )"))