
let h1Elem = $.create('h1');
let pElem = $.create('p');
let buttonElem = $.create('button');

$.html(h1Elem, 'My header');
$.html(pElem, 'для добавления к элементу события и выполнения функции (проверьте доступность контекста this и event)');
$.html(buttonElem, 'My Button');

// h1Elem.html('My header');

$.addClass(buttonElem, 'btn');

// h1Elem.addClass('btn');

console.log(h1Elem);
console.log(pElem);
console.log(buttonElem);


let links = $.search(document, 'a');
let p = $.search(document, 'p');
let list1 = $.search(document, '#list1');
let span = $.search(document, '.p2 span');

// $.search('.p2 span');

console.log(links);
console.log(p);
console.log(list1);

console.log(span);
// console.log(span[0]);

let listA = $.search(list1, 'a');
console.log(listA);

let listItems = $.search(list1, 'li');
console.log(listItems);

// list1.search('li');


let btnOrder = $.search(document, '.order');

const clickHandler = function(event) {
    console.log(event);

    alert('Click!');
}

$.on(btnOrder, 'click', clickHandler);

// btnOrder.on('click', clickHandler);