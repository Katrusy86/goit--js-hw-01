'use strict'

const credits = 23580;
const pricePerDroid = 3000;
let droidNumber;
let message;
let totalPrice;
let cash 

droidNumber = prompt ('Введите количество дроидов');

if (droidNumber === null) {
    message = "Отменено пользователем!"
}
else {
     totalPrice = droidNumber * pricePerDroid;

    if (totalPrice > credits) {
        message = "Недостаточно средств на счету!";
    }
    else {
        cash = credits - totalPrice;
        message = `Вы купили ${droidNumber} дроидов, на счету осталось ${cash} кредитов.`
    }
}
    alert (message)