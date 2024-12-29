const people = [{
  "name":"Alvin",
  "age":22,
  "power":"fire"

},
{
  "name":"wiw",
  "age":10,
  "power":"water"

}];
const people2 ={name:"dragon"};
const people3 ={age:"1000"};
const people4 = {power:"flame"};
// spread Operator adding object
const people6 ={...people2, ...people3, ...people4};
const people5 = [...people,{"name":"lokoloko", "age":"100" , "power": "invisible"}, people6];
// console.log(people5);

//destructuring
const {name, age, power} = people;
//loops 
const names = people5.map(person => person.name)
// console.log(names)

people5.map(({name, age, power})=>{
  // console.log(`${name} ${age} ${power}`)
})
Object.keys(people5).forEach(value => {
  console.log(people5[value])
})

let objkeys = Object.keys(people5)
for(const value of objkeys){
  console.log(`${value}`, people5[value])
}