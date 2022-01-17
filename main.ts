serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    message = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    conversion = parseFloat(message)
    if (conversion == 1) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . . . . .
            `)
        if (vitesse < 1000) {
            vitesse += 100
            pins.analogWritePin(AnalogPin.P12, vitesse)
            pins.analogWritePin(AnalogPin.P1, vitesse)
        }
    } else if (conversion == 2) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # # # . .
            # . . # .
            # # # # .
            `)
        if (vitesse >= 100) {
            vitesse += -100
            pins.analogWritePin(AnalogPin.P12, vitesse)
            pins.analogWritePin(AnalogPin.P1, vitesse)
        }
    } else if (conversion == 3) {
        basic.showLeds(`
            # # # # .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            `)
        vitesse = 0
        pins.analogWritePin(AnalogPin.P12, vitesse)
        pins.analogWritePin(AnalogPin.P1, vitesse)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else if (conversion == 4) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # . . # .
            # # # . .
            `)
        vitesse = 0
        pins.analogWritePin(AnalogPin.P12, vitesse)
        pins.analogWritePin(AnalogPin.P1, vitesse)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
    } else if (conversion == 5 && angle < 170) {
        angle += 5
        servos.P0.setAngle(angle)
    } else if (conversion == 6 && angle > 0) {
        angle += -5
        servos.P0.setAngle(angle)
    } else if (conversion == 7) {
        vitesse = 0
        pins.analogWritePin(AnalogPin.P12, vitesse)
        pins.analogWritePin(AnalogPin.P1, vitesse)
    }
})
let message = ""
let angle = 0
let vitesse = 0
let conversion = 0
conversion = 0
serial.setBaudRate(BaudRate.BaudRate9600)
vitesse = 0
angle = 90
pins.analogWritePin(AnalogPin.P12, vitesse)
pins.analogWritePin(AnalogPin.P1, vitesse)
basic.pause(500)
pins.digitalWritePin(DigitalPin.P2, 1)
pins.digitalWritePin(DigitalPin.P8, 0)
servos.P0.setAngle(angle)
serial.redirect(
SerialPin.P16,
SerialPin.P15,
BaudRate.BaudRate9600
)
basic.clearScreen()
basic.forever(function () {
	
})
