//  Валидация

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('order-form');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const nameError = nameInput.nextElementSibling;
    const phoneError = phoneInput.nextElementSibling;

    nameError.style.color = 'red';
    nameError.style.minHeight = '1em';
    phoneError.style.color = 'red';
    phoneError.style.minHeight = '1em';

    function validateName() {
        let isValid = true;
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Il nome è obbligatorio.';
            isValid = false;
        } else if (nameInput.value.length < 2) {
            nameError.textContent = 'Il nome deve avere almeno 2 caratteri.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }
        return isValid;
    }

    function validatePhone() {
        let isValid = true;
        const phoneRegex = /^\d{8,15}$/;
        if (phoneInput.value.trim() === '') {
            phoneError.textContent = 'Il numero di telefono è obbligatorio.';
            isValid = false;
        } else if (!phoneRegex.test(phoneInput.value.trim())) {
            phoneError.textContent = 'Inserisci un numero di telefono valido (solo numeri, 8-15 cifre).';
            isValid = false;
        } else {
            phoneError.textContent = '';
        }
        return isValid;
    }

    nameInput.addEventListener('input', validateName);
    phoneInput.addEventListener('input', validatePhone);

    form.addEventListener('submit', function (event) {
        let isNameValid = validateName();
        let isPhoneValid = validatePhone();

        if (!isNameValid || !isPhoneValid) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }

        return true;
    });
});

// Таймер
function startTimer(durationInMinutes, displayMinutesElement, displaySecondsElement) {
    let timer = durationInMinutes * 60;
    let minutes, seconds;

    function updateDisplay() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayMinutesElement.textContent = minutes;
        displaySecondsElement.textContent = seconds;

        if (--timer < 0) {
            clearInterval(intervalId);
            console.log("Timer finished!");
        }
    }

    updateDisplay();

    const intervalId = setInterval(updateDisplay, 1000);
}

const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');

const timerDuration = 30;

startTimer(timerDuration, minutesElement, secondsElement);