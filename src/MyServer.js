console.log("my node runnnnnnnnnnnnnnnnnnn")
// var fs = require("fs");
// var express = require('express');
// let http = require("http");
// http.createServer(function (req, res) {
//     fs.readFile("." + req.url, (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.write(data +"");
//         res.end();
//     })
// }).listen(8080)  
var express = require('express');
var router = express.Router();

/* GET all pages. */
router.get('/page1', function(req, res, next) {
  res.render('page1');
});
/* GET all pages. */
router.get('/page2', function(req, res, next) {
  res.render('page2');
});

module.exports = router;
