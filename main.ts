let number = 0
input.onButtonPressed(Button.B, function () {
    number = randint(1, 5)
    basic.showNumber(number)
    if (number == 2) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (number == 4) {
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (number == 5) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
