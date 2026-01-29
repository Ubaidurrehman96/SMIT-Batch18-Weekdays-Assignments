var input = prompt("enter your age (yy-mm-dd");
var dob = new Date(input);
var today = new Date();

var diff = today - dob;

var totalSeconds = Math.floor(diff / 1000);
var totalMinutes = Math.floor(totalSeconds / 60);
var totalhours = Math.floor(totalMinutes / 60);
var totaldays = Math.floor(totalhours / 24);
var year = Math.floor(totaldays /365);

var remainingDays = totaldays % 365;

var month = Math.floor(remainingDays / 30);

var days = Math.floor(remainingDays%30);

document.write("Exact age calculator <br>")
document.write(year + "<br>");
document.write(days + "<br>");
document.write(totalhours + "<br>");
document.write(totalMinutes + "<br>");
document.write(totalSeconds);
