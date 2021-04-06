# Getting Started with the OpenAI API and Node.js/JavaScript

Here you'll find code examples and instructions for using Node.js/JavaScript with the OpenAI API. The goal is to turn this into a crash course on the topic but for now it's just a few quick examples.

## What you need

- The code examples here require an OpenAI API Key. You can [request access to the OpenAI API](#) if you don't have one.

## The most basic code examples

The code in the file [index.js](./index.js) calls the OpenAI [completions endpoint](https://beta.openai.com/docs/api-reference/completions). To make the code work you'll need to add a file named `.env` and add the following.

```
OPENAI_API_KEY=replace_with_your_openai_api_key
```

Then you can click the run button to see an optput in the console. This is the completion text that was returned by the API. This is a simple first example but stay tuned - more to come.

For qustions about this example or any getting started question you can post them in the [OpenAI Community Forum here](https://community.openai.com/t/getting-started-with-the-openai-api-and-node-js-javascript/223).