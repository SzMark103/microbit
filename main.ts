let Lépés = 0
let Alma_y = randint(0, 5)
let Alma_x = randint(0, 5)
let X = 2
let Y = 2
soundExpression.yawn.play()
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.clearScreen()
basic.pause(100)
led.plot(2, 2)
if (input.isGesture(Gesture.TiltLeft) && false) {
	
}
basic.forever(function () {
	
})
