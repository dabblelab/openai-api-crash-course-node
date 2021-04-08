# Simple Search

Here is a super simple example of how to call the search endpoint usng Node.js/JavaScript. For details about the search endpoint [see the OpenAI Docs](https://beta.openai.com/docs/guides/search).


> **NOTE:** This tutorial is part of a series. If you have not read the [getting started post](https://community.openai.com/t/getting-started-with-the-openai-api-and-node-js-javascript/223/3) you should check that one out first.

## Steps

1. log in to [Replit.com](https://replit.com)
2. Open the `openai-examples-node` repl that you created in the [getting started](https://community.openai.com/t/getting-started-with-the-openai-api-and-node-js-javascript/223/3) tutorial.
3. Create a new file named `simple-search.js`
4. Copy the following code into the simple-search.js file.
```javascript
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

```
4. Update the `.replit` file with the following
```
language = "nodejs"
run = "node simple-search.js"
```
5. Review the results in the console pane. You should see a result similar to the following example.
```json
{
  object: 'list',
  data: [
    { object: 'search_result', document: 0, score: 57.427 },
    { object: 'search_result', document: 1, score: 46.697 },
    { object: 'search_result', document: 2, score: 93.986 },
    { object: 'search_result', document: 3, score: 179.054 }
  ],
  model: 'davinci:2020-05-03'
}

```

The `params` object contains an array of `documents` and a `query`. The search endpoint ranks the documents by how semantically similar they are to the query. The results contain an array of objects with a reference to each document (0 = the first document - `plane` in our example) and a score. The highest score for our example is document 3 (`car`) which makes sense because the query was `A vehicle with wheels`. 

Let me know if you have any questions!

