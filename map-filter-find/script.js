const sampleArray = [
  { id: 1, name: "Alice", age: 25, role: "developer" },
  { id: 2, name: "Bob", age: 30, role: "designer" },
  { id: 3, name: "Charlie", age: 22, role: "developer" },
  { id: 4, name: "Diana", age: 28, role: "manager" },
  { id: 5, name: "Eve", age: 35, role: "developer" },
];

// find
const finddata = sampleArray.find((data) => data.role === 'manager')
console.log(finddata)
// filter
const filterdata = sampleArray.filter((data) => data.role === 'developer')
console.log(filterdata)
// map
const mapdata = sampleArray.map((data)=>{
  if (data.role === 'designer'){
    return {...data, role2:'Ux designer'}
  }else{
    return data
  }
})
console.log(mapdata)

const amount = [192, 345, 543, 123, 90];
let sum = amount.reduce((accomulate, currentVal)=>{
  return accomulate += currentVal
});
console.log(sum)

let letter = ['ab','cd','ef']
let sumletter = letter.reduce((accomulate, current)=> {
  return [...accomulate, {letter:current}]
},[])
console.log(sumletter)