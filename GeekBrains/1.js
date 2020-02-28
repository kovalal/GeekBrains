console.log("Task - 1")

function constructor (value) {
    if (value > 0 && value < 1000 && Number.isInteger(value)) {
        return {
            единицы: (value % 100) % 10,
            десятки: (value % 100) / 10 >> 0,
            сотни: value / 100 >> 0
        }
    }
    return "Value`s incorrect!"
}

console.log(
    constructor(
        Number(
            prompt(
                "Input value")
        )
    )
)