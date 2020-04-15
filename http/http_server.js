var http = require('http');

var server = http.createServer().listen(8124);

server.on('request', function(request, response) {

  console.log(request.headers, 'request header对象');

  console.log(request.headers.host, '请求头中的host');

  console.log(request.httpVersion, 'request的HTTP版本');

  console.log(request.method, 'HTTP请求方法');

  console.log(request.rawHeaders, '原始头部');
  
  console.log(request.rawTrailers, '原始尾部');

  response.writeHead(200, { 'Content-Type': 'text/plain' });

  response.end('Hello World!');
});

console.log('server listening on 8124');



