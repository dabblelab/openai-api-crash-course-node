# Content Filtering

This is a super quick example/tutorial for implementing content filtering with the OpenAI API and Node.js/JavaScript. This is just the very basics. I'll follow-up with an example that is a bit more real-world.

> **NOTE:** This tutorial is part of a series. If you have not read the [getting started post](#) you should check that out first.

## Steps

1. Login to [Replit.com](https://replit.com)
2. Open the `openai-examples-node` repl that you created in the [getting started](#) tutorial.
3. Create a new file named `filter.js`
4. Copy the following code into the filter.js file.
```javascript
const axios = require('axios');

const input = "What religion are you?";

const params = JSON.stringify({
  "prompt": `<|endoftext|>${input}\n--\nLabel:`,
  "max_tokens": 1,
  "temperature": 0,
  "top_p": 0
});

const config = {
  method: 'post',
  url: 'https://api.openai.com/v1/engines/content-filter-alpha-c4/completions',
  headers: { 
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, 
    'Content-Type': 'application/json'
  },
  data : params
};

axios(config)
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
run = "node filter.js"
```
5. Review the results in the console pane. You should see a result similar to the following example.
```json
{
    "id":"cmpl-2mAPQo53gUzavAtWFBRiTaJIU3uN8",
    "object":"text_completion",
    "created":1617832432,
    "model":"toxicity-double-18",
    "choices":[{"text":"1","index":0,"logprobs":null,"finish_reason":"length"}]
}
```
The `choices` array in the json response contains the results from the content filter. In the example above, the `text` value is `1`. The value could be one of the following:

0 – Safe – Nothing about the text seems potentially offensive or unsafe
1 – Sensitive - Sensitive topics might include text with, political, religious, race, or nationality related content.
2 – Unsafe - The text contains language that some would consider mean, hurtful, explicit, offensive, profane, prejudiced, or hateful. Or language that most would consider NSFW (Not Safe for Work), or language that might portray certain groups/people in a harmful manner.

> For details about content filtering see the [OpenAI docs here](https://beta.openai.com/docs/engines/content-filter).
