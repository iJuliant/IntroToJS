const isPalindrome = (word) => {
  if(!word || typeof word !== 'string') {
    return `The input may be empty or contains no string. Please re-check it!`
  }
  let reversed = '';
  for(let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  if(reversed.toLowerCase() === word.toLowerCase()) {
    return `${word} is Palindrome`
  } else {
    return `${word} is not a Palindrome`
  }
}

console.log(isPalindrome('Jakarta'));
console.log(isPalindrome('Malam'));
console.log(isPalindrome('101'));
console.log(isPalindrome());