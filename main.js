window.onload = function() {
  alert("Alert Alert ");
      alert("It's 29 july 12 AM ");
      alert("Happy Birthday Master");

    var merrywrap = document.getElementById("merrywrap");
    var box = merrywrap.getElementsByClassName("giftbox")[0];
    var step = 1;
    var stepMinutes = [2000, 2000, 1000, 1000];
  
    function init() {
      box.addEventListener("click", openBox, false);
    }
  
    function stepClass(step) {
      merrywrap.className = 'merrywrap';
      merrywrap.className = 'merrywrap step-' + step;
    }
  
    function openBox() {
      if (step === 1) {
        box.removeEventListener("click", openBox, false);
      }
      stepClass(step);
      if (step === 3) {}
      if (step === 4) {
        window.location.href = 'mahi.html';
        // Open sai.html with a pop-in effect
        // var win = window.open("mahi.html");
        // win.focus();
        // return;
      }
      setTimeout(openBox, stepMinutes[step - 1]);
      step++;
    }
  
    init();
  }
  