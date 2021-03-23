let names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bela", "Carol", 
  "Carolyn", "Deidre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"]

let searchName = (key, limit, callback) => {
  const isValid = callback(key, limit);
  if(isValid) {
    let temp = [];
    for(let i in names) {
      if(limit > temp.length) {
        if(names[i].toLowerCase().includes(key.toLowerCase(), 0)) {
          temp.push(names[i])
        }
      }
    }
    return temp;
  }
}

const validator = (key, limit) => {
  if(typeof key !== 'string' || typeof limit !== 'number') {
    return false;
  } else {
    return true;
  }
}

console.log(searchName('ab', 3, validator));
