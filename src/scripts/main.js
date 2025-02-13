const express = require('express');
const path = require('path');
const app = express();
const indexPath = path.join(__dirname, '..', 'pages');

app.get("/", (req, res) => res.sendFile(indexPath + '/index.html'));
app.get("/about.html", (req, res) => res.sendFile(indexPath + '/about.html'));
app.get("/contact-me.html", (req, res) => res.sendFile(indexPath + '/contact-me.html'));
app.get("*", (req, res) => res.sendFile(indexPath + '/404.html'));

const PORT = 8080;
app.listen(PORT);
/*
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
   const q = url.parse(req.url, true);
   const indexPath = path.join(__dirname, '..', 'pages');
   const rs = fs.createReadStream(indexPath);

   if (q.pathname === "/index.html" || q.pathname === "") {
      fs.readFile(indexPath + '/index.html', function(err, data) {
         if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
         }
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);return res.end();
      });
   }
   else if (q.pathname === "/about.html") {
      fs.readFile(indexPath + '/about.html', function(err, data) {
         if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
         }
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);return res.end();
      });
   }
   else if (q.pathname === "/contact-me.html") {
      fs.readFile(indexPath + '/contact-me.html', function(err, data) {
         if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
         }
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);return res.end();
      });
   }
   else {
      fs.readFile(indexPath + '/404.html', function(err, data) {
         if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
         }
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);return res.end();
      });
   }

}).listen(8080, '172.31.55.95');
*/
