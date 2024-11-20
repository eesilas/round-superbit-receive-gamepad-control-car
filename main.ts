radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        90,
        SuperBit.enMotors.M3,
        90
        )
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
radio.setGroup(121)
basic.forever(function () {
	
})
