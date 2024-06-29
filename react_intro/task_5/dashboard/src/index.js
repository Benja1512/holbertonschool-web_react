import './style.css';
import exampleImage from './image.png';

console.log('Hello, Webpack!');

const img = document.createElement('img');
img.src = exampleImage;
document.body.appendChild(img);
