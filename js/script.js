const name = 'Harry';

const dogs = [
  { name: 'Snickers', age: 2 }, 
  { name: 'hugo', age: 8 }
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log(`Hey this is ${name} Manchanda`);

// Styled
console.log(`%cHey this is ${name} Manchanda`, 'font-size: 15px; background-color: #0ea29d;color: white;');

// warning!
console.warn('Oh No!');

// Error :|
console.error('Shit!!');

// Info
console.info('Crocodiles eat 3-4 people per year!');

// Testing
console.assert(1 === 2, 'That is wrong!')

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p')
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(dog.name);
    console.log(`This is ${dog.name}.`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(dog.name);
});

// counting
console.count('Wes');
console.count('Harry');
console.count('Wes');
console.count('Harry');
console.count('Wes');

// timing
// console.clear();
console.time('fetching data');
fetch('https://api.github.com/users/IamManchanda')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });