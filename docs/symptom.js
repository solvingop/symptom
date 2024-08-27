function checkSymptoms() {
    const hazardousSymptoms = ['Chest Pain', 'Shortness of Breath', 'Severe Headache', 'Fainting'];
    let selectedSymptoms = [];
    let checkboxes = document.querySelectorAll('input[name="symptoms"]:checked');
    
    checkboxes.forEach((checkbox) => {
        selectedSymptoms.push(checkbox.value);
    });

    let isHazardous = selectedSymptoms.some(symptom => hazardousSymptoms.includes(symptom));

    let result = document.getElementById('result');
    if (isHazardous) {
        result.innerHTML = "Warning: You may have symptoms of a hazardous condition. Please consult a healthcare provider immediately.";
        result.style.color = "red";
    } else if (selectedSymptoms.length > 0) {
        result.innerHTML = "Your symptoms do not indicate a hazardous condition, but it's always good to consult a professional if you're concerned.";
        result.style.color = "green";
    } else {
        result.innerHTML = "Please select at least one symptom to check.";
        result.style.color = "black";
    }
}
