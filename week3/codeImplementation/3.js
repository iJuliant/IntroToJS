const arkfood = (harga, voucher, jarak, pajak) => {
  const isValid = validate(harga, voucher, jarak, pajak);
  if(!isValid) {
    return console.log(`Please complete all required parameters properly.`);
  } else {
    const discount = promotionCheck(harga, voucher);
    const fare = (Math.ceil(jarak) <= 2) ? 5000 : ((Math.ceil(jarak) - 2) * 3000) + 5000;
    const tax = pajak ? 0.05 * harga : 0;
    const messages = {
      voucher: `0 "You are not using any voucher, or the voucher you try to use is invalid."`,
      tax: `0 "The restaurant doesn't charge any tax"`
    }
    return console.log(`
      Price        : ${harga}
      Discount     : ${(discount === 0) ? messages.voucher : discount}
      Delivery fee : ${fare}
      Tax          : ${(tax === 0) ? messages.tax : tax}
      SubTotal     : ${harga - discount + fare + tax}
    `)
  }
}

const validate = (harga, voucher, jarak, pajak) => {
  if(!harga || !voucher || !jarak || typeof pajak !== 'boolean' || harga <= 0) {
    return false
  } else if(typeof harga !== 'number' || typeof voucher !== 'string' || typeof jarak !== 'number') {
    return false
  } else {
    return true
  }
}

const promotionCheck = (harga, voucher) => {
  if(voucher.toUpperCase() === 'ARKAFOOD5' && harga >= 50000) {
    const discount = (harga >= 100000) ? 50000 : harga - (harga * 0.5);
    return discount
  } else if(voucher.toUpperCase() === 'DITRAKTIRDEMY' && harga >= 25000) {
    const discount = (harga >= 75000) ? 30000 : harga - (harga * 0.6);
    return discount
  } else {
    return 0
  }
}

arkfood(75000, 'arkafood5', 5.1, true)
arkfood(75000, 'false', 1, false)