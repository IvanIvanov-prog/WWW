alert("Привет. В следующем диалоговом окне введи произвольную температуру в градусах Цельсия.");
const number1 = Number.parseFloat(prompt("Введи значение температуры в градусах Цельсия."));
console.log(typeof number1);
const number2 = (9 / 5) * number1 + 32;
alert(`Введено значение температуры в градусах Цельсия: ${number1}. Плучено значение температуры в градусах Фаренгейта: ${number2.toFixed(2)}.`);

