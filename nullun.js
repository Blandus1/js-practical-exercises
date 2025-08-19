const obj={
    name:null,
    age:undefined,
    height: 2,
    weight:79
}

const convertNullValues = (obj)=>{
// const newobj= {}
// for (let [key, value] of Object.entries(obj)) {
// value === null? newobj[key]=0: value === undefined? newobj[key]= '':newobj[key]= value;
// }
// return newobj;
for(let key in obj){
    if(obj[key]=== null){
        obj[key] = 0;
    }else if(obj[key]=== undefined){
        obj[key] = '';
    }
}
return obj;
    }


console.log(convertNullValues (obj))