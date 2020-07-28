// створити функцію яка виводить масив
function vivodArr(arr) {
    for(let i of arr){
        console.log(i);
    }
}

// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
function num(num) {
    let arr = [];
    for(let i =0; i<num; i++) {
        let random = Math.round(Math.random(i)*10);
        arr.push(random);
    }
    vivodArr(arr);
}

// num(5);

// створити функцію яка приймає три числа та виводить та повертає найменьше.
function minimizator(a=0, b=0, c=0){
    let min = Math.min(a,b,c);
    console.log(min);
    return min
}

// minimizator(11,22,12);

// створити функцію яка приймає три числа та виводить та повертає найбільше.
function maximizator(a=0, b=0, c=0){
    let max = Math.max(a,b,c);
    console.log(max);
    return max
}

// maximizator(1,2,4);

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function min_max() {
    let max = arguments[0];
    let min = arguments[0];

    for(let i =0; i<arguments.length; i++) {
        if (arguments[i]>max){
            max = arguments[i]
        }

        if (arguments[i]<min){
            min = arguments[i]
        }
    }

    console.log(max + ' Max');
    console.log(min + ' Min');
    return min
}

// min_max(1,22,4,5,77,8,12,-2,-55,14,1000,-999);

// створити функцію яка повертає найбільше число з масиву
function min_max() {
    let max = arguments[0];

    for(let i =0; i<arguments.length; i++) {
        if (arguments[i]>max){
            max = arguments[i]
        }
    }
    console.log(max + ' Max');
    return max
}
// min_max(1,22,4,5,77,8,12,-2,-55,14,1000,-999);

// створити функцію яка повертає найменьше число з масиву
function min_max() {
    let min = arguments[0];

    for(let i =0; i<arguments.length; i++) {
        if (arguments[i]<min){
            min = arguments[i]
        }
    }
    console.log(min + ' Min');
    return min
}
// min_max(1,22,4,5,77,8,12,-2,-55,14,1000,-999);

// створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function sumArrayValues(arr=[0]){
    let sum = 0;
    for (const values of arr) {
        sum = sum + values;
    } 
    return sum;
}
// console.log(sumArrayValues([1, 39, 20]));

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function sumArrayValues(arr=[0]){
    let sum = 0;
    for (const values of arr) {
        sum = (sum + values);
    }
    sum = sum / arr.length
    return sum;
}
// console.log(sumArrayValues([1, 39, 20, 40]));

// Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let objArr = [
    {
        name: 'dima',
        age: 18,
        skills:['driver','householder']
    }, {
        name: 'oleksa',
        age: 28,
        skills: ['1 skill','2 skill','3 skill']
    }, {
        name: 'viktor',
        age: 40,
        skills: ['first skill','second skill']
    } 
];

function countObjectInArray(array) {
    let count = 0;
    for (const element of array) {
        if (typeof element === 'object' && !Array.isArray(element)) {
            count++;
        }
    }

    return count;
}
console.log(countObjectInArray(objArr));

// Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
function objNumber(arr) {
    let numberStr = 0;
    for(let i of arr){
        for(let newI in i ) {
            numberStr++;
        }
    }
    return numberStr
}

// console.log(objNumber(objArr));

// створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
function newArr(arr1, arr2){
    let newArr = []; 
    let llength = arr1.length<arr2.length ? arr1.length : arr2.length;

    for (let i = 0; i<llength; i++) {
        newArr[i] = (arr1[i] || 0) + (arr2[i] || 0);
    }
    return newArr
}
// console.log(newArr([1, 2, 46, 88, 1,5,6,7,9], [8, 5, 0,1]));

// приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
function swap(arr, i){
    if( i < arr.length){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}
let arr1 = [1,2,3,4,5,6,7];
// console.log(swap(arr1,4));

// створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
function filter(arr){
    let number = [];
    let zero = [];
    for(let i =0; i<arr.length; i++){
        if(arr[i] === 0){
            zero.push(arr[i]);
        } else {
            number.push(arr[i]);
        }
    }
    return number.concat(zero);
}

// console.log(filter([1,0,6,0,3]));

// Створити функцію яка :
// Додає в боді блок з текстом "Hello owu"
function text(){
    let div = document.createElement('div');
    div.innerText = 'Hello owu';
    document.body.append(div);
}
text();

// Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function newText(message, typeBlock){
    let div = document.createElement(`${typeBlock}`)
    div.innerText = `${message}`;
    document.body.append(div);
}
newText('asdada', 'div');

// приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let cars = [
    {
        model: 'Nissan GTR',
        year: '2010',
        complectation: ['complectation-1', 'complectation-2', 'complectation-3']
    },{
        model: 'BMW X5',
        year: '2017',
        complectation: ['sport', 'cruiz-control', 'complectation-3']
    },{
        model: 'Ford Mustang',
        year: '1996',
        complectation: ['complectation-1', 'sport', 'complectation-3']
    },{
        model: 'Ferari F-450',
        year: '2012',
        complectation: ['cruiz-control', 'complectation-2', 'sport']
    },{
        model: 'Camaro',
        year: '2020',
        complectation: ['sport', 'complectation-2', 'cruiz-control']
    }
];

function allCars(arr,id){
    let findId = document.getElementById(`${id}`);
    let ul = document.createElement('ul');
    for(let i = 0;i<arr.length;i++){
        cars = arr[i];
        let li = document.createElement('li');
        li.innerText = `${i} - ${cars.model}`;
        ul.appendChild(li);
        findId.appendChild(ul);
    }
}


// allCars(cars,'some');


// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. 
// Всі властивості авто в обному блоці
function newCar(arr, id){
    let findId = document.getElementById(`${id}`);
    for(let i = 0; i<arr.length;i++){
        let div = document.createElement('div');
        div.innerText = JSON.stringify(arr[i]);
        findId.appendChild(div);
    }
}

// newCar(cars, 'some');


// функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
let usersId = [
    {
        id: 1, 
        name: 'vasya', 
        age: 31, 
        status: false
    }, {
        id: 2, 
        name: 'petya', 
        age: 30, 
        status: true
    }, {
        id: 3, 
        name: 'kolya', 
        age: 29, 
        status: true
    }, {
        id: 4, 
        name: 'olya', 
        age: 28, 
        status: false
    }
];
let citiesId = [
    {
        user_id: 3, 
        country: 'USA', 
        city: 'Portland'
    }, {
        user_id: 1, 
        country: 'Ukraine', 
        city: 'Ternopil'
    }, {
        user_id: 2, 
        country: 'Poland', 
        city: 'Krakow'
    }, {
        user_id: 4, 
        country: 'USA', 
        city: 'Miami'
    }
];

function arr(usersId,citiesId){
    let newArr=[];
    for (let i = 0; i <usersId.length; i++){   
        newArr[i] = usersId[i];
        for (let j = 0; j < citiesId.length; j++){
            if(usersId[i].id === citiesId[j].user_id)
            {
                newArr[i]["address"] = citiesId[j];
            }
        }

    }
    return newArr;
}

// console.log(arr(usersId,citiesId));

// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
function rec(n){
    const res = n/2;

    if(res > 1){
       return rec(n/2)
    }
    if(res < 1){
        return 'Noy';
    }

    return 'Yes';
}
// console.log(rec(4));