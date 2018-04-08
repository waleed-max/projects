
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

toggle_color("#61beb3", "#90a2c6", 4000, 2000);

function toggle_color(color1, color2, cycle_time, wait_time) {

    setInterval(function first_color() {
        document.body.style.backgroundColor = color1;
        setTimeout(change_color, wait_time);
    }, cycle_time);

    function change_color() {
        document.body.style.backgroundColor = color2;
    }
} 


