function fahrenheit() {
    var field = document.getElementById("num1").value;

    var result = (field * 9 / 5) + 32;
    if (!isNaN(result)) {
        document.getElementById("answer").innerHTML = field + "&#176;C is " + result + "&#176;F";
    }
}
function celsius() {
    var field = document.getElementById("num1").value;

    var result = (field - 32) * 5 / 9;
    if (!isNaN(result)) {
        document.getElementById("answer").innerHTML = field + "&#176;F is " + result + "&#176;C";
    }
}