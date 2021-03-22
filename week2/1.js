// Built in functions

// 1. Math.PI
const pi = Math.PI; // 3.141592653589793
console.log(`1. pi: ${pi}`);

// 2. Math.ceil
console.log(`2. ceil pi: ${Math.ceil(pi)}`);

// 3. Math.floor
console.log(`3. floor pi: ${Math.floor(pi)}`);

// 4. Math.abs
console.log(`4. ${Math.abs(-256)}`);

// 5. Math.random
// console.log(Math.random() * 3);
let dice = Math.floor(Math.random() * 6);
console.log(`5. random dice ${dice}`);

// 6. replace
let greet = 'Welcome to Indonesia';
greet = greet.replace('Indonesia', 'Uluwatu');
console.log(`6. ${greet}`);

// 7. Includes
const name = 'Sadio Mane';
console.log(`7. includes: ${name.includes('adi')}`); //true

// 8. Map
let arr = ['Jack', 'Jaqueline', 'Jason', 'Rahmat'];
const arrMap = arr.map(el => el += ' ehehehe');
console.log(`8. ${arrMap}`);

// 9. Some
let myFriendsAges = [18, 21, 23, 24, 26, 20];
const adult = (el) => el >= 18;
console.log(`9. ${myFriendsAges.every(adult)}`);

// 10. Every
console.log(`10. ${myFriendsAges.every(adult)}`);