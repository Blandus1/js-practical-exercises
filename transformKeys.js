 const inputObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const transformKeys = (inputObject)=>{
const transformedKeys={}

for (let [key,value] of Object.entries(inputObject)){

        transformedKeys[key.toUpperCase()]= value;
}
return transformedKeys;
}
console.log(transformKeys(inputObject))