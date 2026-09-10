input.onGesture(Gesture.Shake, function () {
    let has_dice_2 = 0
    if (has_dice_1 || has_dice_2) {
        dice_number = randint(1, 6)
        basic.showNumber(dice_number)
        if (dice_number == 1 || dice_number == 6) {
            send_number = dice_number
        }
    }
})
let send_number = 0
let dice_number = 0
let has_dice_1 = 0
let player_number = 1
let player = 0
let in_setup = 1
basic.showNumber(player_number)
basic.forever(function () {
    while (in_setup) {
        if (input.buttonIsPressed(Button.AB)) {
            player = player_number
            in_setup = 0
            for (let index = 0; index < 4; index++) {
                basic.showIcon(IconNames.Square)
                basic.pause(100)
                basic.showNumber(player)
                basic.pause(100)
            }
            has_dice_1 = 1
        } else if (input.buttonIsPressed(Button.B)) {
            player_number += 1
            if (player_number > 7) {
                player_number = 1
            }
            basic.showNumber(player_number)
        } else {
            if (input.buttonIsPressed(Button.A)) {
                player_number += -1
                if (player_number < 1) {
                    player_number = 7
                }
                basic.showNumber(player_number)
            } else {
                continue;
            }
        }
    }
})
