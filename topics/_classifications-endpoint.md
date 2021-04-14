# Classifications Endpoint

This example show how to call the classifications endpoint using using Node.js/JavaScript. For details about the classifications endpoint [see the OpenAI Docs](https://beta.openai.com/docs/api-reference/classifications).


> **NOTE:** This tutorial is part of a series. If you have not read the [getting started post](https://community.openai.com/t/getting-started-with-the-openai-api-and-node-js-javascript/223/3) you should check that one out first.

## Steps

1. log in to [Replit.com](https://replit.com)
2. Open the `openai-examples-node` repl that you created in the [getting started](https://community.openai.com/t/getting-started-with-the-openai-api-and-node-js-javascript/223/3) tutorial.
3. Create a new file named `classifications-endpoint.js`
4. Copy the following code into the classifications-endpoint.js file.
```javascript
const axios = require('axios');
const examples = [
                  ["The service was super quick. I love that.","Good"],
                  ["Would not go back.","Poor"],
                  ["I tried the chicken and cranberry pizza...mmmm!","Good"],
                  ["There were no signs indicating cash only!","Poor"],
                  ["I was disgusted. There was a hair in my food.","Poor"],
                  ["The waitress was a little slow but friendly.","Neutral"]
                ]

const client = axios.create({
  headers: {
    'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY
  }
});

const endpoint = "https://api.openai.com/v1/classifications";

const params = {
  "query": "I'm never going to this place again",
  "examples": examples,
  "model": "curie"
}

client.post(endpoint, params)
  .then(result => {
    console.log(params.query + '\nLABEL:' + result.data.label);
  }).catch(err => {
    console.log(err);
  });

```
4. Update the `.replit` file with the following
```
language = "nodejs"
run = "node classifications-endpoint.js"
```
5. Review the results in the console pane. You should see a result similar to the following example.
```json
I'm never going to this place again
LABEL:Poor

```

The `examples` array is being used for the example classifications. You can change the examples and labels in that array, along with the query to try different classifications. 

Let me know if you have any questions!

