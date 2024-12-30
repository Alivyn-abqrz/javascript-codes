const sampleArray = [
  { id: 1, name: "Alice", age: 25, role: "developer" },
  { id: 2, name: "Bob", age: 30, role: "designer" },
  { id: 3, name: "Charlie", age: 22, role: "developer" },
  { id: 4, name: "Diana", age: 28, role: "manager" },
  { id: 5, name: "Eve", age: 35, role: "developer" },
];
// using push - add element in last row
sampleArray.push({id:6,name:"alfred", age:32, role:"designer"});
// using unshift - add element in first row
sampleArray.unshift({id:0, name:"mike", age:27, role:"designer"});
console.log(sampleArray)
// using shift -remove the first element
sampleArray.shift();
// using shift - remove the last element
sampleArray.pop();
//foreachz
document.querySelector('#btnShow').addEventListener('click', () => {
  let paragraph = "";
  sampleArray.forEach(({name, age, role})=>{
   paragraph += `<p> Name:${name}, Age:${age}, Role:${role} </p>`
  });
  document.querySelector(".wiw").innerHTML= paragraph
})
// destructuring
const [person1, person2, person4, person5]=sampleArray;
console.log(person1.name)
//spread Operator
 const sampleArrayNew  = [...sampleArray, {id:6, name:"alvin", age:22, role:"developer"}]
 console.log(sampleArrayNew)
// for each loop
sampleArrayNew.forEach((value)=>{
  console.log(value.name)
});
//map
const roles = sampleArrayNew.map(value => value.role)
console.log(roles)
// filter
const developer = sampleArrayNew.filter(value =>   value.role === 'developer')
console.log(developer)
// find first person 
const Lessthan30 = sampleArrayNew.find((value) => value.age < 30);

console.log(Lessthan30)