var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    res.writeHead(200);
    fs.createReadStream('./test.html').pipe(res);
}).listen(process.env.PORT||8081,function(){
    console.log("8081");
});