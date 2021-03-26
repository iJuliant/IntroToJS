function cek(day) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
      let cek = dataDay.find(el => el === day.toLowerCase());
        if(cek) {
          resolve(`${day} adalah hari kerja`)
        } else {
          reject(new Error(`${day} bukan hari kerja`))
        }
    }, 3000)
  })
}

async function call(day) {
  console.log(`checking ...`);
  const result = await cek(day);
  console.log(result);
}

call('senin')