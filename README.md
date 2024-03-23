[![Build Status](https://secure.travis-ci.org/MorganConrad/metalsmith-get-contentful.png)](http://travis-ci.org/MorganConrad/metalsmith-get-contentful)
[![License](http://img.shields.io/badge/license-MIT-A31F34.svg)](https://github.com/MorganConrad/yaml-y)

[![Known Vulnerabilities](https://snyk.io/test/github/morganconrad/yaml-y/badge.svg)](https://snyk.io/test/github/morganconrad/yaml-y)
[![Coverage Status](https://coveralls.io/repos/github/MorganConrad/yaml-y/badge.svg)](https://coveralls.io/github/MorganConrad/yaml-y)

# yaml-y

A tiny, _very partial implementation_ of a YAML parser.  Mainly intended for my own use, such as when parsing markdown file metadata.  If you want to parse complex YAML, use either

 - [YAML](https://www.npmjs.com/package/yaml) (107KB)
 - [js-yaml](https://www.npmjs.com/package/js-yaml)  (139KB)
 - [yaml-js](https://www.npmjs.com/package/yaml-js)  (**Abandoned**, 117KB)
 - or dont use YAML, it is arguably a poor choice for complex data.

See `test/testData.yaml` and `test/expected.json` for example inputs and outputs

yaml-y understands

 - boolean (`true` and `false`)
 - One dimensional arrays (not nested)
 - quoted or naked strings
   - there is no attempt to differentiate a number
 - empty lines
 - comment lines whose _first_ character is `#`

### Usage

```
import { parseYAML } from "yaml-y";

const yamlString = readFromAFile("myfile.yaml");

let object = parseYAML(yamlString, options);

```

### Options

  None yet, maybe some will be added later?

### Notes, Todos, and Caveats

It may throw an `Error` on input it doesn't understand.
