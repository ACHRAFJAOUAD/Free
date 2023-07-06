const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// data of the user stock on google sheet

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  fetch(
    "https://script.google.com/macros/s/AKfycbxf8MqotNks9NE_P1NeVlF6rtCgYZBLqe1PGT72xIL5OSBEap6FdqbOwM13PndCFrfL/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => console.log(data));
});

// success of the data

let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
  window.location.href = "items.html";
}

let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (myForm.checkValidity()) {
    openPopup();
  } else {
    myForm.reportValidity();
  }
});
