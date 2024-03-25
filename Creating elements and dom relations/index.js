const heading = document.createElement('h3');

const headingText = document.createTextNode('Buy high quality organic fruits online');
heading.appendChild(headingText);
heading.style.fontStyle='italic';

const divs = document.getElementsByTagName('div');

const firstDiv = divs[0];
firstDiv.appendChild(heading);

const para = document.createElement('p');
const  paraText = document.createTextNode('Total fruits: 4');
para.appendChild(paraText);

const fruits = document.querySelector('.fruits');

const secondDiv = divs[1];
// secondDiv.appendChild(para);
secondDiv.insertBefore(para, fruits);

para.id = 'fruits-total';