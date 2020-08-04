const notifySection = document.getElementsByClassName("notify-section");
notifySection[0].style.display = "none";

document.querySelector('.generate-btn').addEventListener('click', function () {
  var fourDigitRandom = Math.floor(1000 + Math.random() * 9000);
  document.getElementsByClassName("form-control")[0].value = fourDigitRandom;
})
var button = document.getElementsByClassName("button");
var userPin = "";
var displayArea = document.getElementsByClassName("form-control")[1];

for (var i = 0; i < button.length; i++) {

  if (button[i].id === "C") {
    button[i].addEventListener('click', function () {
      userPin = "";
      displayArea.value = userPin;
    })

  }
  else if (button[i].id === "<") {
    button[i].addEventListener('click', function () {
      userPin = userPin.substring(0, userPin.length - 1);
      displayArea.value = userPin;
    })
  }
  else {
    button[i].addEventListener('click', function () {
      console.log(this.id);
      userPin = userPin + this.id;
      displayArea.value = userPin;


    })
  }


}
var submitArea = document.querySelector(".submit-btn");
submitArea.addEventListener('click', function () {
  console.log("done");
  let fourDigitRandom =  document.getElementsByClassName("form-control")[0].value;
  if (fourDigitRandom == userPin) {
    let pinMatched = document.getElementsByClassName('notify');
    pinMatched.style.display = "block";
  }
  else {
    let tryAgain = document.getElementsByClassName('notify');
    tryAgain.style.display = "block";
  }
})

