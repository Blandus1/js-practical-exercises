
// removing duplicates without using Set

 const array= [1,3,1,4,5,3,2]
 let filtered= array.filter((num,index) => array.indexOf(num)=== index)
 console.log(filtered.sort((a,b)=> a-b)) //sort method is completely optional

