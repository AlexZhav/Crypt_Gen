// Генератор 
function generatePassword() {
    const length = document.getElementById('length').value;
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";

    let availableChars = "";
    if (useUppercase) availableChars += uppercaseChars;
    if (useLowercase) availableChars += lowercaseChars;
    if (useNumbers) availableChars += numbers;
    if (useSymbols) availableChars += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        password += availableChars.charAt(Math.floor(Math.random() * availableChars.length));
    }

    document.getElementById('generated-password').value = password;
}

document.getElementById('generate-btn').addEventListener('click', generatePassword);

// Проверка 
function checkPasswordStrength() {
    const password = document.getElementById('password-input').value;
    const strengthDisplay = document.getElementById('password-strength');
    const suggestions = document.getElementById('suggestions');

    let strength = 0;
    const regexes = {
        length: /.{8,}/,
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        numbers: /[0-9]/,
        symbols: /[!@#$%^&*(),.?":{}|<>]/
    };

    if (regexes.length.test(password)) strength++;
    if (regexes.uppercase.test(password)) strength++;
    if (regexes.lowercase.test(password)) strength++;
    if (regexes.numbers.test(password)) strength++;
    if (regexes.symbols.test(password)) strength++;

    // Отображение сложности 
    if (strength === 5) {
        strengthDisplay.textContent = "Сложный пароль";
        suggestions.innerHTML = "";
    } else if (strength >= 3) {
        strengthDisplay.textContent = "Средняя сложность";
        suggestions.innerHTML = "<li>Добавьте символы или цифры для улучшения сложности.</li>";
    } else {
        strengthDisplay.textContent = "Пароль слабый";
        suggestions.innerHTML = "<li>Увеличьте длину пароля.</li><li>Добавьте заглавные буквы, цифры и символы.</li>";
    }
}

document.getElementById('check-btn').addEventListener('click', checkPasswordStrength);
document.getElementById('copy-btn').addEventListener('click', function() {
    const password = document.getElementById('generated-password');
    password.select();
    password.setSelectionRange(0, 99999); // Для мобильных устройств
    navigator.clipboard.writeText(password.value).then(() => {
    });
});
const inputField = getElementById('password-input');
const submitButton = document.getElementById('check-btn');
inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        check-btn.click();
    }
});
