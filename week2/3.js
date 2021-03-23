const seleksiNilai = (awal, akhir, nilai) => {  
  if(typeof awal != 'number' || typeof akhir != 'number' || nilai.length === 0) {
    return console.log(`Pastikan nilai, nilai awal dan nilai akhir terisi dengan benar`)
  } else if(awal > akhir) {
    console.log(`Nilai akhir harus lebih besar dari nilai awal`);
  } else {
    let temp = []
    for(let i in nilai) {
      if(nilai[i] >= awal && nilai[i] <= akhir) {
        temp.push(nilai[i]);
      }
    }
    temp = temp.sort((a, b) => a - b);
    console.log(temp);
  }
}

seleksiNilai(20, 9 , [19, 20, 1, 2, 4])
// []
seleksiNilai(60, 99, [10, 20, 30, 60, 80, 50, 88, 69, 89, 100, 90, 72]);
// [60, 69, 72, 80, 88, 89, 90]