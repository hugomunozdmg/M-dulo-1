const Xmargin = 100
const Ymargin = 25
let x = parseInt(Math.random() * (Xmargin))
let y = parseInt(Math.random() * (Ymargin))
let vx = 3
let vy = 1

const red = "\x1b[31m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
const blue = "\x1b[34m";
const magenta = "\x1b[35m";
const cyan = "\x1b[36m";
const colors = [red, green, yellow, blue, magenta, cyan]
let index = 0


move()

function move() {
    if (x < 0 || x > Xmargin - 7) {
        vx = -vx
        index = index >= colors.length - 1 ? 0 : ++index
    }
    if (y <= 0 || y >= Ymargin) {
        vy = -vy
        index = index >= colors.length - 1 ? 0 : ++index
    }

    x += vx
    y += vy

    draw()
    setTimeout(() => { move() }, 60)
}

function draw() {
    for (let i = 0; i <= Ymargin; i++) {
        let line = ""
        for (let j = 0; j <= Xmargin; j++) {
            line +=
                (i == y && j == x) ? colors[index] + "WINDOWS" :
                    (i == 0 || i == Ymargin || j == 0 || j == Xmargin) ? "." : " "
        }
        console.log(line)
    }
}

