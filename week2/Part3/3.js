// const cekGanjil = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let isGanjil = num % 2;
//       if(isGanjil !== 0) {
//         resolve(num)
//       } else {
//         reject(new Error(`${num} bukan bilangan ganjil`))
//       }
//     }, 3000)
//   })
// }

// cekGanjil(5) 
//   .then((result) => { console.log(`${result} adalah ganjil`)})
//   .catch((error) => {console.log(error);})

function cek(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = num % 2;
      if(result !== 0) {
        resolve(`${num} adalah ganjil`)
      } else {
        reject(new Error(`${num} bukan bilangan ganjil`))
      }
    }, 3000)
  })
}

async function cekGanjil(num) {
  console.log(`checking ...`);
  const result = await cek(num);
  console.log(result);
}

cekGanjil(7)