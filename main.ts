devices.onGamepadButton(MesDpadButtonInfo._4Down, function () {
    for (let i = 0; i <= 90; i += 5) {
        servos.P0.setAngle(0)
        basic.pause(50)
    }
servoAngle = 0
})
devices.onGamepadButton(MesDpadButtonInfo._3Down, function () {
    for (let j = 0; j <= 120; j += 5) {
        servos.P0.setAngle(150)
        basic.pause(50)
    }
servoAngle = 150
})
devices.onGamepadButton(MesDpadButtonInfo.DUp, function () {
    D = 0
    maqueen.motorStop(maqueen.Motors.All)
})
devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    B += 1
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 60)
})
devices.onGamepadButton(MesDpadButtonInfo._2Down, function () {
    // decrease angle by 5 degrees
    if (servoAngle > 0) {
        servoAngle += 0 - 5
        servos.P0.setAngle(servoAngle)
    }
})
devices.onGamepadButton(MesDpadButtonInfo.DDown, function () {
    D += 1
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
})
devices.onGamepadButton(MesDpadButtonInfo.CDown, function () {
    C += 1
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
})
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    A += 1
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
})
devices.onGamepadButton(MesDpadButtonInfo.BUp, function () {
    B = 0
    maqueen.motorStop(maqueen.Motors.All)
})
devices.onGamepadButton(MesDpadButtonInfo._1Down, function () {
    // increase angle by 5 degrees
    if (servoAngle < 130) {
        servoAngle += 5
        servos.P0.setAngle(servoAngle)
    }
})
devices.onGamepadButton(MesDpadButtonInfo.AUp, function () {
    A = 0
    maqueen.motorStop(maqueen.Motors.All)
})
devices.onGamepadButton(MesDpadButtonInfo.CUp, function () {
    C = 0
    maqueen.motorStop(maqueen.Motors.All)
})
let servoAngle = 0
let D = 0
let C = 0
let B = 0
let A = 0
let x = 0
A = 0
B = 0
C = 0
D = 0
