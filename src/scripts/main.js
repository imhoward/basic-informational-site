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

}).listen(8080);