const got = require("got");
const parser = require("fast-xml-parser");

(async function main() {
  const buffer = await got("https://hacks.mozilla.org/feed/", {
    responseType: "buffer",
    resolveBodyOnly: true,
    timeout: 5000,
    retry: 5,
  });
  var feed = parser.parse(buffer.toString());
  for (const item of feed.rss.channel.item) {
    console.log({ title: item.title, url: item.link });
    break;
  }
})();