const reverse = (word) => {
  if(!word || typeof word !== 'string') {
    return `The input may be empty or contains no string. Please re-check it!`
  } else {
    let reversed = '';
    for(let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }
    return reversed;
  }
}

console.log(reverse('Jakarta'));
console.log(reverse('Mesin tempur'));