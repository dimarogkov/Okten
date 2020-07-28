// создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
let arr = [1,50,3,90,40,21,2,6,7,27];

let sort = arr.sort((a,b) => b -a);
console.log(sort);

// при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let newSort = arr.sort();
console.log(newSort);

// при помощи filter получить числа кратные 3
let filter = arr.filter((num) => num % 3 === 0);
console.log(filter);

// при помощи filter получить числа кратные 10
let newFilter = arr.filter((num) => num % 10 === 0);
console.log(newFilter);

// перебрать (проитерировать) массив при помощи foreach()
let forE = arr.forEach((value) => {
    console.log(value);
});

// перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let newMap = arr.map((value) => value * 3);
console.log(arr);
console.log(newMap);

// создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
let words = ['namename', 'value', 'dimadima', 'qq', 'invoinvo', 'reno', 'wordword', 'job', 'newnew', 'ult'];
let wordSort = words.sort()
console.log(wordSort);

// -- отсортировать его по алфавиту  в нисходящем порядке.
let wordSortTwo = words.sort((a, b) => a>b?-1:1);
console.log(wordSortTwo);

// -- отфильтровать слова длиной менее 4х символов
let newLength = words.filter((word) => word.length <= 4);
console.log(newLength);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let point = words.map((word) => word + '!');
console.log(point);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ 
    {
        name: 'vasya', 
        age: 31, 
        status: false
    }, {
        name: 'petya', 
        age: 30, 
        status: true
    }, {
        name: 'kolya', 
        age: 29, 
        status: true
    }, {
        name: 'olya', 
        age: 28, 
        status: false
    }, {
        name: 'max', 
        age: 30, 
        status: true
    }, {
        name: 'anya', 
        age: 31, 
        status: false
    }, {
        name: 'oleg', 
        age: 28, 
        status: false
    }, {
        name: 'andrey', 
        age: 29, 
        status: true
    }, {
        name: 'masha', 
        age: 30, 
        status: true
    }, {
        name: 'olya', 
        age: 31, 
        status: false
    }, {
        name: 'max', 
        age: 31, 
        status: true
    } 
];

// відсортувати його за  віком (зростання , а потім окремо спадання)
let usersAge = users.sort((a, b) => a.age - b.age);
console.log(usersAge);
let usersAgeTwo = users.sort((a, b) => b.age - a.age);
console.log(usersAgeTwo);

// відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let wordNum = users.sort((a,b) => a<b?-1:1);
console.log(wordNum);

// пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let arrWithId = [];
let addId = users.map((value, index) => {
    value.index = index + 1;
    return value
});
console.log(addId);

// відсортувати його за індентифікатором
// console.log(addId);
let sortId = addId.sort((a,b) => {
    return b.index - a.index
});

console.log(sortId);

