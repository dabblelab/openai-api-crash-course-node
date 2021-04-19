# File Upload

This example show how to upload a jsonl file to the Files endpoint using using Node.js/JavaScript. For details about the files endpoint [see the OpenAI Docs](https://beta.openai.com/docs/api-reference/files).


> **NOTE:** This tutorial is part of a series. If you have not read the [getting started post](https://community.openai.com/t/getting-started-with-the-openai-api-and-node-js-javascript/223/3) you should check that one out first.

## Steps

1. log in to [Replit.com](https://replit.com)
2. Open the `openai-examples-node` repl that you created in the [getting started](https://community.openai.com/t/getting-started-with-the-openai-api-and-node-js-javascript/223/3) tutorial.
3. Create a new file named `file-upload.js`
4. Copy the following code into the file-upload.js file.
```javascript
// 1. Require a few libraries that will be used
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

// 2. Get the data file ready for the http post
const data = new FormData();
data.append('purpose', 'classifications');
data.append('file', fs.createReadStream('chapter09/reviews.jsonl'));

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

```
4. Update the `.replit` file with the following
```
language = "nodejs"
run = "node file-upload.js"
```
5. Review the results in the console pane. You should see a result similar to the following example.
```json
I'm never going to this place again
LABEL:Poor

```

The `examples` array is being used for the example classifications. You can change the examples and labels in that array, along with the query to try different classifications. 

Let me know if you have any questions!

