// login and saved name
const loginForm = document.querySelector(".login__form");
const loginInput = document.querySelector(".login__form input");
const loginName = document.querySelector(".login__form input#name");

const windowUsername = document.querySelector(".header__window-username")

const greeting = document.querySelector(".main__greeting");
const userInterface = document.querySelector(".main__user-interface");
const statusBar = document.querySelector(".user-interface__status-bar"); 

const HIDDEN_CLASSNAME = "hidden" 
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    greeting.classList.add(HIDDEN_CLASSNAME);
    const username = loginName.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintLogins(username);
}

function paintLogins(username) {
    windowUsername.innerText = `${username}`;
    statusBar.classList.remove(HIDDEN_CLASSNAME);
    userInterface.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintLogins(savedUsername);
}

// random image
const imagesArray = ["welcome.gif", "sign-visual.png", "sign-visual.gif"];
const randomButton = document.querySelector(".login__random-btn");
const loginImg = document.querySelector(".login__img");

function changeImagesHandler() {
    const mainVisual = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    loginImg.src = `images/${mainVisual}`;
}

randomButton.addEventListener("click", changeImagesHandler);

