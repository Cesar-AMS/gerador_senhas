function gerarSenha() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const senha = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    document.getElementById('senha').textContent = senha;
}

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    let charCodes = [];
    if (uppercase) charCodes = charCodes.concat(arrayFromLowToHigh(65, 90));
    if (lowercase) charCodes = charCodes.concat(arrayFromLowToHigh(97, 122));
    if (numbers) charCodes = charCodes.concat(arrayFromLowToHigh(48, 57));
    if (symbols) charCodes = charCodes.concat(arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126)));

    const senhaArray = [];
    for (let i = 0; i < length; i++) {
        const charCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        senhaArray.push(String.fromCharCode(charCode));
    }
    return senhaArray.join('');
}

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}
