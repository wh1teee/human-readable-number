function toReadable(number) {
    let numberArr = number.toString().split('')
    let a = ['', 'one', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
    let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number < 20) {
        console.log(a[number].toString().split('').slice(0, -1).join(''))
        return
    }
    if (number < 100) {
        console.log( b[numberArr[0]] + a[numberArr[1]])
        return
    }

}
toReadable(5)
