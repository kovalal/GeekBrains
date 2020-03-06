function selectColor(name, color, backColor, element) {
    obj = document.querySelector(name);
    if (backColor == color) {
        alert("No!!!!");
        element.value = obj.style.backgroundColor;
    } else {
        obj.style.backgroundColor = color;
    }
}
function selectColorText(name, color, backColor, element) {
    objArr = document.querySelectorAll(name);
    if(backColor == color) {
        alert("No!!!!");
        element.value = objArr[0].style.color;
    }
    else {
        objArr.forEach((entry) => {
            entry.style.color = color
        });
    }
}