let cars = [
     {
         producer:"subaru",
         model: "wrx",
         year: 2010, 
         color:"blue",
         type: "sedan",
         engine: "ej204x",
         volume: 2,
         power: 400
    }, {
        producer:"subaru",
        model: "legacy",
        year: 2007, 
        color:"silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    }, {
        producer:"subaru",
        model: "tribeca",
        year: 2011, 
        color:"white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    }, {
        producer:"subaru",
        model: "leone",
        year: 1998, 
        color:"yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    }, {
        producer:"subaru",
        model: "impreza",
        year: 2014, 
        color:"red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    }, {
        producer:"subaru",
        model: "outback",
        year: 2014, 
        color:"red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    }, {
        producer:"bmw",
        model: "115",
        year: 2013, 
        color:"red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    }, {
        producer:"bmw",
        model: "315",
        year: 2010, 
        color:"white",
        type: "sedan",
        engine: "f15",
        volume: 1.5, 
        power: 120
    }, {
        producer:"bmw",
        model: "650",
        year: 2009, 
        color:"black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    }, {
        producer:"bmw",
        model: "320",
        year: 2012, 
        color:"red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    }, {
        producer:"mercedes",
        model: "e200",
        year: 1990, 
        color:"silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    }, {
        producer:"mercedes",
        model: "e63",
        year: 2017, 
        color:"yellow",
        type: "sedan",
        engine: "amg63",
        volume:3,
        power: 400
    }, {
        producer:"mercedes",
        model: "c250",
        year: 2017, 
        color:"red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    } 
];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
let sortVolume = cars.filter((value) => {
    return value.volume > 3
})
console.log(sortVolume);

// двигун = 2л
let sortVolumeTwo = cars.filter((value) => {
    return value.volume === 2
})
console.log(sortVolumeTwo);

// виробник мерс
let sortProd = cars.filter((value) => {
    return value.producer === 'mercedes'
})
console.log(sortProd);

// двигун більше 3х літрів + виробник мерседес
let mers = cars.filter((value) => {
    return value.volume > 3 && value.producer === 'mercedes'
})
console.log(mers);

// двигун більше 3х літрів + виробник субару
let suba = cars.filter((value) => {
    return value.volume > 3 && value.producer === 'subaru'
})
console.log(suba);

// сили більше ніж 300
let power = cars.filter((value) => {
    return value.power > 300
})
console.log(power);

// сили більше ніж 300 + виробник субару
let powerSuba = cars.filter((value) => {
    return value.power > 300 && value.producer === 'subaru'
})
console.log(powerSuba);

// мотор серіі ej
let motor = cars.filter((value) => {
    return value.engine.startsWith('ej')
})
console.log(motor);

// сили більше ніж 300 + виробник субару + мотор серіі ej
let subaAll = cars.filter((value) => {
    return value.power > 300 && value.producer === 'subaru'  && value.engine.startsWith('ej')
})
console.log(subaAll);

// двигун меньше 3х літрів + виробник мерседес
let newCar = cars.filter((value) => {
    return value.volume < 3 && value.producer === 'mercedes'
})
console.log(newCar);

// двигун більше 2л + сили більше 250
let motorTwo  = cars.filter((value) => {
    return value.volume > 2 && value.power > 250
})
console.log(motorTwo);

// сили більше 250  + виробник бмв
let motorTree  = cars.filter((value) => {
    return value.producer === 'bmw' && value.power > 250
})
console.log(motorTree);

let usersWithAddress = [
    {
        id: 1, 
        name: 'vasya', 
        age: 31, 
        status: false, 
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    }, {
        id: 2, 
        name: 'petya', 
        age: 30, 
        status: true, 
        address: {city: 'Lviv', street: 'Shevchenko', number: 1}
    }, {
        id: 3, 
        name: 'kolya', 
        age: 29, 
        status: true, 
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }, {
        id: 4, 
        name: 'olya', 
        age: 28, 
        status: false, 
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    }, {
        id: 5, 
        name: 'max', 
        age: 30, 
        status: true, 
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    }, {
        id: 6, 
        name: 'anya', 
        age: 31, 
        status: false, 
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    }, {
        id: 7, 
        name: 'oleg', 
        age: 28, 
        status: false, 
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    }, {
        id: 8, 
        name: 'andrey', 
        age: 29, 
        status: true, 
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    }, {
        id: 9, 
        name: 'masha', 
        age: 30, 
        status: true, 
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    }, {
        id: 10, 
        name: 'olya', 
        age: 31, 
        status: false, 
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    }, {
        id: 11, 
        name: 'max', 
        age: 31, 
        status: true, 
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }
];

// отсортировать его по id пользователей
let idFind = usersWithAddress.sort((a, b) => {
    return a.id - b.id
})
console.log(idFind);

// отсортировать его по id пользователей в обратном опрядке
let idFindTwo = usersWithAddress.sort((a, b) => {
    return b.id - a.id
})
console.log(idFindTwo);

// отсортировать его по возрасту пользователей
let userAge = usersWithAddress.sort((a, b) => {
    return a.age - b.age
})
console.log(userAge);

// отсортировать его по возрасту пользователей в обратном порядке
let userAgeTwo = usersWithAddress.sort((a, b) => {
    return b.age - a.age
})
console.log(userAgeTwo);

// отсортировать его по имени пользователей
let userName = usersWithAddress.sort((a, b) => {
    return (a.name.toLowerCase() < b.name.toLowerCase())?-1:1
})
console.log(userName);

// отсортировать его по имени пользователей в обратном порядке
let userNameTwo = usersWithAddress.sort((a, b) => {
    return (b.name.toLowerCase() < a.name.toLowerCase())?-1:1
})
console.log(userNameTwo);

// отсортировать его по названию улицы  в алфавитном порядке
let newStreet = usersWithAddress.sort((a, b) => {
    return (a.address.street.toLowerCase() < b.address.street.toLowerCase())?-1:1
})
console.log(newStreet);

// отсортировать его по номеру дома по возрастанию
let numberHome = usersWithAddress.sort((a, b) => {
    return a.address.number - b.address.number
})
console.log(numberHome);

// отфильтровать (оставить) тех кто младше 30
let userStay = usersWithAddress.filter((value) => {
    return value.age < 30
})
console.log(userStay);

// отфильтровать (оставить) тех у кого отрицательный статус
let userStatus = usersWithAddress.filter((value) => {
    return value.status === false
})
console.log(userStatus);

// отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let userAll = usersWithAddress.filter((value) => {
    return value.status === false && value.age < 30
})
console.log(userAll);

