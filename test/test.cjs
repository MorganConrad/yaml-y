const test = require('tape');
const yamly = import('../yaml-y.js')

const fs = require('fs');

function readFile(name) {
  return fs.readFileSync(name, 'utf8').toString();
}


test('defaults', async function(t) {
  const input = readFile("./test/testData.yaml").trim();
  const expected = readFile("./test/expected.json").trim();

  const { parseYAML } = await yamly;

  let object = parseYAML(input);
  let actual = JSON.stringify(object, null, "  ");

  console.log(actual);


  t.equal(actual, expected)

  t.end();
});


