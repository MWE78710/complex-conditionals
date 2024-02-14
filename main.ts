let Max_Bright = 0
let B_Level = 0
basic.forever(function () {
    if (B_Level < 255 && Max_Bright == 0) {
        B_Level = B_Level + 10
        basic.pause(10)
    }
    if (B_Level >= 255 && Max_Bright == 0) {
        Max_Bright = 1
    }
    if (B_Level > 0 && Max_Bright == 1) {
        B_Level = B_Level - 20
        basic.showNumber(B_Level)
        basic.pause(10)
    }
    if (B_Level <= 1 && Max_Bright == 1) {
        Max_Bright = 0
    }
    led.setBrightness(B_Level)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
