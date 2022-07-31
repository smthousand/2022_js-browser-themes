const API_KEY = "866852daf250fb7f0579a38b4a738176"

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector(".weather__info h1")
            const city = document.querySelector(".weather__info span")
            weather.innerText = `${data.weather[0].main}, ${Math.ceil(data.main.temp)}℃`;
            city.innerText = data.name;
        });
    // promise 약속 ==> 당장 일어나지 않고 시간이 좀 흐른 뒤에 일어남
    // Promise.prototype.then()
}

function onGeoError() {
    alert("위치 정보를 받아올 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);