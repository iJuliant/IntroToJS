let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org"
}

// 1.
data = {
  ...data,
  name: "Iqbal Juliant",
  email: "iqbaljuliant@aol.com",
  hobbies: ["Programming", "Listening to Music"]
}

// 2.
const {street, city} = data.address;

console.log(`Street: ${street},
City: ${city}`)