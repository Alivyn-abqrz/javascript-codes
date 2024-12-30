// using promises and axois
const fetch = () => {
  let users = 'users'
 const result = axios({
    url:`https://jsonplaceholder.typicode.com/${users}`,
    method:'GET'
  }).then((respone)=>{
    return respone
  }).catch((reject)=>{
    return reject
  })
  return result
}
fetch().then((data) => {
  console.log(data.data[0].name)
})



// let fetch = () =>{
//   return new Promise((resolve, reject) =>{
//     let data = false;
//     setTimeout(() => {
//       data = true;
//       resolve(data)
//     }, 5000)
//   })
// }
// let display = (data) => {
//   console.log(data)
// }

// fetch().then((resolveIt)=>{
//   display(resolveIt)
// });

// let fetch = () => {
//   return new Promise((resolve, reject) => {
//     let i = "alvino";
//     if (i === 'alvin'){
//       resolve(true)
//     }else{
//       reject(false)
//     }
//   })
// }


// fetch().then((resolveIt) => {
//   console.log(resolveIt)
// }).catch((fromReject) => {
//   console.log(fromReject)
// })
