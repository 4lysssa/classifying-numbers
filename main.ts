input.onButtonPressed(Button.A, function () {
    NUM += 1
    basic.pause(100)
    basic.showNumber(NUM)
})
input.onButtonPressed(Button.AB, function () {
    if (NUM < 0) {
        basic.showString("negative")
    } else if (NUM > 0) {
        basic.showString("positive")
    } else {
        basic.showString("zero")
    }
})
input.onButtonPressed(Button.B, function () {
    NUM += -1
    basic.pause(100)
    basic.showNumber(NUM)
})
input.onGesture(Gesture.Shake, function () {
    if (NUM == NUM % 1) {
        basic.showString("odd")
    } else {
        basic.showString("even")
    }
})
let NUM = 0
NUM = randint(-10, 10)
basic.showString("" + (NUM))
basic.forever(function () {
	
})
