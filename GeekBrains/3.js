let a3 = Number(prompt("Task3: number one:"))
let b3 = Number(prompt("Task3: number two"))

function magic(x, y) {
    if (x >= 0 && y >= 0) {
        return x - y;
    } else if (x < 0 && y < 0) {
        return x * y;
    } else {
        return x + y;
    }
}

alert("Task3: " + magic(a3, b3))