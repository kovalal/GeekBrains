console.log("Task - 2");

let onion = new Map([
    ['name', 'onion'],
    ['price', 10],
]);

let tomate = new Map([
    ['name', 'tomate'],
    ['price', 15],
]);

let cucumber = new Map([
    ['name', 'cucumber'],
    ['price', 20],
]);

let potato = new Map([
    ['name', 'potate'],
    ['price', 5],
]);

function summarize(b) {
    let res = 0;
    for (let i = 0; i < b.length; i++){
        res += b[i].get('price');
    }
    return res;
}
