const notifySection= document.getElementsByClassName("notify-section");
notifySection[0].style.display = "none";
document.querySelector('.generate-btn').addEventListener('click', function(){
  var fourDigitRandom = Math.floor(1000 + Math.random() * 9000);
   document.getElementsByClassName("form-control")[0].value = fourDigitRandom;
    })
   var button = document.getElementsByClassName("button");
   var userPin = "";
   var displayArea = document.getElementsByClassName("form-control")[1];

   for( var i =0; i< button.length; i++){
       button[i].addEventListener('click', function(){
     userPin = userPin + this.id;
     displayArea.value = userPin;
        
        })
   }
  
      