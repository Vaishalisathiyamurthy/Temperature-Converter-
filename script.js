const input = document.getElementById('temperatureInput');
const radios = document.getElementsByName('conversion');
const result = document.getElementById('result');

function convertTemperature() {
  const value = parseFloat(input.value);
  if (isNaN(value)) {
    result.textContent = 'Please enter a valid number.';
    return;
  }

  let converted;
  if (radios[0].checked) {
    converted = (value * 9/5) + 32;
    result.textContent = ${value}°C = ${converted.toFixed(2)}°F;
  } else {
    converted = (value - 32) * 5/9;
    result.textContent = ${value}°F = ${converted.toFixed(2)}°C;
  }
}

input.addEventListener('input', convertTemperature);
radios.forEach(radio => radio.addEventListener('change', convertTemperature));