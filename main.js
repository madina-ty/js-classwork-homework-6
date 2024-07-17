allNumbers = [12,7,5,8,9,3];
console.log(allNumbers.includes(7));


// деструктуризация 
let array = [10, 20, 70];
console.log(...array); // вывод все элементы массива
const [numOne, numTwo, numThree] = array;
// const [numOne, numThree] = array; delete second array element
console.log(numOne);
console.log(numTwo);

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i = 0; i < matriz.length; i++) {
    for(let k = 0; k < matriz[i].length;k++) {
        console.log(matriz[i][k])
    }
}
//вложение матрицы в матрице 
for(let i = 2; i <= 9; i++) {
   for(let k = 1; k<=9; k++) {
    console.log(`${i} * ${k} = ${i * k}`);
   }
}