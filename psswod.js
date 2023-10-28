function generatePassword(length, lvl) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newPassword = '';
    const digits = '0123456789';
    const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';

    for (let i = 0; i < length; i++) {
        if (lvl == 'easy') {
            const randomSymbol = alphabet.charAt(Math.floor(Math.random() * alphabet.length)); // я умею брать только первый символ из строки, а нужно взять один случайный символ :(
            newPassword += randomSymbol;
        } else if (lvl == 'medium') {
            randomSymbol = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            const randomDigit = digits.charAt(Math.floor(Math.random() * digits.length));

            newPassword += randomDigit + randomSymbol
        } else {
            const randomSymbols = symbols.charAt(Math.floor(Math.random() * symbols.length));
            randomDigit = digits.charAt(Math.floor(Math.random() * digits.length));
            randomSymbol = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            newPassword += randomSymbols + randomSymbol + randomDigit
        }

    }

    return newPassword
}
console.log(generatePassword(6, 'hard'));