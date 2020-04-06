var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  var name = require('url')
	      .parse(request.url, true)
	      .query
	      .name;

  if(name === undefined) name = 'world';

  if(name === 'burningbird') {
    var file = 'a.png';
    fs.stat(file, function(err, stat) {
      if(err){
	console.log(err);
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('The image is not exit');
      } else {
	var img = fs.readFileSync(file);
	response.contentType = 'image/png';
	response.contentLength = stat.size;
	response.end(img, 'binary');
      }
    });
  } else {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello ' + name + '!');
  }
}).listen(8214);

console.log('Server running at http://127.0.0.1:8214/');