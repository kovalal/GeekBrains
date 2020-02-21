function f(arg1, arg2, operation) {
    switch (operation) {
        case "sum":
            return sum(arg1, arg2);
        case "diff":
            return diff(arg1, arg2);
        case "mul":
            return mul(arg1, arg2);
        case "div":
            return div(arg1, arg2);
        default:
            alert("Operator isn`t exist");
    }
}

alert("Task 6: " + f(
        Number(prompt("Task 6: first")),
        Number(prompt("Tasl 6: second")),
        prompt("Task 6: Operator(sum, diff, mul, div):")
    )
);
