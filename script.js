function calculateBMI() {
  const weight = parseFloat(document.getElementById('bmi-weight').value);
  const height = parseFloat(document.getElementById('bmi-height').value) / 100;
  if (!weight || !height) return alert('Podaj poprawne dane.');
  const bmi = weight / (height * height);
  let status = '';
  if (bmi < 18.5) status = 'Niedowaga';
  else if (bmi < 25) status = 'Waga prawidłowa';
  else if (bmi < 30) status = 'Nadwaga';
  else status = 'Otyłość';
  document.getElementById('bmi-result').textContent = `Twoje BMI: ${bmi.toFixed(2)} (${status})`;
}

function calculateTDEE() {
  const weight = parseFloat(document.getElementById('tdee-weight').value);
  const height = parseFloat(document.getElementById('tdee-height').value);
  const age = parseFloat(document.getElementById('tdee-age').value);
  const gender = document.getElementById('tdee-gender').value;
  const activity = parseFloat(document.getElementById('tdee-activity').value);

  if (!weight || !height || !age) return alert('Podaj poprawne dane.');

  let bmr;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const tdee = bmr * activity;
  document.getElementById('tdee-result').textContent = `Twoje TDEE: ${Math.round(tdee)} kcal`;
}

function calculateFatLoss() {
  const currentWeight = parseFloat(document.getElementById('current-weight').value);
  const targetWeight = parseFloat(document.getElementById('target-weight').value);
  const deficit = parseFloat(document.getElementById('daily-deficit').value);

  if (!currentWeight || !targetWeight || !deficit) return alert('Podaj poprawne dane.');

  const weightToLose = currentWeight - targetWeight;
  if (weightToLose <= 0) return alert('Już masz wagę docelową!');

  const kcalToBurn = weightToLose * 7700; // 1 kg tłuszczu ≈ 7700 kcal
  const days = kcalToBurn / deficit;
  const weeks = days / 7;

  document.getElementById('fatloss-result').textContent =
    `Musisz spalić ok. ${Math.round(kcalToBurn)} kcal. To zajmie ok. ${Math.ceil(weeks)} tygodni.`;
}
