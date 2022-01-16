const clock = document.querySelector('#clock');


let getClock = function() {
    const date = new Date;
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000);

//내가 경험한 실수는 이미 남이 경험했던 실수이고 이미 해당 함수를 만들어 뒀다. 

