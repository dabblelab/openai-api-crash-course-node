# File Upload

This example show how to upload a jsonl file to the Files endpoint using using Node.js/JavaScript. This example is posting a file for the `classifications` endpoint. You can change the file `purpose` in step 2 of the code below. The purpose can be, `search`, `answers`, or `classifications`. See the [see the OpenAI Docs](https://beta.openai.com/docs/api-reference/files) for details.

For the example code to work, you'll also need to create a file named `reviews.jsonl` and add data for the classifications endpoint. Here is some sample data you can use for testing.

```
{"text": "i love this place", "label": "Good", "metadata": {"id":"1"}}
{"text": "i hate this place", "label": "Poor", "metadata": {"id":"2"}}
{"text": "i have no opinion", "label": "Neutral", "metadata": {"id":"3"}}
```


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

```
4. Update the `.replit` file with the following
```
language = "nodejs"
run = "node file-upload.js"
```
5. Review the results in the console pane. You should see a result similar to the following example.
```json
{"id":"file-ZMHNItHRzrkYbIf19mutOvlR","object":"file","bytes":215,"created_at":1618832808,"filename":"reviews.jsonl","purpose":"classifications","status":"uploaded","status_details":null}

```

The `id` value is what you'll need from the response to use the file with the search, classifications, or answers endpoint. 

Let me know if you have any questions!

