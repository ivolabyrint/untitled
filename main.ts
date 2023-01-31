function hha() {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        `)
    }
}

basic.forever(function on_forever() {
    basic.showString("emi")
    hha()
    basic.showString("miki")
    hha()
})
