// A.Implement a simple inheritance chain using prototypes 
// and demonstrate how properties/methods are inherited.

function NewPerson(name,age){
this.name = name;
this.age= age;
}
NewPerson.prototype.greet=function(){
return `hello,I am ${this.name},${this.age} years old thanks!`
}

// Child constructor
function Student(name, age, grade) {
  NewPerson.call(this, name, age); // Inherit properties
  this.grade = grade;
}
// Inherit methods
Student.prototype = Object.create(NewPerson.prototype);//NewPerson object is created and assigned to Student so that instances of Student can access methods in NewPerson
Student.prototype.constructor = Student;//reminds that student belongs to student not NewPerson

// Add new method to Student
Student.prototype.study = function() {
  return `${this.name} is studying in grade ${this.grade}.`;
};
const john = new Student('John',14,8)

console.log(john.greet())
console.log(john.study())

