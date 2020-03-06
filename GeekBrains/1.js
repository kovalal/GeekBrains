function pressNumber(value, score) {
    score.value += value;
}

function pressEval(score) {
    score.value = eval(score.value);
}

function pressClS(score) {
    score.value = "";
}
