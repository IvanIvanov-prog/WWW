alert("Привет, в следующем диалоговом окне введи свое имя:");
let name = prompt("Введи свое имя:");
function greeting(name) {
    console.log(`Привет от JS! ${name}.`);
    return name;
}
greeting(name);

