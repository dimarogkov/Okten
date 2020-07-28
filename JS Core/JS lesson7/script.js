// Создать произвольный елемент с id = text.  Используя JavaScript, 
// сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let deleteElement = document.getElementById('text');
deleteElement.onclick = () => {
    deleteElement.style.display = 'none'
}

// Создайте кнопку, при клике на которую, она будет скрывать сама себя.               !!!!!!!!!!!!!!!
let buttonDelete = document.querySelector('#btn');
buttonDelete.onclick = () => {
    console.log('sad');
    buttonDelete.style.display = 'none'
}

// створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//  та повідомити про це користувача
let findAge = document.querySelector('#age');
let formAge = document.forms.formAge;

formAge.btn.onclick = (event) => {
    event.preventDefault();

    let age = findAge.value;
    age > 18 ? console.log('ok') : console.log('no');
}

// Создайте меню, которое раскрывается/сворачивается при клике
let menuNav = document.querySelector('#menuItem');
let menuTitle = document.querySelector('#menuTitle');
menuTitle.onclick = (event) => {
    event.preventDefault();
    menuNav.classList.toggle('xxx');
}

// Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}. !!!!
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.
let newObj = [
    {
        title:'lorem',
        des:'lorem ipsum dolo sit ameti'
    } , {
        title:'lorem 2',
        des:'lorem ipsum dolo sit ameti 2'
    }, {
        title:'lorem 3',
        des:'lorem ipsum dolo sit ameti 3'
    }
];


for(let elem of newObj){ 

    let newUl = document.createElement('ul');
    let newLiTitle = document.createElement('li');
    let newLiDes = document.createElement('li');
    let button = document.createElement('input');

    button.type = 'submit';
    button.value = 'Click';

    let title = elem.title;
    let des = elem.des;

    newLiTitle.innerText = title;
    newLiDes.innerText = des;

    button.onclick = (event) => {
        event.preventDefault();
        newLiTitle.classList.toggle('hide');
        newLiDes.classList.toggle('hide');
    }

    newUl.appendChild(newLiTitle);
    newUl.appendChild(newLiDes);
    newUl.appendChild(button);
    document.body.append(newUl);
}

// створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let butt = document.querySelector('#formClick');
butt.onclick = () => {
    let formOne = document.forms.form_one;
    let formTwo = document.forms.form_two;
    
    let inputOne = formOne.input_one.value;
    let inputTwo = formOne.input_two.value;
    let inputTree = formTwo.input_tree.value;
    let inputFoure = formTwo.input_foure.value;

    console.log(
        'Input one - ' + inputOne + '\n',
        'Input two - ' + inputTwo + '\n',
        'Input tree - ' + inputTree + '\n',
        'Input foure - ' + inputFoure,
    );
};

// Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
function table(tr,th,type) {
    let crateTable = document.createElement('table');

    for (let i = 0; i < tr; i++) {
        let createTr = document.createElement('tr');
        crateTable.appendChild(createTr);
        for (let i = 0; i < th; i++) {
            let createTh = document.createElement('th');
            createTr.appendChild(createTh);
        }
    }

    let typeElem = document.createElement(`${type}`);

    typeElem.appendChild(crateTable);
    document.body.append(typeElem);
};
table(4,5,'section');

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let btn = document.querySelector('#formClickTwo');
let formTake = document.forms.form_take;

btn.onclick = () => {
    function newTable(inputOne,inputTwo,inputTree) {
        let crateTable = document.createElement('table');
        inputOne = formTake.input_one.value;
        inputTwo = formTake.input_two.value;
        inputTree = formTake.input_tree.value;
    
        for (let i = 0; i < inputOne; i++) {
            let createTr = document.createElement('tr');
            crateTable.appendChild(createTr);
            for (let i = 0; i < inputTwo; i++) {
                let createTh = document.createElement('th');
                createTh.innerText = inputTree;
                createTr.appendChild(createTh);
            }
        }
        document.body.append(crateTable);
    }
    newTable();
}

// Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
let blocks = document.querySelectorAll('.block');