// отфильтровать (оставить) тех у кого номер дома четный
let userEnd = usersWithAddress.filter((value) => {
    return value.address.number % 2 === 0
})
console.log(userEnd);

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
let myCars=[
    {producer:'bmw',power:200,price:5000,yearOfProduction:2010,owner:{name:'Vasyl',age:25,drivingExp:5}},
    {producer:'mercedes',power:176,price:6250,yearOfProduction:2011,owner:{name:'Volodymyr',age:32,drivingExp:1}},
    {producer:'audi',power:180,price:7200,yearOfProduction:2003,owner:{name:'Olexandr',age:22,drivingExp:2}},
    {producer:'opel',power:153,price:4500,yearOfProduction:2005,owner:{name:'Petro',age:34,drivingExp:3}},
    {producer:'toyota',power:185,price:9240,yearOfProduction:2012,owner:{name:'Maria',age:23,drivingExp:4}},
    {producer:'renault',power:146,price:4680,yearOfProduction:2007,owner:{name:'Dmytro',age:19,drivingExp:1}},
    {producer:'cherry',power:150,price:3100,yearOfProduction:2004,owner:{name:'Olesya',age:39,drivingExp:12}},
    {producer:'ford',power:166,price:4000,yearOfProduction:2013,owner:{name:'Iryna',age:40,drivingExp:4}},
    {producer:'mazda',power:183,price:6750,yearOfProduction:2015,owner:{name:'Ivan',age:36,drivingExp:11}},
    {producer:'nissan',power:190,price:3450,yearOfProduction:2008,owner:{name:'Ruslan',age:29,drivingExp:9}},
    {producer:'honda',power:174,price:2200,yearOfProduction:2009,owner:{name:'Oksana',age:27,drivingExp:5}},
];

// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
let newPower = myCars.map((value, index) => {
    if (index % 2 === 0) {
        value.power *= 1.1;
    }
    return value
})
console.log(newPower);

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
let newOwner = myCars.map((value, index) => {
    if (index % 2 === 0) {
       value.owner.name = 'Dima';
       value.owner.age = 21;
       value.owner.drivingExp = 7
    }
    return value
})
console.log(newOwner);

// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
let newPowerAndPrice = myCars.map((value, index) => {
    if (index % 2 === 0) {
        value.power *= 1.1;
        value.price *=1.05
    }
    return value
})
console.log(newPowerAndPrice);

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, 
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
let newOwnerLearn = myCars.map((value) => {
    if(value.owner.drivingExp < 5 && value.owner.age > 25) {
        value.owner.drivingExp +=1
    }
    return value
})
console.log(newOwnerLearn);

// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let allPriceCar = myCars.reduce((value, currentValue) => value+currentValue.price,0);
console.log(allPriceCar);

//Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
let Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

function minMaxIndex(arr) {
    let key=+prompt("Enter key",1);
    let index=-1;
    let lastIndex=-1;
    for (let i = 0; i < arr.length; i++) {
        if(key===arr[i]) lastIndex=i;
        if(key===arr[i]&&index===-1) index=i;
        }
    return 'MinIndex = '+ index+', MaxIndex = '+lastIndex;
}
console.log(minMaxIndex(Arr));