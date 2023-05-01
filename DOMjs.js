const container = document.querySelector('#container');

const content = document.createElement('div2');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
content.style.color = 'red';
container.appendChild(content);
const content2 = document.createElement('p');
content2.classList.add('p');
content2.textContent = 'I am red';
content2.style.color = 'red';

const content3 = document.createElement('h3');
content3.classList.add('h3');
content3.textContent = 'I am blue H3';
content3.style.color = 'blue';

const content4 = document.createElement('div');
content4.classList.add('div');
content4.style.backgroundColor = 'pink';
content4.appendChild(content2);
content4.appendChild(content3);
content4.style.border = 'solid black';
container.appendChild(content4);

const btn = document.querySelector('#button_1');
//btn.addEventListener('click', () => {
 //   alert("Hello World");
//});
function alertFunction() {
    alert("YAY! YOU DID IT!");
}
btn.onclick = alertFunction;

