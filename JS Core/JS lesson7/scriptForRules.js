// создать скрипт, который берет считывает на странице (rules.html) текст
//  делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
let title = document.querySelectorAll('h2');
let newDiv = document.createElement('div');
let mainDiv = document.createElement('div');
mainDiv.classList.add('main');

for(let i=0; i<title.length; i++){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<a href="#rule${i+1}"> ${title[i].textContent}</a>`;
    mainDiv.appendChild(newDiv);
};

document.body.append(mainDiv);