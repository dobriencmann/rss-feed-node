const {XMLParser} = require('fast-xml-parser');

const xmlDataStr = `<root a="nice" checked><a>wow</a></root>`;

const RSS_URL = `https://rss.art19.com/apology-line`;

const options = {
  ignoreAttributes: false,
  attributeNamePrefix : "@_",
  allowBooleanAttributes: true
};

const parser = new XMLParser(options);
const output = parser.parse(xmlDataStr);

console.log(output);
