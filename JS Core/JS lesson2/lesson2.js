// створити масив та вивести його в консоль
let arrNull = []; 
let num = [1, 2, 3, 4, 5];
let str = ['hello', 'dima', 'it', 'js', 'ruby'];
let arr = ['dima', true, 2, false, 'bmv'];
let arrPlus = [];

arrPlus[0] = 'dima';
arrPlus[1] = 'anatoliy';

console.log(arrNull);
console.log(num);
console.log(str);
console.log(arr);
console.log(arrPlus);

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i<10; i++) {
	document.write(
		'<div>Dima the best</div>'	
	);
}

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i<10; i++) {
	document.write(
		`<div>Example text. The index is - ${i} </div>`
	);
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
j=0;
while (j<20) {
	document.write(
	`<h1>Title.</h1>`
	)
	j++;
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
j=0;
while (j<20) {
	document.write(
	`<h1>Title. The Title Index is - ${j}</h1>`
	)
	j++;
}

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let newNum = [1,2,3,4,5,6,7,8,9,10];

for ( let newNumTwo of newNum) {
	console.log(newNumTwo);
}

// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let newStr = ['a','b','c','d','dima','apple','habib','yura','usik','dimazda'];

for ( let newStrTwo of newStr) {
	console.log(newStrTwo);
}

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let newArr = [1,true,'dima',2,false,'ana',3,true,4,'viktor'];

for(let newArrTwo of newArr) {
	console.log(newArrTwo)
}

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let newArr = [1,true,'dima',2,false,'ana',3,true,4,'viktor'];

for(let newArrTwo of newArr) {
	if(typeof(newArrTwo) === 'boolean') {
		console.log(newArrTwo);
	}
}

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let newArr = [1,true,'dima',2,false,'ana',3,true,4,'viktor'];

for(let newArrTwo of newArr) {
	if(typeof(newArrTwo) === 'number') {
		console.log(newArrTwo);
	}


// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let newArr = [1,true,'dima',2,false,'ana',3,true,4,'viktor'];
}
for(let newArrTwo of newArr) {
	if(typeof(newArrTwo) === 'string') {
		console.log(newArrTwo);
	}
}

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. 
// Вивести в консоль всі його елементи в циклі.
let a = [];
a[0] = 'dima';
a[1] = 1;
a[2] = 2;
a[3] = 3;
a[4] = true;
a[5] = false;
a[6] = 'jora';
a[7] = 'cat';
a[8] = 'banana';
a[9] = 6;

console.log(a);

// Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let r=0; r<10; r++){
	document.write(`${r}`);console.log(`${r}`);
}

// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let f=0; f<100; f++){
	document.write(`${f}`);console.log(`${f}`);
}

// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(let f=0; f<100; f+=2){
	document.write(`${f}`);console.log(`${f}`);
}

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
let ff = [];
for(let i =0; i<100; i++){
	if (i%2 === 0) {
		ff.push(i);
	}
}
console.log(ff);document.write(ff);

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
let ff = [];
for(let i =0; i<100; i++){
	if (i%2 !== 0) {
		ff.push(i);
	}
}
console.log(ff);document.write(ff);

// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for (let min = 0; min<2; min++) {
	for (let sec = 0; sec<=60; sec++) {
		console.log(`${min},${sec}`);
	}
}

// Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for(let houre = 0; houre<=2; houre++){
	for(let min = 0; min<=19; min++ ) {
		for(let sec =0; sec<60; sec++) {
			console.log(`${houre},${min},${sec}`)
		}
	}
}

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let ogr = [ 'a', 'b', 'c'];
let str = '';
for ( let i = 0; i<ogr.length; i++){ 
	str.push(ogr[i]);
}
console.log(str);

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let ogr = [ 'a', 'b', 'c'];
i = 0;
let str = '';
while(i<ogr.length){
	str.push(ogr[i]);
	i++
}
console.log(str);

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let ogr = [ 'a', 'b', 'c'];
let str = '';
for(let a of ogr) {
	str.push(ogr[i]);
}
console.log(str);

// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let y = ['a', 'b', 'c'];
y.push(1);
y.push(2);
y.push(3);

console.log(y);

// Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
const arr = [1, 2, 3];
const resArr = []
for(let i = arr.length -1; i >= 0; i--) {
    resArr.push(arr[i])
}
console.log(resArr);

// Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let dima = [1,2,3];
dima.push(4,5,6);
console.log(dima);

// Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let newDima = [1,2,3];
newDima.unshift(4,5,6);
console.log(newDima);

// Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let o = ['js', 'css', 'jq'];
let newO = o.shift();
console.log(newO);

// Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let popp = ['js', 'css', 'jq'];
let newPopp = popp.pop();
console.log(newPopp);

// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let m = [1, 2, 3, 4, 5];
let slis = m.slice(3);
console.log(slis);

// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let q = [1, 2, 3, 4, 5];
let slis = q.slice(0,2);
console.log(slis);

// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
let c = [1, 2, 3, 4, 5];
let slisOne = c.splice(1,2);
console.log(c);

// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let c = [1, 2, 3, 4, 5];
let splisOne = c.splice(3,0, 'a');
let splisTwo = c.splice(4,0, 'b');
let splisTree = c.splice(5,0, 'c');
console.log(c);

// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let c = [1, 2, 3, 4, 5];
let splisOne = c.splice(1,0,'a');
let splisTwo = c.splice(2,0,'b');
let splisTree = c.splice(6,0,'c');
let splisFoure = c.splice(8,0,'e');
console.log(c);

// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. 
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let num = [1,2,3,4,5,6,7,8,9,10];
let newArr = [];

for(let i =0; i<num.length; i++) {
	newArr.push(num[i]);
};

console.log(newArr);

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// перебрати його циклом while
let gg = [2,17,13,6,22,31,45,66,100,-18];
// gg.reverse();
i = 0;
while(i<gg.length){
	console.log(i);
	i++
}

// перебрати його циклом for
for (let i = 0;i<gg.length; i++){
	console.log(i);
}

// перебрати циклом while та вивести  числа тільки з непарним індексом
while(i<gg.length){
	if (i %2 !==0) {
		console.log(gg[i]);
	}
	i++
}

// перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i<gg.length; i++){
	if (i%2 !==0) {
		console.log(gg[i]);
	}
}

// перебрати циклом while та вивести  числа тільки парні  значення
while(i<gg.length){
	if( i%2 === 0) {
		console.log(gg[i]);
	}
	i++	
}

// перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0;i<gg.length; i++){
	if (i%2 === 0) {
		console.log(gg[i]);
	}
}

// замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i<gg.length; i++){
	if(gg[i]%3 === 0){
		gg[i] = 'okten';
	}
}
console.log(gg);

// вивести масив в зворотньому порядку.
let gg = [2,17,13,6,22,31,45,66,100,-18];
gg.reverse();

// створити пустий масив та :
// заповнити його 50 парними числами за допомоги циклу.
let ff = [];
for(let i =0; i<100; i++){
	if (i%2 === 0) {
		ff.push(i);
	}
}
console.log(ff);

// заповнити його 50 непарними числами за допомоги циклу.
let ff = [];
for(let i =0; i<100; i++){
	if (i%2 !== 0) {
		ff.push(i);
	}         
}
console.log(ff);

// створити пустий масив та :
// используя Math.random заполнить массив из ???(сколько хотите) элементов.
let arr = [];
for (let i =0; i<20; i++){
	let rand = Math.round(Math.random(i));
	arr.push(rand);
}
console.log(arr);

// диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
let arr = [];
for (let i =0; i<20; i++){
	let rand = Math.floor(Math.random(i) * 732) + 8;
	arr.push(rand);
}
console.log(arr);

// вывести на консоль  каждый третий елемент
for(let j=0; j<20;j++){
	if((j+1)%3 === 0) {
		console.log(arr[j]);
	}
}

// вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
for(let j=0; j<20;j++){
	if((j+1)%3 === 0 && arr[j]%2 === 0) {
		console.log(arr[j]);
	}
}

// вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
let newArr = [];
for(let j=0; j<20;j++){
	if((j+1)%3 === 0 && arr[j]%2 === 0) {
		newArr.push(arr[j]);
		console.log(arr[j]);
	}
}
console.log(newArr);

// Вывести каждый елемент массива у которого соседний с права элемент - парный
for(let g = 0; g<20; g++) {
	if(arr[g+1]%2===0) {
		console.log(arr[g])
	}
}
// масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
let arr = [100,250,50,168,120,345,188];
let check = 0;

for ( n of arr) {
	check += n;
}
check/=arr.length;
console.log(check);

// створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr = [];
let newArr = [];

for (let i=0; i<3; i++) {
	let rand = Math.round(Math.random(i)*10) + 1;
	arr.push(rand);
	arr[i]*=5;
	newArr.push(arr[i]);
}

console.log(newArr);

// створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.
let arr = ['dima', 1, 2, 16, true, false, 'vasia'];
let newArr = [];
for (let i = 0; i<arr.length; i++) {
	if (typeof(arr[i]) === 'number') {
		newArr.push(arr[i]);
	}
}
console.log(newArr);