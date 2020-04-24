/* CLOCK CODE */
// Code Referenced from https://codepen.io/afarrar/pen/JRaEjP

// The time Variables
function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    // Beginning of an IF statement to show if the time is before 12PM, it will say AM otherwise PM
    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    // Shows the lay out of the Time format 00:00:00
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("Clock").innerText = time;
    document.getElementById("Clock").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();