// Напишіть код, який :
// змінює колір тексту елемнту з ід main_header на будь-який інший
let head = document.getElementById('main_header');
head.style.color = 'green';

// робить шириниу елементу ul 400 пікселів
let itemUl = document.getElementsByTagName('ul');
for(const item of itemUl){
    item.style.width = '400px';
}

// робить шириниу всіх елементів з класом linkList шириною 50%
let itemLink = document.getElementsByClassName('linkList');
for(const link of itemLink){
    link.style.width = '50%';
}

// отримує текст який зберігається в елементі з класом listElement2
let secondLink = document.getElementsByClassName('listElement2');
let str = '';

for (const link of secondLink) {
    str = str + link.textContent;
}

console.log(str);

// отримує всі елементи li та змінює ім колір фону на сірий
let itemLi = document.getElementsByTagName('li');
for(const li of itemLi) {
    li.style.backgroundColor = 'silver';
}

// отримує всі елементи 'a' та додає їм клас anchor
let itemA = document.getElementsByTagName('a');
for(const a of itemA) {
    a.classList.add('anchor');
}

// отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for(const a of itemA) {
    if(a.textContent === 'link3') {
        a.style.fontSize = '40px';
    }
}

// отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for(const a of itemA) {
   a.classList.add(`element_${a.textContent}`);
}

// отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let itemSub = document.getElementsByClassName('sub-header');
let bg = prompt('Write the Name of Color');

for(const sub of itemSub) {
    sub.style.backgroundColor  = bg;
}

// отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let color = prompt('Write the Name of Text Color');
for(const sub of itemSub) {
    if(sub.textContent === 'content 2 segment' ) {
        sub.style.color  = color;
    }
}

// отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let itemSubTitle = document.getElementsByClassName('content_1');
let newText = prompt('Wrhite the New Text for the Sub Head');

for (const sub of itemSubTitle) {
    sub.innerText = newText;
}

// отримати елементи p та змінити їм paddin на довільне значення
let newP = document.getElementsByTagName('p');
for(const p of newP){
    p.style.padding = '40px';
}

// отримати елементи з класом text2 та змінити їм текст на довільне значення
let endText = document.getElementsByClassName('text2');
for(const text of endText){
    text.innerText = 'Heellow World';
}