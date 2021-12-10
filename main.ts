serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    message = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (message.compare("on") == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (message.compare("off") == 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.clearScreen()
    }
})
let message = ""
serial.redirect(
SerialPin.P0,
SerialPin.P14,
BaudRate.BaudRate9600
)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
	
})
