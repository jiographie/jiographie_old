const weather = document.querySelector('#weather span:first-child';)
const city = document.querySelector('#weather span:last-child';)
const API_KEY = ""

function onGeoOk(position) {
    const lat = position.coords.latitude;
    // const lng = position.coords.longitude;
    // console.log('You live in', lat, lng);
    const lon = position.coords.longtitude;
    // const url = 
}
function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);