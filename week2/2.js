let names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bela", "Carol", 
  "Carolyn", "Deidre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"]

let searchName = (key, limit, callback) => {
  const isValid = callback(key, limit);
  if(!isValid) {
    return `Opps! You can only use string to define key & number to define limits.`
  } else {
    let temp = [];
    for(let i in names) {
      if(limit > temp.length) {
        if(names[i].toLowerCase().includes(key.toLowerCase(), 0)) {
          temp.push(names[i])
        }
      }
    }
    if(temp.length === 0) {
      return `Key '${key}' doesn't match with any data, try another key!`
    } else if(temp.length === 1) {
      return `There is '${temp}' mathces with key '${key}'`
    } else {
      return `There are '${temp} match with key '${key}'`
    }
  }
}

const validator = (key, limit) => {
  if(typeof key !== 'string' || typeof limit !== 'number') {
    return false;
  } else {
    return true;
  }
}

console.log(searchName('abi', 5, validator));
console.log(searchName('an', 3, validator));