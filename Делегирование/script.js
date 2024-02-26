//метод stop.Propagation()- препядствует продвижению события дальше ,но
//на текущем элементе все обрабочики отрабатывают

//метод stopImmediatePropagation() - предотвращает любое всплытие и предотвращает 
//остановку всплытия на текущ элементе
let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let elem3 = document.querySelector('#elem3')

elem1.addEventListener('click', () => {
    console.log('зелёный - всплытие');
}, true);

elem1.addEventListener('click', () => {
    console.log('зелёный - погружение');
}, false);


elem2.addEventListener('click', (event) => {
    console.log('синий - погружение')
    event.stopImmediatePropagation();
}, false);
elem2.addEventListener('click', (event) => {
    console.log('синий - всплытие');
}, true);

elem3.addEventListener('click', () => {
    console.log('алый - погружение');
}, false);
elem3.addEventListener('click', () => {
    console.log('алый - всплытие');
}, true);







let parent = document.querySelector('#parent')
let btn = document.querySelector('button')
let block = document.querySelector('#block')

btn.addEventListener('click', (event) => {
    block.classList.add('active');
    event.stopPropagation();
})

parent.addEventListener('click', () => {
    block.classList.remove('active');
})
