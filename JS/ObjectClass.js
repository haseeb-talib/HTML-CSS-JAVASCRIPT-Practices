// // const person1={
// //     fname:"Asad",
// //     lname:"Ali",
// //     age:20,
// //              getFullName: function(){
// //                 return this.fname+" "+this.lname+" "+this.age;
// //              }              
// // }
// // obj2={

// // }

// // obj2.__proto__=person1


// // console.log(obj2.getFullName());


// class Person1 {
//     constructor(fname,lname,age){
//         this.fname=fname;
//         this.lname=lname;
//         this.age=age;
//     }
//     getFullName(){
//         return this.fname+" "+this.lname+" "+this.age;
//     }
// }

// const person1=new Person1("Asad","Ali",20);
// console.log(person1.getFullName());

function student(name,rollno){
    this.name=name;
    this.rollno=rollno;
    
}
student.prototype.getDetails=function(){
    return "My Name is " + this.name+"\nMy RollNumber  is " +this.rollno;
}
const student1=new student("Haseeb Rajpoot ","5019");
console.log(student1.getDetails());
const student2=new student("Asad Butt ","5026");
console.log(student2.getDetails());