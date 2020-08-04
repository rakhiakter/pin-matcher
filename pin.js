let notifySection = document.getElementsByClassName("notify");
notifySection[0].style.display = "none";
notifySection[1].style.display = "none";
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
  let fourDigitRandom = document.getElementsByClassName("form-control")[0].value;
  userPin = document.getElementsByClassName("form-control")[1].value;
  if (fourDigitRandom == userPin
    && fourDigitRandom != ''
    ) {
    let pinMatched = notifySection[1];
    pinMatched.style.display = "block";
  }
  else {
    let tryAgain = notifySection[0];
    tryAgain.style.display = "block";
  }
})


