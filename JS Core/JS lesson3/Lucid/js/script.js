// Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. 
// У файлі прописати наступні доступи та дії
// знайти всі елементі, які мають class
let findClass = document.querySelectorAll('[class]');
console.log(findClass);

// знайти всі параграфи ,та змінити текст на hello oktenweb!
let findP = document.getElementsByTagName('p')
for (let i of findP) {
    i.innerText = 'hello oktenweb!';
}

// знайти всі div та змінити ім колір на червоний
let findDiv = document.getElementsByTagName('div')
for (let i of findDiv) {
    i.style.backgroundColor = 'red';
}