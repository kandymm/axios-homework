const axios = require('axios');

 async function getData(number){
  try {
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`);
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);
    console.log(user.data);
    console.log(posts.data[number-1]);
  } catch (e) {
    console.log(e);
  }
}

getData(1);