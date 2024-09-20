// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const btnEl = document.querySelector('[data-start]');
const dayEl = document.querySelector('[data-days]');
const hourEl = document.querySelector('[data-hours]');
const minuteEl = document.querySelector('[data-minutes]');
const secondEl = document.querySelector('[data-seconds]');
const dateTimePicker = document.querySelector('#datetime-picker');

btnEl.addEventListener('click', btnElHandler);
let intervalId = null;
let userSelectedDate = null;
btnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    console.log(userSelectedDate);
    validateDate();
  },
};

flatpickr(dateTimePicker, options);

function validateDate() {
  if (userSelectedDate < Date.now()) {
    window.alert('Please choose a date in the future');
  }
  btnEl.disabled = false;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function btnElHandler() {
  dateTimePicker.disabled = true;
  btnEl.disabled = true;

  intervalId = setInterval(updateTimeField, 1000);
  return;
}

function updateTimeField() {
  const curentTime = userSelectedDate - new Date();

  if (curentTime <= 0) {
    dateTimePicker.disabled = false;
    clearInterval(intervalId);
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(curentTime);

  dayEl.textContent = String(days).padStart(2, 0);
  hourEl.textContent = String(hours).padStart(2, 0);
  minuteEl.textContent = String(minutes).padStart(2, 0);
  secondEl.textContent = String(seconds).padStart(2, 0);
}
