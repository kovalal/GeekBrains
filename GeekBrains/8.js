function function_power(val, pow) {
    if (pow == 0){
        return 1
    } else if (pow > 0){
        return val * function_power(val, --pow)
    } else if (pow <0) {
        return function_power(val, ++pow) / val
    }
}

alert(function_power(
    Number(prompt("Task 8: value")),
    Number(prompt("Task 8: power"))
))