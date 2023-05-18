import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

startBtn=document.querySelector('#data-start');
inputDate=document.querySelector('#datetime-picker');
const targetDate=new Date('Jan 1, 2024 00:00:00');

setInterval(()=>{
const currentDataMs=Date.now();
const targetDateinMs=targetDate.getTime();

const distanceToTargetDate=targetDateinMs - currentDataMs;

const oneSecondInMs = 1000;
const oneMinuteInMs = oneSecondInMs * 60;
const oneHourInMs = oneMinuteInMs * 60;
const oneDayInMs = oneHourInMs * 24;
const daysRemaining = Math.floor(distanceToTargetDate / oneDayInMs);
const hoursRemaining= Math.floor((distanceToTargetDate % oneDayInMs)/oneHourInMs); 
const minutesRemaining=Math.floor((distanceToTargetDate % oneHourInMs)/oneMinuteInMs)
const secondsRemaining=Math.floor((distanceToTargetDate % oneMinuteInMs)/oneSecondInMs)
console.log(daysRemaining)
console.log(hoursRemaining)
console.log(minutesRemaining)
console.log(secondsRemaining)
}, 1000)

