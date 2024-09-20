import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// без делегування :(
const formEl = document.querySelector('form');
const formInputEl = document.querySelector('input[name = "delay"]');
const radioFulfilledBtnEl = document.querySelector('input[value = "fulfilled"]');
const radioRejectedBtnEl = document.querySelector('input[value = "rejected"]');
const submitBtnEl = document.querySelector('button[ type="submit"]');

formEl.addEventListener('submit', submitHandler);
formInputEl.addEventListener('input', inputHandler);
radioFulfilledBtnEl.addEventListener('change', radioHandler);
radioRejectedBtnEl.addEventListener('change', radioHandler);

let delay = 0;
function inputHandler(evt) {
  delay = Number(formInputEl.value);
}
let isSuccess = true;

function radioHandler(evt) {
  isSuccess = evt.target.value;
}

function submitHandler(evt) {
  evt.preventDefault();
  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess === 'fulfilled') {
        resolve('Success! Value passed to resolve function');
      } else {
        reject('Error! Error passed to reject function');
      }
    }, delay);
  });

  newPromise
    .then(value => {
      iziToast.success({
        position: 'topRight',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(value => {
      iziToast.error({
        position: 'topRight',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
}
