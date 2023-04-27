const express = require("express");
const request = require("request");
const cheerio = require("cheerio");
const app = express();

app.get("/api", function (req, res) {
  var url = "https://www.screener.in/company/VENKEYS/";
  request(url, function (error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);
      var company = $(".flex-row").children("h1").text,
        pClose = [],
        currentPrice = [],
        change = [];
      currentPrice = $("span .number").eq(1).text();
      res.send(currentPrice);
    }
  });
});

app.listen("80");
console.log("Server Started... localhost:80");
