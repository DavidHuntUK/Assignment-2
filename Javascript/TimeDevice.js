// Some code taken from https://codepen.io/codifiedconcepts/pen/bwgxRq and personalised to fit my own Website.

// var noon = 12;


// var showCurrentTime = function()
// {
//     var clock = document.getElementById('clock');

//     var showCurrentTime = new Date();

//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
//     var timing = "AM";

//     // HOURS
//     if (hours >= noon)
//     {
//         timing = "PM"
//     }

//     if (hours > noon)
//     {
//          hours = hours - 12
//     }


//     // MINS
//     if (minutes < 10)
//     {
//         minutes = "0" + minutes;
//     }

//     // SECS
//     if (seconds < 10)
//     {
//         seconds = "0" + seconds;
//     }

//     // STRING TO SHOW THE TIME
//     var clockTime = hours + ':' + minutes + ':' + seconds +
//     '' + timing ;

//     clock.innerText = clockTime; 
// }





        // Attempt 2

// Code Referenced from https://codepen.io/afarrar/pen/JRaEjP

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("Clock").innerText = time;
    document.getElementById("Clock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

