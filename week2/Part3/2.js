const getMonth = (callback) => {
  setTimeout(() => {
    let isError = false;
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];
    if(!isError) {
      callback(null, month)
    } else {
      callback(new Error('Sorry, data not found!'))
    }
  }, 4000)
}

const showMonth = (error, data) => {
  if(!error) {
    data.map(el => console.log(el));
  } else {
    return console.log(error);
  }
}

getMonth(showMonth);