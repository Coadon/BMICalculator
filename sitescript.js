function calculate() {
    var height = document.getElementById("field_height").value;
    var mass = document.getElementById("field_mass").value;
    var result_bmi = document.getElementById("result_bmi");
    var result_cat = document.getElementById("result_cat");
    var result_head = document.getElementById("results_heading");

    var bmi = mass/Math.pow(height, 2);

    // Get BMI category
    var category;
    if (bmi < 16.0) {
        category = "underweight (severe thinness)";
    } else if (bmi < 17.0) {
        category = "underweight (moderate thinness)";
    } else if (bmi < 18.5) {
        category = "underweight (mild thinness)";
    } else if (bmi < 25.0) {
        // Normal range
        category = "in good shape :D ";
    } else if (bmi < 30.0) {
        category = "overweight";
    } else if (bmi < 35.0) {
        category = "obese (class I)";
    } else if (bmi < 40.0) {
        category = "obese (class II)";
    } else {
        category = "obese (class III)";
    }

    result_head.hidden = false;
    result_bmi.textContent = "Your body mass index is " + bmi + " kg/m²";
    result_cat.textContent = "You are " + category + ".";
}