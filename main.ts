input.onButtonPressed(Button.A, function () {
    player_number += 1
})
input.onButtonPressed(Button.B, function () {
    player_number += -1
})
input.onGesture(Gesture.Shake, function () {
    dice_number = randint(1, 6)
    basic.showNumber(dice_number)
    if (dice_number == 1 || dice_number == 6) {
        send_number = dice_number
    }
})
let send_number = 0
let dice_number = 0
let player_number = 0
basic.forever(function () {
    basic.showNumber(player_number)
    basic.pause(5000)
})