let i = 0;
nextBtn.onclick = () => {
    blocks[i].style.display = 'none';
    i++;
    if ( i === blocks.length ){
        i = 0;
    }
    blocks[i].style.display = 'block';
}
prevBtn.onclick = () => {
    blocks[i].style.display = 'none';
    i--;
    if ( i < 0 ){
        i = blocks.length - 1;
    }
    blocks[i].style.display = 'block';
}

// Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
let mat = ['дурак', 'чмо', 'тупий', 'дебіл', 'придурок'];
let inputReq = document.querySelector('.req');
let btnReq = document.querySelector('#btnReq');

btnReq.onclick = () => {
    let info = inputReq.value;
    
    for(let i = 0; i<mat.length; i++){
        if(info === mat[i]){
            alert('Це слово не можна писати');
        }
    }

    if(info === ''){
        alert('Ведіть щось в поле і натисніть знову');
    }
}

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
let mat = ['дурак', 'чмо', 'тупий', 'дебіл', 'придурок'];
let inputReq = document.querySelector('.req');
let btnReq = document.querySelector('#btnReq');

btnReq.onclick = () => {
    let info = inputReq.value.split(' '); 
    for(let i of info){
        for(let j of mat){
            if(i === j){
                alert('Це слово не можна писати');
            }
        }
    }
}

// взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let falseUser = document.querySelector('.falseUser');
let oldUser = document.querySelector('.oldUser');
let towmUser = document.querySelector('.towmUser');

falseUser.onclick = () => {
    if (falseUser.checked) {
        let infoUserFalse = usersWithAddress.filter((value) => {
            return value.status === false
        });

        for(let i = 0; i<infoUserFalse.length; i++){
            let divForUsers = document.createElement('div');
            let spanForUsers = document.createElement('span');

            spanForUsers.innerText =  JSON.stringify(infoUserFalse[i].id) + ' name - ' + JSON.stringify(infoUserFalse[i].name)
            + ' age -  ' + JSON.stringify(infoUserFalse[i].age) + ' status - ' + JSON.stringify(infoUserFalse[i].status) + ' city - ' +
            JSON.stringify(infoUserFalse[i].address.city) + ' street - ' + JSON.stringify(infoUserFalse[i].address.street)  + ' number - ' +
            JSON.stringify(infoUserFalse[i].address.number);
            
            divForUsers.appendChild(spanForUsers);
            document.body.append(divForUsers);
        }
    }
}

oldUser.onclick = () => {
    if (oldUser.checked) {
        let infoUserAGe = usersWithAddress.filter((value) => {
            return value.age > 29
        });
        
        for(let i = 0; i<infoUserAGe.length; i++){
            let divForUsers = document.createElement('div');
            let spanForUsers = document.createElement('span');

            spanForUsers.innerText =  JSON.stringify(infoUserAGe[i].id) + ' name - ' + JSON.stringify(infoUserAGe[i].name)
            + ' age -  ' + JSON.stringify(infoUserAGe[i].age) + ' status - ' + JSON.stringify(infoUserAGe[i].status) + ' city - ' +
            JSON.stringify(infoUserAGe[i].address.city) + ' street - ' + JSON.stringify(infoUserAGe[i].address.street)  + ' number - ' +
            JSON.stringify(infoUserAGe[i].address.number);
            
            divForUsers.appendChild(spanForUsers);
            document.body.append(divForUsers);
        }
    }
}

towmUser.onclick = () => {
    if (towmUser.checked) {
        let infoUserTown = usersWithAddress.filter((value) => {
            return value.address.city === 'Kyiv'
        });
        
        for(let i = 0; i<infoUserTown.length; i++){
            let divForUsers = document.createElement('div');
            let spanForUsers = document.createElement('span');

            spanForUsers.innerText =  JSON.stringify(infoUserTown[i].id) + ' name - ' + JSON.stringify(infoUserTown[i].name)
            + ' age -  ' + JSON.stringify(infoUserTown[i].age) + ' status - ' + JSON.stringify(infoUserTown[i].status) + ' city - ' +
            JSON.stringify(infoUserTown[i].address.city) + ' street - ' + JSON.stringify(infoUserTown[i].address.street)  + ' number - ' +
            JSON.stringify(infoUserTown[i].address.number);
            
            divForUsers.appendChild(spanForUsers);
            document.body.append(divForUsers);
        }
    }
}