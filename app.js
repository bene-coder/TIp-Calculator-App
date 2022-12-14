const billType = document.querySelector(".money-bill");
const tips = document.querySelectorAll(".tips");
const peopleNumber = document.querySelector(".people-no");
var tipAmount = document.querySelector(".tip-amount");
const total = document.querySelector(".total");
const reset = document.querySelector(".reset");
const error = document.querySelector(".error");

billType.addEventListener("input", billTypeFunc);
peopleNumber.addEventListener("input", peopleFunc);
reset.addEventListener("click", resetBtn);

tips.forEach(function (val) {
  val.addEventListener("click", handleEvent);
});

billType.value = "";
peopleNumber.value = "";
tipAmount.innerHTML = "$" + (0.0).toFixed(2);
total.innerHTML = "$" + (0.0).toFixed(2);

let billValue = billType.value;
let peopleValue = peopleNumber.value;
let tipValue = 0.15;

function billTypeFunc() {
  billValue = parseFloat(billType.value);
  calculateTip();
}

function peopleFunc() {
  peopleValue = parseFloat(peopleNumber.value);
  calculateTip();
}

function handleEvent(event) {
  tips.forEach(function (val) {
    val.classList.remove("active-tip");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("active-tip");
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipmount = (billValue * tipValue) / peopleValue;
    let totall = (billValue * tipValue) / peopleValue;
    tipAmount.innerHTML = "$" + tipmount.toFixed(2);
    total.innerHTML = "$" + totall.toFixed(2);
  }
  errorTag();
}

function resetBtn() {
  billType.value = "";
  peopleNumber.value = "";
  tipAmount.innerHTML = "$" + (0.0).toFixed(2);
  total.innerHTML = "$" + (0.0).toFixed(2);
}

function errorTag() {
  if (peopleValue == 0) {
    error.style.display = "flex";
      error.style.color = "red";
      peopleNumber.style.border = "red";
  } else {
      error.style.display = "none";
    }
}
