document.getElementsByid('Id');
document.getElementsByTagName('tagName');
document.getElementsByClassName('classname');
// Эти старые, возвращают псевдомассивы(HTMLCollection) без методов с одним 
// свойством  length. методы сверху РЕДКО ИСПОЛЬЗУЮТСЯ!!!!!1
document.querySelectorAll('.classname'); //Class HtML
document.querySelectorAll('[argumentName]'); //argument HtML
document.querySelectorAll('#idName'); //id HtML
document.querySelectorAll('div'); //div(все дивы вывидет) HtML

document.querySelector('//также указываешь - ., #, [],  etc.'); 
//Этот метож возвращает первый элемент из класса\ див\айди и т.д.


//Возвращают псевдомассивы(NodeList) без методов( НО С ОДНИМ СВОЙСТВОМ forEach)
// и с одним  свойством  length. методы querySelectorAll ЧАСТО ИСПОЛЬЗУЮТСЯ!!!!!1
