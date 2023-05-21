
import { Notify } from 'notiflix';

const form=document.querySelector('form')
const amountInput=document.querySelector('[amount]')
const delayInput =document.querySelector('[delay]')
const stepInput=document.querySelector('[step]')
const btnCreate=document.querySelector('button')


form.addEventListener('submit',submitForm)
let position =0;


function createPromise(position, delay){
return new Promise((resolve, reject)=> {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay })
  } else {
    reject({ position, delay })
  }
  }, delay);
});}

function submitForm (evt){
  evt.preventDefault();
// const amount = Number(amountInput.value);
// const delay = Number(delayInput.value);
// const step = Number(stepInput.value);
  createPromise()
.then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
// function createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });



