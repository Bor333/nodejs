import body from './functions.js';

let [a, b] = process.argv.slice(2)

a = parseInt(a)
b = parseInt(b)

if (!isNaN(a) && !isNaN(b)) {
    body(a, b)
} else {
    throw "Вводить нужно только числа";
}




