const seleksiNilai = (awal, akhir, nilai) => {  
  if(typeof awal != 'number' || typeof akhir != 'number' || nilai.length === 0) {
    return console.log(`Pastikan nilai, nilai awal dan nilai akhir terisi dengan benar`)
  } else if(awal > akhir) {
    return console.log(`Nilai akhir harus lebih besar dari nilai awal`);
  } else {
    let temp = []
    for(let i in nilai) {
      if(nilai[i] >= awal && nilai[i] <= akhir) {
        temp.push(nilai[i]);
      }
    }
    if(temp.length === 0) {
      return console.log(`Jumlah angka dalam array tidak ada`)
    } else {
      temp = temp.sort((a, b) => a - b);
      return console.log(temp);  
    }
  }
}

seleksiNilai(100, 200 , [19, 20, 1, 2, 4]);
// []
seleksiNilai(60, 99, [10, 20, 30, 60, 80, 50, 88, 69, 89, 100, 90, 72]);
// [60, 69, 72, 80, 88, 89, 90]
seleksiNilai(7, 10, [9, 8, 1, 2, 8, 5, 7, 9, 10]);
// [9, 8, 8, 7, 9, 10] => [7, 8, 8, 9, 9, 10]