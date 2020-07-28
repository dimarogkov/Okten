// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту

function Tagg(name,des,arr=[]){
    this.name = name;
    this.des = des;
    this.arr = arr;

    this.pushArr = function(secondName,secondDes){
        this.arr.push(secondName);
        this.arr.push(secondDes);
    }
}

let aa = new Tagg('a',`Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.`,
['accesskey', 'Переход к области с помощью комбинации клавиш']);
console.log(aa);
let div = new Tagg('div',`Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`,
['align', 'Задает выравнивание содержимого тега']);
console.log(div);
let h1 = new Tagg('h1',`HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня`,
['align', 'Определяет выравнивание заголовка.']);
console.log(h1);
let span = new Tagg('span',`Тег <span> предназначен для определения строчных элементов документа`,
['class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.']);
console.log(span);
let input = new Tagg('input',`Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.`,
['accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.']);
console.log(input);
let form = new Tagg('form',`Тег <form> устанавливает форму на веб-странице.`,
['autocomplete', 'Включает автозаполнение полей формы.']);
console.log(form);
let option = new Tagg('option',`Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>`,
['disabled', 'Заблокировать для доступа элемент списка.']);
console.log(option);
let select = new Tagg('select',`Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.`,
['disabled', 'Блокирует доступ и изменение элемента.']);
console.log(select);

// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
class Tag {
    constructor(titleOfTag,action,attrs = []){
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs
        this.pushAtr = function(titleOfAttr,actionOfAttr){
            this.attrs.push(titleOfAttr);
            this.attrs.push(actionOfAttr);
        }
    }
}

let newTag = new Tag('a',`Тег ${this.titleOfTag} является одним из важных элементов HTML и предназначен для создания ссылок.`,
['accesskey', 'Переход к области с помощью комбинации клавиш']);
console.log(newTag);
let div = new Tag('div',`Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`,
['align', 'Задает выравнивание содержимого тега']);
console.log(div);
let h1 = new Tag('h1',`HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня`,
['align', 'Определяет выравнивание заголовка.']);
console.log(h1);
let span = new Tag('span',`Тег <span> предназначен для определения строчных элементов документа`,
['class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.']);
console.log(span);
let input = new Tag('input',`Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.`,
['accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.']);
console.log(input);
let form = new Tag('form',`Тег <form> устанавливает форму на веб-странице.`,
['autocomplete', 'Включает автозаполнение полей формы.']);
console.log(form);
let option = new Tag('option',`Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>`,
['disabled', 'Заблокировать для доступа элемент списка.']);
console.log(option);
let select = new Tag('select',`Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.`,
['disabled', 'Блокирует доступ и изменение элемента.']);
console.log(select);

//- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
let Car = {
    model: 'Cadilac',
    company: 'USA',
    year: 2016,
    speed: 220,
    motor: '3.5',
    Drive () {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`)
    },
    Info(){
        console.log(this);
    },
    IncreaseMaxSpeed(newSpeed) {
        this.speed +=  newSpeed;
        console.log(`Максимальної швидкость після підвищення - ${this.speed}`);
    },
    ChangeYear (newValue){
        this.year += newValue;
        console.log(`Рік випуску змінено. Тепер рік випуску авто - ${this.year}`);
    },
    addDriver (driver){
        this.driver = driver;
        console.log(this.driver);
    }
}
Car.Drive();
Car.Info();
Car.IncreaseMaxSpeed(40);
Car.ChangeYear(4);
Car.addDriver('Petya');


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function CarTwo(model,company,year,speed,motor) {
    this.model = model;
    this.company = company;
    this.year = year;
    this.speed = speed;
    this.motor = motor;

    this.Drive = function () {
        console.log(`їдемо зі швидкістю ${speed} на годину`);
    }
    this.Info = function() {
        console.log(this);
    }
    this.IncreaseMaxSpeed = function(newSpeed){
        this.speed += newSpeed;
        console.log(`Максимальної швидкость після підвищення - ${this.speed}`);
    }
    this.ChangeYear = function(newValue){
        this.year += newValue;
        console.log(`Рік випуску змінено. Тепер рік випуску авто - ${this.year}`);
    }
    this.AddDriver = function(driver){
        this.driver = driver;
        console.log(this.driver);
    }
}

let newCar = new CarTwo('camaro','company',1996,90,'2.3');
newCar.Drive();
newCar.Info();
newCar.IncreaseMaxSpeed(20);
newCar.ChangeYear(3);
newCar.AddDriver('dima');

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class CarTree {    
    constructor(model,company,year,speed,motor) {
        this.model = model;
        this.company = company;
        this.year = year;
        this.speed = speed;
        this.motor = motor;
    }

    Drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }
    Info() {
        console.log(this);     
    }
    IncreaseMaxSpeed(newSpeed){
        this.speed += newSpeed;
        console.log(`Максимальної швидкость після підвищення - ${this.speed}`);
    }
    ChangeYear(newValue){
        this.year += newValue;
        console.log(`Рік випуску змінено. Тепер рік випуску авто - ${this.year}`);
    }
    AddDriver(driver){
        this.driver = driver;
        console.log(this.driver);
    }
}

let newCarTwo = new CarTree('camaro','company',1996,90,'2.3');
console.log(newCarTwo);
nenewCarTwowCar.Drive();
newCarTwo.Info();
newCarTwo.IncreaseMaxSpeed(20);
newCarTwo.ChangeYear(3);
newCarTwo.AddDriver('dima');

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
class Popelyshka {
    constructor(name,age,foot){
        this.name = name;
        this.age = age;
        this.foot = foot;
    }   
}

class Princ extends Popelyshka  {
    constructor(name,age,findfoot){
        super(name,age)
        this.findfoot = findfoot;
    }   
}

let popelyshka = new Popelyshka('Lesya',37,37);
console.log(popelyshka);
let princ = new Princ('Yan',43,37);
console.log(princ);


let girls = [];
for(let i =0; i<10; i++){
    girls[i] = new Popelyshka('karna',22,girls.length + 35);
}
console.log(girls);

for(let i =0; i<girls.length; i++){
    if(princ.findfoot === girls[i].foot){
        console.log(`Попелюшка яку звати ${girls[i].name} має бути з принцом`);
    }
}

// створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function Popelyshka(name,age,foot){
    this.name = name;
    this.age = age;
    this.foot = foot;
}

function Princ (name,age,findfoot) {
    this.name = name;
    this.age = age;
    this.findfoot = findfoot;
}

let popelyshka = new Popelyshka('Jesika',22,35);
console.log(popelyshka);
let princ = new Princ('Markiz',23,37);
console.log(princ);

let girls = [];
for(let i = 0; i<10; i++){
    girls[i] = new Popelyshka('karna',22,girls.length + 35);
}

console.log(girls);

for(let i = 0;i<girls.length; i++){
    if(princ.findfoot === girls[i].foot){
        console.log(`Имя підходящої попелюшки - ${girls[i].name}`);
    }
}