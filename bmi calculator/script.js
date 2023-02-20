function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100;
    const bmi = weight / (height * height);
    const result = document.getElementById("result");
   if(weight >= 0 && height >= 0) {

    if (bmi < 18.5) {
      result.style.color = 'red';
      result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are underweight.`;
    } else if (bmi >= 18.5 && bmi < 25) {
      result.style.color = 'green';
      result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are of normal weight.`;
    } else if (bmi >= 25 && bmi < 30) {
      result.style.color = 'red';
      result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
    } else {
      result.style.color = 'red';
      result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are obese.`;
    }
  }
  else {
    alert("Invalid input. Height and Weight cannot be negative");
  }
}
  