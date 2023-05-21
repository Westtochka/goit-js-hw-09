const refs={start:document.querySelector('[data-start]'),
stop:document.querySelector('[data-stop]'),
body:document.querySelector('body')
}
let timerId = null;
refs.stop.disabled=true
refs.start.addEventListener('click',()=>{timerId = setInterval(addBodyColor, 1000)} );

function addBodyColor(){
    refs.body.style.backgroundColor = getRandomHexColor(),
//     refs.start.setAttribute('disabled', true),
refs.start.disabled=true
//     refs.stop.removeAttribute('disabled')
refs.stop.disabled=false
};
refs.stop.addEventListener("click", () => {
        clearInterval(timerId),
        refs.start.removeAttribute('disabled'),
        refs.stop.setAttribute('disabled', true)
});

function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};
