// json fetching data 
let list = ""
fetch("json.json")
.then(res => res.json())
.then((datas) => {
  datas.users.forEach((data) =>{
 list += `<li>${data.name}<li>`
  });
  document.querySelector("ul").innerHTML = list;
})
.catch(error => console.error(`Error:${error}`))




