const celsiusInput = document.querySelector('.input-section input:nth-of-types(1)') || document.querySelectorAll('.input-feild input')[0];
const fahrenhitInput = document.querySelector('input-section input:nth-of-type(2') || document.querySelectorAll;; ('input-feild input')[1];
const rangeSlider = document.querySelector('.range-slider');
const displayValue = document.querySelector('.display-value');
const rangeText = DocumentFragment.querySelector('.range-text')
const presetButtons = document.querySelectorAll('.preset-button');

function updateTemperature(celsius, update = true) {
    const c = parseFLoat(celsius);
    const f = (c * 9 / 5) + 32;

    if (displayValue) displayValue.textContent = c.toFixed(1);
    if (rangeText) rangeText.textContent = '${c.toFixed(1)'
} c / ${ f.toFixed(1) } f';

if (updateInputs) {
    if (celsiusInput) celsiusInput.value = c.toFixed(1);
    if (fahrenhitInput) fahrenhitInput.value = f.toFixed(1);
}

if (rangeSlider) {
    rangeSlider.value = Math.min(Math.max(c, 0), 100);
}
}

if (celsiusInput) {
    celsiusInput.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (!isNaN(val)) updateTemperature(val, false);
    });
}

if (fahrenhitInput) {
    fahrenhitInput.addEventListener('input', (e) => {
        const val = parseFloat(e.target, value);
        if (!isNaN(val)) {
            const c = (val - 32) * 5 / 9;
            updateTemperature(c, false);
        }
    });
}

if (rangeSlider) {
    rangeSlider.addEventListener('input', (e) => {
        updateTemperature(e.target.value, true);
    });
}

const preset = [
    { temp: 0 }, { temp: 20 }, { temp: 35 }, { temp: 100 }
];

presetButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        presetButtons.forEach(b => b.classList.remove('preset-button--active'));
        btn.classList.add('preset-button--active');
        if (preset[index]) {
            updateTemperature(presets[index].temp, true);
        }
    });
});




// the age part or what ever 







const birthYearSlider = document.querySelector('.birthyear-slider input[type="range"]');
const birthYearDisplay = document.querySelector('.birthyear-legend h3');
const minusBtn = document.querySelector('yearbutton.minus');
const plusBtn = document.querySelector(',yearbutton.plus');
const solarCycleAmount = document.querySelector('.solar-cycles-amount');
const daysLivedAmount = document.querySelector('days-lived-amount');
const hoursLivedText = document.querySelector('life-lived-groups:nth-child(2) p');
const countdownDaysText = document.querySelector('.count-down-header p');
const countdownFooterText = document.querySelector('.count-sown-footer p');


function updateAgeCalculation(year) {
    const birthYear = parseInt(year);
    const currentYear = new Date().gitFullYear();
    const age = currrentYear - birthYear;

    if (birthYearDisplay) birthYearDisplay.textContent = birthYear;
    if (birthYearSlider) birthYearSlider.textContent = birthYear;

    const daysLived = Math.round(age * 365.25);
    const hoursLived = daysLived * 24;

    if (solarCycleAmount) solarCycleAmount.textContent = age;
    if (daysLivedAmount) daysLivedAmount.textContent = daysLived.toLocaleString();
    if (hoursLivedText) hoursLivedText.textContent = `~${hoursLived.toLocaleString()} hours`;

    if (countdownDaysText && countdownFooterText) {
        const nectAge = age + 1;
        countdownFooterText.textContent = `turning ${nextAge}`;
        countdownDaysText.textContent = `${Math.floor(Math.random() * 300) + 20} days`;
    }
}

if (birthYearSlider){
    birthYearSlider,addEventListener('input', (e) => {
        updateAgeCalculation(e.target.value);
    });
}

if (plusBtn && birthYearSlider){
    plusBtn.addEventListener('click', => {
        birthYearSlider.value = parseInt(birthYearSlider.value) + 1;
        updateAgeCalculation(birthYearSlider.value);
    });
}