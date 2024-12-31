document.addEventListener('DOMContentLoaded', () => {
  const divTest = document.querySelector('#root');
  const btn = document.querySelector('#btnAdd');
  const mainCon = document.querySelector('#AddMain');
  const inputText = document.querySelector('#textInput');
  const todoItem = (todo) => {
    return `<li>${todo}</li> `
  }
  const addTodoItem = () =>{
    const Itemtodo = inputText.value
    mainCon.innerHTML += todoItem(Itemtodo);
    const deletebtn = document.createElement('button');
    deletebtn.textContent= 'delete';
    divTest.appendChild(deletebtn)
    deletebtn.addEventListener('click', () => {
      deletebtn.remove()
    })
  }
 
  btn.addEventListener('click', () =>{
    addTodoItem()
    darkMode()
  inputText.value = ''
  })
  const darkMode = () => {
    const darkmode = document.querySelector('body')
   if(darkmode.className !== 'darkmode'){
    darkmode.className= 'darkmode'
   }else{
    darkmode.classList.remove('darkmode');

   }
  }
})
