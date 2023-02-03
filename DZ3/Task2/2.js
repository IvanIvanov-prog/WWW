alert("Привет, в следующем диалоговом окне введи свое имя на кириллице.");
let voidname = prompt("Введи свое имя:")
function voidMessage(voidname) {
    console.log(`Привет от JS! ${voidname}`);
    return voidname;
}
voidMessage(voidname);