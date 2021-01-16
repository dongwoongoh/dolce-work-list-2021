//clock.js//
const dateTitle = document.querySelector(".js-date__h1");
const clockTitle = document.querySelector(".js-clock__h1");

function getTime() {
    const date = new Date();
    const year = date.getFullYear();
    const mon = date.getMonth() + 1;
    const dates = date.getDate();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    dateTitle.innerText = `${year}.${mon <10 ? `0${mon}` : mon}.${
        dates <10 ? `0${dates}` : dates}`;
    clockTitle.innerText = `${hours <10 ? `0${hours}` : hours}:${
        min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`
};

function init() {
    getTime();
    setInterval(getTime,1000);
}

init();

//greeting.js//

const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".greetings");
const USER_LS = "currentUser";
const SHOWING = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreetings(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.remove(SHOWING);
    form.addEventListener("submit",handleSubmit);
}

function paintGreetings(text) {
    form.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}`;

}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    }
    else {
        paintGreetings(currentUser);
    }
}

function goLoadName() {
    loadName();
}

goLoadName();
