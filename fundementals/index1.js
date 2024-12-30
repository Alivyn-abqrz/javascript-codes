const price = document.querySelectorAll('.price');
const btntotal = document.querySelector('#btn');
const totalInput = document.querySelector('#total')

btntotal.addEventListener('click', () =>{
  let sum = 0;
  for(let i = 0; i < price.length; i++){
    sum += Number(price[i].value)
  }
  totalInput.value =sum
})