const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function creatColorString() {
    let germaFlag = colors.filter ( function(color) { return color === "черный" || color === "красный" || color === "желтый";    });
    return germaFlag.join('-');
}

console.log(creatColorString());

