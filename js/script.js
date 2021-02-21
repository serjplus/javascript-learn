/*jslint es6 devel: true*/

let number = 5,
    incr = 5,
    decr = 5;

const leftBorderWidth = 1;
const  isCheckedVal1 = number;
const  isCheckedVal2 = number;
const  isCheckedVal3 = number;

const answers = [];

answers[0] = typeof( +prompt("Vvedite pervoe chislovoe znachenie", "0") );
answers[1] = typeof( +prompt("Vvedite vtoroe chislovoe znachenie", "0") );
answers[2] = typeof( +prompt("Vvedite tretee chislovoe znachenie", "0") );

console.log(answers);
console.log(answers[0] === isCheckedVal1 && answers[1] === isCheckedVal2 && answers[2] === isCheckedVal3);