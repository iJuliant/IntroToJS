const seleksiNilai = (awal, akhir, nilai) => {  
  if(typeof awal != 'number' || typeof akhir != 'number' || nilai.length === 0) {
    return console.log(`Pastikan nilai, nilai awal dan nilai akhir terisi dengan benar`)
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

seleksiNilai(1, 20 , [])
seleksiNilai(70, 80, [10, 20, 30, 60, 80, 50, 88, 69, 89, 100, 90, 72]);