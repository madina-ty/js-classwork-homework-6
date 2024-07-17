// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40]элементы, равные нулю.
let array = [12, 4, 50, 1, 0, 18, 40];
let nums = 0;
for(i = 0; i < array.length; i++) {
    nums = array[i];
    if (nums == 0) {
       nums = true;
    } else {
        nums = false;
    }
console.log(nums);
}
//1 Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40]элементы, равные нулю. Если да - вернуть true
let nomer = [12, 4, 50, 1, 0, 18, 40];
let hasZero = nomer.includes(0);
console.log(hasZero);

//2 Проверить, все ли элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true, иначе false
let words = ['yes', 'hello', 'no', 'easycode', 'what'];
let moreThan3 = 0;
for(let i = 0; i < words.length; i++) {
    moreThan3 = words[i];
    if(moreThan3.length > 3) {
        words = false;
    } else {
        words = true;
    }
console.log(words);
}

//3 Дан массив строк ['I','am','a','fornt-end','developer']. Отсортировать массив по длине строк(в порядке возрастания и наоборот)
var text1 = ['I','am','a','fornt-end','developer'];
text1.sort((a, b) => a.length - b.length);
console.log(text1);

let text2 = ['I','am','a','fornt-end','developer'];
text2.sort((c, d) => d.length - c.length);
console.log(text2);

//4 Создать массив. Пользователь должен заполнить этот массив случайными числами. Создать на основе этого массива новый массив, где будут только четные элементы
let arr = []
for (let i = 0; i < 5; i++){
   let num = +prompt(`${i+1}`)
   if (num % 2 == 0){
    arr.push(num) }
}
console.log(arr);

//5 Дан массив [1, 2, 3, 4, 5]. Преобразуйте массив в [1, 4, 5]
allNums = [1, 2, 3, 4, 5];
allNums.splice(1,2);
console.log(allNums)

//6 Дан массив [1, 2, 3, 4, 5]. Запишите в новый массив элементы [2, 3, 4].
allArr = [1, 2, 3, 4, 5];
allArr.shift();
allArr.pop();
console.log(allArr);

//7 Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
numsArr = [1, 2, 3, 4, 5];
numsArr.splice(3,0,'a', 'b', 'c',);
console.log(numsArr);

//8 Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
let nomers = [1, 2, 3, 4, 5];
nomers.splice(1,0,'a', 'b',);
nomers.splice(6,0,'c',);
nomers.splice(8,0,'e');
console.log(nomers);

//9 Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  const originalString = '123456';
  const reversedString = reverseString(originalString);
  
  console.log(reversedString); 

//hw1 У вас есть массив чисел. Используйте метод filter, чтобы создать новый массив, содержащий только положительные числа из исходного массива.
let digits = [0, -10, 'string', true, 2, 9];
let positiveDigits = digits.filter(number => typeof number === 'number' && number > 0);
console.log(positiveDigits);

//hw2 У вас есть массив чисел. Используйте метод map, чтобы создать новый массив, в котором каждое число удвоено.
let sandar = [1, 2, 3, 4, 5];
let kobeitu = sandar.map(number => number * 2);
console.log(kobeitu);

//hw3 У вас есть массив чисел. Используйте метод forEach,чтобы вычислить и вывести в консоль сумму всех чисел в массиве.
let massive = [2, 3, 5, 6];
let sum = 0; 
massive.forEach(function(number){
    sum += number;
});
console.log(sum);

//hw4 У вас есть массив строк. Используйте метод filter, чтобы создать новый массив, содержащий только строки, длина которых больше 5 символов.
let soz = ['magan', 'sen', 'olarga', 'men'];
let sozLength = soz.filter(soz => soz.length > 5);
console.log(sozLength);

//hw5 У вас есть массив чисел. Используйте метод forEach,
// чтобы вычислить среднее значение чисел и вывести его
// в консоль.
let similarNums = [4,8,6,2];
let s = 0;
let averageNums = 0;
similarNums.forEach(function(number){
    s += number;
});
averageNums = sum / similarNums.length;
console.log(averageNums);

//classwork1 Напишите функцию, которая принимает массив и элемент, и возвращает true, если
// элемент присутствует в массиве, и false в противном случае.
let haveElements = [1, 2, 3, 4, 5];
let emptyArray = [];

function generateElementsArray() {
    for (let i = 0; i < haveElements.length; i++) {
     return console.log('true');
    }
  }
  generateElementsArray();

function generateEmptyArray() {
    if (emptyArray.length === 0) {
      console.log('false');
    }
}
generateEmptyArray();

//classwork2 Напишите функцию, которая принимает массив и возвращает новый массив с
// элементами в обратном порядке.
function changeArray(numbers) {
    const reversedNumbers = numbers.map(String).reverse().map(Number);
    return reversedNumbers;
  }
  
  let arrayNumbers = [6, 7, 8, 9];
  let reversedNumbers = changeArray(arrayNumbers);
  console.log(reversedNumbers);

//classwork3 Напишите функцию, которая принимает массив и возвращает новый массив,
// содержащий только уникальные элементы (без дубликатов).
function findUniqueElements(arr) 
// ункция findUniqueElements создает новый массив (uniqueElements) с уникальными элементами из uniqueArray.                            
 { const uniqueSet = new Set(arr);
    return Array.from(uniqueSet); // Array.from() преобразует uniqueSet в новый массив, содержащий только уникальные элементы.
  }
  const uniqueArray = [2, 4, 4, 6, 6];
  const uniqueElements = findUniqueElements(uniqueArray);
  console.log(uniqueElements);

//classwork4 Напишите функцию, которая принимает
// два массива и возвращает новый массив,
// содержащий элементы обоих массивов.
function acceptTwoArrays(){
    const combinedArr = firstArr.concat(secondArr);
    return combinedArr;
}
let firstArr = [2, 4, 6];
let secondArr = [8, 10, 12];
const combinedArr = acceptTwoArrays(firstArr, secondArr);
console.log(combinedArr);

