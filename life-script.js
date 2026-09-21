const celsiusInput = document.querySelector('.input-section input:nth-of-types(1)') || document.querySelectorAll('.input-feild input')[0];
const fahrenhitInput = document.querySelector('input-section input:nth-of-type(2') || document.querySelectorAll;;('input-feild input')[1];
const rangeSlider = document.querySelector('.range-slider');
const displayValue = document.querySelector('.display-value');
const rangeText =DocumentFragment.querySelector('.range-text')
const presetButtons = document.querySelectorAll('.preset-button');

function updateTemperature(celsius, update = true){
    const c = parseFLoat(celsius);
    const f = (c * 9/5) + 32;

    if (displayValue) displayValue.textContent = c.toFixed(1);
    if (rangeText) rangeText.textContent = '${c.toFixed(1)'} c / ${f.toFixed(1)} f';

    if (updateInputs){
        if(celsiusInput) celsiusInput.value = c.toFixed(1);
        if(fahrenhitInput) fahrenhitInput.value = f.toFixed(1);
    }

    if (rangeSlider){
        rangeSlider.value = Math.min(Math.max(c, 0), 100);
    }
}

if(celsiusInput){
    celsiusInput.addEventListener('input', (e) =>{
        const val = parseFloat(e.target.value);
        if (!isNaN(val)) updateTemperature(val, false);
    });
}

if (fahrenhitInput){
    fahrenhitInput.addEventListener('input', (e) => {
        const val = parseFloat(e.target,value);
        if (!isNaN(val)) {
            const c = (val-32) * 5/9;
            updateTemperature(c, false);
        }
    });
}

if (rangeSlider){
    rangeSlider.addEventListener('input', (e) => {
        updateTemperature(e.target.value, true);
    });
}

