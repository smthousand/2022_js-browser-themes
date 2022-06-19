const greeting = document.querySelector(".main__greeting");
const userInterface = document.querySelector(".main__user-interface"); 

const loginForm = document.querySelector(".login__form");
const loginInput = document.querySelector(".login__form input");

const HIDDEN_CLASSNAME = "hidden" 

function onLoginSubmit(event) {
    event.preventDefault();
    // const valueResult = loginInput.value;
    greeting.classList.add(HIDDEN_CLASSNAME);
    userInterface.classList.remove(HIDDEN_CLASSNAME);
}


const imagesArray = ["welcome.gif", "sign-visual.png", "sign-visual.gif"];
const randomButton = document.querySelector(".login__random-btn");
const loginImg = document.querySelector(".login__img");

function changeImagesHandler() {
    const mainVisual = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    loginImg.src = `images/${mainVisual}`;
}


loginForm.addEventListener("submit", onLoginSubmit);
randomButton.addEventListener("click", changeImagesHandler);