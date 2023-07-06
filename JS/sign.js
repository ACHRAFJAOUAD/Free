// sign up stuff

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// error message

let ErrorMsg = document.querySelector(".error-msg");
let btn = document.querySelector(".x");
let login = document.getElementById("login");
let sign = document.getElementById("sign");
let overlay = document.querySelector(".overlay");
let body = document.querySelector("body");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  ErrorMsg.classList.toggle("hide");
  ErrorMsg.classList.remove("show");
  overlay.classList.remove("active");
  body.classList.remove("active");
});

login.addEventListener("click", function (event) {
  event.preventDefault();
  ErrorMsg.classList.add("show");
  ErrorMsg.classList.remove("hide");
  overlay.classList.add("active");
  body.classList.add("active");
});
sign.addEventListener("click", function (event) {
  event.preventDefault();
  ErrorMsg.classList.add("show");
  ErrorMsg.classList.remove("hide");
  overlay.classList.add("active");
  body.classList.add("active");
});
