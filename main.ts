input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    player = player_number
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
let player = 0
let player_number = 0
player_number = 1
player = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (player == 0) {
            basic.clearScreen()
            player_number += 1
            if (player_number > 7) {
                player_number = 1
            }
        } else {
        	
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        if (player == 0) {
            basic.clearScreen()
            basic.showNumber(player_number)
            player_number += -1
            if (player_number < 1) {
                player_number = 7
            }
        } else {
        	
        }
    }
})
