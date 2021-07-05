const body = document.querySelectorAll('body'),
      btn = document.querySelector('button');
    
console.log(btn);

// btn.style.backgroundColor ='black';
// btn.style.width ='200px';
btn.style.height ='200px';
// btn.style.borderRadius ='100%';

btn.style.cssText = 'background-color: blue, width: 150';   

const div = document.createElement('div'),
      text = document.createTextNode('WAZZUUUP');

div.classList.add('black');

document.body.append(div); // Добавить в конец 
// btn.appendChild(div); тоже только старое
// document.querySelector('button').append(div);

// document.body.prepend(div); // Добавить в начало }Вот этих раньше не было
// btn.before(div); //Добавить до                   }пользовали btn.insertBefore
// btn.after(div); // Добавить после                } (div, "перед чем надо вставить");

// div.innerHTML = 'Hello Vasy';
div.innerHTML = "<h1>'Hello Vasy'</h1>"; // Сюда кроме тескта можно хтмл сложить

// div.textContent = 'Hello'; // Тут только текст
div.insertAdjacentHTML('beforebegin', "<h2>'HAAI'</h2>");