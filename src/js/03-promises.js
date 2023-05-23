
import { Notify } from 'notiflix';

const form=document.querySelector('form')
const amountInput=document.querySelector('[name="amount"]')
const delayInput =document.querySelector('[name="delay"]')
const stepInput=document.querySelector('[name="step"]')
const btnCreate=document.querySelector('button')


form.addEventListener('submit',submitForm)

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

const amount = Number(amountInput.value);
const delay = Number(delayInput.value);
const step = Number(stepInput.value);
  if(amount<0 || delay<0 || step<0 ){Notify.warning(
    `Enter number more than 0`
  )}
  
  else if(Number(amount) === 0) {
    Notify.warning(`Enter number more than 0`);
  } 
  
  else{
    for (let i = 0; i <= amount; i++) {

      createPromise(i, delay + step * i)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`);
        });
    }
  };
 form.reset()
}




