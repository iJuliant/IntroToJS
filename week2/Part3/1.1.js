const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
      let cek = dataDay.find(el => el === day.toLowerCase());
      if(cek) {
        resolve(cek)
      } else {
        reject(new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}

cekHariKerja('rabu')  
.then((result) => { console.log(`Ditemukan ${result} sebagai hari kerja`)})
.catch((error) => { console.log(error)})

/**
 * cekHariKerja melempar parameter 'rabu'
 * terdapat variable cek yang bernilai hasil dari pengecekan menggunakan find
 * jika 'cek' bernilai truthy, maka proses selanjutnya adalah resolve yang dilanjutkan di proses 'then'
 * jika 'cek' bernilai falsy, maka proses selanjutnya adalah reject yang dilanjutkan di proses catch
 */