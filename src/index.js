let num = {
    1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
    6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
    11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen",
    16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty",
    30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy",
    80: "eighty", 90: "ninety",
}

module.exports = function toReadable(number) {
    let numberArr = number.toString().split('')
    if (number === 0) {
        return 'zero'
    }

    if (number === 0) {
        return zero
    }

    if (number < 20) {
        return num[number]
    }

    if (number % 100 === 0) {
       return num[numberArr[0]] + ' hundred'
    }
    if (number % 10 === 0 && number > 100) {
      return num[numberArr[0]] + ' hundred ' + num[numberArr.splice(1).join('')]
    }
    if (number % 10 === 0 && number < 100) {
       return num[number]
    }

    if (number < 100) {
        return num[numberArr[0]*10] + ' ' + num[numberArr[1]]
    }

    //if (1-9)** >= 20 (233 or 120)
    if (number > 100 && numberArr.slice(1).join('') >= 20) {
        return num[numberArr[0]] + ' hundred ' + num[numberArr[1]*10] + ' ' + num[numberArr[2]]
    }

    //if (1-9)** <= 20 (209  or 119)
    if (number > 100 && numberArr.slice(1).join('') < 20) {
        if (numberArr.slice(1).join('') < 10) {
            return num[numberArr[0]] + ' hundred ' + num[numberArr.slice(-1).join('')]
        }

        return num[numberArr[0]] + ' hundred ' + num[numberArr.slice(1).join('')]
    }
}

