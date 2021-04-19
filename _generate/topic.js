const yaml = require('js-yaml');
const fs = require('fs');
const { Liquid } = require('liquidjs')

const item = 3;

try {
  const data = yaml.load(fs.readFileSync(`_generate/topic.yaml`, 'utf8'));
  //console.log(data);
  const engine = new Liquid({
    root: __dirname,
    extname: '.liquid',
    globals: { title: data.title }
  })

  engine
    .renderFile('topic', data.topic[3])
    .then((result) => {

      const fs = require('fs');

      fs.writeFile(`topics/_${data.topic[item].slug}.md`, result, function(err) {
        if (err) throw err;
        console.log(result);
      });
    })
    .catch(err => console.error(err.stack))

} catch (e) {
  console.log(e);
}