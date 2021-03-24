// Built in functions

// 1. Math.PI
// Menghasilkan output berupa nilai pi International, 3.141592653589793
const pi = Math.PI;
console.log(`1. pi: ${pi}`);

// 2. Math.ceil
// Membulatkan keatas number yang tidak bulat
console.log(`2. ceil pi: ${Math.ceil(pi)}`);

// 3. Math.floor
// Membulatkan kebawah number yang tidak bulat
console.log(`3. floor pi: ${Math.floor(pi)}`);

// 4. Math.abs
// Menghasilkan nilai absolute, atau positif
console.log(`4. ${Math.abs(-256)}`);

// 5. Math.random
// Menghasilkan output berupa angka random. Limit dari angka yang dihasilkan diatur di parameter
// console.log(Math.random() * 3);
let dice = Math.floor(Math.random() * 6);
console.log(`5. random dice ${dice}`);

// 6. replace
// Merubah value yang match dengan parameter
let greet = 'Welcome to Indonesia';
greet = greet.replace('Indonesia', 'Uluwatu');
console.log(`6. ${greet}`);

// 7. Includes
// Jika dalam suatu variable terdapat potongan kata yang dicari, akan menghasilkan true
const name = 'Spain';
console.log(`7. includes: ${name.includes('pain')}`); //true

// 8. Map
// Mengakses dan melakukan operasi ke masing masing index dalam array
let arr = ['Jack', 'Jaqueline', 'Jason', 'Rahmat'];
const arrMap = arr.map(el => el += ' ehehehe');
console.log(`8. ${arrMap}`);

// 9. Some
// Memvalidasi jika beberapa index di array memenuhi kondisi yang diminta
let myFriendsAges = [18, 21, 23, 24, 26, 20];
const adult = (el) => el >= 18;
console.log(`9. ${myFriendsAges.every(adult)}`);

// 10. Every
// Memvalidasi jika seluruh index di array memenuhi kondisi yang diminta
console.log(`10. ${myFriendsAges.every(adult)}`);