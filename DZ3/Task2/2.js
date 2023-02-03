alert("Привет, в следующем диалоговом окне введи свое имя:");
let voidname = prompt("Введи свое имя:")
function greeting(voidname) {
    console.log(`Привет от JS! ${voidname}.`);
    return voidname;
}
greeting(voidname);