radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        90,
        SuperBit.enMotors.M3,
        90
        )
    } else if (receivedNumber == 4) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        45,
        SuperBit.enMotors.M3,
        -45
        )
    } else if (receivedNumber == 10) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -45,
        SuperBit.enMotors.M3,
        45
        )
    } else if (receivedNumber == 8) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -90,
        SuperBit.enMotors.M3,
        -90
        )
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
let range = SuperBit.RGB_Program().range(0, 3)
SuperBit.RGB_Program().showRainbow(1, 360)
SuperBit.RGB_Program().show()
radio.setGroup(121)
basic.forever(function () {
    basic.showIcon(IconNames.Rollerskate)
})
