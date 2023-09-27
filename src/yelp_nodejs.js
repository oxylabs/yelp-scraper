import fetch from 'node-fetch';

const username = 'USERNAME';
const password = 'PASSWORD';
const body = {
 'source': 'universal_ecommerce',
 'url': 'https://www.yelp.co.uk/search?find_desc=Burgers&find_loc=Frankfurt,%20Hessen,%20Germany',
};
const response = await fetch('https://realtime.oxylabs.io/v1/queries', {
  method: 'post',
  body: JSON.stringify(body),
  headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
  }
});

console.log(await response.json());
