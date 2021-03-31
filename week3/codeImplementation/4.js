const divideAndSort = (num) => {
  num = num.toString().split(0);
  let result = '';
  for(let i in num) {
    let temp = [];
    for(let j in num[i]) {
      temp.push(num[i][j]);
    }
    temp = temp.sort();
    for(let i in temp) {
      result += temp[i];
    }
  }
  return console.log(result);
}

divideAndSort(5956560159466056);