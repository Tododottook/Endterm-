var http = require('http');
var fs=require('fs');
function serveStaticFile(res, path, contentType, responseCode){
    if(!responseCode){ responseCode = 200; }

    fs.readFile(__dirname + path, function(err,data){
        if(err) {
            res.writeHead(500,{'Content-Type': 'text/plain'});
            res.end("500 - Internal Error");
        } else {
            res.writeHead(responseCode,{'Content-Type': contentType});
            res.end(data);
        }
    })
}

http.createServer(function(req,res){
    var path=req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();

    switch(path){
        case '':
            serveStaticFile(res,'/index.html','text/html');
            break;
        case '/style.css':
            serveStaticFile(res, '/style.css', 'text/css');
            break;    
        case '/pictureweb/welcome.jpg':
            serveStaticFile(res,'/pictureweb/welcome.jpg','image/jpeg');
            break;
        case '/about':
            serveStaticFile(res,'/about.html','text/html');
            break;
        case '/pictureweb/about.jpg':
            serveStaticFile(res,'/pictureweb/about.jpg','image/jpeg');
            break;
        case '/pictureweb/memes.mp4':
            serveStaticFile(res,'/pictureweb/memes.mp4','video/mp4');
            break;
        case '/pictureweb/cry.jpg':
            serveStaticFile(res,'/pictureweb/cry.jpg','image/jpeg');
            break;
        default:
            serveStaticFile(res,'/error.html','text/html', 404);
            break;   
    }
})
    .listen(3000, () => console.log('Server started on localhost:3000; press Ctrl+C to terminate'));

    