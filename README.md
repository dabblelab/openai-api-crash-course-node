# Getting Started with the OpenAI API and Node.js/JavaScript

Here you'll find code examples and instructions for using Node.js/JavaScript with the OpenAI API. The examples are designed for anyone who is new to programming and/or new to Node.js. 

## Technical Requirements

- The code examples here require an OpenAI API Key. If you don't have access to the [OpenAI API](https://api.openai.com) yet, you can [get on the wait list here](https://share.hsforms.com/1Lfc7WtPLRk2ppXhPjcYY-A4sk30).
- A [Replit.com](https://replit.com) account. Replit.com let's you write, run, and share code with just a web browser. Replit.com is being used to make getting started as simple as possible. 
> NOTE: All of the code examples have only been tested on Replit.com. However, they should work in any properly configured Node.js development environment.

## Getting Started

To start from scratch in [Replit.com](https://replit.com) complete the following steps:

1. Create an account on [Replit.com](https://replit.com) if you don't have one already. The free account is all you need.
2. Create a new Node.js replit (projects are called *replits* on replit.com) and name it `openai-examples-node`.
3. Create a new file named `.env`. and add the following to it.
  ```
  OPENAI_API_KEY=replace_with_your_openai_api_key
  ```
> **IMPORTANT:** The `.env` file is private and is not visible to other users. This is important because your OpenAI API Key should never be shared. To learn more about the use of the .env file in replit.com [see the documentation](https://docs.replit.com/repls/secret-keys).

4. Create a new file named `index.js` and copy the following code into it.
  ```javascript
  const axios = require('axios');
  const apiKey = process.env.OPENAI_API_KEY;
  const client = axios.create({
      headers: { 'Authorization': 'Bearer ' + apiKey }
  });

  const params = {
    "prompt": "Once upon a time", 
    "max_tokens": 10
  }

  client.post('https://api.openai.com/v1/engines/davinci/completions', completionParmas)
    .then(result => {
      console.log(params.prompt + result.data.choices[0].text);
  }).catch(err => {
    console.log(err);
  });
  ```
5. Create or open a file named `.replit` and add or update it with the following.
  ```
  language = "nodejs"
  run = "node index.js"
  ```
  > **NOTE:** The `.replit` file is used to define what happens when the `Run` button is clicked in the Replit.com IDE. In this example we've set it to run the `index.js` file using node.
6. Click the 'Run' button in the replit.com IDE (on the top of the editor) and view the results.

The code in the file `index.js` calls the OpenAI [completions endpoint](https://beta.openai.com/docs/api-reference/completions) with the prompt `Once upon a time`. The response from the API will show up in the console pane of the Replit.com IDE.

That's it! You just coded your first Node.js app that calls the OpenAI API. This is a simple first example but stay tuned - more to come.

For qustions about this example or any getting started question you can post them in the [OpenAI Community Forum here](https://community.openai.com/t/getting-started-with-the-openai-api-and-node-js-javascript/223).