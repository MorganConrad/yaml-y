
/**
  Simple and LIMITED Yaml Parser

  Handles comments at start of lines, removes quotes, and [a,b,c] arrays

  Everything returned in a {},
  keys are strings
  values are strings or arrays of strings
*/

export function parseYAML(text, optionsIgnored = {}) {

  let lines = text.split('\n')
    .map(trim)
    .filter((l) => (l.length > 0) && (l[0] !== "#"));

  let result = lines.map(parseLine)
    .reduce(function(acc, [key, value]) {
       acc[key] = value;
       return acc;
     }, {});

  return result;
}


function parseLine(line) {
  let colon = line.indexOf(":");
  if (colon < 0)
    throw new Error('cannot parse the following: ' + line);
  let key = line.substring(0, colon).trim();
  let value = line.substring(colon + 1).trim();

  let entry = [ key,  parseValue(value) ];
  return entry;
}

function parseValue(value) {
  if (value === "true")
    return true;
  if (value === "false")
    return false;
  let str = trimEnds(value, '[', ']');
  return (str.length < value.length) ?  // was it an array?
    toArray(str) :
    deQuote(str);
}

function trim(str) { return str.trim(); }

function toArray(str) {
  return str.split(",").map(trim).map(parseValue);
}

function deQuote(str) {
  return trimEnds(str, '"', '"');
}

function trimEnds(str, startChar, endChar) {
  let len_1 = str.length - 1;
  if (len_1 <= 0)
    return str;
  if ((str[0] === startChar) && (str[len_1] === endChar))
    return str.substr(1, len_1-1)
  else
    return str;
}

