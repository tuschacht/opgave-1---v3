basic.forever(function () {
    basic.showIcon(IconNames.TShirt)
    basic.pause(500)
    basic.showIcon(IconNames.Ghost)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        . # # # .
        # . # . #
        # # # # #
        # . . . #
        `)
    basic.pause(300)
    basic.showLeds(`
        # . . . #
        . . # # #
        . # # # .
        # # . . #
        # # . . #
        `)
    basic.pause(200)
})
