import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn=document.querySelector('[data-start]');
const inputDate=document.querySelector('#datetime-picker');
const daysTimer=document.querySelector('[data-days]')
const hoursTimer=document.querySelector('[data-hours]')
const minutesTimer=document.querySelector('[data-minutes]')
const secondsTimer=document.querySelector('[data-seconds]')

const oneSecondInMs = 1000;
const oneMinuteInMs = oneSecondInMs * 60;
const oneHourInMs = oneMinuteInMs * 60;
const oneDayInMs = oneHourInMs * 24;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // if selectedDates.getUTCMilliseconds()>
    console.log(selectedDates[0].value);
const targetDate=new Date(selectedDates);

  },
};
// startBtn.setAttribute('disabled', true)   //кнопка неактивна


flatpickr(inputDate, options)

new Date (inputDate.value)
console.log(inputDate.value)


startBtn.addEventListener('click',makeTimer)
function makeTimer(){
setInterval(()=>{
const currentDataMs=Date.now();
const targetDateinMs=targetDate.getTime();

const distanceToTargetDate=targetDateinMs - currentDataMs;

// const oneSecondInMs = 1000;
// const oneMinuteInMs = oneSecondInMs * 60;
// const oneHourInMs = oneMinuteInMs * 60;
// const oneDayInMs = oneHourInMs * 24;
const daysRemaining = Math.floor(distanceToTargetDate / oneDayInMs);
const hoursRemaining= Math.floor((distanceToTargetDate % oneDayInMs)/oneHourInMs); 
const minutesRemaining=Math.floor((distanceToTargetDate % oneHourInMs)/oneMinuteInMs)
const secondsRemaining=Math.floor((distanceToTargetDate % oneMinuteInMs)/oneSecondInMs)
daysTimer.textContent=daysRemaining
hoursTimer.textContent=hoursRemaining
minutesTimer.textContent=minutesRemaining
secondsTimer.textContent=secondsRemaining
}, 1000)};








//1.Додати бібліотеку дата в инпуті
//2.При виборі дати перевіряти чи не знаходиться вона в минулому
//3.Повісити слухача на кнопку клік і зробити її одразу неактивною і
//  на інпут при вводі перевіряти дату, щоб була більше за дату, яка заразб 
