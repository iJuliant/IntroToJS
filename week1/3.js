let printSegitiga = 8;
let line = ''

if(!printSegitiga || typeof printSegitiga != 'number' || printSegitiga <= 1) {
  console.log(`Data harus number, dan lebih dari 1`);
} else {
  while (printSegitiga > 0) {
    for(let i = 1; i <= printSegitiga; i++) {
      line += i;
    }
    console.log(+line);
    line = ''
    printSegitiga--
  }
}