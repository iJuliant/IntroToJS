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

// cekGanjil(2) 
//   .then((result) => { console.log(`${result} adalah ganjil`)})
//   .catch((error) => {console.log(error);})

const emailVerificator = (email, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let idxat;
      let idxdot;
      for(i in email) {
        if(email[i] === '@') {
          idxat = i;
        } else if(email[i] === '.') {
          idxdot = i;
        }
      }
      let provider = callback(email, idxat, idxdot);
      if(idxat && idxdot) {
        resolve(`Ini adalah email dari ${provider}`)        
      } else {
        reject(new Error(`Ini bukan email`))
      }
    }, 3000)
  })
}

const providerCheck = (email, at, dot) => {
  let provider = email.substring(at, dot)
  return provider;
} 

emailVerificator('dubois@rocketmail.com', providerCheck) 
  .then((result) => { console.log(result)})
  .catch((error) => { console.log(error);})
