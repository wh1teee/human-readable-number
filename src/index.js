module.exports = function toReadable(number) {
    let numberArr = number.toString().split('')
    let a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
    let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number == 0) {
        return 'zero'
    }
    if (number < 20) {
        return a[number].toString().split('').slice(0, -1).join('')
    }

    if (number < 100) {
        if (number % 10 == 0) {
            return b[numberArr[0]]
        }
        return b[numberArr[0]] + ' ' + a[numberArr[1]].toString().split('').slice(0, -1).join('')
    }

    if (number < 1000) {
        if (number % 100 == 0) {
            return a[numberArr[0]] + 'hundred'
        }
        if (number % 100 == 10) {
            return a[numberArr[0]] + 'hundred ten'
        }
        if (number % 10 == 0) {
            return a[numberArr[0]] + 'hundred ' + b[numberArr[1]]
        }

if (numberArr[1] + numberArr[2] < 20) {
    return a[numberArr[0]] + 'hundred ' + a[+(numberArr[1] + numberArr[2])].toString().split('').slice(0, -1).join('')
}
        return a[numberArr[0]] + 'hundred ' + b[numberArr[1]] + ' ' + a[numberArr[2]].toString().split('').slice(0, -1).join('')
    }
}

