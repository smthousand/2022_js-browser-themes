const greeting = document.querySelector(".main__greeting");
const userInterface = document.querySelector(".main__user-interface"); 

const loginForm = document.querySelector(".login__form");
const loginInput = document.querySelector(".login__form input");

const HIDDEN_CLASSNAME = "hidden" 
// string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용함
// 중요한 정보가 아님

function onLoginSubmit(event) {
    event.preventDefault();
    const valueResult = loginInput.value;
    greeting.classList.add(HIDDEN_CLASSNAME);
    userInterface.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);


// const greeting = document.querySelector(".main__greeting"); 
// const userInterface = document.querySelector(".main__user-interface"); 

// const loginForm = document.querySelector(".login__form");
// const loginInput = document.querySelector(".login__form input");

// const HIDDEN_CLASSNAME = "hidden" 
// // string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용함
// // 중요한 정보가 아님

// function onLoginSubmit(event) {
//     event.preventDefault();
//     const valueResult = loginPassword.value;
//     greeting.classList.add(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit", onLoginSubmit);