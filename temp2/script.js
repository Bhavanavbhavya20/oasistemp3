function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;

    let celsius, fahrenheit, kelvin;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    switch (inputUnit) {
        case 'celsius':
            celsius = inputValue;
            fahrenheit = (inputValue * 9/5) + 32;
            kelvin = inputValue + 273.15;
            break;
        case 'fahrenheit':
            celsius = (inputValue - 32) * 5/9;
            fahrenheit = inputValue;
            kelvin = (inputValue - 32) * 5/9 + 273.15;
            break;
        case 'kelvin':
            celsius = inputValue - 273.15;
            fahrenheit = (inputValue - 273.15) * 9/5 + 32;
            kelvin = inputValue;
            break;
    }

    document.getElementById('resultCelsius').innerText = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('resultFahrenheit').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('resultKelvin').innerText = `Kelvin: ${kelvin.toFixed(2)} K`;

    addHistory(inputValue, inputUnit, celsius, fahrenheit, kelvin);
}

function addHistory(inputValue, inputUnit, celsius, fahrenheit, kelvin) {
    const historyList = document.getElementById('historyList');
    const historyItem = document.createElement('li');

    const unitMap = {
        celsius: '°C',
        fahrenheit: '°F',
        kelvin: 'K'
    };

    historyItem.textContent = `Input: ${inputValue} ${unitMap[inputUnit]} | Celsius: ${celsius.toFixed(2)} °C | Fahrenheit: ${fahrenheit.toFixed(2)} °F | Kelvin: ${kelvin.toFixed(2)} K`;

    historyList.appendChild(historyItem);
}

function clearHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
}
