radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(numero)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(numero)
    basic.showNumber(numero)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
let numero = 0
numero = 8
radio.setGroup(43)
