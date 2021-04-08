const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const params = {
  "documents": ["plane", "boat", "spaceship", "car"],
  "query": "A vehicle with wheels"
}

client.post('https://api.openai.com/v1/engines/davinci/search', params)
  .then(result => {
    console.log(result.data);
  }).catch(err => {
    console.log(err);
  });