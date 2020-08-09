import _ from 'lodash';
import './style.css';
import logo from './omaeno.jpeg';

const component = () => {
  const element = document.createElement('div');
  const array = ['Hello', 'world', '!!'];

  element.innerHTML = _.join(array, ' && ');
  return element;
};

document.body.appendChild(component());
document.body.classList.add('bg');

const image = new Image();
image.src = logo;
document.body.appendChild(image);
