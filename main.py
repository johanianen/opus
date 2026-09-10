def on_button_pressed_a():
    basic.show_string("\"Hej Marcus\"")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global player
    player = player_number
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_gesture_shake():
    global dice_number, send_number
    dice_number = randint(1, 6)
    basic.show_number(dice_number)
    if dice_number == 1 or dice_number == 6:
        send_number = dice_number
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

send_number = 0
dice_number = 0
player = 0
player_number = 0
player_number = 1
player = 0

def on_forever():
    global player_number
    if input.button_is_pressed(Button.A):
        if player == 0:
            basic.clear_screen()
            player_number += 1
            if player_number > 7:
                player_number = 1
        else:
            pass
basic.forever(on_forever)

def on_forever2():
    global player_number
    if input.button_is_pressed(Button.B):
        if player == 0:
            basic.clear_screen()
            basic.show_number(player_number)
            player_number += -1
            if player_number < 1:
                player_number = 7
        else:
            pass
basic.forever(on_forever2)
