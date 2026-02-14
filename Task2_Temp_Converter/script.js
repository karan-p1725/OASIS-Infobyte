function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (temp === "" || isNaN(temp)) {
        result.innerHTML = "Please enter a valid number";
        return;
    }

    temp = Number(temp);

    if (unit === "celsius") {
        let fahrenheit = (temp * 9/5) + 32;
        result.innerHTML = fahrenheit.toFixed(2) + " °F";
    } 
    else if (unit === "fahrenheit") {
        let celsius = (temp - 32) * 5/9;
        result.innerHTML = celsius.toFixed(2) + " °C";
    }   
    else if (unit === "kelvin") {
        let celsius = temp - 273.15;
        result.innerHTML = celsius.toFixed(2) + " °C";
    } 
    else {
        result.innerHTML = "Please select a unit";
    }
}