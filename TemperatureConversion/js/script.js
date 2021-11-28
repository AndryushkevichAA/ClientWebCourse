document.addEventListener("DOMContentLoaded", function () {
    var celsiusDegree = document.getElementById("celsius-degree");
    var convertButton = document.getElementById("convert-button");
    var fahrenheitDegree = document.getElementById("fahrenheit-degree");
    var kelvin = document.getElementById("kelvin");
    var errorMessage = document.querySelector(".error-message")

    convertButton.addEventListener("click", function () {
        var degree = celsiusDegree.value.trim();

        celsiusDegree.classList.remove("invalid");

        if (isNaN(degree)) {
            celsiusDegree.classList.add("invalid");
            errorMessage.textContent = "Degree must be a number";

            fahrenheitDegree.textContent = "";
            kelvin.textContent = "";

            return;
        }

        if (degree.length === 0) {
            celsiusDegree.classList.add("invalid");
            errorMessage.textContent = "The input field must not be empty";

            fahrenheitDegree.textContent = "";
            kelvin.textContent = "";

            return;
        }

        fahrenheitDegree.textContent = String(degree * (9 / 5) + 32);
        kelvin.textContent = String(+(degree) + 273.15);
    });
});