let obj= [
{name:"product1" , price: 4567}, 
{name:"product2", price: 4516},
{name:"product3" ,price: 896}

];
   
const sortProducts= (obj)=>{
return obj.sort((a,b)=> a.price-b.price)
}

console.log(sortProducts(obj));