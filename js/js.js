for (let i = 1; i < 7; i = i + 1) {
    let contenedor_starter = document.querySelector(".starter");
    let template = document.querySelector(".courses_template").content;
    let elementos_nuevos = template.cloneNode(true);
    let templateHeader = elementos_nuevos.querySelector("h3");
    templateHeader.textContent = "Dish " + i;
    contenedor_starter.appendChild(elementos_nuevos);
}

for (let i = 1; i <= 7; i = i + 1) {
    let contenedor_main_course = document.querySelector(".main_course");
    let template = document.querySelector(".courses_template").content;
    let elementos_nuevos = template.cloneNode(true);
    let templateHeader = elementos_nuevos.querySelector("h3");
    templateHeader.textContent = "Main course " + i;
    contenedor_main_course.appendChild(elementos_nuevos);
}
for (let i = 1; i <= 3; i = i + 1) {
    let contenedor_dessert = document.querySelector(".dessert");
    let template = document.querySelector(".courses_template").content;
    let elementos_nuevos = template.cloneNode(true);
    let templateHeader = elementos_nuevos.querySelector("h3");
    templateHeader.textContent = "Dessert " + i;
    contenedor_dessert.appendChild(elementos_nuevos);
}
for (let i = 1; i <= 2; i = i + 1) {
    let contenedor_drinks = document.querySelector(".drinks");
    let template = document.querySelector(".courses_template").content;
    let elementos_nuevos = template.cloneNode(true);
    let templateHeader = elementos_nuevos.querySelector("h3");
    templateHeader.textContent = "Drink " + i;
    contenedor_drinks.appendChild(elementos_nuevos);
}
