function calculateBMI() {
    const name = document.getElementById('user-name').value;
    const weight = parseFloat(document.getElementById('user-weight').value);
    const heightInput = document.getElementById('user-height').value.trim();
    const resultsDiv = document.getElementById('results');

    if (!name || isNaN(weight) || !heightInput) {
        resultsDiv.innerHTML = "⚠️ Please fill in all fields correctly.";
        return;
    }

    // Convert height from feet & inches to meters
    const heightParts = heightInput.split("'");
    if (heightParts.length !== 2 || isNaN(heightParts[0]) || isNaN(heightParts[1])) {
        resultsDiv.innerHTML = "⚠️ Invalid height format. Use format like 5'4\".";
        return;
    }

    const feet = parseInt(heightParts[0]);
    const inches = parseInt(heightParts[1]);
    const heightInMeters = ((feet * 12 + inches) * 0.0254);

    const bmi = weight / (heightInMeters * heightInMeters);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    resultsDiv.innerHTML = `
        <p>${name}, your BMI is <strong>${bmi.toFixed(2)}</strong> — <em>${category}</em>.</p>
    `;
}
