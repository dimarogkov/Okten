// Напишіть код,  який за допомоги document.getElementById або
// document.getElementsByClassName
// або document.getElementsByTagName :

// отримує текст з параграфа з id "content"
let cont =  document.getElementById('content');
console.log(cont);

// отримує текст з блоку з id "rules"
let ruls =  document.getElementById('rules');
console.log(ruls);

// замініть текст параграфа з id 'content' на будь-який інший
let newText = cont.innerText = 'DiMaZda';
console.log(newText);

// замініть текст параграфа з id 'rules' на будь-який інший
let newTextTwo = ruls.innerText = 'The Best';
console.log(newTextTwo);

// змініть кожному елементу колір фону на червоний
document.body.style.backgroundColor = 'red';

// змініть кожному елементу колір тексту на синій
document.body.style.color = 'blue';

// отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(ruls.classList);

// отримати всі елементи з класом fc_rules
let items = document.getElementsByClassName('fc_rules');
console.log(items);

// поміняти колір тексту у всіх елементів fc_rules на червоний
for (const item of items) {
    item.style.color='red';
}
