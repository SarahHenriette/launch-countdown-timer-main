var countDownDate = new Date("Mars 15, 2021 15:37:25").getTime();
let containDays = document.querySelectorAll('.contain-days .days')
let containHours = document.querySelectorAll('.contain-hours .hours')
let containMinutes = document.querySelectorAll('.contain-minutes .minutes')
let containSeconds = document.querySelectorAll('.contain-seconds .seconds')

// console.log(containHours)

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
 
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

    // Display the result in the element with id="demo"
    time(containDays, days)
    time(containHours, hours)
    time(containMinutes, minutes)
    time(containSeconds, seconds)

    function time(tab, time) {
        tab.forEach(element => {
            if(time < 10) {
                element.innerHTML = "0" + time
            }else {
                element.innerHTML =  time
            }
        });
    }
   
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);