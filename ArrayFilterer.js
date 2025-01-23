// Problem : The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

const students = [
  {
    name: "Ankit Singh",
    age: 20,
    class: "B.Tech CSE 2nd Year",
    bloodGroup: "B+",
  },
  {
    name: "Riya Sharma",
    age: 19,
    class: "B.Sc 1st Year",
    bloodGroup: "O+",
  },
  {
    name: "Aman Verma",
    age: 21,
    class: "MCA 1st Year",
    bloodGroup: "A-",
  },
  {
    name: "Priya Rajput",
    age: 22,
    class: "MBA 2nd Year",
    bloodGroup: "AB+",
  },
  {
    name: "Karan Mehta",
    age: 23,
    class: "M.Tech 2nd Year",
    bloodGroup: "O-",
  },
];

console.log(students);
let newList = students.filter((element)=>{
     element.age<21
})
console.log(newList)
