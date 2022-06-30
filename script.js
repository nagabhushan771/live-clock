const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();

    const secDegree = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secDegree}deg)`;

    const minDegree = ((minute/60)*360)+90 + (seconds/60)*6;
    minuteHand.style.transform = `rotate(${minDegree}deg)`;

    const hourDegree = ((hour/60)*360)+90 + (minute/60)*6;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setTime, 1000);
setTime();