'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');  

inputRub.addEventListener('input', () => {
const request = new XMLHttpRequest();

    request.open("GET", 'js/current.json'); //  request.open(method, url, async, login, password);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = 'Наебнулося';
    //     }
    // });


    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Наебнулося';
        }
    });

    // Свойства объекта XMLHttpRequest
   // status например 404, 403, 0 , 200 и тд
   // statusText (ок нот фаунд)
   // response
   // readyState 5 значений или 4 готовности ответа от серва

   //События объекта XMLHttpRequest
//    readystatechange - это событие при изменении
// отслеживает значение свойства readyState 
//   load - активируется когда запрос полностью готов
// (он может быть завершен неуспешно)

});