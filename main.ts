radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        135,
        SuperBit.enMotors.M3,
        135
        )
        basic.showArrow(ArrowNames.North)
    } else if (receivedNumber == 4) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -45,
        SuperBit.enMotors.M3,
        45
        )
        basic.showArrow(ArrowNames.West)
    } else if (receivedNumber == 10) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        45,
        SuperBit.enMotors.M3,
        -45
        )
        basic.showArrow(ArrowNames.East)
    } else if (receivedNumber == 14) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        0
        )
        SuperBit.MotorStopAll()
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (receivedNumber == 8) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -90,
        SuperBit.enMotors.M3,
        -90
        )
    } else if (receivedNumber == 1) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        45,
        SuperBit.enMotors.M3,
        80
        )
    } else if (receivedNumber == 2) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        80,
        SuperBit.enMotors.M3,
        45
        )
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
let range = SuperBit.RGB_Program().range(0, 3)
SuperBit.RGB_Program().showRainbow(1, 360)
SuperBit.RGB_Program().show()
radio.setGroup(121)
basic.showIcon(IconNames.Rollerskate)
basic.forever(function () {
	
})
