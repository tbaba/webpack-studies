import _ from 'lodash';
import Tiger, { nijou, NAME } from './utilities';

console.log(Tiger.say());

const component = () => {
  const element = document.createElement('div');
  const array = ['Hello', NAME, '!!'];

  element.innerHTML = _.join(array, ' && ');
  return element;
};

document.body.appendChild(component());
