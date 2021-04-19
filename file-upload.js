// 1. Require a few libraries that will be used
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

// 2. Get the data file ready for the http post
const data = new FormData();
data.append('purpose', 'classifications');
data.append('file', fs.createReadStream('reviews.jsonl'));

// 3. Set http request parameters for axios
const params = {
  method: 'post',
  url: 'https://api.openai.com/v1/files',
  headers: { 
    'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY, 
    ...data.getHeaders()
  },
  data : data
};

// 4. Call the openai api and log results to the console
axios(params)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
