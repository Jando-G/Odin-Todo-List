import './style.css';

const content = document.getElementById('content');
const test = document.createElement('div');
test.innerHTML = 'hello world';
content.appendChild(test);