let mtk = 69;
let bahasaIndonesia = 70;
let bahasaInggris = 69;
let ipa = 69;

let isError = false;
const temp = [mtk, bahasaIndonesia, bahasaInggris, ipa];

for(let i = 0; i < temp.length; i++) {
  if(typeof temp[i] != 'number' || temp[i] < 0 || temp[i] > 100) {
    isError = true
  }
}

if(isError) {
  console.log(`Pastikan semua field terisi, dan bertipe data 'number' (1 - 100)`);
} else {
  let rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
  // rataRata = Math.ceil(rataRata);
  if(rataRata < 60) {
    console.log(`Rata-Rata: ${rataRata}, Grade: E`)
  } else if(rataRata < 70) {
    console.log(`Rata-Rata: ${rataRata}, Grade: D`)
  } else if(rataRata < 80) {
    console.log(`Rata-Rata: ${rataRata}, Grade: C`)
  } else if(rataRata < 90) {
    console.log(`Rata-Rata: ${rataRata}, Grade: B`)
  } else {
    console.log(`Rata-Rata: ${rataRata}, Grade: A`)
  }
}