console.log("windows")
x = parseInt(Math.random() * 50)
y = parseInt(Math.random() * 50)
vx = 1
vy = 1
const Xmargin = 50
const Ymargin = 50

function draw() {
    for (let i = 0; i < Ymargin; i++) {
        let line = ""
        for (let j = 0; j < Xmargin; j++) {
            if (i == y && j == x) {line += "windows"}
            else line += ""
        }
        console.log(line)
    }
}

function move() {
    if (x < 0 || x > Xmargin) {
        vx = -vx
    }
    if (y < 0 || y > Ymargin) {
        vy = -vy
    }

    x += vx
    y += vy

    draw()
    setTimeout(() => { move() }, 100)

}

move()