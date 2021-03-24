let names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bela", "Carol", 
  "Carolyn", "Deidre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

let simpler = (key, limit, callback) => {
  let isValid = callback(key, limit);
  if(isValid) {
    let match = names.filter((el, i) => el.toLowerCase().includes(key.toLowerCase()));
    match = match.slice(0, limit)
    if(match.length === 0) {
      return `There's no data matches with key '${key}'`
    } else if(match.length === 1) {
      return `There's '${match}', matches with key '${key}'`
    } else {
      return `There are '${match}', match with key '${key}'`
    }
  } else {
    return `Key can only contains string, and limit can only contains number`;
  }
}

const validator = (key, limit) => {
  if(typeof key !== 'string' || typeof limit !== 'number') {
    return false;
  } else {
    return true;
  }
}

console.log(simpler('an', 3, validator));