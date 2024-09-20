// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const btnEl = document.querySelector('[data-start]');
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

flatpickr('#datetime-picker', options);

function validateDate() {
  if (userSelectedDate < Date.now()) {
    window.alert('Please choose a date in the future');
  }
  btnEl.disabled = false;
}

console.dir(btnEl);
