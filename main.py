def hha():
    for index in range(3):
        basic.show_icon(IconNames.HEART)
        basic.pause(500)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)

def on_forever():
    basic.show_string("emi")
    hha()
    basic.show_string("miki")
    hha()
basic.forever(on_forever)
