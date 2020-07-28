// создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
let player = {
    name: 'mesi',
    number: 7,
    position: 'center'
}
console.log(player);

let car = {
    name: 'opel',
    model: 'f-450',
    strahovka: false
}
console.log(car);

let dog = {
    poroda: 'haski',
    name: 'bobik',
    year: 2
}
console.log(dog);

let book = {
    name: 'be or not to be',
    pages: 330,
    new: false
}
console.log(book);

let iAm = {
    work: 'barista',
    friends: true,
    name: 'Vika'
}
console.log(iAm);

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. 
// Опишите что угодно, машину, картину, болт.

let football = {
    name: 'mesi',
    number: 7,
    position: [{position: 'center'},{position: 'right'}],
    contract: true
}
console.log(football);

let sportcar = {
    cost: 100,
    model: 'f-450',
    strahovka: false,
    tuning: [{tuningElement:'weels'},{tuningElement: 'turbo'},{tuningElement: 'spoler'}]
}
console.log(sportcar);

let dogs = {
    poroda: 'haski',
    klichka: 'bobik',
    year: 2,
    hobis:[{hobi:'play with boll'},{hobi: 'swimming'}]
}
console.log(dogs);

let bookNew = {
    avtor: 'dima',
    pages: 330,
    new: false,
    colors: [{color:'green'},{color:'yellow'}]
}
console.log(bookNew);

let aboutMe = {
    work: 'barista',
    friends: true,
    girl: 'Vika',
    brothers: [{brothersName: 'Andey'},{brothersName:'Oleg'}]
}
console.log(aboutMe);

// При помощи for in вывести все ключи всех объектов из задания 1 и 2

let objs = [player,car,dog, book,iAm,football,sportcar,dogs,bookNew,aboutMe]
for(let obj of objs) {
    for(let key in obj){
        console.log(key);
    }
};

// При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
let objs = [player,car,dog, book,iAm,football,sportcar,dogs,bookNew,aboutMe];

for(let obj of objs) {
    console.log(Object.keys(obj));
};

// Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. 
let cars = [
    {   
        model: 'mustang gt',
        year: '1989',
        strong: '140',
        color: 'blue'
    }, {   
        model: 'opel',
        year: '2000',
        strong: '160',
        color: 'orang'
    },{   
        model: 'toyota',
        year: '2002',
        strong: '230',
        color: 'balck'
    },{   
        model: 'cadialc',
        year: '2008',
        strong: '240',
        color: 'silver'
    },{   
        model: 'cadialc new',
        year: '2011',
        strong: '270',
        color: 'dark'
    },{   
        model: 'porsh',
        year: '2010',
        strong: '410',
        color: 'blue'
    },{   
        model: 'panamero',
        year: '2009',
        strong: '112',
        color: 'yellow'
    },{   
        model: 'honda acord',
        year: '2014',
        strong: '290',
        color: 'silver'
    },{   
        model: 'reno',
        year: '2014',
        strong: '211',
        color: 'green'
    },{   
        model: 'ford mustang',
        year: '2016',
        strong: '90',
        color: 'silver'
    }    
]
console.log(cars);

// Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион

let cities = [
    {
        name: 'Madrid',
        population: '9 bilion',
        country: 'Spanish',
        region: 'right'
    },{
        name: 'Kiev',
        population: '20 bilion',
        country: 'Ukraine',
        region: 'center'
    },{
        name: 'London',
        population: '38 bilion',
        country: 'Englend',
        region: 'bottom'
    }
    
]
console.log(cities);

// Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
//  Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let carsNew = [ 
    {
        model: 'ferari',
        year: '1996',
        powerfull: '400',
        color: 'red',
        driver: {
            nameDriver: 'jon',
            age: '33',
            pol: 'man',
            stag: '5 years'
        }
    },{
        model: 'vas2109',
        year: '2010',
        powerfull: '300',
        color: 'blue',
        driver: {
            nameDriver: 'Sergio',
            age: '19',
            pol: 'man',
            stag: '1 years'
        }
    },{
        model: 'ford focus',
        year: '2005',
        powerfull: '100',
        color: 'silver',
        driver: {
            nameDriver: 'Gregor',
            age: '28',
            pol: 'man',
            stag: '2 years'
        }
    }
]
console.log(carsNew);

// проитерировать каждый массив из задания 5,6,7 при помощи while.
// 5
let i=0;
while(i<cars.length){
    console.log(cars[i]);
    i++;
}

// 6
let i=0;
while(i<cities.length){
    console.log(cities[i]);
    i++;
}

// 7
let i=0;
while(i<carsNew.length){
    console.log(carsNew[i]);
    i++;
}

// проитерировать каждый массив из задания 5,6,7 при помощи for
// 5
for(let i = 0; i<cars.length; i++){
    console.log(cars[i]);
}

