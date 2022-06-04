function calculate() {
    var height = document.getElementById("field_height").value;
    var mass = document.getElementById("field_mass").value;
    var result = document.getElementById("result");

    var bmi = mass/Math.pow(height, 2);

    result.textContent = "Your body mass index is " + bmi + " kg/m²";
    result.textContent = "Your body mass index is " + bmi + " kg/m²";
}