function changeText(mode) {
    document.getElementById('paragraph').innerText = mode + " mode";
    document.getElementById('body').className = mode;
}

function changeBoxColor(colorBox) {
    const box = document.getElementById('boxColor');
    box.classList.remove('blue', 'red', 'green');
    box.classList.add(colorBox);
}

function changeNum(value) {
    let number = document.getElementById('number');
    let currentNum = parseInt(number.textContent);
    number.textContent = currentNum + value;
}

function checkNum() {
    let number = document.getElementById('guess');
    let currentNum = parseInt(number.value);
    let answer = document.getElementById('result');

    answer.textContent = isNaN(currentNum) ? 'invalid number' : (currentNum % 2 == 0) ? 'even' : 'odd';
}

function addTodo(){
    const input = document.getElementById('item');
    const text = input.value.trim();
    if(text === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = text;

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    
    const delt = document.createElement('button');
    delt.textContent = 'delete';
    delt.onclick = () => li.remove();

    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(delt);

    document.getElementById('todoItems').appendChild(li);

    input.value = '';
}

function favoriteMovie(){
    const favoriteMovies = [
        {title: "Your name", image: "img/yourName.jpeg"},
        {title: "5 Centimeters per second", image: "img/5cmPerSecond.jpeg"},
        {title: "End Game", image: "img/EndGame.jpeg"},
        {title: "Far From Home", image: "img/FarFromHome.jpeg"},
        {title: "Home coming", image: "img/HomeComing.jpeg"}
    ];

    const movieList = document.getElementById('movieList');

    for(let i = 0; i < favoriteMovies.length; i++){
        const li = document.createElement('li');
        const title = document.createElement('p');
        title.textContent = favoriteMovies[i].title;
        const  img = document.createElement('img');
        img.src = favoriteMovies[i].image;
        img.alt = favoriteMovies[i].title + " cover";
        img.className = "movieCover";

        li.appendChild(title);
        li.appendChild(img);
        movieList.appendChild(li);
    }
}
    
favoriteMovie();


const quotes = [
    "Love the Journey, Not the Destination.",
    "You don't have to be the brightest, just don't stop glowing",
    "It takes losing yourself to find yourself",
    "You can't score if you don't shoot"
];

document.getElementById('quoteBtn').addEventListener('click', randomquote);

function randomquote(){
    const qoute = document.getElementById('quote');
    let num = Math.floor(Math.random() * quotes.length);
    qoute.textContent = quotes[num];
}

// stop watch
let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0,];
let time = document.getElementById("time");
let timmer = null;

function stopWatch() {
    miliseconds++;
    if(miliseconds == 10) {
        seconds++;
        miliseconds = 0;
        if(seconds == 60) {
            minutes++;
            seconds = 0;
            if(minutes == 60) {
                hours++;
                minutes = 0;
            }
        }
    }

    let h = hours < 10 ? "0"+hours : hours;
    let m = minutes < 10 ? "0"+minutes : minutes;
    let s = seconds < 10 ? "0"+seconds : seconds;
    let mil = miliseconds < 10 ? "0"+miliseconds : miliseconds;

    time.innerHTML = h + ":" + m + ":" + s + "." + mil;
}

function startStopWatch() {
    if(timmer != null) {
        clearInterval(timmer);    
    }

    timmer = setInterval(stopWatch, 100);

}

function pauseStopWatch() {
    clearInterval(timmer);
    timmer = null;
}

function replayStopWatch() {
    clearInterval(timmer);
    [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0,];
    timmer = null;
    time.innerHTML = "00:00:00.00";
}