// 6
for(let i = 0; i<cities.length; i++){
    console.log(cities[i]);
}

// 7
for(let i = 0; i<carsNew.length; i++){
    console.log(carsNew[i]);
}

// проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// 5
for(let i of cars) {
    console.log(i);
}

// 6
for(let i of cities) {
    console.log(i);
}

// 7
for(let i of carsNew) {
    console.log(i);
}

// взять объекты из задания 1 и превратить каждый в json.
let jsonItemOne = JSON.stringify(player);
console.log(jsonItemOne);
let jsonItemTwo = JSON.stringify(car);
console.log(jsonItemTwo);
let jsonItemTree = JSON.stringify(dog);
console.log(jsonItemTree);
let jsonItemFoure = JSON.stringify(book);
console.log(jsonItemFoure);
let jsonItemFive = JSON.stringify(iAm);
console.log(jsonItemFive);

// взять json из задания 11 и превратить их обратно в объекты.
let parsItemOne = JSON.parse(jsonItemOne);
console.log(parsItemOne);
let parsItemTwo = JSON.parse(jsonItemTwo);
console.log(parsItemTwo);
let parsItemTree = JSON.parse(jsonItemTree);
console.log(parsItemTree);
let parsItemFoure = JSON.parse(jsonItemFoure);
console.log(parsItemFoure);
let parsItemFive = JSON.parse(jsonItemFive);
console.log(parsItemFive);

// взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
for(let i of cars){
    i=JSON.stringify(i);
    console.log(i);
}

// взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
for(let i of cities){
    i= JSON.stringify(i);
    console.log(i);
}

// взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
let newArr = [];
for(let i of carsNew){
    i= JSON.stringify(i);
    newArr.push(i);
}
console.log(newArr);

// Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. 
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

let users = [
    {
        name: 'dima',
        age: 31,
        skills:['driver','householder']
    },{
        name: 'gera',
        age: 30,
        skills: ['1 skill','2 skill','3 skill']
    },{
        name: 'niko',
        age: 29,
        skills: ['first skill','second skill']
    },{
        name: 'olya',
        age: 28,
        skills: [1,2,3,4,5,6,7]
    }
];
console.log(users);

for (let i of users) {
    console.log(i.skills);
}

// Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. 
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. 
// Скопировать все skills всех пользователей в отедльный массив
let usersSkill = [];
for(let i of users){
    usersSkill.push(i.skills);
}
console.log(usersSkill);

// За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
let users = [
    {
        name: 'vasya', 
        age: 31, 
        status: false, 
        skills: ['java', 'js']
    },{
        name: 'petya', 
        age: 30, 
        status: true, 
        skills: ['java', 'js', 'html']
    },{
        name: 'kolya', 
        age: 29, 
        status: true, 
        skills: ['mysql', ',mongo']
    },{
        name: 'olya', 
        age: 28, 
        status: false, 
        skills: ['java', 'js']
    },{
        name: 'max', 
        age: 30, 
        status: true, 
        skills: ['mysql', ',mongo']
    }
];

for(let i of users){
    console.log(i);
    for(let j = 0; j<i.skills.length; j++){
        console.log(i.skills[j]);
    }
}

// З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

let newArr = [];
for(let i of users){
    newArr.push(i.address);
}
console.log(newArr);

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. 
// Всі данні в одному блоці.
let div = document.createElement('div');
document.body.append(div);

for(let i of users){
    let divUser = document.createElement('div');
    divUser.innerText = JSON.stringify(i);
    div.appendChild(divUser);
}

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, 
// розділивши всі властивості по своїм блокам (div>div*4)
for(let i of users){
    let divAll = document.createElement('div');
    let divName = document.createElement('div');
    let divAge = document.createElement('div');
    let divStatus = document.createElement('div');
    let divAdrees = document.createElement('div');

    divName.innerText = JSON.stringify(i.name);
    divAge.innerText = JSON.stringify(i.age);
    divStatus.innerText = JSON.stringify(i.status);
    divAdrees.innerText = JSON.stringify(i.address);

    divAll.appendChild(divName);
    divAll.appendChild(divAge);
    divAll.appendChild(divStatus);
    divAll.appendChild(divAdrees);

    div.appendChild(divAll);
}

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, 
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// let div = document.createElement('div');
// document.body.append(div);

