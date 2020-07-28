// створити об'єкт (не меньше 5ти властивостей) який описує
//dog
let dog = {
    name:"Bobik",
    heights:1,
    age:7,
    tail:true,
    breed:"saint bernard"
}
//human
let human = {
    name:'Dima',
    surname:'Rogkov',
    age:19,
    married:false,
    status:"student",
}
//auto
let bmv= {
    brand:'bmv',
    model:'x5',
    year:2010,
    cabriolet:false,
    color:'black'

}

//flat
let flat= {
    walls: 4,
    roof: true,
    color: 'green',
    size: 77,
    price: 100000
}

//book
let book= {
    author:"j.k.roaling",
    name:"Harry Potter",
    year:1997,
    genre:['fantasy','adventure'],
    number_of_books:7
}

// Створити масив та вивести його в консоль:
// з 5 собак
let dogs = [
    {
        name: 'Fivi',
        age: '3',
        skills: ['jump', 'fast run', 'skill-1']
    },{
        name: 'Bobik',
        age: '5',
        skills: ['skill-2', 'slip', 'skill-3']
    },{
        name: 'Jimi',
        age: '2',
        skills: ['skill-4', 'attack', 'skill-5']
    },{
        name: 'Tom',
        age: '5',
        skills: ['run', 'skill-6', 'skill-7']
    },{
        name: 'Kakunas',
        age: '5',
        skills: ['slip', 'jump', 'run']
    }
]
console.log(dogs);

// 3 5 людей
let people = [
    {
        name: 'Jon',
        age: '18',
        skills: ['html', 'css', 'jquery']
    },{
        name: 'Dima',
        age: '25',
        skills: ['html', 'css', 'jquery', 'js', 'haml', 'sass', 'php']
    },{
        name: 'Yan',
        age: '28',
        skills: ['html', 'css', 'react js', 'angular js']
    },{
        name: 'Mark',
        age: '38',
        skills: ['node js', 'mongo db', 'php']
    },{
        name: 'Alexander',
        age: '21',
        skills: ['html', 'css', 'jquery']
    }
]
console.log(people);

// з 5 автомобілів
// 3 5 людей
let cars = [
    {
        model: 'nissan gt',
        year: '2010',
        complectation: ['complectation-1', 'complectation-2', 'complectation-3']
    },{
        model: 'bmv x5',
        year: '2017',
        complectation: ['sport', 'cruiz-control', 'complectation-3']
    },{
        model: 'ford mustang',
        year: '1996',
        complectation: ['complectation-1', 'sport', 'complectation-3']
    },{
        model: 'ferari f-450',
        year: '2012',
        complectation: ['cruiz-control', 'complectation-2', 'sport']
    },{
        model: 'camaro',
        year: '2020',
        complectation: ['sport', 'complectation-2', 'cruiz-control']
    }
]
console.log(cars);

// створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
//house
let house={
    walls:{size:'big',color:"red"},
    residents:['Dima','Sasha','Olia',],
    square:256,
    heights:6,
    town:"Kyiv"
}
//driver
let driver={
    favouriteCars:['Opel','Nissan'],
    car:{brand:'tesla',model:'model s'},
    name:'Ivan', age:24,family:true
}
//toy
let toy={
    head:{eyes:true,nose:"green"},
    sounds:['mama','hello','sweetie'],
    color:'blue',name:'Larisa',material:'cotton'
}
//table
let table={
    fastening:['pintles','nuts'],
    components:{cover:true,legs:4},
    material:'wood',
    type:'square',
    price:1000
}

// bag
let bag={
    pockets:['the biggast one','middle','hidden pocket'],
    components:{pockets:true,handle:true,wheels:true},
    material:'linen',
    color:'black',
    price:23434
}

// Дан массив:
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// статус Андрія
for (const user of users) {
    if(user.name ==='andrey'){
        console.log(user.status);
    }
}

// статус Максима
for (const user of users) {
    if(user.name ==='max'){
        console.log(user.status);
    }
}

// ім'я передостаннього об'єкту
console.log(users[users.length - 2].name);

// ім'я третього об'єкта
console.log(users[2].name);

// вік Олега
for(const user of users) {
    if(user.name === 'oleg') {
        console.log(user.age);
    }
}

// вік Олі
for(const user of users) {
    if(user.name === 'olya') {
        console.log(user.age);
    }
}

// вік + ім'я 5го об'єкта
console.log(users[4].name + ' ' + users[4].age);

// вік + сатус Анни
for(const user of users) {
    if(user.name === 'anya') {
        console.log(user.age + ' ' + user.status);
    }
}