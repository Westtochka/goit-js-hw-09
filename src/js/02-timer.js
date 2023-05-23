import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn=document.querySelector('button[data-start]');
const inputDate=document.querySelector('#datetime-picker');

const daysTimer=document.querySelector('[data-days]')
const hoursTimer=document.querySelector('[data-hours]')
const minutesTimer=document.querySelector('[data-minutes]')
const secondsTimer=document.querySelector('[data-seconds]')
let timerId;//нужен для очистки интервала
let inputCurrentDate=null;// будет равен дате, которую вібрали в инпуте
let differTime = null;//разница между вводом и настоящей датой

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDataMs=Date.now()
    if (selectedDates[0]-currentDataMs<0){//дата выбранная через библиотеку[0]-стартовая дата-это дата сейчас
      startBtn.disabled=true,
      Notify.failure('Please choose a date in the future');
    }
    else {startBtn.disabled=false  
      inputCurrentDate=selectedDates[0];//дату, которую выбрали в инпуте=дате, которую возвращает библиотекаб т.е. эти данные отображаются в инпуте
  }
  }}

flatpickr(inputDate, options)

startBtn.addEventListener('click',onStartBtn)

function onStartBtn(e){//эта функция каждую секунду сравнивает 2 даты-введенную и сейчас
  startBtn.disabled = true;
  inputDate.disabled = true;
// кнопка и инпут неактивні
//считаем разницу между датой, выбранной в инпуте и сегодня. 
  timerId=setInterval(()=>{
const currentData=Date.now()//дата, которая сейчас
const differTime = inputCurrentDate - currentData;//разница между выбранной пользователем датой и между датой сейчас 
const time=convertMs(differTime)
createInterfaceTimer(time)// передаем данные для замещения их в тексконтент и отображении на экране
if(differTime< 1000){//если разница  <1000 мили секунд!!!, Т.Е. НУЖНО ОСТАНОВИТЬ СЧЕТЧИК      с минусом, то время в прошлом и удаляем по ид сет интервалб делаем кнопки и поле инпута неактивными
  clearInterval(timerId);
  startBtn.disabled = false;
  inputDate.disabled = false;
  console.log(differTime)
  return;
}}, 1000);
}
//эта функция или блокирует или передает данные на экран в текстконтент
function createInterfaceTimer({daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining}){
    daysTimer.textContent=`${daysRemaining}`;
    hoursTimer.textContent=`${hoursRemaining}`;
    minutesTimer.textContent=`${minutesRemaining}`;
    secondsTimer.textContent=`${secondsRemaining}`;
  
}

function addLeadingZero(value){
  return String(value).padStart(2, '0');
}

//эта функция конвертирует полученные данные из инпута в милисекундах -в дни, часы, минуты, секунды и выодит объект с этими данными
// конвертор, переводим данные в мс => в дни, часы,
//  минуты, секунды

function convertMs(ms){
  const oneSecondInMs = 1000;
  const oneMinuteInMs = oneSecondInMs * 60;
  const oneHourInMs = oneMinuteInMs * 60;
  const oneDayInMs = oneHourInMs * 24;

const daysRemaining = addLeadingZero(Math.floor(ms / oneDayInMs));
const hoursRemaining= addLeadingZero(Math.floor((ms % oneDayInMs)/oneHourInMs)); 
const minutesRemaining=addLeadingZero(Math.floor((ms % oneHourInMs)/oneMinuteInMs));
const secondsRemaining=addLeadingZero(Math.floor((ms % oneMinuteInMs)/oneSecondInMs));

return {daysRemaining,hoursRemaining, minutesRemaining, secondsRemaining};
};


  