for(let i of users){
    let divAll = document.createElement('div');
    let divName = document.createElement('div');
    let divAge = document.createElement('div');
    let divStatus = document.createElement('div');
    let divAdrees = document.createElement('div');

    divName.innerText = JSON.stringify(i.name);
    divAge.innerText = JSON.stringify(i.age);
    divStatus.innerText = JSON.stringify(i.status);
    
    for(let j in i.address){
        let pAdress = document.createElement('p');
        pAdress.innerText = JSON.stringify(j)
        divAdrees.appendChild(pAdress);
    }

    divAll.appendChild(divName);
    divAll.appendChild(divAge);
    divAll.appendChild(divStatus);
    divAll.appendChild(divAdrees);

    div.appendChild(divAll);
}

// Дано 2 масиви з рівною кількістю об'єктів.
let usersWithId = [
    {
        id: 1, 
        name: 'vasya', 
        age: 31, 
        status: false
    },{
        id: 2, 
        name: 'petya', 
        age: 30, 
        status: true
    },{
        id: 3, 
        name: 'kolya', 
        age: 29, 
        status: true
    },{
        id: 4, 
        name: 'olya', 
        age: 28, 
        status: false
    }
];

let citiesWithId = [
    {
        user_id: 3, 
        country: 'USA', 
        city: 'Portland'
    },{
        user_id: 1, 
        country: 'Ukraine', 
        city: 'Ternopil'
    },{
        user_id: 2, 
        country: 'Poland', 
        city: 'Krakow'
    },{
        user_id: 4, 
        country: 'USA', 
        city: 'Miami'
    }
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
for (let i = 0; i < usersWithId.length; i++){
    for (let j = 0; j < citiesWithId.length; j++){
        if(usersWithId[i].id === citiesWithId[j].user_id){
            usersWithId[i]["address"] = citiesWithId[j];
        }
    }
}
console.log(usersWithId);

// Записати цей об'єкт в новий масив
let newArr = [];
for (let i = 0; i < usersWithId.length; i++){
    for (let j = 0; j < citiesWithId.length; j++){
        if(usersWithId[i].id === citiesWithId[j].user_id){
            usersWithId[i]["address"] = citiesWithId[j];
            let newObg = usersWithId[i]["address"];
            newArr.push(newObg);
        }
    }
}
console.log(newArr);

// створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
let div = document.createElement('div');
div.id = 'dima';
div.classList.add('rogkov');
div.innerText = 'Hellow People!';
document.body.append(div);

// id
let listenId = document.getElementById('dima');
console.log(listenId.textContent);

// class
let listenClass = document.getElementsByClassName('rogkov');

for(let i of listenClass){
    console.log(i.textContent);
}

// тегу
let listenTag = document.getElementsByTagName('div');

for(let i of listenClass){
    console.log(i.textContent);
}

// змінити цей текст використовуючи селектори id, class,  tag
// id
listenId.innerText = 'Hi is new ID Text';

// class
for(let i of listenClass){
    i.innerText = 'Hi is new Class Text';
}

// tag
for(let i of listenClass){
    i.innerHTML = 'Hi is new Tag Text';
}

// змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// id
listenId.style.width = '300px';
listenId.style.height = '500px';

// class
for(let i of listenClass){
    i.style.width = '300px';
    i.style.height = '500px';
}

// tag
for(let i of listenClass){
    i.style.width = '300px';
    i.style.height = '500px';
}

//за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
let Table = document.createElement('table');
let tr = document.createElement('tr');

for (let i=0; i<3; i++){
    let td = document.createElement('td');
    tr.appendChild(td);
}

Table.appendChild(tr);
document.body.append(Table);


//за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
let Table = document.createElement('table');

for (let i=0; i<10; i++){
    let tr = document.createElement('tr');
    Table.appendChild(tr);
    for (let i=0; i<3; i++){
        let td = document.createElement('td');
        tr.appendChild(td);
    }
}

document.body.append(Table);


//за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
let Table = document.createElement('table');

for (let i=0; i<10; i++){
    let tr = document.createElement('tr');
    Table.appendChild(tr);
    for (let i=0; i<5; i++){
        let td = document.createElement('td');
        tr.appendChild(td);
    }
}

document.body.append(Table);


//за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. 
// n та m отримати з prompt
let Table = document.createElement('table');
let n = prompt('Enter number of rows');
let m = prompt("Enter number of columns");

for (let i=0; i<n; i++){
    let n = document.createElement('tr');
    Table.appendChild(n);
    for (let i=0; i<m; i++){
        let m = document.createElement('td');
        n.appendChild(m);
    }
}

document.body.append(Table);

// Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let wrap = document.createElement('div');

for (let i = 0; i < rules.length; i++) {

    let allRulls = document.createElement('div');
    let allTitle = document.createElement('div');
    let allBody = document.createElement('div');

    allTitle.innerText=rules[i].title;
    allBody.innerText=rules[i].body;

    allRulls.appendChild(allTitle);
    allRulls.appendChild(allBody);
    wrap.appendChild(allRulls);
}

document.body.append(wrap);