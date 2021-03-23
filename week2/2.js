let names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bela", "Carol", 
"Carolyn", "Deidre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"]

let searchName = function(key, limit, callback) {
  if(typeof key != 'string' || typeof limit != 'number') {
    return console.log(`Pastikan key dan limit terisi dengan benar`);
  } else {
    let temp = [];
    for(let i in names) {
      if(limit > temp.length) {
        if(names[i].toLowerCase().includes(key.toLowerCase(), 0)) {
          temp.push(names[i])
        }
      }
    }
    callback(key, temp);
    return temp;
  }
}

let showResult = function(key, result) {
  if(result.length === 0) {
    console.log(`Key '${key}' doesn't match with any data, Try another key!`);
  } else if(result.length === 1) {
    console.log(`Found 1 data, it is ${result}`);
  } else {
    console.log(`Found ${result.length} data, there are ${result}`);
  }
}


searchName('Rolyn', 3, showResult)