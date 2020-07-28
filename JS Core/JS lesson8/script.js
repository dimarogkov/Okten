// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
let area = document.querySelector('#area');

area.oninput = () => {
    localStorage.setItem('area', area.value);
}
area.value = localStorage.getItem('area');

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
let inputName = document.querySelector('#name');
let inputPhone = document.querySelector('#phone');
let inputEmail = document.querySelector('#email');
let inputRadio = document.querySelector('#radio');
let inputRadioTwo = document.querySelector('#radioTwo');
let inputNewArea = document.querySelector('#newarea');

inputName.oninput = () => {
    localStorage.setItem('NAME', inputName.value);
}
inputName.value = localStorage.getItem('NAME');

inputPhone.oninput = () => {
    localStorage.setItem('PHONE', inputPhone.value);
}
inputPhone.value = localStorage.getItem('PHONE');

inputEmail.oninput = () => {
    localStorage.setItem('EMAIL', inputEmail.value);
}
inputEmail.value = localStorage.getItem('EMAIL');

inputRadio.onclick = () => {
    localStorage.setItem('RADIO', inputRadio.checked);
}
inputRadio.value = localStorage.getItem('RADIO');

inputRadioTwo.onclick = () => {
    localStorage.setItem('RADIOTWO', inputRadioTwo.checked);
}
inputRadioTwo.value = localStorage.getItem('RADIOTWO');

inputNewArea.oninput = () => {
    localStorage.setItem('AREA', inputNewArea.value);
}
inputNewArea.value = localStorage.getItem('AREA');

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются"
// (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
let lastArea = document.querySelector('#lastArea');
let prevForm = document.querySelector('#prevForm');
let nextForm = document.querySelector('#nextForm');
let saveForm = document.querySelector('#saveForm');

let maxCount;
let counter = maxCount = JSON.parse(localStorage.getItem('counter') || 0   ); 
localStorage.setItem('counter', counter);


saveForm.onclick = (event) => {
    event.preventDefault();

    if (lastArea.value === '') {
        alert('Write message and save');
        return
    }

    counter++;
    localStorage.setItem('counter', counter);
    localStorage.setItem(`save ${counter}`,lastArea.value);
    if(counter > maxCount) {
        maxCount = counter
    }
};

lastArea.value = localStorage.getItem(`save ${localStorage.getItem('counter')}`);


prevForm.onclick = (event) => {
    event.preventDefault();

    counter--;
    if(counter < 1) {
        counter = 1;
    }
    localStorage.setItem('counter', counter);
    lastArea.value = localStorage.getItem(`save ${counter}`);
}

nextForm.onclick = (event) => {
    event.preventDefault();

    counter++;
    if(counter >=maxCount) {
        counter = maxCount
    }
    localStorage.setItem('counter', counter);
    lastArea.value = localStorage.getItem(`save ${counter}`);
}